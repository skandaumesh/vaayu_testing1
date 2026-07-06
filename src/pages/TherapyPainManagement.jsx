import { Link } from "react-router-dom";

import therapyImg from "../assets/img/followup.jpg";
import painImg from "../assets/img/pain-hero.jpg";
import therapyImg1 from "../assets/img/jump-cheerful-beauty-nature-cute.jpg";

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
  brown: "#6e5b46",
};

export default function TherapyPainManagement() {
  const services = [
    {
      title: "Occupational Therapy",
      desc: "Support for daily activities, mobility, posture, coordination, independence, and recovery after illness or reduced function.",
      img: therapyImg1,
      path: "/rehab-wellness/occupational-therapy",
    },
    {
      title: "Pain Management",
      desc: "Care focused on reducing pain, improving movement, and supporting better comfort during breathing, activity, and recovery.",
      img: painImg,
      path: "/pulmonary-rehab/pain-management",
    },
  ];

  const highlights = [
    {
      title: "Better Daily Function",
      desc: "Support for daily activities, posture, strength, and independence.",
    },
    {
      title: "Pain Relief Support",
      desc: "Programs designed to reduce discomfort and improve safe movement.",
    },
    {
      title: "Guided Recovery",
      desc: "Therapy-led care that works alongside respiratory and wellness support.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.light,
        color: T.textDark,
        overflowX: "hidden",
        width: "100%",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
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

        .tp-wrap {
          width: min(92%, 1240px);
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .tp-hero-grid,
        .tp-highlight-grid,
        .tp-program-grid {
          display: grid;
          min-width: 0;
        }

        .tp-hero-grid > *,
        .tp-highlight-grid > *,
        .tp-program-grid > * {
          min-width: 0;
        }

        .tp-hero-grid {
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: clamp(34px, 5vw, 60px);
          align-items: center;
        }

        .tp-highlight-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .tp-program-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .tp-card-hover {
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .tp-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 70px rgba(47,54,26,.16) !important;
        }

        @media (max-width: 1024px) {
          .tp-hero-grid {
            grid-template-columns: 1fr;
          }

          .tp-highlight-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .tp-wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .tp-hero-grid,
          .tp-highlight-grid,
          .tp-program-grid {
            grid-template-columns: 1fr !important;
            gap: 24px;
          }

          .tp-hero-section {
            padding-top: 100px !important;
            padding-bottom: 58px !important;
          }

          .tp-section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }

          .tp-hero-card {
            padding: 22px !important;
            border-radius: 24px !important;
          }

          .tp-hero-img {
            height: 300px !important;
          }

          .tp-floating-card {
            position: relative !important;
            left: auto !important;
            bottom: auto !important;
            margin-top: 16px !important;
            max-width: 100% !important;
          }

          .tp-cta-box {
            padding: 34px 22px !important;
            border-radius: 26px !important;
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
        className="tp-hero-section"
        style={{
          position: "relative",
          padding: "128px 0 92px",
          background: `linear-gradient(135deg, ${T.bg} 0%, ${T.surface} 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 80,
            left: "5%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(215,222,201,0.18)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "4%",
            bottom: 40,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(255,248,239,0.14)",
            filter: "blur(70px)",
          }}
        />

        <div className="tp-wrap tp-hero-grid">
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 18px",
                borderRadius: 999,
                background: "rgba(255,248,239,.10)",
                border: "1px solid rgba(215,222,201,.25)",
                color: T.greenL,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Therapy & Pain Management
            </span>

            <h1
              style={{
                marginTop: 22,
                maxWidth: 780,
                fontSize: "clamp(2.15rem, 5vw, 4.35rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: T.cream,
              }}
            >
              Support for better{" "}
              <span style={{ color: T.greenL }}>
                movement, comfort & recovery.
              </span>
            </h1>

            <p
              style={{
                marginTop: 22,
                maxWidth: 610,
                color: T.greenL,
                fontSize: 15.5,
                lineHeight: 1.78,
              }}
            >
              Vaayu’s therapy and pain management programs help patients improve
              day-to-day function, reduce discomfort, and support recovery
              through structured, guided care.
            </p>

            <div
              style={{
                marginTop: 34,
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                Contact Us
              </Link>

              <a
                href="#programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 30px",
                  borderRadius: 999,
                  background: "rgba(255,248,239,.16)",
                  color: T.cream,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "1px solid rgba(215,222,201,.28)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              className="tp-hero-card"
              style={{
                borderRadius: 34,
                padding: 14,
                background: "rgba(255,248,239,.12)",
                border: "1px solid rgba(215,222,201,.25)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow: "0 30px 80px rgba(47,54,26,.28)",
              }}
            >
              <img
                src={therapyImg}
                alt="Occupational therapy and pain management"
                className="tp-hero-img"
                style={{
                  width: "100%",
                  height: 430,
                  objectFit: "cover",
                  borderRadius: 24,
                }}
              />
            </div>

            <div
              className="tp-floating-card"
              style={{
                position: "absolute",
                left: -26,
                bottom: -24,
                maxWidth: 330,
                padding: 22,
                borderRadius: 22,
                background: "rgba(255,248,239,.92)",
                border: "1px solid rgba(97,114,78,.14)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 18px 45px rgba(47,54,26,.18)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: T.brown,
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                Focused support for
              </p>

              <h3
                style={{
                  margin: "6px 0 0",
                  color: T.textDark,
                  fontSize: 20,
                  lineHeight: 1.35,
                  fontWeight: 600,
                }}
              >
                Daily Function → Pain Relief → Movement Confidence
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section
        className="tp-section"
        style={{
          background: T.light,
          padding: "84px 0",
        }}
      >
        <div className="tp-wrap">
          <div
            className="tp-highlight-grid"
            style={{
              padding: "34px",
              borderRadius: 32,
              background: T.cream,
              border: "1px solid rgba(97,114,78,.14)",
              boxShadow: "0 22px 55px rgba(47,54,26,.10)",
            }}
          >
            {highlights.map((item, index) => (
              <div key={item.title}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 16,
                    background: T.green,
                    color: T.cream,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {index + 1}
                </div>

                <h3
                  style={{
                    marginTop: 18,
                    marginBottom: 0,
                    color: T.textDark,
                    fontSize: 20,
                    lineHeight: 1.35,
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: 9,
                    color: T.muted,
                    fontSize: 14,
                    lineHeight: 1.72,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        className="tp-section"
        style={{
          background: T.light,
          padding: "92px 0",
        }}
      >
        <div className="tp-wrap" style={{ maxWidth: 1120 }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 52px",
            }}
          >
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
              Our Programs
            </span>

            <h2
              style={{
                marginTop: 18,
                marginBottom: 0,
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: T.textDark,
              }}
            >
              Choose your therapy path
            </h2>

            <p
              style={{
                margin: "14px auto 0",
                maxWidth: 650,
                color: T.muted,
                fontSize: 15,
                lineHeight: 1.75,
              }}
            >
              These two services support patients who need help with pain,
              movement, function, and recovery after illness or long-term health
              challenges.
            </p>
          </div>

          <div className="tp-program-grid">
            {services.map((svc) => (
              <Link
                key={svc.title}
                to={svc.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div
                  className="tp-card-hover"
                  style={{
                    height: "100%",
                    borderRadius: 30,
                    background: T.cream,
                    border: "1px solid rgba(97,114,78,.14)",
                    boxShadow: "0 18px 45px rgba(47,54,26,.10)",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: 14 }}>
                    <img
                      src={svc.img}
                      alt={svc.title}
                      style={{
                        height: 280,
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 22,
                      }}
                    />
                  </div>

                  <div style={{ padding: "10px 28px 30px" }}>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 24,
                        fontWeight: 600,
                        lineHeight: 1.3,
                        color: T.textDark,
                      }}
                    >
                      {svc.title}
                    </h3>

                    <p
                      style={{
                        marginTop: 12,
                        color: T.muted,
                        fontSize: 14,
                        lineHeight: 1.75,
                      }}
                    >
                      {svc.desc}
                    </p>

                    <p
                      style={{
                        marginTop: 18,
                        color: T.green,
                        fontSize: 14,
                        fontWeight: 700,
                      }}
                    >
                      View Service →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="tp-section"
        style={{
          background: T.light,
          padding: "70px 0 96px",
        }}
      >
        <div className="tp-wrap">
          <div
            className="tp-cta-box"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 36,
              background: T.green,
              color: T.cream,
              padding: "58px 36px",
              textAlign: "center",
              boxShadow: "0 26px 70px rgba(47,54,26,.22)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -90,
                right: -70,
                width: 260,
                height: 260,
                borderRadius: "50%",
                background: "rgba(255,248,239,.13)",
                filter: "blur(20px)",
              }}
            />

            <h2
              style={{
                position: "relative",
                maxWidth: 820,
                margin: "0 auto",
                fontSize: "clamp(1.85rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Not sure which therapy support you need?
            </h2>

            <p
              style={{
                position: "relative",
                margin: "16px auto 0",
                maxWidth: 680,
                color: "rgba(255,248,239,.86)",
                fontSize: 15,
                lineHeight: 1.75,
              }}
            >
              Our team can guide you based on pain level, mobility, recovery
              needs, and daily activity goals.
            </p>

            <Link
              to="/contact"
              style={{
                position: "relative",
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
                textDecoration: "none",
                border: "1px solid rgba(255,248,239,.75)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}