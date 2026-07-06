import React from "react";
import { Helmet } from "react-helmet";
import heroImage from "../assets/img/allergy-hero.jpg";
import testImage from "../assets/img/allergy-test.jpg";
import treatmentImage from "../assets/img/equipment-researchers.jpg";
import triggerImage from "../assets/img/allergy-triggers.jpg";
import ctaBgImage from "../assets/img/cta-bg.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

export default function AllergyTesting() {
  return (
    <div className="allergy-page">
      <Helmet>
        <title>Allergy Testing & Treatment in Bengaluru | Vaayu Chest & Sleep Specialty center</title>
        <meta
          name="description"
          content="Get expert allergy testing and treatment in Bengaluru at Vaayu. We offer skin tests, blood tests, allergy care, trigger evaluation, and personalized treatment plans."
        />
        <link rel="canonical" href="https://vaayuchest.com/allergy-testing-treatment" />
      </Helmet>

      <style>{`
        .allergy-page,
        .allergy-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        }

        .allergy-page {
          background: #f6f8f2;
          color: #2f361a;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .allergy-page .allergy-hero {
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

        .allergy-page .allergy-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(47,54,26,.92),
            rgba(47,54,26,.76),
            rgba(97,114,78,.52)
          );
          z-index: 1;
        }

        .allergy-page .allergy-hero-content {
          position: relative;
          z-index: 2;
          width: min(100%, 920px);
          text-align: center;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .allergy-page .allergy-chip {
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

        .allergy-page .allergy-hero-title {
          margin: 0;
          font-size: clamp(2.8rem, 4.8vw, 5rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #f5f7ef;
        }

        .allergy-page .allergy-hero-title span {
          color: #d7dec9;
        }

        .allergy-page .allergy-hero-text {
          max-width: 740px;
          margin: 22px auto 0;
          color: #eef4e9;
          font-size: clamp(1.05rem, 1.6vw, 1.2rem);
          line-height: 1.75;
          font-weight: 400;
        }

        .allergy-page .allergy-btn {
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

        .allergy-page .allergy-btn:hover {
          transform: translateY(-2px);
          background: #4d5b3c;
          box-shadow: 0 18px 44px rgba(0,0,0,.32);
        }

        .allergy-page .allergy-section {
          padding: 78px 24px;
          position: relative;
        }

        .allergy-page .allergy-section-light {
          background: #f6f8f2;
        }

        .allergy-page .allergy-section-soft {
          background: #eef4e9;
        }

        .allergy-page .allergy-wrap {
          width: min(100%, 1180px);
          margin: 0 auto;
        }

        .allergy-page .allergy-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 38px;
          align-items: center;
        }

        .allergy-page .allergy-card {
          background: #f5f7ef;
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 28px;
          padding: 38px;
          box-shadow: 0 18px 48px rgba(47,54,26,.10);
        }

        .allergy-page .allergy-card-white {
          background: #ffffff;
        }

        .allergy-page .allergy-title {
          margin: 0 0 16px;
          color: #556b2f;
          font-size: clamp(1.55rem, 2.4vw, 2.25rem);
          line-height: 1.2;
          letter-spacing: -0.025em;
          font-weight: 800;
        }

        .allergy-page .allergy-text {
          margin: 0;
          color: #4d5842;
          font-size: 15.5px;
          line-height: 1.78;
          font-weight: 400;
        }

        .allergy-page .allergy-text + .allergy-text {
          margin-top: 14px;
        }

        .allergy-page .allergy-subtitle {
          margin: 22px 0 12px;
          color: #556b2f;
          font-size: 15px;
          font-weight: 800;
        }

        .allergy-page .allergy-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .allergy-page .allergy-list li,
        .allergy-page .allergy-treatment-item {
          padding: 15px 16px;
          border-radius: 16px;
          background: #f5f7ef;
          border-left: 4px solid #61724e;
          color: #4d5842;
          font-size: 14.5px;
          line-height: 1.65;
          font-weight: 400;
        }

        .allergy-page .allergy-list strong,
        .allergy-page .allergy-treatment-item strong {
          color: #556b2f;
          font-weight: 800;
        }

        .allergy-page .allergy-link {
          color: #556b2f;
          font-weight: 800;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .allergy-page .allergy-image-card {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(47,54,26,.16);
          border: 1px solid rgba(97,114,78,.14);
          background: #d7dec9;
        }

        .allergy-page .allergy-image-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          display: block;
          filter: saturate(.9) brightness(.9);
        }

        .allergy-page .allergy-related-card {
          background: #f5f7ef;
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 16px 44px rgba(47,54,26,.09);
        }

        .allergy-page .allergy-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .allergy-page .allergy-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 18px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid rgba(97,114,78,.18);
          color: #556b2f;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: background .25s ease, transform .25s ease;
        }

        .allergy-page .allergy-tag:hover {
          background: #eef4e9;
          transform: translateY(-2px);
        }

        .allergy-page .allergy-cta {
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

        .allergy-page .allergy-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(47,54,26,.92), rgba(97,114,78,.78));
          z-index: 1;
        }

        .allergy-page .allergy-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .allergy-page .allergy-cta-title {
          margin: 0;
          color: #f5f7ef;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.12;
          letter-spacing: -0.03em;
          font-weight: 800;
        }

        .allergy-page .allergy-cta-text {
          margin: 18px auto 0;
          color: #d7dec9;
          font-size: 16px;
          line-height: 1.75;
          max-width: 640px;
        }

        @media (max-width: 1024px) {
          .allergy-page .allergy-grid {
            grid-template-columns: 1fr;
          }

          .allergy-page .allergy-image-card img {
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .allergy-page .allergy-hero {
            min-height: auto;
            padding: 118px 20px 76px;
          }

          .allergy-page .allergy-hero-title {
            font-size: clamp(2.15rem, 9vw, 3.8rem);
            line-height: 1.08;
            letter-spacing: -0.035em;
          }

          .allergy-page .allergy-hero-text {
            font-size: 15.5px;
            line-height: 1.68;
          }

          .allergy-page .allergy-btn {
            width: 100%;
            max-width: 330px;
            padding: 14px 22px;
          }

          .allergy-page .allergy-section {
            padding: 58px 18px;
          }

          .allergy-page .allergy-card,
          .allergy-page .allergy-related-card {
            border-radius: 24px;
            padding: 26px 20px;
          }

          .allergy-page .allergy-image-card {
            border-radius: 24px;
          }

          .allergy-page .allergy-image-card img {
            height: 260px;
          }

          .allergy-page .allergy-cta {
            min-height: 360px;
            padding: 72px 20px;
          }
        }

        @media (max-width: 480px) {
          .allergy-page .allergy-hero {
            padding: 104px 18px 66px;
          }

          .allergy-page .allergy-chip {
            font-size: 10.5px;
            padding: 7px 14px;
            margin-bottom: 18px;
          }

          .allergy-page .allergy-title {
            font-size: 1.4rem;
          }

          .allergy-page .allergy-list li,
          .allergy-page .allergy-treatment-item {
            font-size: 14px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .allergy-page .allergy-hero {
            min-height: 100dvh;
          }

          .allergy-page .allergy-card,
          .allergy-page .allergy-image-card,
          .allergy-page .allergy-related-card {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        @media (min-width: 1440px) {
          .allergy-page .allergy-hero {
            padding-top: 160px;
            padding-bottom: 120px;
          }

          .allergy-page .allergy-wrap {
            width: min(100%, 1240px);
          }
        }
      `}</style>

      <section className="allergy-hero">
        <div className="allergy-hero-content">
          <div className="allergy-chip">Vaayu Allergy Care</div>

          <h1 className="allergy-hero-title">
            Allergy Testing & <span>Treatment</span>
          </h1>

          <p className="allergy-hero-text">
            Comprehensive allergy diagnosis and expert care tailored to your
            unique triggers at Vaayu.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="allergy-btn">
Book a Consultation          </a>
        </div>
      </section>

      <section className="allergy-section allergy-section-light">
        <div className="allergy-wrap allergy-grid">
          <div className="allergy-card allergy-card-white">
            <h2 className="allergy-title">Allergy Testing</h2>

            <p className="allergy-text">
              Allergy testing is a crucial step in diagnosing allergic conditions
              and determining the most effective treatments, including immunotherapy.
            </p>

            <p className="allergy-subtitle">Types of Allergy Tests</p>

            <ul className="allergy-list">
              <li><strong>Skin Prick Test:</strong> Pricks the skin with allergen extracts.</li>
              <li><strong>Intradermal Test:</strong> Injects a small amount of allergen into the skin.</li>
              <li><strong>Patch Test:</strong> Checks for delayed allergic reactions.</li>
              <li><strong>Blood Tests:</strong> Measure IgE antibodies such as RAST and ImmunoCAP.</li>
            </ul>

            <p className="allergy-text" style={{ marginTop: 18 }}>
              Allergy symptoms can also overlap with respiratory issues such as{" "}
              <a href="/specialty-clinic/asthma" className="allergy-link">asthma</a>{" "}
              and sleep-related breathing problems evaluated at our{" "}
              <a href="/sleep-clinic" className="allergy-link">sleep clinic</a>.
            </p>
          </div>

          <div className="allergy-image-card">
            <img src={testImage} alt="Allergy testing at Vaayu" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="allergy-section allergy-section-soft">
        <div className="allergy-wrap allergy-grid">
          <div className="allergy-image-card">
            <img src={treatmentImage} alt="Allergy treatment at Vaayu" loading="lazy" />
          </div>

          <div className="allergy-card">
            <h2 className="allergy-title">Allergy Treatment</h2>

            <p className="allergy-text">
              The goal of treatment is to reduce symptoms and inflammation. While
              avoiding allergens is best, various medications can help manage
              symptoms effectively.
            </p>

            <div className="allergy-list" style={{ marginTop: 20 }}>
              <div className="allergy-treatment-item"><strong>Antihistamines:</strong> Help with itching, sneezing, and runny nose.</div>
              <div className="allergy-treatment-item"><strong>Decongestants:</strong> Relieve nasal congestion and swelling.</div>
              <div className="allergy-treatment-item"><strong>Nasal corticosteroids:</strong> Reduce nasal inflammation with minimal side effects.</div>
              <div className="allergy-treatment-item"><strong>Leukotriene modifiers:</strong> Block chemicals that cause allergic reactions.</div>
              <div className="allergy-treatment-item"><strong>Immunotherapy:</strong> Allergy shots that build long-term tolerance to allergens.</div>
            </div>

            <p className="allergy-text" style={{ marginTop: 18 }}>
              Patients with chronic cough, wheeze, or breathlessness may also need
              evaluation for <a href="/specialty-clinic/copd" className="allergy-link">COPD</a>{" "}
              or other chronic lung conditions such as{" "}
              <a href="/specialty-clinic/ild" className="allergy-link">ILD</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="allergy-section allergy-section-light">
        <div className="allergy-wrap allergy-grid">
          <div className="allergy-card allergy-card-white">
            <h2 className="allergy-title">Common Triggers</h2>

            <p className="allergy-text">
              Identifying and avoiding triggers is key to managing allergies and asthma.
            </p>

            <ul className="allergy-list" style={{ marginTop: 20 }}>
              <li><strong>Pollen:</strong> From trees, grasses, and weeds.</li>
              <li><strong>Dust mites:</strong> Found in household dust and fabrics.</li>
              <li><strong>Pet dander:</strong> Tiny skin flakes from animals.</li>
              <li><strong>Mold:</strong> Thrives in moist environments.</li>
            </ul>

            <p className="allergy-text" style={{ marginTop: 18 }}>
              We also help patients manage trigger-related stress and breathing discomfort
              through{" "}
              <a href="/rehab-wellness/stress-management" className="allergy-link">
                stress management support
              </a>.
            </p>
          </div>

          <div className="allergy-image-card">
            <img src={triggerImage} alt="Common allergy triggers" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="allergy-section allergy-section-soft">
        <div className="allergy-wrap">
          <div className="allergy-related-card">
            <h2 className="allergy-title">Related Care at Vaayu</h2>

            <p className="allergy-text">
              Explore related services for allergy-linked breathing issues, chronic
              cough, sleep-related symptoms, and long-term respiratory support.
            </p>

            <div className="allergy-tags">
              <a href="/specialty-clinic/asthma" className="allergy-tag">Asthma Clinic</a>
              <a href="/specialty-clinic/copd" className="allergy-tag">COPD Clinic</a>
              <a href="/specialty-clinic/ild" className="allergy-tag">ILD Clinic</a>
              <a href="/sleep-clinic" className="allergy-tag">Sleep Clinic</a>
              <a href="/rehab-wellness/stress-management" className="allergy-tag">Stress Management</a>
            </div>
          </div>
        </div>
      </section>

      <section className="allergy-cta">
        <div className="allergy-cta-content">
          <h3 className="allergy-cta-title">Breathe Easier with Vaayu</h3>

          <p className="allergy-cta-text">
            Asthma and allergies can affect your daily life. With the right care
            and customized treatment at Vaayu, you can lead a healthier, more
            active life.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="allergy-btn">
Book a Consultation          </a>
        </div>
      </section>
    </div>
  );
}