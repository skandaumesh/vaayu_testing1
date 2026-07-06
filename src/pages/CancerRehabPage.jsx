import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// assets
import heroMainImg from "../assets/img/yu.jpg";
import recoverySupportImg from "../assets/img/cancer.jpg";
import rehabTeamImg from "../assets/img/asd.jpg";
import featuredRecoveryImg from "../assets/img/ill-asian-man-sitting-chair-side-view.jpg";
import featuredRecoveryImg1 from "../assets/img/disabled-senior-man-wheelchair-training-with-dumbbells-rehabilitation-with-nurse.jpg";

const C = {
  pine: "#3b4a20",
  forest: "#4e6030",
  sage: "#6b7d3e",
  fern: "#8fa558",
  mist: "#d6e0b8",
  cream: "#f4f6ee",
  paper: "#fafaf7",
  ink: "#c7d2b6",
  ash: "#5a6445",
  ghost: "rgba(59,74,32,0.08)",
  border: "rgba(59,74,32,0.14)",
};

const WHO_BENEFIT = [
  {
    title: "Lung Cancer & Post-Surgery",
    desc: "Structured breathing and functional recovery after lung surgery or lung cancer treatment.",
  },
  {
    title: "Breathlessness After Treatment",
    desc: "Expert respiratory care for post-treatment breathlessness and airway management.",
  },
  {
    title: "Fatigue & Reduced Stamina",
    desc: "Targeted energy and endurance programs to restore strength and physical capacity.",
  },
  {
    title: "Chemo / Radiation Patients",
    desc: "Supportive rehabilitation during and after chemotherapy or radiation therapy.",
  },
];

const FOCUS_AREAS = [
  {
    label: "Respiratory Recovery",
    points: [
      "Improving lung capacity and breathing",
      "Managing breathlessness",
      "Airway clearance techniques",
    ],
  },
  {
    label: "Physical Rehabilitation",
    points: [
      "Strength and endurance training",
      "Safe return to daily activity",
      "Fatigue management protocols",
    ],
  },
  {
    label: "Sleep & Recovery",
    points: [
      "Sleep quality restoration",
      "Recovery optimization strategies",
      "Energy management planning",
    ],
  },
  {
    label: "Functional Health",
    points: [
      "Prevent post-treatment complications",
      "Boost independence & mobility",
      "Long-term quality of life",
    ],
  },
];

const STEPS = [
  {
    num: "01",
    title: "Expert Assessment",
    desc: "Pulmonologist-led personalised evaluation",
  },
  {
    num: "02",
    title: "Custom Plans",
    desc: "Tailored to your specific recovery needs",
  },
  {
    num: "03",
    title: "Breathing Therapy",
    desc: "Supervised respiratory exercise protocols",
  },
  {
    num: "04",
    title: "Progress Tracking",
    desc: "Real-time monitoring and adjustments",
  },
  {
    num: "05",
    title: "Integrated Care",
    desc: "Seamless coordination with oncology",
  },
];

const OUTCOMES = [
  { label: "Better Breathing", stat: "↑ Capacity" },
  { label: "More Strength", stat: "↑ Stamina" },
  { label: "Less Fatigue", stat: "↓ Tiredness" },
  { label: "Deeper Sleep", stat: "↑ Recovery" },
  { label: "Independence", stat: "↑ Quality" },
];

const TESTIMONIALS = [
  {
    text: "The program gave me my confidence back. I can breathe easier and do daily activities without exhaustion.",
    author: "Patient, 58",
  },
  {
    text: "The structured approach and expert guidance made recovery feel achievable and manageable at every step.",
    author: "Family Member",
  },
  {
    text: "This isn't just rehab — it's a comprehensive recovery partnership that truly understands cancer survivors.",
    author: "Patient, 45",
  },
];

const WHY_MATTERS = [
  "Lung function and breathing capacity",
  "Muscle strength and endurance",
  "Energy levels and fatigue",
  "Sleep quality",
  "Overall quality of life",
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const revealWhen = (visible, delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: visible ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

function Tag({ children, light = false, mobile = false }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: mobile ? "7px 14px" : "8px 16px",
        borderRadius: 999,
        fontSize: mobile ? "0.72rem" : "0.78rem",
        fontWeight: 750,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.88)" : C.forest,
        background: light ? "rgba(255,255,255,0.12)" : C.ghost,
        border: `1px solid ${light ? "rgba(255,255,255,0.2)" : C.border}`,
        marginBottom: mobile ? 14 : 16,
        maxWidth: "100%",
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children, light = false, center = false, mobile = false }) {
  return (
    <h2
      style={{
        fontSize: mobile ? "1.75rem" : "clamp(2rem, 3.4vw, 3rem)",
        lineHeight: mobile ? 1.18 : 1.08,
        fontWeight: 650,
        letterSpacing: "-0.04em",
        color: light ? "#fff8ef" : C.pine,
        marginBottom: mobile ? 14 : 18,
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </h2>
  );
}

export default function CancerRehabPage() {
  const [activeTest, setActiveTest] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 767 : false
  );

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  useEffect(() => {
    document.title =
      "Cancer Rehabilitation in Bengaluru | Vaayu Chest & Sleep Specialists";
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
    padding: isMobile ? "13px 18px" : "14px 28px",
    borderRadius: 999,
    fontWeight: 750,
    fontSize: isMobile ? "0.9rem" : "0.95rem",
    background: C.pine,
    color: "#fff",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    width: isMobile ? "100%" : "auto",
  };

  const btnOut = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "12px 18px" : "13px 26px",
    borderRadius: 999,
    fontWeight: 750,
    fontSize: isMobile ? "0.9rem" : "0.95rem",
    background: "transparent",
    color: C.pine,
    textDecoration: "none",
    border: `2px solid ${C.pine}`,
    cursor: "pointer",
    width: isMobile ? "100%" : "auto",
  };

  return (
    <div
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        WebkitFontSmoothing: "antialiased",
        textRendering: "geometricPrecision",
        background: C.paper,
        color: C.ink,
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }

        .container {
          width: min(92%, 1240px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
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

        .who-grid,
        .focus-grid,
        .outcomes-grid,
        .timeline-grid {
          display: grid;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .who-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .outcomes-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .results-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1100px) {
          .outcomes-grid {
            grid-template-columns: repeat(5, 1fr);
          }

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
          box-shadow: 0 16px 40px rgba(59,74,32,0.08);
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
          .container {
            width: min(90%, 440px);
          }

          .section-pad {
            padding: 56px 0;
          }

          .why-grid,
          .approach-grid,
          .cta-grid,
          .who-benefit-image-layout,
          .results-head-grid,
          .results-strip-grid {
            gap: 22px;
          }

          .who-benefit-bullet-row {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            padding: 16px !important;
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

          .focus-grid,
          .results-strip-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .vc-hero-like {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        ref={heroRef}
        className="vc-hero-like"
        style={{
          minHeight: "72svh",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${heroMainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "112px 0 76px" : "132px 0 96px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 1,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            {...fadeUp(0)}
            style={{
              width: "100%",
              maxWidth: 820,
              textAlign: "center",
              padding: isMobile ? "26px 20px" : "38px 44px",
              borderRadius: isMobile ? 26 : 34,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "0 30px 80px rgba(47,54,26,0.34)",
              color: "#fff8ef",
            }}
          >
            <Tag light mobile={isMobile}>
              Vaayu Chest &amp; Sleep Specialty Center, Bengaluru
            </Tag>

            <h1
              style={{
                fontSize: isMobile
                  ? "clamp(1.85rem, 9vw, 2.55rem)"
                  : "clamp(2.1rem, 4vw, 3.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                color: "#fff8ef",
                marginBottom: 18,
              }}
            >
              Cancer Rehabilitation in Bengaluru
            </h1>

            <p
              style={{
                fontSize: isMobile ? "0.95rem" : "1.02rem",
                lineHeight: isMobile ? 1.72 : 1.85,
                color: "#e6ebdf",
                maxWidth: 680,
                margin: "0 auto 26px",
              }}
            >
              Our structured Cancer Rehabilitation Program helps patients regain
              strength, improve breathing, and return to daily life with confidence —
              supporting you at every stage of recovery.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...btnPri,
                  background: "#61724e",
                  color: "#fff8ef",
                }}
              >
Book a Consultation              </motion.a>

              
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section ref={secRef1} className="section-pad" style={{ background: "#fff" }}>
        <div className="container why-grid" style={{ alignItems: "center" }}>
          <motion.div {...revealWhen(v1, 0)} style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: isMobile ? 22 : 28,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(59,74,32,0.12)",
              }}
            >
              <img
                src={recoverySupportImg}
                alt="Recovery support"
                style={{
                  width: "100%",
                  height: isMobile ? 280 : 460,
                  objectFit: "cover",
                }}
              />
            </div>
          </motion.div>

          <motion.div {...revealWhen(v1, 0.1)}>
            <Tag mobile={isMobile}>Why It Matters</Tag>

            <SectionTitle mobile={isMobile}>
Healing Beyond Cancer Treatment       </SectionTitle>

            <p
              style={{
                fontSize: isMobile ? "0.96rem" : "1rem",
                color: C.ash,
                lineHeight: isMobile ? 1.72 : 1.8,
                marginBottom: isMobile ? 20 : 26,
              }}
            >
              Cancer treatments like chemotherapy, radiation, and surgery can affect
              your body in lasting ways. Structured rehabilitation helps restore
              physical, respiratory, and functional health.
            </p>

            <div>
              {WHY_MATTERS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={v1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: isMobile ? "10px 0" : "12px 0",
                    borderBottom:
                      i < WHY_MATTERS.length - 1
                        ? `1px dashed ${C.border}`
                        : "none",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: C.forest,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: isMobile ? "0.92rem" : "0.97rem",
                      fontWeight: 500,
                      color: C.pine,
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO CAN BENEFIT */}
      <section ref={secRef2} className="section-pad" style={{ background: "#fff" }}>
        <div className="container">
          <div className="who-benefit-image-layout">
            <motion.div {...revealWhen(v2, 0)} className="who-benefit-image-box">
              <div
                style={{
                  borderRadius: isMobile ? 22 : 28,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(59,74,32,0.14)",
                  border: `1px solid ${C.border}`,
                  background: C.cream,
                }}
              >
                <img
                  src={featuredRecoveryImg1}
                  alt="Patients who can benefit from cancer rehabilitation"
                  className="who-benefit-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: isMobile ? 280 : 340,
                    maxHeight: isMobile ? 360 : 520,
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
                  padding: isMobile ? "12px 14px" : "14px 16px",
                  boxShadow: "0 16px 36px rgba(59,74,32,0.14)",
                  maxWidth: isMobile ? 180 : 220,
                }}
              >
                
              </div>
            </motion.div>

            <motion.div {...revealWhen(v2, 0.08)} className="who-benefit-content-box">
              <Tag mobile={isMobile}>Who Can Benefit</Tag>

              <SectionTitle mobile={isMobile}>Who Can Benefit</SectionTitle>

              <p
                style={{
                  fontSize: isMobile ? "0.96rem" : "1rem",
                  lineHeight: isMobile ? 1.75 : 1.85,
                  color: C.ash,
                  marginBottom: 22,
                  maxWidth: 640,
                }}
              >
                Our cancer rehabilitation program is designed for patients who need
                structured support to recover breathing, rebuild physical strength,
                and return to everyday activities with greater confidence.
              </p>

              <div style={{ display: "grid", gap: 14 }}>
                {WHO_BENEFIT.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 18 }}
                    animate={v2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                    whileHover={{ x: 4 }}
                    className="who-benefit-bullet-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "42px 1fr",
                      gap: 14,
                      alignItems: "start",
                      padding: "16px 16px",
                      borderRadius: 20,
                      background: "#eef3e4",
                      border: "1px solid rgba(0,0,0,0.03)",
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#dfe8c8",
                        color: C.forest,
                        display: "grid",
                        placeItems: "center",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: isMobile ? "0.94rem" : "1rem",
                          fontWeight: 700,
                          color: C.pine,
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontSize: isMobile ? "0.88rem" : "0.93rem",
                          lineHeight: isMobile ? 1.68 : 1.75,
                          color: C.ash,
                          margin: "6px 0 0",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section
        ref={secRef3}
        className="section-pad"
        style={{ position: "relative", overflow: "hidden" }}
        id="approach"
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={rehabTeamImg}
            alt="Rehabilitation team"
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
          <motion.div {...revealWhen(v3)} style={{ marginBottom: isMobile ? 26 : 44 }}>
            <Tag light mobile={isMobile}>Treatment Focus Areas</Tag>

            <SectionTitle light mobile={isMobile}>
              Four Pillars of Comprehensive Recovery
            </SectionTitle>
          </motion.div>

          <div className="focus-grid">
            {FOCUS_AREAS.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={v3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                style={{
                  padding: isMobile ? "22px 18px" : "30px 24px",
                  borderRadius: isMobile ? 20 : 24,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "0.98rem" : "1.05rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 14px",
                  }}
                >
                  {area.label}
                </h3>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {area.points.map((pt, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        padding: "6px 0",
                        fontSize: isMobile ? "0.88rem" : "0.9rem",
                        color: "rgba(255,255,255,0.76)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: C.fern,
                          flexShrink: 0,
                        }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section ref={secRef4} className="section-pad" style={{ background: "#fff" }}>
        <div className="container approach-grid" style={{ alignItems: "start" }}>
          <motion.div {...revealWhen(v4)}>
            <Tag mobile={isMobile}>Our Methodology</Tag>

            <SectionTitle mobile={isMobile}>A Structured Recovery Pathway</SectionTitle>

            <p
              style={{
                fontSize: isMobile ? "0.96rem" : "1rem",
                color: C.ash,
                lineHeight: isMobile ? 1.72 : 1.8,
                marginBottom: isMobile ? 20 : 28,
              }}
            >
              Early rehabilitation leads to significantly better outcomes. Our team
              supports you during, after, or months post-treatment.
            </p>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
              style={btnPri}
            >
              Get Started
            </motion.a>
          </motion.div>

          <div>
            {STEPS.map((step, i) => {
              const isLast = i === STEPS.length - 1;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={v4 ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.08 + i * 0.08, duration: 0.5 }}
                  style={{ display: "flex", gap: isMobile ? 14 : 18 }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div
                      style={{
                        width: isMobile ? 44 : 50,
                        height: isMobile ? 44 : 50,
                        borderRadius: "50%",
                        background: C.forest,
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        boxShadow: "0 8px 24px rgba(59,74,32,0.18)",
                        fontWeight: 800,
                        fontSize: "0.75rem",
                      }}
                    >
                      {step.num}
                    </div>
                    {!isLast && (
                      <div
                        style={{
                          width: 1,
                          flex: 1,
                          minHeight: isMobile ? 28 : 40,
                          margin: "8px 0",
                          background: `linear-gradient(180deg, ${C.fern}, transparent)`,
                        }}
                      />
                    )}
                  </div>

                  <div style={{ paddingBottom: isLast ? 0 : isMobile ? 24 : 34 }}>
                    <h3
                      style={{
                        fontSize: isMobile ? "0.96rem" : "1.02rem",
                        fontWeight: 700,
                        color: C.ink,
                        marginBottom: 6,
                        lineHeight: 1.4,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: isMobile ? "0.88rem" : "0.92rem",
                        color: C.ash,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section ref={secRef5} className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={featuredRecoveryImg}
            alt="Expected recovery outcomes"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
              gap: isMobile ? 16 : 22,
              marginBottom: isMobile ? 22 : 34,
            }}
          >
            <div>
              <Tag light mobile={isMobile}>Expected Results</Tag>
              <SectionTitle light mobile={isMobile}>Expected Results</SectionTitle>
            </div>

            <p
              style={{
                fontSize: isMobile ? "0.94rem" : "1rem",
                lineHeight: isMobile ? 1.7 : 1.8,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 720,
                margin: 0,
              }}
            >
              With expert rehabilitation, patients often see measurable improvements
              in breathing, stamina, sleep quality, and overall daily function.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={v5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="results-strip-grid"
            style={{
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: isMobile ? 12 : 14,
            }}
          >
            {OUTCOMES.map((item, i) => (
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
                  padding: isMobile ? "13px 14px" : "14px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.14)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    fontSize: "0.75rem",
                    fontWeight: 800,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.88rem" : "0.9rem",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: C.mist,
                      letterSpacing: "0.04em",
                      marginTop: 2,
                    }}
                  >
                    {item.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section style={{ padding: isMobile ? "34px 0" : "56px 0", background: "#fff" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: isMobile ? 22 : 28,
              overflow: "hidden",
              boxShadow: "0 28px 64px rgba(59,74,32,0.12)",
              height: isMobile ? 280 : 440,
              position: "relative",
            }}
          >
            <img
              src={featuredRecoveryImg}
              alt="Holistic cancer rehabilitation"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(30,39,16,0.62) 0%, transparent 50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: isMobile ? 20 : 32,
                left: isMobile ? 18 : 28,
                right: isMobile ? 18 : "auto",
                color: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "1.3rem" : "1.8rem",
                  fontWeight: 700,
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}
              >
                Whole-Person Recovery
              </div>
              <div style={{ fontSize: isMobile ? "0.85rem" : "0.92rem", opacity: 0.86 }}>
                Breathing • Strength • Sleep • Independence
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* FINAL CTA */}
<section ref={secRef7} className="section-pad" style={{ background: "#F7F8F3" }}>
  <div className="container cta-grid">
    <motion.div {...revealWhen(v7)}>
      <Tag mobile={isMobile}>When to Start</Tag>

      <SectionTitle mobile={isMobile}>When to Start</SectionTitle>

      <p
        style={{
          fontSize: isMobile ? "0.95rem" : "1rem",
          lineHeight: isMobile ? 1.72 : 1.85,
          color: C.ash,
          marginBottom: 14,
        }}
      >
        Rehabilitation can begin during, after, or even months post-treatment.
      </p>

      <p
        style={{
          fontSize: isMobile ? "0.95rem" : "1rem",
          lineHeight: 1.7,
          color: C.pine,
          fontWeight: 700,
          margin: 0,
        }}
      >
        Early care leads to better outcomes.
      </p>
    </motion.div>

    <motion.div {...revealWhen(v7, 0.1)}>
      <Tag mobile={isMobile}>Book a Consultation</Tag>

      <SectionTitle mobile={isMobile}>Book a Consultation</SectionTitle>

      <p
        style={{
          fontSize: isMobile ? "0.95rem" : "1rem",
          color: C.ash,
          lineHeight: isMobile ? 1.72 : 1.85,
          marginBottom: 22,
          maxWidth: 520,
        }}
      >
        Start your cancer recovery journey with expert rehabilitation care in
        Bengaluru.
      </p>

      <motion.a
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...btnPri,
          background: C.pine,
          color: "#fff8ef",
        }}
      >
        Book Your Consultation
      </motion.a>
    </motion.div>
  </div>
</section>
    </div>
  );
}