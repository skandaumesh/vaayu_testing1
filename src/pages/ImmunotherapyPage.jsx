import React from "react";
import heroImage from "../assets/img/immunotherapy-hero.jpg";
import processImage from "../assets/img/immunotherapy-process.jpg";
import ctaBgImage from "../assets/img/cta-bg.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

export default function Immunotherapy() {
  return (
    <div className="immunotherapy-page">
      <style>{`
        .immunotherapy-page,
        .immunotherapy-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }

        .immunotherapy-page {
          background: #f6f8f2;
          color: #2f361a;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .immunotherapy-page .immunotherapy-hero {
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

        .immunotherapy-page .immunotherapy-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(24, 31, 15, 0.94),
            rgba(47, 54, 26, 0.86),
            rgba(97, 114, 78, 0.62)
          );
          z-index: 1;
        }

        .immunotherapy-page .immunotherapy-hero-content {
          position: relative;
          z-index: 2;
          width: min(100%, 920px);
          text-align: center;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .immunotherapy-page .immunotherapy-chip {
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

        .immunotherapy-page .immunotherapy-hero-title {
          margin: 0;
          font-size: clamp(2.8rem, 4.8vw, 5rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #f5f7ef;
        }

        .immunotherapy-page .immunotherapy-hero-title span {
          color: #d7dec9;
        }

        .immunotherapy-page .immunotherapy-hero-text {
          max-width: 720px;
          margin: 22px auto 0;
          color: #eef4e9;
          font-size: clamp(1.05rem, 1.6vw, 1.2rem);
          line-height: 1.75;
          font-weight: 400;
        }

        .immunotherapy-page .immunotherapy-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
          padding: 14px 34px;
          border-radius: 999px;
          background: #61724e;
          color: #f5f7ef;
          text-decoration: none;
          border: none;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: .02em;
          cursor: pointer;
          box-shadow: 0 14px 34px rgba(0,0,0,.28);
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .immunotherapy-page .immunotherapy-btn:hover {
          transform: translateY(-2px);
          background: #4d5b3c;
          box-shadow: 0 18px 44px rgba(0,0,0,.32);
        }

        .immunotherapy-page .immunotherapy-section {
          padding: 78px 24px;
          position: relative;
        }

        .immunotherapy-page .immunotherapy-section-light {
          background: #f6f8f2;
        }

        .immunotherapy-page .immunotherapy-section-soft {
          background: #eef4e9;
        }

        .immunotherapy-page .immunotherapy-wrap {
          width: min(100%, 1180px);
          margin: 0 auto;
        }

        .immunotherapy-page .immunotherapy-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 38px;
          align-items: center;
        }

        .immunotherapy-page .immunotherapy-card {
          background: #f5f7ef;
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 28px;
          padding: 38px;
          box-shadow: 0 18px 48px rgba(47,54,26,.10);
        }

        .immunotherapy-page .immunotherapy-card-white {
          background: #ffffff;
        }

        .immunotherapy-page .immunotherapy-title {
          margin: 0 0 16px;
          color: #556b2f;
          font-size: clamp(1.55rem, 2.4vw, 2.25rem);
          line-height: 1.2;
          letter-spacing: -0.025em;
          font-weight: 800;
        }

        .immunotherapy-page .immunotherapy-text {
          margin: 0;
          color: #4d5842;
          font-size: 15.5px;
          line-height: 1.78;
          font-weight: 400;
        }

        .immunotherapy-page .immunotherapy-list {
          list-style: none;
          padding: 0;
          margin: 22px 0 0;
          display: grid;
          gap: 12px;
        }

        .immunotherapy-page .immunotherapy-list li {
          padding: 15px 16px;
          border-radius: 16px;
          background: #f5f7ef;
          border-left: 4px solid #61724e;
          color: #4d5842;
          font-size: 14.5px;
          line-height: 1.65;
        }

        .immunotherapy-page .immunotherapy-image-card {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(47,54,26,.16);
          border: 1px solid rgba(97,114,78,.14);
          background: #d7dec9;
        }

        .immunotherapy-page .immunotherapy-image-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          display: block;
          filter: saturate(.9) brightness(.9);
        }

        .immunotherapy-page .immunotherapy-center-card {
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }

        .immunotherapy-page .immunotherapy-cta {
          position: relative;
          min-height: 430px;
          padding: 90px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-image: url(${ctaBgImage});
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .immunotherapy-page .immunotherapy-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(47,54,26,.94), rgba(97,114,78,.80));
          z-index: 1;
        }

        .immunotherapy-page .immunotherapy-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .immunotherapy-page .immunotherapy-cta-title {
          margin: 0;
          color: #f5f7ef;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.12;
          letter-spacing: -0.03em;
          font-weight: 800;
        }

        .immunotherapy-page .immunotherapy-cta-text {
          margin: 18px auto 0;
          color: #d7dec9;
          font-size: 16px;
          line-height: 1.75;
          max-width: 640px;
        }

        @media (max-width: 1024px) {
          .immunotherapy-page .immunotherapy-grid {
            grid-template-columns: 1fr;
          }

          .immunotherapy-page .immunotherapy-image-card img {
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .immunotherapy-page .immunotherapy-hero {
            min-height: auto;
            padding: 118px 20px 76px;
          }

          .immunotherapy-page .immunotherapy-hero-title {
            font-size: clamp(2.15rem, 9vw, 3.8rem);
            line-height: 1.08;
            letter-spacing: -0.035em;
          }

          .immunotherapy-page .immunotherapy-hero-text {
            font-size: 15.5px;
            line-height: 1.68;
          }

          .immunotherapy-page .immunotherapy-btn {
            width: 100%;
            max-width: 330px;
            padding: 14px 22px;
          }

          .immunotherapy-page .immunotherapy-section {
            padding: 58px 18px;
          }

          .immunotherapy-page .immunotherapy-card {
            border-radius: 24px;
            padding: 26px 20px;
          }

          .immunotherapy-page .immunotherapy-image-card {
            border-radius: 24px;
          }

          .immunotherapy-page .immunotherapy-image-card img {
            height: 260px;
          }

          .immunotherapy-page .immunotherapy-cta {
            min-height: 360px;
            padding: 72px 20px;
          }
        }

        @media (max-width: 480px) {
          .immunotherapy-page .immunotherapy-hero {
            padding: 104px 18px 66px;
          }

          .immunotherapy-page .immunotherapy-chip {
            font-size: 10.5px;
            padding: 7px 14px;
            margin-bottom: 18px;
          }

          .immunotherapy-page .immunotherapy-title {
            font-size: 1.4rem;
          }

          .immunotherapy-page .immunotherapy-list li {
            font-size: 14px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .immunotherapy-page .immunotherapy-hero {
            min-height: 100dvh;
          }

          .immunotherapy-page .immunotherapy-card,
          .immunotherapy-page .immunotherapy-image-card {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        @media (min-width: 1440px) {
          .immunotherapy-page .immunotherapy-hero {
            padding-top: 160px;
            padding-bottom: 120px;
          }

          .immunotherapy-page .immunotherapy-wrap {
            width: min(100%, 1240px);
          }
        }
      `}</style>

      <section className="immunotherapy-hero">
        <div className="immunotherapy-hero-content">
          <div className="immunotherapy-chip">Allergy Care at Vaayu </div>

          <h1 className="immunotherapy-hero-title">
            Immunotherapy <span>at Vaayu</span>
          </h1>

          <p className="immunotherapy-hero-text">
            Long-term allergy relief through precision-based, personalized
            treatment.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="immunotherapy-btn">
Book a Consultation          </a>
        </div>
      </section>

      <section className="immunotherapy-section immunotherapy-section-light">
        <div className="immunotherapy-wrap immunotherapy-grid">
          <div className="immunotherapy-card immunotherapy-card-white">
            <h2 className="immunotherapy-title">What is Immunotherapy?</h2>

            <p className="immunotherapy-text">
              Immunotherapy, often called allergy shots, is a scientifically
              proven method that gradually desensitizes your immune system to
              allergens, offering lasting relief.
            </p>

            <ul className="immunotherapy-list">
              <li>Reduces allergy symptoms over time</li>
              <li>Helps prevent the progression of allergic conditions like asthma</li>
              <li>Customized doses tailored to your specific triggers</li>
              <li>Ideal for pollen, dust mites, mold, pet dander, and insect allergies</li>
            </ul>
          </div>

          <div className="immunotherapy-image-card">
            <img src={processImage} alt="Immunotherapy treatment process" />
          </div>
        </div>
      </section>

      <section className="immunotherapy-section immunotherapy-section-soft">
        <div className="immunotherapy-wrap">
          <div className="immunotherapy-card immunotherapy-center-card">
            <h2 className="immunotherapy-title">How Immunotherapy Works</h2>

            <p className="immunotherapy-text">
              Treatment begins with a build-up phase, usually weekly shots,
              followed by a maintenance phase, usually monthly. Over 3–5 years,
              your body builds resistance to allergens, helping you live better
              with fewer symptoms.
            </p>

            <a href={EKA} target="_blank" rel="noopener noreferrer" className="immunotherapy-btn">
              Start Treatment Plan
            </a>
          </div>
        </div>
      </section>

      <section className="immunotherapy-cta">
        <div className="immunotherapy-cta-content">
          <h3 className="immunotherapy-cta-title">
            Start Your Journey Toward Allergy Freedom
          </h3>

          <p className="immunotherapy-cta-text">
            Our allergy specialists at Vaayu will guide you through personalized
            immunotherapy plans for long-lasting comfort.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="immunotherapy-btn">
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  );
}