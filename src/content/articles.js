// Newsroom and research articles: single source of truth.
//
// Plain data, no JSX, so it is imported by both the React pages
// (src/pages/Newsroom.jsx) and the build-time prerender
// (scripts/gen-route-shells.mjs). What a visitor reads and what a crawler
// reads therefore cannot drift apart.
//
// EDITORIAL RULE: every statement here must already be published by Vaayu or
// by a cited press report. Do not add clinical results, quotes or numbers that
// are not sourced. Add the source to `sources`.
//
// To publish a new article: add an object here, then add a matching
// <Route path="/newsroom/<slug>"> (or /research/<slug>) line in src/App.jsx.
//
// Body blocks: { h: "heading" } | { p: "paragraph" } | { ul: ["item", ...] }
//            | { stats: [["45%", "label"], ...] }

const VORIC = "/voric";

export const SECTIONS = {
  newsroom: {
    path: "/newsroom",
    name: "Newsroom",
    title: "Newsroom | News & Announcements | Vaayu Chest & Sleep Specialists, Bengaluru",
    description:
      "News and announcements from Vaayu Chest & Sleep Specialists and the VAAYU Respiratory Foundation, Bengaluru: screening findings, policy engagement and programme updates, in our own words.",
    intro:
      "News and announcements from Vaayu Chest & Sleep Specialists and the VAAYU Respiratory Foundation, in our own words, with the data and the sources.",
  },
  research: {
    path: "/research",
    name: "Research",
    title: "Research on Air Pollution & Lung Health in Bengaluru | Vaayu",
    description:
      "Plain-language summaries of Vaayu's research on air pollution and occupational lung health in Bengaluru: traffic police, bus crew and other frontline workers.",
    intro:
      "Plain-language summaries of the research that has come out of Vaayu's occupational screening programme, written for patients, journalists and policymakers.",
  },
};

export const ARTICLES = [
  // ------------------------------------------------------------------ NEWS
  {
    section: "newsroom",
    slug: "roundtable-protecting-those-who-protect-our-city",
    title:
      "Roundtable: 28% of Bengaluru's Traffic Police and 45% of Pourakarmikas Show Reduced Lung Function",
    description:
      "Findings from screening 11,000+ frontline workers in Bengaluru, presented at the roundtable 'Protecting Those Who Protect Our City': reduced lung function in 28% of traffic police, 29.5% of BMTC personnel, 45% of Pourakarmikas and 15% of construction workers.",
    date: "2026-11-11",
    dateLabel: "11 November 2026",
    eventLabel: "Roundtable held in Bengaluru, October 2026",
    body: [
      {
        p: "VAAYU Chest & Sleep Specialists and the VAAYU Respiratory Foundation convened the roundtable “Protecting Those Who Protect Our City” at Samagata, Church Street, Bengaluru, in October 2026. It brought together healthcare professionals, researchers, public-health experts, policy practitioners, civic representatives and philanthropic organisations to discuss what air pollution is doing to the people who work outdoors in the city every day.",
      },
      { h: "What the screening found" },
      {
        p: "Dr Ravindra Mehta, Founder and Medical Director of VAAYU Chest & Sleep Specialists, presented findings from the occupational screening programme (VORIC, also written VOERIC), which has screened more than 11,000 frontline workers in Bengaluru since November 2023. Reduced lung function was found in:",
      },
      {
        stats: [
          ["45%", "of Pourakarmikas (municipal sanitation workers)"],
          ["29.5%", "of BMTC bus personnel"],
          ["28%", "of traffic police personnel"],
          ["15%", "of construction workers"],
        ],
      },
      {
        p: "Higher rates of diabetes, uncontrolled blood pressure and overweight or obesity were also seen across these occupational groups. Further longitudinal research is needed to track how lung function changes over time, and a cohort study with government support is planned.",
      },
      { h: "Who took part" },
      {
        ul: [
          "Dr Ravindra Mehta, Founder and Medical Director, VAAYU Chest & Sleep Specialists, presented the screening findings.",
          "Mr Srinivas Alavilli, Fellow, Integrated Transport and Road Safety, WRI India, and Trustee, VAAYU Respiratory Foundation, moderated the discussion.",
          "Dr C. N. Manjunath and Dr Vivek Jawali discussed the cardiovascular effects of air pollution.",
          "Dr K. Satish compared the harms of air pollution with those of tobacco exposure.",
          "Dr Gufran Beig discussed drone-based vertical air-quality profiling.",
        ],
      },
      { h: "What the roundtable called for" },
      {
        ul: [
          "Regular occupational health screening and follow-up care for workers with high exposure.",
          "Bringing clinical, occupational and environmental exposure data together to study long-term health outcomes.",
          "Longitudinal research on changes in lung function and related risks.",
          "Partnerships among government departments, research institutions, healthcare providers, industry and philanthropic organisations.",
          "Using scientifically validated evidence to shape workplace health programmes, preventive measures and policy.",
          "Awareness and action as the two priorities: prevention, community engagement and stronger workplace protection.",
        ],
      },
      { h: "How the screening is done" },
      {
        p: "The programme follows the STEM model: Screen, Test, Educate, Medicate. Camps are taken to bus depots, construction sites and other workplaces, and include spirometry, Forced Oscillation Technique (FOT), chest X-rays, specialist consultation, initial treatment and health education, free of cost to the worker.",
      },
    ],
    related: [
      [VORIC, "VORIC: the impact of air pollution on Bengaluru's traffic police"],
      ["/research/traffic-police-lung-health-study", "Research: lung health in 2,450 traffic police personnel"],
      ["/research/breathe-study-bus-drivers", "Research: the BREATHE study of bus drivers"],
    ],
    sources: [
      [
        "Press Network of India: VOERIC Roundtable Calls for Stronger Action on Air Pollution and Frontline Workers' Health in Bengaluru",
        "https://www.pninews.com/voeric-roundtable-calls-for-stronger-action-on-air-pollution-and-frontline-workers-health-in-bengaluru/",
      ],
      [
        "Deccan Herald: Air pollution: Bengaluru frontline workers face lung risks, says expert",
        "https://www.deccanherald.com/india/karnataka/bengaluru/air-pollution-is-new-tobacco-says-former-jayadeva-chief-4196286",
      ],
    ],
  },
  {
    section: "newsroom",
    slug: "karnataka-statewide-respiratory-surveillance-traffic-police",
    title:
      "Karnataka Launches Statewide Respiratory Health Surveillance for Traffic Police",
    description:
      "Karnataka's Home Department has launched a statewide respiratory health surveillance and research programme for traffic police, following two years of screening of 3,287 traffic police personnel in Bengaluru. Vaayu Respiratory Foundation is the technical implementation partner.",
    date: "2026-11-11",
    dateLabel: "11 November 2026",
    eventLabel: "Reported by The Hindu, 2 May 2026",
    body: [
      {
        p: "Karnataka's Home Department has launched a first-of-its-kind statewide respiratory health surveillance and research programme for traffic police, as reported by The Hindu on 2 May 2026.",
      },
      {
        p: "The programme follows two years of occupational screening in Bengaluru, during which 3,287 traffic police personnel were screened under VORIC (the VAAYU Occupational Respiratory Illness Clinic). Vaayu Respiratory Foundation is the technical implementation partner for the statewide programme.",
      },
      { h: "Why it matters" },
      {
        p: "Traffic police personnel work long hours at congested junctions, directly exposed to vehicular exhaust and particulate matter (PM2.5 and PM10). Regular surveillance means respiratory problems can be found early, before damage becomes irreversible, and that the data needed for prevention and policy is collected consistently across the state rather than in one city.",
      },
      { h: "What screening involves" },
      {
        p: "VORIC screening covers general health (blood pressure, heart rate, oxygen saturation, BMI, random blood sugar) and a respiratory assessment: symptom and exposure evaluation, doctor consultation, spirometry, Forced Oscillation Technique (FOT), Fractional exhaled Nitric Oxide (FeNO) where available, and a chest radiograph.",
      },
    ],
    related: [
      [VORIC, "VORIC: the impact of air pollution on Bengaluru's traffic police"],
      ["/newsroom/roundtable-protecting-those-who-protect-our-city", "Roundtable: what screening 11,000+ frontline workers found"],
      ["/media-spotlight", "All media coverage"],
    ],
    sources: [
      [
        "The Hindu: Karnataka launches statewide respiratory surveillance for traffic police",
        "https://www.thehindu.com/news/national/karnataka/karnataka-launches-statewide-respiratory-surveillance-for-traffic-police/article70929118.ece",
      ],
    ],
  },

  // -------------------------------------------------------------- RESEARCH
  {
    section: "research",
    slug: "traffic-police-lung-health-study",
    title:
      "Lung Health in 2,450 Traffic Police Personnel in Bengaluru: Study Summary",
    description:
      "Plain-language summary of Vaayu's study of respiratory morbidity and multimorbidity in 2,450 traffic police personnel in Bengaluru, the largest occupational-health screening study of traffic police in India. Presented at ERS 2025 and NAPCON 2025; published in Lung India.",
    date: "2026-11-11",
    dateLabel: "11 November 2026",
    eventLabel: "ERS Congress 2025, Amsterdam · NAPCON 2025, Pune · Lung India",
    body: [
      { h: "The study in one paragraph" },
      {
        p: "Vaayu Chest & Sleep Specialists screened 2,450 traffic police personnel in Bengaluru for respiratory symptoms, lung function and other chronic conditions. It is the largest occupational-health screening study of traffic police in India. The work looked at respiratory disease together with conditions such as hypertension and diabetes, because long-term exposure to traffic pollution affects the heart and other organs as well as the lungs.",
      },
      { h: "Where it was presented and published" },
      {
        ul: [
          "“Respiratory and Multimorbidity Analysis in 2,450 Traffic Police Personnel in Bangalore City”: presented at the European Respiratory Society (ERS) Congress 2025, Amsterdam, and published in Lung India, the journal of the Indian Chest Society.",
          "“An Observational Study on Respiratory Morbidity and Lung Assessment in 2,450 Traffic Police Personnel in Bengaluru City”: presented at the National Respiratory Meeting (NAPCON), Pune, August 2025.",
        ],
      },
      { h: "What was measured" },
      {
        p: "Each participant had a general health assessment (blood pressure, heart rate, oxygen saturation, BMI, random blood sugar) and a respiratory assessment: symptom and exposure history, doctor consultation, spirometry, Forced Oscillation Technique (FOT), Fractional exhaled Nitric Oxide (FeNO) where available, and a chest radiograph.",
      },
      { h: "Latest figure from the wider programme" },
      {
        p: "Screening has continued since the study cohort. Across the 3,287 traffic police personnel screened by VORIC to date, reduced lung function was found in 28%, as presented at the roundtable “Protecting Those Who Protect Our City” in Bengaluru in October 2026.",
      },
      { h: "What happens next" },
      {
        p: "VORIC runs a five-year longitudinal research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI) on the impact of pollution on traffic police personnel, and Karnataka's Home Department has launched statewide respiratory surveillance for traffic police.",
      },
    ],
    related: [
      [VORIC, "VORIC: the impact of air pollution on Bengaluru's traffic police"],
      ["/newsroom/karnataka-statewide-respiratory-surveillance-traffic-police", "Karnataka launches statewide surveillance for traffic police"],
      ["/resources/publications", "All research and publications"],
    ],
    sources: [],
  },
  {
    section: "research",
    slug: "breathe-study-bus-drivers",
    title: "The BREATHE Study: Lung Health of Bus Drivers in Bengaluru and Karnataka",
    description:
      "Plain-language summary of the BREATHE study: prevalence of respiratory symptoms, chronic health conditions and pulmonary function among bus drivers in Bengaluru and Karnataka. Presented at NAPCON 2025, Pune.",
    date: "2026-11-11",
    dateLabel: "11 November 2026",
    eventLabel: "NAPCON 2025, Pune",
    body: [
      { h: "The study in one paragraph" },
      {
        p: "The BREATHE study looked at how common respiratory symptoms, chronic health conditions and reduced pulmonary function are among bus drivers in Bengaluru and Karnataka. Bus crew spend long hours in traffic-heavy environments, exposed to diesel exhaust, often on irregular schedules. The study was presented at the National Respiratory Meeting (NAPCON) in Pune in August 2025.",
      },
      { h: "Who was screened" },
      {
        p: "VORIC has screened 4,389 BMTC and KSRTC bus crew since November 2023, at depots and other workplaces, free of cost to the worker.",
      },
      { h: "Latest figure from the wider programme" },
      {
        p: "Reduced lung function was found in 29.5% of BMTC personnel screened, as presented at the roundtable “Protecting Those Who Protect Our City” in Bengaluru in October 2026.",
      },
      { h: "What was measured" },
      {
        p: "General health checks (blood pressure, heart rate, oxygen saturation, BMI, random blood sugar) and a respiratory assessment: symptom and exposure history, doctor consultation, spirometry, Forced Oscillation Technique (FOT), and a chest radiograph where indicated.",
      },
    ],
    related: [
      [VORIC, "VORIC: occupational respiratory screening in Bengaluru"],
      ["/newsroom/roundtable-protecting-those-who-protect-our-city", "Roundtable: what screening 11,000+ frontline workers found"],
      ["/research/traffic-police-lung-health-study", "Research: lung health in 2,450 traffic police personnel"],
    ],
    sources: [],
  },
  {
    section: "research",
    slug: "iisc-phfi-traffic-police-pollution-study",
    title:
      "Five-Year IISc and PHFI Study on Pollution and Traffic Police Health",
    description:
      "VORIC's five-year longitudinal research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI) on the impact of air pollution on traffic police personnel in Bengaluru.",
    date: "2026-11-11",
    dateLabel: "11 November 2026",
    eventLabel: "Ongoing five-year longitudinal study",
    body: [
      { h: "What it is" },
      {
        p: "VORIC, the occupational respiratory programme of Vaayu Chest & Sleep Specialists and the VAAYU Respiratory Foundation, runs a five-year longitudinal research collaboration with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI). It studies the impact of pollution on traffic police personnel in Bengaluru.",
      },
      { h: "Why a longitudinal study" },
      {
        p: "A single screening shows how many people have reduced lung function today. It cannot show how quickly lung function declines with continued exposure, or whether protective measures work. Following the same people over several years answers those questions, which is why the October 2026 roundtable “Protecting Those Who Protect Our City” called for more longitudinal research.",
      },
      { h: "What it builds on" },
      {
        ul: [
          "Screening of 3,287 traffic police personnel in Bengaluru since November 2023.",
          "The study of 2,450 traffic police personnel presented at the ERS Congress 2025 and NAPCON 2025 and published in Lung India.",
          "Karnataka's statewide respiratory surveillance programme for traffic police, with Vaayu Respiratory Foundation as technical implementation partner.",
        ],
      },
    ],
    related: [
      ["/research/traffic-police-lung-health-study", "Research: lung health in 2,450 traffic police personnel"],
      [VORIC, "VORIC: the impact of air pollution on Bengaluru's traffic police"],
      ["/newsroom/karnataka-statewide-respiratory-surveillance-traffic-police", "Karnataka launches statewide surveillance for traffic police"],
    ],
    sources: [],
  },
];

export const pathOf = (a) => `${SECTIONS[a.section].path}/${a.slug}`;

export const articlesIn = (section) => ARTICLES.filter((a) => a.section === section);

export const findArticle = (path) => ARTICLES.find((a) => pathOf(a) === path);

// Route metadata in the shape src/seo/routeMeta.js expects.
export const ARTICLE_META = Object.fromEntries([
  ...Object.values(SECTIONS).map((s) => [s.path, { t: s.title, d: s.description }]),
  ...ARTICLES.map((a) => [pathOf(a), { t: `${a.title} | Vaayu`, d: a.description }]),
]);
