import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Waves,
  Zap,
  Flower2,
  Smile,
  StretchHorizontal,
} from "lucide-react";

import heroImg from "../assets/img/focused-young-indian-man-meditating-lotus-pose (1).jpg";
import supportImg from "../assets/img/group-young-people-smiling-happy-training-yoga-sport-center (1).jpg";
import doctorImg from "../assets/img/focused-people-meditating-yoga-class (1).jpg";
import featureImg from "../assets/img/yu.jpg";

const C = {
  pine: "#244334",
  forest: "#315844",
  sage: "#5c7f6d",
  fern: "#88a793",
  mist: "#dce9e2",
  cream: "#f6faf7",
  paper: "#fcfdfc",
  ink: "#1a2c22",
  ash: "#5c6d65",
  ghost: "rgba(36,67,52,0.08)",
  border: "rgba(36,67,52,0.14)",
};

const BENEFITS = [
  "Asthma & COPD support",
  "Bronchiectasis & reduced lung capacity",
  "Post-COVID recovery",
  "Sleep disorders & poor sleep quality",
  "Stress and anxiety",
  "Fatigue and low stamina",
  "Post-illness recovery",
  "Sedentary lifestyle-related issues",
  "Chronic respiratory or wellness concerns",
];

const APPROACH = [
  {
    icon: Wind,
    title: "Breathing Improvement",
    desc: "Therapeutic breathing practices to improve awareness, comfort, and lung support.",
  },
  {
    icon: Sparkles,
    title: "Relaxation & Stress Reduction",
    desc: "Calming guided practices that support better emotional and respiratory balance.",
  },
  {
    icon: StretchHorizontal,
    title: "Better Flexibility & Posture",
    desc: "Gentle movement to improve mobility, alignment, and body confidence.",
  },
  {
    icon: Zap,
    title: "Improved Energy & Balance",
    desc: "Supportive routines designed to improve stamina and day-to-day function.",
  },
  {
    icon: ShieldCheck,
    title: "Guided Recovery & Wellness Support",
    desc: "Safe, medically informed therapeutic yoga integrated into supportive care.",
  },
];

const WHY_VAAYU = [
  "Medically guided wellness support",
  "Safe and structured sessions",
  "Personalized approach for individual needs",
  "Focus on breathing, recovery, and long-term well-being",
];

const JOURNEY = [
  {
    step: "01",
    title: "Baseline Assessment",
    bullets: ["Lung function", "Breathlessness scale", "Stress screening"],
  },
  {
    step: "02",
    title: "Personalized Yoga Plan",
    bullets: ["Based on symptoms", "Breathing goals", "Mobility & recovery needs"],
  },
  {
    step: "03",
    title: "Guided Sessions (2x/week)",
    bullets: ["Therapeutic instruction", "Safe progression", "Consistent supervision"],
  },
  {
    step: "04",
    title: "Home Practice Protocol",
    bullets: ["Simple guided routine", "Breathing practice", "Daily continuity"],
  },
  {
    step: "05",
    title: "Progress Reassessment (4–8 weeks)",
    bullets: ["Improvement review", "Tracking", "Plan refinement"],
  },
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

function Pill({ children, light = false }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 16px",
        borderRadius: 999,
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        color: light ? "rgba(255,255,255,0.92)" : C.forest,
        background: light ? "rgba(255,255,255,0.1)" : C.ghost,
        border: `1px solid ${light ? "rgba(255,255,255,0.16)" : C.border}`,
      }}
    >
      {children}
    </span>
  );
}

export default function ClinicalYogaPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => {
    document.title = "Clinical Yoga in Bengaluru | Vaayu Chest & Sleep Specialists";
  }, []);

  const [sec1, v1] = useInView();
  const [sec2, v2] = useInView();
  const [sec3, v3] = useInView();
  const [sec4, v4] = useInView();

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
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .container {
            width: min(1240px, calc(100% - 72px));
          }
        }

        @media (min-width: 1200px) {
          .container {
            width: min(1240px, calc(100% - 96px));
          }
        }

        .section-pad {
          padding: 76px 0;
        }

        @media (min-width: 768px) {
          .section-pad {
            padding: 96px 0;
          }
        }

        @media (min-width: 1200px) {
          .section-pad {
            padding: 112px 0;
          }
        }

        .editorial-grid,
        .zigzag-grid,
        .cta-grid {
          display: grid;
          gap: 32px;
        }

        @media (min-width: 992px) {
          .editorial-grid,
          .zigzag-grid,
          .cta-grid {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
        }

        .floating-panel {
          background: rgba(255,255,255,0.78);
          border: 1px solid ${C.border};
          backdrop-filter: blur(10px);
          border-radius: 28px;
          box-shadow: 0 20px 50px rgba(36,67,52,0.08);
        }

        .chip-band {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .chip {
          padding: 12px 16px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid ${C.border};
          color: ${C.pine};
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.4;
          box-shadow: 0 10px 24px rgba(36,67,52,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .chip:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px rgba(36,67,52,0.10);
          border-color: rgba(36,67,52,0.25);
        }

        .approach-list {
          display: grid;
          gap: 16px;
        }

        .approach-row {
          display: grid;
          grid-template-columns: 54px 1fr;
          gap: 16px;
          align-items: start;
          padding: 18px 0;
          border-bottom: 1px dashed ${C.border};
          transition: transform 0.25s ease;
        }

        .approach-row:hover {
          transform: translateX(6px);
        }

        .journey-rail {
          position: relative;
          display: grid;
          gap: 22px;
        }

        .journey-rail::before {
          content: "";
          position: absolute;
          left: 21px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: linear-gradient(180deg, ${C.fern}, rgba(136,167,147,0.15));
        }

        .journey-item {
          position: relative;
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 18px;
          align-items: start;
        }

        .journey-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: ${C.pine};
          color: white;
          display: grid;
          place-items: center;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          z-index: 2;
          box-shadow: 0 10px 24px rgba(36,67,52,0.18);
        }

        .journey-card {
          padding: 18px 18px 18px 20px;
          border-radius: 22px;
          background: rgba(255,255,255,0.86);
          border: 1px solid ${C.border};
          box-shadow: 0 14px 34px rgba(36,67,52,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .journey-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(36,67,52,0.10);
        }

        .why-strip {
          display: grid;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .why-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .why-tile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.76);
          border: 1px solid ${C.border};
          box-shadow: 0 10px 24px rgba(36,67,52,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .why-tile:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 32px rgba(36,67,52,0.10);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 15% 18%, rgba(136,167,147,0.18), transparent 24%),
            radial-gradient(circle at 84% 20%, rgba(49,88,68,0.14), transparent 22%),
            radial-gradient(circle at 72% 84%, rgba(92,127,109,0.12), transparent 24%);
        }

        @media (max-width: 767px) {
          .editorial-grid {
            padding-top: 120px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .editorial-grid {
            padding-top: 136px !important;
          }
        }

        @media (min-width: 992px) {
          .editorial-grid {
            padding-top: 146px !important;
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
          background: `linear-gradient(135deg, ${C.cream} 0%, #e8f0eb 100%)`,
        }}
      >
        <div className="hero-bg" />

        <div
          className="container editorial-grid"
          style={{
            minHeight: "100vh",
            alignItems: "center",
            paddingTop: 130,
            paddingBottom: 42,
          }}
        >
          <div>
            <motion.div {...fadeUp(0)}>
              <Pill>
                <Flower2 size={13} />
                Vaayu Chest &amp; Sleep Specialists, Bengaluru
              </Pill>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              style={{
                fontSize: "clamp(2.4rem, 5.4vw, 5rem)",
                lineHeight: 1.05,
                fontWeight: 700,
                color: C.pine,
                margin: "18px 0 16px",
                maxWidth: 760,
              }}
            >
              Clinical Yoga in Bengaluru
            </motion.h1>

            <motion.div
              {...fadeUp(0.14)}
              style={{
                fontSize: "1.08rem",
                fontWeight: 700,
                color: C.forest,
                marginBottom: 14,
              }}
            >
              Therapeutic Yoga for Better Breathing, Mobility, and Recovery
            </motion.div>

            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: C.ash,
                maxWidth: 650,
                marginBottom: 30,
              }}
            >
              At Vaayu Chest &amp; Sleep Specialists, Bengaluru, our Clinical Yoga
              program is designed to support patients with breathing difficulties,
              stress, poor sleep, reduced flexibility, and long-term health
              conditions. Unlike general yoga classes, clinical yoga is guided in a
              structured, safe, and medically informed way.
            </motion.p>

            <motion.div
              {...fadeUp(0.28)}
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
                target="_blank"
                rel="noopener noreferrer"
                style={{
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
                }}
              >
                Book a Consultation <ArrowRight size={17} />
              </a>

              <a
                href="#journey"
                style={{
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
                }}
              >
                View Journey
              </a>
            </motion.div>
          </div>

          <div>
            <motion.div
              style={{
                y: heroY,
                borderRadius: 34,
                overflow: "hidden",
                boxShadow: "0 26px 70px rgba(36,67,52,0.18)",
              }}
            >
              <img
                src={heroImg}
                alt="Clinical Yoga"
                style={{
                  width: "100%",
                  minHeight: 460,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS + WHO BENEFITS */}
      <section ref={sec1} className="section-pad" style={{ background: "#fff" }}>
        <div className="container zigzag-grid">
          <motion.div {...revealWhen(v1, 0)}>
            <div
              className="floating-panel"
              style={{
                padding: "28px 24px",
              }}
            >
              <Pill>
                <Sparkles size={13} />
                What is Clinical Yoga?
              </Pill>

              <h2
                style={{
                  fontSize: "clamp(1.9rem, 3vw, 3rem)",
                  lineHeight: 1.18,
                  fontWeight: 700,
                  color: C.pine,
                  margin: "18px 0 16px",
                }}
              >
                Therapeutic and medically informed support
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: C.ash,
                  margin: 0,
                }}
              >
                Clinical Yoga combines therapeutic breathing techniques, gentle
                movement, posture correction, relaxation, and guided recovery
                practices to improve overall physical and mental well-being. It is
                especially helpful for people dealing with respiratory conditions
                such as asthma, COPD, bronchiectasis, post-COVID recovery, sleep
                disorders, fatigue, lifestyle-related issues, and recovery after
                illness.
              </p>
            </div>
          </motion.div>

          <motion.div {...revealWhen(v1, 0.08)}>
            <div
              style={{
                borderRadius: 30,
                overflow: "hidden",
                boxShadow: "0 22px 56px rgba(36,67,52,0.12)",
              }}
            >
              <img
                src={supportImg}
                alt="Therapeutic yoga support"
                style={{
                  width: "100%",
                  minHeight: 420,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="container" style={{ marginTop: 44 }}>
          <motion.div {...revealWhen(v1, 0.12)} style={{ marginBottom: 22 }}>
            <Pill>
              <Smile size={13} />
              Who Can Benefit?
            </Pill>
          </motion.div>

          <motion.div
            {...revealWhen(v1, 0.18)}
            className="chip-band"
          >
            {BENEFITS.map((item, i) => (
              <div key={i} className="chip">
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        ref={sec2}
        className="section-pad"
        style={{
          background: `linear-gradient(135deg, ${C.pine} 0%, ${C.forest} 100%)`,
        }}
      >
        <div className="container zigzag-grid">
          <motion.div {...revealWhen(v2, 0)}>
            <Pill light>
              <Leaf size={13} />
              Our Approach
            </Pill>

            <h2
              style={{
                fontSize: "clamp(1.9rem, 3vw, 3rem)",
                lineHeight: 1.18,
                fontWeight: 700,
                color: "#fff",
                margin: "18px 0 16px",
                maxWidth: 620,
              }}
            >
              Supportive care focused on breathing, relaxation, posture, and recovery
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 620,
              }}
            >
              At Vaayu, Clinical Yoga is offered as part of a supportive care plan
              focused on improving breathing comfort, reducing stress, supporting
              sleep, improving flexibility, and helping patients recover with more
              confidence.
            </p>
          </motion.div>

          <motion.div {...revealWhen(v2, 0.08)}>
            <div className="approach-list">
              {APPROACH.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="approach-row">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: "rgba(255,255,255,0.12)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Icon size={20} color="#fff" />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#fff",
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.94rem",
                          lineHeight: 1.75,
                          color: "rgba(255,255,255,0.78)",
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY + IMAGE STRIP */}
      <section ref={sec3} className="section-pad" style={{ background: C.cream }}>
        <div className="container zigzag-grid">
          <motion.div {...revealWhen(v3, 0)}>
            <div
              style={{
                borderRadius: 30,
                overflow: "hidden",
                boxShadow: "0 22px 56px rgba(36,67,52,0.12)",
              }}
            >
              <img
                src={doctorImg}
                alt="Why choose Vaayu for Clinical Yoga"
                style={{
                  width: "100%",
                  minHeight: 430,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          <motion.div {...revealWhen(v3, 0.08)}>
            <Pill>
              <ShieldCheck size={13} />
              Why Choose Vaayu?
            </Pill>

            <h2
              style={{
                fontSize: "clamp(1.9rem, 3vw, 3rem)",
                lineHeight: 1.18,
                fontWeight: 700,
                color: C.pine,
                margin: "18px 0 18px",
              }}
            >
              Safe, structured, and wellness-focused
            </h2>

            <div className="why-strip">
              {WHY_VAAYU.map((item, i) => (
                <div key={i} className="why-tile">
                  <div
                    style={{
                      width: 38,
                      height: 38,
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
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: C.ink,
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* JOURNEY */}
      <section ref={sec4} id="journey" className="section-pad" style={{ background: "#fff" }}>
        <div className="container">
          <motion.div {...revealWhen(v4, 0)} style={{ marginBottom: 28 }}>
            <Pill>
              <TimerReset size={13} />
              Your Clinical Yoga Journey at Vaayu
            </Pill>
          </motion.div>

          <motion.div {...revealWhen(v4, 0.06)} style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.4vw, 3.4rem)",
                lineHeight: 1.1,
                fontWeight: 700,
                color: C.pine,
                maxWidth: 900,
                margin: 0,
              }}
            >
              A guided path from baseline assessment to progress reassessment
            </h2>
          </motion.div>

          <div className="journey-rail">
            {JOURNEY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={v4 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 + i * 0.08, duration: 0.45 }}
                className="journey-item"
              >
                <div className="journey-dot">{item.step}</div>

                <div className="journey-card">
                  <div
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 700,
                      color: C.pine,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </div>

                  <div style={{ display: "grid", gap: 8 }}>
                    {item.bullets.map((bullet, bi) => (
                      <div
                        key={bi}
                        style={{
                          display: "flex",
                          gap: 8,
                          alignItems: "center",
                          fontSize: "0.92rem",
                          lineHeight: 1.7,
                          color: C.ash,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: C.fern,
                            flexShrink: 0,
                          }}
                        />
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL FEATURE CTA */}
      <section
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
            src={featureImg}
            alt="Clinical Yoga at Vaayu"
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
                "linear-gradient(135deg, rgba(27,42,34,0.88) 0%, rgba(63,105,83,0.78) 100%)",
            }}
          />
        </div>

        <div className="container cta-grid" style={{ position: "relative", zIndex: 2 }}>
          <div>
            <Pill light>
              <Leaf size={13} />
              Book a Consultation
            </Pill>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.4vw, 3.5rem)",
                lineHeight: 1.1,
                fontWeight: 700,
                color: "#fff",
                margin: "18px 0 16px",
              }}
            >
              Looking for Clinical Yoga in Bengaluru?
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 560,
              }}
            >
              Start your wellness journey with expert-guided therapeutic care at
              Vaayu Chest &amp; Sleep Specialists.
            </p>
          </div>

          <div
            className="floating-panel"
            style={{
              padding: "28px 24px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.16)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
            }}
          >
            <div
              style={{
                fontSize: "1.02rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Therapeutic Yoga for:
            </div>

            <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
              {[
                "Better breathing",
                "Calmer recovery",
                "Improved flexibility",
                "Long-term wellness support",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "0.95rem",
                  }}
                >
                  <CheckCircle2 size={16} />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.95rem",
                background: "#fff",
                color: C.pine,
                textDecoration: "none",
              }}
            >
              Book Your Consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}