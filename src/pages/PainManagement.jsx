import React from "react";

import painHero from "../assets/img/pain-hero.jpg";
import painImage from "../assets/img/pain-treatment.jpg";
import ctaBg from "../assets/img/cta-bg.jpg";
import RImage from "../assets/img/R.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const T = {
  bg: "#58623b",
  surface: "#4f5831",
  green: "#61724e",
  sage: "#9fab90",
  greenL: "#d7dec9",
  cream: "#fff8ef",
  light: "#eef4e9",
  textDark: "#2F361A",
  muted: "#5f6b50",
};

const PainManagement = () => {
  const conditions = [
    "Chronic back and neck pain",
    "Joint pain and arthritis",
    "Neuropathic pain",
    "Headaches & migraines",
    "Post-surgical pain",
    "Fibromyalgia",
    "Musculoskeletal pain",
  ];

  const services = [
    "Interventional pain procedures",
    "Physiotherapy and rehabilitation",
    "Trigger point & nerve blocks",
    "Spinal cord stimulation",
    "Chronic pain counseling",
    "Medication management",
  ];

  return (
    <div
      style={{
        background: T.light,
        color: T.textDark,
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
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

        section {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .pm-wrap {
          width: min(92%, 1240px);
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .pm-grid,
        .pm-two-grid,
        .pm-card-grid {
          display: grid;
          min-width: 0;
        }

        .pm-grid > *,
        .pm-two-grid > *,
        .pm-card-grid > * {
          min-width: 0;
        }

        .pm-grid {
          grid-template-columns: minmax(0, 1fr);
        }

        .pm-two-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(28px, 5vw, 52px);
          align-items: center;
        }

        .pm-card-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        @media (max-width: 900px) {
          .pm-two-grid,
          .pm-card-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          .pm-wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .pm-hero {
            padding-top: 112px !important;
            padding-bottom: 70px !important;
            min-height: auto !important;
          }

          .pm-section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }

          .pm-hero-card {
            padding: 26px 20px !important;
            border-radius: 24px !important;
          }

          .pm-image {
            height: 300px !important;
          }

          .pm-cta-box {
            padding: 36px 22px !important;
            border-radius: 26px !important;
          }

          .pm-list-card {
            min-height: auto !important;
          }
        }

        @supports (-webkit-touch-callout: none) {
          section {
            min-height: auto;
          }

          img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }

          [style*="backdrop-filter"] {
            -webkit-backdrop-filter: blur(18px);
          }
        }
      `}</style>

      {/* HERO */}
      <section
        className="pm-hero"
        style={{
          position: "relative",
          minHeight: "86svh",
          padding: "140px 0 92px",
          backgroundImage: `url(${painHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(47,54,26,.92) 0%, rgba(47,54,26,.78) 48%, rgba(97,114,78,.48) 100%)",
          }}
        />

        <div className="pm-wrap">
          <div
            className="pm-hero-card"
            style={{
              maxWidth: 860,
              padding: "46px 48px",
              borderRadius: 34,
              background: "rgba(255,248,239,.11)",
              border: "1px solid rgba(215,222,201,.25)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 28px 80px rgba(47,54,26,.35)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                padding: "7px 18px",
                borderRadius: 999,
                background: "rgba(255,248,239,.12)",
                border: "1px solid rgba(215,222,201,.28)",
                color: T.greenL,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Pain Management Clinic
            </span>

            <h1
              style={{
                marginTop: 22,
                marginBottom: 0,
                maxWidth: 760,
                fontSize: "clamp(2.15rem, 5vw, 4.35rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: T.cream,
              }}
            >
              Structured care for{" "}
              <span style={{ color: T.greenL }}>
                pain relief, movement & comfort.
              </span>
            </h1>

            <p
              style={{
                marginTop: 22,
                maxWidth: 660,
                color: T.greenL,
                fontSize: 15.5,
                lineHeight: 1.78,
              }}
            >
              Specialized care to help you manage chronic and acute pain
              effectively, regain comfort, improve movement, and support a
              better quality of life.
            </p>

            <a
              href={EKA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 32,
                padding: "14px 30px",
                borderRadius: 999,
                background: T.cream,
                color: T.green,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                border: "1px solid rgba(255,248,239,.75)",
                boxShadow: "0 16px 38px rgba(47,54,26,.22)",
              }}
            >
              Book an Appointment            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        className="pm-section"
        style={{
          background: T.light,
          padding: "86px 0",
        }}
      >
        <div className="pm-wrap" style={{ textAlign: "center", maxWidth: 940 }}>
          <span
            style={{
              display: "inline-flex",
              padding: "7px 18px",
              borderRadius: 999,
              background: T.cream,
              border: "1px solid rgba(97,114,78,.16)",
              color: T.green,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Vaayu Pain Relief Support
          </span>

          <h2
            style={{
              marginTop: 18,
              marginBottom: 0,
              fontSize: "clamp(1.85rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: T.textDark,
            }}
          >
            Your partner in pain relief
          </h2>

          <p
            style={{
              margin: "16px auto 0",
              maxWidth: 760,
              color: T.muted,
              fontSize: 15.5,
              lineHeight: 1.8,
            }}
          >
            Our Pain Management Program offers a multidisciplinary approach to
            diagnose, treat, and rehabilitate patients with persistent or
            complex pain conditions. We focus on personalized therapy,
            minimally invasive techniques, and holistic recovery.
          </p>
        </div>
      </section>

      {/* CONDITIONS & SERVICES */}
      <section
        className="pm-section"
        style={{
          background: T.bg,
          padding: "92px 0",
          position: "relative",
        }}
      >
        <div className="pm-wrap pm-card-grid">
          {[
            ["Conditions We Treat", conditions],
            ["Our Services Include", services],
          ].map(([title, list]) => (
            <div
              key={title}
              className="pm-list-card"
              style={{
                minHeight: 430,
                position: "relative",
                overflow: "hidden",
                borderRadius: 30,
                backgroundImage: `url(${RImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 24px 60px rgba(47,54,26,.24)",
                border: "1px solid rgba(215,222,201,.18)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(145deg, rgba(47,54,26,.88), rgba(79,88,49,.72))",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "36px 32px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.45rem, 2.4vw, 2.1rem)",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    color: T.cream,
                  }}
                >
                  {title}
                </h3>

                <div
                  style={{
                    marginTop: 24,
                    display: "grid",
                    gap: 12,
                  }}
                >
                  {list.map((item, index) => (
                    <div
                      key={item}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "34px 1fr",
                        gap: 12,
                        alignItems: "center",
                        padding: "12px 14px",
                        borderRadius: 16,
                        background: "rgba(255,248,239,.09)",
                        border: "1px solid rgba(215,222,201,.13)",
                      }}
                    >
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 10,
                          background: "rgba(215,222,201,.16)",
                          color: T.cream,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {index + 1}
                      </span>

                      <p
                        style={{
                          margin: 0,
                          color: T.greenL,
                          fontSize: 14,
                          lineHeight: 1.55,
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEXT + IMAGE */}
      <section
        className="pm-section"
        style={{
          background: T.light,
          padding: "92px 0",
        }}
      >
        <div className="pm-wrap pm-two-grid">
          <div
            style={{
              borderRadius: 30,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(47,54,26,.14)",
              border: "1px solid rgba(97,114,78,.12)",
            }}
          >
            <img
              src={painImage}
              alt="Pain treatment"
              className="pm-image"
              style={{
                width: "100%",
                height: 430,
                objectFit: "cover",
              }}
            />
          </div>

          <div>
            <span
              style={{
                display: "inline-flex",
                padding: "7px 18px",
                borderRadius: 999,
                background: T.cream,
                border: "1px solid rgba(97,114,78,.16)",
                color: T.green,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Personalized Treatment
            </span>

            <h2
              style={{
                marginTop: 18,
                marginBottom: 0,
                fontSize: "clamp(1.85rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: T.textDark,
              }}
            >
              Tailored treatment plans for better movement and comfort
            </h2>

            <p
              style={{
                marginTop: 16,
                color: T.muted,
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              Every patient’s pain journey is unique. That’s why we create
              personalized treatment plans that combine medical advancements
              with compassionate therapy-led care.
            </p>

            <p
              style={{
                marginTop: 12,
                color: T.muted,
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              Our goal is not just to treat symptoms, but to restore function
              and help you live a fuller, more comfortable life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="pm-section"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "96px 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(47,54,26,.92), rgba(79,88,49,.84))",
          }}
        />

        <div className="pm-wrap">
          <div
            className="pm-cta-box"
            style={{
              maxWidth: 860,
              margin: "0 auto",
              textAlign: "center",
              borderRadius: 34,
              padding: "52px 34px",
              background: "rgba(255,248,239,.10)",
              border: "1px solid rgba(215,222,201,.22)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 24px 70px rgba(47,54,26,.28)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(1.85rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: T.cream,
              }}
            >
              Start your pain-free journey today
            </h2>

            <p
              style={{
                margin: "16px auto 0",
                maxWidth: 650,
                color: T.greenL,
                fontSize: 15.5,
                lineHeight: 1.75,
              }}
            >
              Schedule a consultation with our specialists and take the first
              step toward long-term comfort and movement confidence.
            </p>

            <button
              onClick={() => window.open(EKA, "_blank")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                padding: "14px 30px",
                borderRadius: 999,
                background: T.cream,
                color: T.green,
                fontWeight: 700,
                fontSize: 15,
                border: "1px solid rgba(255,248,239,.75)",
                cursor: "pointer",
                boxShadow: "0 16px 38px rgba(47,54,26,.22)",
              }}
            >
              Book an Appointment            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PainManagement;