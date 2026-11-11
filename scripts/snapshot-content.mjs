// Fills each prerendered shell with the page's real, rendered text.
//
// Why: the site is a client-rendered SPA. Google renders JavaScript, but AI
// crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) and link-preview
// bots do not. gen-route-shells.mjs gives every route a correct <head> and a
// one-sentence summary; this step replaces the <!--page-content--> marker in
// that summary with the headings, paragraphs, lists, links and image alt text
// a browser actually shows, so non-rendering crawlers can read the whole page.
//
// It is a mirror of the visible page, not extra content: the text is taken
// from the rendered DOM of the same build.
//
// Runs last in `npm run build`. Needs a local Chrome or Edge; if neither is
// found it warns and exits 0, leaving the one-sentence shells in place.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join, extname, relative, sep } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const BASE = "https://vaayuchest.com";
const MARKER = "<!--page-content-->";
const MAX_BYTES = 60_000;
const CONCURRENCY = 4;

const BROWSERS = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const skip = (why) => {
  console.warn(`snapshot-content: skipped (${why}). Shells keep their one-sentence summary.`);
  process.exit(0);
};

const executablePath = BROWSERS.find((p) => existsSync(p));
if (!executablePath) skip("no Chrome or Edge found; set CHROME_PATH");

let puppeteer;
try {
  puppeteer = (await import("puppeteer-core")).default;
} catch {
  skip("puppeteer-core is not installed");
}

// ---------------------------------------------------------------------------
// Shells that carry the marker, mapped back to their route.
// ---------------------------------------------------------------------------
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return name === "assets" ? [] : walk(full);
    return name.endsWith(".html") ? [full] : [];
  });

const targets = walk(dist)
  .filter((file) => readFileSync(file, "utf8").includes(MARKER))
  .map((file) => {
    const rel = relative(dist, file).split(sep).join("/").replace(/\.html$/, "");
    return { file, route: rel === "index" ? "/" : `/${rel}` };
  });

if (!targets.length) skip("no shells carry the content marker");

// ---------------------------------------------------------------------------
// Static server over dist with SPA fallback. Every route gets the built app
// (index.html), exactly as a browser would after the Apache rewrite.
// ---------------------------------------------------------------------------
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".avif": "image/avif", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff",
  ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml", ".pdf": "application/pdf",
};
const indexHtml = readFileSync(join(dist, "index.html"));
const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = join(dist, path);
  if (extname(path) && file.startsWith(dist) && existsSync(file) && statSync(file).isFile()) {
    res.writeHead(200, { "Content-Type": MIME[extname(path).toLowerCase()] || "application/octet-stream" });
    res.end(readFileSync(file));
  } else if (extname(path)) {
    res.writeHead(404);
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(indexHtml);
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

// ---------------------------------------------------------------------------
// Runs in the page: serialise <main> to a small, clean HTML fragment.
// ---------------------------------------------------------------------------
const extract = (BASE) => {
  const main = document.querySelector("main");
  if (!main) return "";
  const DROP = new Set(["SCRIPT", "STYLE", "SVG", "NOSCRIPT", "IFRAME", "FORM", "INPUT", "SELECT",
    "TEXTAREA", "BUTTON", "VIDEO", "AUDIO", "CANVAS", "TEMPLATE", "LABEL"]);
  const BLOCK = new Set(["H2", "H3", "H4", "H5", "H6", "P", "UL", "OL", "LI", "BLOCKQUOTE",
    "FIGCAPTION", "TABLE", "THEAD", "TBODY", "TR", "TD", "TH", "DL", "DT", "DD"]);
  const INLINE = new Set(["STRONG", "B", "EM", "I"]);
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const attr = (s) => esc(s).replace(/"/g, "&quot;");
  const abs = (href) => {
    try {
      const u = new URL(href, location.href);
      if (!/^https?:$/.test(u.protocol)) return null;
      return u.origin === location.origin ? BASE + u.pathname.replace(/\/+$/, "") + u.hash : u.href;
    } catch {
      return null;
    }
  };
  const hidden = (el) =>
    el.getAttribute("aria-hidden") === "true" ||
    el.getAttribute("role") === "dialog" ||
    el.classList.contains("slick-cloned") ||
    el.classList.contains("swiper-slide-duplicate") ||
    getComputedStyle(el).display === "none";

  const ser = (node) => {
    if (node.nodeType === 3) return esc(node.nodeValue.replace(/\s+/g, " "));
    if (node.nodeType !== 1) return "";
    const tag = node.tagName.toUpperCase();
    if (DROP.has(tag) || hidden(node)) return "";
    if (tag === "IMG") {
      const alt = (node.getAttribute("alt") || "").trim();
      const src = node.currentSrc || node.src;
      if (!alt || !src || src.startsWith("data:")) return "";
      const u = abs(src);
      return u ? `<img src="${attr(u)}" alt="${attr(alt)}" loading="lazy" />` : "";
    }
    if (tag === "BR") return " ";
    const inner = Array.from(node.childNodes).map(ser).join("");
    if (!inner.trim()) return "";
    if (tag === "A") {
      const u = node.getAttribute("href") ? abs(node.getAttribute("href")) : null;
      return u ? `<a href="${attr(u)}">${inner.trim()}</a>` : inner;
    }
    if (tag === "H1") return `\n<h2>${inner.trim()}</h2>`; // the shell already has the page's <h1>
    if (BLOCK.has(tag)) return `\n<${tag.toLowerCase()}>${inner.trim()}</${tag.toLowerCase()}>`;
    if (INLINE.has(tag)) return `<${tag.toLowerCase()}>${inner}</${tag.toLowerCase()}>`;
    // Generic container. If it holds loose text of its own, make it a paragraph
    // so separate cards do not run together into one line.
    const hasOwnText = Array.from(node.childNodes).some((n) => n.nodeType === 3 && n.nodeValue.trim());
    const display = getComputedStyle(node).display;
    if (hasOwnText && display !== "inline" && !/<(p|h\d|ul|ol|li|table|blockquote)\b/.test(inner))
      return `\n<p>${inner.trim()}</p>`;
    return display === "inline" ? inner : ` ${inner} `;
  };

  return ser(main)
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .replace(/>\s+</g, ">\n<")
    .trim();
};

// ---------------------------------------------------------------------------
// Visit each route and write the result into its shell.
// ---------------------------------------------------------------------------
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--no-sandbox"] });
let done = 0;
let failed = 0;

const snap = async ({ file, route }) => {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 900 });
    // Nothing leaves the machine: no analytics hits, no third-party calls.
    await page.setRequestInterception(true);
    page.on("request", (req) => (req.url().startsWith(origin) ? req.continue() : req.abort()));
    await page.goto(origin + route, { waitUntil: "networkidle2", timeout: 45_000 });
    await page
      .waitForFunction(() => (document.querySelector("main")?.innerText || "").trim().length > 200, { timeout: 10_000 })
      .catch(() => {});
    await new Promise((r) => setTimeout(r, 400));
    let html = await page.evaluate(extract, BASE);
    if (Buffer.byteLength(html) > MAX_BYTES) {
      html = html.slice(0, MAX_BYTES);
      html = html.slice(0, html.lastIndexOf("\n"));
    }
    if (html.length < 80) throw new Error("page rendered no readable content");
    const shell = readFileSync(file, "utf8");
    writeFileSync(file, shell.replace(MARKER, () => `<h2>On this page</h2>\n${html}\n`));
    done++;
  } catch (e) {
    failed++;
    console.warn(`snapshot-content: ${route} left as summary only (${e.message})`);
    const shell = readFileSync(file, "utf8");
    writeFileSync(file, shell.replace(MARKER, ""));
  } finally {
    await page.close();
  }
};

const queue = [...targets];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await snap(queue.shift());
  })
);

await browser.close();
server.close();
console.log(`snapshot-content: wrote page text into ${done} shells${failed ? `, ${failed} left as summary` : ""}`);
