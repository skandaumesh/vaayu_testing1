import React from "react";

import heroImg from "../assets/img/tobacco-hero.png";
import statsImg from "../assets/img/tobacco-stats.png";
import programImg from "../assets/img/tobacco-program.png";
import bgCTA from "../assets/img/tobacco-cta.png";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists";

const T = {
  green: "#61724e",
  deep: "#4f5831",
  light: "#eef4e9",
  soft: "#f7faf4",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const quitBenefits = [
  {
    title: "Within 20 minutes",
    desc: "Your heart rate drops.",
  },
  {
    title: "After 2 weeks",
    desc: "Lung function begins to improve.",
  },
  {
    title: "By 1 year",
    desc: "Your excess heart-disease risk halves.",
  },
  {
    title: "Smokeless tobacco users",
    desc: "Oral-cancer risk can reduce by 50% in 5 years.",
  },
  {
    title: "Financial benefit",
    desc: "Quitting saves the average Indian smoker ₹30,000-₹40,000 per year.",
  },
];

const programIncludes = [
  {
    title: "Medical Assessment",
    desc: "CO level, nicotine dependence score and personalised quit date.",
  },
  {
    title: "Pharmacotherapy",
    desc: "Nicotine-replacement, varenicline, or bupropion prescribed by pulmonologists.",
  },
  {
    title: "Behavioural Counselling",
    desc: "Motivational interviewing and CBT-based relapse prevention.",
  },
  {
    title: "Respiratory Fitness",
    desc: "Breathing exercises and baseline spirometry to track lung recovery.",
  },
  {
    title: "Trigger Hotline",
    desc: "24×7 chat support for cravings and stress-management tips.",
  },
];

const successSteps = [
  {
    title: "Set Your Quit Date",
    text: "Choose a meaningful day—our team helps you prepare.",
  },
  {
    title: "Start Medication",
    text: "Begin therapy 1-2 weeks before D-day for best results.",
  },
  {
    title: "Stay Accountable",
    text: "Weekly check-ins and carbon-monoxide tests keep you on track.",
  },
];

const TobaccoCessation = () => {
  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: T.light,
        color: T.text,
        overflowX: "hidden",
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

        .wrap {
          width: min(92%, 1240px);
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .section {
          padding: 90px 0;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 46px;
          align-items: center;
        }

        .point-grid {
          display: grid;
          gap: 14px;
        }

        .step-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .premium-card {
          background: #ffffff;
          border: 1px solid rgba(97,114,78,0.14);
          box-shadow: 0 22px 60px rgba(47,54,26,0.10);
          border-radius: 32px;
        }

        .mini-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .mini-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(47,54,26,0.14) !important;
        }

        @media (max-width: 1050px) {
          .step-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .section {
            padding: 64px 0;
          }

          .hero-card,
          .premium-card,
          .cta-card {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .step-grid {
            grid-template-columns: 1fr;
          }

          .section-img {
            height: 260px !important;
          }
        }

        @supports (-webkit-touch-callout: none) {
          img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }

          [style*="backdrop-filter"] {
            -webkit-backdrop-filter: blur(16px);
          }
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          minHeight: "85svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(47,54,26,.90), rgba(47,54,26,.62))",
          }}
        />

        <div className="wrap">
          <div
            className="hero-card"
            style={{
              maxWidth: 920,
              margin: "auto",
              padding: 48,
              borderRadius: 34,
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              color: "#fff",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,.24)",
              boxShadow: "0 28px 80px rgba(47,54,26,.32)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.2rem,5vw,4rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
              Tobacco-Cessation Program
            </h1>

            <p
              style={{
                margin: "18px auto 0",
                maxWidth: 760,
                fontSize: 15.5,
                lineHeight: 1.75,
                marginBottom: 0,
              }}
            >
              Break free from nicotine with Vaayu’s evidence-based,
              physician-led quit plan.
            </p>

            <a
              href={EKA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                marginTop: 28,
                padding: "14px 30px",
                borderRadius: 999,
                background: T.white,
                color: T.green,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 14px 34px rgba(47,54,26,.25)",
              }}
            >
              Book on EkaCare
            </a>
          </div>
        </div>
      </section>

      {/* WHY QUIT */}
      <section className="section">
        <div className="wrap">
          <div className="premium-card grid-2" style={{ padding: 42 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={statsImg}
                alt="Health impact of tobacco"
                className="section-img"
                style={{
                  width: "100%",
                  maxWidth: 430,
                  height: 310,
                  objectFit: "cover",
                  borderRadius: 24,
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 18px 45px rgba(47,54,26,0.10)",
                }}
              />
            </div>

            <div>
              <span
                style={{
                  display: "inline-flex",
                  padding: "7px 18px",
                  borderRadius: 999,
                  background: T.soft,
                  border: `1px solid ${T.border}`,
                  color: T.green,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Why Quit
              </span>

              <h2
                style={{
                  marginTop: 18,
                  color: T.green,
                  fontSize: "clamp(1.9rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  marginBottom: 0,
                }}
              >
                Why Quitting Matters
              </h2>

              <div className="point-grid" style={{ marginTop: 24 }}>
                {quitBenefits.map((item, i) => (
                  <div
                    key={item.title}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "42px 1fr",
                      gap: 14,
                      alignItems: "start",
                      padding: "15px 16px",
                      borderRadius: 18,
                      background: T.soft,
                      border: `1px solid ${T.border}`,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 14,
                        background: T.green,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: 0,
                          color: T.green,
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: 1.35,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          margin: "5px 0 0",
                          color: T.muted,
                          fontSize: 14,
                          lineHeight: 1.65,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM COMPONENTS */}
      <section className="section">
        <div className="wrap">
          <div className="premium-card grid-2" style={{ padding: 42 }}>
            <div>
              <span
                style={{
                  display: "inline-flex",
                  padding: "7px 18px",
                  borderRadius: 999,
                  background: T.soft,
                  border: `1px solid ${T.border}`,
                  color: T.green,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Program Plan
              </span>

              <h2
                style={{
                  marginTop: 18,
                  color: T.green,
                  fontSize: "clamp(1.9rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  marginBottom: 0,
                }}
              >
                What Our Program Includes
              </h2>

              <div className="point-grid" style={{ marginTop: 24 }}>
                {programIncludes.map((item, i) => (
                  <div
                    key={item.title}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "42px 1fr",
                      gap: 14,
                      alignItems: "start",
                      padding: "15px 16px",
                      borderRadius: 18,
                      background: T.soft,
                      border: `1px solid ${T.border}`,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 14,
                        background: T.green,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: 0,
                          color: T.green,
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: 1.35,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          margin: "5px 0 0",
                          color: T.muted,
                          fontSize: 14,
                          lineHeight: 1.65,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={programImg}
                alt="Tobacco cessation counselling"
                className="section-img"
                style={{
                  width: "100%",
                  maxWidth: 430,
                  height: 310,
                  objectFit: "cover",
                  borderRadius: 24,
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 18px 45px rgba(47,54,26,0.10)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STEPS */}
      <section className="section">
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 46px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                padding: "7px 18px",
                borderRadius: 999,
                background: T.white,
                border: `1px solid ${T.border}`,
                color: T.green,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Success Steps
            </span>

            <h2
              style={{
                marginTop: 18,
                color: T.green,
                fontSize: "clamp(1.9rem,3vw,2.8rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: 0,
              }}
            >
              Your Path to Quitting
            </h2>
          </div>

          <div className="step-grid">
            {successSteps.map((item, i) => (
              <div
                key={item.title}
                className="premium-card mini-card"
                style={{
                  padding: 28,
                  minHeight: 210,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: T.soft,
                    color: T.green,
                    border: `1px solid ${T.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginBottom: 18,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3
                  style={{
                    color: T.green,
                    fontSize: 19,
                    fontWeight: 600,
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: 10,
                    color: T.muted,
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          backgroundImage: `url(${bgCTA})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(47,54,26,.82), rgba(79,88,49,.70))",
          }}
        />

        <div className="wrap">
          <div
            className="cta-card"
            style={{
              maxWidth: 820,
              margin: "auto",
              padding: 42,
              borderRadius: 32,
              background: "rgba(255,255,255,.92)",
              border: `1px solid ${T.border}`,
              boxShadow: "0 24px 70px rgba(47,54,26,0.20)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                padding: "7px 18px",
                borderRadius: 999,
                background: T.soft,
                border: `1px solid ${T.border}`,
                color: T.green,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Quit Support
            </span>

            <h2
              style={{
                marginTop: 18,
                color: T.green,
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: 0,
              }}
            >
              Ready to Breathe Free?
            </h2>

            <p
              style={{
                marginTop: 14,
                color: T.muted,
                fontSize: 15.5,
                lineHeight: 1.75,
                marginBottom: 0,
              }}
            >
              Book your first tobacco-cessation consultation now—online or at
              home.
            </p>

            <div
              style={{
                marginTop: 26,
                display: "grid",
                gap: 10,
                color: T.text,
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>Call:</strong> +91 636 492 8680 / +91 636 492 8681
              </p>

              <p style={{ margin: 0 }}>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@vaayuchest.com"
                  style={{
                    color: T.green,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  admin@vaayuchest.com
                </a>
              </p>
            </div>

            <a
              href={EKA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                marginTop: 28,
                padding: "14px 30px",
                borderRadius: 999,
                background: T.green,
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 14px 34px rgba(47,54,26,.25)",
              }}
            >
              Book on EkaCare
            </a>

            <p
              style={{
                marginTop: 22,
                color: T.muted,
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              Vaayu—where every breath counts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TobaccoCessation;