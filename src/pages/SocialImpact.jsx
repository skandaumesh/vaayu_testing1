import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import social1 from "../assets/img/social1.jpg";
import benefitsImg from "../assets/img/side 1.jpg";
import heroBg from "../assets/img/social impact.jpg";

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

const initiatives = [
  {
    title: "VORIC Clinic",
    subtitle: "Respiratory Illness Clinic",
    text: `An initiative to improve lung health and prevent chronic diseases.
Respiratory disease is rising exponentially—COVID-19, pollution
and allergens challenge our lungs like never before.`,
  },
  {
    title: "Community Screenings",
    subtitle: "Free Lung Function Tests",
    text: `We partner with local NGOs to run spirometry camps in high-risk
areas, catching early signs of COPD, asthma, and other conditions.`,
  },
];

const reachStats = [
  { value: 150, label: "Camps Conducted" },
  { value: 2500, label: "Traffic Policemen Screened" },
  { value: 3000, label: "BMTC/KSRTC employees screened" },
  { value: 5000, label: "Free PFTs & X-ray done" },
];

export default function SocialImpact() {
  const [countKey, setCountKey] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCountKey((prev) => prev + 1);
        setVisible(true);
      }, 500);
    }, 40000);

    return () => clearInterval(interval);
  }, []);

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
          max-width: 900px;
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

        .card {
          background: #ffffff;
          border: 1px solid ${T.border};
          border-radius: clamp(24px, 3vw, 32px);
          box-shadow: 0 20px 60px rgba(47,54,26,0.08);
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(28px, 5vw, 46px);
          align-items: center;
        }

        .initiative-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
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

        .section-img {
          width: 100%;
          height: clamp(280px, 32vw, 390px);
          object-fit: cover;
          border-radius: 24px;
          border: 1px solid ${T.border};
          box-shadow: 0 18px 45px rgba(47,54,26,0.10);
        }

        .btn-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 24px;
          padding: 14px 30px;
          background: #ffffff;
          color: ${T.green};
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          border: 1px solid rgba(97,114,78,0.18);
          box-shadow: 0 14px 34px rgba(47,54,26,.18);
        }

        @media (max-width: 1050px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .grid-2,
          .initiative-grid {
            grid-template-columns: 1fr;
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
          .card {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .section-img {
            height: 260px;
          }

          .btn-light {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .hero-section {
            min-height: auto;
          }

          img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
      `}</style>

      {/* HERO */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(47,54,26,.88), rgba(47,54,26,.62))",
          }}
        />

        <div className="wrap">
          <div className="hero-card">
            <h1
              style={{
                fontSize: "clamp(2.05rem,5vw,3.9rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
              Our Social Impact
            </h1>

            <p
              style={{
                margin: "16px auto 0",
                maxWidth: 720,
                fontSize: "clamp(14px,1.4vw,16px)",
                lineHeight: 1.75,
              }}
            >
              At Vaayu, we’re committed to lung-health equity, environmental
              well-being, and community education.
            </p>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="section">
        <div className="wrap initiative-grid">
          {initiatives.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="card"
              style={{
                padding: 32,
                minHeight: 300,
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
                Initiative {idx + 1}
              </span>

              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.65rem,3vw,2.4rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: "18px 0 0",
                }}
              >
                {item.title}
              </h2>

              <h3
                style={{
                  color: T.deep,
                  fontSize: 18,
                  fontWeight: 600,
                  margin: "8px 0 0",
                }}
              >
                {item.subtitle}
              </h3>

              <p
                style={{
                  color: T.muted,
                  fontSize: 15,
                  lineHeight: 1.75,
                  marginTop: 14,
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VORIC CAMP */}
      <section className="section">
        <div className="wrap">
          <div className="card" style={{ padding: "clamp(24px,4vw,42px)" }}>
            <div className="grid-2">
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
                  What Is The Purpose Of The Clinic?
                </h2>

                <p
                  style={{
                    color: T.muted,
                    fontSize: 15.5,
                    lineHeight: 1.8,
                    marginTop: 16,
                  }}
                >
                  The camp is a free service that aims to provide comprehensive
                  respiratory health screening and treatment for people exposed
                  to air pollution, dust, chemicals, or smoke through their
                  work—like traffic police, mechanics, painters, and more.
                </p>
              </div>

              <motion.img
                src={social1}
                alt="VORIC Camp"
                className="section-img"
                whileHover={{ scale: 1.02 }}
              />
            </div>

            <div style={{ marginTop: 34 }}>
              <h3
                style={{
                  color: T.green,
                  fontSize: "clamp(1.35rem,2.4vw,2rem)",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                The camp offers a host of services such as:
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                  marginTop: 20,
                }}
              >
                {[
                  "Initial vitals check: blood pressure, pulse, oxygen saturation",
                  "Random blood sugar screening",
                  "Comprehensive lung function testing via spirometry",
                  "Specialist pulmonologist consultation",
                  "Sleep apnea assessment with questionnaires & devices",
                  "Free medications (inhalers, steroids, antibiotics, oxygen)",
                ].map((item, index) => (
                  <div key={item} className="point">
                    <div className="number">{index + 1}</div>
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

      {/* COMMUNITY BENEFITS */}
      <section className="section">
        <div className="wrap">
          <div className="card grid-2" style={{ padding: "clamp(24px,4vw,42px)" }}>
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
                What are the benefits to the community?
              </h2>

              <p
                style={{
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  marginTop: 16,
                }}
              >
                The camp is also a research initiative—collecting vital data to
                shape better policies and healthcare strategies.
              </p>

              <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
                {[
                  "Improve awareness of respiratory health and disease prevention",
                  "Enhance access and adherence to treatment and screening",
                  "Boost worker well-being and reduce economic burden",
                  "Support public health planning and advocacy",
                ].map((item, index) => (
                  <div key={item} className="point">
                    <div className="number">{index + 1}</div>
                    <p style={{ margin: 0, color: T.text, lineHeight: 1.55 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  marginTop: 20,
                }}
              >
                We work closely with NGOs, employers, and local authorities to
                maximize our reach and impact.
              </p>
            </div>

            <motion.img
              src={benefitsImg}
              alt="Community benefits"
              className="section-img"
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </div>
      </section>

      {/* SCHEDULE & REACH */}
      <section className="section">
        <div className="wrap">
          <div className="card" style={{ padding: "clamp(24px,4vw,42px)" }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: "center",
                maxWidth: 760,
                margin: "0 auto 42px",
              }}
            >
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.75rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Schedule & Reach
              </h2>

              <p
                style={{
                  marginTop: 12,
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.75,
                }}
              >
                Every week we bring free respiratory screening directly to
                workers in need.
              </p>
            </motion.div>

            <div className="stats-grid">
              {reachStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="card"
                  style={{
                    padding: 28,
                    textAlign: "center",
                    boxShadow: "0 14px 34px rgba(47,54,26,0.08)",
                  }}
                >
                  <p
                    style={{
                      color: T.green,
                      fontSize: "clamp(2rem,4vw,3rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {visible && (
                      <CountUp
                        key={countKey + idx}
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                      />
                    )}
                  </p>
                  <p
                    style={{
                      marginTop: 12,
                      color: T.muted,
                      fontSize: 14.5,
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            className="card"
            style={{
              padding: "clamp(28px,5vw,56px)",
              background: T.green,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: 820, margin: "auto" }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.75rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                How Can You Get Involved?
              </h2>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,.9)",
                }}
              >
                Our weekly camps are powered by volunteers—doctors, nurses,
                pharmacists, technicians, researchers, students, and community
                members who donate their time and expertise.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                  marginTop: 24,
                  textAlign: "left",
                }}
              >
                {[
                  "Registration & data entry",
                  "Vitals & blood sugar checks",
                  "Data analysis & report writing",
                  "Outreach & community education",
                  "Logistics & on-site coordination",
                ].map((item, index) => (
                  <div
                    key={item}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40px 1fr",
                      gap: 12,
                      alignItems: "center",
                      padding: 14,
                      borderRadius: 16,
                      background: "rgba(255,255,255,.12)",
                      border: "1px solid rgba(255,255,255,.18)",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: "#fff",
                        color: T.green,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      {index + 1}
                    </div>
                    <p style={{ margin: 0, color: "#fff" }}>{item}</p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  marginTop: 22,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,.9)",
                }}
              >
                Volunteers gain hands-on experience, build new skills, and earn
                formal recognition. Ready to join us?
              </p>

              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@vaayuchest.com&su=I'd%20like%20to%20volunteer%20with%20Vaayu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="btn-light"
              >
                Volunteer Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}