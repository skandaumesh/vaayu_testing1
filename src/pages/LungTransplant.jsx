import React from "react";
import { motion } from "framer-motion";

import heroBg from "../assets/img/acc.jpg";
import treatImg from "../assets/img/lung-treatment.jpg";
import riskBg from "../assets/img/ab.png";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const T = {
  cream: "#dbe5c5",
  soft: "#eef4e9",
  sage: "#9fab90",
  sageLight: "#d7dec9",
  olive: "#61724e",
  oliveDark: "#3f472e",
  brown: "#6e5b46",
  white: "#ffffff",
};

const E = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, delay, ease: E },
});

const LungTransplant = () => {
  return (
    <main className="lung-transplant-page">
      <style>{`
        .lung-transplant-page,
        .lung-transplant-page * {
          box-sizing: border-box;
        }

        .lung-transplant-page {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: ${T.cream};
          color: ${T.oliveDark};
          overflow-x: hidden;
          width: 100%;
        }

        .lt-container {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .lt-section {
          padding: clamp(58px, 8vw, 88px) 0;
          position: relative;
        }

        .lt-soft {
          background: ${T.soft};
        }

        .lt-dark {
          background: ${T.olive};
          color: ${T.cream};
        }

        .lt-kicker {
          display: inline-flex;
          align-items: center;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(97, 114, 78, 0.08);
          border: 1px solid rgba(97, 114, 78, 0.16);
          color: ${T.olive};
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .lt-dark .lt-kicker,
        .lt-hero-card .lt-kicker {
          background: rgba(255, 248, 239, 0.10);
          color: ${T.sageLight};
          border-color: rgba(215, 222, 201, 0.22);
        }

        .lt-title {
          margin: 16px 0 0;
          font-size: clamp(1.85rem, 3.4vw, 3rem);
          line-height: 1.18;
          font-weight: 650;
          letter-spacing: -0.025em;
          color: ${T.oliveDark};
        }

        .lt-dark .lt-title,
        .lt-hero-card .lt-title {
          color: ${T.cream};
        }

        .lt-text {
          margin: 16px 0 0;
          font-size: clamp(14.5px, 1.4vw, 16px);
          line-height: 1.78;
          color: ${T.brown};
        }

        .lt-dark .lt-text,
        .lt-hero-card .lt-text {
          color: ${T.sageLight};
        }

        .lt-card {
          background: ${T.white};
          border-radius: 26px;
          padding: clamp(24px, 4vw, 34px);
          border: 1px solid rgba(97, 114, 78, 0.14);
          box-shadow: 0 18px 50px rgba(47, 54, 26, 0.08);
        }

        .lt-card-dark {
          background: rgba(255, 248, 239, 0.08);
          border: 1px solid rgba(215, 222, 201, 0.18);
          box-shadow: 0 20px 60px rgba(47, 54, 26, 0.22);
        }

        .lt-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(24px, 4vw, 40px);
          align-items: center;
        }

        .lt-list {
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .lt-list li {
          position: relative;
          padding: 15px 16px 15px 42px;
          border-radius: 16px;
          background: ${T.cream};
          border: 1px solid rgba(97, 114, 78, 0.12);
          color: ${T.brown};
          font-size: 14.5px;
          line-height: 1.65;
        }

        .lt-soft .lt-list li {
          background: ${T.white};
        }

        .lt-dark .lt-list li {
          background: rgba(255, 248, 239, 0.09);
          border-color: rgba(215, 222, 201, 0.17);
          color: ${T.cream};
        }

        .lt-list li::before {
          content: "";
          position: absolute;
          left: 20px;
          top: 25px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${T.olive};
        }

        .lt-dark .lt-list li::before {
          background: ${T.sageLight};
        }

        .lt-list strong {
          color: ${T.oliveDark};
          font-weight: 700;
        }

        .lt-dark .lt-list strong {
          color: ${T.sageLight};
        }

        .lt-image {
          width: 100%;
          min-height: 310px;
          max-height: 460px;
          height: 100%;
          object-fit: cover;
          border-radius: 26px;
          display: block;
          box-shadow: 0 18px 50px rgba(47, 54, 26, 0.12);
        }

        .lt-hero {
          min-height: 72svh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 118px 20px 76px;
          overflow: hidden;
        }

        .lt-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.92) 0%, rgba(47,54,26,.78) 52%, rgba(97,114,78,.52) 100%),
            linear-gradient(to top, ${T.olive}, transparent 38%);
        }

        .lt-hero-card {
          position: relative;
          z-index: 2;
          width: min(92%, 760px);
          padding: clamp(26px, 4vw, 38px);
          border-radius: 30px;
          background: rgba(255, 248, 239, 0.10);
          border: 1px solid rgba(215, 222, 201, 0.22);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 28px 80px rgba(47,54,26,0.30);
          text-align: center;
        }

        .lt-hero-title {
          margin: 20px 0 0;
          color: ${T.cream};
          font-size: clamp(2.35rem, 5vw, 4.7rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .lt-hero-sub {
          margin: 22px auto 0;
          max-width: 640px;
          color: ${T.sageLight};
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
        }

        .lt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          border-radius: 999px;
          padding: 14px 32px;
          background: ${T.sageLight};
          color: ${T.oliveDark};
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.28s ease;
        }

        .lt-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(215,222,201,0.22);
        }

        .lt-center {
          text-align: center;
        }

        .lt-center .lt-text {
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }

        .lt-split-card {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .lt-inner-card {
          background: ${T.soft};
          border: 1px solid rgba(97, 114, 78, 0.12);
          border-radius: 22px;
          padding: 24px;
        }

        .lt-inner-card h3 {
          margin: 0;
          color: ${T.oliveDark};
          font-size: clamp(1.15rem, 2vw, 1.45rem);
          line-height: 1.3;
          font-weight: 650;
        }

        .lt-inner-card .lt-list {
          margin-top: 18px;
        }

        .lt-inner-card .lt-list li {
          background: ${T.white};
        }

        .lt-bg-panel {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          padding: clamp(30px, 5vw, 46px);
          background: ${T.olive};
          color: ${T.cream};
          box-shadow: 0 24px 70px rgba(47,54,26,0.18);
        }

        .lt-bg-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--bg);
          background-size: cover;
          background-position: center;
          opacity: 0.2;
        }

        .lt-bg-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(47,54,26,.90), rgba(97,114,78,.70));
        }

        .lt-bg-panel-content {
          position: relative;
          z-index: 2;
        }

        .lt-bg-panel .lt-title {
          color: ${T.cream};
        }

        .lt-bg-panel .lt-text {
          color: ${T.sageLight};
          max-width: 860px;
        }

        @media (max-width: 980px) {
          .lt-grid-2,
          .lt-split-card {
            grid-template-columns: 1fr;
          }

          .lt-image {
            min-height: 280px;
            max-height: none;
          }
        }

        @media (max-width: 640px) {
          .lt-container {
            width: min(90%, 430px);
          }

          .lt-hero {
            min-height: auto;
            padding: 108px 18px 62px;
          }

          .lt-hero-card {
            width: 100%;
            border-radius: 24px;
          }

          .lt-hero-title {
            font-size: clamp(2.05rem, 10vw, 3.35rem);
            line-height: 1.12;
          }

          .lt-card,
          .lt-inner-card,
          .lt-bg-panel {
            border-radius: 22px;
          }

          .lt-image {
            min-height: 220px;
            border-radius: 22px;
          }

          .lt-list li {
            padding: 14px 14px 14px 36px;
            font-size: 14px;
          }

          .lt-list li::before {
            left: 17px;
            top: 24px;
          }

          .lt-btn {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .lt-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        className="lt-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <motion.div {...fadeUp(0)} className="lt-hero-card">
          <span className="lt-kicker">Advanced Respiratory Care</span>

          <h1 className="lt-hero-title">Lung Transplant</h1>

          <p className="lt-hero-sub">
            Understanding lung transplant, when it is considered, and how
            patients are evaluated, prepared, and supported through recovery.
          </p>

          <a
            href={EKA}
            target="_blank"
            rel="noopener noreferrer"
            className="lt-btn"
          >
Book a Consultation          </a>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="lt-section lt-soft">
        <div className="lt-container">
          <motion.div {...fadeUp(0)} className="lt-card lt-center">
            <span className="lt-kicker">Introduction</span>

            <h2 className="lt-title">What is a Lung Transplant?</h2>

            <p className="lt-text">
              A lung transplant is a surgical procedure in which a diseased lung
              or lungs are replaced with healthy lungs from a deceased donor.
              Lung transplantation is considered for individuals with severe
              lung diseases that significantly affect quality of life and daily
              activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TYPES */}
      <section className="lt-section">
        <div className="lt-container">
          <motion.div
            {...fadeUp(0)}
            className="lt-bg-panel"
            style={{ "--bg": `url(${treatImg})` }}
          >
            <div className="lt-bg-panel-content">
              <span className="lt-kicker">Types of Transplants</span>

              <h2 className="lt-title">Types of Lung Transplants</h2>

              <ul className="lt-list">
                <li>
                  <strong>Single Lung Transplant:</strong> Replacing one
                  diseased lung.
                </li>
                <li>
                  <strong>Double Lung Transplant:</strong> Replacing both
                  diseased lungs.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDICATIONS + EVALUATION */}
      <section className="lt-section lt-soft">
        <div className="lt-container">
          <div className="lt-grid-2">
            <motion.div {...fadeUp(0)} className="lt-card">
              <span className="lt-kicker">When It Is Considered</span>

              <h2 className="lt-title">
                Conditions Requiring Lung Transplant
              </h2>

              <ul className="lt-list">
                <li>Chronic obstructive pulmonary disease</li>
                <li>Idiopathic pulmonary fibrosis</li>
                <li>Cystic fibrosis</li>
                <li>Pulmonary hypertension</li>
                <li>Bronchiectasis</li>
                <li>Alpha-1 antitrypsin deficiency</li>
                <li>Sarcoidosis</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="lt-card">
              <span className="lt-kicker">Preparation</span>

              <h2 className="lt-title">Evaluation and Preparation</h2>

              <ul className="lt-list">
                <li>
                  <strong>Medical evaluation:</strong> Tests are conducted to
                  assess overall health and lung disease severity.
                </li>
                <li>
                  <strong>Psychosocial evaluation:</strong> Emotional and
                  psychological readiness is reviewed before transplant.
                </li>
                <li>
                  <strong>Matching:</strong> Blood type, size, and medical
                  urgency are considered for donor matching.
                </li>
                <li>
                  <strong>Preparation:</strong> Patients are monitored and
                  prepared while waiting for suitable donor lungs.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SURGERY */}
      <section className="lt-section">
        <div className="lt-container">
          <div className="lt-grid-2">
            <motion.div {...fadeUp(0)} className="lt-card">
              <span className="lt-kicker">Surgery and Recovery</span>

              <h2 className="lt-title">What Happens During Recovery?</h2>

              <ul className="lt-list">
                <li>The surgery may take several hours.</li>
                <li>
                  After surgery, patients are closely monitored in the intensive
                  care unit before moving to a regular hospital room.
                </li>
                <li>
                  Recovery time varies, but many patients spend a few weeks in
                  the hospital and continue recovery at home.
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.08)}>
              <img
                src={treatImg}
                alt="Lung transplant treatment and recovery"
                className="lt-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE + FOLLOW UP */}
      <section className="lt-section lt-soft">
        <div className="lt-container">
          <motion.div {...fadeUp(0)} className="lt-card">
            <span className="lt-kicker">Long-Term Care</span>

            <h2 className="lt-title">Lifestyle and Follow-Up Care</h2>

            <p className="lt-text">
              Long-term success after lung transplant depends on consistent
              follow-up, medication adherence, rehabilitation, hygiene, and
              careful monitoring for complications.
            </p>

            <div className="lt-split-card">
              <div className="lt-inner-card">
                <h3>Lifestyle Changes</h3>

                <ul className="lt-list">
                  <li>
                    <strong>Medications:</strong> Lifelong immunosuppressant
                    medicines are required to help prevent organ rejection.
                  </li>
                  <li>
                    <strong>Exercise:</strong> Pulmonary rehabilitation helps
                    improve lung function and overall fitness.
                  </li>
                  <li>
                    <strong>Diet:</strong> A balanced diet supports healing and
                    helps maintain healthy weight.
                  </li>
                  <li>
                    <strong>Hygiene:</strong> Good hygiene helps reduce the risk
                    of infections.
                  </li>
                </ul>
              </div>

              <div className="lt-inner-card">
                <h3>Follow-Up Care</h3>

                <ul className="lt-list">
                  <li>
                    Regular appointments help monitor lung function, medication
                    levels, and overall health.
                  </li>
                  <li>
                    Patients should stay alert for signs of rejection or
                    complications and report changes promptly.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RISKS */}
      <section className="lt-section">
        <div className="lt-container">
          <motion.div
            {...fadeUp(0)}
            className="lt-bg-panel"
            style={{ "--bg": `url(${riskBg})` }}
          >
            <div className="lt-bg-panel-content">
              <span className="lt-kicker">Risks and Quality of Life</span>

              <h2 className="lt-title">
                Understanding Risks and Long-Term Commitment
              </h2>

              <ul className="lt-list">
                <li>Risk of infection and organ rejection.</li>
                <li>Possible side effects from long-term medications.</li>
                <li>Need for lifelong medical supervision and follow-up.</li>
              </ul>

              <p className="lt-text">
                Lung transplants offer hope and improved quality of life for
                many patients. With advances in medicine and a strong support
                system, patients can live healthier, more productive lives after
                transplant. Commitment to follow-up care and lifestyle changes
                is key to long-term success.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LungTransplant;