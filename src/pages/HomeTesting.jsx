import React from "react";

import heroImg from "../assets/img/aff.jpg";
import testImg from "../assets/img/home-testing-phlebotomist.jpg";
import bgServices from "../assets/img/bg-services-testing.jpg";
import bgContact from "../assets/img/bg-contact-testing.jpg";
import whyImg from "../assets/img/cta-bg.jpg";

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

const services = [
  {
    title: "RT-PCR & Rapid Antigen",
    desc: "ICMR-approved COVID-19 and respiratory panels.",
  },
  {
    title: "Comprehensive Blood Panels",
    desc: "CBC, liver, kidney, thyroid, lipid, HbA1c and more.",
  },
  {
    title: "Pulmonary Function Tests at Home",
    desc: "Portable spirometry to assess lung capacity.",
  },
  {
    title: "Overnight Sleep Study Setup",
    desc: "Home polysomnography kit with next-day pickup.",
  },
  {
    title: "Chest X-Ray",
    desc: "Doorstep imaging with state-of-the-art portable X-ray machine.",
  },
  {
    title: "Chronic Disease Biomarker Tracking",
    desc: "Regular checks for diabetes, COPD and heart failure.",
  },
];

const whyChoose = [
  "NABL and ICMR-certified partner labs",
  "Cold-chain sample transport within 60 min",
  "Digital reports delivered in <24 hrs",
  "Strict infection-control protocols and PPE",
  "Test interpretation by Vaayu pulmonologists",
];

const HomeTesting = () => {
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
        * { box-sizing: border-box; }

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

        .service-grid {
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
          .service-grid {
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
              Home Testing Services
            </h1>

            <p
              style={{
                margin: "18px auto 0",
                maxWidth: 780,
                fontSize: 15.5,
                lineHeight: 1.75,
                marginBottom: 0,
              }}
            >
              Home testing services offer convenient and accessible medical
              testing directly at a patient&apos;s residence, allowing
              individuals to perform various health tests—such as blood tests,
              COVID-19 screenings, and other diagnostic assessments—without the
              need to visit a clinic or hospital.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="wrap">
          <div className="premium-card grid-2" style={{ padding: 42 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={testImg}
                alt="Home Testing"
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

            <div style={{ maxWidth: 590 }}>
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
                Doorstep Diagnostics
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
                Accurate Diagnostics at Your Doorstep
              </h2>

              <p
                style={{
                  marginTop: 16,
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}
              >
                Skip the clinic queues and let <strong>Vaayu</strong> bring
                certified lab professionals and{" "}
                <strong>advanced diagnostic tools</strong> to you. Our
                home-testing program ensures quick, hygienic sample collection,
                seamless cold-chain transport, and fast digital reports—so you
                can focus on what matters: getting better, sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
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
            <div
              style={{
                textAlign: "center",
                maxWidth: 760,
                margin: "0 auto 42px",
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
                Testing Support
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
                Tests & Procedures We Offer
              </h2>
            </div>

            <div className="service-grid">
              {services.map((item, i) => (
                <div
                  key={item.title}
                  className="mini-card"
                  style={{
                    padding: 24,
                    borderRadius: 24,
                    background: T.white,
                    border: `1px solid ${T.border}`,
                    boxShadow: "0 14px 34px rgba(47,54,26,0.08)",
                    minHeight: 180,
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

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="wrap">
          <div className="premium-card grid-2" style={{ padding: 42 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={whyImg}
                alt="Why Choose Vaayu Testing"
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
                Why Vaayu
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
                Professional testing support, coordinated by Vaayu
              </h2>

              <p
                style={{
                  marginTop: 14,
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.75,
                }}
              >
                Vaayu connects patients with certified diagnostic partners,
                hygienic sample handling, and expert interpretation for
                respiratory and general health needs.
              </p>

              <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
                {whyChoose.map((item, i) => (
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
                      {String(i + 1).padStart(2, "0")}
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

      {/* CTA */}
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
              Book Home Testing
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
              Book a Home Test Today
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
              Beat the travel stress—our certified team collects samples at your
              convenience. Ready to schedule?{" "}
              <strong>Vaayu’s Home Testing desk is just a call away.</strong>
            </p>

           <div
  style={{
    marginTop: 28,
    display: "flex",
    justifyContent: "center",
  }}
>
  <a
    href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <button
      style={{
        background: T.green,
        color: "#fff",
        padding: "14px 28px",
        borderRadius: 999,
        border: "none",
        fontSize: 15,
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(47,54,26,0.25)",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.target.style.background = T.deep;
        e.target.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        e.target.style.background = T.green;
        e.target.style.transform = "translateY(0)";
      }}
    >
      Book on EkaCare
    </button>
  </a>
</div>

            <p
              style={{
                marginTop: 22,
                color: T.muted,
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              Trusted diagnostics—delivered, decoded, and discussed with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTesting;