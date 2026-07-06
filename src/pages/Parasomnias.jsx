import React from "react";
import heroImage from "../assets/img/insomnia-cause.png";
import causeImage from "../assets/img/parasomnia-hero.jpg";
import ctaBg from "../assets/img/cta-bg.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

export default function Parasomnias() {
  return (
    <div className="parasomnia-page">
      <style>{`
        .parasomnia-page,
        .parasomnia-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }

        .parasomnia-page {
          background: #f6f8f2;
          color: #2f361a;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .parasomnia-page .parasomnia-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 128px 24px 76px;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .parasomnia-page .parasomnia-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(47,54,26,.92),
            rgba(47,54,26,.78),
          );
          z-index: 1;
        }

    
        .parasomnia-page .parasomnia-hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 920px;
          text-align: center;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          margin-top: 42px;
        }

        .parasomnia-page .parasomnia-chip {
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
          margin-bottom: 22px;
        }

        .parasomnia-page .parasomnia-hero-title {
          margin: 0;
          font-size: clamp(2.8rem, 4.8vw, 5rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #fff8ef;
        }

        .parasomnia-page .parasomnia-hero-title span {
          color: #d7dec9;
        }

        .parasomnia-page .parasomnia-hero-text {
          max-width: 740px;
          margin: 22px auto 0;
          color: #eef4e9;
          font-size: clamp(1.05rem, 1.6vw, 1.2rem);
          line-height: 1.75;
          font-weight: 400;
        }

        .parasomnia-page .parasomnia-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
          padding: 14px 34px;
          border-radius: 999px;
          background: #61724e;
          color: #fff8ef;
          text-decoration: none;
          border: none;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: .02em;
          cursor: pointer;
          box-shadow: 0 14px 34px rgba(0,0,0,.28);
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .parasomnia-page .parasomnia-btn:hover {
          transform: translateY(-2px);
          background: #4d5b3c;
          box-shadow: 0 18px 44px rgba(0,0,0,.32);
        }

        .parasomnia-page .parasomnia-section {
          padding: 72px 24px;
          position: relative;
        }

        .parasomnia-page .parasomnia-section-light {
          background: #f6f8f2;
        }

        .parasomnia-page .parasomnia-section-soft {
          background: #eef4e9;
        }

        .parasomnia-page .parasomnia-wrap {
          width: min(100%, 1120px);
          margin: 0 auto;
        }

        .parasomnia-page .parasomnia-card {
          background: #fff8ef;
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 26px;
          padding: 34px;
          box-shadow: 0 16px 44px rgba(47,54,26,.10);
        }

        .parasomnia-page .parasomnia-card-white {
          background: #ffffff;
        }

        .parasomnia-page .parasomnia-card-title,
        .parasomnia-page .parasomnia-section-title {
          margin: 0 0 16px;
          color: #556b2f;
          font-size: clamp(1.5rem, 2.3vw, 2.2rem);
          line-height: 1.25;
          letter-spacing: -0.02em;
          font-weight: 800;
        }

        .parasomnia-page .parasomnia-card-text {
          margin: 0;
          color: #4d5842;
          font-size: 15.5px;
          line-height: 1.78;
          font-weight: 400;
        }

        .parasomnia-page .parasomnia-card-text + .parasomnia-card-text {
          margin-top: 14px;
        }

        .parasomnia-page .parasomnia-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
          align-items: stretch;
        }

        .parasomnia-page .parasomnia-center-head {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 34px;
        }

        .parasomnia-page .parasomnia-center-head .parasomnia-card-text {
          max-width: 720px;
          margin: 0 auto;
        }

        .parasomnia-page .parasomnia-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .parasomnia-page .parasomnia-list-item {
          padding: 15px 16px;
          border-radius: 16px;
          background: #f5f7ef;
          border-left: 4px solid #61724e;
          color: #4d5842;
          font-size: 14.5px;
          line-height: 1.65;
          font-weight: 400;
        }

        .parasomnia-page .parasomnia-list-item strong {
          display: block;
          color: #556b2f;
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 5px;
        }

        .parasomnia-page .parasomnia-image-card {
          position: relative;
          min-height: 430px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(47,54,26,.16);
          border: 1px solid rgba(97,114,78,.14);
          background: #d7dec9;
        }

        .parasomnia-page .parasomnia-image-card img {
          width: 100%;
          height: 100%;
          min-height: 430px;
          object-fit: cover;
          display: block;
          filter: saturate(.88) brightness(.88);
        }

        .parasomnia-page .parasomnia-cta {
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

        .parasomnia-page .parasomnia-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(47,54,26,.92), rgba(97,114,78,.78));
          z-index: 1;
        }

        .parasomnia-page .parasomnia-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .parasomnia-page .parasomnia-cta-title {
          margin: 0;
          color: #fff8ef;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.12;
          letter-spacing: -0.03em;
          font-weight: 800;
        }

        .parasomnia-page .parasomnia-cta-text {
          margin: 18px auto 0;
          color: #d7dec9;
          font-size: 16px;
          line-height: 1.75;
          max-width: 620px;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .parasomnia-page .parasomnia-grid {
            grid-template-columns: 1fr;
          }

          .parasomnia-page .parasomnia-image-card,
          .parasomnia-page .parasomnia-image-card img {
            min-height: 340px;
          }
        }

        @media (max-width: 768px) {
          .parasomnia-page .parasomnia-hero {
            min-height: auto;
            padding: 110px 20px 74px;
          }

          .parasomnia-page .parasomnia-hero-content {
            margin-top: 28px;
          }

          .parasomnia-page .parasomnia-hero-title {
            font-size: clamp(2.15rem, 9vw, 3.8rem);
            line-height: 1.08;
            letter-spacing: -0.035em;
          }

          .parasomnia-page .parasomnia-hero-text {
            font-size: 15.5px;
            line-height: 1.68;
          }

          .parasomnia-page .parasomnia-btn {
            width: 100%;
            max-width: 330px;
            padding: 14px 22px;
          }

          .parasomnia-page .parasomnia-section {
            padding: 56px 18px;
          }

          .parasomnia-page .parasomnia-card {
            border-radius: 22px;
            padding: 26px 20px;
          }

          .parasomnia-page .parasomnia-image-card,
          .parasomnia-page .parasomnia-image-card img {
            min-height: 260px;
          }

          .parasomnia-page .parasomnia-cta {
            min-height: 360px;
            padding: 72px 20px;
          }
        }

        @media (max-width: 480px) {
          .parasomnia-page .parasomnia-hero {
            padding: 96px 18px 64px;
          }

          .parasomnia-page .parasomnia-chip {
            font-size: 10.5px;
            padding: 7px 14px;
            margin-bottom: 18px;
          }

          .parasomnia-page .parasomnia-card-title,
          .parasomnia-page .parasomnia-section-title {
            font-size: 1.38rem;
          }

          .parasomnia-page .parasomnia-list-item {
            font-size: 14px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .parasomnia-page .parasomnia-hero {
            min-height: 100dvh;
          }

          .parasomnia-page .parasomnia-card,
          .parasomnia-page .parasomnia-image-card {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        @media (min-width: 1440px) {
          .parasomnia-page .parasomnia-hero {
            padding-top: 150px;
            padding-bottom: 110px;
          }

          .parasomnia-page .parasomnia-wrap {
            width: min(100%, 1200px);
          }
        }
      `}</style>

      <section className="parasomnia-hero">
        <div className="parasomnia-hero-content">
          <div className="parasomnia-chip">Vaayu Sleep Clinic</div>

          <h1 className="parasomnia-hero-title">
            Parasomnias & <span>Sleep Disruptions</span>
          </h1>

          <p className="parasomnia-hero-text">
            Understand and treat unusual behaviors during sleep with expert-led
            sleep care at Vaayu.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="parasomnia-btn">
Book a Consultation          </a>
        </div>
      </section>

      <section className="parasomnia-section parasomnia-section-light">
        <div className="parasomnia-wrap">
          <div className="parasomnia-card parasomnia-card-white">
            <h2 className="parasomnia-card-title">What is Parasomnia?</h2>

            <p className="parasomnia-card-text">
              Parasomnias are disruptive sleep disorders involving abnormal
              movements, behaviors, emotions, or perceptions during sleep
              transitions.
            </p>

            <p className="parasomnia-card-text">
              At Vaayu, we specialize in evaluating night terrors, sleepwalking,
              confusional arousals, and REM sleep behavior disorders. With
              comprehensive assessments and personalized treatment, we help
              patients and families regain safe, uninterrupted rest.
            </p>
          </div>
        </div>
      </section>

      <section className="parasomnia-section parasomnia-section-soft">
        <div className="parasomnia-wrap">
          <div className="parasomnia-center-head">
            <h2 className="parasomnia-section-title">Common Symptoms</h2>
            <p className="parasomnia-card-text">
              Parasomnias can appear as unusual movements, behaviors, or
              confusion during sleep.
            </p>
          </div>

          <div className="parasomnia-grid">
            {[
              "Sleepwalking or roaming during sleep",
              "Night terrors and panic episodes",
              "Talking, screaming, or violent movements during sleep",
              "Confusion or lack of memory after episodes",
            ].map((item) => (
              <div className="parasomnia-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="parasomnia-section parasomnia-section-light">
        <div className="parasomnia-wrap">
          <div className="parasomnia-grid">
            <div className="parasomnia-card parasomnia-card-white">
              <h2 className="parasomnia-card-title">Common Causes</h2>

              <ul className="parasomnia-list">
                <li className="parasomnia-list-item">
                  <strong>Neurological Factors</strong>
                  Abnormal brain activity during transitions between sleep stages.
                </li>

                <li className="parasomnia-list-item">
                  <strong>Genetic Predisposition</strong>
                  Family history of parasomnias may increase susceptibility.
                </li>

                <li className="parasomnia-list-item">
                  <strong>Stress or Sleep Deprivation</strong>
                  Poor sleep quality and emotional stress can trigger episodes.
                </li>
              </ul>
            </div>

            <div className="parasomnia-image-card">
              <img src={causeImage} alt="Causes of parasomnia" />
            </div>
          </div>
        </div>
      </section>

      <section className="parasomnia-cta">
        <div className="parasomnia-cta-content">
          <h3 className="parasomnia-cta-title">Safe Sleep Starts Here</h3>

          <p className="parasomnia-cta-text">
            Don’t ignore unusual sleep behaviors. Schedule a sleep consultation
            today and let our experts restore peace to your nights.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="parasomnia-btn">
            Book a Sleep Consultation
          </a>
        </div>
      </section>
    </div>
  );
}