import React from "react";
import heroImage from "../assets/img/pediatric-pulmonology-hero.jpg";
import featureImg1 from "../assets/img/pediatrician.jpg";
import closingBg from "../assets/img/cta-bg.jpg";

const T = {
  green: "#61724e",
  light: "#eef4e9",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const PediatricPulmonology = () => {
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
        html, body { overflow-x: hidden; }

        .wrap {
          width: min(92%, 1240px);
          margin: auto;
        }

        .section {
          padding: 90px 0;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 40px;
          align-items: center;
        }

        .premium-card-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 50px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .grid-2,
          .premium-card-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          .section {
            padding: 60px 0;
          }

          .premium-card,
          .hero-card,
          .cta-card {
            padding: 24px !important;
            border-radius: 24px !important;
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
          backgroundImage: `url(${heroImage})`,
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
              "linear-gradient(90deg, rgba(47,54,26,.9), rgba(47,54,26,.6))",
          }}
        />

        <div className="wrap" style={{ textAlign: "center", position: "relative" }}>
          <div
            className="hero-card"
            style={{
              maxWidth: 900,
              margin: "auto",
              padding: 46,
              borderRadius: 32,
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              color: "#fff",
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
              Pediatric Pulmonology
            </h1>

            <p
              style={{
                marginTop: 16,
                fontSize: 15.5,
                lineHeight: 1.7,
                marginBottom: 0,
              }}
            >
              Specialized care for your child’s growing lungs—personalized,
              precise, and parent-approved.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="section">
        <div className="wrap">
          <div
            className="premium-card premium-card-grid"
            style={{
              background: T.white,
              padding: 40,
              borderRadius: 28,
              border: `1px solid ${T.border}`,
              boxShadow: "0 20px 60px rgba(47,54,26,0.10)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={featureImg1}
                alt="Child Respiratory Support"
                className="section-img"
                style={{
                  width: "100%",
                  maxWidth: 430,
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 22,
                  border: "1px solid rgba(97,114,78,0.12)",
                  boxShadow: "0 18px 45px rgba(47,54,26,0.10)",
                }}
              />
            </div>

            <div style={{ maxWidth: 560 }}>
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.9rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Compassionate Expertise for Young Lungs
              </h2>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  color: T.muted,
                  marginBottom: 0,
                }}
              >
                Pediatric pulmonologists at Vaayu are trained to treat a range of
                conditions affecting children’s breathing—from asthma to cystic
                fibrosis and beyond.
              </p>

              <a
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 22,
                  padding: "13px 28px",
                  background: T.green,
                  color: "#fff",
                  borderRadius: 999,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 14px 34px rgba(47,54,26,.18)",
                }}
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE */}
      <section className="section" style={{ background: "#f7faf4" }}>
        <div className="wrap grid-2">
          <div>
            <h2
              style={{
                color: T.green,
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Role of a Pediatric Pulmonologist
            </h2>

            <p style={{ marginTop: 14, color: T.muted, lineHeight: 1.8 }}>
              Pediatric pulmonologists specialize in the structure and function
              of children’s lungs. They diagnose and treat both common and
              complex respiratory issues and collaborate with families and
              specialists to ensure holistic care.
            </p>

            <p style={{ marginTop: 10, color: T.muted, lineHeight: 1.8 }}>
              Their approach includes patient education, sleep and allergy
              management, and comprehensive treatment plans tailored to every
              child's needs.
            </p>
          </div>

          <div
            style={{
              background: T.white,
              padding: 30,
              borderRadius: 24,
              border: `1px solid ${T.border}`,
              boxShadow: "0 15px 40px rgba(47,54,26,0.08)",
            }}
          >
            <h3 style={{ color: T.green, margin: 0, fontWeight: 600 }}>
              Why It Matters
            </h3>

            <ul style={{ marginTop: 14, color: T.muted, lineHeight: 1.8 }}>
              <li>Supports optimal lung development in growing children</li>
              <li>Improves long-term quality of life</li>
              <li>Provides integrated care for complex conditions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section">
        <div className="wrap grid-2">
          <div
            style={{
              background: T.green,
              color: "#fff",
              padding: 40,
              borderRadius: 24,
              boxShadow: "0 18px 45px rgba(47,54,26,0.18)",
            }}
          >
            <h3 style={{ fontSize: 22, margin: 0, fontWeight: 600 }}>
              What We Offer
            </h3>
            <p style={{ marginTop: 10, lineHeight: 1.7, marginBottom: 0 }}>
              Our pediatric pulmonologists provide a full spectrum of diagnostic
              and therapeutic services tailored to children's respiratory health.
            </p>
          </div>

          <div>
            {[
              {
                title: "Flexible Bronchoscopy",
                desc: "Direct view of airways for accurate diagnosis.",
              },
              {
                title: "Pulmonary Function Tests",
                desc: "Measuring lung capacity and response to medication.",
              },
              {
                title: "Sleep Studies",
                desc: "Identifying sleep-related breathing disorders.",
              },
              {
                title: "Allergy Testing & Chest Physiotherapy",
                desc: "Detect triggers and support lung clearance techniques.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: 14,
                  marginBottom: 16,
                  padding: "14px 16px",
                  background: T.white,
                  border: `1px solid ${T.border}`,
                  borderRadius: 18,
                  boxShadow: "0 12px 30px rgba(47,54,26,0.06)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: T.green,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 700,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  <h4
                    style={{
                      color: T.green,
                      margin: 0,
                      fontWeight: 600,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      marginTop: 6,
                      marginBottom: 0,
                      color: T.muted,
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          backgroundImage: `url(${closingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          position: "relative",
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

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="cta-card"
            style={{
              maxWidth: 820,
              margin: "auto",
              padding: 42,
              borderRadius: 30,
              background: "rgba(255,255,255,.9)",
              border: `1px solid ${T.border}`,
              boxShadow: "0 24px 70px rgba(47,54,26,0.20)",
            }}
          >
            <h2
              style={{
                color: T.green,
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Breathing Easier Starts Here
            </h2>

            <p
              style={{
                marginTop: 14,
                color: T.muted,
                fontSize: 15.5,
                lineHeight: 1.7,
                marginBottom: 0,
              }}
            >
              At Vaayu, pediatric pulmonology isn’t just a specialty—it’s a
              promise. We’re here to help children thrive with better breathing,
              clearer sleep, and healthier tomorrows.
            </p>

            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  marginTop: 24,
                  padding: "14px 30px",
                  borderRadius: 999,
                  background: T.green,
                  color: "#fff",
                  border: "none",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                BOOK AN APPOINTMENT
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PediatricPulmonology;