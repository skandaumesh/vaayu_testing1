import React from "react";
import { motion } from "framer-motion";

import heroImg from "../assets/img/young-doctor-showing-radiography.jpg";
import techImg from "../assets/img/doctor1.jpg";
import techImg1 from "../assets/img/medics-his-staff-meet-discuss-lungs-radiography-patient-care-strategy.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const T = {
  bg: "#58623b",
  deep: "#2f361a",
  green: "#61724e",
  green2: "#4f5831",
  muted: "#d7dec9",
  cream2: "#e3f0df",
  light: "#eaf1e6",
  text: "#fff8ef",
  ink: "#293018",
};

const E = [0.22, 1, 0.36, 1];

const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, delay, ease: E },
});

const Chip = ({ children, dark = false }) => (
  <span className={dark ? "icu-chip dark" : "icu-chip"}>{children}</span>
);

const ICUBronchoscopy = () => {
  const indications = [
    "To remove secretions and mucus plugs which may be obstructing the air passages, leading to difficulty in breathing and in ventilation.",
    "To diagnose lung infections: Bronchoscopy can be used to collect samples of lung tissue or fluid to diagnose lung infections, such as pneumonia or tuberculosis.",
    "To remove foreign bodies: Bronchoscopy can be used to remove foreign bodies, such as coins or food, that have been inhaled into the lungs.",
    "To treat bleeding & remove blood clots: Bronchoscopy can be used to stop bleeding in the lungs.",
    "To place a stent: A stent is a small, flexible tube that can be placed in the airways to keep them open. Bronchoscopy can be used to place a stent in the airways of ICU patients who have narrowed airways.",
    "To assess lung injury: Bronchoscopy can be used to assess lung injury, such as that caused by acute respiratory distress syndrome (ARDS).",
  ];

  const risks = [
    "Minor bleeding during or after the procedure",
    "Possible infections",
    "Risk of vomiting during sedation",
    "Rare chance of requiring a tracheostomy",
  ];

  return (
    <main className="icu-page">
      <style>{`
        .icu-page,
        .icu-page * {
          box-sizing: border-box;
        }

        .icu-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: ${T.light};
          color: ${T.ink};
          overflow-x: hidden;
        }

        .icu-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .icu-section {
          position: relative;
          padding: 88px 0;
          overflow: hidden;
        }

        .icu-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
        }

        .icu-dark {
          background:
            radial-gradient(circle at 12% 20%, rgba(215,222,201,.10), transparent 32%),
            radial-gradient(circle at 90% 75%, rgba(159,171,144,.12), transparent 34%),
            ${T.bg};
          color: ${T.text};
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
        }

        .icu-chip {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(215,222,201,.24);
          background: rgba(255,248,239,.08);
          color: ${T.muted};
          font-size: 12px;
          font-weight: 750;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .icu-chip.dark {
          color: ${T.green};
          background: rgba(97,114,78,.08);
          border-color: rgba(97,114,78,.18);
        }

        .icu-hero {
          min-height: 72vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.bg};
        }

        .icu-hero-bg {
          position: absolute;
          inset: 0;
        }

        .icu-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .32;
          filter: saturate(.8) contrast(1.05);
        }

        .icu-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.96), rgba(47,54,26,.78), rgba(97,114,78,.42)),
            radial-gradient(circle at 78% 38%, rgba(215,222,201,.18), transparent 34%);
        }

        .icu-hero-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          padding: 130px 0 90px;
        }

        .icu-hero h1 {
          margin: 22px 0 0;
          color: ${T.text};
          font-size: clamp(2.6rem, 5.5vw, 5rem);
          line-height: 1.02;
          letter-spacing: -.055em;
          font-weight: 700;
        }

        .icu-hero h1 span {
          color: ${T.muted};
        }

        .icu-hero-card {
          margin-top: 26px;
          max-width: 720px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          backdrop-filter: blur(16px);
        }

        .icu-hero-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 15.5px;
          line-height: 1.75;
        }

        .icu-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: stretch;
        }

        .icu-panel {
          border-radius: 34px;
          padding: 42px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 24px 68px rgba(47,54,26,.12);
        }

        .icu-panel.dark {
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .icu-panel h2,
        .icu-panel h3 {
          margin: 18px 0 0;
          font-size: clamp(2rem, 3.4vw, 3rem);
          line-height: 1.13;
          letter-spacing: -.035em;
          color: ${T.ink};
          font-weight: 650;
        }

        .icu-panel.dark h2,
        .icu-panel.dark h3 {
          color: ${T.text};
        }

        .icu-panel p {
          color: #526043;
          line-height: 1.8;
          font-size: 15.5px;
        }

        .icu-panel.dark p {
          color: ${T.muted};
        }

        .icu-image-panel {
          min-height: 470px;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 26px 72px rgba(47,54,26,.2);
          border: 1px solid rgba(97,114,78,.14);
        }

        .icu-image-panel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(.86) brightness(.88);
        }

        .icu-list {
          display: grid;
          gap: 12px;
          margin-top: 26px;
          padding: 0;
          list-style: none;
        }

        .icu-list li {
          padding: 15px 16px;
          border-radius: 18px;
          background: rgba(97,114,78,.08);
          border: 1px solid rgba(97,114,78,.13);
          color: ${T.ink};
          font-size: 14.5px;
          line-height: 1.55;
          display: grid;
          grid-template-columns: 8px 1fr;
          column-gap: 12px;
        }

        .icu-list li::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.green};
          margin-top: 9px;
        }

        .icu-panel.dark .icu-list li {
          background: rgba(255,248,239,.065);
          border-color: rgba(215,222,201,.13);
          color: ${T.text};
        }

        .icu-panel.dark .icu-list li::before {
          background: ${T.muted};
        }

        .icu-tech-image {
          margin-top: 24px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(215,222,201,.14);
        }

        .icu-tech-image img {
          width: 100%;
          display: block;
          object-fit: cover;
        }

        .icu-conclusion {
          border-radius: 38px;
          padding: clamp(30px, 5vw, 58px);
          background:
            linear-gradient(135deg, rgba(47,54,26,.94), rgba(97,114,78,.88)),
            url(${techImg});
          background-size: cover;
          background-position: center;
          color: ${T.text};
          box-shadow: 0 30px 90px rgba(47,54,26,.2);
        }

        .icu-conclusion h2 {
          max-width: 780px;
          margin: 18px 0 0;
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1.1;
          letter-spacing: -.035em;
          color: ${T.text};
        }

        .icu-conclusion p {
          max-width: 780px;
          color: ${T.muted};
          line-height: 1.75;
          font-size: 15.5px;
        }

        @media(max-width: 980px) {
          .icu-grid-2 {
            grid-template-columns: 1fr;
          }

          .icu-hero {
            min-height: auto;
          }

          .icu-hero-content {
            padding: 110px 0 70px;
          }
        }

        @media(max-width: 760px) {
          .icu-section {
            padding: 72px 0;
          }

          .icu-wrap {
            width: min(90%, 440px);
          }

          .icu-hero h1 {
            font-size: clamp(2.3rem, 11vw, 3.4rem);
            line-height: 1.08;
          }

          .icu-panel {
            padding: 24px;
            border-radius: 26px;
          }

          .icu-image-panel {
            min-height: 310px;
            border-radius: 26px;
          }

          .icu-conclusion {
            padding: 28px;
            border-radius: 26px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .icu-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="icu-hero">
        <div className="icu-hero-bg">
          <img src={heroImg} alt="ICU Bronchoscopy Program" />
        </div>

        <div className="icu-wrap">
          <motion.div {...fu()} className="icu-hero-content">
            <Chip>Critical Respiratory Care</Chip>

            <h1>
              ICU Bronchoscopy <br />
              <span>Program</span>
            </h1>

            <div className="icu-hero-card">
              <p>
                Bronchoscopy support for critically ill ICU patients with
                breathing difficulty, airway obstruction, infection, bleeding,
                or ventilation-related concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="icu-section icu-light">
        <div className="clinical-bg" />

        <div className="icu-wrap icu-grid-2">
          <motion.div {...fu()} className="icu-panel">
            <Chip dark>Overview</Chip>

            <h2>What is ICU Bronchoscopy?</h2>

            <p>
              Bronchoscopy is a medical procedure that allows doctors to look
              inside the airways of the lungs using a thin, flexible tube called
              a bronchoscope. The bronchoscope has a camera and light on the
              end, which allows the doctor to see inside the airways.
            </p>

            <p>
              ICU bronchoscopy is a bronchoscopy that is performed in the
              intensive care unit (ICU). ICU patients are often critically ill
              and have breathing problems. Bronchoscopy can be used to help
              diagnose and treat these problems.
            </p>
          </motion.div>

          <motion.div {...fu(0.1)} className="icu-image-panel">
            <img src={techImg} alt="Advanced Bronchoscopy Tools" />
          </motion.div>
        </div>
      </section>

      {/* Indications & Technology */}
      <section className="icu-section icu-dark">
        <div className="clinical-bg" />

        <div className="icu-wrap icu-grid-2">
          {/* Indications */}
          <motion.div {...fu()} className="icu-panel dark">
            <Chip>Indications</Chip>

            <h2>Indications</h2>

            <ul className="icu-list">
              {indications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Technology & Expertise */}
          <motion.div {...fu(0.1)} className="icu-panel dark">
            <Chip>Technology & Expertise</Chip>

            <h2>Technology & Expertise</h2>

            <p>
              Our ICU team is trained in advanced bronchoscopy techniques,
              supported by respiratory therapists and critical care specialists.
            </p>

            <p>
              We follow stringent safety protocols and use state-of-the-art
              bronchoscopic tools, ensuring accurate diagnosis and prompt
              treatment.
            </p>

            <div className="icu-tech-image">
              <img src={techImg1} alt="Advanced Bronchoscopy Tools" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Risks */}
      <section className="icu-section icu-light">
        <div className="clinical-bg" />

        <div className="icu-wrap">
          <motion.div {...fu()} className="icu-panel">
            <Chip dark>Risks</Chip>

            <h2>Risks</h2>

            <ul className="icu-list">
              {risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              All procedures are monitored closely to minimize risks and ensure
              patient safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recovery */}
      <section className="icu-section icu-light" style={{ paddingTop: 0 }}>
        <div className="icu-wrap">
          <motion.div {...fu()} className="icu-panel">
            <Chip dark>Recovery & Support</Chip>

            <h2>Recovery & Support</h2>

            <p>
              Most ICU patients recover from bronchoscopy without complications.
              Some may experience a sore throat or mild cough temporarily.
            </p>

            <p>
              Our team ensures post-procedure care, monitoring vital signs, and
              respiratory stability to allow a smooth transition toward
              recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="icu-section icu-light" style={{ paddingTop: 0 }}>
        <div className="icu-wrap">
          <motion.div {...fu()} className="icu-conclusion">
            <Chip>Conclusion</Chip>

            <h2>Conclusion</h2>

            <p>
              ICU bronchoscopy is a safe and effective procedure that can be
              used to diagnose and treat a variety of lung problems in
              critically ill patients. If you are in the ICU and your doctor
              recommends bronchoscopy, be sure to ask them about the risks and
              benefits of the procedure.
            </p>
          </motion.div>
        </div>
      </section>
        {/* CTA */}
      <section className="oxy-section oxy-light" style={{ paddingTop: 0 }}>
        <div className="oxy-wrap">
          <motion.div {...fu()} className="oxy-cta-box">
            <Chip>Visit Vaayu</Chip>

            <h2>
              Advanced Respiratory ICU Care with Long-Term Recovery Support
            </h2>

            <p>
              Connect with the Vaayu Chest & Sleep Specialists team for expert
              respiratory support, oxygen therapy, ventilation management, and
              critical care guidance.
            </p>

            <div className="oxy-btn-row">
              <a
                href={EKA}
                target="_blank"
                rel="noreferrer"
                className="oxy-btn-primary"
              >
                Vaayu Appointment
              </a>

              <a
                href={EKA}
                target="_blank"
                rel="noreferrer"
                className="oxy-btn-secondary"
              >
                Visit Vaayu
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ICUBronchoscopy;