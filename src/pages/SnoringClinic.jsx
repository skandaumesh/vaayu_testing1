import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/img/snoring-hero.jpg";
import consultImage from "../assets/img/snoring.png";
import middleImg from "../assets/img/middle.png";
import popupBg from "../assets/img/sn.jpg";

const EKA_URL =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const SnoringClinic = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) setShowPopup(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const causes = [
    "Blocked nasal passages or deviated septum",
    "Throat muscle relaxation during sleep",
    "Excess neck tissue due to overweight",
    "Alcohol before bedtime",
    "Sleeping on your back",
    "Enlarged tonsils or adenoids",
  ];

  const specialistSigns = [
    "Loud, chronic snoring",
    "Pauses in breathing during sleep",
    "Gasping or choking at night",
    "Morning headaches",
    "Excessive daytime sleepiness",
  ];

  return (
    <motion.div
      className="snoring-page"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <style>{`
        .snoring-page,
        .snoring-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }

        .snoring-page {
          color: #243018;
          background: #f6f8f2;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .snoring-page .snoring-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 24px 96px;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .snoring-page .snoring-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(28, 36, 18, 0.86), rgba(45, 58, 32, 0.64)),
            radial-gradient(circle at 70% 40%, rgba(255, 248, 239, 0.12), transparent 34%);
          z-index: 1;
        }

        .snoring-page .hero-content-box {
          position: relative;
          z-index: 3;
          width: min(100%, 980px);
          text-align: center;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .snoring-page .hero-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 248, 239, 0.34);
          color: #f5f7ef;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
          background: rgba(255, 248, 239, 0.06);
        }

        .snoring-page .hero-title {
          margin: 0;
          color: #f5f7ef;
          font-size: clamp(2.35rem, 5vw, 5rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .snoring-page .hero-title span {
          color: #d7dec9;
        }

        .snoring-page .hero-description {
          max-width: 720px;
          margin: 22px auto 0;
          color: #eef4e9;
          font-size: clamp(1rem, 1.7vw, 1.2rem);
          line-height: 1.75;
          font-weight: 400;
        }

        .snoring-page .hero-description strong {
          color: #ffffff;
          font-weight: 700;
        }

        .snoring-page .hero-cta,
        .snoring-page .primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          padding: 14px 34px;
          border-radius: 999px;
          background: #61724e;
          color: #f5f7ef;
          text-decoration: none;
          border: none;
          font-size: 15px;
          font-weight: 700;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .snoring-page .hero-cta:hover,
        .snoring-page .primary-btn:hover {
          transform: translateY(-2px);
          background: #4d5b3c;
        }

        .snoring-page .popup-wrap {
          max-width: 1120px;
          margin: -48px auto 54px;
          padding: 0 24px;
          position: relative;
          z-index: 5;
        }

        .snoring-page .popup-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          min-height: 260px;
          background-image: url(${popupBg});
          background-size: cover;
          background-position: center;
          box-shadow: 0 24px 70px rgba(47, 54, 26, 0.22);
        }

        .snoring-page .popup-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(36, 48, 24, 0.9), rgba(73, 86, 54, 0.74));
        }

        .snoring-page .popup-content {
          position: relative;
          z-index: 2;
          padding: 34px;
          text-align: center;
          color: #f5f7ef;
          max-width: 780px;
          margin: 0 auto;
        }

        .snoring-page .popup-close {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 3;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 248, 239, 0.3);
          background: rgba(255, 248, 239, 0.08);
          color: #f5f7ef;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
        }

        .snoring-page .popup-content h2 {
          margin: 0;
          font-size: clamp(1.45rem, 2.8vw, 2.3rem);
          line-height: 1.25;
          font-weight: 800;
        }

        .snoring-page .popup-content p {
          margin: 14px auto 0;
          max-width: 680px;
          font-size: 15px;
          line-height: 1.75;
          color: #e7eddf;
        }

        .snoring-page .page-container {
          width: min(100%, 1180px);
          margin: 0 auto;
          padding: 56px 24px 90px;
        }

        .snoring-page .content-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 34px;
          box-shadow: 0 14px 40px rgba(47, 54, 26, 0.08);
          border: 1px solid rgba(97, 114, 78, 0.12);
        }

        .snoring-page .soft-card {
          background: #eef4e9;
        }

        .snoring-page .section-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          align-items: center;
        }

        .snoring-page .content-card h2 {
          margin: 0 0 14px;
          color: #556b2f;
          font-size: clamp(1.45rem, 2.4vw, 2rem);
          line-height: 1.25;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .snoring-page .content-card h3 {
          margin: 0 0 12px;
          color: #556b2f;
          font-size: clamp(1.15rem, 2vw, 1.45rem);
          line-height: 1.3;
          font-weight: 800;
        }

        .snoring-page .content-card p {
          margin: 0;
          color: #4d5842;
          line-height: 1.75;
          font-size: 15.5px;
        }

        .snoring-page .content-card p + p {
          margin-top: 12px;
        }

        .snoring-page .content-card ul {
          margin: 18px 0 0;
          padding-left: 18px;
          color: #4d5842;
          line-height: 1.8;
          font-size: 15px;
        }

        .snoring-page .consult-image {
          width: min(100%, 420px);
          display: block;
          margin: 0 auto;
          border-radius: 24px;
          box-shadow: 0 18px 46px rgba(47, 54, 26, 0.14);
        }

        .snoring-page .professional-split {
          background: #ffffff;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(97,114,78,.12);
          box-shadow: 0 22px 64px rgba(47,54,26,.10);
        }

        .snoring-page .professional-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .snoring-page .professional-panel {
          padding: 42px;
          position: relative;
        }

        .snoring-page .professional-panel:first-child {
          background: #f5f7ef;
          border-right: 1px solid rgba(97,114,78,.12);
        }

        .snoring-page .professional-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(97,114,78,.10);
          color: #61724e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .snoring-page .professional-chip::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #61724e;
        }

        .snoring-page .professional-title {
          margin: 0 0 22px;
          color: #556b2f;
          font-size: clamp(1.65rem, 2.5vw, 2.35rem);
          line-height: 1.16;
          letter-spacing: -0.035em;
          font-weight: 800;
        }

        .snoring-page .professional-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }

        .snoring-page .professional-list li {
          display: grid;
          grid-template-columns: 34px 1fr;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 16px;
          background: #f5f7ef;
          border: 1px solid rgba(97,114,78,.12);
          color: #364225;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 500;
        }

        .snoring-page .professional-number {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: #61724e;
          color: #f5f7ef;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
        }

        .snoring-page .professional-note {
          margin-top: 24px;
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(97,114,78,.09);
          border: 1px solid rgba(97,114,78,.15);
          color: #4d5842;
          font-size: 15px;
          line-height: 1.75;
        }

        .snoring-page .professional-note strong {
          color: #2f361a;
          font-weight: 800;
        }

        .snoring-page .diagnosis-section {
          background: #eef4e9;
          border-radius: 28px;
          padding: 46px 32px;
          box-shadow: 0 14px 40px rgba(47, 54, 26, 0.08);
          border: 1px solid rgba(97, 114, 78, 0.12);
        }

        .snoring-page .diagnosis-section h2 {
          text-align: center;
          color: #556b2f;
          font-size: clamp(1.45rem, 2.6vw, 2.2rem);
          margin: 0 0 14px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .snoring-page .diagnosis-intro {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 38px;
          color: #4d5842;
          line-height: 1.75;
          font-size: 15px;
        }

        .snoring-page .diagnosis-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 34px;
          align-items: center;
        }

        .snoring-page .diagnosis-list {
          display: grid;
          gap: 26px;
        }

        .snoring-page .diagnosis-item h3 {
          margin: 0 0 8px;
          color: #556b2f;
          font-size: 1.1rem;
          font-weight: 800;
        }

        .snoring-page .diagnosis-item p {
          margin: 0;
          color: #4d5842;
          line-height: 1.65;
          font-size: 14.5px;
        }

        .snoring-page .middle-image {
          width: min(100%, 240px);
          display: block;
          object-fit: contain;
        }

        .snoring-page .cta-section {
          text-align: center;
          padding: 34px 20px 0;
        }

        .snoring-page .cta-section h3 {
          margin: 0 0 12px;
          color: #2f361a;
          font-size: clamp(1.3rem, 2.4vw, 1.85rem);
          font-weight: 800;
        }

        .snoring-page .cta-section p {
          max-width: 680px;
          margin: 0 auto;
          color: #4d5842;
          line-height: 1.75;
        }

        @media (max-width: 1024px) {
          .snoring-page .section-grid,
          .snoring-page .professional-grid {
            grid-template-columns: 1fr;
          }

          .snoring-page .professional-panel:first-child {
            border-right: none;
            border-bottom: 1px solid rgba(97,114,78,.12);
          }

          .snoring-page .diagnosis-grid {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .snoring-page .middle-image {
            margin: 0 auto;
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .snoring-page .snoring-hero {
            min-height: auto;
            padding: 118px 20px 76px;
          }

          .snoring-page .hero-kicker {
            font-size: 10.5px;
            padding: 7px 14px;
            margin-bottom: 16px;
          }

          .snoring-page .hero-title {
            font-size: clamp(2rem, 9vw, 3.4rem);
            line-height: 1.12;
          }

          .snoring-page .hero-description {
            font-size: 15.5px;
            line-height: 1.68;
          }

          .snoring-page .hero-cta,
          .snoring-page .primary-btn {
            width: 100%;
            max-width: 330px;
            padding: 14px 22px;
          }

          .snoring-page .page-container {
            padding: 44px 18px 72px;
          }

          .snoring-page .content-card,
          .snoring-page .diagnosis-section {
            border-radius: 22px;
            padding: 26px 20px;
          }

          .snoring-page .professional-panel {
            padding: 28px 22px;
          }

          .snoring-page .professional-split {
            border-radius: 24px;
          }

          .snoring-page .professional-list li {
            grid-template-columns: 30px 1fr;
            padding: 13px 14px;
            font-size: 14.5px;
          }

          .snoring-page .professional-number {
            width: 30px;
            height: 30px;
            border-radius: 10px;
          }
        }

        @media (max-width: 480px) {
          .snoring-page .snoring-hero {
            padding: 104px 18px 66px;
          }

          .snoring-page .hero-title {
            letter-spacing: -0.03em;
          }

          .snoring-page .professional-title {
            font-size: 1.55rem;
          }

          .snoring-page .professional-panel {
            padding: 24px 18px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .snoring-page .snoring-hero {
            min-height: 100dvh;
          }

          .snoring-page .popup-card,
          .snoring-page .content-card,
          .snoring-page .diagnosis-section,
          .snoring-page .professional-split {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
      `}</style>

      <section className="snoring-hero">
        <motion.div className="hero-content-box" variants={fadeInUp}>
          <div className="hero-kicker">Advanced Sleep Care at Vaayu, Bengaluru</div>

          <h1 className="hero-title">
            Snoring Treatment & Sleep Apnea Care in <span>Bengaluru</span>
          </h1>

          <p className="hero-description">
            Identify the cause of your snoring, improve sleep quality, and
            restore your health with our <strong>snoring specialist team</strong>.
          </p>

          <a href={EKA_URL} target="_blank" rel="noopener noreferrer" className="hero-cta">
            Book Your Consultation
          </a>
        </motion.div>
      </section>

      <AnimatePresence>
        {showPopup && (
          <motion.div className="popup-wrap" initial="hidden" animate="visible" exit="hidden" variants={zoomIn}>
            <div className="popup-card">
              <button onClick={() => setShowPopup(false)} className="popup-close" aria-label="Close popup">
                ×
              </button>

              <div className="popup-content">
                <h2>Snoring Isn’t Just Noise — It Could Be Sleep Apnea</h2>
                <p>
                  Chronic snoring may be linked to <strong>Obstructive Sleep Apnea (OSA)</strong> and other
                  breathing disorders. At <strong>Vaayu Sleep Clinic Bengaluru</strong>, our sleep experts
                  provide accurate diagnosis and personalized treatment.
                </p>
                <a href={EKA_URL} target="_blank" rel="noopener noreferrer">
                  Book Your Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="page-container">
        <motion.section className="content-card" variants={fadeInUp}>
          <h2>What is Snoring and Why You Should Care</h2>
          <p>
            Snoring happens when airflow through the mouth or nose is partially
            blocked during sleep, causing throat tissues to vibrate.
          </p>
          <p>
            <strong>
              Frequent loud snoring may be a sign of sleep apnea and is best
              assessed by a trusted snoring specialist in Bengaluru.
            </strong>
          </p>
          <p>
            Left untreated, chronic snoring may impact cardiovascular health,
            mental focus, and daytime energy levels.
          </p>
        </motion.section>

        <div style={{ height: 34 }} />

        <motion.section className="section-grid content-card soft-card" variants={fadeInUp}>
          <div>
            <h2>Why Snoring Matters</h2>
            <p>
              At <strong>Vaayu Snoring Clinic</strong>, we understand that
              snoring is often more than a sleep disturbance. It can be a sign
              of underlying airway problems like <strong>Obstructive Sleep Apnea</strong>.
            </p>
            <ul>
              <li>Sleep studies for accurate diagnosis</li>
              <li>ENT and pulmonology evaluations</li>
              <li>Custom lifestyle and device-based treatments</li>
            </ul>
          </div>

          <img src={consultImage} alt="Snoring specialist consultation" className="consult-image" />
        </motion.section>

        <div style={{ height: 44 }} />

        <motion.section className="professional-split" variants={fadeInUp}>
          <div className="professional-grid">
            <div className="professional-panel">
              <div className="professional-chip">Common Triggers</div>
              <h2 className="professional-title">Common Causes of Snoring</h2>

              <ul className="professional-list">
                {causes.map((item, index) => (
                  <li key={item}>
                    <span className="professional-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="professional-panel">
              <div className="professional-chip">When to act</div>
              <h2 className="professional-title">When to See a Snoring Specialist</h2>

              <ul className="professional-list">
                {specialistSigns.map((item, index) => (
                  <li key={item}>
                    <span className="professional-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="professional-note">
                These symptoms may indicate <strong>sleep apnea</strong>, which can increase the risk of
                high blood pressure, heart disease, and stroke if left untreated.
              </div>
            </div>
          </div>
        </motion.section>

        <div style={{ height: 44 }} />

        <motion.section className="diagnosis-section" variants={fadeInUp}>
          <h2>Snoring & Sleep Apnea Diagnosis in Bengaluru</h2>

          <p className="diagnosis-intro">
            Our <strong>snoring clinic</strong> offers expert evaluation using
            ENT checks, sleep studies, and home testing to pinpoint the cause
            and recommend treatment.
          </p>

          <div className="diagnosis-grid">
            <div className="diagnosis-list">
              <div className="diagnosis-item">
                <h3>Sleep History & Physical Exam</h3>
                <p>Review of symptoms, lifestyle, and medical history.</p>
              </div>

              <div className="diagnosis-item">
                <h3>ENT Evaluation</h3>
                <p>Check for nasal blockages or enlarged tonsils.</p>
              </div>
            </div>

            <img src={middleImg} alt="Sleep study for snoring in Bengaluru" className="middle-image" />

            <div className="diagnosis-list">
              <div className="diagnosis-item">
                <h3>Sleep Study</h3>
                <p>Overnight lab test to track breathing and snoring.</p>
              </div>

              <div className="diagnosis-item">
                <h3>Home Sleep Apnea Test</h3>
                <p>Convenient at-home testing for eligible patients.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="cta-section" variants={fadeInUp}>
          <h3>Book Your Snoring Consultation</h3>
          <p>
            Visit Vaayu’s <strong>snoring treatment clinic in Bengaluru</strong>{" "}
            to sleep better and live healthier.
          </p>

          <a
            href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Book an Appointment
          </a>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default SnoringClinic;