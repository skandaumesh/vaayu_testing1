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
    { "@type": "Person", name: "Dr. K S Satish" },
    { "@type": "Person", name: "Dr. Venkatesh T K" },
    { "@type": "Person", name: "Dr. Veena Kiran Nambiar" },
    { "@type": "Person", name: "Dr. Shaswat Verma" },
    { "@type": "Person", name: "Dr. Mariya Jiandani" },
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
  offers: {
    "@type": "Offer",
    url: REGISTER,
    availability: "https://schema.org/InStock",
    validFrom: "2026-07-01T00:00:00+05:30",
  },
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
  <p>Scientific Paper Presentation — Thursday, 20 August 2026, 02:30–04:30 PM (virtual session).</p>
  <p><a href="${REGISTER}">Register for REVIVE 2026</a> &middot; Contact: +91 63649 28680 &middot; admin@vaayuchest.com</p>
</main></div>`;
html = html.replace(/<div id="root">\s*<\/div>/, staticSummary);

writeFileSync(join(root, "dist", "revive-2026.html"), html);
console.log("generated dist/revive-2026.html");
