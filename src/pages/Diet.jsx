import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImage from "../assets/img/diet-hero.jpg";
import introImage from "../assets/img/diet-intro.jpg";
import overlayImage from "../assets/img/diet2.jpg";
import ctaBg from "../assets/img/cta-bg.jpg";

const T = {
  green: "#61724e",
  darkGreen: "#4f5831",
  light: "#eef4e9",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

export default function DietAndNutrition() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const concerns = [
    "Nutritional deficiencies impacting lung performance",
    "Obesity or underweight complications tied to breathing",
    "Food intolerances or allergies that affect inflammation",
    "Metabolic disorders like diabetes or thyroid issues",
    "Recovery support post-COVID or prolonged illness",
  ];

  const services = [
    "Nutrition Counseling",
    "Respiratory-Supportive Diet Planning",
    "Weight Management Programs",
    "Family Dietary Education",
    "Supplement Guidance",
    "Collaborative Medical Planning",
  ];

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
          gap: 44px;
          align-items: center;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        @media (max-width: 1000px) {
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
          .section {
            padding: 64px 0;
          }

          .premium-card,
          .hero-card,
          .cta-card,
          .address-card {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .section-img {
            height: 260px !important;
          }

          .service-grid {
            grid-template-columns: 1fr;
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
              "linear-gradient(90deg, rgba(47,54,26,.90), rgba(47,54,26,.62))",
          }}
        />

        <div className="wrap" style={{ position: "relative" }}>
          <div
            className="hero-card"
            data-aos="zoom-in"
            style={{
              maxWidth: 900,
              margin: "auto",
              padding: 46,
              borderRadius: 32,
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
              Diet & Nutrition
            </h1>

            <p
              style={{
                marginTop: 16,
                fontSize: 15.5,
                lineHeight: 1.7,
                marginBottom: 0,
              }}
            >
              Supporting your lungs through the power of personalized,
              anti-inflammatory nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="wrap">
          <div
            className="premium-card grid-2"
            data-aos="fade-up"
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
                src={introImage}
                alt="Diet & Respiratory Health"
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

            <div style={{ maxWidth: 580 }}>
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.9rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Why Diet Matters in Respiratory Health
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
                At Vaayu, we integrate medical nutrition therapy into every
                patient’s care plan. The right diet can ease inflammation,
                reduce breathlessness, enhance immunity, and complement
                treatments for chronic lung and sleep conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ADDRESS */}
      <section
        style={{
          padding: "96px 20px",
          backgroundImage: `url(${overlayImage})`,
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

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="address-card grid-2"
            data-aos="fade-up"
            style={{
              background: "rgba(255,255,255,.92)",
              padding: 42,
              borderRadius: 32,
              border: "1px solid rgba(255,255,255,.32)",
              boxShadow: "0 26px 70px rgba(47,54,26,.28)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              alignItems: "start",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-flex",
                  padding: "7px 18px",
                  borderRadius: 999,
                  background: "#f7faf4",
                  border: `1px solid ${T.border}`,
                  color: T.green,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Nutrition Focus
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
                What We Address
              </h2>

              <p
                style={{
                  marginTop: 14,
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.75,
                  maxWidth: 520,
                }}
              >
                Our nutrition care supports respiratory health by identifying
                diet-related concerns that can affect energy, inflammation,
                weight balance, and recovery.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              {concerns.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px 1fr",
                    gap: 14,
                    alignItems: "center",
                    padding: "14px 16px",
                    borderRadius: 18,
                    background: "#f7faf4",
                    border: `1px solid ${T.border}`,
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
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div
            data-aos="fade-up"
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
              Nutrition Services
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
              Services We Offer
            </h2>
          </div>

          <div className="service-grid">
            {services.map((service, i) => (
              <div
                key={service}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: T.white,
                  padding: 28,
                  borderRadius: 26,
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 16px 42px rgba(47,54,26,0.08)",
                  minHeight: 190,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "#f7faf4",
                    color: T.green,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginBottom: 18,
                    border: `1px solid ${T.border}`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h4
                  style={{
                    color: T.green,
                    fontSize: 19,
                    fontWeight: 600,
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {service}
                </h4>

                <p
                  style={{
                    marginTop: 10,
                    color: T.muted,
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  Designed to integrate with ongoing respiratory treatments at
                  Vaayu.
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
          backgroundImage: `url(${ctaBg})`,
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
            data-aos="fade-up"
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
              Ready to Breathe Better Through Nutrition?
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
              Book your personalized consultation with Vaayu’s nutrition team
              today.
            </p>

            <button
              onClick={() => {
                window.open(
                  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation",
                  "_blank"
                );
              }}
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
              Schedule a session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}