/**************************************************************************
 * src/pages/ECMOProgram.jsx
 **************************************************************************/
import React from "react";
import { motion } from "framer-motion";

import heroImg from "../assets/img/different-doctors-doing-surgical-procedure-patient.jpg";
import techImg from "../assets/img/closeup-woman-nurse-showing-bones-radiography-monitoring-sickness-recovery.jpg";

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
  <span className={dark ? "ecmo-chip dark" : "ecmo-chip"}>{children}</span>
);

const ECMOProgram = () => {
  const uses = [
    "Severe heart failure not responding to other treatments",
    "Severe lung failure such as acute respiratory distress syndrome",
    "Cardiopulmonary arrest where breathing or circulation needs support",
    "Pregnancy-related severe heart or lung complications",
  ];

  const howItWorks = [
    "Blood is taken out of the body through a large vein.",
    "The ECMO machine oxygenates the blood outside the body.",
    "The oxygen-rich blood is pumped back into the body.",
  ];

  const risks = [
    "Blood clots, which may lead to stroke or other complications",
    "Infection risk due to critical care support",
    "Bleeding risk during treatment",
    "Kidney, liver, or neurological complications in some cases",
  ];

  return (
    <main className="ecmo-page">
      <style>{`
        .ecmo-page, .ecmo-page * {
          box-sizing: border-box;
        }

        .ecmo-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: ${T.light};
          color: ${T.ink};
          overflow-x: hidden;
        }

        .ecmo-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .ecmo-section {
          position: relative;
          padding: 88px 0;
          overflow: hidden;
        }

        .ecmo-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
        }

        .ecmo-dark {
          background:
            radial-gradient(circle at 12% 20%, rgba(215,222,201,.1), transparent 32%),
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

        .ecmo-chip {
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

        .ecmo-chip.dark {
          color: ${T.green};
          background: rgba(97,114,78,.08);
          border-color: rgba(97,114,78,.18);
        }

        .ecmo-hero {
          min-height: 72vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.bg};
        }

        .ecmo-hero-bg {
          position: absolute;
          inset: 0;
        }

        .ecmo-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .32;
          filter: saturate(.8) contrast(1.05);
        }

        .ecmo-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.96), rgba(47,54,26,.78), rgba(97,114,78,.42)),
            radial-gradient(circle at 78% 38%, rgba(215,222,201,.18), transparent 34%);
        }

        .ecmo-hero-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          padding: 130px 0 90px;
        }

        .ecmo-hero h1 {
          margin: 22px 0 0;
          color: ${T.text};
          font-size: clamp(2.6rem, 5.5vw, 5.2rem);
          line-height: 1.02;
          letter-spacing: -.055em;
          font-weight: 700;
        }

        .ecmo-hero h1 span {
          color: ${T.muted};
        }

        .ecmo-hero-card {
          margin-top: 26px;
          max-width: 720px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          backdrop-filter: blur(16px);
        }

        .ecmo-hero-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 15.5px;
          line-height: 1.75;
        }

        .ecmo-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: stretch;
        }

        .ecmo-panel {
          border-radius: 34px;
          padding: 42px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 24px 68px rgba(47,54,26,.12);
        }

        .ecmo-panel.dark {
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .ecmo-panel h2,
        .ecmo-panel h3 {
          margin: 18px 0 0;
          font-size: clamp(2rem, 3.4vw, 3rem);
          line-height: 1.13;
          letter-spacing: -.035em;
          color: ${T.ink};
          font-weight: 650;
        }

        .ecmo-panel.dark h2,
        .ecmo-panel.dark h3 {
          color: ${T.text};
        }

        .ecmo-panel p {
          color: #526043;
          line-height: 1.8;
          font-size: 15.5px;
        }

        .ecmo-panel.dark p {
          color: ${T.muted};
        }

        .ecmo-image-panel {
          min-height: 470px;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 26px 72px rgba(47,54,26,.2);
          border: 1px solid rgba(97,114,78,.14);
        }

        .ecmo-image-panel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(.86) brightness(.88);
        }

        .ecmo-list {
          display: grid;
          gap: 12px;
          margin-top: 26px;
          padding: 0;
          list-style: none;
        }

        .ecmo-list li {
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

        .ecmo-list li::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.green};
          margin-top: 9px;
        }

        .ecmo-panel.dark .ecmo-list li {
          background: rgba(255,248,239,.065);
          border-color: rgba(215,222,201,.13);
          color: ${T.text};
        }

        .ecmo-panel.dark .ecmo-list li::before {
          background: ${T.muted};
        }

        .ecmo-conclusion {
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

        .ecmo-conclusion h2 {
          max-width: 780px;
          margin: 18px 0 0;
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1.1;
          letter-spacing: -.035em;
          color: ${T.text};
        }

        .ecmo-conclusion p {
          max-width: 760px;
          color: ${T.muted};
          line-height: 1.75;
          font-size: 15.5px;
        }

        @media(max-width: 980px) {
          .ecmo-grid-2 {
            grid-template-columns: 1fr;
          }

          .ecmo-hero {
            min-height: auto;
          }

          .ecmo-hero-content {
            padding: 110px 0 70px;
          }
        }

        @media(max-width: 760px) {
          .ecmo-section {
            padding: 72px 0;
          }

          .ecmo-wrap {
            width: min(90%, 440px);
          }

          .ecmo-hero h1 {
            font-size: clamp(2.3rem, 11vw, 3.4rem);
            line-height: 1.08;
          }

          .ecmo-panel {
            padding: 24px;
            border-radius: 26px;
          }

          .ecmo-image-panel {
            min-height: 310px;
            border-radius: 26px;
          }

          .ecmo-conclusion {
            padding: 28px;
            border-radius: 26px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .ecmo-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="ecmo-hero">
        <div className="ecmo-hero-bg">
          <img src={heroImg} alt="ECMO programme at Vaayu" />
        </div>

        <div className="ecmo-wrap">
          <motion.div {...fu()} className="ecmo-hero-content">
            <Chip>Advanced Critical Care Support</Chip>

            <h1>
              ECMO <br />
              <span>Programme</span>
            </h1>

            <div className="ecmo-hero-card">
              <p>
                Extracorporeal membrane oxygenation, or ECMO, is a life-support
                treatment used when the heart or lungs are not able to function
                well on their own.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ecmo-section ecmo-light">
        <div className="clinical-bg" />
        <div className="ecmo-wrap ecmo-grid-2">
          <motion.div {...fu()} className="ecmo-panel">
            <Chip dark>Overview</Chip>
            <h2>What is ECMO?</h2>
            <p>
              ECMO helps support the body by taking blood out, oxygenating it
              outside the body, and pumping it back in. It gives the heart and
              lungs time to rest and recover during severe illness.
            </p>
            <p>
              This treatment is used only in serious situations and requires a
              specialized medical team to monitor the patient closely.
            </p>
          </motion.div>

          <motion.div {...fu(0.1)} className="ecmo-image-panel">
            <img src={techImg} alt="ECMO technology and monitoring" />
          </motion.div>
        </div>
      </section>

      {/* USES + HOW IT WORKS */}
      <section className="ecmo-section ecmo-dark">
        <div className="clinical-bg" />
        <div className="ecmo-wrap ecmo-grid-2">
          <motion.div {...fu()} className="ecmo-panel dark">
            <Chip>When ECMO is Used</Chip>
            <h2>Used in Critical Heart and Lung Conditions</h2>
            <p>
              ECMO may be considered when conventional treatment is not enough
              to support the patient’s heart or lungs.
            </p>

            <ul className="ecmo-list">
              {uses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fu(0.1)} className="ecmo-panel dark">
            <Chip>How It Works</Chip>
            <h2>Supporting Oxygen and Circulation</h2>
            <p>
              The ECMO machine has two key functions: pumping blood and adding
              oxygen to it outside the body.
            </p>

            <ul className="ecmo-list">
              {howItWorks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* RISKS */}
      <section className="ecmo-section ecmo-light">
        <div className="clinical-bg" />
        <div className="ecmo-wrap">
          <motion.div {...fu()} className="ecmo-panel">
            <Chip dark>Risks</Chip>
            <h2>Risks of ECMO</h2>
            <p>
              ECMO is a serious procedure. While it can be lifesaving, it also
              carries risks that must be discussed carefully with the treating
              doctor.
            </p>

            <ul className="ecmo-list">
              {risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* RECOVERY */}
      <section className="ecmo-section ecmo-light" style={{ paddingTop: 0 }}>
        <div className="ecmo-wrap ecmo-grid-2">
          <motion.div {...fu()} className="ecmo-panel">
            <Chip dark>Recovery</Chip>
            <h2>Recovery After ECMO</h2>
            <p>
              Recovery after ECMO varies from patient to patient. Some people
              may need to stay in the hospital for several weeks or months,
              while others may recover sooner depending on their condition.
            </p>
            <p>
              Patients may need rehabilitation, follow-up care, and support from
              multiple specialists to regain strength and manage their health.
            </p>
          </motion.div>

          <motion.div {...fu(0.1)} className="ecmo-panel">
            <Chip dark>Care Team</Chip>
            <h2>Specialized Monitoring Matters</h2>
            <p>
              ECMO requires continuous monitoring by trained doctors, nurses,
              respiratory specialists, and critical care teams.
            </p>
            <p>
              The goal is to support the body safely while the underlying heart
              or lung condition is treated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="ecmo-section ecmo-light" style={{ paddingTop: 0 }}>
        <div className="ecmo-wrap">
          <motion.div {...fu()} className="ecmo-conclusion">
            <Chip>Conclusion</Chip>
            <h2>Life-Support Care for Severe Heart or Lung Failure</h2>
            <p>
              ECMO can help people with severe heart or lung problems when other
              treatments are not enough. Because it is complex and carries
              risks, patients and families should discuss the benefits and
              possible complications with the treating doctor.
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

export default ECMOProgram;