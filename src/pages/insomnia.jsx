import React from "react";
import heroImage from "../assets/img/insomnia-hero.jpg";
import causeImage from "../assets/img/insomnia-cause.jpg";
import ctaBg from "../assets/img/cta-bg.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

export default function Insomnia() {
  return (
    <div className="insomnia-page">
      <style>{`
        .insomnia-page,
        .insomnia-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }

        .insomnia-page {
          background: #f6f8f2;
          color: #2f361a;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .insomnia-page .insomnia-hero {
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

        .insomnia-page .insomnia-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            
            rgba(47,54,26,.76),
            rgba(97,114,78,.52)
          );
          z-index: 1;
        }

       

        .insomnia-page .insomnia-hero-content {
          position: relative;
          z-index: 3;
          max-width: 900px;
          width: 100%;
          text-align: center;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .insomnia-page .insomnia-chip {
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

        .insomnia-page .insomnia-hero-title {
          margin: 0;
          font-size: clamp(2.3rem, 5vw, 4.6rem);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 700;
          color: #fff8ef;
        }

        .insomnia-page .insomnia-hero-title span {
          color: #d7dec9;
        }

        .insomnia-page .insomnia-hero-text {
          max-width: 720px;
          margin: 22px auto 0;
          color: #d7dec9;
          font-size: clamp(1rem, 1.7vw, 1.18rem);
          line-height: 1.75;
          font-weight: 400;
        }

        .insomnia-page .insomnia-btn {
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

        .insomnia-page .insomnia-btn:hover {
          transform: translateY(-2px);
          background: #4d5b3c;
        }

        .insomnia-page .insomnia-section {
          padding: 72px 24px;
          position: relative;
        }

        .insomnia-page .insomnia-section-light {
          background: #f6f8f2;
        }

        .insomnia-page .insomnia-section-soft {
          background: #eef4e9;
        }

        .insomnia-page .insomnia-wrap {
          width: min(100%, 1120px);
          margin: 0 auto;
        }

        .insomnia-page .insomnia-card {
          background: #fff8ef;
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 26px;
          padding: 34px;
          box-shadow: 0 16px 44px rgba(47,54,26,.10);
        }

        .insomnia-page .insomnia-card-white {
          background: #ffffff;
        }

        .insomnia-page .insomnia-card-title,
        .insomnia-page .insomnia-section-title {
          margin: 0 0 16px;
          color: #556b2f;
          font-size: clamp(1.45rem, 2.5vw, 2.1rem);
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .insomnia-page .insomnia-card-text {
          margin: 0;
          color: #4d5842;
          font-size: 15.5px;
          line-height: 1.78;
        }

        .insomnia-page .insomnia-card-text + .insomnia-card-text {
          margin-top: 14px;
        }

        .insomnia-page .insomnia-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
          align-items: stretch;
        }

        .insomnia-page .insomnia-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .insomnia-page .insomnia-list-item {
          padding: 15px 16px;
          border-radius: 16px;
          background: #f5f7ef;
          border-left: 4px solid #61724e;
          color: #4d5842;
          font-size: 14.5px;
          line-height: 1.6;
        }

        .insomnia-page .insomnia-list-item strong {
          display: block;
          color: #556b2f;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .insomnia-page .insomnia-center-head {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 34px;
        }

        .insomnia-page .insomnia-center-head .insomnia-section-title {
          margin-bottom: 10px;
        }

        .insomnia-page .insomnia-center-head .insomnia-card-text {
          max-width: 720px;
          margin: 0 auto;
        }

        .insomnia-page .insomnia-image-card {
          position: relative;
          min-height: 430px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(47,54,26,.16);
          border: 1px solid rgba(97,114,78,.14);
        }

        .insomnia-page .insomnia-image-card img {
          width: 100%;
          height: 100%;
          min-height: 430px;
          object-fit: cover;
          display: block;
          filter: saturate(.88) brightness(.9);
        }

        .insomnia-page .insomnia-treatment-card {
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }

        .insomnia-page .insomnia-cta {
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

        .insomnia-page .insomnia-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(47,54,26,.92), rgba(97,114,78,.78));
          z-index: 1;
        }

        .insomnia-page .insomnia-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .insomnia-page .insomnia-cta-title {
          margin: 0;
          color: #fff8ef;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .insomnia-page .insomnia-cta-text {
          margin: 18px auto 0;
          color: #d7dec9;
          font-size: 16px;
          line-height: 1.75;
          max-width: 620px;
        }

        @media (max-width: 1024px) {
          .insomnia-page .insomnia-grid {
            grid-template-columns: 1fr;
          }

          .insomnia-page .insomnia-image-card,
          .insomnia-page .insomnia-image-card img {
            min-height: 340px;
          }
        }

        @media (max-width: 768px) {
          .insomnia-page .insomnia-hero {
            min-height: auto;
            padding: 118px 20px 76px;
          }

          .insomnia-page .insomnia-hero-title {
            font-size: clamp(2rem, 9vw, 3.4rem);
            line-height: 1.12;
          }

          .insomnia-page .insomnia-hero-text {
            font-size: 15.5px;
            line-height: 1.68;
          }

          .insomnia-page .insomnia-btn {
            width: 100%;
            max-width: 330px;
            padding: 14px 22px;
          }

          .insomnia-page .insomnia-section {
            padding: 56px 18px;
          }

          .insomnia-page .insomnia-card {
            border-radius: 22px;
            padding: 26px 20px;
          }

          .insomnia-page .insomnia-image-card,
          .insomnia-page .insomnia-image-card img {
            min-height: 260px;
          }

          .insomnia-page .insomnia-cta {
            min-height: 360px;
            padding: 72px 20px;
          }
        }

        @media (max-width: 480px) {
          .insomnia-page .insomnia-hero {
            padding: 104px 18px 66px;
          }

          .insomnia-page .insomnia-chip {
            font-size: 10.5px;
            padding: 7px 14px;
          }

          .insomnia-page .insomnia-card-title,
          .insomnia-page .insomnia-section-title {
            font-size: 1.35rem;
          }

          .insomnia-page .insomnia-list-item {
            font-size: 14px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .insomnia-page .insomnia-hero {
            min-height: 100dvh;
          }

          .insomnia-page .insomnia-card,
          .insomnia-page .insomnia-image-card {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        @media (min-width: 1440px) {
          .insomnia-page .insomnia-hero {
            padding-top: 160px;
            padding-bottom: 120px;
          }

          .insomnia-page .insomnia-wrap {
            width: min(100%, 1200px);
          }
        }
      `}</style>

      <section className="insomnia-hero">
        <div className="insomnia-hero-content">
          <div className="insomnia-chip">Advanced Sleep Care at Vaayu</div>

          <h1 className="insomnia-hero-title">
            Insomnia & <span>Sleep Struggles</span>
          </h1>

          <p className="insomnia-hero-text">
            Understand the root of your sleepless nights and reclaim restful
            sleep with structured sleep care at Vaayu.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="insomnia-btn">
Book a Consultation          </a>
        </div>
      </section>

      <section className="insomnia-section insomnia-section-light">
        <div className="insomnia-wrap">
          <div className="insomnia-card insomnia-card-white">
            <h2 className="insomnia-card-title">What is Insomnia?</h2>

            <p className="insomnia-card-text">
              Trouble falling asleep or staying asleep may indicate insomnia,
              one of the most common sleep disorders.
            </p>

            <p className="insomnia-card-text">
              At Vaayu, our sleep specialists diagnose and treat the root causes
              of insomnia, whether it is stress, anxiety, lifestyle patterns, or
              other medical conditions. Through personalized evaluation,
              cognitive therapy, and behavioral strategies, we help patients
              reclaim restful sleep naturally.
            </p>
          </div>
        </div>
      </section>

      <section className="insomnia-section insomnia-section-soft">
        <div className="insomnia-wrap">
          <div className="insomnia-center-head">
            <h2 className="insomnia-section-title">Common Symptoms</h2>
            <p className="insomnia-card-text">
              Insomnia can affect both night-time rest and daytime functioning.
            </p>
          </div>

          <div className="insomnia-grid">
            {[
              "Trouble falling asleep at night",
              "Waking up during the night or too early",
              "Daytime fatigue or low energy",
              "Irritability, mood disturbances, or anxiety",
            ].map((item) => (
              <div className="insomnia-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="insomnia-section insomnia-section-light">
        <div className="insomnia-wrap">
          <div className="insomnia-grid">
            <div className="insomnia-card insomnia-card-white">
              <h2 className="insomnia-card-title">Common Causes</h2>

              <ul className="insomnia-list">
                <li className="insomnia-list-item">
                  <strong>Stress</strong>
                  Emotional or work-related stress can keep your mind overactive
                  at night.
                </li>

                <li className="insomnia-list-item">
                  <strong>Medications & Conditions</strong>
                  Some medications or chronic conditions may interfere with your
                  sleep.
                </li>

                <li className="insomnia-list-item">
                  <strong>Screen Time</strong>
                  Excessive phone, tablet, or TV use close to bedtime can
                  disrupt melatonin levels.
                </li>

                <li className="insomnia-list-item">
                  <strong>Substances & Habits</strong>
                  Irregular sleep habits, caffeine, or alcohol can affect your
                  natural sleep cycle.
                </li>
              </ul>
            </div>

            <div className="insomnia-image-card">
              <img src={causeImage} alt="Common causes of insomnia" />
            </div>
          </div>
        </div>
      </section>

      <section className="insomnia-section insomnia-section-soft">
        <div className="insomnia-wrap">
          <div className="insomnia-card insomnia-treatment-card">
            <h2 className="insomnia-card-title">Treatment at Vaayu</h2>

            <p className="insomnia-card-text">
              At Vaayu’s Sleep Clinic, we offer customized treatment plans
              through non-drug therapies such as Cognitive Behavioral Therapy
              for Insomnia, relaxation training, sleep hygiene education, and
              medication where necessary. Our goal is to treat the root cause
              and restore your natural sleep rhythm.
            </p>

            <a href={EKA} target="_blank" rel="noopener noreferrer" className="insomnia-btn">
              Book Sleep Evaluation
            </a>
          </div>
        </div>
      </section>

      <section className="insomnia-cta">
        <div className="insomnia-cta-content">
          <h3 className="insomnia-cta-title">Reclaim Your Rest</h3>

          <p className="insomnia-cta-text">
            Don’t let insomnia control your life. Book an evaluation with our
            sleep specialists today.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="insomnia-btn">
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  );
}