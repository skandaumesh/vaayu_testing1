import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bath,
  CheckCircle2,
  Clock3,
  Footprints,
  HeartHandshake,
  Home,
  ShieldCheck,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";

import heroImg1 from "../assets/img/ot-daily-life.jpg";
import heroImg from "../assets/img/occ.jpg";
import dailyLifeImg from "../assets/img/ot-independence.jpg";
import breathingImg from "../assets/img/ot-daily-life.jpg";
import independenceImg from "../assets/img/ot-breathing.jpg";

const palette = {
  primary: "#5f6b3c",
  primaryDark: "#4e5931",
  secondary: "#717c50",
  bg: "#eef1f1",
  surface: "#ffffff",
  soft: "#d9dddd",
  text: "#2f3522",
  textLight: "#5f674f",
  border: "rgba(95, 107, 60, 0.18)",
  shadow: "0 18px 45px rgba(0,0,0,0.08)",
};

const challenges = [
  {
    icon: <Footprints size={22} />,
    title: "Feeling breathless while walking or climbing stairs",
    text: "Simple movements can begin to feel tiring when breathlessness affects your day.",
  },
  {
    icon: <Bath size={22} />,
    title: "Getting tired while bathing or dressing",
    text: "Even personal care activities can start taking more effort than they should.",
  },
  {
    icon: <Home size={22} />,
    title: "Difficulty doing household work",
    text: "Daily tasks like cooking, cleaning, and moving around may feel harder than before.",
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Avoiding activities you once enjoyed",
    text: "Fatigue and breathing difficulty can reduce confidence and limit independence.",
  },
];

const helpPoints = [
  "Save your energy during daily tasks",
  "Breathe properly while doing activities",
  "Reduce fatigue and breathlessness",
  "Modify tasks to make them easier",
  "Stay independent and confident",
];

const learnPoints = [
  "Simple ways to sit, stand, and move with less effort",
  "Breathing techniques you can use during daily work",
  "Smarter ways to do activities like cooking, bathing, and dressing",
  "How to pace yourself and avoid exhaustion",
];

const whoBenefits = [
  "COPD",
  "Asthma",
  "Post-COVID recovery",
  "Any long-term breathing difficulty",
];

function useResponsive() {
  const getWidth = () =>
    typeof window !== "undefined" ? window.innerWidth : 1440;

  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const onResize = () => setWidth(getWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    isMobile: width <= 768,
    isTablet: width > 768 && width <= 1024,
  };
}

function ImageWithFallback({ src, alt, height = 460, mobileHeight = 280 }) {
  const [error, setError] = useState(false);
  const { isMobile } = useResponsive();

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: isMobile ? mobileHeight : height,
          borderRadius: isMobile ? "22px" : "24px",
          background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: isMobile ? "0.95rem" : "1rem",
          textAlign: "center",
          padding: "20px",
          boxShadow: palette.shadow,
        }}
      >
        Image placeholder
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      loading="lazy"
      style={{
        width: "100%",
        height: isMobile ? mobileHeight : height,
        objectFit: "cover",
        display: "block",
        borderRadius: isMobile ? "22px" : "24px",
        boxShadow: palette.shadow,
      }}
    />
  );
}

function SectionTag({ children, light = false, center = false }) {
  const { isMobile } = useResponsive();

  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: isMobile ? "8px 14px" : "10px 16px",
          borderRadius: "999px",
          fontSize: isMobile ? "0.78rem" : "0.9rem",
          fontWeight: 700,
          color: light ? "#ffffff" : palette.primary,
          background: light ? "rgba(255,255,255,0.12)" : "rgba(95,107,60,0.10)",
          border: light
            ? "1px solid rgba(255,255,255,0.22)"
            : `1px solid ${palette.border}`,
          marginBottom: isMobile ? "14px" : "18px",
          maxWidth: "100%",
          textAlign: "center",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function SectionTitle({ children, center = false, light = false, as = "h2" }) {
  const Tag = as;
  const { isMobile } = useResponsive();

  return (
    <Tag
      style={{
        margin: "0 0 12px",
        fontSize: isMobile ? "1.55rem" : "clamp(2rem, 4vw, 3.2rem)",
        lineHeight: isMobile ? 1.18 : 1.15,
        color: light ? "#ffffff" : palette.primaryDark,
        textAlign: center ? "center" : "left",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        wordBreak: "normal",
      }}
    >
      {children}
    </Tag>
  );
}

function SectionText({ children, center = false, light = false, maxWidth }) {
  const { isMobile } = useResponsive();

  return (
    <p
      style={{
        margin: 0,
        fontSize: isMobile ? "0.96rem" : "1.02rem",
        lineHeight: isMobile ? 1.7 : 1.8,
        color: light ? "rgba(255,255,255,0.84)" : palette.textLight,
        textAlign: center ? "center" : "left",
        maxWidth: maxWidth || "100%",
      }}
    >
      {children}
    </p>
  );
}

function OccupationalTherapyPage() {
  const { isMobile, isTablet } = useResponsive();

  const containerStyle = {
    width: isMobile ? "calc(100% - 24px)" : "min(1200px, calc(100% - 40px))",
    margin: "0 auto",
  };

  const buttonBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: isMobile ? "13px 18px" : "14px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: isMobile ? "0.92rem" : "0.96rem",
    transition: "all 0.3s ease",
    maxWidth: "100%",
    textAlign: "center",
    lineHeight: 1.2,
  };

  const cardStyle = {
    background: palette.surface,
    border: `1px solid ${palette.border}`,
    borderRadius: isMobile ? "18px" : "24px",
    boxShadow: palette.shadow,
  };

  const sectionSpacing = isMobile ? "42px 0" : "90px 0";
  const twoColGap = isMobile ? "24px" : isTablet ? "34px" : "52px";

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: `
          radial-gradient(circle at top left, rgba(95,107,60,0.10), transparent 22%),
          radial-gradient(circle at top right, rgba(113,124,80,0.14), transparent 22%),
          linear-gradient(180deg, #f7f9f8 0%, ${palette.bg} 100%)
        `,
        color: palette.text,
      }}
    >
      <Helmet>
        <title>Occupational Therapy in Bengaluru | Vaayu</title>
        <meta
          name="description"
          content="Occupational therapy in Bengaluru at Vaayu helps patients with COPD, asthma, post-COVID recovery, and breathing difficulty manage daily activities with less breathlessness and more independence."
        />
        <link
          rel="canonical"
          href="https://vaayuchest.com/rehab-wellness/occupational-therapy"
        />
        <meta
          property="og:title"
          content="Occupational Therapy in Bengaluru | Vaayu"
        />
        <meta
          property="og:description"
          content="Improve daily living, reduce breathlessness, and regain confidence with occupational therapy at Vaayu."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vaayuchest.com/rehab-wellness/occupational-therapy"
        />
        <meta property="og:image" content="https://vaayuchest.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Occupational Therapy in Bengaluru | Vaayu"
        />
        <meta
          name="twitter:description"
          content="Occupational therapy support for daily activities, breathlessness, and independence in Bengaluru."
        />
        <meta name="twitter:image" content="https://vaayuchest.com/og-image.jpg" />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          padding: isMobile ? "84px 0 38px" : "90px 0 70px",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
            gap: isMobile ? "22px" : "48px",
            alignItems: isMobile ? "start" : "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ order: isMobile ? 1 : 1 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: isMobile ? "8px 14px" : "10px 16px",
                borderRadius: "999px",
                background: "rgba(95,107,60,0.10)",
                color: palette.primary,
                border: `1px solid ${palette.border}`,
                fontWeight: 700,
                marginBottom: "16px",
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                maxWidth: "100%",
              }}
            >
              <Sparkles size={15} />
              <span>Occupational Therapy at Vaayu</span>
            </div>

            <h1
              style={{
                margin: "0 0 14px",
                fontSize: isMobile ? "2.1rem" : "clamp(2.1rem, 4vw, 3.6rem)",
                lineHeight: isMobile ? 1.08 : 1.14,
                color: palette.primaryDark,
                letterSpacing: "-0.03em",
                fontWeight: 800,
                maxWidth: isMobile ? "100%" : "760px",
              }}
            >
              Do your <span style={{ color: palette.primary }}>daily activities</span>
              <br />
              with less breathlessness
              <br />
              and more ease
            </h1>

            <p
              style={{
                margin: "0 0 20px",
                maxWidth: "640px",
                color: palette.textLight,
                lineHeight: 1.72,
                fontSize: isMobile ? "1rem" : "1.04rem",
              }}
            >
              Occupational Therapy helps you do your daily activities with less
              breathlessness and more ease. It is not just about exercises. It
              is about helping you live your life independently.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <a
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...buttonBase,
                  background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 100%)`,
                  color: "#fff",
                  boxShadow: "0 16px 34px rgba(95,107,60,0.24)",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                Book a Consultation
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-ot-helps"
                style={{
                  ...buttonBase,
                  background: "#ffffff",
                  color: palette.primary,
                  border: `1px solid ${palette.border}`,
                  width: isMobile ? "100%" : "auto",
                }}
              >
                Explore OT Benefits
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, auto)",
                gap: "10px",
              }}
            >
              {[
                { icon: <Wind size={18} />, text: "Less Breathlessness" },
                { icon: <ShieldCheck size={18} />, text: "Better Independence" },
                { icon: <Clock3 size={18} />, text: "Energy Conservation" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: isMobile ? "12px 14px" : "12px 16px",
                    borderRadius: "16px",
                    background: "#ffffff",
                    border: `1px solid ${palette.border}`,
                    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
                    color: palette.primaryDark,
                    fontWeight: 700,
                    width: "100%",
                    fontSize: isMobile ? "0.92rem" : "0.96rem",
                  }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            style={{ order: isMobile ? 2 : 2 }}
          >
            <div
              style={{
                position: "relative",
                padding: isMobile ? "10px" : "14px",
                borderRadius: isMobile ? "24px" : "32px",
                background: "#ffffff",
                border: `1px solid ${palette.border}`,
                boxShadow: palette.shadow,
              }}
            >
              <ImageWithFallback
                src={heroImg}
                alt="Occupational therapy support at Vaayu"
                height={620}
                mobileHeight={320}
              />

              <div
                style={{
                  position: isMobile ? "static" : "absolute",
                  left: isMobile ? "auto" : "-24px",
                  bottom: isMobile ? "auto" : "110px",
                  marginTop: isMobile ? "12px" : 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: isMobile ? "13px" : "14px",
                  borderRadius: "18px",
                  background: "#ffffff",
                  border: `1px solid ${palette.border}`,
                  boxShadow: "0 16px 34px rgba(0,0,0,0.08)",
                  maxWidth: isMobile ? "100%" : "240px",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                <Activity size={18} color={palette.primary} />
                <div>
                  <strong
                    style={{
                      display: "block",
                      color: palette.primaryDark,
                      fontSize: "0.92rem",
                      marginBottom: "2px",
                    }}
                  >
                    Daily Living Support
                  </strong>
                  <span
                    style={{
                      color: palette.textLight,
                      fontSize: "0.82rem",
                      lineHeight: 1.4,
                    }}
                  >
                    Designed for real-life activities
                  </span>
                </div>
              </div>

              <div
                style={{
                  position: isMobile ? "static" : "absolute",
                  right: isMobile ? "auto" : "-18px",
                  top: isMobile ? "auto" : "80px",
                  marginTop: isMobile ? "12px" : 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: isMobile ? "13px" : "14px",
                  borderRadius: "18px",
                  background: "#ffffff",
                  border: `1px solid ${palette.border}`,
                  boxShadow: "0 16px 34px rgba(0,0,0,0.08)",
                  maxWidth: isMobile ? "100%" : "240px",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                <Users size={18} color={palette.primary} />
                <div>
                  <strong
                    style={{
                      display: "block",
                      color: palette.primaryDark,
                      fontSize: "0.92rem",
                      marginBottom: "2px",
                    }}
                  >
                    Confidence Building
                  </strong>
                  <span
                    style={{
                      color: palette.textLight,
                      fontSize: "0.82rem",
                      lineHeight: 1.4,
                    }}
                  >
                    Small changes, better quality of life
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: isMobile ? "38px 0" : "90px 0 70px" }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              position: "relative",
              maxWidth: "1100px",
              margin: "0 auto",
              textAlign: "center",
              borderRadius: isMobile ? "22px" : "32px",
              overflow: "hidden",
              minHeight: isMobile ? "250px" : "420px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? "24px 18px" : "60px",
              boxShadow: palette.shadow,
              border: `1px solid ${palette.border}`,
              backgroundImage: `linear-gradient(rgba(47, 53, 34, 0.58), rgba(47, 53, 34, 0.58)), url(${heroImg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(95,107,60,0.45) 0%, rgba(113,124,80,0.28) 100%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "850px",
              }}
            >
              <SectionTag light center>
                What is Occupational Therapy?
              </SectionTag>

              <SectionTitle light center as="h2">
                Recovery is not just about your lungs.
                <br />
                It is about getting back to your life.
              </SectionTitle>

              <p
                style={{
                  margin: 0,
                  fontSize: isMobile ? "0.95rem" : "1.04rem",
                  lineHeight: 1.72,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Occupational Therapy helps people with lung conditions manage their
                daily tasks with less effort, better breathing, and more control over
                their routine.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section style={{ padding: isMobile ? "40px 0" : "80px 0" }}>
        <div style={containerStyle}>
          <div style={{ marginBottom: isMobile ? "22px" : "42px" }}>
            <SectionTag>Do You Experience This?</SectionTag>
            <SectionTitle>
              When everyday tasks start feeling harder than they should
            </SectionTitle>
            <SectionText maxWidth="760px">
              You are not alone, and Occupational Therapy can help you regain
              confidence in your daily life.
            </SectionText>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: isMobile ? "14px" : "22px",
            }}
          >
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{
                  ...cardStyle,
                  padding: isMobile ? "18px" : "26px",
                  minHeight: "auto",
                }}
              >
                <div
                  style={{
                    width: isMobile ? "48px" : "56px",
                    height: isMobile ? "48px" : "56px",
                    borderRadius: "16px",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: "14px",
                    background: "rgba(95,107,60,0.10)",
                    color: palette.primary,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: isMobile ? "1.05rem" : "1.1rem",
                    lineHeight: 1.4,
                    color: palette.primaryDark,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: palette.textLight,
                    lineHeight: 1.62,
                    fontSize: isMobile ? "0.95rem" : "0.97rem",
                  }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW OT HELPS */}
      <section id="how-ot-helps" style={{ padding: sectionSpacing }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
            gap: twoColGap,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <ImageWithFallback
              src={dailyLifeImg}
              alt="Patient performing daily activities with ease"
              height={520}
              mobileHeight={260}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionTag>How Does OT Help in Lung Conditions?</SectionTag>
            <SectionTitle>Therapy that supports your real everyday life</SectionTitle>
            <SectionText>
              Occupational Therapists teach you practical ways to do activities
              with less strain, better breathing, and improved independence.
            </SectionText>

            <div
              style={{
                marginTop: "18px",
                display: "grid",
                gap: "10px",
              }}
            >
              {helpPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    ...cardStyle,
                    padding: isMobile ? "13px 14px" : "16px 18px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color={palette.primary}
                    style={{ marginTop: "2px", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      color: palette.text,
                      fontWeight: 700,
                      lineHeight: 1.5,
                      fontSize: isMobile ? "0.94rem" : "1rem",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEARN */}
      <section style={{ padding: sectionSpacing }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
            gap: twoColGap,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionTag>What Will You Learn?</SectionTag>
            <SectionTitle>Simple, practical techniques for daily life</SectionTitle>
            <SectionText>
              OT focuses on useful methods that help you move smarter, conserve
              energy, and stay more comfortable through everyday activities.
            </SectionText>

            <div
              style={{
                marginTop: "18px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "14px",
              }}
            >
              {learnPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  style={{
                    ...cardStyle,
                    padding: isMobile ? "18px 16px" : "24px 20px 22px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background: `linear-gradient(90deg, ${palette.primary}, ${palette.secondary})`,
                    }}
                  />
                  <div
                    style={{
                      fontSize: isMobile ? "1.2rem" : "1.7rem",
                      fontWeight: 800,
                      color: "rgba(95,107,60,0.25)",
                      marginBottom: "8px",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.6,
                      fontWeight: 700,
                      color: palette.text,
                      fontSize: isMobile ? "0.95rem" : "1rem",
                    }}
                  >
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <ImageWithFallback
              src={breathingImg}
              alt="Breathing techniques taught during occupational therapy"
              height={520}
              mobileHeight={260}
            />
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          padding: isMobile ? "44px 0" : "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "rgba(95,107,60,0.08)",
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-80px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(113,124,80,0.10)",
            filter: "blur(24px)",
          }}
        />

        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              maxWidth: "920px",
              margin: "0 auto 24px",
              textAlign: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <SectionTag center>Who Can Benefit?</SectionTag>
            <SectionTitle center>
              Occupational Therapy can support many respiratory conditions
            </SectionTitle>
            <SectionText center>
              OT can benefit individuals who want to regain control over daily life
              while managing breathlessness and fatigue.
            </SectionText>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: isMobile ? "14px" : "22px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {whoBenefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{
                  position: "relative",
                  background: "linear-gradient(180deg, #ffffff 0%, #f7f9f6 100%)",
                  border: `1px solid ${palette.border}`,
                  borderRadius: isMobile ? "18px" : "22px",
                  padding: isMobile ? "18px 16px" : "34px 22px",
                  textAlign: "center",
                  boxShadow: "0 14px 34px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "5px",
                    background: `linear-gradient(90deg, ${palette.primary}, ${palette.secondary})`,
                  }}
                />

                <div
                  style={{
                    width: isMobile ? "54px" : "68px",
                    height: isMobile ? "54px" : "68px",
                    margin: "0 auto 14px",
                    borderRadius: "18px",
                    display: "grid",
                    placeItems: "center",
                    background: `linear-gradient(135deg, rgba(95,107,60,0.14) 0%, rgba(113,124,80,0.18) 100%)`,
                    color: palette.primary,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  <Wind size={20} />
                </div>

                <div
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: palette.secondary,
                    marginBottom: "8px",
                  }}
                >
                  Condition
                </div>

                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: isMobile ? "1rem" : "1.14rem",
                    color: palette.primaryDark,
                    fontWeight: 800,
                    lineHeight: 1.3,
                  }}
                >
                  {item}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: isMobile ? "0.93rem" : "0.95rem",
                    lineHeight: 1.6,
                    color: palette.textLight,
                  }}
                >
                  Occupational Therapy can help make daily life easier, safer, and
                  less exhausting.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section style={{ padding: sectionSpacing }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
            gap: twoColGap,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <ImageWithFallback
              src={independenceImg}
              alt="Independent living support through occupational therapy"
              height={520}
              mobileHeight={260}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <SectionTag>Why is OT Important?</SectionTag>
            <SectionTitle>
              Because recovery is not just about your lungs. It is about getting
              back to your life.
            </SectionTitle>
            <SectionText>
              Occupational Therapy bridges the gap between medical treatment and
              day-to-day living. It helps you return to routine activities with
              more comfort, safety, and confidence.
            </SectionText>

            <div
              style={{
                marginTop: "18px",
                display: "grid",
                gap: "10px",
              }}
            >
              {[
                {
                  icon: <ShieldCheck size={20} />,
                  text: "Build independence in everyday tasks",
                },
                {
                  icon: <Activity size={20} />,
                  text: "Improve energy use through better movement habits",
                },
                {
                  icon: <HeartHandshake size={20} />,
                  text: "Regain confidence in your daily life",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    ...cardStyle,
                    padding: isMobile ? "13px 14px" : "16px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ color: palette.primary, flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: palette.text,
                      fontSize: isMobile ? "0.94rem" : "1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Care / Backlinks */}
      <section style={{ padding: isMobile ? "10px 0 36px" : "30px 0 70px" }}>
        <div style={containerStyle}>
          <div
            style={{
              ...cardStyle,
              padding: isMobile ? "18px 14px" : "28px 26px",
              background: "#f7faf3",
            }}
          >
            <SectionTag>Related Care at Vaayu</SectionTag>
            <SectionTitle as="h2">Explore related services</SectionTitle>
            <SectionText>
              Occupational Therapy often works best alongside respiratory,
              rehabilitation, and wellness support.
            </SectionText>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "10px",
                marginTop: "18px",
              }}
            >
              {[
                { to: "/specialty-clinic/asthma", label: "Asthma" },
                { to: "/specialty-clinic/copd", label: "COPD" },
                { to: "/specialty-clinic/ild", label: "ILD" },
                {
                  to: "/pulmonary-rehab/pulmonary",
                  label: "Pulmonary Rehabilitation",
                },
                { to: "/sleep-clinic", label: "Sleep Clinic" },
                {
                  to: "/rehab-wellness/stress-management",
                  label: "Stress Management",
                },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    ...buttonBase,
                    background: "#fff",
                    color: palette.primary,
                    border: `1px solid ${palette.border}`,
                    width: "100%",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "8px 0 52px" : "30px 0 100px" }}>
        <div style={containerStyle}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              borderRadius: isMobile ? "22px" : "34px",
              padding: isMobile ? "24px 16px" : "54px",
              background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 100%)`,
              boxShadow: "0 28px 60px rgba(95,107,60,0.22)",
            }}
          >
            <SectionTag light>Take the First Step</SectionTag>
            <SectionTitle light as="h2">
              Start your journey towards a better quality of life
            </SectionTitle>
            <SectionText light>
              Begin your journey towards less breathlessness, more independence,
              and better quality of life.
            </SectionText>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, auto)",
                gap: "10px 14px",
                margin: "18px 0 22px",
                color: "#fff",
                fontWeight: 700,
                fontSize: isMobile ? "0.92rem" : "1rem",
              }}
            >
              <span>✔ Less breathlessness</span>
              <span>✔ More independence</span>
              <span>✔ Better quality of life</span>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <a
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: isMobile ? "100%" : "auto",
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    width: isMobile ? "100%" : "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: isMobile ? "13px 18px" : "14px 22px",
                    borderRadius: "999px",
                    border: "none",
                    background: "#ffffff",
                    color: palette.primary,
                    fontWeight: 800,
                    cursor: "pointer",
                    fontSize: isMobile ? "0.92rem" : "0.96rem",
                  }}
                >
                  BOOK AN APPOINTMENT
                </button>
              </a>

              <Link
                to="/rehab-wellness/therapy"
                style={{
                  ...buttonBase,
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "#ffffff",
                  background: "transparent",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                View Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default OccupationalTherapyPage;