import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import HeroImage from "/src/assets/img/sleeping.jpg";
import DisorderImg from "/src/assets/img/sleep-eval.jpg";
import DisorderImg1 from "/src/assets/img/sl.jpg";
import SleepImage from "/src/assets/img/sl2.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const T = {
  bg: "#58623b",
  surface: "#4f5831",
  green: "#61724e",
  sage: "#9fab90",
  greenL: "#d7dec9",
  cream: "#dce4cd",
  light: "#eef4e9",
  textDark: "#2F361A",
  muted: "#5f6b50",
};

const features = [
  {
    title: "Restoration",
    description:
      "Sleep repairs muscles, boosts immunity, and allows the brain to consolidate memories and remove toxins.",
  },
  {
    title: "Growth and Development",
    description:
      "Essential during childhood and adolescence for hormone release and physical development.",
  },
  {
    title: "Learning and Memory",
    description:
      "Sleep helps the brain process, organize, and retain information gathered during the day.",
  },
  {
    title: "Mood and Behavior",
    description:
      "A full night’s rest supports emotional regulation and reduces risks of irritability and anxiety.",
  },
  {
    title: "Heart Health",
    description:
      "Good sleep lowers the risk of heart disease, stroke, and high blood pressure.",
  },
  {
    title: "Respiratory Health",
    description:
      "Sleep and breathing are closely linked. Disorders like sleep apnea disrupt both.",
  },
  {
    title: "Weight Control",
    description:
      "Proper rest balances hunger hormones like ghrelin and leptin, helping manage body weight.",
  },
];

const sleepServices = [
  "Multidisciplinary discussion for all sleep cases to individualize therapy",
  "Diagnostic sleep studies (home based and center based)",
  "Titration studies",
  "Positive pressure therapy (BiPAP and CPAP)",
  "Mask fitting",
  "Cognitive behavior therapy for insomnia (CBT-I)",
  "Mandibular advancement devices (MADs) for OSA",
  "Surgical correction in select cases",
  "Weight loss program",
  "Diagnostic sleep endoscopies",
];

const services = [
  "Diagnostic sleep studies",
  "Titration studies",
  "Diagnostic sleep endoscopies",
  "Positive pressure therapy",
  "Surgical correction in selected cases",
  "Advanced dental devices",
  "Psychological assessment and therapy for insomnia",
];

const specialistBlocks = [
  {
    title: "Pulmonologist",
    description: "Experts in lung and breathing disorders impacting your sleep.",
  },
  {
    title: "Sleep ENT Specialist",
    description:
      "Addressing structural airway issues like nasal blockages or snoring.",
  },
  {
    title: "Dental Sleep Specialist",
    description: "Provides dental devices to help manage sleep apnea.",
  },
  {
    title: "Psychologist",
    description: "Helps manage insomnia and anxiety with behavioral therapy.",
  },
  {
    title: "Nutrition and Weight Loss Specialist",
    description:
      "Supports sleep health through lifestyle and weight management.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const SleepQuiz = () => {
  const questions = [
    "Do you snore?",
    "Has your partner noticed you having choking sounds between your snoring?",
    "Do you ever get up in the middle of the night gasping for air or feeling choked?",
    "Do you ever get up in the morning tired or with a headache?",
    "Do you feel exhausted during the day like you haven't slept enough?",
    "Do you have difficulty in concentrating at work?",
  ];

  const [answers, setAnswers] = React.useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = React.useState(false);
  const [totalScore, setTotalScore] = React.useState(0);
  const [error, setError] = React.useState("");

  const handleAnswer = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
    setShowResult(false);
    setError("");
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) {
      setError("⚠️ Please answer all questions before getting your score.");
      setShowResult(false);
      return;
    }

    const score = answers.reduce((acc, val) => acc + val, 0);
    setTotalScore(score);
    setShowResult(true);
    setError("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzMcHomAGKy5vyV7AmoyDFXfm9lPb3NlC5A-T3VeSQ1nE1Nc5Tug-RuX-Xl2ZMktQLi/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Auto User",
            email: "none",
            answers,
            score,
          }),
        }
      );
    } catch (err) {
      console.error("❌ Error sending data:", err);
    }
  };

  return (
    <div className="sleep-quiz-card">
      <div className="sleep-quiz-list">
        {questions.map((q, idx) => (
          <div key={idx} className="sleep-question">
            <p>
              {idx + 1}. {q}
            </p>

            <div className="sleep-answer-row">
              {[
                ["No", 0],
                ["Maybe", 1],
                ["Yes", 2],
              ].map(([label, value]) => (
                <button
                  key={label}
                  onClick={() => handleAnswer(idx, value)}
                  className={answers[idx] === value ? "active" : ""}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sleep-quiz-submit">
        <button onClick={handleSubmit}>Get My Score</button>
        {error && <p className="sleep-error">{error}</p>}
      </div>

      {showResult && (
        <div className="sleep-result">
          <p className="sleep-score">Your Total Score: {totalScore}</p>

          {totalScore > 4 ? (
            <div>
              <p className="sleep-risk">
                Your score suggests possible symptoms of Obstructive Sleep Apnea
                (OSA).
              </p>

              <motion.a
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sleep-result-btn"
              >
                Book Your Sleep Study Today!
              </motion.a>
            </div>
          ) : (
            <p className="sleep-low-risk">
              Your responses indicate low risk for OSA. Maintain healthy sleep habits!
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="sleep-more-link"
          >
            <a href="#sleep-info">
              Explore More About Sleep <span>↓</span>
            </a>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const SleepClinic = () => {
  return (
    <div className="sleep-page">
      <Helmet>
        <title>
          Best Sleep Clinic in Bengaluru | Sleep Apnea, Insomnia & Snoring Treatment - Vaayu Chest & Sleep specialists
        </title>
        <meta
          name="description"
          content="Visit Vaayu Sleep Clinic in Bengaluru for expert diagnosis and treatment of sleep apnea, insomnia, snoring, and other sleep disorders. CPAP/BiPAP therapy, dental devices, CBT-I, and multidisciplinary care under one roof."
        />
        <meta
          name="keywords"
          content="sleep clinic Bengaluru, sleep apnea treatment, insomnia doctor, snoring treatment, CPAP therapy, BiPAP therapy, sleep study Bengaluru, sleep disorder specialist, Vaayu clinic, sleep lab near me"
        />
        <link rel="canonical" href="https://vaayuchest.com/sleep-clinic" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Vaayu Sleep Clinic",
            "url": "https://vaayuchest.com/sleep-clinic",
            "image": "https://vaayuchest.com/assets/img/sleep-eval.jpg",
            "description": "Comprehensive sleep clinic in Bengaluru offering diagnosis and treatment for sleep apnea, insomnia, snoring, and other sleep disorders.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jayanagar, Bengaluru, Karnataka, India",
              "addressLocality": "Bengaluru",
              "addressRegion": "KA",
              "postalCode": "560011",
              "addressCountry": "IN"
            },
            "medicalSpecialty": "Sleep Medicine",
            "openingHours": "Mo-Sa 09:00-18:00",
            "telephone": "+91-6364928680"
          }`}
        </script>
      </Helmet>

      <style>{`
        .sleep-page,
        .sleep-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        html,
        body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .sleep-page {
          background: ${T.light};
          color: ${T.textDark};
          overflow-x: hidden;
          width: 100%;
        }

        .sleep-page img {
          max-width: 100%;
          display: block;
        }

        .sleep-page section {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .sleep-wrap {
          width: min(92%, 1240px);
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .sleep-chip {
          display: inline-flex;
          align-items: center;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(255,248,239,.12);
          border: 1px solid rgba(215,222,201,.28);
          color: ${T.greenL};
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .sleep-chip.light {
          background: ${T.cream};
          color: ${T.green};
          border: 1px solid rgba(97,114,78,.16);
        }

        .sleep-hero {
          position: relative;
          min-height: 90svh;
          display: flex;
          align-items: center;
          padding: 132px 0 88px;
          background-image: url(${HeroImage});
          background-size: cover;
          background-position: center;
        }

        .sleep-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(47,54,26,.92) 0%, rgba(47,54,26,.78) 48%, rgba(97,114,78,.46) 100%);
        }

        .sleep-hero-card {
          max-width: 920px;
          padding: 46px 48px;
          border-radius: 34px;
          background: rgba(255,248,239,.10);
          border: 1px solid rgba(215,222,201,.25);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 28px 80px rgba(47,54,26,.35);
        }

        .sleep-hero h1 {
          margin: 22px 0 0;
          max-width: 820px;
          font-size: clamp(2.15rem, 5vw, 4.35rem);
          font-weight: 600;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: ${T.cream};
        }

        .sleep-hero p {
          margin: 22px 0 0;
          max-width: 760px;
          color: ${T.greenL};
          font-size: 15.5px;
          line-height: 1.78;
        }

        .sleep-hero a,
        .sleep-result-btn,
        .sleep-cta-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 999px;
          font-weight: 700;
        }

        .sleep-hero-btn {
          margin-top: 32px;
          padding: 14px 30px;
          background: ${T.cream};
          color: ${T.green};
          font-size: 15px;
          border: 1px solid rgba(255,248,239,.75);
          box-shadow: 0 16px 38px rgba(47,54,26,.22);
        }

        .sleep-section {
          padding: 86px 0;
          background: ${T.light};
        }

        .sleep-section.dark {
          background: ${T.bg};
        }

        .sleep-section.white {
          background: ${T.cream};
        }

        .sleep-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px;
        }

        .sleep-head h2 {
          margin: 18px 0 0;
          font-size: clamp(1.85rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: ${T.textDark};
        }

        .sleep-head p {
          margin: 14px auto 0;
          max-width: 650px;
          color: ${T.muted};
          font-size: 15px;
          line-height: 1.75;
        }

        .sleep-grid-2,
        .sleep-grid-3,
        .sleep-grid-5,
        .sleep-services-grid {
          display: grid;
          min-width: 0;
        }

        .sleep-grid-2 > *,
        .sleep-grid-3 > *,
        .sleep-grid-5 > *,
        .sleep-services-grid > * {
          min-width: 0;
        }

        .sleep-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(28px, 5vw, 52px);
          align-items: center;
        }

        .sleep-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .sleep-grid-5 {
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .sleep-services-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .sleep-card {
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 26px;
          padding: 26px;
          box-shadow: 0 18px 45px rgba(47,54,26,.10);
        }

        .sleep-card h3,
        .sleep-card h4 {
          margin: 0;
          color: ${T.textDark};
          font-weight: 600;
          line-height: 1.35;
        }

        .sleep-card h3 {
          font-size: 20px;
        }

        .sleep-card h4 {
          font-size: 16px;
        }

        .sleep-card p {
          margin: 10px 0 0;
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.72;
        }

        .sleep-img-card {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(47,54,26,.14);
          border: 1px solid rgba(97,114,78,.12);
        }

        .sleep-img-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
        }

        .sleep-content h2,
        .sleep-unique h3 {
          margin: 18px 0 0;
          font-size: clamp(1.85rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: ${T.textDark};
        }

        .sleep-content p {
          margin-top: 16px;
          color: ${T.muted};
          font-size: 15px;
          line-height: 1.8;
        }

        .sleep-content a,
        .sleep-callout a {
          color: ${T.green};
          font-weight: 700;
          text-decoration: underline;
        }

        .sleep-list {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 11px;
        }

        .sleep-list li {
          padding: 13px 15px;
          border-radius: 16px;
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.12);
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.6;
        }

        .sleep-services-section {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          padding: 52px 34px;
          background-image: url(${HeroImage});
          background-size: cover;
          background-position: center;
          box-shadow: 0 24px 65px rgba(47,54,26,.18);
        }

        .sleep-services-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(47,54,26,.90), rgba(79,88,49,.78));
        }

        .sleep-services-inner {
          position: relative;
          z-index: 2;
        }

        .sleep-services-inner h2 {
          text-align: center;
          margin: 0 0 28px;
          color: ${T.cream};
          font-size: clamp(1.85rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.2;
        }

        .sleep-service-item {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,248,239,.12);
          border: 1px solid rgba(215,222,201,.18);
          color: ${T.greenL};
          font-size: 14px;
          line-height: 1.6;
        }

        .sleep-callout {
          text-align: center;
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 30px;
          padding: 44px 30px;
          box-shadow: 0 22px 55px rgba(47,54,26,.10);
        }

        .sleep-callout h2 {
          margin: 0;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          font-weight: 600;
          color: ${T.textDark};
          line-height: 1.2;
        }

        .sleep-callout p {
          margin: 15px auto 0;
          max-width: 720px;
          color: ${T.muted};
          font-size: 15px;
          line-height: 1.75;
        }

        .sleep-unique {
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 30px;
          padding: 34px;
          box-shadow: 0 22px 55px rgba(47,54,26,.10);
        }

        .sleep-quiz-section {
          background: ${T.light};
          padding: 86px 0;
        }

        .sleep-quiz-shell {
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.14);
          border-radius: 30px;
          padding: 38px;
          box-shadow: 0 22px 55px rgba(47,54,26,.10);
        }

        .sleep-quiz-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 28px;
          border: 1px solid rgba(97,114,78,.12);
        }

        .sleep-quiz-list {
          display: grid;
          gap: 22px;
        }

        .sleep-question p {
          margin: 0 0 10px;
          color: ${T.textDark};
          font-weight: 600;
          font-size: 15px;
          line-height: 1.5;
        }

        .sleep-answer-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .sleep-answer-row button,
        .sleep-quiz-submit button {
          border: 1px solid rgba(97,114,78,.18);
          cursor: pointer;
          border-radius: 999px;
          font-weight: 700;
          transition: .25s ease;
        }

        .sleep-answer-row button {
          padding: 9px 18px;
          background: ${T.light};
          color: ${T.muted};
        }

        .sleep-answer-row button.active {
          background: ${T.green};
          color: ${T.cream};
          border-color: ${T.green};
        }

        .sleep-quiz-submit {
          text-align: center;
          margin-top: 30px;
        }

        .sleep-quiz-submit button {
          padding: 13px 28px;
          background: ${T.green};
          color: ${T.cream};
          box-shadow: 0 14px 34px rgba(47,54,26,.16);
        }

        .sleep-error {
          margin: 15px 0 0;
          color: #b42318;
          font-weight: 600;
        }

        .sleep-result {
          margin-top: 32px;
          text-align: center;
        }

        .sleep-score {
          color: ${T.green};
          font-size: 18px;
          font-weight: 700;
        }

        .sleep-risk {
          color: #b42318;
          font-weight: 600;
          margin: 16px 0;
        }

        .sleep-low-risk {
          color: #137333;
          font-weight: 600;
          margin-top: 16px;
        }

        .sleep-result-btn {
          padding: 13px 26px;
          background: ${T.green};
          color: ${T.cream};
          box-shadow: 0 14px 34px rgba(47,54,26,.16);
        }

        .sleep-more-link {
          margin-top: 30px;
        }

        .sleep-more-link a {
          color: ${T.green};
          font-weight: 700;
          text-decoration: none;
        }

        .sleep-more-link span {
          display: inline-block;
          margin-left: 6px;
        }

        @media (max-width: 1100px) {
          .sleep-grid-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .sleep-grid-2,
          .sleep-grid-3,
          .sleep-services-grid {
            grid-template-columns: 1fr !important;
          }

          .sleep-hero-card {
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .sleep-wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .sleep-hero {
            min-height: auto;
            padding: 112px 0 70px;
          }

          .sleep-hero-card,
          .sleep-quiz-shell,
          .sleep-unique,
          .sleep-callout,
          .sleep-services-section {
            border-radius: 24px;
            padding: 24px;
          }

          .sleep-hero h1 {
            font-size: clamp(2rem, 9vw, 3.2rem);
          }

          .sleep-hero p,
          .sleep-head p,
          .sleep-content p,
          .sleep-callout p {
            font-size: 14px;
          }

          .sleep-section,
          .sleep-quiz-section {
            padding: 64px 0;
          }

          .sleep-head {
            text-align: left;
            margin-bottom: 34px;
          }

          .sleep-grid-5 {
            grid-template-columns: 1fr;
          }

          .sleep-img-card img {
            height: 300px;
          }

          .sleep-card {
            border-radius: 22px;
            padding: 22px;
          }

          .sleep-answer-row {
            display: grid;
            grid-template-columns: 1fr;
          }

          .sleep-answer-row button,
          .sleep-quiz-submit button,
          .sleep-hero-btn,
          .sleep-result-btn {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .sleep-page section {
            min-height: auto;
          }

          .sleep-page img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }

          [style*="backdrop-filter"] {
            -webkit-backdrop-filter: blur(18px);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="sleep-hero">
        <div className="sleep-wrap">
          <motion.div
            className="sleep-hero-card"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="sleep-chip">Comprehensive Sleep Center</span>

            <h1>Comprehensive Sleep Center in Bengaluru</h1>

            <p>
              Sleep, a fundamental aspect of human life, plays a critical role in
              maintaining overall health and well-being. At{" "}
              <strong style={{ color: T.cream }}>VAAYU</strong>, we specialize in
              diagnosing and treating sleep disorders — including obstructive
              sleep apnea (OSA), insomnia, and snoring — using evidence-based
              medicine and multidisciplinary care.
              <br />
              <br />
              Many patients with sleep issues also have underlying respiratory
              conditions like{" "}
              <a href="/specialty-clinic/asthma">asthma</a>,{" "}
              <a href="/specialty-clinic/copd">COPD</a>, or{" "}
              <a href="/specialty-clinic/ild">interstitial lung disease (ILD)</a>,
              which require integrated care.
            </p>

            <a href={EKA} className="sleep-hero-btn">
              Book Sleep Evaluation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sleep Quiz Section */}
      <section className="sleep-quiz-section">
        <div className="sleep-wrap">
          <motion.div
            className="sleep-quiz-shell"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="sleep-head">
              <span className="sleep-chip light">Sleep Health Quiz</span>
              <h2>Check your sleep apnea risk</h2>
              <p>
                Answer the following questions to check if you may have signs of
                Obstructive Sleep Apnea (OSA).
              </p>
            </div>

            <SleepQuiz />
          </motion.div>
        </div>
      </section>

      {/* Sleep Benefits */}
      <section id="sleep-info" className="sleep-section">
        <div className="sleep-wrap">
          <div className="sleep-head">
            <span className="sleep-chip light">Why Sleep Matters</span>
            <h2>Sleep supports every part of your health</h2>
          </div>

          <div className="sleep-grid-3">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="sleep-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Block */}
      <section className="sleep-section white">
        <div className="sleep-wrap sleep-grid-2">
          <motion.div
            className="sleep-img-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img
              src={DisorderImg}
              alt="Sleep disorder evaluation and diagnosis in Bengaluru"
            />
          </motion.div>

          <motion.div
            className="sleep-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="sleep-chip light">Sleep Disorder Evaluation</span>
            <h2>The Need To Evaluate Sleep Disorders</h2>

            <p>
              Sleep disorders often remain undiagnosed and untreated, leading to
              long-term health issues. We evaluate conditions such as insomnia,
              obstructive sleep apnea (OSA), restless legs syndrome, narcolepsy,
              and circadian rhythm disorders — with a focus on respiratory-related
              sleep problems.
              <br />
              <br />
              Patients may also benefit from{" "}
              <a href="/pulmonary-rehab">pulmonary rehabilitation programs</a>{" "}
              and{" "}
              <a href="/rehab-wellness/stress-management">
                stress management therapy
              </a>{" "}
              to improve sleep quality and breathing patterns.
            </p>

            <ul className="sleep-list">
              <li>
                <strong>Insomnia:</strong> Difficulty falling or staying asleep.
              </li>
              <li>
                <strong>Obstructive Sleep Apnea (OSA):</strong> Episodes of
                breathing cessation during sleep.
              </li>
              <li>
                <strong>Restless Legs Syndrome (RLS):</strong> Urge to move legs,
                especially at night.
              </li>
              <li>
                <strong>Narcolepsy:</strong> Excessive daytime sleepiness.
              </li>
              <li>
                <strong>Circadian Rhythm Disorders:</strong> Misaligned sleep-wake
                cycles.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="sleep-section">
        <div className="sleep-wrap sleep-grid-2">
          <motion.div
            className="sleep-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="sleep-chip light">Better Sleep Habits</span>
            <h2>Tips for Improving Your Sleep</h2>

            <ul className="sleep-list">
              <li>Stick to a regular sleep schedule — even on weekends.</li>
              <li>Create a relaxing bedtime routine.</li>
              <li>Ensure your bedroom is dark, quiet, and cool.</li>
              <li>Avoid caffeine and alcohol close to bedtime.</li>
              <li>Exercise regularly — but not just before bed.</li>
              <li>See a sleep specialist if you experience ongoing issues.</li>
            </ul>
          </motion.div>

          <motion.div
            className="sleep-img-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img src={SleepImage} alt="Healthy sleeping environment for better rest" />
          </motion.div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="sleep-section">
        <div className="sleep-wrap">
          <motion.div
            className="sleep-services-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="sleep-services-inner">
              <h2>Sleep Services Offered</h2>

              <div className="sleep-services-grid">
                {services.map((item, idx) => (
                  <div key={idx} className="sleep-service-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="sleep-section">
        <div className="sleep-wrap">
          <motion.div
            className="sleep-callout"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Why Choose Vaayu’s Sleep Clinic?</h2>

            <p>
              We provide integrated care for sleep apnea, insomnia, snoring, and
              other sleep disorders — with Pulmonology, ENT, Dental, and
              Psychological specialists working together for lasting results.
              <br />
              <br />
              Explore our{" "}
              <a href="/specialty-clinic">specialty respiratory clinics</a> for
              comprehensive lung and sleep care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialist Blocks */}
      <section className="sleep-section">
        <div className="sleep-wrap">
          <div className="sleep-head">
            <span className="sleep-chip light">Multidisciplinary Team</span>
            <h2>Specialists working together for better sleep</h2>
          </div>

          <div className="sleep-grid-5">
            {specialistBlocks.map((block, idx) => (
              <motion.div
                key={idx}
                className="sleep-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h4>{block.title}</h4>
                <p>{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Box */}
      <section className="sleep-section">
        <div className="sleep-wrap">
          <motion.div
            className="sleep-unique sleep-grid-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <span className="sleep-chip light">Complete Sleep Care</span>
              <h3>What Makes Our Sleep Care Unique</h3>

              <ul className="sleep-list">
                {sleepServices.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="sleep-img-card">
              <img
                src={DisorderImg1}
                alt="Advanced sleep disorder treatments in Bengaluru"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SleepClinic;