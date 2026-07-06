import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

import heroBg from "../assets/img/tb-hero.jpg";
import midBg from "../assets/img/tb-causes.jpg";
import boxImage1 from "../assets/img/tb-symptoms.jpg";
import lifestyleBg from "../assets/img/tb-lifestyle.jpg";
import treatImg from "../assets/img/tb-treatment.jpg";
import diagnosisImage from "../assets/img/D.jpg";

const T = {
  bg: "#58623b",
  deep: "#2f361a",
  green: "#61724e",
  green2: "#4f5831",
  sage: "#9fab90",
  muted: "#d7dec9",
  light: "#eaf1e6",
  text: "#fff8ef",
  ink: "#293018",
};

const E = [0.22, 1, 0.36, 1];

const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay, ease: E },
});

const Chip = ({ children, dark = false }) => (
  <span className={dark ? "tb-chip dark" : "tb-chip"}>{children}</span>
);

const SectionTitle = ({ chip, title, text, light = false }) => (
  <motion.div {...fu()} className="tb-section-title">
    {chip && <Chip dark={!light}>{chip}</Chip>}
    <h2 className={light ? "light" : ""}>{title}</h2>
    {text && <p className={light ? "light" : ""}>{text}</p>}
  </motion.div>
);

const tbFacts = [
  {
    title: "TB is an infectious disease",
    text: "Tuberculosis is caused by Mycobacterium tuberculosis and most commonly affects the lungs.",
  },
  {
    title: "TB can affect other organs",
    text: "It may also involve lymph nodes, bones, joints, abdomen, urinary system, eyes, skin or reproductive organs.",
  },
  {
    title: "TB spreads through air",
    text: "Active lung TB can spread when an infected person coughs and releases bacteria into the air.",
  },
];

const latentActive = [
  {
    title: "Latent TB",
    text: "The bacteria may remain sealed off in the body without symptoms. This is called latent TB infection.",
  },
  {
    title: "Active TB",
    text: "When immunity weakens, TB bacteria can become active and cause symptoms or spread to others.",
  },
  {
    title: "Progression risk",
    text: "Not everyone exposed to TB develops active disease. Specialist evaluation helps decide next steps.",
  },
];

const symptoms = [
  "Persistent cough",
  "Fever or night sweats",
  "Weight loss or poor appetite",
  "Fatigue and weakness",
  "Swollen lymph nodes",
  "Chest symptoms or breathlessness",
  "Abdominal or urinary symptoms",
  "Bone, joint, eye or skin involvement",
];

const diagnosis = [
  "Clinical evaluation",
  "Chest imaging",
  "Sputum test and culture",
  "TB skin test or blood test",
  "Bronchoscopy when required",
  "Pleural fluid testing",
  "Lymph node sampling",
  "EBUS-guided biopsy when needed",
];

const treatmentPoints = [
  {
    title: "Minimum 6-month treatment",
    text: "Most TB treatment requires multiple antibiotics for at least 6 months under medical supervision.",
  },
  {
    title: "Longer treatment in complex TB",
    text: "TB affecting the brain, spine, bones, eyes or drug-resistant TB may need longer treatment.",
  },
  {
    title: "Never stop medicines early",
    text: "Stopping TB medicines without medical advice can cause relapse, complications and drug resistance.",
  },
  {
    title: "Follow-up is essential",
    text: "Regular reviews help monitor response, side effects, adherence and complete recovery.",
  },
];

const homeCare = [
  "Avoid work, school or public exposure until your doctor says it is safe.",
  "Use proper cough hygiene and ventilation at home.",
  "Wear a well-fitting mask when advised.",
  "Take medicines exactly as prescribed.",
  "Use reminders, alarms or calendars to avoid missed doses.",
  "Attend follow-up visits and repeat tests as advised.",
];

const mdrPoints = [
  "MDR-TB happens when TB bacteria resist key first-line medicines.",
  "Incomplete or irregular treatment increases the risk of resistance.",
  "Drug-resistant TB may need longer and more complex treatment.",
  "Correct treatment adherence is the best way to prevent resistance.",
];

const lifestyle = [
  "Maintain a healthy balanced diet",
  "Exercise gradually after medical clearance",
  "Complete the full medication course",
  "Avoid smoking and vaping",
  "Inform doctors about past TB history",
  "Continue regular follow-up",
];

const faqs = [
  {
    question:
      "I am very hygienic and I have now been diagnosed with TB. How is it possible?",
    answer:
      "TB infection is acquired by breathing in TB bacteria. Since TB is common in India, it is not a reflection of hygiene, lifestyle or social status. TB should not be associated with social stigma, and it can be treated successfully with proper medical care.",
  },
  {
    question: "How is TB spread?",
    answer:
      "TB spreads through the air when a person with active lung TB coughs and releases bacteria in tiny droplets. These bacteria can be inhaled by another person. TB most commonly affects the lungs, but it can also spread to other parts of the body.",
  },
  {
    question: "Can I just wear a face mask and go to work?",
    answer:
      "Active lung TB can be contagious. Patients are usually advised to avoid work, school and public activities for the initial treatment period until the doctor confirms it is safe. A mask may help reduce spread at home, but public activity should resume only after medical clearance.",
  },
  {
    question:
      "My friend said he has TB but need not worry about spreading the disease. How is that possible?",
    answer:
      "TB outside the lungs, such as lymph node TB, intestinal TB or joint TB, usually does not spread through coughing. Lung TB is more likely to be contagious because bacteria can be released into the air.",
  },
  {
    question: "I have a positive skin TB test. Should I be worried?",
    answer:
      "A positive TB skin test suggests exposure to TB bacteria. It may indicate latent TB infection. Not everyone with latent TB develops active disease, but medical evaluation is important to decide whether preventive treatment is needed.",
  },
  {
    question: "I have taken BCG vaccination. Am I immune to TB?",
    answer:
      "BCG vaccination helps protect newborns from severe forms of TB, but it does not guarantee lifelong protection. Immunity can reduce over time, and TB infection can still occur later in life.",
  },
  {
    question: "Suppose I am exposed to TB disease, can I give the disease to others?",
    answer:
      "Only people with active TB disease who release bacteria into the air can spread TB. People exposed to TB should be evaluated by a doctor and tested if needed.",
  },
  {
    question: "How many months should I take the TB medication?",
    answer:
      "The minimum treatment duration is usually 6 months, but it can be longer depending on the affected organ, severity and drug resistance. Follow your doctor’s prescribed treatment plan.",
  },
  {
    question:
      "I feel better after 1 week of medication. Can I stop taking the medications?",
    answer:
      "No. TB treatment must not be stopped early, even if symptoms improve. Completing the full course is essential to cure the infection and prevent drug-resistant TB.",
  },
  {
    question: "I have completed my medication regimen. Will the TB come back?",
    answer:
      "After completing treatment, most patients are considered cured. However, reinfection is possible because TB spreads through air exposure. Healthy lifestyle, follow-up and informing doctors about past TB history are important.",
  },
];

const Tuberculosis = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="tb-page">
      <style>{`
        .tb-page,
        .tb-page * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        .tb-page {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Inter, system-ui, sans-serif;
          background: ${T.bg};
          color: ${T.text};
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .tb-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .tb-section {
          position: relative;
          padding: 88px 0;
          overflow: hidden;
        }

        .tb-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
          color: ${T.ink};
        }

        .tb-dark {
          background:
            radial-gradient(circle at 12% 20%, rgba(215,222,201,.10), transparent 32%),
            radial-gradient(circle at 90% 75%, rgba(159,171,144,.12), transparent 34%),
            ${T.bg};
        }

        .tb-clinical-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .4;
          background-image:
            linear-gradient(rgba(97,114,78,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(97,114,78,.055) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
          -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
        }

        .tb-chip {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(215,222,201,.24);
          background: rgba(255,248,239,.08);
          color: ${T.muted};
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .tb-chip.dark {
          color: ${T.green};
          background: rgba(97,114,78,.07);
          border-color: rgba(97,114,78,.18);
        }

        .tb-section-title {
          max-width: 820px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .tb-section-title h2 {
          margin: 18px 0 0;
          color: ${T.ink};
          font-size: clamp(1.85rem, 3.5vw, 3rem);
          line-height: 1.12;
          letter-spacing: -.035em;
          font-weight: 750;
        }

        .tb-section-title h2.light {
          color: ${T.text};
        }

        .tb-section-title p {
          margin: 16px auto 0;
          max-width: 720px;
          color: #5d684b;
          font-size: 15.5px;
          line-height: 1.75;
        }

        .tb-section-title p.light {
          color: ${T.muted};
        }

        .tb-hero {
          min-height: 92svh;
          min-height: -webkit-fill-available;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.deep};
        }

        .tb-hero-bg {
          position: absolute;
          inset: 0;
        }

        .tb-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .24;
          filter: saturate(.82) contrast(1.05);
        }

        .tb-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.97), rgba(47,54,26,.86), rgba(97,114,78,.45)),
            radial-gradient(circle at 74% 38%, rgba(215,222,201,.18), transparent 34%);
        }

        .tb-hero-content {
          position: relative;
          z-index: 2;
          max-width: 920px;
          padding: 128px 0 80px;
        }

        .tb-hero h1 {
          margin: 22px 0 0;
          font-size: clamp(2.25rem, 5vw, 4.35rem);
          line-height: 1.07;
          letter-spacing: -.045em;
          font-weight: 780;
          color: ${T.text};
        }

        .tb-hero h1 span {
          color: ${T.muted};
        }

        .tb-hero-card {
          margin-top: 26px;
          max-width: 790px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
        }

        .tb-hero-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 15.8px;
          line-height: 1.78;
        }

        .tb-hero-tags {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tb-hero-tag {
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(159,171,144,.18);
          border: 1px solid rgba(215,222,201,.2);
          color: ${T.muted};
          font-size: 12px;
          font-weight: 650;
        }

        .tb-two {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 34px;
          align-items: stretch;
        }

        .tb-image-card {
          min-height: 430px;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(47,54,26,.18);
          border: 1px solid rgba(97,114,78,.14);
          background: #dfe8da;
        }

        .tb-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(.9) contrast(1.03);
        }

        .tb-panel {
          border-radius: 34px;
          padding: 42px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .tb-panel h2 {
          margin: 18px 0 0;
          color: ${T.text};
          font-size: clamp(1.9rem, 3vw, 2.8rem);
          line-height: 1.13;
          letter-spacing: -.035em;
        }

        .tb-panel p {
          color: ${T.muted};
          line-height: 1.8;
          font-size: 15px;
        }

        .tb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .tb-card {
          border-radius: 28px;
          padding: 26px;
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(97,114,78,.14);
          color: ${T.ink};
          box-shadow: 0 18px 44px rgba(47,54,26,.08);
        }

        .tb-card h3 {
          margin: 0;
          color: ${T.ink};
          font-size: 18px;
          line-height: 1.25;
        }

        .tb-card p {
          margin: 10px 0 0;
          color: #5d684b;
          font-size: 14px;
          line-height: 1.65;
        }

        .tb-dark-card {
          border-radius: 24px;
          padding: 24px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.16);
          color: ${T.muted};
          box-shadow: 0 18px 48px rgba(47,54,26,.16);
        }

        .tb-dark-card h3 {
          margin: 0;
          color: ${T.text};
          font-size: 18px;
          line-height: 1.3;
        }

        .tb-dark-card p {
          margin: 10px 0 0;
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.65;
        }

        .tb-list {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .tb-list-item {
          padding: 15px 16px;
          border-radius: 18px;
          background: rgba(255,248,239,.075);
          border: 1px solid rgba(215,222,201,.13);
          color: ${T.text};
          font-size: 14.5px;
          line-height: 1.55;
          font-weight: 600;
        }

        .tb-list-item::before {
          content: "";
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          margin-right: 11px;
          background: ${T.muted};
          transform: translateY(-1px);
        }

        .tb-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 26px;
        }

        .tb-tag {
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(97,114,78,.08);
          border: 1px solid rgba(97,114,78,.16);
          color: ${T.ink};
          font-size: 13px;
          font-weight: 650;
        }

        .tb-bg-section {
          position: relative;
          background-size: cover;
          background-position: center;
          color: ${T.text};
        }

        .tb-bg-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(47,54,26,.82);
        }

        .tb-bg-inner {
          position: relative;
          z-index: 2;
        }

        .tb-faq-wrap {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          gap: 12px;
        }

        .tb-faq-item {
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(97,114,78,.15);
          box-shadow: 0 12px 32px rgba(47,54,26,.07);
        }

        .tb-faq-btn {
          width: 100%;
          border: none;
          background: transparent;
          text-align: left;
          cursor: pointer;
          padding: 22px 24px;
          color: ${T.ink};
          font-size: 15.5px;
          font-weight: 750;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          font-family: inherit;
          line-height: 1.45;
        }

        .tb-faq-icon {
          color: ${T.green};
          flex-shrink: 0;
        }

        .tb-faq-answer {
          padding: 0 24px 22px;
          color: #526043;
          font-size: 14.5px;
          line-height: 1.75;
        }

        .tb-cta {
          border-radius: 36px;
          padding: 56px 34px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.08), rgba(255,248,239,.03)),
            ${T.green2};
          text-align: center;
          box-shadow: 0 28px 74px rgba(47,54,26,.18);
          border: 1px solid rgba(215,222,201,.18);
        }

        .tb-cta h2 {
          margin: 18px auto 0;
          color: ${T.text};
          font-size: clamp(1.9rem, 3.4vw, 3rem);
          line-height: 1.12;
          max-width: 850px;
        }

        .tb-cta p {
          max-width: 740px;
          margin: 16px auto 0;
          color: ${T.muted};
          line-height: 1.75;
        }

        @media (max-width: 1100px) {
          .tb-two {
            grid-template-columns: 1fr;
          }

          .tb-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tb-image-card {
            min-height: 320px;
          }
        }

        @media (max-width: 680px) {
          .tb-wrap {
            width: min(90%, 440px);
          }

          .tb-section {
            padding: 68px 0;
          }

          .tb-hero {
            min-height: auto;
          }

          .tb-hero-content {
            padding: 106px 0 60px;
          }

          .tb-hero h1 {
            font-size: clamp(2.05rem, 10vw, 3.2rem);
            line-height: 1.12;
          }

          .tb-hero-card,
          .tb-panel,
          .tb-cta {
            border-radius: 24px;
            padding: 24px;
          }

          .tb-section-title {
            text-align: left;
            margin-bottom: 34px;
          }

          .tb-section-title h2 {
            font-size: clamp(1.65rem, 8vw, 2.4rem);
          }

          .tb-grid {
            grid-template-columns: 1fr;
          }

          .tb-image-card {
            min-height: 260px;
            border-radius: 24px;
          }

          .tb-card,
          .tb-dark-card {
            border-radius: 22px;
            padding: 22px;
          }

          .tb-tag-cloud {
            justify-content: flex-start;
          }

          .tb-tag {
            width: 100%;
            text-align: center;
          }

          .tb-faq-btn {
            padding: 18px;
            font-size: 14.5px;
          }

          .tb-faq-answer {
            padding: 0 18px 18px;
          }
        }
      `}</style>

      <section className="tb-hero">
        <div className="tb-hero-bg">
          <img src={heroBg} alt="Tuberculosis care at Vaayu" />
        </div>

        <div className="tb-wrap">
          <motion.div {...fu()} className="tb-hero-content">
            <Chip>TB Awareness & Respiratory Care</Chip>

            <h1>
              Understanding <br />
              <span>Tuberculosis</span>
            </h1>

            <div className="tb-hero-card">
              <p>
                Tuberculosis is a treatable infectious disease caused by
                Mycobacterium tuberculosis. It most commonly affects the lungs, but
                can involve other organs. Early diagnosis, complete treatment and
                proper follow-up are essential for recovery.
              </p>
            </div>

            <div className="tb-hero-tags">
              {[
                "Lung TB",
                "Latent TB",
                "Active TB",
                "TB Diagnosis",
                "TB Treatment",
                "MDR-TB Awareness",
              ].map((tag) => (
                <span className="tb-hero-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="tb-section tb-light">
        <div className="tb-clinical-bg" />
        <div className="tb-wrap">
          <SectionTitle
            chip="What It Means"
            title="What is Tuberculosis?"
            text="TB is an infection caused by bacteria. It can remain silent as latent TB or become active disease when the immune system can no longer control it."
          />

          <div className="tb-grid">
            {tbFacts.map((item, index) => (
              <motion.div {...fu(index * 0.05)} className="tb-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tb-section tb-bg-section"
        style={{ backgroundImage: `url(${midBg})` }}
      >
        <div className="tb-wrap tb-bg-inner">
          <SectionTitle
            chip="Latent vs Active TB"
            title="TB can stay silent or become active"
            text="The immune system may seal off TB bacteria for years. If immunity weakens, the bacteria can reactivate and cause active disease."
            light
          />

          <div className="tb-grid">
            {latentActive.map((item, index) => (
              <motion.div {...fu(index * 0.05)} className="tb-dark-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section tb-light">
        <div className="tb-wrap">
          <div className="tb-two">
            <motion.div {...fu()} className="tb-image-card">
              <img src={boxImage1} alt="Symptoms of tuberculosis" loading="lazy" />
            </motion.div>

            <motion.div {...fu(0.1)} className="tb-panel">
              <Chip>Symptoms</Chip>
              <h2>Symptoms of TB</h2>
              <p>
                TB symptoms vary depending on the organ affected. Lung TB may cause
                cough and breathing-related symptoms, while TB in other organs can
                present differently.
              </p>

              <div className="tb-list">
                {symptoms.map((item) => (
                  <div className="tb-list-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="tb-section tb-light">
        <div className="tb-clinical-bg" />
        <div className="tb-wrap">
          <div className="tb-two">
            <motion.div {...fu()} className="tb-panel">
              <Chip>Diagnosis</Chip>
              <h2>How is TB diagnosed?</h2>
              <p>
                TB diagnosis may involve clinical evaluation, imaging, sputum
                testing, blood or skin tests, and advanced sampling procedures when
                required.
              </p>

              <div className="tb-list">
                {diagnosis.map((item) => (
                  <div className="tb-list-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fu(0.1)} className="tb-image-card">
              <img src={diagnosisImage} alt="TB diagnosis and testing" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="tb-section tb-dark">
        <div className="tb-clinical-bg" />
        <div className="tb-wrap">
          <div className="tb-two">
            <motion.div {...fu()} className="tb-image-card">
              <img src={treatImg} alt="TB treatment" loading="lazy" />
            </motion.div>

            <motion.div {...fu(0.1)} className="tb-panel">
              <Chip>Treatment</Chip>
              <h2>What is the treatment for TB?</h2>
              <p>
                TB is treated with a structured course of antibiotics. Unlike common
                infections, TB needs multiple medicines for a longer duration.
              </p>

              <div className="tb-list">
                {treatmentPoints.map((item) => (
                  <div className="tb-list-item" key={item.title}>
                    {item.title}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="tb-grid" style={{ marginTop: 30 }}>
            {treatmentPoints.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="tb-dark-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section tb-light">
        <div className="tb-wrap">
          <SectionTitle
            chip="Home Care & MDR-TB"
            title="Careful treatment protects you and others"
            text="TB treatment works best when medicines are taken correctly and follow-up is maintained."
          />

          <div className="tb-two">
            <motion.div {...fu()} className="tb-card">
              <h3>Home care & medication adherence</h3>
              <p>
                During the early treatment period, your doctor may advise precautions
                to reduce spread and support recovery.
              </p>

              <div className="tb-tag-cloud" style={{ justifyContent: "flex-start" }}>
                {homeCare.map((item) => (
                  <span className="tb-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fu(0.1)} className="tb-card">
              <h3>Understanding MDR-TB</h3>
              <p>
                Drug-resistant TB can develop when treatment is incomplete or not
                taken correctly.
              </p>

              <div className="tb-tag-cloud" style={{ justifyContent: "flex-start" }}>
                {mdrPoints.map((item) => (
                  <span className="tb-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="tb-section tb-bg-section"
        style={{ backgroundImage: `url(${lifestyleBg})` }}
      >
        <div className="tb-wrap tb-bg-inner">
          <SectionTitle
            chip="Recovery & Prevention"
            title="Lifestyle support after TB treatment"
            text="After completing treatment, healthy habits and follow-up help reduce risk and support long-term recovery."
            light
          />

          <div className="tb-grid">
            {lifestyle.map((item, index) => (
              <motion.div {...fu(index * 0.04)} className="tb-dark-card" key={item}>
                <h3>{item}</h3>
                <p>
                  Consistent care supports immunity, recovery and long-term stability.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-section tb-light">
        <div className="tb-wrap">
          <SectionTitle
            chip="FAQs"
            title="Tuberculosis FAQs"
            text="Answers to common questions about TB spread, treatment duration, BCG vaccine, medication adherence and recovery."
          />

          <div className="tb-faq-wrap">
            {faqs.map((faq, index) => {
              const open = openIndex === index;

              return (
                <motion.div {...fu(index * 0.02)} className="tb-faq-item" key={faq.question}>
                  <button
                    className="tb-faq-btn"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span>{faq.question}</span>
                    {open ? (
                      <ChevronUp className="tb-faq-icon" size={20} />
                    ) : (
                      <ChevronDown className="tb-faq-icon" size={20} />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="tb-faq-answer">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tb-section tb-dark">
        <div className="tb-wrap">
          <motion.div {...fu()} className="tb-cta">
            <Chip>TB Evaluation</Chip>
            <h2>Need expert evaluation for suspected TB or prolonged cough?</h2>
            <p>
              If you have persistent cough, fever, weight loss, exposure to TB, or
              uncertainty about test results, a structured respiratory evaluation can
              help guide diagnosis and treatment safely.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Tuberculosis;