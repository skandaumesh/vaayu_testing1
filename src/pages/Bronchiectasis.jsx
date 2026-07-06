import React from "react";
import { motion } from "framer-motion";

import heroBg from "../assets/img/bronchiectasis-hero.jpg";
import midBg from "../assets/img/D.jpg";
import boxImage from "../assets/img/treatment-box.jpg";
import boxImage1 from "../assets/img/airway-bg-removebg-preview.png";
import lifestyleBg from "../assets/img/lifestyle-bg.jpg";
import treatImg from "../assets/img/ddia.jpg";

const T = {
  bg: "#58623b",
  deep: "#2f361a",
  green: "#61724e",
  green2: "#4f5831",
  sage: "#9fab90",
  muted: "#d7dec9",
  light: "#eaf1e6",
  text: "#fff8ef",
  ink: "#293018",
};

const E = [0.22, 1, 0.36, 1];

const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay, ease: E },
});

const Chip = ({ children, dark = false }) => (
  <span className={dark ? "bron-chip dark" : "bron-chip"}>{children}</span>
);

const SectionTitle = ({ chip, title, text, light = false }) => (
  <motion.div {...fu()} className="bron-section-title">
    {chip && <Chip dark={!light}>{chip}</Chip>}
    <h2 className={light ? "light" : ""}>{title}</h2>
    {text && <p className={light ? "light" : ""}>{text}</p>}
  </motion.div>
);

const causes = [
  "Previous lung infections",
  "Immune deficiencies",
  "Genetic conditions such as cystic fibrosis",
  "Swallowing problems with aspiration",
  "Long-term airway inflammation",
  "Sometimes the cause may remain unknown",
];

const symptoms = [
  "Persistent cough with phlegm",
  "Repeated chest infections",
  "Breathlessness or wheezing",
  "Fatigue and reduced stamina",
  "Chest discomfort",
  "Blood in sputum during flare-ups",
];

const diagnosis = [
  "Chest CT scan",
  "Pulmonary function testing",
  "Sputum culture",
  "Bronchoscopy when required",
  "Assessment for infection triggers",
  "Review of flare-up history",
];

const treatment = [
  {
    title: "Daily maintenance plan",
    desc: "Airway clearance, lifestyle changes, hydration, exercise, and preventive steps to reduce mucus buildup and infections.",
  },
  {
    title: "Flare-up action plan",
    desc: "A clear plan for worsening cough, increased sputum, fever, breathlessness, or change in sputum color.",
  },
  {
    title: "Airway clearance training",
    desc: "Breathing and chest physiotherapy techniques that help loosen mucus and support easier clearance.",
  },
  {
    title: "PEP and airway devices",
    desc: "Handheld positive expiratory pressure devices may help loosen mucus through vibration and resistance breathing.",
  },
  {
    title: "Pulmonary rehabilitation",
    desc: "Structured breathing, endurance, and strength training to improve stamina, confidence, and daily function.",
  },
  {
    title: "Infection prevention",
    desc: "Vaccination guidance, sputum monitoring, timely treatment, and long-term follow-up to reduce repeated infections.",
  },
];

const flareSigns = [
  "Increase in sputum production",
  "Change in sputum colour",
  "Fever or increased tiredness",
  "Worsening shortness of breath",
  "Blood in sputum",
  "Loss of appetite or unintentional weight loss",
];

const lifestyle = [
  "Stay hydrated to help loosen mucus",
  "Exercise regularly as advised",
  "Avoid smoking, vaping, dust and pollutants",
  "Stay updated with flu and pneumonia vaccines",
  "Follow airway clearance routines consistently",
  "Maintain nutrition and regular follow-up",
];

const Bronchiectasis = () => {
  return (
    <main className="bron-page">
      <style>{`
        .bron-page,
        .bron-page * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        .bron-page {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Inter, system-ui, sans-serif;
          background: ${T.bg};
          color: ${T.text};
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .bron-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .bron-section {
          position: relative;
          padding: 88px 0;
          overflow: hidden;
        }

        .bron-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
          color: ${T.ink};
        }

        .bron-dark {
          background:
            radial-gradient(circle at 12% 20%, rgba(215,222,201,.10), transparent 32%),
            radial-gradient(circle at 90% 75%, rgba(159,171,144,.12), transparent 34%),
            ${T.bg};
        }

        .bron-clinical-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .4;
          background-image:
            linear-gradient(rgba(97,114,78,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(97,114,78,.055) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
          -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
        }

        .bron-chip {
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

        .bron-chip.dark {
          color: ${T.green};
          background: rgba(97,114,78,.07);
          border-color: rgba(97,114,78,.18);
        }

        .bron-section-title {
          max-width: 820px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .bron-section-title h2 {
          margin: 18px 0 0;
          color: ${T.ink};
          font-size: clamp(1.85rem, 3.5vw, 3rem);
          line-height: 1.12;
          letter-spacing: -.035em;
          font-weight: 750;
        }

        .bron-section-title h2.light {
          color: ${T.text};
        }

        .bron-section-title p {
          margin: 16px auto 0;
          max-width: 720px;
          color: #5d684b;
          font-size: 15.5px;
          line-height: 1.75;
        }

        .bron-section-title p.light {
          color: ${T.muted};
        }

        .bron-hero {
          min-height: 92svh;
          min-height: -webkit-fill-available;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.deep};
        }

        .bron-hero-bg {
          position: absolute;
          inset: 0;
        }

        .bron-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .24;
          filter: saturate(.82) contrast(1.05);
        }

        .bron-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.97), rgba(47,54,26,.86), rgba(97,114,78,.45)),
            radial-gradient(circle at 74% 38%, rgba(215,222,201,.18), transparent 34%);
        }

        .bron-hero-content {
          position: relative;
          z-index: 2;
          max-width: 920px;
          padding: 128px 0 80px;
        }

        .bron-hero h1 {
          margin: 22px 0 0;
          font-size: clamp(2.25rem, 5vw, 4.35rem);
          line-height: 1.07;
          letter-spacing: -.045em;
          font-weight: 780;
          color: ${T.text};
        }

        .bron-hero h1 span {
          color: ${T.muted};
        }

        .bron-hero-card {
          margin-top: 26px;
          max-width: 780px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
        }

        .bron-hero-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 15.8px;
          line-height: 1.78;
        }

        .bron-hero-tags {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .bron-hero-tag {
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(159,171,144,.18);
          border: 1px solid rgba(215,222,201,.2);
          color: ${T.muted};
          font-size: 12px;
          font-weight: 650;
        }

        .bron-two {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 34px;
          align-items: stretch;
        }

        .bron-image-card {
          min-height: 430px;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(47,54,26,.18);
          border: 1px solid rgba(97,114,78,.14);
          background: #dfe8da;
        }

        .bron-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(.9) contrast(1.03);
        }

        .bron-panel {
          border-radius: 34px;
          padding: 42px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .bron-panel h2 {
          margin: 18px 0 0;
          color: ${T.text};
          font-size: clamp(1.9rem, 3vw, 2.8rem);
          line-height: 1.13;
          letter-spacing: -.035em;
        }

        .bron-panel p {
          color: ${T.muted};
          line-height: 1.8;
          font-size: 15px;
        }

        .bron-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .bron-card {
          border-radius: 28px;
          padding: 26px;
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(97,114,78,.14);
          color: ${T.ink};
          box-shadow: 0 18px 44px rgba(47,54,26,.08);
        }

        .bron-card h3 {
          margin: 0;
          color: ${T.ink};
          font-size: 18px;
          line-height: 1.25;
        }

        .bron-card p {
          margin: 10px 0 0;
          color: #5d684b;
          font-size: 14px;
          line-height: 1.65;
        }

        .bron-dark-card {
          border-radius: 24px;
          padding: 24px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.16);
          color: ${T.muted};
          box-shadow: 0 18px 48px rgba(47,54,26,.16);
        }

        .bron-dark-card h3 {
          margin: 0;
          color: ${T.text};
          font-size: 18px;
          line-height: 1.3;
        }

        .bron-dark-card p {
          margin: 10px 0 0;
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.65;
        }

        .bron-list {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .bron-list-item {
          padding: 15px 16px;
          border-radius: 18px;
          background: rgba(255,248,239,.075);
          border: 1px solid rgba(215,222,201,.13);
          color: ${T.text};
          font-size: 14.5px;
          line-height: 1.55;
          font-weight: 600;
        }

        .bron-list-item::before {
          content: "";
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          margin-right: 11px;
          background: ${T.muted};
          transform: translateY(-1px);
        }

        .bron-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 26px;
        }

        .bron-tag {
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(97,114,78,.08);
          border: 1px solid rgba(97,114,78,.16);
          color: ${T.ink};
          font-size: 13px;
          font-weight: 650;
        }

        .bron-bg-section {
          position: relative;
          background-size: cover;
          background-position: center;
          color: ${T.text};
        }

        .bron-bg-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(47,54,26,.82);
        }

        .bron-bg-inner {
          position: relative;
          z-index: 2;
        }

        .bron-cta {
          border-radius: 36px;
          padding: 56px 34px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.08), rgba(255,248,239,.03)),
            ${T.green2};
          text-align: center;
          box-shadow: 0 28px 74px rgba(47,54,26,.18);
          border: 1px solid rgba(215,222,201,.18);
        }

        .bron-cta h2 {
          margin: 18px auto 0;
          color: ${T.text};
          font-size: clamp(1.9rem, 3.4vw, 3rem);
          line-height: 1.12;
          max-width: 850px;
        }

        .bron-cta p {
          max-width: 740px;
          margin: 16px auto 0;
          color: ${T.muted};
          line-height: 1.75;
        }

        @media (max-width: 1100px) {
          .bron-two {
            grid-template-columns: 1fr;
          }

          .bron-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bron-image-card {
            min-height: 320px;
          }
        }

        @media (max-width: 680px) {
          .bron-wrap {
            width: min(90%, 440px);
          }

          .bron-section {
            padding: 68px 0;
          }

          .bron-hero {
            min-height: auto;
          }

          .bron-hero-content {
            padding: 106px 0 60px;
          }

          .bron-hero h1 {
            font-size: clamp(2.05rem, 10vw, 3.2rem);
            line-height: 1.12;
          }

          .bron-hero-card,
          .bron-panel,
          .bron-cta {
            border-radius: 24px;
            padding: 24px;
          }

          .bron-section-title {
            text-align: left;
            margin-bottom: 34px;
          }

          .bron-section-title h2 {
            font-size: clamp(1.65rem, 8vw, 2.4rem);
          }

          .bron-grid {
            grid-template-columns: 1fr;
          }

          .bron-image-card {
            min-height: 260px;
            border-radius: 24px;
          }

          .bron-card,
          .bron-dark-card {
            border-radius: 22px;
            padding: 22px;
          }

          .bron-tag-cloud {
            justify-content: flex-start;
          }

          .bron-tag {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section className="bron-hero">
        <div className="bron-hero-bg">
          <img src={heroBg} alt="Bronchiectasis care at Vaayu" />
        </div>

        <div className="bron-wrap">
          <motion.div {...fu()} className="bron-hero-content">
            <Chip>Bronchiectasis Care</Chip>

            <h1>
              Understanding <br />
              <span>Bronchiectasis</span>
            </h1>

            <div className="bron-hero-card">
              <p>
                Bronchiectasis is a long-term airway condition that can cause
                persistent cough, phlegm, repeated infections, breathlessness and
                reduced stamina. With structured care, airway clearance and regular
                follow-up, patients can reduce flare-ups and improve daily function.
              </p>
            </div>

            <div className="bron-hero-tags">
              {[
                "Chronic Cough",
                "Mucus Clearance",
                "Repeated Infections",
                "Pulmonary Rehab",
                "Long-Term Lung Care",
              ].map((tag) => (
                <span className="bron-hero-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bron-section bron-light">
        <div className="bron-clinical-bg" />
        <div className="bron-wrap">
          <div className="bron-two">
            <motion.div {...fu()} className="bron-panel">
              <Chip>What It Means</Chip>
              <h2>What is Bronchiectasis?</h2>
              <p>
                Bronchiectasis is a lung condition where the airways become widened
                and damaged. This makes it harder to clear mucus, creating an
                environment where infections can occur repeatedly.
              </p>
              <p>
                Over time, repeated infections and mucus buildup can worsen airway
                damage. That is why consistent treatment, airway clearance and
                follow-up are important.
              </p>
            </motion.div>

            <motion.div {...fu(0.1)} className="bron-image-card">
              <img src={boxImage1} alt="Bronchiectasis airway symptoms" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bron-section bron-bg-section" style={{ backgroundImage: `url(${midBg})` }}>
        <div className="bron-wrap bron-bg-inner">
          <SectionTitle
            chip="Causes"
            title="What causes Bronchiectasis?"
            text="Bronchiectasis may develop after infections, immune problems, airway damage or long-term inflammation. In some patients, the exact cause may not be clear."
            light
          />

          <div className="bron-grid">
            {causes.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="bron-dark-card" key={item}>
                <h3>{item}</h3>
                <p>
                  A detailed specialist review helps identify possible contributors and
                  plan long-term care.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bron-section bron-light">
        <div className="bron-wrap">
          <SectionTitle
            chip="Symptoms"
            title="Symptoms that should not be ignored"
            text="Bronchiectasis symptoms may look like repeated infections or chronic cough, but persistent mucus and flare-ups need structured respiratory care."
          />

          <div className="bron-grid">
            {symptoms.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="bron-card" key={item}>
                <h3>{item}</h3>
                <p>
                  If this affects daily routine or keeps recurring, specialist
                  evaluation can help prevent worsening.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bron-section bron-light">
        <div className="bron-clinical-bg" />
        <div className="bron-wrap">
          <div className="bron-two">
            <motion.div {...fu()} className="bron-image-card">
              <img src={boxImage} alt="Bronchiectasis diagnosis and tests" loading="lazy" />
            </motion.div>

            <motion.div {...fu(0.1)} className="bron-panel">
              <Chip>Diagnosis</Chip>
              <h2>How is Bronchiectasis diagnosed?</h2>
              <p>
                Diagnosis usually involves imaging, lung function assessment, sputum
                testing and clinical review. The goal is to understand airway damage,
                infection patterns and breathing limitation.
              </p>

              <div className="bron-list">
                {diagnosis.map((item) => (
                  <div className="bron-list-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bron-section bron-dark">
        <div className="bron-clinical-bg" />
        <div className="bron-wrap">
          <SectionTitle
            chip="Treatment Approach"
            title="How Bronchiectasis is treated"
            text="Treatment focuses on daily maintenance, managing flare-ups early, clearing mucus, preventing infections and improving function."
            light
          />

          <div className="bron-two">
            <motion.div {...fu()} className="bron-image-card">
              <img src={treatImg} alt="Bronchiectasis treatment and airway clearance" loading="lazy" />
            </motion.div>

            <div className="bron-grid" style={{ gridTemplateColumns: "1fr" }}>
              {treatment.map((item, index) => (
                <motion.div {...fu(index * 0.04)} className="bron-dark-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bron-section bron-light">
        <div className="bron-wrap">
          <div className="bron-two">
            <motion.div {...fu()} className="bron-panel">
              <Chip>Cough Technique</Chip>
              <h2>Airway clearance and huff cough</h2>
              <p>
                During and after airway clearance, coughing techniques can help bring
                up loosened phlegm. A commonly used technique is the “huff cough,”
                where you breathe in deeply and exhale forcefully in controlled
                breaths to move mucus upward.
              </p>
              <p>
                This should be learned under guidance so the technique is safe,
                comfortable and useful for your condition.
              </p>
            </motion.div>

            <motion.div {...fu(0.1)} className="bron-card">
              <h3>Recognising a flare-up</h3>
              <p>
                A flare-up means symptoms are worsening and may need early medical
                action.
              </p>

              <div className="bron-tag-cloud" style={{ justifyContent: "flex-start" }}>
                {flareSigns.map((item) => (
                  <span className="bron-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="bron-section bron-bg-section"
        style={{ backgroundImage: `url(${lifestyleBg})` }}
      >
        <div className="bron-wrap bron-bg-inner">
          <SectionTitle
            chip="Lifestyle & Prevention"
            title="Daily habits that support better lung stability"
            text="Bronchiectasis care works best when medical treatment is supported by consistent home routines and prevention habits."
            light
          />

          <div className="bron-grid">
            {lifestyle.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="bron-dark-card" key={item}>
                <h3>{item}</h3>
                <p>
                  Small daily steps can support mucus clearance, stamina and long-term
                  stability.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bron-section bron-dark">
        <div className="bron-wrap">
          <motion.div {...fu()} className="bron-cta">
            <Chip>Bronchiectasis Support</Chip>
            <h2>Need help with chronic cough, mucus or repeated infections?</h2>
            <p>
              A structured respiratory review can help identify triggers, plan airway
              clearance, reduce flare-ups and improve daily breathing confidence.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Bronchiectasis;