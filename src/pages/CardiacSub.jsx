import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import cardiacHero from "../assets/img/react.jpg";
import overviewImg from "../assets/img/cardiac-overview.jpg";
import outcomeImg from "../assets/img/sarcoid-treatment.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=cardiac-rehab-page&utm_medium=eka-web&utm_campaign=web-navigation";

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

const candidates = [
  {
    title: "After heart attack or angioplasty",
    text: "For patients who need supervised recovery, stamina rebuilding, and safe return to daily activity after a cardiac event.",
  },
  {
    title: "After bypass or valve surgery",
    text: "For post-surgical recovery with gradual exercise, breathing support, wound-safe movement, and confidence rebuilding.",
  },
  {
    title: "Heart failure or reduced stamina",
    text: "For patients with breathlessness, fatigue, reduced exercise tolerance, and difficulty doing routine activities.",
  },
  {
    title: "Stable angina or rhythm concerns",
    text: "For medically stable patients who need monitored activity planning and risk-factor control.",
  },
  {
    title: "High cardiac risk profile",
    text: "For hypertension, obesity, diabetes, sedentary lifestyle, smoking history, or family risk needing prevention-focused care.",
  },
  {
    title: "Heart-lung recovery needs",
    text: "For patients whose cardiac recovery is affected by breathlessness, COPD, sleep apnea, low oxygen, or weak conditioning.",
  },
];

const programIncludes = [
  {
    title: "Baseline cardiac and functional assessment",
    text: "Review of cardiac history, current medicines, symptoms, exercise tolerance, blood pressure response, and recovery goals.",
  },
  {
    title: "Medically supervised exercise training",
    text: "Gradual endurance and strengthening sessions planned around safety, stamina, heart condition, and day-to-day needs.",
  },
  {
    title: "ECG, vitals and symptom monitoring",
    text: "Monitoring during sessions helps improve confidence and supports safer progression for eligible patients.",
  },
  {
    title: "Breathing and respiratory therapy",
    text: "Useful when heart recovery is affected by breathlessness, post-surgery breathing restriction, COPD, ILD, or sleep concerns.",
  },
  {
    title: "Diet, weight and risk-factor guidance",
    text: "Heart-focused nutrition and lifestyle guidance for blood pressure, diabetes, obesity, cholesterol, and long-term prevention.",
  },
  {
    title: "Stress, sleep and confidence support",
    text: "Recovery also needs mental wellbeing, sleep quality, anxiety control, and patient education for long-term adherence.",
  },
];

const outcomes = [
  "Improved stamina and exercise tolerance",
  "Safer return to walking, work and daily activity",
  "Better confidence after heart attack, angioplasty or surgery",
  "Improved breathlessness control during activity",
  "Better understanding of medicines and warning signs",
  "Support for weight, blood pressure and lifestyle risk reduction",
  "Reduced fear of activity after a cardiac event",
  "Long-term heart-lung recovery planning",
];

const pathway = [
  {
    step: "01",
    title: "Cardiac recovery review",
    text: "We understand diagnosis, procedure history, medicines, symptoms, limitations, and medical clearance.",
  },
  {
    step: "02",
    title: "Functional baseline",
    text: "Exercise tolerance, breathlessness, fatigue, oxygen response, blood pressure and risk factors are assessed.",
  },
  {
    step: "03",
    title: "Personalized rehab plan",
    text: "A structured plan is built around the patient’s stage of recovery, safety level, and long-term goals.",
  },
  {
    step: "04",
    title: "Supervised sessions",
    text: "Patients progress through monitored exercise, breathing support, education, nutrition and lifestyle care.",
  },
  {
    step: "05",
    title: "Home plan and follow-up",
    text: "Progress is tracked and patients are guided on safe independent activity and long-term prevention.",
  },
];

const vaayuReasons = [
  {
    title: "Heart-lung recovery focus",
    text: "Vaayu’s rehab approach considers breathing, stamina, sleep, oxygen response and functional recovery together.",
  },
  {
    title: "Outpatient-first convenience",
    text: "Structured rehabilitation support without making patients navigate disconnected centers for every need.",
  },
  {
    title: "Pulmonary and cardiac rehab integration",
    text: "Helpful for patients with both cardiac disease and respiratory limitations such as COPD, ILD or sleep apnea.",
  },
  {
    title: "Wellness support under one roof",
    text: "Nutrition, stress care, breathing therapy, yoga-informed recovery, and long-term follow-up support recovery beyond exercise.",
  },
];

const faqs = [
  {
    q: "Who needs cardiac rehabilitation?",
    a:
      "Cardiac rehabilitation is useful after heart attack, angioplasty, bypass surgery, valve surgery, heart failure, stable angina, or when a person has reduced stamina and needs medically guided return to activity.",
  },
  {
    q: "Is cardiac rehab only exercise?",
    a:
      "No. Cardiac rehab is a structured program that includes supervised exercise, monitoring, education, risk-factor control, breathing support, nutrition, stress management and long-term prevention planning.",
  },
  {
    q: "Can cardiac rehab help breathlessness after a heart problem?",
    a:
      "Yes. Breathlessness may come from heart disease, lung disease, deconditioning, sleep apnea or anxiety. Vaayu evaluates the heart-lung recovery picture and plans rehab accordingly.",
  },
  {
    q: "Is cardiac rehab safe for elderly patients?",
    a:
      "For suitable and medically cleared patients, cardiac rehab can be adapted to age, stamina, comorbidities and baseline function with gradual progression and monitoring.",
  },
  {
    q: "Why choose Vaayu for cardiac rehab?",
    a:
      "Vaayu brings a respiratory and rehabilitation strength to cardiac recovery. This is useful for patients whose heart recovery is affected by breathlessness, low stamina, poor sleep, oxygen issues or chronic lung disease.",
  },
];

const CardiacSub = () => {
  const seoJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Cardiac Rehabilitation at Vaayu",
    serviceType: "Cardiac Rehabilitation",
    areaServed: "Bengaluru",
    provider: {
      "@type": "MedicalClinic",
      name: "Vaayu Chest and Sleep Specialists",
      medicalSpecialty: ["Pulmonology", "Respiratory Therapy", "Cardiac Rehabilitation"],
    },
    description:
      "Cardiac rehabilitation in Bengaluru with supervised exercise, monitoring, breathing therapy, nutrition, stress support and heart-lung recovery planning.",
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
          Cardiac Rehabilitation in Bengaluru | Heart-Lung Recovery Program | Vaayu
        </title>
        <meta
          name="description"
          content="Cardiac rehabilitation in Bengaluru at Vaayu for post-heart attack, angioplasty, bypass surgery, valve surgery, heart failure and stamina recovery. Supervised exercise, breathing therapy, diet, stress care and long-term heart-lung rehab."
        />
        <meta
          name="keywords"
          content="cardiac rehabilitation Bengaluru, cardiac rehab Bengaluru, heart rehabilitation near me, post heart attack rehab Bengaluru, angioplasty recovery rehab, bypass surgery rehabilitation, heart failure rehabilitation, supervised cardiac exercise, heart lung recovery program, cardiac physiotherapy Bengaluru, Vaayu cardiac rehab"
        />
        <link rel="canonical" href="https://vaayuchest.com/rehab-wellness/cardiac-rehabilitation" />
        <meta property="og:title" content="Cardiac Rehabilitation in Bengaluru | Vaayu" />
        <meta
          property="og:description"
          content="Structured cardiac rehab with supervised exercise, breathing therapy, nutrition, stress support and heart-lung recovery planning."
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
          max-width: 830px;
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
          min-height: 94svh;
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
          opacity: .25;
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
          min-height: 430px;
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

        .vc-grid-3,
        .vc-grid-4 {
          display: grid;
          gap: 16px;
        }

        .vc-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .vc-grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .vc-card {
          border-radius: 26px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(97,114,78,.14);
          box-shadow: 0 16px 42px rgba(47,54,26,.08);
          color: ${T.ink};
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

        .vc-dark-card {
          border-radius: 28px;
          padding: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.16);
          color: ${T.text};
          min-height: 180px;
        }

        .vc-dark-card h3 {
          margin: 0;
          color: ${T.text};
          font-size: 18px;
          line-height: 1.25;
        }

        .vc-dark-card p {
          color: ${T.muted};
          line-height: 1.65;
          font-size: 14px;
          margin-top: 10px;
        }

        .vc-number {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: ${T.green};
          color: ${T.text};
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 18px;
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
          max-width: 840px;
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

          .vc-grid-3,
          .vc-grid-4 {
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
          .vc-card,
          .vc-dark-card,
          .vc-cta {
            border-radius: 24px;
            padding: 24px;
          }

          .vc-grid-3,
          .vc-grid-4,
          .vc-path-grid {
            grid-template-columns: 1fr;
          }

          .vc-btn-primary,
          .vc-btn-secondary {
            width: 100%;
          }

          .vc-section-title {
            text-align: left;
            margin-bottom: 34px;
          }

          .vc-image-panel {
            min-height: 280px;
          }
        }
      `}</style>

      <div className="vc-hidden-seo">
        Cardiac rehabilitation Bengaluru, cardiac rehab Bengaluru, heart rehabilitation near me,
        post heart attack rehabilitation Bengaluru, angioplasty recovery rehab, bypass surgery
        rehabilitation, valve surgery recovery, heart failure rehabilitation, supervised cardiac
        exercise program, cardiac physiotherapy Bengaluru, heart-lung recovery program, cardiac
        rehab after stent, cardiac rehab after bypass, cardiac recovery center Bengaluru, Vaayu
        cardiac rehabilitation.
      </div>

      <section className="vc-hero">
        <div className="vc-hero-bg">
          <img src={cardiacHero} alt="Cardiac rehabilitation in Bengaluru at Vaayu" />
        </div>

        <div className="vc-wrap vc-hero-layout">
          <motion.div {...fu()}>
            <Chip>Cardiac Rehabilitation</Chip>

            <h1>
              Cardiac Rehabilitation in Bengaluru for <span>safe heart recovery and better stamina.</span>
            </h1>

            <div className="vc-hero-card">
              <p>
                Vaayu’s cardiac rehabilitation program supports patients after <strong>heart attack,
                angioplasty, bypass surgery, valve surgery, heart failure and reduced exercise capacity</strong>
                with supervised recovery, breathing support, lifestyle guidance and long-term heart-lung care.
              </p>
            </div>

            <div className="vc-hero-tags">
              {["Post-heart attack rehab", "Angioplasty recovery", "Bypass rehab", "Heart failure support", "Heart-lung recovery"].map((tag) => (
                <span className="vc-hero-tag" key={tag}>{tag}</span>
              ))}
            </div>

            <div className="vc-btn-row" style={{ marginTop: 28 }}>
              <a href={EKA} target="_blank" rel="noopener noreferrer" className="vc-btn-primary">
                Book Cardiac Rehab Evaluation
              </a>
              <a href="#program" className="vc-btn-secondary">
                View Program
              </a>
            </div>
          </motion.div>

          <motion.div {...fu(0.1)} className="vc-stats-card">
            <h3>Structured recovery for patients who need more than general advice.</h3>
            <p>
              Cardiac rehab helps rebuild confidence after a heart event. Vaayu adds respiratory and
              functional recovery strength for patients whose stamina, breathing and activity are affected.
            </p>

            <div className="vc-stat-grid">
              <div className="vc-stat">
                <strong>Safe</strong>
                <span>progressive exercise</span>
              </div>
              <div className="vc-stat">
                <strong>Heart</strong>
                <span>risk reduction</span>
              </div>
              <div className="vc-stat">
                <strong>Lung</strong>
                <span>breathing support</span>
              </div>
              <div className="vc-stat">
                <strong>Long</strong>
                <span>term follow-up</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap vc-two-grid">
          <motion.div {...fu()} className="vc-content-panel">
            <Chip dark>Vaayu Recovery Care</Chip>
            <h2>What is cardiac rehabilitation?</h2>
            <p>
              Cardiac rehabilitation is a medically guided recovery program designed to help people
              rebuild stamina, improve exercise tolerance, understand risk factors and return to daily
              life after a heart event or cardiac procedure.
            </p>
            <p>
              At Vaayu, cardiac rehab is planned with a heart-lung recovery lens. This is especially
              useful for patients who feel breathless, weak, anxious, deconditioned or unsure about
              how much activity is safe after treatment.
            </p>
            <div className="vc-highlight">
              The goal is not only recovery. The goal is safer activity, better confidence, fewer setbacks
              and long-term prevention.
            </div>
          </motion.div>

          <motion.div {...fu(0.1)} className="vc-image-panel">
            <img src={overviewImg} alt="Cardiac rehabilitation program overview at Vaayu" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="Who Can Benefit"
            title="Cardiac rehab for recovery after heart events, procedures and reduced stamina."
            text="This section targets high-intent searches such as post-heart attack rehab, angioplasty recovery, bypass surgery rehab, heart failure rehabilitation and cardiac physiotherapy."
          />

          <div className="vc-grid-3">
            {candidates.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="vc-section vc-dark">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="Program Includes"
            title="A complete cardiac rehab program beyond exercise."
            text="Cardiac rehabilitation works best when exercise, monitoring, education, nutrition, breathing and stress support are connected."
            light
          />

          <div className="vc-grid-3">
            {programIncludes.map((item, index) => (
              <motion.div {...fu(index * 0.05)} className="vc-dark-card" key={item.title}>
                <span className="vc-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap vc-two-grid">
          <motion.div {...fu()} className="vc-image-panel">
            <img src={outcomeImg} alt="Cardiac rehab outcomes and recovery support at Vaayu" loading="lazy" />
          </motion.div>

          <motion.div {...fu(0.1)} className="vc-content-panel">
            <Chip dark>Why Vaayu</Chip>
            <h2>Why choose Vaayu for cardiac rehab?</h2>
            <p>
              Many patients recovering from heart disease also struggle with breathlessness, fatigue,
              poor sleep, low confidence, obesity, deconditioning or co-existing lung disease. Vaayu’s
              rehab ecosystem is built to support this larger recovery picture.
            </p>

            <div style={{ display: "grid", gap: 12, marginTop: 24 }}>
              {vaayuReasons.map((item) => (
                <div className="vc-highlight" key={item.title}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="Recovery Pathway"
            title="From evaluation to safer independent activity."
            text="A step-by-step structure helps patients understand what happens during cardiac rehabilitation."
            light
          />

          <div className="vc-path-grid">
            {pathway.map((item, index) => (
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
            chip="Outcomes"
            title="What cardiac rehabilitation can help improve."
            text="Outcome-focused content helps patients understand the value of structured rehab and supports SEO intent."
          />

          <div className="vc-grid-4">
            {outcomes.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-card" key={item}>
                <span className="vc-number">{index + 1}</span>
                <h3>{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-light">
        <div className="vc-wrap">
          <SectionTitle
            chip="FAQs"
            title="Common questions about cardiac rehabilitation."
            text="These FAQs improve long-tail search visibility and help patients understand when cardiac rehab is useful."
          />

          <div className="vc-faq-wrap">
            {faqs.map((faq, index) => (
              <motion.div {...fu(index * 0.04)} className="vc-faq" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-section vc-dark">
        <div className="vc-wrap">
          <motion.div {...fu()} className="vc-cta">
            <Chip>Book a Consultation</Chip>
            <h2>Rebuild heart strength, stamina and confidence with structured cardiac rehab.</h2>
            <p>
              Book a cardiac rehabilitation evaluation at Vaayu in Bengaluru for supervised recovery,
              heart-lung support, lifestyle guidance and long-term prevention planning.
            </p>
            <div className="vc-btn-row" style={{ justifyContent: "center", marginTop: 28 }}>
              <a href={EKA} target="_blank" rel="noopener noreferrer" className="vc-btn-primary">
                Book an Appointment
              </a>
              <a href="/pulmonary-rehab" className="vc-btn-secondary">
                Explore Pulmonary Rehab
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CardiacSub;
