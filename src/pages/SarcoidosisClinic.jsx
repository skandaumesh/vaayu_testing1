import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import heroImage from "../assets/img/lung-diagnosis.jpg";
import consultImage from "../assets/img/medics-his-staff-meet-discuss-lungs-radiography-patient-care-strategy.jpg";
import causeImage from "../assets/img/sarcoid-causes.jpg";
import symptomsImage from "../assets/img/sarcoid-symptoms.jpg";
import treatmentImage from "../assets/img/sarcoid-treatment.jpg";
import lifestyleImage from "../assets/img/hm.png";
import journeyBg from "../assets/img/BANNER2.jpg";
import diagnosisBg from "../assets/img/or.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=sarcoidosis-page&utm_medium=eka-web&utm_campaign=web-navigation";

const T = {
  bg: "#58623b",
  surface: "#4f5831",
  green: "#9fab90",
  greenL: "#d7dec9",
  greenD: "#61724e",
  cream: "#d3e4cd",
  light: "#eef4e9",
  textDark: "#2F361A",
  mutedDark: "#5f6b50",
  border: "rgba(215,222,201,0.20)",
  borderDark: "rgba(97,114,78,.18)",
};

const E = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, delay, ease: E },
});

const Chip = ({ children, dark = true }) => (
  <span className={`sarcoid-chip ${dark ? "dark" : "light"}`}>
    {children}
  </span>
);

const SectionHead = ({ chip, title, text, light = false }) => (
  <motion.div {...fadeUp(0)} className={`section-head ${light ? "light" : ""}`}>
    {chip && <Chip dark={!light}>{chip}</Chip>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </motion.div>
);

const SarcoidosisClinic = () => {
  const vaayuHighlights = [
    "Pulmonology-led sarcoidosis evaluation",
    "Advanced outpatient lung testing and imaging review",
    "Biopsy coordination including EBUS or cryobiopsy when needed",
    "Multidisciplinary review for organ involvement",
    "Pulmonary rehabilitation and breathing support",
    "Long-term follow-up to monitor progression and relapse",
  ];

  const symptoms = [
    "Persistent dry cough or breathlessness",
    "Chest discomfort or reduced stamina",
    "Fatigue, fever, or unexplained weight loss",
    "Swollen lymph nodes or abnormal chest imaging",
    "Skin rashes, painful bumps, or eye irritation",
    "Symptoms that continue despite repeated treatment",
  ];

  const diagnosisSteps = [
    "Detailed symptom, exposure, and medical history review",
    "Chest X-ray and HRCT chest interpretation",
    "Pulmonary function testing including DLCO when required",
    "Blood tests for inflammation and organ involvement",
    "Biopsy support through EBUS, bronchoscopy, or cryobiopsy when clinically needed",
    "Cross-specialty review for eye, skin, heart, or systemic involvement",
  ];

  const treatmentOptions = [
    "Observation and monitoring when disease is mild or stable",
    "Corticosteroids or steroid-sparing medicines when treatment is required",
    "Organ-specific follow-up for lung, eye, skin, heart, or systemic disease",
    "Pulmonary rehabilitation for breathlessness, fatigue, and reduced exercise capacity",
    "Lifestyle, nutrition, breathing, and mental wellness support",
    "Structured follow-up to reduce relapse, progression, and complications",
  ];

  const rehabSupport = [
    "Breathlessness management",
    "Exercise tolerance improvement",
    "Fatigue reduction",
    "Respiratory muscle training",
    "Post-flare recovery support",
    "Home exercise planning",
  ];

  const faqs = [
    {
      q: "When should I see a sarcoidosis specialist?",
      a: "You should consult a specialist if you have unexplained breathlessness, persistent dry cough, abnormal chest imaging, swollen lymph nodes, or symptoms involving the eyes, skin, heart, or multiple organs.",
    },
    {
      q: "Does every sarcoidosis patient need treatment?",
      a: "No. Some patients only need monitoring. Treatment depends on symptoms, lung function, organ involvement, and whether the condition is progressing.",
    },
    {
      q: "How does Vaayu evaluate pulmonary sarcoidosis?",
      a: "Vaayu combines pulmonology consultation, imaging review, lung function testing, DLCO when needed, lab evaluation, biopsy coordination, and long-term follow-up planning.",
    },
    {
      q: "Can sarcoidosis affect organs other than the lungs?",
      a: "Yes. Sarcoidosis can affect the lymph nodes, eyes, skin, heart, liver, nervous system, and other organs. That is why multidisciplinary evaluation is important.",
    },
    {
      q: "Can pulmonary rehabilitation help sarcoidosis patients?",
      a: "Yes. Patients with breathlessness, fatigue, reduced stamina, or post-flare weakness may benefit from supervised pulmonary rehabilitation and breathing support.",
    },
  ];

  return (
    <div className="sarcoid-page">
      <Helmet>
        <title>Pulmonary Sarcoidosis Specialist in Bengaluru | Vaayu Sarcoidosis Clinic</title>
        <meta
          name="description"
          content="Consult Vaayu for pulmonary sarcoidosis care in Bengaluru. Specialist evaluation, HRCT review, lung function testing, biopsy support, pulmonary rehabilitation, and long-term sarcoidosis management."
        />
        <meta
          name="keywords"
          content="pulmonary sarcoidosis specialist Bengaluru, sarcoidosis treatment Bengaluru, sarcoidosis clinic Bengaluru, sarcoidosis lung specialist, sarcoidosis diagnosis Bengaluru, HRCT sarcoidosis evaluation, EBUS biopsy sarcoidosis, pulmonary rehabilitation for sarcoidosis, breathlessness specialist Bengaluru, granulomatous lung disease treatment, Vaayu Chest and Sleep Specialists"
        />
        <link rel="canonical" href="https://vaayuchest.com/specialty-clinic/sarcoidosis" />
        <meta property="og:title" content="Pulmonary Sarcoidosis Specialist in Bengaluru | Vaayu" />
        <meta
          property="og:description"
          content="Advanced outpatient sarcoidosis evaluation, treatment planning, pulmonary rehabilitation, and long-term monitoring at Vaayu Chest & Sleep Specialists."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaayuchest.com/specialty-clinic/sarcoidosis" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Vaayu Sarcoidosis Clinic",
            medicalSpecialty: ["Pulmonology", "Pulmonary Rehabilitation", "Sleep Medicine"],
            areaServed: "Bengaluru",
            url: "https://vaayuchest.com/specialty-clinic/sarcoidosis",
            description:
              "Outpatient pulmonary sarcoidosis evaluation, advanced lung diagnostics, biopsy support, treatment planning, pulmonary rehabilitation, and long-term monitoring in Bengaluru.",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          })}
        </script>
      </Helmet>

      <style>{`
        .sarcoid-page,
        .sarcoid-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .sarcoid-page {
          background: ${T.bg};
          color: ${T.cream};
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .sarcoid-wrap {
          width: min(92%, 1240px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .seo-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
          clip-path: inset(50%);
        }

        .sarcoid-chip {
          display: inline-flex;
          align-items: center;
          padding: 7px 18px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .sarcoid-chip.dark {
          color: ${T.greenL};
          border: 1px solid ${T.border};
          background: rgba(255,248,239,.08);
        }

        .sarcoid-chip.light {
          color: ${T.greenD};
          border: 1px solid rgba(97,114,78,.18);
          background: ${T.cream};
        }

        .section-head {
          text-align: center;
          max-width: 790px;
          margin: 0 auto 46px;
        }

        .section-head h2 {
          margin: 18px 0 0;
          font-size: clamp(1.8rem, 3.6vw, 3rem);
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: ${T.cream};
        }

        .section-head p {
          margin: 14px auto 0;
          max-width: 680px;
          color: ${T.greenL};
          font-size: 15px;
          line-height: 1.75;
          font-weight: 400;
        }

        .section-head.light h2 {
          color: ${T.textDark};
        }

        .section-head.light p {
          color: ${T.mutedDark};
        }

        .hero {
          min-height: 88svh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center;
          padding: 130px 0 80px;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(47,54,26,.95) 0%, rgba(47,54,26,.84) 48%, rgba(97,114,78,.56) 100%);
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 180px;
          background: linear-gradient(to top, ${T.bg}, transparent);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) 410px;
          gap: 44px;
          align-items: center;
        }

        .hero h1 {
          margin-top: 22px;
          font-size: clamp(2.15rem, 5vw, 4.4rem);
          font-weight: 600;
          line-height: 1.12;
          letter-spacing: -0.035em;
          color: ${T.cream};
          max-width: 820px;
        }

        .hero h1 span {
          color: ${T.greenL};
        }

        .hero-card,
        .hero-side,
        .premium-card,
        .banner-card {
          background: rgba(255,248,239,.09);
          border: 1px solid rgba(215,222,201,.20);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 56px rgba(47,54,26,.24);
        }

        .hero-card {
          margin-top: 26px;
          max-width: 720px;
          padding: 24px;
          border-radius: 24px;
        }

        .hero-card p,
        .hero-side li,
        .card-text-dark,
        .banner-card p {
          color: ${T.greenL};
          font-size: 15px;
          line-height: 1.75;
        }

        .hero-card p { margin: 0; }

        .hero-side {
          border-radius: 30px;
          padding: 28px;
        }

        .hero-side h3 {
          margin: 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
          color: ${T.cream};
        }

        .hero-side ul {
          list-style: none;
          padding: 0;
          margin: 22px 0 0;
          display: grid;
          gap: 12px;
        }

        .hero-side li {
          padding: 13px 14px;
          border-radius: 16px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.15);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 28px;
          padding: 14px 30px;
          border-radius: 999px;
          border: none;
          background: ${T.greenD};
          color: ${T.cream};
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: all .3s ease;
          box-shadow: 0 14px 36px rgba(47,54,26,.22);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          background: ${T.surface};
          box-shadow: 0 18px 44px rgba(47,54,26,.32);
        }

        section {
          position: relative;
          padding: 90px 0;
          overflow: hidden;
        }

        .light-section {
          background: ${T.light};
          color: ${T.textDark};
        }

        .dark-section { background: ${T.bg}; }
        .surface-section { background: ${T.surface}; }

        .dot-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(140,163,98,.10) 1px, transparent 1px);
          background-size: 26px 26px;
          opacity: .35;
          pointer-events: none;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        .premium-card,
        .light-card {
          border-radius: 28px;
          padding: 34px;
        }

        .light-card {
          background: ${T.cream};
          border: 1px solid ${T.borderDark};
          box-shadow: 0 18px 42px rgba(47,54,26,.10);
        }

        .card-title-dark,
        .card-title-light {
          margin: 0;
          font-size: clamp(1.45rem, 2.5vw, 2.35rem);
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .card-title-dark { color: ${T.cream}; }
        .card-title-light { color: ${T.textDark}; }

        .card-text-light {
          margin-top: 14px;
          font-size: 14.8px;
          line-height: 1.75;
          color: ${T.mutedDark};
        }

        .img-card {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(47,54,26,.24);
          border: 1px solid rgba(215,222,201,.18);
          min-height: 380px;
        }

        .img-card img {
          width: 100%;
          height: 100%;
          min-height: 380px;
          object-fit: cover;
          display: block;
        }

        .grid-list {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .mini-card-light,
        .mini-card-dark {
          padding: 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.5;
        }

        .mini-card-light {
          background: #f6f8ef;
          border: 1px solid rgba(97,114,78,.14);
          color: ${T.mutedDark};
        }

        .mini-card-dark {
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.16);
          color: ${T.greenL};
        }

        .number-list {
          margin-top: 26px;
          display: grid;
          gap: 13px;
        }

        .number-item {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 14px;
          align-items: center;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.16);
        }

        .number-item.light {
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.14);
        }

        .number {
          width: 38px;
          height: 38px;
          border-radius: 13px;
          background: ${T.greenD};
          color: ${T.cream};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
        }

        .number-item p {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
        }

        .number-item:not(.light) p { color: ${T.greenL}; }
        .number-item.light p { color: ${T.mutedDark}; }

        .journey-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .journey-card {
          min-height: 230px;
          border-radius: 26px;
          padding: 26px 22px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 16px 42px rgba(0,0,0,.18);
        }

        .journey-card span {
          color: ${T.greenL};
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 20px;
          display: block;
        }

        .journey-card h3 {
          margin: 0;
          color: ${T.cream};
          font-size: 19px;
          font-weight: 600;
          line-height: 1.35;
        }

        .journey-card p {
          margin: 10px 0 0;
          color: ${T.greenL};
          font-size: 14px;
          line-height: 1.7;
        }

        .banner-section {
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .banner-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(47,54,26,.78);
        }

        .banner-card {
          position: relative;
          z-index: 2;
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
          border-radius: 30px;
          padding: 44px;
        }

        .banner-card h2 {
          margin: 0;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          line-height: 1.2;
          color: ${T.cream};
        }

        .banner-card p {
          margin: 16px auto 0;
          max-width: 720px;
        }

        .faq-list {
          max-width: 920px;
          margin: 0 auto;
          display: grid;
          gap: 14px;
        }

        .faq-card {
          background: ${T.cream};
          border: 1px solid ${T.borderDark};
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 14px 32px rgba(47,54,26,.08);
        }

        .faq-card h3 {
          margin: 0;
          color: ${T.textDark};
          font-size: 16px;
          line-height: 1.4;
        }

        .faq-card p {
          margin: 8px 0 0;
          color: ${T.mutedDark};
          font-size: 14px;
          line-height: 1.7;
        }

        .cta-section {
          background: ${T.light};
          text-align: center;
        }

        .cta-box {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 32px;
          padding: 46px 34px;
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 22px 54px rgba(47,54,26,.12);
        }

        .cta-box h2 {
          margin: 0;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          line-height: 1.2;
          color: ${T.textDark};
          letter-spacing: -0.02em;
        }

        .cta-box p {
          margin: 14px auto 0;
          color: ${T.mutedDark};
          max-width: 700px;
          font-size: 15px;
          line-height: 1.75;
        }

        @media (max-width: 1050px) {
          .hero-grid,
          .two-col { grid-template-columns: 1fr; }
          .hero-side { max-width: 680px; }
          .journey-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 680px) {
          .sarcoid-wrap { width: min(90%, 430px); }
          section { padding: 72px 0; }
          .hero { min-height: auto; padding: 108px 0 58px; }
          .hero h1 { font-size: clamp(2rem, 9vw, 3.2rem); line-height: 1.16; }
          .hero-card,
          .hero-side,
          .premium-card,
          .light-card,
          .banner-card,
          .cta-box { border-radius: 22px; padding: 22px; }
          .grid-list,
          .journey-grid { grid-template-columns: 1fr; }
          .img-card,
          .img-card img { min-height: 250px; }
          .section-head { text-align: left; margin-bottom: 32px; }
          .section-head h2 { font-size: clamp(1.65rem, 8vw, 2.4rem); }
          .section-head p,
          .hero-card p,
          .card-text-dark,
          .card-text-light,
          .banner-card p,
          .cta-box p { font-size: 14px; }
        }
      `}</style>

      <div className="seo-hidden">
        pulmonary sarcoidosis specialist Bengaluru, sarcoidosis treatment Bengaluru, sarcoidosis clinic Bengaluru,
        sarcoidosis lung specialist near me, sarcoidosis diagnosis Bengaluru, HRCT sarcoidosis evaluation,
        EBUS biopsy sarcoidosis, granulomatous lung disease treatment, pulmonary rehabilitation for sarcoidosis,
        breathlessness specialist Bengaluru, chronic dry cough sarcoidosis, sarcoidosis second opinion Bengaluru,
        Vaayu Chest and Sleep Specialists sarcoidosis clinic.
      </div>

      <section className="hero">
        <div className="sarcoid-wrap">
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: E }}>
              <Chip>Pulmonary Sarcoidosis Clinic</Chip>
              <h1>
                Sarcoidosis specialist care in Bengaluru for <span>lung inflammation, breathlessness and long-term monitoring.</span>
              </h1>
              <div className="hero-card">
                <p>
                  At Vaayu Chest & Sleep Specialists, sarcoidosis care is built around accurate diagnosis, lung-focused evaluation,
                  organ screening, treatment planning, pulmonary rehabilitation and structured follow-up - all in an outpatient-first setting.
                </p>
              </div>
              <a href={EKA} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Sarcoidosis Consultation</a>
            </motion.div>

            <motion.div className="hero-side" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: E }}>
              <h3>For patients who need clarity beyond a basic diagnosis.</h3>
              <ul>
                <li>Pulmonary sarcoidosis evaluation</li>
                <li>Breathlessness and chronic dry cough assessment</li>
                <li>HRCT, PFT, DLCO and biopsy guidance</li>
                <li>Long-term monitoring for relapse and progression</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="dot-bg" />
        <div className="sarcoid-wrap">
          <div className="two-col">
            <motion.div {...fadeUp(0)} className="light-card">
              <Chip dark={false}>Vaayu Context</Chip>
              <h2 className="card-title-light" style={{ marginTop: 18 }}>
                Sarcoidosis is not just a report finding. It needs connected respiratory care.
              </h2>
              <p className="card-text-light">
                Sarcoidosis can be mild, active, relapsing or multi-organ. Vaayu brings pulmonology expertise,
                advanced diagnostics, rehabilitation and longitudinal follow-up together so patients receive a clear plan instead of fragmented advice.
              </p>
              <div className="grid-list">
                {vaayuHighlights.map((item) => <div className="mini-card-light" key={item}>{item}</div>)}
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.12)} className="img-card">
              <img src={consultImage} alt="Pulmonary sarcoidosis consultation at Vaayu Bengaluru" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="dark-section">
  <div className="dot-bg" />
  <div className="sarcoid-wrap">
    <div className="two-col">
      <motion.div {...fadeUp(0)} className="premium-card">
        <Chip>Understanding Sarcoidosis</Chip>
        <h2 className="card-title-dark" style={{ marginTop: 18 }}>
          What is pulmonary sarcoidosis?
        </h2>
        <p className="card-text-dark">
          Sarcoidosis is an inflammatory condition where clusters of immune cells,
          called granulomas, form in the body. The lungs and lymph nodes are commonly
          involved, but the eyes, skin, heart and other organs may also be affected.
        </p>
        <p className="card-text-dark">
          Because symptoms can look like asthma, infection, tuberculosis or other
          interstitial lung diseases, specialist evaluation is important before
          deciding treatment.
        </p>
      </motion.div>

      <motion.div {...fadeUp(0.12)} className="img-card">
        <img
          src={causeImage}
          alt="Pulmonary sarcoidosis and granulomatous lung inflammation"
          loading="lazy"
        />
      </motion.div>
    </div>
  </div>
</section>

      <section className="light-section">
        <div className="sarcoid-wrap">
          <SectionHead
            chip="Symptoms & Search Intent"
            title="When should sarcoidosis be evaluated by a lung specialist?"
            text="Many patients search only after persistent cough, breathlessness, abnormal chest imaging or repeated unclear treatment. These symptoms deserve deeper evaluation."
            light
          />
          <div className="two-col">
            <motion.div {...fadeUp(0)} className="light-card">
              <div className="number-list">
                {symptoms.map((symptom, index) => (
                  <div className="number-item light" key={symptom}>
                    <div className="number">{index + 1}</div>
                    <p>{symptom}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.12)} className="img-card">
              <img src={symptomsImage} alt="Sarcoidosis symptoms including dry cough breathlessness and fatigue" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="banner-section" style={{ backgroundImage: `url(${diagnosisBg})` }}>
        <div className="sarcoid-wrap">
          <motion.div {...fadeUp(0)} className="banner-card">
            <Chip>Advanced Diagnosis at Vaayu</Chip>
            <h2 style={{ marginTop: 18 }}>Sarcoidosis diagnosis needs more than one test.</h2>
            <p>
              Vaayu evaluates sarcoidosis through clinical history, imaging, lung function, inflammation markers, organ screening and biopsy support when required.
            </p>
            <div className="number-list" style={{ textAlign: "left" }}>
              {diagnosisSteps.map((step, index) => (
                <div className="number-item" key={step}>
                  <div className="number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="light-section">
        <div className="sarcoid-wrap">
          <div className="two-col">
            <motion.div {...fadeUp(0)} className="img-card">
              <img src={treatmentImage} alt="Sarcoidosis treatment and long-term monitoring at Vaayu" loading="lazy" />
            </motion.div>
            <motion.div {...fadeUp(0.12)} className="light-card">
              <Chip dark={false}>Treatment & Monitoring</Chip>
              <h2 className="card-title-light" style={{ marginTop: 18 }}>Personalised sarcoidosis treatment based on severity and organ involvement.</h2>
              <p className="card-text-light">
                Not every patient needs immediate medication. At Vaayu, treatment decisions are based on symptoms, lung function, HRCT findings, organ involvement and progression risk.
              </p>
              <div className="grid-list">
                {treatmentOptions.map((item) => <div className="mini-card-light" key={item}>{item}</div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="surface-section">
        <div className="dot-bg" />
        <div className="sarcoid-wrap">
          <SectionHead
            chip="Pulmonary Rehabilitation"
            title="Support for breathlessness, fatigue and reduced stamina"
            text="Some sarcoidosis patients continue to feel breathless or tired even after diagnosis. Pulmonary rehabilitation helps rebuild function safely."
          />
          <div className="grid-list">
            {rehabSupport.map((item) => <div className="mini-card-dark" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="sarcoid-wrap">
          <SectionHead
            chip="Structured Journey"
            title="From diagnosis to follow-up, every step is connected"
            text="Vaayu’s sarcoidosis care pathway focuses on clarity, treatment decisions, organ monitoring and long-term respiratory stability."
          />
          <div className="journey-grid">
            {[
              { title: "Evaluate", text: "Understand symptoms, imaging, reports, history and possible organ involvement." },
              { title: "Confirm", text: "Use HRCT, PFT, DLCO, labs and biopsy support when clinically indicated." },
              { title: "Plan", text: "Decide monitoring, medication, rehab or multi-specialty review based on severity." },
              { title: "Follow", text: "Track symptoms, lung function, relapse risk and recovery over time." },
            ].map((item, index) => (
              <motion.div {...fadeUp(index * 0.08)} className="journey-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="sarcoid-wrap">
          <div className="two-col">
            <motion.div {...fadeUp(0)} className="img-card">
              <img src={lifestyleImage} alt="Living with sarcoidosis and long-term follow-up care" loading="lazy" />
            </motion.div>
            <motion.div {...fadeUp(0.12)} className="light-card">
              <Chip dark={false}>Long-Term Care</Chip>
              <h2 className="card-title-light" style={{ marginTop: 18 }}>Living better with sarcoidosis starts with monitoring.</h2>
              <p className="card-text-light">
                Sarcoidosis can improve, remain stable, relapse or progress. Regular review helps detect changes early and adjust care before symptoms worsen.
              </p>
              <div className="number-list">
                {[
                  "Follow lung function and symptoms over time",
                  "Report new eye, skin, chest or heart-related symptoms",
                  "Avoid smoking and respiratory irritants",
                  "Maintain activity levels as advised",
                  "Continue follow-up even when symptoms improve",
                ].map((tip, index) => (
                  <div className="number-item light" key={tip}>
                    <div className="number">{index + 1}</div>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="banner-section" style={{ backgroundImage: `url(${journeyBg})` }}>
        <div className="sarcoid-wrap">
          <motion.div {...fadeUp(0)} className="banner-card">
            <Chip>Second Opinion & Complex Cases</Chip>
            <h2 style={{ marginTop: 18 }}>Still unsure about your sarcoidosis diagnosis or treatment plan?</h2>
            <p>
              Vaayu supports patients who need clarity after abnormal scans, uncertain biopsy results, repeated symptoms, multi-organ concerns or long-term treatment decisions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="light-section">
        <div className="sarcoid-wrap">
          <SectionHead
            chip="Sarcoidosis FAQs"
            title="Common questions patients ask"
            text="These answers improve clarity for patients searching for sarcoidosis diagnosis, treatment and follow-up support in Bengaluru."
            light
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-card" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="sarcoid-wrap">
          <motion.div {...fadeUp(0)} className="cta-box">
            <Chip dark={false}>Book a Consultation</Chip>
            <h2 style={{ marginTop: 18 }}>Consult Vaayu for pulmonary sarcoidosis care in Bengaluru</h2>
            <p>
              Get specialist guidance for sarcoidosis diagnosis, HRCT review, lung function testing, biopsy support, treatment planning, pulmonary rehabilitation and long-term monitoring.
            </p>
            <a href={EKA} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Appointment</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SarcoidosisClinic;
