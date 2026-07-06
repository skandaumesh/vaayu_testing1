import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

import heroImage from "../assets/img/copd.jpg";
import consultImage from "../assets/img/sarcoid-consult.jpg";
import causesImage from "../assets/img/l.jpeg";
import symptomsImage from "../assets/img/copd.png";
import rehabImage from "../assets/img/a2.jpg";
import journeyBg from "../assets/img/BANNER2.jpg";
import diagnosisBg from "../assets/img/dia.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const COPD_CARE = [
  ["COPD Specialist Review", "Detailed assessment of breathlessness, cough, mucus, flare-ups, inhaler use, and oxygen needs."],
  ["Advanced Lung Testing", "PFT, DLCO, FeNO, 6-minute walk test, and other tests to understand COPD severity."],
  ["Pulmonary Rehabilitation", "Structured rehab to improve stamina, breathing control, fatigue, and daily activity."],
  ["Flare-up Prevention", "Care plans to reduce repeated infections, hospital visits, and worsening episodes."],
];

const SYMPTOMS = [
  "Breathlessness while walking or climbing stairs",
  "Long-term cough with or without mucus",
  "Wheezing or chest tightness",
  "Frequent chest infections",
  "Reduced stamina and tiredness",
  "Oxygen dependency",
  "Difficulty doing daily activities",
  "Repeated hospital visits for breathing problems",
];

const CAUSES = [
  ["Smoking or beedi exposure", "A common cause of emphysema, chronic bronchitis, and airflow limitation."],
  ["Cooking smoke exposure", "Biomass smoke can cause COPD, especially in long-term household exposure."],
  ["Pollution and dust", "Traffic pollution, construction dust, and workplace exposure can worsen COPD."],
  ["Post-TB lung damage", "Previous tuberculosis can leave long-term airway damage and breathlessness."],
];

const DIAGNOSTICS = [
  ["Spirometry / PFT", "Confirms airflow limitation and helps grade COPD severity."],
  ["DLCO", "Assesses gas exchange and emphysema-related damage."],
  ["FeNO", "Helps detect airway inflammation and asthma-COPD overlap."],
  ["6-Minute Walk Test", "Measures stamina, oxygen drop, and rehab progress."],
  ["Sleep Assessment", "Checks sleep apnea overlap in COPD patients."],
  ["Lung Ultrasound", "Supports outpatient lung and heart-related assessment."],
];

const REHAB = [
  "Breathlessness reduction",
  "Endurance training",
  "Respiratory muscle training",
  "Airway clearance",
  "Oxygen optimisation",
  "Nutrition support",
  "Anxiety and breathing confidence",
  "Home exercise planning",
];

const FAQS = [
  {
    q: "What makes Vaayu’s COPD care different?",
    a: "Vaayu combines COPD specialist consultation, advanced lung diagnostics, pulmonary rehabilitation, wellness support, and follow-up in an outpatient setting.",
  },
  {
    q: "Can COPD be cured?",
    a: "COPD cannot be fully reversed, but symptoms can be controlled and quality of life can improve with the right treatment, rehabilitation, and follow-up.",
  },
  {
    q: "When should I see a COPD specialist?",
    a: "See a specialist if breathlessness affects daily life, infections are frequent, inhalers are not helping enough, or oxygen support is needed.",
  },
  {
    q: "Does pulmonary rehabilitation help COPD?",
    a: "Yes. Pulmonary rehabilitation can improve stamina, reduce breathlessness, support oxygen management, and help patients perform daily activities better.",
  },
  {
    q: "Can COPD patients on oxygen do rehabilitation?",
    a: "Yes. Oxygen-dependent patients can do supervised rehabilitation with monitoring and a personalised exercise plan.",
  },
  {
    q: "Can COPD care reduce hospital visits?",
    a: "Structured COPD care, inhaler review, rehab, action plans, and follow-up can help reduce repeated flare-ups and hospital visits.",
  },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="copd-faq">
      <button className="copd-faq-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="copd-faq-answer">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const COPDClinic = () => {
  return (
    <motion.div className="copd-page" initial="hidden" animate="visible" variants={fadeInUp}>
      <Helmet>
        <title>COPD Specialist & COPD Rehabilitation in Bengaluru | Vaayu</title>
        <meta
          name="description"
          content="COPD specialist care in Bengaluru at Vaayu. COPD rehabilitation, emphysema care, chronic bronchitis treatment, breathlessness clinic, lung testing, and outpatient COPD follow-up."
        />
        <meta
          name="keywords"
          content="COPD specialist Bengaluru, COPD rehabilitation Bengaluru, COPD treatment Bengaluru, emphysema treatment Bengaluru, chronic bronchitis treatment, breathlessness clinic Bengaluru, pulmonary rehabilitation Bengaluru, COPD care near me, COPD lung function test, COPD oxygen rehabilitation, Vaayu COPD clinic"
        />
        <link rel="canonical" href="https://vaayuchest.com/specialty-clinic/copd" />
      </Helmet>

      <style>{`
        .copd-page,
        .copd-page * {
          box-sizing: border-box;
        }

        .copd-page {
          --dark: #2f361a;
          --main: #556b2f;
          --soft: #61724e;
          --light: #eef3e8;
          --cream: #f7f8f3;
          --white: #ffffff;

          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          background: var(--cream);
          color: var(--dark);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .copd-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .copd-hero {
          min-height: 74svh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 18px;
          position: relative;
        }

        .copd-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(47, 54, 26, 0.76);
        }

        .copd-hero-box {
          position: relative;
          z-index: 1;
          width: min(92%, 880px);
          text-align: center;
          background: rgba(247, 248, 243, 0.96);
          border: 1px solid rgba(85, 107, 47, 0.22);
          border-radius: 34px;
          padding: clamp(28px, 5vw, 54px);
          box-shadow: 0 28px 80px rgba(47, 54, 26, 0.28);
        }

        .copd-kicker {
          color: var(--main);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .copd-hero h1 {
          font-size: clamp(2.05rem, 5vw, 4.45rem);
          line-height: 1.05;
          letter-spacing: -0.05em;
          font-weight: 700;
          color: var(--dark);
          margin: 0;
        }

        .copd-hero p {
          margin: 18px auto 0;
          max-width: 760px;
          font-size: clamp(15px, 1.45vw, 18px);
          line-height: 1.75;
          color: var(--dark);
        }

        .copd-btn-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .copd-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 999px;
          background: var(--main);
          color: var(--white);
          text-decoration: none;
          font-size: 14.5px;
          font-weight: 750;
          border: 1px solid var(--main);
          transition: 0.25s ease;
        }

        .copd-btn.secondary {
          background: var(--light);
          color: var(--dark);
          border-color: rgba(85, 107, 47, 0.35);
        }

        .copd-btn:hover {
          transform: translateY(-2px);
          background: var(--dark);
          color: var(--white);
        }

        .copd-content {
          padding: 56px 0 72px;
          display: grid;
          gap: clamp(42px, 7vw, 82px);
        }

        .copd-section {
          border-radius: 34px;
          background: var(--white);
          border: 1px solid rgba(85, 107, 47, 0.16);
          box-shadow: 0 22px 62px rgba(47, 54, 26, 0.09);
          padding: clamp(22px, 4vw, 42px);
          overflow: hidden;
        }

        .copd-section.dark {
          background: var(--main);
          color: var(--white);
        }

        .copd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(26px, 4vw, 46px);
        }

        .copd-heading {
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          line-height: 1.12;
          letter-spacing: -0.035em;
          font-weight: 650;
          color: var(--main);
          margin: 0 0 16px;
        }

        .dark .copd-heading {
          color: var(--white);
        }

        .copd-body {
          font-size: 15.5px;
          line-height: 1.8;
          color: var(--dark);
          margin: 0;
        }

        .dark .copd-body,
        .dark p {
          color: var(--light);
        }

        .copd-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 20px 52px rgba(47, 54, 26, 0.13);
          display: block;
        }

        .copd-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .copd-card-grid.three {
          grid-template-columns: repeat(3, 1fr);
        }

        .copd-card-grid.four {
          grid-template-columns: repeat(4, 1fr);
        }

        .copd-card {
          background: var(--light);
          border: 1px solid rgba(85, 107, 47, 0.18);
          border-radius: 18px;
          padding: 18px;
        }

        .copd-card h3,
        .copd-card p:first-child {
          color: var(--main);
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 8px;
          line-height: 1.45;
        }

        .copd-card p {
          color: var(--dark);
          font-size: 14px;
          line-height: 1.65;
          margin: 0;
        }

        .copd-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 28px;
          background: var(--dark);
        }

        .copd-video iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .copd-bg-section {
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
        }

        .copd-bg-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(47, 54, 26, 0.76);
        }

        .copd-bg-inner {
          position: relative;
          z-index: 1;
          max-width: 940px;
          margin: 0 auto;
          text-align: center;
        }

        .copd-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
        }

        .copd-tag {
          padding: 9px 15px;
          border-radius: 999px;
          background: var(--light);
          border: 1px solid rgba(85, 107, 47, 0.22);
          color: var(--dark);
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
        }

        .copd-faq {
          background: var(--light);
          border: 1px solid rgba(85, 107, 47, 0.2);
          border-radius: 16px;
          overflow: hidden;
        }

        .copd-faq + .copd-faq {
          margin-top: 12px;
        }

        .copd-faq-btn {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 18px 20px;
          text-align: left;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          color: var(--dark);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }

        .copd-faq-btn span:last-child {
          color: var(--main);
          font-size: 22px;
          line-height: 1;
        }

        .copd-faq-answer {
          padding: 0 20px 18px;
          color: var(--dark);
          font-size: 14.5px;
          line-height: 1.75;
          margin: 0;
        }

        .copd-cta {
          text-align: center;
          background: var(--main);
          color: var(--white);
        }

        .copd-cta .copd-heading,
        .copd-cta p {
          color: var(--white);
        }

        .copd-cta .copd-btn {
          background: var(--white);
          color: var(--main);
          border-color: var(--white);
          margin-top: 26px;
        }

        .copd-hidden-seo {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        @media (max-width: 900px) {
          .copd-grid {
            grid-template-columns: 1fr;
          }

          .copd-card-grid,
          .copd-card-grid.three,
          .copd-card-grid.four {
            grid-template-columns: 1fr 1fr;
          }

          .copd-video {
            aspect-ratio: 9 / 16;
          }
        }

        @media (max-width: 640px) {
        .copd-wrap {
  width: 100%;
  padding-left: 18px !important;
  padding-right: 18px !important;
}

.copd-section {
  margin-inline: 2px;
  border-radius: 24px !important;
}

.copd-card-grid,
.copd-tags {
  padding-inline: 2px;
}

.copd-card {
  border-radius: 20px !important;
}

.copd-tag {
  border-radius: 18px !important;
}

.copd-bg-section {
  border-radius: 26px !important;
  overflow: hidden;
}

.copd-hero-box {
  width: 100% !important;
  margin-inline: auto;
}
        #copd-rehab {
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

#copd-rehab .copd-img {
  height: 230px;
  border-radius: 22px;
  margin-bottom: 18px;
}

#copd-rehab .copd-heading {
  font-size: 1.75rem;
  line-height: 1.15;
}

#copd-rehab .copd-body {
  font-size: 14.5px;
  line-height: 1.75;
}

#copd-rehab .copd-card-grid {
  margin-top: 20px;
  gap: 10px;
}

#copd-rehab .copd-card {
  min-height: auto;
  padding: 14px 16px;
  border-radius: 16px;
  background: #ffffff;
}

#copd-rehab .copd-card p {
  font-size: 14px;
  line-height: 1.45;
}

#copd-rehab .copd-tags {
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

#copd-rehab .copd-tag {
  width: 100%;
  padding: 13px 16px;
  border-radius: 16px;
  background: #556b2f;
  color: #ffffff;
}
          .copd-wrap {
           width: min(100%, 1180px);
  padding: 0 18px;
}
          }

          .copd-content {
            gap: 28px;
            padding: 32px 0 52px;
          }

          .copd-hero {
            min-height: auto;
            padding: 92px 14px 70px;
            background-position: center;
          }

          .copd-hero-box,
          .copd-section {
            border-radius: 22px;
            padding: 20px;
          }

          .copd-hero h1 {
            font-size: 2.15rem;
            line-height: 1.08;
          }

          .copd-hero p {
            font-size: 15px;
            line-height: 1.7;
          }

          .copd-grid {
            grid-template-columns: 1fr !important;
            gap: 22px;
          }

          .copd-heading {
            font-size: 2rem;
            line-height: 1.08;
            letter-spacing: -0.03em;
          }

          .copd-body {
            font-size: 15px;
            line-height: 1.75;
          }

          .copd-card-grid,
          .copd-card-grid.three,
          .copd-card-grid.four {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .copd-card {
            padding: 18px;
            border-radius: 18px;
          }

          .copd-card p:first-child,
          .copd-card h3 {
            font-size: 15px;
            line-height: 1.45;
          }

          .copd-card p {
            font-size: 14px;
            line-height: 1.7;
          }

          .copd-img {
            width: 100%;
            height: 260px;
            min-height: unset;
            aspect-ratio: auto;
            object-fit: cover;
            border-radius: 20px;
          }

          .copd-video {
            aspect-ratio: 9 / 16;
            border-radius: 22px;
          }

          .copd-btn-row {
            flex-direction: column;
          }

          .copd-btn {
            width: 100%;
            min-height: 52px;
          }

          .copd-tags {
            gap: 8px;
          }

          .copd-tag {
            width: 100%;
            text-align: center;
          }

          .copd-faq-btn {
            font-size: 14px;
            padding: 16px;
          }

          .copd-faq-answer {
            font-size: 14px;
            padding: 0 16px 16px;
          }
        }
      `}</style>

      <div className="copd-hidden-seo">
        COPD specialist Bengaluru, COPD rehabilitation Bengaluru, COPD treatment Bengaluru,
        emphysema treatment Bengaluru, chronic bronchitis treatment, breathlessness clinic Bengaluru,
        pulmonary rehabilitation for COPD, COPD lung function test Bengaluru, COPD oxygen support,
        COPD flare up prevention, COPD hospital admission prevention, COPD care near me,
        advanced COPD diagnostics, DLCO test COPD, FeNO COPD asthma overlap, 6 minute walk test COPD,
        home pulmonary rehabilitation COPD Bengaluru, Vaayu COPD clinic, COPD outpatient care Bengaluru.
      </div>

      <section className="copd-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="copd-hero-box">
          <div className="copd-kicker">Vaayu COPD Specialist Clinic</div>
          <h1>COPD Specialist & COPD Rehabilitation in Bengaluru</h1>
          <p>
            Dedicated outpatient care for COPD, emphysema, chronic bronchitis, breathlessness,
            oxygen dependency, and repeated flare-ups — with diagnostics, treatment, pulmonary
            rehabilitation, and long-term follow-up at Vaayu.
          </p>

          <div className="copd-btn-row">
            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
              className="copd-btn"
            >
              Book COPD Consultation
            </a>
            <a href="#copd-rehab" className="copd-btn secondary">
              View COPD Rehab
            </a>
          </div>
        </div>
      </section>

      <main className="copd-wrap copd-content">
        <motion.section className="copd-section copd-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div>
            <h2 className="copd-heading">COPD Needs More Than Inhalers</h2>
            <p className="copd-body">
              COPD is a long-term lung condition that can affect breathing, stamina, sleep,
              oxygen levels, and daily independence. At Vaayu, COPD care is planned beyond
              symptom control — with specialist review, advanced testing, rehabilitation, and
              regular follow-up.
            </p>

            <div className="copd-card-grid">
              {COPD_CARE.map(([title, desc]) => (
                <div className="copd-card" key={title}>
                  <p>{title}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <img src={consultImage} alt="COPD specialist consultation at Vaayu Bengaluru" className="copd-img" loading="lazy" />
        </motion.section>

        <motion.section className="copd-section copd-grid dark" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="copd-video">
            <iframe
              src="https://www.youtube.com/embed/B5hgzTsq87w?rel=0&modestbranding=1"
              title="Understanding COPD"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="copd-heading">What is COPD?</h2>
            <p className="copd-body">
              COPD, or Chronic Obstructive Pulmonary Disease, causes long-term narrowing of the
              airways. It commonly presents as breathlessness, chronic cough, mucus, wheezing,
              and reduced exercise capacity.
            </p>
            <p className="copd-body" style={{ marginTop: 14 }}>
              COPD includes chronic bronchitis and emphysema. Early specialist care helps assess
              severity, improve symptoms, and reduce the risk of future flare-ups.
            </p>
          </div>
        </motion.section>

        <motion.section className="copd-section copd-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <img src={symptomsImage} alt="COPD symptoms and breathlessness warning signs" className="copd-img" loading="lazy" />

          <div>
            <h2 className="copd-heading">COPD Symptoms You Should Not Ignore</h2>
            <p className="copd-body">
              Many patients delay COPD care because symptoms progress slowly. If breathing
              problems affect routine activity, specialist evaluation is important.
            </p>

            <div className="copd-card-grid">
              {SYMPTOMS.map((item) => (
                <div className="copd-card" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="copd-section copd-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div>
            <h2 className="copd-heading">Common Causes of COPD</h2>
            <p className="copd-body">
              COPD is not only caused by smoking. Vaayu evaluates all possible contributors so
              that the treatment plan fits the patient’s real exposure history and lung condition.
            </p>

            <div className="copd-card-grid">
              {CAUSES.map(([title, desc]) => (
                <div className="copd-card" key={title}>
                  <p>{title}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <img src={causesImage} alt="COPD causes including smoke pollution dust and post TB lung damage" className="copd-img" loading="lazy" />
        </motion.section>

        <motion.section
          className="copd-section copd-bg-section"
          style={{ backgroundImage: `url(${diagnosisBg})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="copd-bg-inner">
            <h2 className="copd-heading" style={{ color: "var(--white)" }}>
              COPD Diagnostics at Vaayu
            </h2>
            <p className="copd-body" style={{ color: "var(--light)" }}>
              COPD treatment should be based on more than symptoms. Vaayu uses advanced outpatient
              tests to understand airflow limitation, lung damage, inflammation, oxygen response,
              and exercise capacity.
            </p>

            <div className="copd-card-grid three">
              {DIAGNOSTICS.map(([name, why]) => (
                <div className="copd-card" key={name}>
                  <p>{name}</p>
                  <p>{why}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="copd-rehab" className="copd-section copd-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <img src={rehabImage} alt="COPD pulmonary rehabilitation at Vaayu Bengaluru" className="copd-img" loading="lazy" />

          <div>
            <h2 className="copd-heading">COPD Pulmonary Rehabilitation</h2>
            <p className="copd-body">
              Pulmonary rehabilitation is a key part of COPD care. It is designed to reduce
              breathlessness, improve stamina, support oxygen use, build confidence, and help
              patients manage daily activities better.
            </p>

            <div className="copd-card-grid">
              {REHAB.map((item) => (
                <div className="copd-card" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="copd-tags">
              <span className="copd-tag">Center-Based COPD Rehab</span>
              <span className="copd-tag">Home-Based COPD Rehab</span>
              <span className="copd-tag">Hybrid COPD Rehab</span>
            </div>
          </div>
        </motion.section>

        <motion.section className="copd-section dark" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="copd-heading">Preventing COPD Flare-ups and Repeated Hospital Visits</h2>
          <p className="copd-body">
            COPD flare-ups can reduce lung function and affect long-term quality of life. Vaayu’s
            COPD care focuses on inhaler review, early warning signs, rehabilitation, infection
            prevention, oxygen assessment, and regular follow-up.
          </p>

          <div className="copd-card-grid four">
            {[
              ["Inhaler technique review", "Ensures medication is used correctly and effectively."],
              ["Flare-up action plan", "Helps patients know what to do when symptoms worsen."],
              ["Rehab progress tracking", "Monitors stamina, oxygen response, and functional improvement."],
              ["Long-term follow-up", "Keeps COPD care structured instead of episodic."],
            ].map(([title, desc]) => (
              <div className="copd-card" key={title}>
                <p>{title}</p>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="copd-section copd-bg-section"
          style={{ backgroundImage: `url(${journeyBg})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="copd-bg-inner">
            <h2 className="copd-heading" style={{ color: "var(--white)" }}>
              Living Better with COPD
            </h2>
            <p className="copd-body" style={{ color: "var(--light)" }}>
              COPD is long-term, but patients can improve how they breathe, move, sleep, and
              manage daily life with the right care plan.
            </p>

            <div className="copd-tags">
              {["Breathing techniques", "Activity pacing", "Oxygen guidance", "Nutrition", "Sleep support", "Smoking cessation"].map((tag) => (
                <span className="copd-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="faq" className="copd-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="copd-heading">COPD FAQs</h2>
          <p className="copd-body" style={{ marginBottom: 22 }}>
            Common questions about COPD treatment, COPD rehabilitation, breathlessness care, and
            outpatient COPD follow-up at Vaayu.
          </p>

          {FAQS.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </motion.section>

        <section className="copd-section">
          <h2 className="copd-heading">Related COPD Care at Vaayu</h2>
          <p className="copd-body">
            COPD patients may also need support for asthma overlap, sleep apnea, pulmonary
            rehabilitation, stress-related breathlessness, or recurrent infections.
          </p>

          <div className="copd-tags">
            {[
              ["Asthma-COPD Overlap", "/specialty-clinic/asthma"],
              ["Pulmonary Rehabilitation", "/pulmonary-rehab"],
              ["Sleep Apnea Care", "/sleep-clinic"],
              ["Bronchiectasis Care", "/specialty-clinic/bronchiectasis"],
              ["Stress & Breathing Support", "/rehab-wellness/stress-management"],
            ].map(([label, href]) => (
              <a className="copd-tag" key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </section>

        <motion.section className="copd-section copd-cta" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="copd-heading">Book Your COPD Evaluation at Vaayu</h2>
          <p className="copd-body">
            Get specialist-led COPD care in Bengaluru with diagnostics, pulmonary rehabilitation,
            oxygen assessment, and long-term follow-up.
          </p>

          <a
            href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=copd-page&utm_medium=eka-web&utm_campaign=web-navigation"
            target="_blank"
            rel="noopener noreferrer"
            className="copd-btn"
          >
            Book an Appointment
          </a>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default COPDClinic;