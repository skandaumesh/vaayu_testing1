// Generates dist/revive-2026.html — a copy of the built index.html whose
// <head> carries REVIVE 2026 title/description/OG tags and JSON-LD, plus a
// <noscript>/static summary for crawlers that don't execute JavaScript
// (WhatsApp/Facebook link previews, GPTBot, ClaudeBot, PerplexityBot, etc.).
// Served for /revive-2026 requests via an .htaccess rewrite; React still
// mounts and renders the real page for browsers.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distIndex = join(root, "dist", "index.html");

const BASE = "https://vaayuchest.com";
const TITLE =
  "REVIVE 2026 – Reimagining Pulmonary & Cardiac Rehabilitation | 23 Aug 2026, Hyatt Centric Hebbal Bengaluru";
const DESC =
  "REVIVE 2026, the Conclave of Pulmonary & Cardiac Rehabilitation by Vaayu Chest & Sleep Specialists — 23 August 2026 at Hyatt Centric Hebbal, Bengaluru. Hands-on workshops, international faculty and pre-conference scientific paper presentations. Register now.";
const OG_IMG = `${BASE}/revive-2026-og.jpg`;
const URL = `${BASE}/revive-2026`;
const REGISTER = "https://forms.gle/VpHGZ17V5tZDi9fF6";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "REVIVE 2026 — Conclave of Pulmonary & Cardiac Rehabilitation",
  description: DESC,
  startDate: "2026-08-23T08:45:00+05:30",
  endDate: "2026-08-23T18:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: URL,
  image: [OG_IMG],
  performer: [
    { "@type": "Person", name: "Dr. Ganesh Raghu" },
    { "@type": "Person", name: "Dr. Sally Singh" },
    { "@type": "Person", name: "Dr. Rik Gosselink" },
    { "@type": "Person", name: "Dr. Waqar M. Naqvi" },
    { "@type": "Person", name: "Dr. Barry A. Franklin" },
    { "@type": "Person", name: "Dr. Veena Kiran Nambiar" },
    { "@type": "Person", name: "Dr. Shaswat Verma" },
    { "@type": "Person", name: "Dr. Mariya Jiandani" },
    { "@type": "Person", name: "Dr. Sameer Bansal" },
    { "@type": "Person", name: "Dr. Yogita Hatmode" },
    { "@type": "Person", name: "Dr. R. Dhilip Kumar" },
    { "@type": "Person", name: "Dr. Shraddha S" },
  ],
  location: {
    "@type": "Place",
    name: "Hyatt Centric Hebbal Bengaluru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hebbal",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "MedicalOrganization",
    name: "Vaayu Chest & Sleep Specialists",
    url: BASE,
    telephone: "+91 63649 28680",
    email: "admin@vaayuchest.com",
  },
  // NOTE: re-add "offers" with price + priceCurrency once registration fees
  // are confirmed — enables the ticket price in Google's event snippet
};

let html = readFileSync(distIndex, "utf8");

// Replace title
html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${TITLE}</title>`);

// Replace meta description
html = html.replace(
  /(<meta\s+name="description"\s+content=")[^"]*(")/,
  `$1${DESC}$2`
);

// Replace/patch OG + canonical tags
html = html
  .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${TITLE}$2`)
  .replace(/(<meta\s+property="og:description"[\s\S]*?content=")[^"]*(")/, `$1${DESC}$2`)
  .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${OG_IMG}$2`)
  .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${URL}$2`)
  .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1event$2`)
  .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${URL}$2`);

// Extra head tags: twitter card + JSON-LD
const headExtras = `
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${TITLE}" />
    <meta name="twitter:description" content="${DESC}" />
    <meta name="twitter:image" content="${OG_IMG}" />
    <script type="application/ld+json">${JSON.stringify(SCHEMA)}</script>
  </head>`;
html = html.replace("</head>", headExtras);

// Static event summary for non-JS crawlers (inside #root so React replaces it
// on mount). Visually hidden so browsers don't flash unstyled text before
// React loads — crawlers parse the HTML source and ignore CSS.
const staticSummary = `<div id="root"><main style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">
  <h1>REVIVE 2026 — Reimagining Pulmonary &amp; Cardiac Rehabilitation</h1>
  <p><strong>Date:</strong> Sunday, 23 August 2026 &middot; <strong>Venue:</strong> Hyatt Centric Hebbal, Bengaluru, Karnataka, India</p>
  <p>REVIVE 2026 is the Conclave of Pulmonary &amp; Cardiac Rehabilitation organised by Vaayu Chest &amp; Sleep Specialists, Bengaluru — practical skills, real-world challenges and future-ready technology, with hands-on workshops and international faculty.</p>
  <h2>Keynote Faculty</h2>
  <ul>
    <li>Dr. Ganesh Raghu — University of Washington, USA</li>
    <li>Dr. Sally Singh — University Hospitals of Leicester NHS Trust, UK</li>
    <li>Dr. Rik Gosselink — University of Leuven, Belgium</li>
    <li>Dr. Waqar M. Naqvi — AD VIVUM Education and Research, Qatar</li>
    <li>Dr. Barry A. Franklin — Corewell Health East, William Beaumont University Hospital, USA</li>
  </ul>
  <h2>Pre-Conference</h2>
  <p>Scientific E-Poster Paper Presentation. Theme: Innovations in Cardiopulmonary Rehabilitation: From Research to Real-World Practice. Thursday, 20 August 2026, 02:30-04:30 PM (virtual session). Prizes: 1st &#8377;10,000, 2nd &#8377;7,500, 3rd &#8377;5,000.</p>
  <p>Abstract submissions: open 18 July 2026, close 5 August 2026 (max 350 words; original research, case reports or quality improvement projects). Selected abstracts notified 10 August 2026. E-posters due to rehabilitation@vaayuchest.com by 10 August 2026. Categories: Junior (UG/PG students), Senior (graduates, clinicians, academicians), PhD Scholars.</p>
  <p><a href="${REGISTER}">Register for REVIVE 2026</a> &middot; Contact: +91 63649 28680 &middot; admin@vaayuchest.com</p>
</main></div>`;
html = html.replace(/<div id="root">\s*<\/div>/, staticSummary);

writeFileSync(join(root, "dist", "revive-2026.html"), html);
console.log("generated dist/revive-2026.html");

// ---------------------------------------------------------------------------
// dist/voric.html — same technique for the VORIC occupational-health page.
// Targets "impact of pollution on traffic police Bengaluru" and related
// long-tail searches; served for /voric via an .htaccess rewrite.
// ---------------------------------------------------------------------------

const V_TITLE =
  "VORIC — Impact of Air Pollution on Bengaluru's Traffic Police | VAAYU";
const V_DESC =
  "VORIC studies the impact of pollution on Bengaluru's traffic police, BMTC & KSRTC staff, and other high-risk outdoor workers, with a 5-year IISc & PHFI research collaboration. Free respiratory screening for 11,000+ people since November 2023.";
const V_KEYWORDS =
  "impact of pollution on traffic police Bengaluru, traffic police health screening, occupational respiratory illness, VORIC, air pollution health effects Bengaluru";
const V_URL = `${BASE}/voric`;
const V_OG_IMG = `${BASE}/og-image.jpg`;

const V_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: V_TITLE,
  description: V_DESC,
  url: V_URL,
  about: {
    "@type": "MedicalCondition",
    name: "Occupational respiratory illness from air pollution exposure",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Traffic police, BMTC & KSRTC staff, construction workers, municipal workers, professional drivers",
  },
  mainEntity: {
    "@type": "Organization",
    name: "VORIC — VAAYU Occupational Respiratory Illness Clinic",
    description:
      "Social-impact initiative of VAAYU Chest & Sleep Specialists studying and screening for the impact of air pollution on Bengaluru's traffic police and other high-risk outdoor workers since November 2023, in a 5-year research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI).",
    foundingDate: "2023-11",
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: "Vaayu Chest & Sleep Specialists",
      url: BASE,
    },
  },
  publisher: {
    "@type": "MedicalOrganization",
    name: "Vaayu Chest & Sleep Specialists",
    url: BASE,
  },
};

let vHtml = readFileSync(distIndex, "utf8");

vHtml = vHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${V_TITLE}</title>`);
vHtml = vHtml.replace(
  /(<meta\s+name="description"\s+content=")[^"]*(")/,
  `$1${V_DESC}$2`
);
vHtml = vHtml
  .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${V_TITLE}$2`)
  .replace(/(<meta\s+property="og:description"[\s\S]*?content=")[^"]*(")/, `$1${V_DESC}$2`)
  .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${V_OG_IMG}$2`)
  .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${V_URL}$2`)
  .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1website$2`)
  .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${V_URL}$2`);

const vHeadExtras = `
    <meta name="keywords" content="${V_KEYWORDS}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${V_TITLE}" />
    <meta name="twitter:description" content="${V_DESC}" />
    <meta name="twitter:image" content="${V_OG_IMG}" />
    <script type="application/ld+json">${JSON.stringify(V_SCHEMA)}</script>
  </head>`;
vHtml = vHtml.replace("</head>", vHeadExtras);

const vStaticSummary = `<div id="root"><main style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">
  <h1>VORIC — The Impact of Pollution on Bengaluru's Traffic Police</h1>
  <p>The VAAYU Occupational Respiratory Illness Clinic (VORIC) is a social-impact initiative of Vaayu Chest &amp; Sleep Specialists, running since November 2023, that studies and addresses the impact of air pollution on Bengaluru's traffic police, BMTC &amp; KSRTC staff, construction workers, municipal workers and professional drivers.</p>
  <h2>What VORIC Does</h2>
  <p>Free preventive and therapeutic respiratory screening, advanced lung testing (spirometry, Forced Oscillation Technique, Fractional exhaled Nitric Oxide), doctor consultation, treatment and follow-up, and health education &mdash; brought directly to high-risk workplaces across Bengaluru.</p>
  <h2>Scientific Collaboration</h2>
  <p>A 5-year longitudinal research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI) studying the long-term health effects of pollution exposure on Bengaluru's traffic police personnel.</p>
  <h2>Impact So Far</h2>
  <p>11,000+ people screened, including 3,287 traffic police personnel, 4,389 BMTC &amp; KSRTC bus crew, 3,000+ construction workers and 240+ Paurakarmikas.</p>
  <p><a href="${BASE}/contact">Contact Vaayu Chest &amp; Sleep Specialists</a> &middot; +91 63649 28680 &middot; admin@vaayuchest.com</p>
</main></div>`;
vHtml = vHtml.replace(/<div id="root">\s*<\/div>/, vStaticSummary);

writeFileSync(join(root, "dist", "voric.html"), vHtml);
console.log("generated dist/voric.html");
