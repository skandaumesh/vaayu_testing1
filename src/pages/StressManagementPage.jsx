import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Wind,
  MoonStar,
  Brain,
  HeartPulse,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TimerReset,
  Stethoscope,
  Waves,
  Zap,
  TrendingUp,
  Clock ,
} from "lucide-react";

// assets from your existing img folder
import heroImg from "../assets/img/jio.jpg";
import supportImg from "../assets/img/tired-young-businessman-with-laptop-his-workplace.jpg";
import doctorImg from "../assets/img/nj.jpg";
import featureImg from "../assets/img/yu.jpg";

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

const STRESS_EFFECTS = [
  {
    icon: Wind,
    title: "Breathlessness & Chest Tightness",
    desc: "Stress can trigger shallow breathing and make chest discomfort feel more intense.",
  },
  {
    icon: MoonStar,
    title: "Poor Sleep or Insomnia",
    desc: "Ongoing stress often disturbs sleep quality, making recovery and breathing worse.",
  },
  {
    icon: Zap,
    title: "Fatigue & Low Energy",
    desc: "Mental strain can reduce stamina, affect focus, and lower daily performance.",
  },
  {
    icon: HeartPulse,
    title: "Worsening of Lung Conditions",
    desc: "Stress may aggravate asthma, COPD, and other respiratory concerns over time.",
  },
];

const PROGRAM_POINTS = [
  {
    icon: Brain,
    title: "Clinical Assessment",
    desc: "Identify stress triggers, symptom patterns, and breathing behaviour.",
  },
  {
    icon: Waves,
    title: "Breathing Therapy",
    desc: "Guided breathing exercises to improve lung efficiency and calm the body.",
  },
  {
    icon: MoonStar,
    title: "Sleep Optimization",
    desc: "Structured support for stress-related sleep issues and poor rest.",
  },
  {
    icon: Leaf,
    title: "Lifestyle Guidance",
    desc: "Simple routines, nutrition support, and work-life balance strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Integrated Care",
    desc: "Support for asthma, COPD, sleep apnea, and respiratory issues linked to stress.",
  },
];

const WHEN_TO_SEEK = [
  "Frequent anxiety or stress",
  "Breathlessness without clear medical cause",
  "Poor sleep or insomnia",
  "Fatigue affecting daily life",
];

const BENEFITS = [
  { icon: Wind, label: "Improved breathing control" },
  { icon: MoonStar, label: "Better sleep quality" },
  { icon: Brain, label: "Reduced anxiety and fatigue" },
  { icon: Activity, label: "Enhanced energy and daily performance" },
];

function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const revealWhen = (visible, delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  animate: visible ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

function Tag({ children, light = false }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 16px",
        borderRadius: 999,
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        color: light ? "rgba(255,255,255,0.88)" : C.forest,
        background: light ? "rgba(255,255,255,0.12)" : C.ghost,
        border: `1px solid ${light ? "rgba(255,255,255,0.18)" : C.border}`,
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
        lineHeight: 1.18,
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

export default function StressManagementPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const [activeBenefit, setActiveBenefit] = useState(0);

  useEffect(() => {
    document.title = "Stress Management Treatment in Bengaluru | Vaayu Chest & Sleep Specialists";
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBenefit((p) => (p + 1) % BENEFITS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const [secRef1, v1] = useInView();
  const [secRef2, v2] = useInView();
  const [secRef3, v3] = useInView();
  const [secRef4, v4] = useInView();
  const [secRef5, v5] = useInView();

  const btnPri = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
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

  const btnOut = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "13px 26px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: "0.95rem",
    background: "transparent",
    color: C.pine,
    textDecoration: "none",
    border: `2px solid ${C.pine}`,
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
          .container { padding: 0 40px; }
        }

        @media (min-width: 1200px) {
          .container { padding: 0 48px; }
        }

        .hero-grid,
        .split-grid,
        .program-grid,
        .cta-grid,
        .floating-layout {
          display: grid;
          gap: 32px;
        }

        @media (min-width: 992px) {
          .hero-grid,
          .split-grid,
          .cta-grid {
            grid-template-columns: 1fr 1fr;
            gap: 56px;
          }

          .floating-layout {
            grid-template-columns: 0.95fr 1.05fr;
            gap: 56px;
            align-items: center;
          }
        }

        .section-pad {
          padding: 72px 0;
        }

        @media (min-width: 768px) {
          .section-pad { padding: 92px 0; }
        }

        @media (min-width: 1200px) {
          .section-pad { padding: 110px 0; }
        }

        .effect-grid,
        .benefits-grid {
          display: grid;
          gap: 18px;
        }

        .program-grid {
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .effect-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .program-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .benefits-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .soft-card {
          border-radius: 24px;
          border: 1px solid ${C.border};
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(8px);
          box-shadow: 0 16px 40px rgba(59,74,32,0.08);
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }

        .soft-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 52px rgba(59,74,32,0.12);
          border-color: rgba(59,74,32,0.22);
        }

        .stress-arc {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 15% 25%, rgba(143,165,88,0.16), transparent 24%),
            radial-gradient(circle at 85% 20%, rgba(59,74,32,0.14), transparent 22%),
            radial-gradient(circle at 70% 85%, rgba(107,125,62,0.12), transparent 24%);
        }

        .program-strip {
          position: relative;
          overflow: hidden;
        }

        .program-strip::after {
          content: "";
          position: absolute;
          inset: -20% auto -20% -10%;
          width: 120px;
          background: linear-gradient(90deg, rgba(255,255,255,0.12), transparent);
          transform: skewX(-20deg);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.45s ease;
        }

        .program-strip:hover::after {
          opacity: 1;
          transform: translateX(260px) skewX(-20deg);
        }

        @media (max-width: 767px) {
          .hero-grid {
            padding-top: 120px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .hero-grid {
            padding-top: 135px !important;
          }
        }

        @media (min-width: 992px) {
          .hero-grid {
            padding-top: 145px !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${C.cream} 0%, #e6ecd4 100%)`,
        }}
      >
        <div className="stress-arc" />

        <div
          className="container hero-grid"
          style={{
            minHeight: "100vh",
            alignItems: "center",
            paddingTop: 130,
            paddingBottom: 40,
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <motion.div {...fadeUp(0)}>
              <Tag>
                <Leaf size={13} />
                Vaayu Chest &amp; Sleep Specialists, Bengaluru
              </Tag>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                lineHeight: 1.12,
                fontWeight: 700,
                color: C.pine,
                marginBottom: 18,
              }}
            >
              Stress Management Treatment in Bengaluru
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: C.ash,
                maxWidth: 620,
                marginBottom: 28,
              }}
            >
              Breathe Better. Feel Calmer. Live Healthier. Stress is not just
              mental—it directly affects your breathing, sleep, and lung health.
              At Vaayu Chest &amp; Sleep Specialists, Bengaluru, our Stress
              Management Program is designed to improve both mental well-being and
              respiratory health through expert-guided care.
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
                target="_blank"
                rel="noopener noreferrer"
                style={btnPri}
              >
                Book a Consultation <ArrowRight size={17} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, background: C.ghost }}
                whileTap={{ scale: 0.97 }}
                href="#program"
                style={btnOut}
              >
                Explore Program
              </motion.a>
            </motion.div>

            <motion.div
              {...fadeUp(0.32)}
              style={{
                display: "flex",
                gap: 28,
                flexWrap: "wrap",
                marginTop: 38,
                paddingTop: 24,
                borderTop: `1px solid ${C.border}`,
              }}
            >
              {[
                ["Better Breathing", "Calmer body"],
                ["Better Sleep", "Improved recovery"],
                ["Guided Care", "Long-term wellness"],
              ].map(([a, b], i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: "1.12rem",
                      fontWeight: 700,
                      color: C.forest,
                      marginBottom: 4,
                    }}
                  >
                    {a}
                  </div>
                  <div
                    style={{
                      fontSize: "0.76rem",
                      color: C.ash,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {b}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div style={{ position: "relative", minHeight: 380 }}>
            <motion.img
              src={heroImg}
              alt="Stress management and breathing care"
              style={{
                width: "100%",
                height: "100%",
                minHeight: 430,
                objectFit: "cover",
                borderRadius: 30,
                y: heroParallax,
                boxShadow: "0 24px 60px rgba(59,74,32,0.18)",
              }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 22,
                left: 18,
                background: "#fff",
                borderRadius: 18,
                padding: "15px 18px",
                boxShadow: "0 18px 44px rgba(59,74,32,0.18)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: C.ghost,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Brain size={20} color={C.forest} />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: C.ash, marginBottom: 2 }}>
                  Guided wellness care
                </div>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: C.ink }}>
                  Stress + Breathing Support
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY STRESS MANAGEMENT MATTERS */}
      <section ref={secRef1} className="section-pad" style={{ background: "#fff" }}>
        <div className="container split-grid" style={{ alignItems: "center" }}>
          <motion.div {...revealWhen(v1, 0)} style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(59,74,32,0.12)",
              }}
            >
              <img
                src={supportImg}
                alt="Stress management support"
                style={{ width: "100%", height: 460, objectFit: "cover" }}
              />
            </div>
          </motion.div>

          <motion.div {...revealWhen(v1, 0.08)}>
            <Tag>
              <Sparkles size={13} />
              Why Stress Management Matters
            </Tag>

            <SectionTitle>Stress Directly Impacts Breathing, Sleep, and Lung Health</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                color: C.ash,
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              Chronic stress can quietly affect your body in many ways. For people
              with respiratory issues, it can make symptoms worse and reduce overall
              quality of life.
            </p>

            <div className="effect-grid">
              {STRESS_EFFECTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={v1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                    className="soft-card"
                    style={{ padding: "22px 20px" }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        background: C.ghost,
                        display: "grid",
                        placeItems: "center",
                        marginBottom: 14,
                      }}
                    >
                      <Icon size={20} color={C.forest} />
                    </div>

                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: C.pine,
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.92rem",
                        lineHeight: 1.75,
                        color: C.ash,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW STRESS AFFECTS BREATHING */}
      <section
        ref={secRef2}
        className="section-pad"
        style={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${C.pine} 0%, ${C.forest} 100%)`,
        }}
      >
        <div className="container split-grid" style={{ alignItems: "center" }}>
          <motion.div {...revealWhen(v2, 0)}>
            <Tag light>
              <Wind size={13} />
              How Stress Affects Breathing
            </Tag>

            <SectionTitle light>Shallow Breathing Can Create a Difficult Cycle</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.85,
                marginBottom: 0,
                maxWidth: 620,
              }}
            >
              Stress can cause shallow, rapid breathing, reducing oxygen efficiency
              and leading to discomfort, anxiety, and breathing difficulty. This can
              further increase physical stress and worsen the cycle.
            </p>
          </motion.div>

          <motion.div
            {...revealWhen(v2, 0.1)}
            style={{
              borderRadius: 28,
              padding: "26px 24px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            {[
              "Stress",
              "Rapid / shallow breathing",
              "Reduced oxygen efficiency",
              "Discomfort & anxiety",
              "Breathing difficulty",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={v2 ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.12 + i * 0.08, duration: 0.45 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom:
                    i < 4 ? "1px dashed rgba(255,255,255,0.16)" : "none",
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.14)",
                    color: "#fff",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {item}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROGRAM */}
      <section
        ref={secRef3}
        className="section-pad"
        id="program"
        style={{ background: "#fff", position: "relative", overflow: "hidden" }}
      >
        <div className="container">
          <motion.div {...revealWhen(v3)} style={{ marginBottom: 36 }}>
            <Tag>
              <Stethoscope size={13} />
              Stress Management Program at Vaayu
            </Tag>
            <SectionTitle>Medical Guidance + Practical Wellness Support</SectionTitle>
          </motion.div>

          <div className="program-grid">
            {PROGRAM_POINTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={v3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="soft-card program-strip"
                  style={{
                    padding: "24px 22px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: 16,
                      top: 14,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: C.sage,
                      letterSpacing: "0.08em",
                    }}
                  >
                    0{i + 1}
                  </div>

                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: C.ghost,
                      display: "grid",
                      placeItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={22} color={C.forest} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 700,
                      color: C.pine,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.93rem",
                      lineHeight: 1.75,
                      color: C.ash,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHEN TO SEEK */}
      <section ref={secRef4} className="section-pad" style={{ background: C.cream }}>
        <div className="container floating-layout">
          <motion.div {...revealWhen(v4, 0)} style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 30,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(59,74,32,0.14)",
                border: `1px solid ${C.border}`,
              }}
            >
              <img
                src={doctorImg}
                alt="When to seek stress management treatment"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 360,
                  maxHeight: 520,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                right: 18,
                bottom: 18,
                background: "rgba(255,255,255,0.92)",
                borderRadius: 18,
                padding: "14px 16px",
                boxShadow: "0 16px 36px rgba(59,74,32,0.14)",
                maxWidth: 220,
                backdropFilter: "blur(8px)",
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
                Early Support
              </div>
              <div
                style={{
                  fontSize: "0.92rem",
                  color: C.pine,
                  fontWeight: 700,
                  lineHeight: 1.45,
                }}
              >
                Timely stress care can improve breathing and recovery.
              </div>
            </div>
          </motion.div>

          <motion.div {...revealWhen(v4, 0.08)}>
            <Tag>
              <TimerReset size={13} />
              When to Seek Stress Management Treatment
            </Tag>

            <SectionTitle>Consider Support If These Symptoms Keep Returning</SectionTitle>

            <div style={{ display: "grid", gap: 14 }}>
              {WHEN_TO_SEEK.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 18 }}
                  animate={v4 ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.12 + i * 0.08, duration: 0.45 }}
                  className="soft-card"
                  style={{
                    padding: "16px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: C.ghost,
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={18} color={C.forest} />
                  </div>
                  <div
                    style={{
                      fontSize: "0.96rem",
                      fontWeight: 600,
                      color: C.ink,
                    }}
                  >
                    {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        ref={secRef5}
        className="section-pad"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <img
            src={featureImg}
            alt="Benefits of stress management"
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
              <Tag light>
                <TrendingUp size={13} />
                Benefits of Stress Management
              </Tag>
              <SectionTitle light>Small Improvements That Make Daily Life Easier</SectionTitle>
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
              With consistent stress management support, patients often experience
              better control of breathing, better sleep, more energy, and improved
              day-to-day function.
            </p>
          </motion.div>

          <div className="benefits-grid">
            {BENEFITS.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeBenefit === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={v5 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="soft-card"
                  style={{
                    padding: "20px 18px",
                    background: isActive
                      ? "rgba(255,255,255,0.16)"
                      : "rgba(255,255,255,0.10)",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.28)"
                      : "1px solid rgba(255,255,255,0.14)",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.14)",
                      display: "grid",
                      placeItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <Icon size={20} color="#fff" />
                  </div>

                  <div
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: C.ink }}>
        <div className="container cta-grid">
          <motion.div {...fadeUp(0)}>
            <Tag light>
              <Clock size={13} />
              Book a Consultation
            </Tag>

            <SectionTitle light>Stress Management Treatment in Bengaluru</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.78)",
                marginBottom: 14,
              }}
            >
              Consult our experts for stress-related breathing issues in Bengaluru.
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
              Breathe Better. Feel Calmer. Live Healthier.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)}>
            <Tag light>
              <ArrowRight size={13} />
              Start Your Care Journey
            </Tag>

            <SectionTitle light>Get Expert-Guided Stress & Breathing Support</SectionTitle>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.76)",
                lineHeight: 1.85,
                marginBottom: 28,
                maxWidth: 520,
              }}
            >
              If stress is affecting your breathing, sleep, or daily energy, our
              team can help you with a structured and supportive plan.
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
              Book Your Consultation <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}