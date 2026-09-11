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

// Q&A phrased the way people and AI assistants actually ask. Kept in sync with
// the FAQS array in src/pages/Voric.jsx — the schema must match visible content.
const V_FAQS = [
  [
    "How does air pollution affect traffic police in Bengaluru?",
    "Traffic police in Bengaluru spend long hours at busy junctions, directly exposed to vehicular exhaust and particulate matter (PM2.5 and PM10). VORIC screening of 3,287 traffic police personnel has found reduced lung function, respiratory symptoms and previously undiagnosed conditions such as asthma and COPD, alongside metabolic conditions like hypertension and diabetes. Long-term exposure is also linked to heart disease and stroke, which is why respiratory disease in this group is treated as multimorbidity affecting the lungs, heart and other organs.",
  ],
  [
    "What is VORIC?",
    "VORIC is the VAAYU Occupational Respiratory Illness Clinic, a social-impact initiative of Vaayu Chest & Sleep Specialists and the VAAYU Respiratory Foundation in Bengaluru. Running since November 2023, it studies and addresses the impact of air pollution on traffic police and other people routinely exposed to exhaust fumes, dust and smoke at work, combining free workplace screening with treatment, education, research and policy advocacy.",
  ],
  [
    "How many people has VORIC screened?",
    "VORIC has screened more than 11,000 high-risk workers since November 2023, including 3,287 traffic police personnel, 4,389 BMTC and KSRTC bus crew, over 3,000 construction workers and more than 240 Paurakarmikas (municipal sanitation workers).",
  ],
  [
    "Which workers are most at risk of occupational respiratory illness from air pollution?",
    "The highest-risk groups are those with prolonged outdoor or traffic-adjacent exposure: traffic police, bus and transport staff, construction workers, municipal and sanitation workers, auto and cab drivers, and factory, security and industrial personnel exposed to dust or fumes.",
  ],
  [
    "What tests are included in a VORIC screening camp?",
    "Each camp includes general health checks (blood pressure, heart rate, oxygen saturation, BMI, random blood sugar, and screening for hypertension and diabetes) and a respiratory assessment (symptom and exposure evaluation, doctor consultation, spirometry, Forced Oscillation Technique, Fractional exhaled Nitric Oxide where available, chest radiograph, and relevant blood investigations). Initial medication support, referral and follow-up advice are provided wherever feasible.",
  ],
  [
    "Is VORIC screening free for workers?",
    "Yes. VORIC screening camps are provided free of cost to participating workers, funded as a social-impact initiative of Vaayu Chest & Sleep Specialists and the VAAYU Respiratory Foundation, and supported by partner organisations and CSR contributions.",
  ],
  [
    "What research is VORIC doing on pollution and traffic police health?",
    "VORIC runs a five-year longitudinal research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI) on the impact of pollution on traffic police personnel. Its study of 2,450 traffic police personnel in Bengaluru, the largest occupational-health screening study of traffic police in India, was presented at the European Respiratory Society (ERS) Congress 2025 in Amsterdam and published in Lung India. The BREATHE study on bus drivers was presented at NAPCON 2025 in Pune.",
  ],
  [
    "How can an organisation request a VORIC screening camp?",
    "Government departments, transport organisations, construction companies, municipal bodies, corporates, industrial units, foundations, CSR teams and academic institutions can request a camp by contacting Vaayu Chest & Sleep Specialists at +91 63649 28680 or anmol@vaayuchest.com. VORIC supports one-time camps, periodic screening, follow-up programmes, health education and research collaboration.",
  ],
];

const V_STUDIES = [
  [
    "Respiratory and Multimorbidity Analysis in 2,450 Traffic Police Personnel in Bangalore City",
    "Presented at the European Respiratory Society (ERS) Congress 2025, Amsterdam · Published in Lung India (Indian Chest Society Journal)",
  ],
  [
    "An Observational Study on Respiratory Morbidity and Lung Assessment in 2,450 Traffic Police Personnel in Bengaluru City — the largest occupational-health screening study of traffic police in India",
    "National Respiratory Meeting (NAPCON), Pune · August 2025",
  ],
  [
    "The BREATHE Study — prevalence of respiratory symptoms, chronic health conditions and pulmonary function among bus drivers in Bengaluru and Karnataka",
    "National Respiratory Meeting (NAPCON), Pune · August 2025",
  ],
];

const V_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${V_URL}#page`,
      name: V_TITLE,
      description: V_DESC,
      url: V_URL,
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalCondition",
        name: "Occupational respiratory illness from air pollution exposure",
        associatedAnatomy: { "@type": "AnatomicalStructure", name: "Lung" },
        riskFactor: [
          { "@type": "MedicalRiskFactor", name: "Vehicular exhaust and particulate matter (PM2.5, PM10) exposure" },
          { "@type": "MedicalRiskFactor", name: "Prolonged outdoor occupational exposure to traffic emissions" },
          { "@type": "MedicalRiskFactor", name: "Construction dust, silica and industrial fumes" },
        ],
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Traffic police, BMTC & KSRTC staff, construction workers, municipal workers, professional drivers",
        geographicArea: { "@type": "City", name: "Bengaluru" },
      },
      mainEntity: { "@id": `${V_URL}#organization` },
      publisher: { "@id": `${BASE}/#clinic` },
      isPartOf: { "@id": `${BASE}/#clinic` },
      breadcrumb: { "@id": `${V_URL}#breadcrumb` },
      // Conditions this work is about, tied to the pages that treat them, so
      // the topic and the clinical service resolve to the same entity.
      mentions: [
        { "@type": "MedicalCondition", name: "Chronic obstructive pulmonary disease (COPD)", url: `${BASE}/specialty-clinic/copd` },
        { "@type": "MedicalCondition", name: "Asthma", url: `${BASE}/specialty-clinic/asthma` },
        { "@type": "MedicalCondition", name: "Interstitial lung disease", url: `${BASE}/specialty-clinic/ild` },
        // Public figures who have engaged with the programme. Named because
        // they appear in captioned photographs on the page.
        {
          "@type": "Person",
          name: "Tejasvi Surya",
          honorificPrefix: "Sri",
          jobTitle: "Member of Parliament, Bangalore South",
        },
        {
          "@type": "Person",
          name: "M.N. Anucheth",
          honorificPrefix: "Sri",
          jobTitle: "Indian Police Service; then Joint Commissioner of Police (Traffic), Bengaluru",
        },
      ],
    },
    {
      "@type": ["Organization", "MedicalOrganization"],
      "@id": `${V_URL}#organization`,
      name: "VORIC — VAAYU Occupational Respiratory Illness Clinic",
      alternateName: ["VORIC", "Vaayu Occupational Respiratory Illness Clinic"],
      url: V_URL,
      description:
        "Social-impact initiative of VAAYU Chest & Sleep Specialists studying and screening for the impact of air pollution on Bengaluru's traffic police and other high-risk outdoor workers since November 2023, in a 5-year research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI).",
      foundingDate: "2023-11",
      areaServed: { "@type": "City", name: "Bengaluru", containedInPlace: { "@type": "State", name: "Karnataka" } },
      telephone: "+91 63649 28680",
      email: "anmol@vaayuchest.com",
      parentOrganization: { "@id": `${BASE}/#clinic` },
      knowsAbout: [
        "Impact of air pollution on traffic police",
        "Occupational respiratory illness",
        "Spirometry and lung function testing",
        "PM2.5 and PM10 exposure",
        "Occupational health screening",
      ],
      memberOf: [
        { "@type": "Organization", name: "Indian Institute of Science (IISc)" },
        { "@type": "Organization", name: "Public Health Foundation of India (PHFI)" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${V_URL}#faq`,
      mainEntity: V_FAQS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${V_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Social impact", item: `${BASE}/social-impact` },
        {
          "@type": "ListItem",
          position: 3,
          name: "VORIC: impact of air pollution on traffic police",
          item: V_URL,
        },
      ],
    },
    ...V_STUDIES.map(([headline, venue], i) => ({
      "@type": "MedicalScholarlyArticle",
      "@id": `${V_URL}#study-${i + 1}`,
      headline,
      publication: venue,
      about: "Impact of air pollution on occupational respiratory health in Bengaluru",
      author: { "@id": `${V_URL}#organization` },
      publisher: { "@id": `${BASE}/#clinic` },
    })),
  ],
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

// Full-text fallback rendered inside #root. React replaces it the moment it
// mounts, so browsers never see it — but AI crawlers (GPTBot, PerplexityBot,
// ClaudeBot) and first-wave search indexing don't execute JavaScript, so this
// is the only VORIC content they can read. It mirrors the visible page.
const vStaticSummary = `<div id="root"><main style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">
  <h1>VORIC: The Impact of Air Pollution on Bengaluru's Traffic Police</h1>
  <p>The VAAYU Occupational Respiratory Illness Clinic (VORIC) is a social-impact initiative of Vaayu Chest &amp; Sleep Specialists and the VAAYU Respiratory Foundation, Bengaluru. Running since November 2023, VORIC studies and addresses the impact of air pollution on Bengaluru's traffic police, BMTC &amp; KSRTC bus crew, construction workers, municipal and sanitation workers (Paurakarmikas) and professional drivers, connecting free workplace screening with treatment, education, research and policy advocacy.</p>

  <h2>The impact of pollution on traffic police in Bengaluru</h2>
  <p>Traffic police personnel in Bengaluru work long hours at congested junctions, directly exposed to vehicular exhaust and particulate matter. Around 30% of urban air pollution comes from vehicular traffic emissions, and respiratory disease is among the leading causes of illness and death in India. Constant exposure to exhaust fumes, PM2.5 and PM10 affects far more than the lungs: long-term exposure is linked to asthma and chronic obstructive pulmonary disease (COPD), reduced lung function, respiratory infections, heart disease and stroke, and reduced productivity and quality of life. The impact of respiratory disease in this population is now recognised as one of multimorbidity, affecting the lungs, heart and virtually every organ in the body.</p>

  <h2>Air quality: PM2.5, PM10 and AQI</h2>
  <p>PM2.5 refers to fine particles that travel deep into the lungs and enter the bloodstream. PM10 is coarser particulate matter that contributes significantly to poor air quality. Both are reflected in the Air Quality Index (AQI), the everyday measure of how polluted the air around us is. From traffic emissions and construction dust to industrial pollution and indoor smoke, millions of people in India are exposed to harmful pollutants every day, often without realising the impact.</p>

  <h2>Who VORIC serves</h2>
  <ul>
    <li>Traffic police: repeated exposure to vehicular exhaust, particulate matter and prolonged outdoor duty</li>
    <li>Bus &amp; transport staff (BMTC, KSRTC): long hours in traffic-heavy environments, diesel exhaust and irregular schedules</li>
    <li>Construction workers: cement dust, silica, particulate matter, paint fumes and other site hazards</li>
    <li>Municipal &amp; sanitation workers (Paurakarmikas): dust, waste, bioaerosols and smoke</li>
    <li>Auto, cab and professional drivers: extended exposure to traffic emissions and poor cabin-air quality</li>
    <li>Other exposed workers: factory personnel, security staff and industrial workers exposed to dust or fumes</li>
  </ul>

  <h2>What a VORIC screening camp includes</h2>
  <p>VORIC follows the STEM model: Screen, Test, Educate, Medicate. General health assessment covers blood pressure, heart rate, oxygen saturation, body mass index (BMI), random blood sugar and screening for hypertension and diabetes. Respiratory assessment covers symptom and exposure evaluation, doctor consultation, spirometry, Forced Oscillation Technique (FOT), Fractional exhaled Nitric Oxide (FeNO) where available, chest radiograph (X-ray) and relevant blood investigations for selected cohorts. Treatment and follow-up include initial medication support where feasible, referral for further evaluation, follow-up advice and preventive health education. Screening is provided free of cost to participating workers and is brought directly to workplaces.</p>

  <h2>Impact so far</h2>
  <p>More than 11,000 people screened since November 2023, including 3,287 traffic police personnel, 4,389 BMTC &amp; KSRTC bus crew, over 3,000 construction workers and more than 240 Paurakarmikas. VORIC has helped identify previously undiagnosed respiratory conditions, detect metabolic concerns such as hypertension and diabetes, initiate early treatment, improve awareness of lung health, and build a foundation for long-term follow-up and preventive policy.</p>

  <h2>Research and scientific collaboration</h2>
  <p>VORIC runs a five-year longitudinal research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI) on the impact of pollution on traffic police personnel. Published and presented work includes:</p>
  <ul>
${V_STUDIES.map(([t, v]) => `    <li>${t}. ${v}</li>`).join("\n")}
  </ul>

  <h2>Policy engagement</h2>
  <p>VORIC has shared screening findings and programme proposals with the Traffic Police, BMTC and KSRTC, the Greater Bengaluru Authority, public-health authorities and state-government representatives, encouraging regular occupational-health screening, longitudinal follow-up, better protective measures and evidence-based preventive programmes.</p>

  <h2>Frequently asked questions</h2>
${V_FAQS.map(([q, a]) => `  <h3>${q}</h3>\n  <p>${a.replace(/&/g, "&amp;")}</p>`).join("\n")}

  <h2>Engagement with officials and public representatives</h2>
  <p>VORIC works directly with the departments whose personnel it screens, and the programme has been recognised by senior officials and elected representatives in Bengaluru. Dr Ravindra Mehta of Vaayu Chest &amp; Sleep Specialists has presented the programme to Sri M.N. Anucheth, IPS, then Joint Commissioner of Police (Traffic), Bengaluru, and to Sri Tejasvi Surya, Member of Parliament for Bangalore South, alongside meetings with the Joint Commissioner of Traffic Police, BMTC and KSRTC leadership and the Chief Commissioner of the BBMP.</p>

  <h2>Related care at Vaayu</h2>
  <p>Workers found to have a respiratory condition during VORIC screening are referred into specialist care at Vaayu Chest &amp; Sleep Specialists in Jayanagar, Bengaluru:</p>
  <ul>
    <li><a href="${BASE}/specialty-clinic/copd">COPD clinic and treatment in Bengaluru</a>, for chronic obstructive pulmonary disease found on screening</li>
    <li><a href="${BASE}/specialty-clinic/asthma">Asthma clinic and treatment in Bengaluru</a>, including occupational and pollution-triggered asthma</li>
    <li><a href="${BASE}/specialty-clinic/ild">Interstitial lung disease (ILD) clinic</a>, for scarring and fibrosis of the lungs</li>
    <li><a href="${BASE}/pulmonary-rehab">Pulmonary rehabilitation</a>, for breathlessness and reduced exercise capacity</li>
    <li><a href="${BASE}/preventive-clinics">Preventive lung health checks</a> and <a href="${BASE}/general-opd">general chest OPD</a></li>
    <li><a href="${BASE}/resources/publications">Research and publications</a> from the Vaayu team</li>
    <li><a href="${BASE}/social-impact">Social impact programmes</a> and <a href="${BASE}/media-spotlight">media coverage</a></li>
  </ul>

  <h2>Contact VORIC</h2>
  <p>VAAYU Respiratory Foundation, Ground &amp; 3rd Floor, 37/17, 10th Main Road, 5th Block, Jayanagar, Bengaluru 560041, Karnataka, India. Telephone +91 63649 28680. Email anmol@vaayuchest.com. <a href="${BASE}/contact">Contact Vaayu Chest &amp; Sleep Specialists</a> to request a screening camp, explore CSR support or collaborate on research. <a href="${BASE}/appointment">Book an appointment</a>.</p>
</main></div>`;
vHtml = vHtml.replace(/<div id="root">\s*<\/div>/, vStaticSummary);

writeFileSync(join(root, "dist", "voric.html"), vHtml);
console.log("generated dist/voric.html");
