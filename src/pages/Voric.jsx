// src/pages/Voric.jsx
// VORIC — VAAYU Occupational Respiratory Illness Clinic (social-impact page).
// Self-contained styles (inline <style>) matching the REVIVE 2026 page.
// Gallery/team images use placeholder slots until real photos are added to
// src/assets/img/voric/ (then swap the <div class="ph"> for <img>).
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import gMobileCamp from "../assets/img/voric/mobile-screening-camp.jpg";
import gDoctorConsult from "../assets/img/voric/doctor-consultation.jpg";
import gHealthDesk from "../assets/img/voric/health-screening-desk.jpg";
import gVitalsCheck from "../assets/img/voric/vitals-check.jpg";
import gRegistration from "../assets/img/voric/screening-registration.jpg";
import gSpirometry from "../assets/img/voric/spirometry-test.jpg";
import gTrafficPoliceGroup from "../assets/img/voric/traffic-police-group.jpg";
import gTrafficPoliceJC from "../assets/img/voric/traffic-police-jc.jpeg";
import gBmtcKsrtc from "../assets/img/voric/bmtc-ksrtc-leadership.jpeg";
import gBbmp from "../assets/img/voric/bbmp-chief-commissioner.jpeg";
import gFelicitation1 from "../assets/img/voric/felicitation-1.jpg";
import gFelicitation2 from "../assets/img/voric/felicitation-2.jpg";

const GALLERY_TABS = ["All", "Screening Camps", "Dignitaries & Officials"];

const GALLERY = [
  { src: gMobileCamp, cap: "Mobile screening camp", category: "Screening Camps" },
  { src: gDoctorConsult, cap: "Doctor consultation", category: "Screening Camps" },
  { src: gHealthDesk, cap: "Health screening in progress", category: "Screening Camps" },
  { src: gVitalsCheck, cap: "Vitals & spirometry check", category: "Screening Camps" },
  { src: gRegistration, cap: "Screening registration", category: "Screening Camps" },
  { src: gSpirometry, cap: "Spirometry testing", category: "Screening Camps" },
  { src: gTrafficPoliceGroup, cap: "With Bengaluru Traffic Police", category: "Dignitaries & Officials" },
  { src: gTrafficPoliceJC, cap: "With the Joint Commissioner of Traffic Police", category: "Dignitaries & Officials" },
  { src: gBmtcKsrtc, cap: "With BMTC & KSRTC leadership", category: "Dignitaries & Officials" },
  { src: gBbmp, cap: "With the Chief Commissioner, BBMP", category: "Dignitaries & Officials" },
  { src: gFelicitation1, cap: "Felicitated for VORIC's community impact", category: "Dignitaries & Officials" },
  { src: gFelicitation2, cap: "Recognised alongside Bengaluru Traffic Police", category: "Dignitaries & Officials" },
];

const BASE_URL = "https://vaayuchest.com";

const SEO_TITLE =
  "VORIC — Impact of Air Pollution on Bengaluru's Traffic Police | VAAYU";
const SEO_DESCRIPTION =
  "VORIC studies the impact of pollution on Bengaluru's traffic police, BMTC & KSRTC staff, and other high-risk outdoor workers, with a 5-year IISc & PHFI research collaboration. Free respiratory screening for 11,000+ people since November 2023.";
const SEO_KEYWORDS =
  "impact of pollution on traffic police Bengaluru, traffic police health screening, occupational respiratory illness, VORIC, air pollution health effects Bengaluru";

const VORIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: SEO_TITLE,
  description: SEO_DESCRIPTION,
  url: `${BASE_URL}/voric`,
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
      url: BASE_URL,
    },
  },
  publisher: {
    "@type": "MedicalOrganization",
    name: "Vaayu Chest & Sleep Specialists",
    url: BASE_URL,
  },
};

const T = {
  green: "#61724e",
  deep: "#4f5831",
  light: "#eef4e9",
  soft: "#f7faf4",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
  gold: "#b48a2c",
};

const STATS = [
  { n: "11,000+", label: "People screened" },
  { n: "3,287", label: "Traffic police personnel" },
  { n: "4,389", label: "BMTC & KSRTC bus crew" },
  { n: "3,000+", label: "Construction workers" },
  { n: "240+", label: "Paurakarmikas" },
];

const STEM = [
  {
    letter: "S",
    title: "Screen",
    text: "We assess symptoms, workplace exposure, medical history and general health risks.",
  },
  {
    letter: "T",
    title: "Test",
    text: "Participants undergo appropriate respiratory and preventive health assessments.",
  },
  {
    letter: "E",
    title: "Educate",
    text: "Practical education on lung health, pollution exposure, protective measures and follow-up.",
  },
  {
    letter: "M",
    title: "Medicate",
    text: "Initial treatment, prescriptions, referral and follow-up guidance are provided wherever feasible.",
  },
];

const SERVICES = [
  {
    head: "General Health",
    items: [
      "Blood pressure, heart rate & oxygen saturation",
      "Body mass index (BMI)",
      "Random blood sugar",
      "Screening for hypertension & diabetes",
    ],
  },
  {
    head: "Respiratory Assessment",
    items: [
      "Symptom & exposure evaluation",
      "Doctor consultation",
      "Spirometry & Forced Oscillation Technique (FOT)",
      "Fractional exhaled Nitric Oxide (FeNO), where available",
      "Chest radiograph (X-ray)",
      "Relevant blood investigations for selected cohorts",
    ],
  },
  {
    head: "Treatment & Follow-up",
    items: [
      "Initial medication support, where feasible",
      "Referral for further evaluation",
      "Follow-up advice & preventive health education",
    ],
  },
];

const COMMUNITIES = [
  ["🚦", "Traffic Police", "Repeated exposure to vehicular exhaust, particulate matter and prolonged outdoor duty."],
  ["🚌", "Bus & Transport Staff", "Long hours in traffic-heavy environments, diesel exhaust and irregular schedules."],
  ["🏗️", "Construction Workers", "Cement dust, silica, particulate matter, paint fumes and other site hazards."],
  ["🧹", "Municipal & Sanitation", "Dust, waste, bioaerosols, smoke and poorly controlled work environments."],
  ["🚕", "Auto, Cab & Drivers", "Extended exposure to traffic emissions and poor cabin-air quality."],
  ["🏭", "Other Exposed Workers", "Factory personnel, security staff and industrial workers exposed to dust or fumes."],
];

const STEPS = [
  ["Identify the cohort", "We work with government bodies, transport organisations, construction companies, communities and employers."],
  ["Onsite screening", "The mobile team conducts screening at workplaces or designated camp locations."],
  ["Assess & counsel", "Doctors and trained healthcare personnel evaluate participants and give individual advice."],
  ["Treat & follow up", "People needing treatment or detailed assessment are guided towards appropriate care."],
  ["Analyse & advocate", "De-identified data supports research, occupational-health planning and policy conversations."],
];

const COLLABORATIONS = [
  {
    title: "Indian Institute of Science & Public Health Foundation of India Partnership",
    text: "A collaborative study with the Indian Institute of Science (IISc) and the Public Health Foundation of India (PHFI) on the impact of pollution on traffic police personnel.",
    years: "5",
    yearsLabel: "Year Longitudinal Study",
    partners: [
      { abbr: "IISc", full: "Indian Institute of Science" },
      { abbr: "PHFI", full: "Public Health Foundation of India" },
    ],
  },
];

const PUBLICATIONS = [
  {
    title:
      "Respiratory and Multimorbidity Analysis in 2,450 Traffic Police Personnel in Bangalore City",
    venue:
      "Presented at the European Respiratory Society (ERS) Congress 2025, Amsterdam · Published in Lung India (Indian Chest Society Journal)",
  },
  {
    title:
      "An Observational Study on Respiratory Morbidity and Lung Assessment in 2,450 Traffic Police Personnel in Bengaluru City — the largest occupational-health screening study of traffic police in India",
    venue: "National Respiratory Meeting (NAPCON), Pune · August 2025",
  },
  {
    title:
      "The BREATHE Study — prevalence of respiratory symptoms, chronic health conditions and pulmonary function among bus drivers in Bengaluru and Karnataka",
    venue: "National Respiratory Meeting (NAPCON), Pune · August 2025",
  },
];

const NAV = [
  ["about", "About"],
  ["why", "Why VORIC"],
  ["stem", "STEM Approach"],
  ["services", "Services"],
  ["impact", "Impact"],
  ["research", "Research"],
  ["gallery", "Gallery"],
  ["partner", "Partner"],
  ["contact", "Contact"],
];

const Voric = () => {
  const [open, setOpen] = useState(false);
  const [galleryTab, setGalleryTab] = useState("All");

  useEffect(() => {
    document.title = SEO_TITLE;
  }, []);

  return (
    <HelmetProvider>
      <div className="voric-page">
        <Helmet>
          <title>{SEO_TITLE}</title>
          <meta name="description" content={SEO_DESCRIPTION} />
          <meta name="keywords" content={SEO_KEYWORDS} />
          <link rel="canonical" href={`${BASE_URL}/voric`} />
          <meta property="og:title" content={SEO_TITLE} />
          <meta property="og:description" content={SEO_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${BASE_URL}/voric`} />
          <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={SEO_TITLE} />
          <meta name="twitter:description" content={SEO_DESCRIPTION} />
          <script type="application/ld+json">
            {JSON.stringify(VORIC_SCHEMA)}
          </script>
        </Helmet>

        <style>{`
          * { box-sizing: border-box; }
          .voric-page {
            font-family: Inter, system-ui, -apple-system, sans-serif;
            background: ${T.light};
            color: ${T.text};
            overflow-x: hidden;
          }
          .vwrap { width: min(92%, 1180px); margin: auto; position: relative; z-index: 2; }
          .vsection { padding: clamp(52px, 6vw, 82px) 0; }
          .vsection.white { background: ${T.white}; }
          .vsection.soft {
            background:
              radial-gradient(560px 280px at 92% 0%, rgba(233,196,106,.10), transparent 62%),
              radial-gradient(560px 280px at 4% 100%, rgba(97,114,78,.07), transparent 62%),
              ${T.soft};
          }
          .vcenter { text-align: center; max-width: 780px; margin: 0 auto 40px; }
          .veyebrow {
            color: ${T.gold}; text-transform: uppercase; letter-spacing: .14em;
            font-weight: 800; font-size: 12px; margin: 0;
          }
          .vheading {
            color: ${T.green}; font-size: clamp(1.7rem, 3vw, 2.5rem);
            font-weight: 600; line-height: 1.2; margin: 12px 0 0;
          }
          .vcenter .vheading::after {
            content: ""; display: block; width: 66px; height: 4px;
            margin: 18px auto 0; border-radius: 999px;
            background: linear-gradient(90deg, #e9c46a, ${T.green});
          }
          .vtext { color: ${T.muted}; font-size: clamp(14px, 1.4vw, 16px); line-height: 1.75; }
          .vcard {
            background: ${T.white}; border: 1px solid ${T.border};
            border-radius: 22px; box-shadow: 0 16px 44px rgba(47,54,26,.07);
          }
          .svc, .comm, .stem-card {
            transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          }
          .svc:hover, .comm:hover, .stem-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 24px 50px rgba(47,54,26,.14);
            border-color: rgba(233,196,106,.5);
          }

          /* HERO */
          .vhero {
            background:
              radial-gradient(600px 300px at 12% 10%, rgba(233,196,106,.14), transparent 60%),
              linear-gradient(160deg, ${T.deep} 0%, ${T.green} 100%);
            color: #fff;
            padding: clamp(90px, 12vw, 140px) 0 clamp(56px, 7vw, 84px);
            position: relative;
          }
          .vhero .veyebrow { color: #e9c46a; font-size: clamp(14px, 1.6vw, 17px); letter-spacing: .16em; }
          .vhero h1 {
            font-size: clamp(2.2rem, 5.4vw, 4rem); font-weight: 700;
            line-height: 1.08; margin: 14px 0 0; max-width: 760px;
          }
          .vhero p.lead {
            color: rgba(255,255,255,.9); font-size: clamp(15px, 1.6vw, 18px);
            line-height: 1.7; max-width: 680px; margin: 18px 0 0;
          }
          .vhero-grid {
            display: grid; grid-template-columns: 1.15fr 0.85fr;
            gap: 40px; align-items: center;
          }
          .vhero-photo {
            margin: 0; border-radius: 24px; overflow: hidden;
            border: 1px solid rgba(255,255,255,.22);
            box-shadow: 0 24px 60px rgba(0,0,0,.32);
            aspect-ratio: 4 / 3;
          }
          .vhero-photo img {
            width: 100%; height: 100%; object-fit: cover; object-position: center 25%;
            display: block;
          }
          @media (max-width: 860px) {
            .vhero-grid { grid-template-columns: 1fr; }
            .vhero-photo { aspect-ratio: 16 / 9; order: -1; }
          }
          .stat-row {
            display: grid; grid-template-columns: repeat(5, 1fr);
            gap: 16px; margin-top: 40px;
          }
          .stat {
            background: rgba(255,255,255,.08);
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 18px; padding: 22px 16px; text-align: center;
            backdrop-filter: blur(6px);
          }
          .stat .num {
            font-size: clamp(1.7rem, 3.4vw, 2.6rem); font-weight: 800;
            color: #fff; line-height: 1;
          }
          .stat .lbl { color: rgba(255,255,255,.82); font-size: 12.5px; margin-top: 8px; }
          .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
          .btn {
            display: inline-block; padding: 13px 26px; border-radius: 999px;
            font-weight: 700; font-size: 14px; text-decoration: none; cursor: pointer;
            transition: transform .2s ease, box-shadow .2s ease;
          }
          .btn.solid { background: #fff; color: ${T.deep}; }
          .btn.ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.6); }
          .btn:hover { transform: translateY(-2px); }

          /* STICKY SUBNAV */
          .vsubnav {
            position: sticky; top: 0; z-index: 40;
            background: rgba(255,255,255,.94); backdrop-filter: blur(10px);
            border-bottom: 1px solid ${T.border};
          }
          .vsubnav ul {
            list-style: none; margin: 0 auto; padding: 16px 0;
            width: min(94%, 1180px); display: flex; gap: 12px;
            justify-content: center; flex-wrap: wrap;
            overflow-x: auto; scrollbar-width: none;
          }
          .vsubnav ul::-webkit-scrollbar { display: none; }
          .vsubnav a {
            display: block; padding: 14px 30px; white-space: nowrap;
            color: ${T.green}; font-size: 16px; font-weight: 700;
            text-decoration: none; border-radius: 999px;
            background: ${T.soft}; border: 1px solid ${T.border};
            transition: background .2s ease, color .2s ease, transform .2s ease;
          }
          .vsubnav a:hover {
            color: #fff; background: ${T.green};
            border-color: ${T.green}; transform: translateY(-1px);
          }

          .lead-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 30px; align-items: center; }
          .chip-list { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
          .chip-list li {
            display: grid; grid-template-columns: 26px 1fr; gap: 12px; align-items: start;
            color: ${T.muted}; line-height: 1.55; font-size: 14.5px;
          }
          .chip-list li::before {
            content: "✓"; display: inline-flex; align-items: center; justify-content: center;
            width: 24px; height: 24px; border-radius: 8px; background: ${T.light};
            color: ${T.green}; font-weight: 800; font-size: 13px;
          }

          /* STEM */
          .stem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
          .stem-card { padding: 26px 22px; }
          .stem-badge {
            width: 52px; height: 52px; border-radius: 14px;
            background: linear-gradient(135deg, #e9c46a, ${T.green});
            color: #fff; font-size: 26px; font-weight: 800;
            display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
          }
          .stem-card h3 { color: ${T.green}; margin: 0 0 8px; font-size: 1.2rem; }
          .stem-card p { color: ${T.muted}; margin: 0; font-size: 13.5px; line-height: 1.6; }

          /* SERVICE / GENERIC 3-COL */
          .g3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
          .svc { padding: 24px; }
          .svc h4 { color: ${T.green}; margin: 0 0 14px; font-size: 1.1rem; }
          .svc ul { margin: 0; padding-left: 18px; display: grid; gap: 8px; }
          .svc li { color: ${T.muted}; font-size: 13.5px; line-height: 1.5; }
          .svc-note {
            margin-top: 18px; font-size: 12.5px; color: ${T.muted};
            font-style: italic; text-align: center; max-width: 720px; margin-left: auto; margin-right: auto;
          }

          /* COMMUNITIES */
          .comm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
          .comm { padding: 24px; }
          .comm-icon {
            display: inline-flex; align-items: center; justify-content: center;
            width: 52px; height: 52px; border-radius: 15px; font-size: 26px;
            background: ${T.light}; margin-bottom: 14px;
          }
          .comm h4 { color: ${T.deep}; margin: 0 0 8px; font-size: 1.05rem; }
          .comm p { color: ${T.muted}; margin: 0; font-size: 13.5px; line-height: 1.55; }

          /* IMPACT */
          .impact-table { width: 100%; border-collapse: collapse; font-size: 15px; }
          .impact-table th { background: ${T.green}; color: #fff; text-align: left; padding: 14px 20px; }
          .impact-table td { padding: 13px 20px; border-top: 1px solid ${T.border}; }
          .impact-table td:last-child { font-weight: 800; color: ${T.deep}; text-align: right; }
          .impact-table tr:last-child td { background: ${T.light}; font-weight: 800; }

          /* STEPS */
          .steps { display: grid; gap: 14px; max-width: 820px; margin: 0 auto; }
          .step { display: grid; grid-template-columns: 46px 1fr; gap: 16px; align-items: start; padding: 18px 20px; }
          .step .n {
            width: 40px; height: 40px; border-radius: 12px; background: ${T.green};
            color: #fff; font-weight: 800; display: flex; align-items: center; justify-content: center;
          }
          .step h4 { color: ${T.green}; margin: 0 0 4px; font-size: 1.05rem; }
          .step p { color: ${T.muted}; margin: 0; font-size: 13.5px; line-height: 1.55; }

          /* BACKGROUND & AIM */
          .bg-grid {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 18px; margin-bottom: 34px;
          }
          .bg-stat {
            padding: 28px 22px; text-align: center;
            transition: transform .28s ease, box-shadow .28s ease;
          }
          .bg-stat:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(47,54,26,.14); }
          .bg-num {
            font-size: clamp(1.9rem, 3.6vw, 2.7rem); font-weight: 800;
            color: ${T.green}; line-height: 1;
          }
          .bg-stat p { color: ${T.muted}; font-size: 13.5px; line-height: 1.55; margin: 12px 0 0; }
          .bg-copy { max-width: 820px; margin: 0 auto; }
          .bg-copy p { color: ${T.muted}; font-size: 15px; line-height: 1.8; margin: 0 0 16px; }
          .bg-copy p:last-child { margin-bottom: 0; }
          .bg-copy strong { color: ${T.deep}; }

          /* PUBLICATIONS */
          .pub-head {
            text-align: center; color: ${T.green}; font-weight: 700;
            font-size: 1.15rem; margin: 44px 0 20px;
          }
          .pub-list { max-width: 900px; margin: 0 auto; display: grid; gap: 14px; }
          .pub {
            padding: 20px 24px; display: flex; flex-direction: column; gap: 8px;
            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          }
          .pub:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(47,54,26,.12); border-color: rgba(233,196,106,.5); }
          .pub h4 { color: ${T.text}; margin: 0; font-size: 1rem; font-weight: 700; line-height: 1.4; }
          .pub .venue {
            color: ${T.gold}; font-size: 12.5px; font-weight: 700;
          }

          /* SCIENTIFIC COLLABORATIONS — minimal editorial */
          .collab-list { max-width: 760px; margin: 0 auto 44px; }
          .collab-minimal {
            padding: 6px 0 6px 28px;
            border-left: 2px solid ${T.gold};
          }
          .collab-minimal h4 {
            color: ${T.text}; margin: 0 0 14px; font-size: 1.3rem; font-weight: 600; line-height: 1.4;
          }
          .collab-minimal p {
            color: ${T.muted}; margin: 0 0 22px; font-size: 15px; line-height: 1.8; max-width: 620px;
          }
          .collab-meta {
            display: flex; flex-wrap: wrap; row-gap: 8px;
            padding-top: 18px; border-top: 1px solid ${T.border};
          }
          .collab-meta span {
            color: ${T.gold}; font-size: 11.5px; font-weight: 700;
            text-transform: uppercase; letter-spacing: .08em;
          }
          .collab-meta span:not(:last-child)::after {
            content: "·"; color: ${T.border}; margin: 0 14px; font-weight: 400;
          }

          /* PLACEHOLDER + GALLERY */
          .gallery-tabs {
            display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
            margin-bottom: 30px;
          }
          .gallery-tab {
            padding: 10px 22px; border-radius: 999px; font-size: 14px; font-weight: 700;
            font-family: inherit; cursor: pointer;
            color: ${T.green}; background: ${T.soft}; border: 1px solid ${T.border};
            transition: background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
          }
          .gallery-tab:hover { transform: translateY(-1px); }
          .gallery-tab.active {
            color: #fff; background: ${T.green}; border-color: ${T.green};
          }
          .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
          .ph {
            aspect-ratio: 4 / 3; border-radius: 16px;
            background: repeating-linear-gradient(45deg, ${T.light}, ${T.light} 10px, ${T.soft} 10px, ${T.soft} 20px);
            border: 1px dashed rgba(97,114,78,.35);
            display: flex; align-items: center; justify-content: center; text-align: center;
          }
          .ph.tall { aspect-ratio: 1 / 1; border-radius: 50%; }
          .ph span { color: ${T.muted}; font-size: 11.5px; padding: 8px; font-weight: 600; }

          .gitem {
            margin: 0; border-radius: 16px; overflow: hidden;
            border: 1px solid ${T.border}; background: ${T.white};
            box-shadow: 0 10px 28px rgba(47,54,26,.08); position: relative;
          }
          .gitem img {
            width: 100%; aspect-ratio: 4 / 3; object-fit: cover; object-position: center 20%; display: block;
            transition: transform .4s ease;
          }
          .gitem:hover img { transform: scale(1.05); }

          .tavatar {
            width: 90px; height: 90px; margin: 0 auto 12px; border-radius: 50%;
            background: linear-gradient(135deg, #e9c46a, ${T.green});
            color: #fff; font-size: 30px; font-weight: 800;
            display: flex; align-items: center; justify-content: center;
          }

          /* TEAM */
          .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
          .tcard { padding: 24px; text-align: center; }
          .tcard .ph.tall { width: 96px; height: 96px; margin: 0 auto 12px; }
          .tcard h4 { color: ${T.text}; margin: 0; font-size: 1.05rem; font-weight: 700; }
          .tcard p { color: ${T.muted}; margin: 6px 0 0; font-size: 12.5px; line-height: 1.45; }

          /* PARTNER CTA */
          .partner {
            background: linear-gradient(160deg, ${T.deep}, ${T.green});
            border-radius: 28px; padding: clamp(34px, 5vw, 60px); text-align: center; color: #fff;
          }
          .partner h2 { color: #fff; font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 600; margin: 0 0 12px; }
          .partner p { color: rgba(255,255,255,.9); max-width: 620px; margin: 0 auto 26px; line-height: 1.7; }

          /* CONTACT */
          .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
          .contact-card { padding: 28px; }
          .contact-card h4 { color: ${T.green}; margin: 0 0 14px; }
          .contact-card p { color: ${T.muted}; margin: 0 0 8px; line-height: 1.6; font-size: 14px; }
          .contact-card a { color: ${T.green}; font-weight: 700; text-decoration: none; }

          html { scroll-behavior: smooth; }
          [id] { scroll-margin-top: 70px; }

          @media (max-width: 960px) {
            .lead-grid, .contact-grid { grid-template-columns: 1fr; }
            .stem-grid, .g3, .comm-grid, .team-grid { grid-template-columns: 1fr 1fr; }
            .gallery-grid { grid-template-columns: 1fr 1fr; }
            .stat-row { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 640px) {
            .stat-row { grid-template-columns: 1fr 1fr; }
            .stem-grid, .g3, .comm-grid, .team-grid { grid-template-columns: 1fr; }
            .bg-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* HERO */}
        <header className="vhero">
          <div className="vwrap">
            <div className="vhero-grid">
              <div className="vhero-copy">
                <p className="veyebrow">VORIC · VAAYU Occupational Respiratory Illness Clinic</p>
                <h1>Protecting Those Who Serve</h1>
                <p className="lead">
                  Traffic police, public-transport employees, construction workers,
                  municipal workers and professional drivers face prolonged exposure
                  to pollution, dust and smoke. Running since November 2023, VORIC —
                  a social-impact initiative of VAAYU Chest &amp; Sleep Specialists
                  and the VAAYU Respiratory Foundation — has brought comprehensive
                  respiratory and preventive healthcare to over 11,000 of these
                  high-risk workers across Bengaluru.
                </p>
              </div>

              <figure className="vhero-photo">
                <img src={gSpirometry} alt="A Bengaluru traffic police officer undergoing a spirometry lung-function test at a VORIC roadside screening camp" />
              </figure>
            </div>

            <div className="stat-row">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="num">{s.n}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* STICKY SUBNAV */}
        <nav className="vsubnav">
          <ul>
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>

        {/* ABOUT */}
        <section id="about" className="vsection white">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">About VORIC</p>
              <h2 className="vheading">A continuing platform, not just a camp</h2>
              <p className="vtext" style={{ marginTop: 16 }}>
                The VAAYU Occupational Respiratory Illness Clinic studies and
                addresses the impact of pollution on Bengaluru's traffic police
                and other people routinely exposed to air pollution, exhaust
                fumes, dust, smoke and other workplace hazards — connecting
                workplace screening with treatment, education, research and
                policy advocacy.
              </p>
            </div>
            <div className="g3">
              {[
                ["Preventive and Therapeutic Screening", "Comprehensive respiratory and general health assessment brought to the workplace."],
                ["Advanced lung testing", "Spirometry and Forced Oscillation Technique with Fractional exhaled Nitric Oxide (FeNO) and chest radiograph where available."],
                ["Care & follow-up", "Doctor consultation, early treatment, referral, education and long-term follow-up."],
                ["Health education", "Practical guidance on lung health, pollution exposure and protective measures."],
                ["Research & data", "Structured, de-identified data that builds occupational-health evidence."],
                ["Policy engagement", "Sharing findings with institutions to encourage healthier systems."],
              ].map(([h, t]) => (
                <div className="svc vcard" key={h}>
                  <h4>{h}</h4>
                  <p style={{ color: T.muted, margin: 0, fontSize: 13.5, lineHeight: 1.6 }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="vsection soft">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Why This Work Matters</p>
              <h2 className="vheading">Those who protect and build our cities often remain unprotected</h2>
            </div>
            <div className="lead-grid">
              <div className="vcard svc">
                <h4>Higher risk because of</h4>
                <ul className="chip-list">
                  <li>Daily exposure to dust and pollutants</li>
                  <li>Long working hours in congested urban environments</li>
                  <li>Limited access to routine preventive health screening</li>
                  <li>Delayed recognition of respiratory symptoms</li>
                  <li>Coexisting hypertension, diabetes and other risks</li>
                </ul>
              </div>
              <div className="vcard svc">
                <h4>Early detection can help</h4>
                <ul className="chip-list">
                  <li>Identify respiratory disease before irreversible damage</li>
                  <li>Improve quality of life</li>
                  <li>Reduce illness-related absenteeism</li>
                  <li>Lower long-term healthcare expenditure</li>
                  <li>Encourage timely treatment and protective practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BACKGROUND & AIM */}
        <section id="background" className="vsection white">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Background &amp; Aim</p>
              <h2 className="vheading">The impact of pollution on Bengaluru's traffic police</h2>
            </div>

            <div className="bg-grid">
              <div className="bg-stat vcard">
                <div className="bg-num">~30%</div>
                <p>of urban air pollution comes from vehicular traffic emissions</p>
              </div>
              <div className="bg-stat vcard">
                <div className="bg-num">Top 5</div>
                <p>respiratory disease is among the leading causes of illness and death</p>
              </div>
              <div className="bg-stat vcard">
                <div className="bg-num">Nov 2023</div>
                <p>VORIC began as a movement to act on pollution and occupational health</p>
              </div>
            </div>

            <div className="bg-copy">
              <p>
                Air pollution is rising with rapid urbanisation and
                industrialisation, especially in the metros — and vehicular
                traffic emissions are one of its biggest sources. Occupational
                exposure to this pollution is a significant, often overlooked
                health risk for traffic police, bus and transport staff,
                construction and municipal workers, and professional drivers.
              </p>
              <p>
                Constant exposure to exhaust fumes and particulate matter affects
                far more than the lungs. Long-term exposure is linked to heart
                disease, stroke, chronic obstructive pulmonary disease and other
                conditions — the impact of respiratory disease is now recognised
                as one of <strong>multimorbidity</strong>, affecting the lungs,
                heart and virtually every organ in the body.
              </p>
              <p>
                In November 2023, VAAYU Chest &amp; Sleep Specialists started a
                movement to do something about pollution and occupational health —
                the genesis of VORIC. It remains one of the few committed
                occupational respiratory and general-health platforms addressing
                both individual care and the larger issue of pollution: impacting
                individuals, informing policy, and adding to science.
              </p>
            </div>
          </div>
        </section>

        {/* STEM */}
        <section id="stem" className="vsection soft">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">The VORIC Approach</p>
              <h2 className="vheading">The STEM Model</h2>
              <p className="vtext" style={{ marginTop: 14 }}>Screen · Test · Educate · Medicate</p>
            </div>
            <div className="stem-grid">
              {STEM.map((s) => (
                <div className="stem-card vcard" key={s.letter}>
                  <div className="stem-badge">{s.letter}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="vsection white">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">What Screening Includes</p>
              <h2 className="vheading">Comprehensive respiratory &amp; preventive assessment</h2>
            </div>
            <div className="g3">
              {SERVICES.map((s) => (
                <div className="svc vcard" key={s.head}>
                  <h4>{s.head}</h4>
                  <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITIES */}
        <section id="communities" className="vsection soft">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Who We Serve</p>
              <h2 className="vheading">High-risk occupational communities</h2>
            </div>
            <div className="comm-grid">
              {COMMUNITIES.map(([icon, h, t]) => (
                <div className="comm vcard" key={h}>
                  <span className="comm-icon">{icon}</span>
                  <h4>{h}</h4>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section id="impact" className="vsection white">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Our Impact</p>
              <h2 className="vheading">11,000+ people reached — and growing</h2>
            </div>
            <div className="vcard svc" style={{ maxWidth: 720, margin: "0 auto 26px", padding: 0, overflow: "hidden" }}>
              <table className="impact-table">
                <thead><tr><th>Group</th><th style={{ textAlign: "right" }}>People screened</th></tr></thead>
                <tbody>
                  <tr><td>Traffic police personnel</td><td>3,287</td></tr>
                  <tr><td>BMTC &amp; KSRTC bus crew</td><td>4,389</td></tr>
                  <tr><td>Construction workers</td><td>3,000+</td></tr>
                  <tr><td>Paurakarmikas</td><td>240+</td></tr>
                  <tr><td>Total reach</td><td>11,000+</td></tr>
                </tbody>
              </table>
            </div>
            <div className="vcenter" style={{ margin: "0 auto", maxWidth: 820 }}>
              <p className="vtext">
                VORIC has helped identify previously undiagnosed respiratory
                conditions, detect metabolic concerns such as hypertension and
                diabetes, initiate early treatment, improve awareness of lung
                health, and build a foundation for long-term follow-up and
                preventive policy.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="vsection soft">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">How VORIC Works</p>
              <h2 className="vheading">From the workplace to long-term impact</h2>
            </div>
            <div className="steps">
              {STEPS.map(([h, t], i) => (
                <div className="step vcard" key={h}>
                  <span className="n">{i + 1}</span>
                  <div><h4>{h}</h4><p>{t}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="vsection white">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Achievements &amp; Collaborations</p>
              <h2 className="vheading">Turning frontline screening into evidence</h2>
            </div>

            <h3 className="pub-head" style={{ marginTop: 0 }}>Scientific Collaborations</h3>
            <div className="collab-list">
              {COLLABORATIONS.map((c) => (
                <div className="collab-minimal" key={c.title}>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                  <div className="collab-meta">
                    <span>{c.years}-{c.yearsLabel}</span>
                    {c.partners.map((p) => (
                      <span key={p.abbr}>{p.abbr} — {p.full}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="pub-head">Publications &amp; Presentations</h3>
            <div className="pub-list">
              {PUBLICATIONS.map((p) => (
                <div className="pub vcard" key={p.title}>
                  <h4>{p.title}</h4>
                  <span className="venue">{p.venue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POLICY */}
        <section id="policy" className="vsection soft">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Policy Engagement</p>
              <h2 className="vheading">Evidence that can influence healthier systems</h2>
              <p className="vtext" style={{ marginTop: 14 }}>
                VORIC has shared screening findings and programme proposals with
                the Bengaluru Traffic Police, BMTC and KSRTC, the Greater
                Bengaluru Authority, public-health authorities and state-government
                representatives — encouraging regular occupational-health
                screening, longitudinal follow-up, better protective measures and
                evidence-based preventive programmes.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="vsection white">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Gallery</p>
              <h2 className="vheading">VORIC in action</h2>
            </div>
            <div className="gallery-tabs">
              {GALLERY_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`gallery-tab${galleryTab === tab ? " active" : ""}`}
                  onClick={() => setGalleryTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="gallery-grid">
              {GALLERY.filter((g) => galleryTab === "All" || g.category === galleryTab).map((g) => (
                <figure className="gitem" key={g.cap}>
                  <img src={g.src} alt={g.cap} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER */}
        <section id="partner" className="vsection soft">
          <div className="vwrap">
            <div className="partner">
              <h2>Bring occupational-health screening to your workforce</h2>
              <p>
                VORIC works with government departments, transport organisations,
                construction companies, municipal bodies, corporates, industrial
                units, foundations, CSR teams and academic institutions — through
                one-time camps, periodic screening, follow-up programmes, health
                education and research collaboration.
              </p>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <a className="btn solid" href="#contact">Request a Screening Camp</a>
                <a className="btn ghost" href="#contact">Explore a CSR Partnership</a>
                <a className="btn ghost" href="#contact">Collaborate on Research</a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="vsection white">
          <div className="vwrap">
            <div className="vcenter">
              <p className="veyebrow">Contact</p>
              <h2 className="vheading">Get in touch with the VORIC team</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-card vcard">
                <h4>VAAYU Respiratory Foundation</h4>
                <p>Ground &amp; 3rd Floor, 37/17, 10th Main Road,<br />5th Block, Jayanagar, Bengaluru — 560041</p>
                <p>80G Registration No.: AAETV1658D24BL02</p>
              </div>
              <div className="contact-card vcard">
                <h4>Reach Us</h4>
                <p>Phone: <a href="tel:+916364928680">+91 63649 28680</a></p>
                <p>Email: <a href="mailto:admin@vaayuchest.com">admin@vaayuchest.com</a></p>
                <p>Email: <a href="mailto:anmol@vaayuchest.com">anmol@vaayuchest.com</a></p>
                <p>
                  <a href="https://maps.google.com/?q=VAAYU+Chest+and+Sleep+Specialists+Jayanagar+Bengaluru" target="_blank" rel="noopener noreferrer">
                    View on Google Maps →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Voric;
