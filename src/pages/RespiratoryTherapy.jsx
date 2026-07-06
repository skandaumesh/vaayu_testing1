/**************************************************************************
 * src/pages/RespiratoryTherapy.jsx
 * (adjust the path to match your folder structure)
 **************************************************************************/
import React from "react";
import { motion } from "framer-motion";

import heroImg from "../assets/img/front-view-woman-meditating-mat.jpg";
import techImg from "../assets/img/front-view-man-using-nebulizer.jpg";

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
  <span className={dark ? "rt-chip dark" : "rt-chip"}>{children}</span>
);

const RespiratoryTherapy = () => (
  <main className="rt-page">
    <style>{`
      .rt-page,
      .rt-page * {
        box-sizing: border-box;
      }

      .rt-page {
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: ${T.light};
        color: ${T.ink};
        overflow-x: hidden;
      }

      .rt-wrap {
        width: min(92%, 1180px);
        margin: 0 auto;
        position: relative;
        z-index: 2;
      }

      .rt-section {
        position: relative;
        padding: 88px 0;
        overflow: hidden;
      }

      .rt-light {
        background:
          radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
          radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
          ${T.light};
      }

      .rt-dark {
        background:
          radial-gradient(circle at 12% 20%, rgba(215,222,201,.10), transparent 32%),
          radial-gradient(circle at 90% 75%, rgba(159,171,144,.12), transparent 34%),
          ${T.bg};
        color: ${T.text};
      }

      .rt-clinical-bg {
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

      .rt-chip {
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

      .rt-chip.dark {
        color: ${T.green};
        background: rgba(97,114,78,.08);
        border-color: rgba(97,114,78,.18);
      }

      .rt-hero {
        min-height: 72vh;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        background: ${T.bg};
      }

      .rt-hero-bg {
        position: absolute;
        inset: 0;
      }

      .rt-hero-bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: .32;
        filter: saturate(.8) contrast(1.05);
      }

      .rt-hero::after {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, rgba(47,54,26,.96), rgba(47,54,26,.78), rgba(97,114,78,.42)),
          radial-gradient(circle at 78% 38%, rgba(215,222,201,.18), transparent 34%);
      }

      .rt-hero-content {
        position: relative;
        z-index: 2;
        max-width: 860px;
        padding: 130px 0 90px;
      }

      .rt-hero h1 {
        margin: 22px 0 0;
        color: ${T.text};
        font-size: clamp(2.6rem, 5.5vw, 5rem);
        line-height: 1.02;
        letter-spacing: -.055em;
        font-weight: 700;
      }

      .rt-hero h1 span {
        color: ${T.muted};
      }

      .rt-hero-card {
        margin-top: 26px;
        max-width: 720px;
        padding: 24px;
        border-radius: 26px;
        background: rgba(255,248,239,.08);
        border: 1px solid rgba(215,222,201,.22);
        backdrop-filter: blur(16px);
      }

      .rt-hero-card p {
        margin: 0;
        color: ${T.muted};
        font-size: 15.5px;
        line-height: 1.75;
      }

      .rt-grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 34px;
        align-items: stretch;
      }

      .rt-panel {
        border-radius: 34px;
        padding: 42px;
        background: rgba(255,255,255,.72);
        border: 1px solid rgba(97,114,78,.16);
        box-shadow: 0 24px 68px rgba(47,54,26,.12);
      }

      .rt-panel.dark {
        background:
          linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
          ${T.green2};
        border: 1px solid rgba(215,222,201,.18);
        box-shadow: 0 24px 68px rgba(47,54,26,.18);
      }

      .rt-panel h2,
      .rt-panel h3 {
        margin: 18px 0 0;
        font-size: clamp(2rem, 3.4vw, 3rem);
        line-height: 1.13;
        letter-spacing: -.035em;
        color: ${T.ink};
        font-weight: 650;
      }

      .rt-panel.dark h2,
      .rt-panel.dark h3 {
        color: ${T.text};
      }

      .rt-panel p {
        color: #526043;
        line-height: 1.8;
        font-size: 15.5px;
      }

      .rt-panel.dark p {
        color: ${T.muted};
      }

      .rt-list {
        display: grid;
        gap: 12px;
        margin-top: 26px;
        padding: 0;
        list-style: none;
      }

      .rt-list li {
        padding: 15px 16px;
        border-radius: 18px;
        background: rgba(255,248,239,.065);
        border: 1px solid rgba(215,222,201,.13);
        color: ${T.text};
        font-size: 14.5px;
        line-height: 1.55;
        display: grid;
        grid-template-columns: 8px 1fr;
        column-gap: 12px;
      }

      .rt-list li::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${T.muted};
        margin-top: 9px;
      }

      .rt-list strong {
        color: ${T.text};
        font-weight: 750;
      }

      .rt-tech-image {
        margin-top: 24px;
        border-radius: 22px;
        overflow: hidden;
        border: 1px solid rgba(215,222,201,.14);
        box-shadow: 0 22px 56px rgba(47,54,26,.18);
      }

      .rt-tech-image img {
        width: 100%;
        display: block;
        object-fit: cover;
        filter: saturate(.9) brightness(.9);
      }

      .rt-conclusion {
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

      .rt-conclusion h2 {
        max-width: 780px;
        margin: 18px 0 0;
        font-size: clamp(2rem, 4vw, 3.3rem);
        line-height: 1.1;
        letter-spacing: -.035em;
        color: ${T.text};
      }

      .rt-conclusion p {
        max-width: 780px;
        color: ${T.muted};
        line-height: 1.75;
        font-size: 15.5px;
      }

      @media(max-width: 980px) {
        .rt-grid-2 {
          grid-template-columns: 1fr;
        }

        .rt-hero {
          min-height: auto;
        }

        .rt-hero-content {
          padding: 110px 0 70px;
        }
      }

      @media(max-width: 760px) {
        .rt-section {
          padding: 72px 0;
        }

        .rt-wrap {
          width: min(90%, 440px);
        }

        .rt-hero h1 {
          font-size: clamp(2.3rem, 11vw, 3.4rem);
          line-height: 1.08;
        }

        .rt-panel {
          padding: 24px;
          border-radius: 26px;
        }

        .rt-conclusion {
          padding: 28px;
          border-radius: 26px;
        }
      }

      @supports (-webkit-touch-callout: none) {
        .rt-hero {
          min-height: -webkit-fill-available;
        }
      }
    `}</style>

    {/* ───── Hero ───── */}
    <section className="rt-hero">
      <div className="rt-hero-bg">
        <img src={heroImg} alt="Respiratory Therapy Program" />
      </div>

      <div className="rt-wrap">
        <motion.div {...fu()} className="rt-hero-content">
          <Chip>Respiratory Therapy Care</Chip>

          <h1>
            Respiratory Therapy <br />
            <span>Program</span>
          </h1>

          <div className="rt-hero-card">
            <p>
              Respiratory therapists support patients with breathing and
              cardiopulmonary disorders across ICU, clinic, hospital, and
              home-care settings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───── Overview ───── */}
    <section className="rt-section rt-light">
      <div className="rt-clinical-bg" />

      <div className="rt-wrap">
        <motion.div {...fu()} className="rt-panel">
          <Chip dark>Overview</Chip>

          <h2>What is Respiratory Therapy?</h2>

          <p>
            Respiratory therapists are healthcare professionals who specialize in
            caring for patients with breathing and cardiopulmonary disorders.
            They work across hospitals, clinics, and home-care settings—and are
            vital members of the intensive care team.
          </p>

          <p>
            In the ICU, their advanced skills with ventilation, oxygen delivery
            systems, and airway management help stabilize critically ill
            patients and guide them toward recovery.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ───── Functions & Advantages ───── */}
    <section className="rt-section rt-dark">
      <div className="rt-clinical-bg" />

      <div className="rt-wrap rt-grid-2">
        {/* Functions */}
        <motion.div {...fu()} className="rt-panel dark">
          <Chip>Core Functions</Chip>

          <h2>Core Functions in the ICU</h2>

          <ul className="rt-list">
            <li>
              <span>
                <strong>Monitoring respiratory status</strong> – track breathing
                rate, oxygen &amp; CO<sub>2</sub> levels; assess for distress.
              </span>
            </li>
            <li>
              <span>
                <strong>Administering therapy</strong> – oxygen delivery,
                mechanical ventilation, aerosol &amp; nebulizer treatments.
              </span>
            </li>
            <li>
              <span>
                <strong>Cough-assist &amp; airway clearance</strong> for
                patients unable to do so effectively on their own.
              </span>
            </li>
            <li>
              <span>
                <strong>Pain &amp; anxiety management</strong> in collaboration
                with the critical-care team.
              </span>
            </li>
            <li>
              <span>
                <strong>Education &amp; counselling</strong> for patients and
                families on disease, equipment, and self-care.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Advantages / Expertise */}
        <motion.div {...fu(0.1)} className="rt-panel dark">
          <Chip>Why They Matter</Chip>

          <h2>Why Respiratory Therapists Matter</h2>

          <p>
            Their specialized training with ventilators, oxygen concentrators,
            and advanced airway devices allows seamless, high-quality care when
            seconds count.
          </p>

          <p>
            Beyond technical skills, therapists provide critical education and
            emotional support—helping families navigate complex respiratory
            illnesses with confidence.
          </p>

          <div className="rt-tech-image">
            <img src={techImg} alt="Respiratory therapy equipment" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───── Conclusion ───── */}
    <section className="rt-section rt-light">
      <div className="rt-wrap">
        <motion.div {...fu()} className="rt-conclusion">
          <Chip>In Summary</Chip>

          <h2>In Summary</h2>

          <p>
            With their blend of technical expertise and patient-centered care,
            respiratory therapists are indispensable in the ICU. Talk to your
            care team to learn how respiratory therapy supports recovery and
            long-term lung health.
          </p>
        </motion.div>
      </div>
    </section>
    
  </main>
);

export default RespiratoryTherapy;