import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import weightHero from "../assets/img/weight-management.jpg";
import introImg from "../assets/img/weight.png";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const T = {
  bg: "#58623b",
  deep: "#2f361a",
  green: "#61724e",
  green2: "#4f5831",
  sage: "#9fab90",
  muted: "#d7dec9",
  cream2: "#e3f0df",
  light: "#eaf1e6",
  text: "#fff8ef",
  ink: "#293018",
};

const WeightManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
      disable: window.innerWidth < 768,
    });
  }, []);

  return (
    <main className="wm-page">
      <style>{`
        .wm-page,
        .wm-page * {
          box-sizing: border-box;
        }

        .wm-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: ${T.light};
          color: ${T.ink};
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .wm-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .wm-section {
          position: relative;
          padding: clamp(70px, 8vw, 100px) 0;
          overflow: hidden;
        }

        .wm-chip {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(97,114,78,.08);
          border: 1px solid rgba(97,114,78,.18);
          color: ${T.green};
          font-size: 12px;
          font-weight: 750;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .wm-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 14px 28px;
          border-radius: 999px;
          background: ${T.green};
          color: ${T.text};
          text-decoration: none;
          font-weight: 750;
          font-size: 14.5px;
          border: none;
          cursor: pointer;
          box-shadow: 0 16px 40px rgba(47,54,26,.20);
          transition: transform .28s ease, background .28s ease, box-shadow .28s ease;
        }

        .wm-btn:hover {
          transform: translateY(-2px);
          background: ${T.green2};
          box-shadow: 0 20px 46px rgba(47,54,26,.24);
        }

        .wm-hero {
          min-height: 88svh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.bg};
          padding: clamp(110px, 13vw, 160px) 0 clamp(70px, 8vw, 100px);
        }

        .wm-hero-bg {
          position: absolute;
          inset: 0;
        }

        .wm-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: .28;
          filter: saturate(.82) contrast(1.04);
        }

        .wm-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.94), rgba(47,54,26,.78), rgba(97,114,78,.50)),
            radial-gradient(circle at 74% 38%, rgba(215,222,201,.16), transparent 34%);
        }

        .wm-hero-card {
          max-width: 860px;
          padding: clamp(26px, 4vw, 48px);
          border-radius: 34px;
          background: rgba(255,248,239,.10);
          border: 1px solid rgba(215,222,201,.24);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 30px 80px rgba(47,54,26,.28);
        }

        .wm-hero-card h1 {
          margin: 18px 0 0;
          color: ${T.text};
          font-size: clamp(2.25rem, 5vw, 5rem);
          line-height: 1.04;
          letter-spacing: -.055em;
          font-weight: 700;
        }

        .wm-hero-card p {
          max-width: 760px;
          margin: 22px 0 0;
          color: ${T.muted};
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.75;
        }

        .wm-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
        }

        .wm-white {
          background: #fff;
        }

        .wm-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(26px, 4vw, 42px);
          align-items: center;
        }

        .wm-content-card {
          border-radius: 34px;
          padding: clamp(28px, 4vw, 42px);
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 24px 68px rgba(47,54,26,.10);
        }

        .wm-content-card h2,
        .wm-section-title h2 {
          margin: 18px 0 0;
          color: ${T.ink};
          font-size: clamp(2rem, 3.4vw, 3.15rem);
          line-height: 1.12;
          letter-spacing: -.04em;
          font-weight: 650;
        }

        .wm-content-card p,
        .wm-section-title p {
          color: #526043;
          font-size: 16px;
          line-height: 1.8;
        }

        .wm-image-panel {
          min-height: 430px;
          border-radius: 34px;
          overflow: hidden;
          background: ${T.green2};
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 26px 72px rgba(47,54,26,.16);
        }

        .wm-image-panel img {
          width: 100%;
          height: 100%;
          min-height: 430px;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .wm-section-title {
          max-width: 760px;
          margin: 0 auto 46px;
          text-align: center;
        }

        .wm-benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          max-width: 900px;
          margin: 0 auto;
        }

        .wm-benefit-card {
          min-height: 128px;
          display: flex;
          align-items: center;
          padding: 26px;
          border-radius: 26px;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(97,114,78,.15);
          box-shadow: 0 16px 40px rgba(47,54,26,.08);
          color: ${T.ink};
          font-size: 16px;
          line-height: 1.55;
          font-weight: 550;
          transition: transform .28s ease, background .28s ease, box-shadow .28s ease;
        }

        .wm-benefit-card:hover {
          transform: translateY(-5px);
          background: ${T.green};
          color: ${T.text};
          box-shadow: 0 24px 58px rgba(47,54,26,.18);
        }

        .wm-program-box {
          border-radius: 38px;
          padding: clamp(28px, 4.5vw, 52px);
          background:
            radial-gradient(circle at 15% 20%, rgba(215,222,201,.12), transparent 32%),
            linear-gradient(145deg, rgba(79,88,49,.96), rgba(47,54,26,.96));
          border: 1px solid rgba(215,222,201,.16);
          box-shadow: 0 30px 80px rgba(47,54,26,.22);
        }

        .wm-program-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: clamp(28px, 4vw, 46px);
          align-items: center;
        }

        .wm-program-copy h2 {
          margin: 18px 0 0;
          color: ${T.text};
          font-size: clamp(2rem, 3.4vw, 3rem);
          line-height: 1.12;
          letter-spacing: -.035em;
          font-weight: 650;
        }

        .wm-program-copy p {
          color: ${T.muted};
          font-size: 16px;
          line-height: 1.8;
        }

        .wm-program-copy .wm-chip {
          color: ${T.muted};
          background: rgba(255,248,239,.08);
          border-color: rgba(215,222,201,.24);
        }

        .wm-program-copy .wm-btn {
          background: ${T.text};
          color: ${T.ink};
          box-shadow: none;
        }

        .wm-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .wm-feature-card {
          min-height: 116px;
          padding: 20px;
          border-radius: 22px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.14);
          color: ${T.text};
          font-size: 14.5px;
          line-height: 1.65;
          display: grid;
          grid-template-columns: 8px 1fr;
          gap: 12px;
          align-items: start;
        }

        .wm-feature-card::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: ${T.muted};
          margin-top: 9px;
        }

        .wm-cta {
          background: ${T.light};
          padding: clamp(72px, 8vw, 96px) 0;
        }

        .wm-cta-box {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
          border-radius: 38px;
          padding: clamp(30px, 5vw, 58px);
          background:
            radial-gradient(circle at 18% 18%, rgba(215,222,201,.18), transparent 30%),
            linear-gradient(135deg, rgba(47,54,26,.96), rgba(97,114,78,.90));
          color: ${T.text};
          box-shadow: 0 30px 90px rgba(47,54,26,.20);
        }

        .wm-cta-box h3 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.1;
          letter-spacing: -.04em;
          font-weight: 650;
        }

        .wm-cta-box p {
          max-width: 720px;
          margin: 18px auto 28px;
          color: ${T.muted};
          font-size: 16px;
          line-height: 1.75;
        }

        @media (max-width: 1080px) {
          .wm-grid-2,
          .wm-program-grid {
            grid-template-columns: 1fr;
          }

          .wm-program-copy {
            max-width: 780px;
          }
        }

        @media (max-width: 760px) {
          .wm-wrap {
            width: min(90%, 440px);
          }

          .wm-hero {
            min-height: auto;
            padding: 110px 0 70px;
          }

          .wm-hero-card {
            border-radius: 26px;
          }

          .wm-hero-card h1 {
            font-size: clamp(2.1rem, 10vw, 3.25rem);
            line-height: 1.08;
          }

          .wm-content-card,
          .wm-program-box,
          .wm-cta-box {
            border-radius: 26px;
          }

          .wm-image-panel,
          .wm-image-panel img {
            min-height: 300px;
          }

          .wm-section-title {
            text-align: left;
            margin-bottom: 34px;
          }

          .wm-benefit-grid,
          .wm-feature-grid {
            grid-template-columns: 1fr;
          }

          .wm-btn {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .wm-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="wm-hero">
        <div className="wm-hero-bg">
          <img src={weightHero} alt="" />
        </div>

        <div className="wm-wrap">
          <div className="wm-hero-card" data-aos="fade-up">
            <span className="wm-chip">Weight Management</span>
            <h1>Weight Management & Best Weight Loss Program</h1>
            <p>
              Breathe better. Live healthier. Whether you want{" "}
              <strong>weightloss</strong>, <strong>fatloss</strong>, or to
              follow the <strong>best weight loss plan</strong> for your
              respiratory health — we’re here to help you start your
              transformation today.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="wm-section wm-white">
        <div className="wm-wrap wm-grid-2">
          <div className="wm-content-card" data-aos="fade-right">
            <span className="wm-chip">Respiratory Health</span>
            <h2>Why Weightloss & Fatloss Matter for Respiratory Health</h2>
            <p>
              Excess weight can significantly worsen breathing disorders, sleep
              apnea, and lung performance. At Vaayu Sleep and Chest Specialists,
              our <strong> weightloss plan</strong> is designed not just for
              appearance—but for{" "}
              <strong>
                improved lung function, better sleep, and long-term health
              </strong>
              . We use medically guided strategies to help you{" "}
              <strong>reduce weightloss</strong> risks and achieve lasting{" "}
              <strong>fatloss</strong> without compromising your respiratory
              health.
            </p>
          </div>

          <div className="wm-image-panel" data-aos="fade-left">
            <img
              src={introImg}
              alt="Weightloss, fatloss and best weight loss plan for lung health"
            />
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="wm-section wm-light" data-aos="fade-up">
        <div className="wm-wrap">
          <div className="wm-section-title">
            <span className="wm-chip">Who Can Benefit</span>
            <h2>Who Can Benefit from Our Weightloss Plan?</h2>
          </div>

          <div className="wm-benefit-grid">
            {[
              "Patients with obstructive sleep apnea or snoring",
              "Individuals with asthma, COPD, or other chronic lung conditions",
              "Those recovering from respiratory illness (including post-COVID)",
              "Anyone seeking the best weightloss or fatloss approach to improve breathing",
            ].map((item, idx) => (
              <div key={idx} className="wm-benefit-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="wm-section wm-white" data-aos="fade-up">
        <div className="wm-wrap">
          <div className="wm-program-box">
            <div className="wm-program-grid">
              <div className="wm-program-copy">
                <span className="wm-chip">Program Features</span>
                <h2>
                  Program Features – Best Weight Loss Plan for Breathing Health
                </h2>
                <p>
                  Our expert-led <strong>weightloss plan</strong> combines{" "}
                  <strong>fatloss</strong> strategies, nutrition, and
                  respiratory care to help you achieve a healthier, more active
                  life.
                </p>

                <a href={EKA} target="_blank" rel="noopener noreferrer" className="wm-btn">
                  Begin Your Journey
                </a>
              </div>

              <div className="wm-feature-grid">
                {[
                  "Individualized medical assessments and lung evaluations",
                  "Nutrition counseling tailored for respiratory needs",
                  "Exercise and breathing plans with expert supervision",
                  "Sleep assessments and CPAP/BiPAP support, if needed",
                  "Ongoing progress tracking and lifestyle coaching",
                  "Latest medications for weight loss (Mounjaro, Semaglutide)",
                ].map((feature, idx) => (
                  <div key={idx} className="wm-feature-card">
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wm-cta" data-aos="fade-up">
        <div className="wm-wrap">
          <div className="wm-cta-box">
            <h3>Start Your Best Weight Loss Journey with Vaayu</h3>
            <p>
              Book an appointment and follow a medically guided{" "}
              <strong>best weightloss</strong>{" "}
              program designed for your breathing health.
            </p>

            <a href={EKA} target="_blank" rel="noopener noreferrer" className="wm-btn">
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WeightManagement;