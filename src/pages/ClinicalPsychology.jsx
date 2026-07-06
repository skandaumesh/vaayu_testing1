import React from "react";
import heroImage from "../assets/img/clinical-psychology-hero.jpg";
import psychologyImg from "../assets/img/mental-health-care-sketch-diagram.jpg";
import servicesImg from "../assets/img/woman-with-hands.jpg";
import treatBg from "../assets/img/cta-bg.jpg";
import { motion } from "framer-motion";

const T = {
  green: "#61724e",
  light: "#eef4e9",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ClinicalPsychology() {
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

          .premium-card {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .hero-card {
            padding: 30px 22px !important;
            border-radius: 26px !important;
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

        <div className="wrap">
          <motion.div
            className="hero-card"
            variants={fade}
            initial="hidden"
            animate="visible"
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
              Clinical Psychology
            </h1>

            <p
              style={{
                marginTop: 16,
                fontSize: 15.5,
                lineHeight: 1.7,
                marginBottom: 0,
              }}
            >
              Supporting mental wellness through evidence-based psychological
              care tailored for all age groups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS CLINICAL PSYCHOLOGY */}
      <section className="section">
        <div className="wrap">
          <motion.div
            className="premium-card premium-card-grid"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                src={psychologyImg}
                alt="Clinical Psychology Illustration"
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
                What is Clinical Psychology?
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
                Clinical psychology is the branch of psychology focused on
                diagnosing and treating emotional, mental, and behavioral
                disorders. At Vaayu, our specialists support patients with
                personalized interventions—whether it's short-term challenges or
                chronic psychological conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE TREAT */}
      <section
        style={{
          padding: "100px 20px",
          backgroundImage: `url(${treatBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="wrap grid-2"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            background: "rgba(255,255,255,.9)",
            padding: 40,
            borderRadius: 30,
            border: `1px solid ${T.border}`,
            boxShadow: "0 24px 70px rgba(47,54,26,0.18)",
          }}
        >
          <div
            style={{
              background: T.green,
              color: "#fff",
              padding: 30,
              borderRadius: 22,
              boxShadow: "0 18px 45px rgba(47,54,26,0.18)",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem,2.4vw,2rem)",
                fontWeight: 600,
                margin: 0,
              }}
            >
              What We Treat
            </h3>

            <p style={{ marginTop: 12, lineHeight: 1.7, marginBottom: 0 }}>
              Our clinical psychologists treat a wide spectrum of issues
              including mood and anxiety disorders, childhood behavioral
              concerns, trauma, and adjustment difficulties.
            </p>
          </div>

          <div>
            {[
              "Depression & Mood Disorders",
              "Anxiety, Panic & Phobias",
              "Stress and Burnout",
              "Post-Traumatic Stress Disorder (PTSD)",
              "Child & Adolescent Behavioral Issues",
              "Sleep-related psychological challenges",
            ].map((item, i) => (
              <motion.div
                key={item}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  marginBottom: 14,
                  padding: "12px 14px",
                  borderRadius: 16,
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
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <p
                  style={{
                    color: T.green,
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              style={{
                textAlign: "center",
                color: T.green,
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Services We Offer
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 24,
                marginTop: 40,
              }}
            >
              {[
                "Psychological Evaluations",
                "Individual Therapy",
                "Family Counseling",
                "Cognitive Behavioral Therapy (CBT)",
              ].map((title, i) => (
                <motion.div
                  key={title}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    background: T.white,
                    padding: 24,
                    borderRadius: 24,
                    border: `1px solid ${T.border}`,
                    boxShadow: "0 15px 40px rgba(47,54,26,0.08)",
                  }}
                >
                  <h4
                    style={{
                      color: T.green,
                      fontSize: 18,
                      fontWeight: 600,
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
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
                    Personalized sessions based on patient needs with ongoing
                    assessment and therapy planning.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          backgroundImage: `url(${servicesImg})`,
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
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              }}
            >
              Begin the Journey to Mental Wellness
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
              Book a consultation with our clinical psychology team and take the
              first step toward holistic emotional healing.
            </p>

            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}