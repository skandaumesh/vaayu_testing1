import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import opdBanner from "../assets/img/opd.jpg";
import img7 from "../assets/img/DOCTOR !!!the dream of many.jpg";
import consultation from "../assets/img/Lung Cancer Specialist in Nagpur  -  Dr_ Sameeksha Dubey.jpg";
import diagnostics from "../assets/img/Pearly Penile Papules Removal Price_ A Comparison of Treatment Options (1).jpg";
import followup from "../assets/img/Affordable, Effective, and Many Ways to Use This.jpg";
import pharmacy from "../assets/img/Affordable, Effective, and Many Ways to Use This.jpg";
import allergy from "../assets/img/adult-allergy.jpg";
import panels from "../assets/img/panels.png";
import xray from "../assets/img/xray.jpg";
import pft from "../assets/img/Breathe Easy Again_ How Lung Transplants Can Give a Second Chance at Life.jpg";
import ctscan from "../assets/img/IMG_0215.jpg";
const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=general-opd-page&utm_medium=eka-web&utm_campaign=web-navigation";
const T = {
  bg: "#58623b",
  deep: "#2f361a",
  green: "#61724e",
  green2: "#4f5831",
  sage: "#9fab90",
  muted: "#d7dec9",
  cream: "#cce1bb",
  cream2: "#e3f0df",
  light: "#eaf1e6",
  text: "#fff8ef",
  ink: "#293018",
};

const E = [0.22, 1, 0.36, 1];

const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.7, delay, ease: E },
});

const Chip = ({ children, dark = false }) => (
  <span className={dark ? "vc-chip dark" : "vc-chip"}>{children}</span>
);

const SectionTitle = ({ chip, title, text, light = false }) => (
  <motion.div {...fu()} className="vc-section-title">
    {chip && <Chip dark={!light}>{chip}</Chip>}
    <h2 className={light ? "light" : ""}>{title}</h2>
    {text && <p className={light ? "light" : ""}>{text}</p>}
  </motion.div>
);

const patientSignals = [
  {
    title: "Persistent cough or mucus",
    text: "For cough that keeps returning, lasts more than expected, or comes with wheeze or chest discomfort.",
  },
  {
    title: "Breathlessness or low stamina",
    text: "For patients who feel short of breath while walking, climbing stairs, working, or sleeping.",
  },
  {
    title: "Frequent chest infections",
    text: "For repeated respiratory infections, fever with cough, suspected pneumonia, or post-infection weakness.",
  },
  {
    title: "Asthma, COPD or allergy symptoms",
    text: "For wheeze, inhaler review, allergy triggers, poor control, or recurrent flare-ups.",
  },
  {
    title: "Sleep-related breathing concerns",
    text: "For snoring, daytime sleepiness, suspected sleep apnea, or low oxygen during sleep.",
  },
  {
    title: "Need for second opinion",
    text: "For unclear symptoms, multiple treatments, or complex lung reports that need structured review.",
  },
];

const opdHighlights = [
  {
    img: consultation,
    title: "Pulmonologist Consultation",
    text:
      "Specialist-led OPD consultation for cough, breathlessness, wheeze, asthma, COPD, ILD, infections, allergy, and sleep-related breathing concerns.",
    tags: ["Pulmonology OPD", "Second opinion", "Chronic cough", "Breathlessness"],
  },
  {
    img: diagnostics,
    title: "Same-Visit Lung Diagnostics",
    text:
      "Integrated testing support including PFT, DLCO, FeNO, 6-minute walk test, chest X-ray, allergy testing, and sleep evaluation where needed.",
    tags: ["PFT", "DLCO", "FeNO", "6MWT"],
  },
  {
    img: followup,
    title: "Follow-up & Long-Term Care",
    text:
      "Connected care plans for patients who need monitoring, medication review, pulmonary rehabilitation, sleep care, or chronic disease follow-up.",
    tags: ["Follow-up", "Rehab referral", "EMR tracking", "Care plan"],
  },
];

const diagnosticServices = [
  {
    img: pft,
    title: "Pulmonary Function Testing",
    text:
      "PFT and spirometry help identify asthma, COPD, airflow obstruction, restriction, and baseline lung capacity.",
  },
  {
    img: pharmacy,
    title: "DLCO & Advanced Lung Assessment",
    text:
      "DLCO helps evaluate oxygen transfer and hidden lung damage in ILD, emphysema, pulmonary vascular disease, and unexplained breathlessness.",
  },
  {
    img: panels,
    title: "FeNO, Allergy & Airway Inflammation",
    text:
      "FeNO and allergy testing help identify airway inflammation, allergic triggers, and treatment direction in asthma and chronic cough.",
  },
  {
    img: xray,
    title: "Chest Imaging Support",
    text:
      "Chest X-ray and CT guidance support evaluation of infections, nodules, pleural disease, fibrosis, and structural lung concerns.",
  },
  {
    img: ctscan,
    title: "6-Minute Walk & Oxygen Assessment",
    text:
      "6MWT helps assess exercise tolerance, exertional oxygen drop, and readiness for pulmonary rehabilitation.",
  },
  {
    img: allergy,
    title: "Respiratory Pharmacy & Education",
    text:
      "Support for inhaler technique, respiratory medicines, vaccines, home delivery guidance, and patient education.",
  },
];

const conditions = [
  {
    title: "Asthma & Allergy",
    text:
      "Evaluation for wheeze, breathlessness, allergic triggers, inhaler response, and poor asthma control.",
    link: "/specialty-clinic/asthma",
  },
  {
    title: "COPD & Emphysema",
    text:
      "Long-term care for chronic bronchitis, emphysema, breathlessness, flare-ups, and pulmonary rehabilitation referral.",
    link: "/specialty-clinic/copd",
  },
  {
    title: "ILD / Lung Fibrosis",
    text:
      "Specialist review for dry cough, progressive breathlessness, HRCT findings, oxygen needs, and rehab planning.",
    link: "/specialty-clinic/ild",
  },
  {
    title: "Sleep Apnea & Snoring",
    text:
      "Sleep-related breathing assessment with sleep study guidance and integrated respiratory sleep care.",
    link: "/sleep-clinic",
  },
  {
    title: "Bronchiectasis & Infections",
    text:
      "Care for recurrent chest infections, chronic sputum, airway clearance needs, and long-term monitoring.",
    link: "/specialty-clinic/bronchiectasis",
  },
  {
    title: "Pulmonary Hypertension",
    text:
      "Assessment for unexplained breathlessness, low oxygen, right-heart strain, and pulmonary vascular disease suspicion.",
    link: "/specialty-clinic/pulmonary-hypertension",
  },
];

const carePathway = [
  {
    step: "01",
    title: "Book OPD Visit",
    text: "Schedule through website, WhatsApp, phone, or Eka for convenient outpatient care.",
  },
  {
    step: "02",
    title: "Specialist Review",
    text: "Pulmonology team reviews symptoms, history, medicines, reports, and risk factors.",
  },
  {
    step: "03",
    title: "Targeted Diagnostics",
    text: "Tests such as PFT, DLCO, FeNO, 6MWT, imaging, allergy, or sleep study are planned only when needed.",
  },
  {
    step: "04",
    title: "Same-Day Direction",
    text: "Reports and clinical findings are connected into a clear treatment or follow-up plan.",
  },
  {
    step: "05",
    title: "Connected Care",
    text: "Patients are linked to specialty clinics, pulmonary rehabilitation, sleep care, pharmacy, or wellness support.",
  },
];

const faqs = [
  {
    q: "When should I visit a respiratory OPD?",
    a:
      "Visit a respiratory OPD if you have persistent cough, breathlessness, wheezing, chest tightness, recurrent infections, low oxygen, abnormal chest reports, or symptoms not improving with routine medicines.",
  },
  {
    q: "What makes Vaayu’s General Respiratory OPD different?",
    a:
      "Vaayu combines pulmonology consultation, advanced lung diagnostics, respiratory pharmacy, sleep care, pulmonary rehabilitation referral, and follow-up planning under one outpatient-first model.",
  },
  {
    q: "Can I get PFT, DLCO, FeNO or 6-minute walk test at Vaayu?",
    a:
      "Yes. Vaayu offers advanced outpatient respiratory tests such as PFT, DLCO, FeNO, 6-minute walk test, allergy testing, sleep evaluation, and imaging support based on clinical need.",
  },
  {
    q: "Do you treat both simple and complex respiratory problems?",
    a:
      "Yes. The OPD supports common breathing concerns such as cough, allergy, asthma, and infections, while also connecting complex patients to specialty care for COPD, ILD, bronchiectasis, pulmonary hypertension, sleep apnea, and pulmonary rehabilitation.",
  },
  {
    q: "Is tele-consultation available after the first visit?",
    a:
      "For selected patients, online follow-up can be considered once the condition is clearly assessed and the care plan is defined.",
  },
];

const GeneralOPD = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const seoJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Vaayu General Respiratory OPD",
    medicalSpecialty: ["Pulmonology", "AllergyImmunology", "SleepMedicine", "RespiratoryTherapy"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "KA",
      addressCountry: "IN",
    },
    url: "https://vaayuchest.com/general-opd",
    description:
      "Respiratory OPD in Bengaluru offering pulmonologist consultation, PFT, DLCO, FeNO, 6-minute walk test, chest imaging, allergy testing, sleep assessment, respiratory pharmacy and follow-up care.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="vc-page">
      <Helmet>
        <title>
          Respiratory OPD in Bengaluru | Pulmonologist, PFT, DLCO & Allergy Testing | Vaayu
        </title>
        <meta
          name="description"
          content="Vaayu General Respiratory OPD in Bengaluru offers pulmonologist consultations, PFT, DLCO, FeNO, 6MWT, chest imaging, allergy testing, respiratory pharmacy, sleep assessment and connected follow-up care."
        />
        <meta
          name="keywords"
          content="respiratory OPD Bengaluru, pulmonologist near me, pulmonology clinic Bengaluru, lung specialist Bengaluru, chest specialist Bengaluru, PFT test Bengaluru, DLCO test Bengaluru, FeNO test Bengaluru, 6 minute walk test Bengaluru, chronic cough specialist Bengaluru, breathlessness clinic Bengaluru, allergy testing Bengaluru, respiratory pharmacy Bengaluru, sleep apnea clinic Bengaluru, Vaayu Chest and Sleep Specialists"
        />
        <link rel="canonical" href="https://vaayuchest.com/general-opd" />
        <meta property="og:title" content="Respiratory OPD in Bengaluru | Vaayu Pulmonology Clinic" />
        <meta
          property="og:description"
          content="Pulmonologist consultation, advanced lung diagnostics, allergy testing, sleep assessment, pharmacy and connected respiratory follow-up under one roof."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(seoJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <style>{`
        .vc-page,
        .vc-page * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
.vc-faq-btn {
  width: 100%;
  border: 0;
  background: transparent;
  padding: 0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-start;
  color: #293018;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
        .vc-page {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Inter, system-ui, sans-serif;
          background: ${T.bg};
          color: ${T.text};
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .vc-wrap {
          width: min(92%, 1240px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .vc-section {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
        }

        .vc-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
          color: ${T.ink};
        }

        .vc-dark {
          background:
            radial-gradient(circle at 12% 20%, rgba(215,222,201,.10), transparent 32%),
            radial-gradient(circle at 90% 75%, rgba(159,171,144,.12), transparent 34%),
            ${T.bg};
        }

        .clinical-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .45;
          background-image:
            linear-gradient(rgba(97,114,78,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(97,114,78,.055) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
          -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
        }

        .vc-chip {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(215,222,201,.24);
          background: rgba(255,248,239,.08);
          color: ${T.muted};
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .vc-chip.dark {
          color: ${T.green};
          background: rgba(97,114,78,.07);
          border-color: rgba(97,114,78,.18);
        }

        .vc-section-title {
          max-width: 820px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .vc-section-title h2 {
          margin: 18px 0 0;
          color: ${T.ink};
          font-size: clamp(1.85rem, 3.5vw, 3.1rem);
          line-height: 1.12;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        .vc-section-title h2.light {
          color: ${T.text};
        }

        .vc-section-title p {
          margin: 16px auto 0;
          max-width: 720px;
          color: #5d684b;
          font-size: 15.5px;
          line-height: 1.75;
        }

        .vc-section-title p.light {
          color: ${T.muted};
        }

        .vc-btn-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .vc-btn-primary,
        .vc-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14.5px;
          transition: transform .28s ease, box-shadow .28s ease, background .28s ease;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
          touch-action: manipulation;
        }

        .vc-btn-primary {
          background: ${T.green};
          color: ${T.text};
          box-shadow: 0 16px 40px rgba(47,54,26,.22);
        }

        .vc-btn-secondary {
          background: rgba(255,248,239,.08);
          color: ${T.text};
          border: 1px solid rgba(215,222,201,.28);
        }

        @media (hover: hover) {
          .vc-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 22px 50px rgba(47,54,26,.32);
          }

          .vc-btn-secondary:hover {
            transform: translateY(-2px);
            background: rgba(255,248,239,.14);
          }
        }

        .vc-hero {
          min-height: 92svh;
          min-height: -webkit-fill-available;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.deep};
        }

        .vc-hero-bg {
          position: absolute;
          inset: 0;
        }

        .vc-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .24;
          filter: saturate(.75) contrast(1.05);
        }

        .vc-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.97), rgba(47,54,26,.84), rgba(97,114,78,.5)),
            radial-gradient(circle at 74% 38%, rgba(215,222,201,.18), transparent 34%);
        }

        .vc-hero-layout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) 400px;
          gap: 48px;
          align-items: center;
          padding: 120px 0 74px;
        }

        .vc-hero h1 {
          margin: 22px 0 0;
          max-width: 940px;
          font-size: clamp(2.15rem, 4vw, 3.8rem);
          line-height: 1.08;
          letter-spacing: -.04em;
          font-weight: 700;
          color: ${T.text};
        }

        .vc-hero h1 span {
          color: ${T.muted};
        }

        .vc-hero-card {
          margin-top: 26px;
          max-width: 790px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
        }

        .vc-hero-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 15.5px;
          line-height: 1.75;
        }

        .vc-hero-card strong {
          color: ${T.text};
        }

        .vc-hero-tags {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .vc-hero-tag {
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(159,171,144,.18);
          border: 1px solid rgba(215,222,201,.2);
          color: ${T.muted};
          font-size: 12px;
          font-weight: 600;
        }

        .vc-stats-card {
          border-radius: 30px;
          padding: 28px;
          background: rgba(255,248,239,.095);
          border: 1px solid rgba(215,222,201,.26);
          -webkit-backdrop-filter: blur(18px);
          backdrop-filter: blur(18px);
          box-shadow: 0 30px 80px rgba(47,54,26,.36);
        }

        .vc-stats-card h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.35;
          color: ${T.text};
        }

        .vc-stats-card p {
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.7;
        }

        .vc-stat-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(215,222,201,.16);
          overflow: hidden;
          border-radius: 22px;
        }

        .vc-stat {
          padding: 18px;
          background: rgba(47,54,26,.25);
        }

        .vc-stat strong {
          display: block;
          color: ${T.text};
          font-size: 24px;
          font-weight: 750;
        }

        .vc-stat span {
          color: ${T.muted};
          font-size: 12px;
        }

        .vc-two-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: stretch;
        }

        .vc-image-panel {
          position: relative;
          min-height: 420px;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 26px 72px rgba(47,54,26,.18);
          border: 1px solid rgba(97,114,78,.14);
        }

        .vc-image-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(.9) brightness(.9);
        }

        .vc-content-panel {
          border-radius: 34px;
          padding: 42px;
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(97,114,78,.14);
          box-shadow: 0 26px 72px rgba(47,54,26,.11);
        }

        .vc-content-panel h2 {
          margin: 16px 0 0;
          color: ${T.ink};
          font-size: clamp(1.7rem, 3vw, 2.6rem);
          line-height: 1.12;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        .vc-content-panel p {
          color: #526043;
          font-size: 15px;
          line-height: 1.8;
        }

        .vc-highlight {
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(97,114,78,.07);
          border-left: 3px solid ${T.green};
          color: ${T.ink};
          font-size: 14px;
          line-height: 1.65;
        }

        .vc-signal-grid,
        .vc-service-grid,
        .vc-condition-grid {
          display: grid;
          gap: 16px;
        }

        .vc-signal-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .vc-service-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .vc-condition-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .vc-card {
          border-radius: 26px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(97,114,78,.14);
          box-shadow: 0 16px 42px rgba(47,54,26,.08);
          color: ${T.ink};
          overflow: hidden;
        }

        .vc-card-pad {
          padding: 24px;
        }

        .vc-card h3 {
          margin: 0;
          color: ${T.ink};
          font-size: 18px;
          line-height: 1.25;
          font-weight: 700;
        }

        .vc-card p {
          color: #5d684b;
          line-height: 1.65;
          font-size: 14px;
          margin: 10px 0 0;
        }

        .vc-card-img {
          height: 190px;
          overflow: hidden;
        }

        .vc-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(.9) saturate(.9);
          transition: transform .35s ease;
        }

        .vc-card:hover .vc-card-img img {
          transform: scale(1.04);
        }

        .vc-tags {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .vc-tag {
          border-radius: 999px;
          padding: 6px 10px;
          background: rgba(97,114,78,.09);
          color: ${T.green2};
          font-size: 11.5px;
          font-weight: 700;
        }

        .vc-dark-card {
          border-radius: 30px;
          padding: 34px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.04)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .vc-dark-card h3 {
          margin: 0;
          color: ${T.text};
          font-size: 22px;
          line-height: 1.25;
        }

        .vc-dark-card p {
          color: ${T.muted};
          line-height: 1.75;
          font-size: 14.5px;
        }

        .vc-diagnostic-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .vc-diagnostic-item {
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: 18px;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(97,114,78,.13);
          box-shadow: 0 14px 34px rgba(47,54,26,.08);
        }

        .vc-diagnostic-item img {
          width: 96px;
          height: 96px;
          border-radius: 16px;
          object-fit: cover;
        }

        .vc-diagnostic-item h3 {
          margin: 0;
          color: ${T.ink};
          font-size: 17px;
        }

        .vc-diagnostic-item p {
          margin: 8px 0 0;
          color: #5d684b;
          font-size: 14px;
          line-height: 1.6;
        }

        .vc-path-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .vc-path-card {
          border-radius: 24px;
          padding: 22px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.18);
          min-height: 190px;
        }

        .vc-path-card strong {
          display: block;
          color: ${T.muted};
          font-size: 14px;
          margin-bottom: 14px;
        }

        .vc-path-card h3 {
          margin: 0;
          color: ${T.text};
          font-size: 18px;
          line-height: 1.25;
        }

        .vc-path-card p {
          margin: 10px 0 0;
          color: ${T.muted};
          font-size: 13.5px;
          line-height: 1.6;
        }

        .vc-faq-wrap {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          gap: 12px;
        }

        .vc-faq {
          border-radius: 22px;
          background: rgba(255,255,255,.86);
          border: 1px solid rgba(97,114,78,.14);
          padding: 22px;
          color: ${T.ink};
        }

        .vc-faq h3 {
          margin: 0;
          color: ${T.ink};
          font-size: 16px;
        }

        .vc-faq p {
          color: #5d684b;
          font-size: 14px;
          line-height: 1.7;
          margin: 10px 0 0;
        }

        .vc-cta {
          border-radius: 38px;
          padding: 54px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.10), rgba(255,248,239,.04)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.2);
          box-shadow: 0 30px 90px rgba(47,54,26,.22);
          text-align: center;
        }

        .vc-cta h2 {
          margin: 16px auto 0;
          max-width: 820px;
          color: ${T.text};
          font-size: clamp(1.9rem, 3.5vw, 3.1rem);
          line-height: 1.12;
          letter-spacing: -.03em;
        }

        .vc-cta p {
          max-width: 760px;
          margin: 16px auto 0;
          color: ${T.muted};
          line-height: 1.75;
          font-size: 15.5px;
        }

        .vc-hidden-seo {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        @media (max-width: 1080px) {
          .vc-hero-layout,
          .vc-two-grid {
            grid-template-columns: 1fr;
          }

          .vc-stats-card {
            max-width: 680px;
          }

          .vc-signal-grid,
          .vc-service-grid,
          .vc-condition-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .vc-path-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 760px) {
          .vc-section {
            padding: 74px 0;
          }

          .vc-wrap {
            width: min(90%, 440px);
          }

          .vc-hero {
            min-height: auto;
          }

          .vc-hero-layout {
            padding: 112px 0 64px;
          }

          .vc-hero h1 {
            font-size: clamp(2rem, 10vw, 3.1rem);
          }

          .vc-hero-card,
          .vc-stats-card,
          .vc-content-panel,
          .vc-dark-card,
          .vc-cta {
            border-radius: 24px;
            padding: 24px;
          }


.vc-faq-btn span:last-child {
  color: #61724e;
  font-size: 24px;
  line-height: 1;
}
          .vc-signal-grid,
          .vc-service-grid,
          .vc-condition-grid,
          .vc-diagnostic-grid,
          .vc-path-grid {
            grid-template-columns: 1fr;
          }

          .vc-diagnostic-item {
            grid-template-columns: 1fr;
          }

          .vc-diagnostic-item img {
            width: 100%;
            height: 180px;
          }

          .vc-btn-primary,
          .vc-btn-secondary {
            width: 100%;
          }

          .vc-section-title {
            text-align: left;
            margin-bottom: 34px;
          }
        }
      `}
      </style>

      <div className="vc-hidden-seo">
        Respiratory OPD Bengaluru, pulmonology OPD Bengaluru, lung specialist near me,
        chest specialist Bengaluru, chronic cough specialist Bengaluru, breathlessness clinic
        Bengaluru, PFT test Bengaluru, DLCO test Bengaluru, FeNO test Bengaluru, 6 minute walk
        test Bengaluru, allergy testing Bengaluru, sleep apnea clinic Bengaluru, respiratory
        pharmacy Bengaluru, Vaayu Chest and Sleep Specialists, outpatient respiratory center
        Bengaluru, advanced lung diagnostics Bengaluru.
      </div>

      <section className="vc-hero">
        <div className="vc-hero-bg">
          <img src={opdBanner} alt="Vaayu respiratory OPD in Bengaluru" />
        </div>

        <div className="vc-wrap vc-hero-layout">
          <motion.div {...fu()}>
            <Chip>General Respiratory OPD</Chip>

            <h1>
              Respiratory OPD in Bengaluru for <span>cough, breathlessness, allergy and lung care.</span>
            </h1>

            <div className="vc-hero-card">
              <p>
                Vaayu’s General Respiratory OPD brings <strong>pulmonologist consultation,
                advanced lung diagnostics, allergy testing, sleep assessment, respiratory pharmacy
                and connected follow-up</strong> into one outpatient-first care pathway.
              </p>
            </div>

            <div className="vc-hero-tags">
              {["Pulmonologist near me", "PFT / DLCO", "Chronic cough", "Breathlessness", "Allergy testing"].map((tag) => (
                <span className="vc-hero-tag" key={tag}>{tag}</span>
              ))}
            </div>

            <div className="vc-btn-row" style={{ marginTop: 28 }}>
              <a href={EKA} target="_blank" rel="noopener noreferrer" className="vc-btn-primary">
                Book OPD Consultation
              </a>
              <a href="#diagnostics" className="vc-btn-secondary">
                View Diagnostics
              </a>
            </div>
          </motion.div>

          <motion.div {...fu(0.1)} className="vc-stats-card">
            <h3>For patients who need a clear respiratory direction, not a disconnected visit.</h3>
            <p>
              From everyday cough to complex breathlessness, Vaayu connects OPD care with diagnostics,
              specialty clinics, sleep medicine and pulmonary rehabilitation when required.
            </p>

            <div className="vc-stat-grid">
              <div className="vc-stat">
                <strong>20K+</strong>
                <span>patients supported</span>
              </div>
              <div className="vc-stat">
                <strong>15K+</strong>
                <span>rehab visits</span>
              </div>
              <div className="vc-stat">
                <strong>360°</strong>
                <span>connected care</span>
              </div>
              <div className="vc-stat">
                <strong></strong>
                <span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap vc-two-grid">
          <motion.div {...fu()} className="vc-image-panel">
            <img src={img7} alt="Pulmonologist consultation at Vaayu Bengaluru" loading="lazy" />
          </motion.div>

          <motion.div {...fu(0.1)} className="vc-content-panel">
            <Chip dark>Vaayu OPD Model</Chip>
            <h2>Not just a quick consultation. A connected respiratory care entry point.</h2>
            <p>
              Many patients visit a clinic, then a lab, then another specialist, and still do not
              get a clear plan. Vaayu’s OPD is designed to reduce that fragmentation by connecting
              consultation, testing, medicine guidance, specialty referral and follow-up under one roof.
            </p>
            <div className="vc-highlight">
              Best suited for patients looking for clarity, structured care and long-term respiratory direction.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="Who Should Visit"
            title="Visit Vaayu OPD if breathing symptoms are recurring, unclear or not improving."
            text="This section targets common patient search needs such as chronic cough, breathlessness, wheezing, repeated infections, allergy symptoms and sleep-related breathing concerns."
          />

          <div className="vc-signal-grid">
            {patientSignals.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-card vc-card-pad" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="OPD Services"
            title="Pulmonology consultation, diagnostics and follow-up under one roof."
            text="Vaayu OPD supports both routine respiratory concerns and patients who may need advanced evaluation."
            light
          />

          <div className="vc-service-grid">
            {opdHighlights.map((item, index) => (
              <motion.div {...fu(index * 0.06)} className="vc-card" key={item.title}>
                <div className="vc-card-img">
                  <img src={item.img} alt={`${item.title} at Vaayu Bengaluru`} loading="lazy" />
                </div>
                <div className="vc-card-pad">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="vc-tags">
                    {item.tags.map((tag) => (
                      <span className="vc-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostics" className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="Advanced Lung Diagnostics"
            title="Respiratory tests explained by why they matter."
            text="Vaayu does not just list tests. Each test is connected to clinical decision-making, diagnosis, follow-up and rehabilitation planning."
          />

          <div className="vc-diagnostic-grid">
            {diagnosticServices.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-diagnostic-item" key={item.title}>
                <img src={item.img} alt={`${item.title} Bengaluru`} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="Conditions We Support"
            title="General OPD care connected to Vaayu specialty clinics."
            text="Patients who need more than a one-time visit can be connected to disease-specific care pathways."
          />

          <div className="vc-condition-grid">
            {conditions.map((item, index) => (
              <motion.div {...fu(index * 0.05)} className="vc-card vc-card-pad" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div style={{ marginTop: 18 }}>
                  <Link to={item.link} className="vc-tag">
                    Learn more
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="Care Pathway"
            title="From OPD visit to clear respiratory plan."
            text="The aim is to reduce repeat visits, confusion and disconnected care."
            light
          />

          <div className="vc-path-grid">
            {carePathway.map((item, index) => (
              <motion.div {...fu(index * 0.06)} className="vc-path-card" key={item.step}>
                <strong>{item.step}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="FAQs"
            title="Common questions about Vaayu General Respiratory OPD."
            text="SEO-rich FAQs help patients understand when to seek care and what services are available."
          />

          <div className="vc-faq-wrap">
            {faqs.map((faq, index) => (
  <motion.div {...fu(index * 0.04)} className="vc-faq" key={faq.q}>
    <button
      type="button"
      onClick={() => setOpenFaq(openFaq === index ? null : index)}
      className="vc-faq-btn"
      aria-expanded={openFaq === index}
    >
      <span>{faq.q}</span>
      <span>{openFaq === index ? "−" : "+"}</span>
    </button>

    {openFaq === index && <p>{faq.a}</p>}
  </motion.div>
))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="vc-wrap">
          <motion.div {...fu()} className="vc-cta">
            <Chip>Book a Consultation</Chip>
            <h2>Need a pulmonologist for cough, breathlessness or abnormal lung reports?</h2>
            <p>
              Book Vaayu’s General Respiratory OPD in Bengaluru for specialist consultation,
              diagnostics, pharmacy support and connected respiratory follow-up.
            </p>
            <div className="vc-btn-row" style={{ justifyContent: "center", marginTop: 28 }}>
              <a href={EKA} target="_blank" rel="noopener noreferrer" className="vc-btn-primary">
                Book an Appointment
              </a>
              <Link to="/pulmonary-rehab" className="vc-btn-secondary">
                Explore Pulmonary Rehab
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GeneralOPD;
