import React from "react";
import { Helmet } from "react-helmet";

import heroImg from "../assets/img/home-rehab-hero.jpg";
import rehabImg from "../assets/img/home-rehab-physio.jpg";
import bgServices from "../assets/img/a1.jpg";
import bgContact from "../assets/img/pulmonary-rehab.jpg";
import whyImg from "../assets/img/sarcoid-diagnosis.jpg";

const EKA_LINK =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

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

const HomeRehab = () => {
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
      <Helmet>
<title>Home Rehabilitation in Bengaluru | Vaayu Chest & Sleep Specialists</title>        <meta
          name="description"
          content="Expert home rehab in Bengaluru with physiotherapy, pulmonary rehabilitation, cardiac rehab, post-surgery recovery, and occupational therapy — delivered at your doorstep."
        />
        <meta
          name="keywords"
          content="home rehab in Bengaluru, home rehabilitation services, home physiotherapy near me, pulmonary rehabilitation at home, cardiac rehab at home"
        />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        html, body {
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

        .service-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .premium-card {
          background: #ffffff;
          border: 1px solid rgba(97,114,78,0.14);
          box-shadow: 0 22px 60px rgba(47,54,26,0.10);
          border-radius: 32px;
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

          .service-grid {
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

      {/* Hero Section */}
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
        aria-label="Home rehab in Bengaluru – home rehabilitation services near me"
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
              maxWidth: 940,
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
              Home Rehabilitation in Bengaluru
            </h1>

            <p
              style={{
                margin: "18px auto 0",
                maxWidth: 820,
                fontSize: 15.5,
                lineHeight: 1.75,
                marginBottom: 0,
              }}
            >
              Our <strong>home rehabilitation services</strong> provide tailored
              therapeutic support in your own home, focusing on recovery from
              injuries, surgeries, or chronic conditions. From{" "}
              <em>home physiotherapy near you</em> to occupational therapy, we
              help you regain independence and quality of life in a familiar
              environment.
            </p>

            <a
              href={EKA_LINK}
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

      {/* Intro Split Section */}
      <section className="section">
        <div className="wrap">
          <div className="premium-card grid-2" style={{ padding: 42 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={rehabImg}
                alt="Home physiotherapy and rehabilitation in Bengaluru"
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
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.9rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                 Regain Strength & Independence—At Home
              </h2>

              <p
                style={{
                  marginTop: 16,
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                }}
              >
                With{" "}
                <strong>Vaayu’s Home Rehabilitation Program in Bengaluru</strong>,
                certified physiotherapists and rehab specialists deliver
                personalised therapy plans right in your living room. We focus on
                restoring mobility, lung function, and confidence — so you can
                return to daily activities faster and safer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "96px 20px",
          backgroundImage: `url(${bgServices})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(47,54,26,.86), rgba(79,88,49,.70))",
          }}
        />

        <div className="wrap">
          <div
            className="premium-card"
            style={{
              padding: 42,
              background: "rgba(255,255,255,.94)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: T.green,
                fontSize: "clamp(1.9rem,3vw,2.8rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
               Home Rehabilitation Services We Offer
            </h2>

            <div className="service-grid" style={{ marginTop: 36 }}>
              {[
                {
                  title: "Pulmonary Rehabilitation at Home",
                  desc: "Breathing exercises, inspiratory muscle training & pacing.",
                },
                {
                  title: "Cardiac Rehab at Home",
                  desc: "Post-MI & CABG conditioning with monitored vitals.",
                },
                {
                  title: "Post-COVID Recovery",
                  desc: "Endurance rebuilding and fatigue management.",
                },
                {
                  title: "Pain Management",
                  desc: "Strategies to alleviate discomfort and enhance quality of life.",
                },
                {
                  title: "ADL & Occupational Therapy",
                  desc: "Training for everyday task independence.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    padding: 24,
                    borderRadius: 24,
                    background: T.white,
                    border: `1px solid ${T.border}`,
                    boxShadow: "0 14px 34px rgba(47,54,26,0.08)",
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
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3
                    style={{
                      color: T.green,
                      fontSize: 18,
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
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vaayu */}
      <section className="section">
        <div className="wrap">
          <div className="premium-card grid-2" style={{ padding: 42 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={whyImg}
                alt="Why choose Vaayu home rehabilitation services"
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
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.9rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                 Why Choose Vaayu for Home Rehab?
              </h2>

              <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
                {[
                  " Rehab overseen by pulmonologists & Physiotherapists",
                  " Goal-oriented plans with weekly progress tracking",
                  " Portable equipment — zero clinic visits",
                  " Family education for ongoing support & safety",
                  " Holistic approach — nutrition & mental well-being included",
                ].map((item, index) => (
                  <div
                    key={item}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "42px 1fr",
                      gap: 14,
                      alignItems: "center",
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
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p
                      style={{
                        margin: 0,
                        color: T.text,
                        fontSize: 15,
                        lineHeight: 1.55,
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          padding: "100px 20px",
          backgroundImage: `url(${bgContact})`,
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
            <h2
              style={{
                color: T.green,
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
               Book Your First Home Rehab Session
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
              Ready to start your personalised{" "}
              <strong>home rehab in Bengaluru</strong> journey?{" "}
              <strong>Vaayu’s Rehab Desk</strong> is just one call away.
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
                📍 <strong>Available in:</strong> Bengaluru (select zones)
              </p>
              <p style={{ margin: 0 }}>
                📞 <strong>Call:</strong> +91 636 492 8680 / +91 636 492 8681
              </p>
              <p style={{ margin: 0 }}>
                📧 <strong>Email:</strong>{" "}
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
              href={EKA_LINK}
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
              Empowering you to breathe deeper, move easier, live better.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeRehab;