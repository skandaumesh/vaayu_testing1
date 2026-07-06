import React from "react";
import { motion } from "framer-motion";

import heroImg from "../assets/img/female-patient-undergoing-surgery.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

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
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, delay, ease: E },
});

const Chip = ({ children, dark = false }) => (
  <span className={dark ? "oxy-chip dark" : "oxy-chip"}>{children}</span>
);

const OxygenTherapy = () => {
  return (
    <main className="oxy-page">
      <style>{`
        .oxy-page,
        .oxy-page * {
          box-sizing: border-box;
        }

        .oxy-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: ${T.light};
          color: ${T.ink};
          overflow-x: hidden;
        }

        .oxy-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .oxy-section {
          position: relative;
          padding: 88px 0;
          overflow: hidden;
        }

        .oxy-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
        }

        .oxy-dark {
          background:
            radial-gradient(circle at 12% 20%, rgba(215,222,201,.10), transparent 32%),
            radial-gradient(circle at 90% 75%, rgba(159,171,144,.12), transparent 34%),
            ${T.bg};
          color: ${T.text};
        }

        .oxy-clinical-bg {
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

        .oxy-chip {
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

        .oxy-chip.dark {
          color: ${T.green};
          background: rgba(97,114,78,.08);
          border-color: rgba(97,114,78,.18);
        }

        .oxy-hero {
          min-height: 72vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.bg};
        }

        .oxy-hero-bg {
          position: absolute;
          inset: 0;
        }

        .oxy-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .32;
          filter: saturate(.8) contrast(1.05);
        }

        .oxy-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.96), rgba(47,54,26,.78), rgba(97,114,78,.42)),
            radial-gradient(circle at 78% 38%, rgba(215,222,201,.18), transparent 34%);
        }

        .oxy-hero-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          padding: 130px 0 90px;
        }

        .oxy-hero h1 {
          margin: 22px 0 0;
          color: ${T.text};
          font-size: clamp(2.6rem, 5.5vw, 5rem);
          line-height: 1.02;
          letter-spacing: -.055em;
          font-weight: 700;
        }

        .oxy-hero h1 span {
          color: ${T.muted};
        }

        .oxy-hero-card {
          margin-top: 26px;
          max-width: 720px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          backdrop-filter: blur(16px);
        }

        .oxy-hero-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 15.5px;
          line-height: 1.75;
        }

        .oxy-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: stretch;
        }

        .oxy-panel {
          border-radius: 34px;
          padding: 42px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 24px 68px rgba(47,54,26,.12);
        }

        .oxy-panel.dark {
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .oxy-panel h2,
        .oxy-panel h3 {
          margin: 18px 0 0;
          font-size: clamp(2rem, 3.4vw, 3rem);
          line-height: 1.13;
          letter-spacing: -.035em;
          color: ${T.ink};
          font-weight: 650;
        }

        .oxy-panel.dark h2,
        .oxy-panel.dark h3 {
          color: ${T.text};
        }

        .oxy-panel p {
          color: #526043;
          line-height: 1.8;
          font-size: 15.5px;
        }

        .oxy-panel.dark p {
          color: ${T.muted};
        }

        .oxy-cta-box {
          border-radius: 38px;
          padding: clamp(30px,5vw,58px);
          background:
            linear-gradient(135deg, rgba(47,54,26,.94), rgba(97,114,78,.88)),
            url(${heroImg});
          background-size: cover;
          background-position: center;
          color: ${T.text};
          box-shadow: 0 30px 90px rgba(47,54,26,.2);
        }

        .oxy-cta-box h2 {
          max-width: 780px;
          margin: 0;
          font-size: clamp(2rem,4vw,3.3rem);
          line-height: 1.1;
          letter-spacing: -.035em;
        }

        .oxy-cta-box p {
          max-width: 680px;
          color: ${T.muted};
          line-height: 1.75;
          margin-top: 18px;
        }

        .oxy-btn-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 30px;
        }

        .oxy-btn-primary,
        .oxy-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 750;
          font-size: 14.5px;
          transition: all .28s ease;
        }

        .oxy-btn-primary {
          background: ${T.green};
          color: ${T.text};
          box-shadow: 0 16px 40px rgba(47,54,26,.22);
        }

        .oxy-btn-secondary {
          background: rgba(255,248,239,.08);
          color: ${T.text};
          border: 1px solid rgba(215,222,201,.28);
        }

        .oxy-btn-primary:hover,
        .oxy-btn-secondary:hover {
          transform: translateY(-2px);
        }

        @media(max-width: 980px) {
          .oxy-grid-2 {
            grid-template-columns: 1fr;
          }

          .oxy-hero {
            min-height: auto;
          }

          .oxy-hero-content {
            padding: 110px 0 70px;
          }
        }

        @media(max-width: 760px) {
          .oxy-section {
            padding: 72px 0;
          }

          .oxy-wrap {
            width: min(90%, 440px);
          }

          .oxy-hero h1 {
            font-size: clamp(2.3rem, 11vw, 3.4rem);
            line-height: 1.08;
          }

          .oxy-panel {
            padding: 24px;
            border-radius: 26px;
          }

          .oxy-cta-box {
            padding: 28px;
            border-radius: 26px;
          }

          .oxy-btn-row {
            flex-direction: column;
            align-items: stretch;
          }

          .oxy-btn-primary,
          .oxy-btn-secondary {
            width: 100%;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="oxy-hero">
        <div className="oxy-hero-bg">
          <img src={heroImg} alt="Oxygen Therapy & Ventilation" />
        </div>

        <div className="oxy-wrap">
          <motion.div {...fu()} className="oxy-hero-content">
            <Chip>Critical Respiratory Support</Chip>

            <h1>
              Oxygen Therapy <br />
              <span>& Ventilation</span>
            </h1>

            <div className="oxy-hero-card">
              <p>
                Advanced oxygen delivery and ventilation support for patients
                with acute respiratory failure and critical breathing disorders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="oxy-section oxy-light">
        <div className="oxy-clinical-bg" />

        <div className="oxy-wrap">
          <motion.div {...fu()} className="oxy-panel">
            <Chip dark>Expertise & Facilities</Chip>

            <h2>Expertise & Facilities</h2>

            <p>
              Experienced team trained in critical care, with a cumulative
              experience of &gt;30 years.
            </p>

            <p>
              Our services include a full-fledged respiratory ICU, with
              state-of-the-art equipment, a flourishing respiratory therapist
              program, ECMO program, and ICU bronchoscopy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Invasive Ventilation Section */}
      <section className="oxy-section oxy-dark">
        <div className="oxy-clinical-bg" />

        <div className="oxy-wrap oxy-grid-2">
          <motion.div {...fu()} className="oxy-panel dark">
            <Chip>Invasive Ventilation</Chip>

            <h2>Invasive Ventilation</h2>

            <p>
              During acute respiratory failure, patients may require additional
              support to maintain adequate oxygenation and ventilation.
            </p>

            <p>
              In critical care settings, three common methods of respiratory
              support are mechanical ventilators, non-invasive ventilators, and
              high-flow oxygen therapy.
            </p>
          </motion.div>

          <motion.div {...fu(0.1)} className="oxy-panel dark">
            <Chip>Mechanical Ventilators</Chip>

            <h2>Mechanical Ventilators</h2>

            <p>
              Mechanical ventilators are life-saving machines used when patients
              cannot breathe adequately on their own. These situations might
              arise during critical illnesses or surgeries.
            </p>

            <p>
              The ventilator delivers a controlled amount of oxygen and helps
              remove carbon dioxide from the lungs via a breathing tube placed
              through intubation.
            </p>

            <p>
              Settings are adjusted by healthcare professionals. While essential
              for support, mechanical ventilation doesn’t treat the root cause
              of the illness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Non-Invasive Ventilation */}
      <section className="oxy-section oxy-light">
        <div className="oxy-wrap">
          <motion.div {...fu()} className="oxy-panel">
            <Chip dark>Non-Invasive Ventilation</Chip>

            <h2>Non-Invasive Ventilation</h2>

            <p>
              Non-invasive ventilators are an alternative to mechanical
              ventilators and are used in cases where patients require
              respiratory support but don’t need intubation.
            </p>

            <p>
              Instead of inserting a breathing tube, air is delivered through a
              mask or nasal prongs—making the process more comfortable and
              reducing risks.
            </p>

            <p>
              These are especially helpful for COPD exacerbations or acute
              respiratory failure. They improve oxygenation and reduce breathing
              effort.
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
                Book an Appointment
              </a>

              
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default OxygenTherapy;