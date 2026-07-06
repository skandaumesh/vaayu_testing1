import React from "react";
import heroImage from "../assets/img/sleep-apnea-hero.jpg";
import diagnosisBox from "../assets/img/diagnosis-box.jpg";
import ctaBg from "../assets/img/cta-bg.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

export default function ObstructiveSleepApnea() {
  return (
    <div className="osa-page">
      <style>{`
        .osa-page,
        .osa-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }

        .osa-page {
          color: #2f361a;
          background: #f6f8f2;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .osa-hero {
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

        .osa-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.92), rgba(47,54,26,.76), rgba(97,114,78,.52));
          z-index: 1;
        }

      

        .osa-hero-content {
          position: relative;
          z-index: 3;
          max-width: 920px;
          width: 100%;
          text-align: center;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .osa-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(255,248,239,.10);
          border: 1px solid rgba(215,222,201,.30);
          color: #f7faef;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .osa-hero h1 {
          margin: 0;
          font-size: clamp(2.3rem, 5vw, 4.8rem);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 700;
          color: #fff8ef;
        }

        .osa-hero h1 span {
          color: #d7dec9;
        }

        .osa-hero p {
          max-width: 760px;
          margin: 22px auto 0;
          color: #d7dec9;
          font-size: clamp(1rem, 1.7vw, 1.18rem);
          line-height: 1.75;
          font-weight: 400;
        }

        .osa-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          padding: 14px 34px;
          border-radius: 999px;
          background: #61724e;
          color: #fff8ef;
          text-decoration: none;
          border: none;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 14px 34px rgba(0,0,0,.28);
          transition: transform .25s ease, background .25s ease;
        }

        .osa-btn:hover {
          transform: translateY(-2px);
          background: #4d5b3c;
        }

        .osa-section {
          padding: 72px 24px;
          position: relative;
        }

        .osa-section.light {
          background: #f6f8f2;
        }

        .osa-section.soft {
          background: #eef4e9;
        }

        .osa-wrap {
          width: min(100%, 1120px);
          margin: 0 auto;
        }

        .osa-card {
          background: #fff8ef;
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 26px;
          padding: 34px;
          box-shadow: 0 16px 44px rgba(47,54,26,.10);
        }

        .osa-card.white {
          background: #ffffff;
        }

        .osa-card h2,
        .osa-heading {
          margin: 0 0 16px;
          color: #556b2f;
          font-size: clamp(1.45rem, 2.5vw, 2.1rem);
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .osa-card p,
        .osa-text {
          margin: 0;
          color: #4d5842;
          font-size: 15.5px;
          line-height: 1.78;
        }

        .osa-card p + p {
          margin-top: 14px;
        }

        .osa-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .osa-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .osa-list li {
          padding: 14px 16px;
          border-radius: 16px;
          background: #f5f7ef;
          border-left: 4px solid #61724e;
          color: #4d5842;
          font-size: 14.5px;
          line-height: 1.6;
        }

        .osa-center-head {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 34px;
        }

        .osa-center-head h2 {
          margin: 0;
          color: #556b2f;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          line-height: 1.25;
          font-weight: 700;
        }

        .diagnosis-layout {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          min-height: 460px;
          box-shadow: 0 24px 70px rgba(47,54,26,.16);
        }

        .diagnosis-layout img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          display: block;
          filter: saturate(.85) brightness(.78);
        }

        .diagnosis-layout::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(47,54,26,.58), rgba(47,54,26,.14));
          z-index: 1;
        }

        .diagnosis-panel {
          position: absolute;
          top: 50%;
          right: 42px;
          transform: translateY(-50%);
          z-index: 2;
          width: min(100%, 430px);
          background: rgba(255,248,239,.94);
          border: 1px solid rgba(97,114,78,.18);
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 18px 46px rgba(47,54,26,.18);
        }

        .diagnosis-panel h2 {
          margin: 0 0 12px;
          color: #556b2f;
          font-size: clamp(1.35rem, 2.2vw, 1.9rem);
          line-height: 1.25;
          font-weight: 700;
        }

        .diagnosis-panel p {
          margin: 0 0 16px;
          color: #4d5842;
          line-height: 1.7;
          font-size: 14.5px;
        }

        .diagnosis-panel ul {
          margin: 0;
          padding-left: 18px;
          color: #4d5842;
          font-size: 14.5px;
          line-height: 1.8;
        }

        .why-list {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          gap: 14px;
        }

        .why-list li {
          background: #fff8ef;
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 18px;
          padding: 16px 18px;
          color: #4d5842;
          line-height: 1.65;
          box-shadow: 0 10px 26px rgba(47,54,26,.08);
        }

        .osa-cta {
          position: relative;
          min-height: 420px;
          padding: 90px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-image: url(${ctaBg});
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .osa-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(47,54,26,.92), rgba(97,114,78,.78));
        }

        .osa-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .osa-cta h3 {
          margin: 0;
          color: #fff8ef;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .osa-cta p {
          margin: 18px auto 0;
          color: #d7dec9;
          font-size: 16px;
          line-height: 1.75;
          max-width: 620px;
        }

        @media (max-width: 1024px) {
          .osa-grid {
            grid-template-columns: 1fr;
          }

          .diagnosis-panel {
            right: 28px;
          }
        }

        @media (max-width: 768px) {
          .osa-hero {
            min-height: auto;
            padding: 118px 20px 76px;
          }

          .osa-hero h1 {
            font-size: clamp(2rem, 9vw, 3.4rem);
            line-height: 1.12;
          }

          .osa-hero p {
            font-size: 15.5px;
            line-height: 1.68;
          }

          .osa-btn {
            width: 100%;
            max-width: 330px;
            padding: 14px 22px;
          }

          .osa-section {
            padding: 56px 18px;
          }

          .osa-card {
            border-radius: 22px;
            padding: 26px 20px;
          }

          .diagnosis-layout {
            min-height: auto;
            display: grid;
          }

          .diagnosis-layout img {
            height: 260px;
          }

          .diagnosis-panel {
            position: relative;
            top: auto;
            right: auto;
            transform: none;
            width: 100%;
            border-radius: 0 0 24px 24px;
            box-shadow: none;
          }

          .diagnosis-layout::before {
            background: linear-gradient(to top, rgba(47,54,26,.48), transparent);
          }

          .osa-cta {
            min-height: 360px;
            padding: 72px 20px;
          }
        }

        @media (max-width: 480px) {
          .osa-hero {
            padding: 104px 18px 66px;
          }

          .osa-chip {
            font-size: 10.5px;
            padding: 7px 14px;
          }

          .osa-card h2,
          .osa-heading {
            font-size: 1.35rem;
          }

          .osa-list li,
          .why-list li {
            font-size: 14px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .osa-hero {
            min-height: 100dvh;
          }

          .osa-card,
          .diagnosis-layout,
          .diagnosis-panel {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        @media (min-width: 1440px) {
          .osa-hero {
            padding-top: 160px;
            padding-bottom: 120px;
          }

          .osa-wrap {
            width: min(100%, 1200px);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="osa-hero">
        <div className="osa-hero-content">
          <div className="osa-chip">Vaayu Sleep Clinic</div>

          <h1>
            Obstructive Sleep Apnea <span>(OSA)</span>
          </h1>

          <p>
            Snoring may just be the surface. At Vaayu, we dig deeper to diagnose
            and treat what is really affecting your sleep and overall health.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="osa-btn">
Book a Consultation          </a>
        </div>
      </section>

      {/* What is OSA */}
      <section className="osa-section light">
        <div className="osa-wrap">
          <div className="osa-card white">
            <h2>What is Obstructive Sleep Apnea?</h2>

            <p>
              Obstructive sleep apnea (OSA) is a common problem that affects a
              person’s breathing during sleep. A person with OSA has times
              during sleep in which air cannot flow normally into the lungs.
              The block in airflow is usually caused by the collapse of the
              soft tissues in the back of the throat and tongue during sleep.
            </p>

            <p>
              Apnea means not breathing. In OSA, you may stop breathing for
              short periods of time. Even when you are trying to breathe, there
              may be little or no airflow into the lungs. These pauses can occur
              repeatedly during sleep and may cause you to wake up from a sound
              sleep. If not treated, serious health problems may develop over time.
            </p>
          </div>
        </div>
      </section>

      {/* Risk and Symptoms */}
      <section className="osa-section soft">
        <div className="osa-wrap">
          <div className="osa-center-head">
            <h2>People at higher risk of developing sleep apnea may have:</h2>
          </div>

          <div className="osa-grid">
            <div className="osa-card">
              <h2>Risk Factors</h2>
              <ul className="osa-list">
                <li>Enlarged tonsils or adenoids</li>
                <li>A family history of OSA</li>
                <li>Excessive weight or obesity</li>
                <li>Gasping or choking sounds during sleep</li>
                <li>
                  Breathing pauses observed by someone watching you sleep
                </li>
                <li>
                  Jaw problems such as micrognathia or retrognathia
                </li>
              </ul>
            </div>

            <div className="osa-card">
              <h2>Common Symptoms</h2>
              <ul className="osa-list">
                <li>Sudden or jerky body movements during sleep</li>
                <li>
                  Waking up feeling like you have not had enough sleep
                </li>
                <li>Dry or sore throat upon waking</li>
                <li>Sleepiness, fatigue, or tiredness during the day</li>
                <li>
                  Memory issues, poor concentration, mood swings, or personality changes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis at Vaayu */}
      <section className="osa-section light">
        <div className="osa-wrap">
          <div className="diagnosis-layout">
            <img src={diagnosisBox} alt="Sleep diagnosis at Vaayu" />

            <div className="diagnosis-panel">
              <h2>Diagnosis at Vaayu’s Sleep Clinic</h2>

              <p>
                At Vaayu, we take a structured approach to diagnosing your sleep
                disturbances.
              </p>

              <ul>
                <li><strong>Sleep History & Physical Exam</strong></li>
                <li><strong>ENT Evaluation</strong></li>
                <li><strong>Polysomnography</strong></li>
                <li><strong>Home Sleep Apnea Test</strong></li>
                <li><strong>Expert Review</strong></li>
              </ul>

              <a href={EKA} target="_blank" rel="noopener noreferrer" className="osa-btn">
                Book Diagnosis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vaayu */}
      <section className="osa-section soft">
        <div className="osa-wrap">
          <div className="osa-center-head">
            <h2>Why Choose Vaayu?</h2>
          </div>

          <ul className="why-list">
            <li>Specialized team of pulmonologists and sleep experts</li>
            <li>Advanced, non-invasive diagnostics</li>
            <li>Personalized treatment for every individual</li>
            <li>Integrated rehabilitation and lifestyle support</li>
            <li>Trusted care under one roof from diagnosis to follow-up</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="osa-cta">
        <div className="osa-cta-content">
          <h3>Don’t Let Snoring Steal Your Health</h3>

          <p>
            Book a consultation at Vaayu’s Sleep Clinic and take the first step
            toward better sleep, better health, and a better life.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="osa-btn">
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  );
}