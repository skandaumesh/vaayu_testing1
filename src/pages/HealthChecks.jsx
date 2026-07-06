import React from "react";

import heroImg from "../assets/img/healthchecks-hero.png";
import benefitImg from "../assets/img/healthchecks-benefit.jpg";
import packageImg from "../assets/img/healthchecks-packages.png";
import bgCTA from "../assets/img/healthchecks-cta.png";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists";

const T = {
  green: "#61724e",
  light: "#eef4e9",
  soft: "#f7faf4",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const HealthChecks = () => {
  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: T.light,
        color: T.text,
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        img {
          max-width: 100%;
          display: block;
        }

        .wrap {
          width: min(92%, 1240px);
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .section {
          padding: clamp(64px, 7vw, 96px) 0;
        }

        .hero-section {
          min-height: 85svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          position: relative;
          padding: clamp(110px, 12vw, 150px) 20px;
        }

        .hero-card {
          max-width: 920px;
          margin: auto;
          padding: clamp(28px, 5vw, 48px);
          border-radius: clamp(24px, 3vw, 34px);
          background: rgba(255,255,255,.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: #fff;
          text-align: center;
          border: 1px solid rgba(255,255,255,.24);
          box-shadow: 0 28px 80px rgba(47,54,26,.32);
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(28px, 5vw, 46px);
          align-items: center;
        }

        .card {
          background: #fff;
          border: 1px solid ${T.border};
          border-radius: clamp(24px, 3vw, 32px);
          box-shadow: 0 20px 60px rgba(47,54,26,0.08);
        }

        .split-card {
          padding: clamp(24px, 4vw, 42px);
        }

        .section-img {
          width: 100%;
          height: clamp(260px, 30vw, 360px);
          object-fit: cover;
          border-radius: 22px;
          border: 1px solid ${T.border};
          box-shadow: 0 18px 45px rgba(47,54,26,0.10);
        }

        .point {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 16px;
          background: ${T.soft};
          border: 1px solid ${T.border};
          min-width: 0;
        }

        .number {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: ${T.green};
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
          flex-shrink: 0;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .cta-section {
          padding: clamp(72px, 8vw, 110px) 20px;
          background-size: cover;
          background-position: center;
          position: relative;
          text-align: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 24px;
          padding: 14px 28px;
          background: ${T.green};
          color: #fff;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 14px 34px rgba(47,54,26,.22);
        }

        @media (max-width: 1050px) {
          .facts-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }

          .section-img {
            height: 320px;
          }
        }

        @media (max-width: 767px) {
          .wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .hero-section {
            min-height: auto;
            padding-top: 112px;
            padding-bottom: 72px;
          }

          .hero-card,
          .split-card,
          .cta-card {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .facts-grid {
            grid-template-columns: 1fr;
          }

          .section-img {
            height: 260px;
          }

          .btn {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .point {
            grid-template-columns: 34px 1fr;
            gap: 10px;
            padding: 12px;
          }

          .number {
            width: 30px;
            height: 30px;
            font-size: 12px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .hero-section,
          .cta-section {
            min-height: auto;
          }

          img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
      `}</style>

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(47,54,26,.9), rgba(47,54,26,.6))",
          }}
        />

        <div className="wrap">
          <div className="hero-card">
            <h1
              style={{
                fontSize: "clamp(2.05rem,5vw,3.8rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
              Preventive Respiratory Health Checks
            </h1>

            <p
              style={{
                margin: "14px auto 0",
                maxWidth: 720,
                fontSize: "clamp(14px,1.4vw,16px)",
                lineHeight: 1.75,
              }}
            >
              Catch lung issues early and breathe easier with Vaayu’s screening
              packages.
            </p>

            <a href={EKA} target="_blank" rel="noopener noreferrer" className="btn">
              Book on EkaCare
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card split-card grid-2">
            <img
              src={benefitImg}
              alt="Benefits of early detection"
              className="section-img"
            />

            <div>
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.75rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Why Annual Checks Matter
              </h2>

              <div style={{ marginTop: 22, display: "grid", gap: 12 }}>
                {[
                  "Detect COPD & asthma early",
                  "Spot lung nodules at treatable stage",
                  "Measure air-quality impact",
                  "Personalised action plan",
                  "Insurance-friendly reports",
                ].map((item, i) => (
                  <div key={item} className="point">
                    <div className="number">{i + 1}</div>
                    <p style={{ margin: 0, color: T.text, lineHeight: 1.55 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card split-card grid-2">
            <div>
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.75rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                What’s Included
              </h2>

              <div style={{ marginTop: 22, display: "grid", gap: 12 }}>
                {[
                  "Spirometry + DLCO",
                  "Chest X-ray or Low Dose CT",
                  "Allergy Panel",
                  "Exhaled CO & FeNO",
                  "Doctor consult & lifestyle coaching",
                ].map((item, i) => (
                  <div key={item} className="point">
                    <div className="number">{i + 1}</div>
                    <p style={{ margin: 0, color: T.text, lineHeight: 1.55 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={packageImg}
              alt="Health check packages"
              className="section-img"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2
            style={{
              textAlign: "center",
              color: T.green,
              fontSize: "clamp(1.75rem,3vw,2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Key Highlights
          </h2>

          <div className="facts-grid">
            {[
              {
                title: "45-Min Visit",
                text: "All tests completed in one slot.",
              },
              {
                title: "Same-Day Report",
                text: "Digital report with doctor review.",
              },
              {
                title: "Pulmonology Oversight",
                text: "Every report vetted by specialists.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
                style={{
                  padding: 24,
                  textAlign: "center",
                  minHeight: 150,
                }}
              >
                <h4
                  style={{
                    color: T.green,
                    fontSize: 19,
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    marginTop: 8,
                    color: T.muted,
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="cta-section"
        style={{ backgroundImage: `url(${bgCTA})` }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />

        <div className="wrap">
          <div
            className="card cta-card"
            style={{
              padding: 40,
              maxWidth: 800,
              margin: "auto",
            }}
          >
            <h2
              style={{
                color: T.green,
                fontSize: "clamp(1.75rem,3vw,2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Secure Your Check-Up Slot
            </h2>

            <p style={{ marginTop: 12, color: T.muted, lineHeight: 1.7 }}>
              Book online or call to schedule your preventive respiratory
              screening.
            </p>

            <p style={{ marginTop: 10, color: T.text }}>+91 98765 43225</p>
            <p style={{ color: T.text }}>admin@vaayuchest.com</p>

            <a href={EKA} target="_blank" rel="noopener noreferrer" className="btn">
              Book on EkaCare
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthChecks;