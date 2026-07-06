import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import rehabHero from "../assets/img/rehabsub.jpg";
import rehabInfo from "../assets/img/rehabInfo.jpg";
import offerImg from "../assets/img/offerImg.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=pulmonary-rehab-page&utm_medium=eka-web&utm_campaign=web-navigation";

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

const whoNeedsRehab = [
  {
    title: "Reduced stamina and physical endurance",
    text: "For people who feel exhausted easily, struggle with walking, climbing stairs, or returning to normal daily activity.",
  },
  {
    title: "Repeated hospitalizations or flare-ups",
    text: "For patients who experience frequent admissions, worsening symptoms, or recurring respiratory setbacks.",
  },
  {
    title: "Breathlessness affecting routine life",
    text: "For difficulty performing routine activities comfortably due to breathlessness, fatigue, or reduced lung efficiency.",
  },
  {
    title: "Dependence on oxygen or excessive medication",
    text: "For patients looking to improve functional capacity, breathing confidence, and reduce long-term dependency where possible.",
  },
  {
    title: "Slow recovery after illness or hospitalization",
    text: "For patients who feel physically weak, deconditioned, or unable to regain strength after illness, ICU stay, or prolonged treatment.",
  },
  {
    title: "Reduced confidence in movement and activity",
    text: "For people avoiding activity due to fear of breathlessness, oxygen drop, fatigue, or physical instability.",
  },

];

const symptomsHelped = [
  "Breathlessness while walking",
  "Reduced exercise capacity",
  "Fatigue and low stamina",
  "Oxygen drop during activity",
  "Chronic cough and mucus",
  "Poor confidence while moving",
  "Repeated hospital visits",
  "Post-ICU muscle weakness",
  "Anxiety related to breathing",
  "Difficulty returning to work or routine",
];

const diseasePrograms = [
  {
    title: "Pulmonary Rehabilitation for COPD",
    tag: "COPD rehabilitation Bengaluru",
    text: "Improves endurance, inhaler confidence, breath control, oxygen use, and flare-up prevention for COPD, emphysema, and chronic bronchitis patients.",
    link: "/specialty-clinic/copd",
    linkText: "Explore COPD Care",
  },
  {
    title: "Pulmonary Rehabilitation for Lung Fibrosis / ILD",
    tag: "pulmonary fibrosis rehabilitation",
    text: "Designed for ILD patients with breathlessness, reduced walking capacity, oxygen needs, and difficulty maintaining daily activity.",
    link: "/specialty-clinic/ild",
    linkText: "Explore ILD Care",
  },
  {
    title: "Bronchiectasis Rehabilitation",
    tag: "bronchiectasis rehab Bengaluru",
    text: "Focuses on airway clearance, infection prevention, breathing strategies, exercise conditioning, and long-term self-management.",
    link: "/patient-resources/education/bronchiectasis",
    linkText: "Explore Bronchiectasis Care",
  },
  {
    title: "Post-COVID & Post-ICU Lung Recovery",
    tag: "long COVID lung recovery Bengaluru",
    text: "Supports patients with persistent breathlessness, fatigue, deconditioning, oxygen concerns, and reduced confidence after illness or admission.",
    link: "#",
    linkText: "",
  },
  {
    title: "Pulmonary Hypertension Rehab Support",
    tag: "pulmonary hypertension rehab",
    text: "Provides safe, monitored activity planning for patients with heart-lung limitation, low exercise tolerance, and oxygen needs.",
    link: "/specialty-clinic/pulmonary-hypertension",
    linkText: "Explore PH Care",
  },
  {
    title: "Pre-Surgery & Post-Surgery Optimization",
    tag: "lung surgery rehabilitation",
    text: "Builds breathing capacity before procedures and supports recovery after thoracic surgery or complex respiratory hospitalization.",
    link: "#",
    linkText: "",
  },
];

const rehabProcess = [
  {
    title: "Baseline assessment",
    text: "Detailed evaluation of symptoms, diagnosis history, oxygen requirement, activity limitation, sleep concerns, and overall functional capacity.",
  },
  {
    title: "Oxygen and exercise planning",
    text: "Builds safe activity levels based on oxygen response, stamina, exertional limitation, and recovery goals.",
  },
  {
    title: "Breathing and airway training",
    text: "Includes breathing retraining, airway clearance techniques, respiratory muscle conditioning, and energy conservation strategies.",
  },
  {
    title: "Wellness integration",
    text: "Integrates nutrition, psychology, respiratory yoga, sleep optimization, smoking cessation, and home wellness planning.",
  },
    {
    title: "Endurance and strength conditioning",
    text: "Structured endurance, walking, cycling, posture correction, and muscle strengthening designed to improve physical capacity safely.",
  },
  {
    title: "Occupational therapy support",
    text: "Helps patients improve independence, confidence, daily activity performance, and return-to-routine functional ability.",
  },
];
const deliveryModes = [
  {
    title: "Center-Based Pulmonary Rehab",
    text: "Supervised sessions at Vaayu with structured monitoring, progressive training, and periodic outcome tracking.",
  },
  {
    title: "Home-Based Pulmonary Rehab",
    text: "Designed for elderly, oxygen-dependent, mobility-limited, or outstation patients who need guided rehab at home.",
  },
  {
    title: "Hybrid Pulmonary Rehab",
    text: "Combines center visits, home plans, and follow-ups for continuity without unnecessary travel.",
  },
];

const outcomes = [
  "Improved 6MWT and walking distance",
  "Reduced breathlessness during daily activity",
  "Better oxygen efficiency during exertion",
  "Improved endurance and muscle strength",
  "Reduced fatigue and post-illness weakness",
  "Better airway clearance and mucus control",
  "Greater confidence in movement",
  "Lower risk of repeated hospital visits",
];

const faqs = [
  {
    q: "What is pulmonary rehabilitation?",
    a: "Pulmonary rehabilitation is a medically supervised, multidisciplinary program that improves breathlessness, exercise capacity, fatigue, oxygen use, and quality of life in people with chronic respiratory disease.",
  },
  {
    q: "Who needs pulmonary rehabilitation?",
    a: "It is useful for patients with COPD, lung fibrosis or ILD, bronchiectasis, post-COVID breathlessness, post-ICU weakness, pulmonary hypertension, oxygen dependency, poor stamina, or repeated respiratory hospitalizations.",
  },
  {
    q: "Can pulmonary rehabilitation reduce breathlessness?",
    a: "Yes. Rehab improves breathing efficiency, muscle conditioning, activity pacing, and confidence, which can reduce breathlessness during routine activities.",
  },
  {
    q: "Is pulmonary rehab useful for COPD and lung fibrosis?",
    a: "Yes. COPD rehab and lung fibrosis rehab are important parts of long-term care. They help improve exercise tolerance, support oxygen management, and improve daily function.",
  },
  {
    q: "Do you offer home pulmonary rehabilitation in Bengaluru?",
    a: "Yes. Vaayu offers center-based, home-based, and hybrid pulmonary rehabilitation depending on the patient's condition, mobility, oxygen needs, and travel limitations.",
  },
  {
    q: "Can oxygen-dependent or elderly patients do pulmonary rehab?",
    a: "Yes. Rehabilitation can be planned safely for oxygen-dependent and elderly patients with proper assessment, monitoring, and individualized intensity.",
  },
];

const FaqItem = ({ faq, index, openFaq, setOpenFaq }) => {
  const open = openFaq === index;

  return (
    <div className="vc-faq-item">
      <button
        className="vc-faq-q"
        onClick={() => setOpenFaq(open ? null : index)}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="vc-faq-a-wrap"
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PulmonarySub = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="vc-page">
      <Helmet>
        <title>
          Pulmonary Rehabilitation in Bengaluru for COPD, Lung Fibrosis & Post-Hospital Recovery | Vaayu
        </title>
        <meta
          name="description"
          content="Pulmonary rehabilitation in Bengaluru at Vaayu for COPD, lung fibrosis, bronchiectasis, post-COVID breathlessness, post-ICU weakness, oxygen dependency, and chronic respiratory recovery."
        />
        <meta
          name="keywords"
          content="pulmonary rehabilitation Bengaluru, pulmonary rehab Bengaluru, COPD rehabilitation Bengaluru, lung fibrosis rehabilitation, ILD rehabilitation Bengaluru, bronchiectasis rehab, post COVID lung recovery Bengaluru, post ICU pulmonary rehabilitation, home pulmonary rehabilitation Bengaluru, lung exercise program Bengaluru, breathing exercise clinic Bengaluru, oxygen therapy rehabilitation, pulmonary rehab at home Bengaluru, Vaayu pulmonary rehabilitation"
        />
        <link rel="canonical" href="https://vaayuchest.com/pulmonary-rehab/pulmonary" />

        <meta
          property="og:title"
          content="Pulmonary Rehabilitation in Bengaluru | Vaayu Chest & Sleep Specialists"
        />
        <meta
          property="og:description"
          content="Disease-specific pulmonary rehabilitation for COPD, ILD, bronchiectasis, post-COVID recovery, oxygen dependency, and chronic breathlessness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaayuchest.com/pulmonary-rehab/pulmonary" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Vaayu Chest & Sleep Specialists - Pulmonary Rehabilitation",
            medicalSpecialty: ["Pulmonology", "PhysicalMedicine", "Rehabilitation"],
            areaServed: "Bengaluru",
            url: "https://vaayuchest.com/pulmonary-rehab/pulmonary",
            description:
              "Pulmonary rehabilitation in Bengaluru for COPD, lung fibrosis, bronchiectasis, post-COVID recovery, post-ICU weakness, oxygen dependency, and chronic respiratory disease.",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <style>{`
        .vc-page,
        .vc-page * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
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
          opacity: .42;
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
          min-height: 100svh;
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
          opacity: .22;
          filter: saturate(.78) contrast(1.05);
        }

        .vc-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.97), rgba(47,54,26,.86), rgba(97,114,78,.48)),
            radial-gradient(circle at 74% 38%, rgba(215,222,201,.18), transparent 34%);
        }

        .vc-hero-layout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) 410px;
          gap: 48px;
          align-items: center;
          padding: 120px 0 74px;
        }

        .vc-hero h1 {
          margin: 22px 0 0;
          max-width: 950px;
          font-size: clamp(2.15rem, 4.1vw, 4rem);
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

        .vc-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .vc-feature-card {
          border-radius: 28px;
          padding: 28px;
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(97,114,78,.14);
          color: ${T.ink};
          box-shadow: 0 18px 44px rgba(47,54,26,.08);
        }

        .vc-feature-card h3 {
          margin: 0;
          color: ${T.ink};
          font-size: 19px;
          line-height: 1.25;
        }

        .vc-feature-card p {
          margin: 10px 0 0;
          color: #5d684b;
          font-size: 14px;
          line-height: 1.65;
        }

        .vc-two {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 34px;
          align-items: stretch;
        }

        .vc-image-card {
          min-height: 460px;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(47,54,26,.18);
          border: 1px solid rgba(97,114,78,.14);
        }

        .vc-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(.9) contrast(1.03);
        }

        .vc-premium-panel {
          border-radius: 34px;
          padding: 42px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .vc-premium-panel h2 {
          margin: 18px 0 0;
          color: ${T.text};
          font-size: clamp(1.9rem, 3vw, 2.8rem);
          line-height: 1.13;
          letter-spacing: -.035em;
        }

        .vc-premium-panel p {
          color: ${T.muted};
          line-height: 1.8;
          font-size: 15px;
        }

        .vc-clean-list {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .vc-clean-item {
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.14);
          color: ${T.muted};
          line-height: 1.55;
          font-size: 14px;
        }

        .vc-program-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .vc-program-card {
          border-radius: 30px;
          padding: 28px;
          background: #3f482b;
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: 0 28px 70px rgba(0,0,0,.24);
          display: flex;
          flex-direction: column;
          min-height: 320px;
        }

        .vc-program-tag {
          color: ${T.sage};
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .vc-program-card h3 {
          margin: 14px 0 0;
          color: #ffffff;
          font-size: 21px;
          line-height: 1.2;
        }

        .vc-program-card p {
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.65;
          margin-top: 12px;
          flex: 1;
        }

        .vc-program-card a {
          margin-top: 18px;
          color: ${T.text};
          font-weight: 700;
          font-size: 13px;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .vc-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .vc-process-card {
          border-radius: 26px;
          padding: 24px;
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(97,114,78,.14);
          box-shadow: 0 16px 42px rgba(47,54,26,.08);
        }

        .vc-process-step {
          color: ${T.green};
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .08em;
        }

        .vc-process-card h3 {
          margin: 10px 0 0;
          color: ${T.ink};
          font-size: 18px;
          line-height: 1.25;
        }

        .vc-process-card p {
          color: #5d684b;
          font-size: 14px;
          line-height: 1.65;
          margin: 10px 0 0;
        }

        .vc-mode-grid,
        .vc-outcome-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .vc-mode-card,
        .vc-outcome-card {
          border-radius: 24px;
          padding: 24px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.16);
          color: ${T.muted};
          box-shadow: 0 18px 48px rgba(47,54,26,.16);
        }

        .vc-mode-card h3,
        .vc-outcome-card h3 {
          margin: 0;
          color: ${T.text};
          font-size: 18px;
        }

        .vc-mode-card p,
        .vc-outcome-card p {
          margin: 10px 0 0;
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.65;
        }

        .vc-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 26px;
        }

        .vc-tag {
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(97,114,78,.08);
          border: 1px solid rgba(97,114,78,.16);
          color: ${T.ink};
          font-size: 13px;
          font-weight: 650;
        }

        .vc-faq-list {
          display: grid;
          gap: 12px;
          max-width: 900px;
          margin: 0 auto;
        }

        .vc-faq-item {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(97,114,78,.16);
          background: rgba(255,255,255,.78);
          color: ${T.ink};
        }

        .vc-faq-q {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          text-align: left;
          color: ${T.ink};
          cursor: pointer;
          font-weight: 750;
          font-size: 15px;
        }

        .vc-faq-q span:last-child {
          color: ${T.green};
          font-size: 24px;
          line-height: 1;
          flex-shrink: 0;
        }

        .vc-faq-a-wrap {
          overflow: hidden;
        }

        .vc-faq-a-wrap p {
          margin: 0;
          padding: 0 22px 20px;
          color: #5d684b;
          font-size: 14.5px;
          line-height: 1.75;
        }

        .vc-cta {
          border-radius: 36px;
          padding: 58px 36px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.08), rgba(255,248,239,.03)),
            ${T.green2};
          text-align: center;
          box-shadow: 0 28px 74px rgba(47,54,26,.18);
          border: 1px solid rgba(215,222,201,.18);
        }

        .vc-cta h2 {
          margin: 18px auto 0;
          color: ${T.text};
          font-size: clamp(1.9rem, 3.4vw, 3rem);
          line-height: 1.12;
          max-width: 850px;
        }

        .vc-cta p {
          max-width: 740px;
          margin: 16px auto 0;
          color: ${T.muted};
          line-height: 1.75;
        }

        .vc-hidden-seo {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        @media (max-width: 1100px) {
          .vc-hero-layout,
          .vc-two {
            grid-template-columns: 1fr;
          }

          .vc-stats-card {
            max-width: 620px;
          }

          .vc-feature-grid,
          .vc-program-grid,
          .vc-process-grid,
          .vc-mode-grid,
          .vc-outcome-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .vc-wrap {
            width: min(90%, 440px);
          }

          .vc-section {
            padding: 72px 0;
          }

          .vc-hero {
            min-height: auto;
          }

          .vc-hero-layout {
            padding: 104px 0 58px;
            gap: 28px;
          }

          .vc-hero h1 {
            font-size: clamp(2rem, 9vw, 3.2rem);
            line-height: 1.14;
          }

          .vc-hero-card,
          .vc-stats-card,
          .vc-premium-panel,
          .vc-cta {
            border-radius: 24px;
            padding: 24px;
          }

          .vc-feature-grid,
          .vc-program-grid,
          .vc-process-grid,
          .vc-mode-grid,
          .vc-outcome-grid {
            grid-template-columns: 1fr;
          }

          .vc-image-card {
            min-height: 280px;
            border-radius: 24px;
          }

          .vc-section-title {
            text-align: left;
            margin-bottom: 34px;
          }

          .vc-section-title h2 {
            font-size: clamp(1.65rem, 8vw, 2.4rem);
          }

          .vc-btn-primary,
          .vc-btn-secondary {
            width: 100%;
          }

          .vc-stat-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="vc-hidden-seo">
        pulmonary rehabilitation Bengaluru, pulmonary rehab Bengaluru, lung rehabilitation Bengaluru,
        COPD rehabilitation Bengaluru, lung fibrosis rehabilitation Bengaluru, ILD pulmonary rehab,
        bronchiectasis rehabilitation Bengaluru, post COVID lung recovery Bengaluru, long COVID
        breathlessness rehab, post ICU pulmonary rehabilitation, pulmonary rehab at home Bengaluru,
        home pulmonary rehabilitation Bengaluru, oxygen therapy rehabilitation, breathing exercise
        clinic Bengaluru, lung exercise program Bengaluru, pulmonary rehab for elderly patients,
        pulmonary rehab for oxygen dependent patients, Vaayu pulmonary rehabilitation.
      </div>

      <section className="vc-hero">
        <div className="vc-hero-bg">
          <img src={rehabHero} alt="Pulmonary rehabilitation center at Vaayu Bengaluru" />
        </div>

        <div className="vc-wrap vc-hero-layout">
          <motion.div {...fu()}>
            <Chip>Pulmonary Rehabilitation Center</Chip>

            <h1>
              Pulmonary Rehabilitation in Bengaluru for{" "}
  <span>COPD, Lung Fibrosis, Bronchiectasis & Long-Term Respiratory Recovery</span>
            </h1>

            <div className="vc-hero-card">
              <p>
                Pulmonary rehabilitation is a medically supervised, multidisciplinary recovery
                program designed to improve <strong>breathlessness, exercise capacity, fatigue,
                oxygen use, quality of life, and long-term function</strong> in people with chronic
                respiratory disease.
              </p>
            </div>

            <div className="vc-hero-tags">
              {["COPD Rehab", "ILD Rehab", "Post-COVID Recovery", "Home Rehab", "Oxygen Support"].map((tag) => (
                <span className="vc-hero-tag" key={tag}>{tag}</span>
              ))}
            </div>

            <div className="vc-btn-row" style={{ marginTop: 28 }}>
              <a href={EKA} target="_blank" rel="noopener noreferrer" className="vc-btn-primary">
                Book Rehab Assessment
              </a>
              <a href="#who-needs-rehab" className="vc-btn-secondary">
                Who Needs Rehab?
              </a>
            </div>
          </motion.div>

          <motion.div {...fu(0.12)} className="vc-stats-card">
            <h3>Vaayu Pulmonary Rehab is built for long-term respiratory recovery, not temporary symptom relief.</h3>
            <p>
              Vaayu combines diagnosis, specialist care, pulmonary rehabilitation, wellness, sleep support,
              and follow-up within one outpatient-first respiratory center.
            </p>

            <div className="vc-stat-grid">
              <div className="vc-stat">
                <strong>15K+</strong>
                <span>Rehab visits over 2.5 years</span>
              </div>
              <div className="vc-stat">
                <strong>20K+</strong>
                <span>Patients supported</span>
              </div>
              <div className="vc-stat">
                <strong>3</strong>
                <span>Center, home and hybrid pathways</span>
              </div>
              <div className="vc-stat">
                <strong>360°</strong>
                <span>Rehab + wellness + follow-up</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <div className="vc-two">
            <motion.div {...fu()} className="vc-image-card">
              <img src={rehabInfo} alt="What is pulmonary rehabilitation at Vaayu" loading="lazy" />
            </motion.div>

            <motion.div {...fu(0.1)} className="vc-premium-panel">
              <Chip>Beyond Exercise</Chip>
              <h2>What is Pulmonary Rehabilitation?</h2>
              <p>
                Pulmonary rehabilitation is not just exercise. It is a structured lung recovery
                program that combines medical assessment, breathing training, endurance building,
                airway clearance, oxygen optimization, nutrition, psychology, yoga, and home
                planning.
              </p>
              <p>
                At Vaayu, rehab is integrated with pulmonology, diagnostics, sleep care, and
                long-term follow-up so patients are not left moving between disconnected providers.
              </p>

              <div className="vc-clean-list">
                <div className="vc-clean-item">Designed for chronic respiratory disease and post-hospital recovery</div>
                <div className="vc-clean-item">Useful when medications alone are not improving breathlessness</div>
                <div className="vc-clean-item">Personalized after baseline assessment, 6MWT, and oxygen review</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="who-needs-rehab" className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="Who Should Consider Rehab?"
            title="Pulmonary rehab is for patients who want function, stamina and confidence back."
text="A structured recovery program focused on improving endurance, breathing efficiency, physical capacity and overall quality of life."     />

          <div className="vc-feature-grid">
            {whoNeedsRehab.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-feature-card" key={item.title}>
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
            chip="Disease-Specific Rehab"
            title="Pulmonary rehab programs designed around your diagnosis"
           text="Rehabilitation plans are personalized based on breathing limitation, endurance level, oxygen support, recovery goals and overall respiratory condition."
            light
          />

          <div className="vc-program-grid">
            {diseasePrograms.map((program, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-program-card" key={program.title}>
                <div className="vc-program-tag">{program.tag}</div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <Link to={program.link}>{program.linkText}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="Symptoms We Help Improve"
            title="Rehab focuses on the problems patients actually feel every day."
            text="The aim is to improve practical function: walking, breathing, oxygen control, fatigue, confidence, and independence."
          />

          <div className="vc-tag-cloud">
            {symptomsHelped.map((item) => (
              <span className="vc-tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <div className="vc-two">
            <motion.div {...fu()} className="vc-premium-panel">
              <Chip>What Happens During Rehab?</Chip>
              <h2>A structured process, not a generic exercise plan.</h2>
              <p>
                Google and patients both need clarity on what rehab includes. Vaayu's approach is
                assessment-led, progressive, and outcome-tracked, helping patients understand exactly
                what happens during rehabilitation.
              </p>
              <div className="vc-clean-list">
                {["Baseline testing", "Exercise prescription", "Breathing retraining", "Oxygen review", "Outcome tracking"].map((item) => (
                  <div className="vc-clean-item" key={item}>{item}</div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fu(0.1)} className="vc-image-card">
              <img src={offerImg} alt="Pulmonary rehabilitation training and recovery support" loading="lazy" />
            </motion.div>
          </div>

          <div className="vc-process-grid" style={{ marginTop: 30 }}>
            {rehabProcess.map((step, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-process-card" key={step.title}>
                <div className="vc-process-step">{String(index + 1).padStart(2, "0")}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="vc-wrap">
          <SectionTitle
            chip="Center, Home & Hybrid Rehab"
            title="Pulmonary rehabilitation that fits the patient, not the other way around."
            text="Home pulmonary rehabilitation in Bengaluru is a major underserved search need. Vaayu supports patients across center-based, home-based and hybrid pathways."
            light
          />

          <div className="vc-mode-grid">
            {deliveryModes.map((mode, index) => (
              <motion.div {...fu(index * 0.06)} className="vc-mode-card" key={mode.title}>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="Outcomes That Matter"
            title="What Pulmonary Rehabilitation can improve"
            text="Vaayu tracks functional outcomes such as walking capacity, oxygen response, fatigue, breathlessness and daily independence."
          />

          <div className="vc-outcome-grid">
            {outcomes.map((item, index) => (
              <motion.div {...fu(index * 0.035)} className="vc-feature-card" key={item}>
                <h3>{item}</h3>
                <p>
                  Rehab goals are personalized and tracked over time based on diagnosis, baseline capacity,
                  oxygen response and daily activity needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="Why Vaayu"
            title="Vaayu's pulmonary rehab is part of an outpatient respiratory care ecosystem."
            text="The program is connected to diagnosis, specialist review, wellness, sleep care, and long-term follow-up, instead of being a standalone exercise service."
            light
          />

          <div className="vc-feature-grid">
            {[
              {
                title: "Outpatient-first care",
                text: "Hospital-grade respiratory support designed to reduce avoidable hospital contact and improve long-term function.",
              },
              {
                title: "Multidisciplinary rehab",
                text: "Pulmonology, respiratory physiotherapy, nutrition, psychology, yoga, sleep support and follow-up under one pathway.",
              },
              {
                title: "Same-day diagnostic support",
                text: "PFT, DLCO, FeNO, 6MWT, sleep evaluation and oxygen assessment can support better rehab planning.",
              },
              {
                title: "Continuity after hospitalization",
                text: "Rehab supports recovery after ICU, pneumonia, COVID, COPD flare-ups and other respiratory admissions.",
              },
              {
                title: "EMR-tracked follow-up",
                text: "Progress can be reviewed across visits so care is based on trajectory, not isolated sessions.",
              },
              {
                title: "Built for complex patients",
                text: "Ideal for patients who feel they are not improving, have tried multiple providers or need a structured long-term plan.",
              },
            ].map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-mode-card" key={item.title}>
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
            title="Pulmonary Rehabilitation FAQs"
            text="Answers built for patients and search intent around COPD rehab, lung fibrosis rehab, home rehab, oxygen dependency and post-hospital recovery."
          />

          <div className="vc-faq-list">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                index={index}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="vc-wrap">
          <motion.div {...fu()} className="vc-cta">
            <Chip>Pulmonary Rehab Assessment</Chip>
            <h2>Ready to breathe better, move better and recover with structure?</h2>
            <p>
              Book a pulmonary rehabilitation assessment at Vaayu in Bengaluru for COPD, lung
              fibrosis, bronchiectasis, post-COVID breathlessness, post-ICU weakness, oxygen needs,
              or long-term respiratory recovery.
            </p>

            <div className="vc-btn-row" style={{ justifyContent: "center", marginTop: 28 }}>
              <a href={EKA} target="_blank" rel="noopener noreferrer" className="vc-btn-primary">
                Book Rehab Assessment
              </a>
              <Link to="/specialty-clinic/copd" className="vc-btn-secondary">
                View COPD Rehab Care
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PulmonarySub;
