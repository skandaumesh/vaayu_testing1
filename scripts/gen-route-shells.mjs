// Prerenders a static HTML shell for every route in the app.
//
// Why this exists: the site is a client-rendered SPA, so Apache serves the same
// dist/index.html for every path. That file carries the homepage's <title> and,
// critically, <link rel="canonical" href="https://vaayuchest.com/">. Roughly
// fifty service, condition and doctor pages were therefore telling Google they
// were duplicates of the homepage, and crawlers that don't run JavaScript
// (GPTBot, ClaudeBot, PerplexityBot, link-preview bots, first-pass indexing)
// saw one page repeated fifty times.
//
// Each generated shell is a copy of dist/index.html with the correct title,
// description, canonical, Open Graph/Twitter tags and JSON-LD baked into the
// <head>, plus a crawler-readable summary inside #root. React replaces that
// summary the moment it mounts, so real browsers are unaffected.
//
// Routes and metadata both come from single sources of truth (src/App.jsx and
// src/seo/routeMeta.js) so this cannot drift out of sync with the app.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { BASE, BRAND, META, CUSTOM_PRERENDER, slugToTitle } from "../src/seo/routeMeta.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");

const CLINIC_ID = `${BASE}/#clinic`;
const OG_IMG = `${BASE}/og-image.jpg`;
const PHONE = "+91 63649 28680";
const EMAIL = "admin@vaayuchest.com";
const ADDRESS =
  "Ground &amp; 3rd Floor, 37/17, 10th Main Road, 5th Block, Jayanagar, Bengaluru 560041, Karnataka, India";

// Mirrors the primary navigation rendered by Navbar.jsx. Descriptive labels
// rather than bare section names, since the anchor text is what tells a
// crawler and an AI model what the destination is about.
const MAIN_NAV = [
  ["/", "Vaayu Chest & Sleep Specialists, Bengaluru"],
  ["/specialty-clinic", "Specialty chest clinics: asthma, COPD, ILD"],
  ["/sleep-clinic", "Sleep clinic: sleep apnea, snoring, insomnia"],
  ["/pulmonary-rehab", "Pulmonary and cardiac rehabilitation"],
  ["/allergy-immunology", "Allergy and immunology"],
  ["/preventive-clinics", "Preventive lung health checks"],
  ["/voric", "VORIC: impact of air pollution on traffic police in Bengaluru"],
  ["/social-impact", "Social impact and community screening"],
  ["/resources/publications", "Research and publications"],
  ["/media-spotlight", "Media coverage"],
  ["/about", "About Vaayu"],
  ["/contact", "Contact and appointments"],
];

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Safe to embed inside <script type="application/ld+json">
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

// ---------------------------------------------------------------------------
// Routes, read straight out of the router so the two can never disagree.
// ---------------------------------------------------------------------------
const appSrc = readFileSync(join(root, "src", "App.jsx"), "utf8");
const routes = [
  ...new Set(
    [...appSrc.matchAll(/<Route\s+path="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((p) => p !== "*" && p !== "/")
      .map((p) => "/" + p.replace(/^\/+|\/+$/g, "").toLowerCase())
  ),
].sort();

// ---------------------------------------------------------------------------
// Human-readable label for a path segment, preferring the curated title.
// ---------------------------------------------------------------------------
const stripBrand = (title) => title.split("|")[0].trim();

const labelFor = (path) => {
  const m = META[path];
  return m ? stripBrand(m.t) : slugToTitle(path);
};

const breadcrumbsFor = (path) => {
  const parts = path.split("/").filter(Boolean);
  const crumbs = [{ url: `${BASE}/`, label: "Home" }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    crumbs.push({ url: `${BASE}${acc}`, label: labelFor(acc) });
  }
  return crumbs;
};

// Child routes, used to give crawlers real internal links to follow.
const childrenOf = (path) =>
  routes.filter((r) => r.startsWith(`${path}/`) && r.split("/").length === path.split("/").length + 1);

// ---------------------------------------------------------------------------
// Doctor profiles carry Physician schema. Only facts already published on the
// site are asserted here; nothing is inferred or embellished.
// ---------------------------------------------------------------------------
const PHYSICIAN_SPECIALTY = {
  "/doctors/dr-ravindra-mehta": "Pulmonary",
  "/doctors/dr-sameer-bansal": "Pulmonary",
};

const physicianNode = (path, title, description) => {
  const name = stripBrand(title).split(/\s*\|\s*/)[0].replace(/,.*$/, "").trim();
  const node = {
    "@type": "Physician",
    "@id": `${BASE}${path}#physician`,
    name,
    url: `${BASE}${path}`,
    description,
    worksFor: { "@id": CLINIC_ID },
    memberOf: { "@id": CLINIC_ID },
    areaServed: { "@type": "City", name: "Bengaluru" },
  };
  if (PHYSICIAN_SPECIALTY[path]) node.medicalSpecialty = PHYSICIAN_SPECIALTY[path];
  return node;
};

// Clinical sections get MedicalWebPage rather than plain WebPage.
const CLINICAL_PREFIXES = [
  "/specialty-clinic",
  "/sleep-clinic",
  "/pulmonary-rehab",
  "/allergy-immunology",
  "/preventive-clinics",
  "/patient-resources",
  "/home-care",
  "/rehab-wellness",
  "/general-opd",
];
const isClinical = (path) => CLINICAL_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`));

// ---------------------------------------------------------------------------
// Build one shell.
// ---------------------------------------------------------------------------
const buildShell = (path) => {
  const meta = META[path];
  const title = meta ? meta.t : `${slugToTitle(path)} | ${BRAND}`;
  const description = meta
    ? meta.d
    : `${slugToTitle(path)} at Vaayu Chest & Sleep Specialists, Bengaluru. Respiratory, sleep and rehabilitation care.`;
  const url = `${BASE}${path}`;
  const heading = stripBrand(title);
  const crumbs = breadcrumbsFor(path);
  const isDoctor = path.startsWith("/doctors/");

  const graph = [
    {
      "@type": isClinical(path) ? "MedicalWebPage" : "WebPage",
      "@id": `${url}#page`,
      name: title,
      description,
      url,
      inLanguage: "en-IN",
      isPartOf: { "@id": CLINIC_ID },
      publisher: { "@id": CLINIC_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      ...(isDoctor ? { mainEntity: { "@id": `${url}#physician` } } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: c.url,
      })),
    },
  ];
  if (isDoctor) graph.push(physicianNode(path, title, description));

  const schema = { "@context": "https://schema.org", "@graph": graph };

  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${esc(description)}$2`
  );
  html = html
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(
      /(<meta\s+property="og:description"[\s\S]*?content=")[^"]*(")/,
      `$1${esc(description)}$2`
    )
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${OG_IMG}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1website$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  html = html.replace(
    "</head>",
    `
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${OG_IMG}" />
    <script type="application/ld+json">${jsonLd(schema)}</script>
  </head>`
  );

  // Crawler-readable summary. Deliberately limited to facts the site already
  // publishes: the curated title and description, the breadcrumb trail, links
  // to child pages, and the clinic's contact details. No clinical claims are
  // generated here.
  const kids = childrenOf(path);
  const childList = kids.length
    ? `  <h2>In this section</h2>
  <ul>
${kids.map((k) => `    <li><a href="${BASE}${k}">${esc(labelFor(k))}</a></li>`).join("\n")}
  </ul>
`
    : "";

  const trail = crumbs
    .map((c, i) => (i === crumbs.length - 1 ? esc(c.label) : `<a href="${c.url}">${esc(c.label)}</a>`))
    .join(" &rsaquo; ");

  // The site's main navigation, mirrored into the crawler summary. The real
  // page renders this nav via JavaScript, so without it the served HTML has
  // no internal links at all and non-rendering crawlers cannot walk the site.
  // This is parity with what a browser sees, not extra linking.
  const siteNav = MAIN_NAV.filter(([href]) => href !== path)
    .map(([href, label]) => `<li><a href="${BASE}${href}">${esc(label)}</a></li>`)
    .join("\n    ");

  const summary = `<div id="root"><main style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">
  <nav>${trail}</nav>
  <h1>${esc(heading)}</h1>
  <p>${esc(description)}</p>
${childList}  <h2>Vaayu Chest &amp; Sleep Specialists</h2>
  <p>${ADDRESS}. Telephone ${PHONE}. Email ${EMAIL}.</p>
  <p><a href="${BASE}/appointment">Book an appointment</a> &middot; <a href="${BASE}/contact">Contact us</a> &middot; <a href="${BASE}/doctors/dr-ravindra-mehta">Our specialists</a></p>
  <h2>Explore Vaayu</h2>
  <ul>
    ${siteNav}
  </ul>
</main></div>`;

  html = html.replace(/<div id="root">\s*<\/div>/, summary);
  return html;
};

// ---------------------------------------------------------------------------
// Write shells.
// ---------------------------------------------------------------------------
let written = 0;
const generated = [];

for (const path of routes) {
  if (CUSTOM_PRERENDER.includes(path)) continue; // richer bespoke prerender already exists
  const out = join(dist, `${path.slice(1)}.html`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buildShell(path));
  generated.push(path);
  written++;
}

console.log(`generated ${written} route shells`);

// ---------------------------------------------------------------------------
// Homepage. Vite emits dist/index.html with an empty #root, so the site's most
// authoritative page shipped no readable content and no outbound links at all.
// It is rewritten last, after the template has already been read into memory.
// ---------------------------------------------------------------------------
const homeMeta = META["/"];
const homeNav = MAIN_NAV.filter(([href]) => href !== "/")
  .map(([href, label]) => `    <li><a href="${BASE}${href}">${esc(label)}</a></li>`)
  .join("\n");

const homeSummary = `<div id="root"><main style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">
  <h1>Vaayu Chest &amp; Sleep Specialists, Bengaluru</h1>
  <p>${esc(homeMeta.d)}</p>
  <h2>Our clinics and services</h2>
  <ul>
${homeNav}
  </ul>
  <h2>Visit us</h2>
  <p>${ADDRESS}. Telephone ${PHONE}. Email ${EMAIL}.</p>
  <p><a href="${BASE}/appointment">Book an appointment</a> &middot; <a href="${BASE}/contact">Contact us</a></p>
</main></div>`;

const home = template.replace(/<div id="root">\s*<\/div>/, homeSummary);
writeFileSync(join(dist, "index.html"), home);
console.log("rewrote dist/index.html with a crawler-readable summary");

// ---------------------------------------------------------------------------
// 404 page. Apache serves this with a real 404 status for unknown paths, so the
// site stops answering 200 for every URL that has ever been guessed at.
// ---------------------------------------------------------------------------
const notFound = template
  .replace(/<title>[\s\S]*?<\/title>/, `<title>Page not found | ${esc(BRAND)}</title>`)
  .replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1Page not found. Browse respiratory, sleep and rehabilitation care at Vaayu Chest &amp; Sleep Specialists, Bengaluru.$2`
  )
  .replace("</head>", `    <meta name="robots" content="noindex,follow" />\n  </head>`)
  .replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root"><main style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">
  <h1>Page not found</h1>
  <p>The page you asked for does not exist. <a href="${BASE}/">Go to the homepage</a> or <a href="${BASE}/contact">contact Vaayu Chest &amp; Sleep Specialists</a>.</p>
</main></div>`
  );
writeFileSync(join(dist, "404.html"), notFound);
console.log("generated dist/404.html");

// ---------------------------------------------------------------------------
// Sitemap, generated from the same route list. Previously hand-maintained,
// which had let it drift: eight listed URLs had no route at all, while every
// doctor profile was missing.
// ---------------------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const priorityFor = (path) => {
  if (path.startsWith("/doctors/")) return "0.8";
  const depth = path.split("/").filter(Boolean).length;
  if (path === "/appointment" || path === "/contact") return "0.9";
  return depth === 1 ? "0.8" : depth === 2 ? "0.7" : "0.6";
};

const urls = ["/", ...routes];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (p) => `  <url>
    <loc>${BASE}${p === "/" ? "/" : p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p === "/" ? "1.0" : priorityFor(p)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
console.log(`generated dist/sitemap.xml with ${urls.length} URLs`);
