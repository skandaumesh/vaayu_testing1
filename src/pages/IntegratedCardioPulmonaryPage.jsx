import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// assets
import heroImg from "../assets/img/in.jpg";
import doctorImg from "../assets/img/male-working-as-paediatrician.jpg";
import diagnosticsImg from "../assets/img/top-view-world-heart-day-concept-with-stethoscope.jpg";
import rehabImg from "../assets/img/doctor-helping.jpg";
import patientImg from "../assets/img/A.jpg";

const C = {
  pine: "#3b4a20",
  forest: "#4e6030",
  sage: "#6b7d3e",
  fern: "#8fa558",
  mist: "#d6e0b8",
  cream: "#f4f6ee",
  paper: "#fafaf7",
  ink: "#1e2710",
  ash: "#5a6445",
  ghost: "rgba(59,74,32,0.08)",
  border: "rgba(59,74,32,0.14)",
};

const CONDITIONS = [
  "Pulmonary Hypertension",
  "Heart Failure with breathing issues",
  "COPD with cardiac complications",
  "Sleep Apnea with cardiovascular risk",
  "Post-COVID cardio-pulmonary issues",
  "Chronic unexplained breathlessness",
];

const SYMPTOMS = [
  "Breathlessness (rest or activity)",
  "Unexplained fatigue",
  "Chest tightness",
  "Leg swelling",
  "Reduced exercise capacity",
];

const TREATMENTS = [
  "Personalized treatment plans",
  "Pulmonary rehabilitation",
  "Cardio-respiratory conditioning",
  "Medication optimization",
  "Long-term monitoring",
];

const WHY_CHOOSE = [
  "Integrated heart + lung specialists",
  "Faster, accurate diagnosis",
  "Fewer hospital visits",
  "Long-term care approach",
];

const APPROACH_POINTS = [
  "Joint cardiology + pulmonology assessment",
  "Combined diagnostics",
  "Single structured treatment plan",
  "Continuous monitoring",
];

const WHY_INTEGRATED = [
  "Delayed diagnosis",
  "Multiple consultations",
  "Incomplete treatment",
];

const TESTIMONIALS = [
  {
    text: "Patients with overlapping heart and lung symptoms benefit most when diagnosis and treatment happen together, not in fragments.",
    author: "Integrated Care Approach",
  },
  {
    text: "When breathlessness, fatigue, and chest discomfort are assessed together, the care plan becomes clearer and more effective.",
    author: "Unified Diagnostic Model",
  },
  {
    text: "Integrated cardio-pulmonary care reduces confusion, repeated visits, and delayed treatment decisions.",
    author: "Vaayu Clinical Philosophy",
  },
];

function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const revealWhen = (visible, delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: visible ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

function Tag({ children, light = false }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 16px",
        borderRadius: 999,
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        color: light ? "rgba(255,255,255,0.88)" : C.forest,
        background: light ? "rgba(255,255,255,0.12)" : C.ghost,
        border: `1px solid ${light ? "rgba(255,255,255,0.2)" : C.border}`,
        marginBottom: 16,
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children, light = false, center = false }) {
  return (
    <h2
      style={{
        fontSize: "clamp(1.9rem, 3vw, 3rem)",
        lineHeight: 1.2,
        fontWeight: 700,
        color: light ? "#fff" : C.pine,
        marginBottom: 18,
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </h2>
  );
}

export default function IntegratedCardioPulmonaryPage() {
  const [activeTest, setActiveTest] = useState(0);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  useEffect(() => {
    document.title =
      "Integrated Cardio-Pulmonary Care in Bengaluru | Vaayu Chest & Sleep Specialists";
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTest((p) => (p + 1) % TESTIMONIALS.length),
      4500
    );
    return () => clearInterval(t);
  }, []);

  const [secRef1, v1] = useInView();
  const [secRef2, v2] = useInView();
  const [secRef3, v3] = useInView();
  const [secRef4, v4] = useInView();
  const [secRef5, v5] = useInView();
  const [secRef6, v6] = useInView();
  const [secRef7, v7] = useInView();

  const btnPri = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 28px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: "0.95rem",
    background: C.pine,
    color: "#fff",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: C.paper,
        color: C.ink,
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 40px;
          }
        }

        @media (min-width: 1200px) {
          .container {
            padding: 0 48px;
          }
        }

        ::selection {
          background: ${C.mist};
          color: ${C.ink};
        }

        .hero-grid,
        .why-grid,
        .approach-grid,
        .cta-grid,
        .who-benefit-image-layout,
        .results-head-grid,
        .results-strip-grid {
          display: grid;
          gap: 32px;
        }

        @media (min-width: 992px) {
          .hero-grid,
          .why-grid,
          .approach-grid,
          .cta-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }

          .who-benefit-image-layout {
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
            gap: 56px;
            align-items: center;
          }
        }

        .focus-grid,
        .timeline-grid {
          display: grid;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .results-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1100px) {
          .timeline-grid {
            grid-template-columns: 1.1fr 0.8fr 1fr;
          }

          .results-head-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
            align-items: end;
          }

          .results-strip-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }

        .section-pad {
          padding: 72px 0;
        }

        @media (min-width: 768px) {
          .section-pad {
            padding: 90px 0;
          }
        }

        @media (min-width: 1200px) {
          .section-pad {
            padding: 110px 0;
          }
        }

        .card {
          border-radius: 24px;
          background: #fff;
          border: 1px solid ${C.border};
          box-shadow: 0 14px 32px rgba(59,74,32,0.08);
        }

        .testimonial-nav button {
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .who-benefit-image-box {
            order: 1;
          }

          .who-benefit-content-box {
            order: 2;
          }
        }

        @media (max-width: 767px) {
          .who-benefit-bullet-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding: 14px 14px !important;
            border-radius: 18px !important;
          }

          .who-benefit-image {
            min-height: 280px !important;
            max-height: 360px !important;
          }

          .who-benefit-badge {
            right: 12px !important;
            bottom: 12px !important;
            max-width: 180px !important;
            padding: 12px 14px !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100dvh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: heroParallax,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(47,54,26,0.65)",
          }}
        />

        <div
          className="container hero-grid"
          style={{
            minHeight: "100dvh",
            alignItems: "center",
            paddingTop: 120,
            paddingBottom: 60,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 28,
                padding: "28px 24px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              }}
            >
              <Tag light>Vaayu Chest & Sleep Speciality Center, Bengaluru</Tag>

              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 14,
                }}
              >
                Integrated Cardio-Pulmonary Care
              </h1>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: 20,
                }}
              >
                Heart and lung care together — for faster diagnosis, better clarity,
                and long-term outcomes.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "12px 22px",
                    borderRadius: 999,
                    background: "#5B6641",
                    color: "#fff",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Book Evaluation
                </a>

                <a
                  href="#approach"
                  style={{
                    padding: "11px 20px",
                    borderRadius: 999,
                    border: "1px solid #fff",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: "none" }} />
        </div>
      </section>

      {/* WHY INTEGRATED CARE MATTERS */}
      <section ref={secRef1} className="section-pad" style={{ background: "#fff" }}>
        <div className="container why-grid" style={{ alignItems: "center" }}>
          <motion.div {...revealWhen(v1, 0)} style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(59,74,32,0.12)",
              }}
            >
              <img
                src={patientImg}
                alt="Why integrated care matters"
                style={{ width: "100%", height: 460, objectFit: "cover" }}
              />
            </div>
          </motion.div>

          <motion.div {...revealWhen(v1, 0.1)}>
            <Tag>Why Integrated Care Matters</Tag>

            <SectionTitle>One Problem, Often Seen in Two Systems</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                color: C.ash,
                lineHeight: 1.8,
                marginBottom: 26,
              }}
            >
              Symptoms like breathlessness, fatigue, and chest discomfort are often
              treated separately. But many patients have combined heart and lung
              conditions, which leads to fragmented care and missed clarity.
            </p>

            <div>
              {WHY_INTEGRATED.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={v1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom:
                      i < WHY_INTEGRATED.length - 1
                        ? `1px dashed ${C.border}`
                        : "none",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: C.forest,
                      flexShrink: 0,
                    }}
                  />

                  <span
                    style={{
                      fontSize: "0.97rem",
                      fontWeight: 500,
                      color: C.ink,
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <p
              style={{
                marginTop: 20,
                fontSize: "0.98rem",
                fontWeight: 700,
                color: C.forest,
              }}
            >
              At Vaayu, we treat the heart–lung connection together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section
        ref={secRef2}
        className="section-pad"
        style={{
          background: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
        id="approach"
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="who-benefit-image-layout">
            <motion.div
              {...revealWhen(v2, 0)}
              className="who-benefit-image-box"
              style={{
                position: "relative",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(59,74,32,0.14)",
                  border: `1px solid ${C.border}`,
                  background: C.cream,
                }}
              >
                <img
                  src={doctorImg}
                  alt="Integrated evaluation"
                  className="who-benefit-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 340,
                    maxHeight: 520,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div
                className="who-benefit-badge"
                style={{
                  position: "absolute",
                  right: 18,
                  bottom: 18,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 18,
                  padding: "14px 16px",
                  boxShadow: "0 16px 36px rgba(59,74,32,0.14)",
                  maxWidth: 220,
                }}
              >
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: C.sage,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  One Evaluation
                </div>
                <div
                  style={{
                    fontSize: "0.92rem",
                    color: C.pine,
                    fontWeight: 700,
                    lineHeight: 1.45,
                  }}
                >
                  One plan for both heart and lungs.
                </div>
              </div>
            </motion.div>

            <motion.div
              {...revealWhen(v2, 0.08)}
              className="who-benefit-content-box"
              style={{ minWidth: 0 }}
            >
              <Tag>Our Approach</Tag>

              <SectionTitle>One Evaluation. One Plan.</SectionTitle>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: C.ash,
                  marginBottom: 26,
                  maxWidth: 640,
                }}
              >
                We bring cardiology and pulmonology together into one structured
                clinical pathway for clearer diagnosis and better treatment decisions.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 14,
                }}
              >
                {APPROACH_POINTS.map((item, i) => {
                  const colorSet = {
                    bg: "#eef3e4",
                    dot: C.forest,
                  };

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 18 }}
                      animate={v2 ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                      whileHover={{ x: 4 }}
                      className="who-benefit-bullet-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 14,
                        alignItems: "start",
                        padding: "16px 16px",
                        borderRadius: 20,
                        background: colorSet.bg,
                        border: "1px solid rgba(0,0,0,0.03)",
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 6,
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              background: colorSet.dot,
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          <h3
                            style={{
                              fontSize: "1rem",
                              fontWeight: 700,
                              color: C.pine,
                              margin: 0,
                              lineHeight: 1.4,
                            }}
                          >
                            {item}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section
        ref={secRef3}
        className="section-pad"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={diagnosticsImg}
            alt="Conditions we treat"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(30,39,16,0.92) 0%, rgba(59,74,32,0.85) 100%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div {...revealWhen(v3)} style={{ marginBottom: 44 }}>
            <Tag light>Conditions We Treat</Tag>
            <SectionTitle light>Heart and Lung Conditions We Manage Together</SectionTitle>
          </motion.div>

          <div className="focus-grid">
            {CONDITIONS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={v3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                style={{
                  padding: "30px 24px",
                  borderRadius: 24,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div style={{ marginBottom: 14 }}>
                  <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "#fff" }}>
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMPTOMS TO WATCH */}
      <section ref={secRef4} className="section-pad" style={{ background: "#fff" }}>
        <div className="container approach-grid" style={{ alignItems: "start" }}>
          <motion.div {...revealWhen(v4)}>
            <Tag>Symptoms to Watch</Tag>

            <SectionTitle>When Breathlessness Needs Deeper Evaluation</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                color: C.ash,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              These symptoms are often treated separately, but together they may
              point to a combined cardio-pulmonary issue.
            </p>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
              style={btnPri}
            >
              Book Your Evaluation
            </motion.a>
          </motion.div>

          <div>
            {SYMPTOMS.map((step, i) => {
              const isLast = i === SYMPTOMS.length - 1;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={v4 ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.08 + i * 0.08, duration: 0.5 }}
                  style={{ display: "flex", gap: 18 }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: C.forest,
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        boxShadow: "0 8px 24px rgba(59,74,32,0.18)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {!isLast && (
                      <div
                        style={{
                          width: 1,
                          flex: 1,
                          minHeight: 40,
                          margin: "8px 0",
                          background: `linear-gradient(180deg, ${C.fern}, transparent)`,
                        }}
                      />
                    )}
                  </div>

                  <div style={{ paddingBottom: isLast ? 0 : 34 }}>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: C.sage,
                        marginBottom: 4,
                      }}
                    >
                      Symptom {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.02rem",
                        fontWeight: 700,
                        color: C.ink,
                        marginBottom: 6,
                      }}
                    >
                      {step}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TREATMENT & CARE */}
      <section
        ref={secRef5}
        className="section-pad"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <img
            src={rehabImg}
            alt="Integrated treatment and care"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(30,39,16,0.88) 0%, rgba(59,74,32,0.78) 100%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            {...revealWhen(v5)}
            className="results-head-grid"
            style={{
              gridTemplateColumns: "1fr",
              gap: 22,
              marginBottom: 34,
            }}
          >
            <div>
              <Tag light>Treatment & Care</Tag>
              <SectionTitle light>Treatment & Care</SectionTitle>
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 720,
                margin: 0,
              }}
            >
              Our care model is built around one structured treatment pathway with
              continuous review of both cardiac and pulmonary health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={v5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="results-strip-grid"
            style={{
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 14,
            }}
          >
            {TREATMENTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={v5 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.35,
                    }}
                  >
                    {item}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE VAAYU */}
      <section ref={secRef6} className="section-pad" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div {...revealWhen(v6)} style={{ textAlign: "center", marginBottom: 48 }}>
            <Tag>Why Choose Vaayu</Tag>
            <SectionTitle center>Why Choose Vaayu</SectionTitle>
          </motion.div>

          <div className="timeline-grid">
            {WHY_CHOOSE.map((item, i) => {
              const bgList = [C.ink, C.cream, C.forest, C.cream];
              const fgList = ["#fff", C.ink, "#fff", C.ink];
              const bg = bgList[i % bgList.length];
              const fg = fgList[i % fgList.length];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 36 }}
                  animate={v6 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  style={{
                    background: bg,
                    padding: "38px 28px",
                    borderRadius: 24,
                    marginTop:
                      typeof window !== "undefined" &&
                      window.innerWidth > 1099 &&
                      i === 1
                        ? 30
                        : 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: fg,
                      opacity: 0.68,
                      marginBottom: 16,
                    }}
                  >
                    Benefit {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: fg,
                      marginBottom: 12,
                    }}
                  >
                    {item}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL STYLE SECTION */}
      <section className="section-pad" style={{ background: C.cream }}>
        <div className="container approach-grid" style={{ alignItems: "center" }}>
          <div>
            <Tag>Integrated Care Insight</Tag>
            <SectionTitle>Why the Unified Model Matters</SectionTitle>

            <div className="testimonial-nav" style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTest(i)}
                  style={{
                    width: i === activeTest ? 30 : 10,
                    height: 10,
                    borderRadius: 999,
                    background: i === activeTest ? C.forest : C.border,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ position: "relative", minHeight: 180 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTest}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
                    lineHeight: 1.8,
                    color: C.ink,
                    marginBottom: 18,
                    fontWeight: 500,
                  }}
                >
                  “{TESTIMONIALS[activeTest].text}”
                </p>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: C.ash,
                    letterSpacing: "0.05em",
                  }}
                >
                  — {TESTIMONIALS[activeTest].author}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section style={{ padding: "56px 0", background: "#fff" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 28px 64px rgba(59,74,32,0.12)",
              height: 440,
              position: "relative",
            }}
          >
            <img
              src={diagnosticsImg}
              alt="Integrated heart and lung care"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(30,39,16,0.62) 0%, transparent 50%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 32, left: 28, color: "#fff" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>
                Integrated Cardio-Pulmonary Care
              </div>
              <div style={{ fontSize: "0.92rem", opacity: 0.86 }}>
                Heart and Lung Care — In One Unified Plan
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={secRef7} className="section-pad" style={{ background: C.ink }}>
        <div className="container cta-grid">
          <motion.div {...revealWhen(v7)}>
            <Tag light>Book Your Evaluation</Tag>

            <SectionTitle light>Integrated Cardio-Pulmonary Care in Bengaluru</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.78)",
                marginBottom: 14,
              }}
            >
              Heart and Lung Care — In One Unified Plan.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#fff",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Book Your Evaluation.
            </p>
          </motion.div>

          <motion.div {...revealWhen(v7, 0.1)}>
            <Tag light>Book an Integrated Evaluation</Tag>

            <SectionTitle light>Start With One Structured Assessment</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.76)",
                lineHeight: 1.85,
                marginBottom: 28,
                maxWidth: 520,
              }}
            >
              If heart and lung symptoms overlap, a unified evaluation helps reduce
              delay and improves clarity from the beginning.
            </p>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...btnPri,
                background: "#fff",
                color: C.pine,
              }}
            >
              Book Your Evaluation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}