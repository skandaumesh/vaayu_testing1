import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImage from "../assets/img/lung-cancer.jpg";
import consultImage from "../assets/img/lung-consult.jpg";
import signsImage from "../assets/img/highlight.png";
import diagnosisBg from "../assets/img/lung-diagnosis.jpg";
import treatmentImage from "../assets/img/lung-treatment.jpg";
import journeyBg from "../assets/img/BANNER2.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const T = {
  cream: "#dce8c7",
  soft: "#eef4e9",
  sage: "#9fab90",
  sageLight: "#d7dec9",
  olive: "#61724e",
  oliveDark: "#3f472e",
  brown: "#6e5b46",
  white: "#ffffff",
};

const E = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, delay, ease: E },
});

const faqs = [
  {
    question: "Are there different types of lung cancer?",
    answer:
      "Yes, lung cancer is categorized into two main types: non-small cell lung cancer and small cell lung cancer. Non-small cell lung cancer is more common and tends to grow more slowly, while small cell lung cancer is often more aggressive.",
  },
  {
    question: "How is lung cancer diagnosed?",
    answer:
      "Diagnosis may involve imaging scans, biopsy, bronchoscopy, and molecular testing. These tests help doctors understand the type, stage, and treatment options better.",
  },
  {
    question: "Can lung cancer be treated?",
    answer:
      "Yes. Treatment options may include surgery, chemotherapy, radiation therapy, targeted therapy, immunotherapy, and supportive care depending on the patient’s condition.",
  },
  {
    question: "Is lung cancer preventable?",
    answer:
      "Some risks can be reduced by avoiding smoking, secondhand smoke, air pollutants, asbestos exposure, and by maintaining regular health check-ups if you are at risk.",
  },
  {
    question: "Can non-smokers get lung cancer?",
    answer:
      "Yes. Non-smokers can also develop lung cancer due to secondhand smoke, air pollution, radon gas, asbestos, genetic factors, and other environmental exposures.",
  },
  {
    question: "Is early detection important?",
    answer:
      "Yes. Early detection can improve treatment possibilities and outcomes, especially for people with risk factors or persistent symptoms.",
  },
];

export default function LungCancerClinic() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="lung-cancer-page">
      <style>{`
        .lung-cancer-page,
        .lung-cancer-page * {
          box-sizing: border-box;
        }

        .lung-cancer-page {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: ${T.cream};
          color: ${T.oliveDark};
          overflow-x: hidden;
        }

        .lc-container {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .lc-section {
          padding: 84px 0;
          position: relative;
        }

        .lc-soft {
          background: ${T.soft};
        }

        .lc-dark {
          background: ${T.olive};
          color: ${T.cream};
        }

        .lc-kicker {
          display: inline-flex;
          align-items: center;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(97, 114, 78, 0.08);
          border: 1px solid rgba(97, 114, 78, 0.16);
          color: ${T.olive};
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .lc-dark .lc-kicker {
          background: rgba(255, 248, 239, 0.10);
          color: ${T.sageLight};
          border-color: rgba(215, 222, 201, 0.22);
        }

        .lc-title {
          margin: 16px 0 0;
          font-size: clamp(1.9rem, 3.4vw, 3rem);
          line-height: 1.18;
          letter-spacing: -0.025em;
          font-weight: 650;
          color: ${T.oliveDark};
        }

        .lc-dark .lc-title {
          color: ${T.cream};
        }

        .lc-desc {
          margin: 16px 0 0;
          color: ${T.brown};
          font-size: 15.5px;
          line-height: 1.8;
          max-width: 760px;
        }

        .lc-dark .lc-desc {
          color: ${T.sageLight};
        }

        .lc-grid-2 {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.9fr);
          gap: 38px;
          align-items: center;
        }

        .lc-card {
          background: ${T.white};
          border-radius: 26px;
          padding: 30px;
          border: 1px solid rgba(97, 114, 78, 0.13);
          box-shadow: 0 18px 50px rgba(47, 54, 26, 0.08);
        }

        .lc-card-dark {
          background: rgba(255, 248, 239, 0.08);
          border: 1px solid rgba(215, 222, 201, 0.18);
          box-shadow: 0 20px 60px rgba(47, 54, 26, 0.22);
        }

        .lc-image {
          width: 100%;
          height: 100%;
          min-height: 360px;
          object-fit: cover;
          display: block;
          border-radius: 26px;
          box-shadow: 0 18px 50px rgba(47, 54, 26, 0.14);
        }

        .lc-list-grid {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .lc-list-card {
          background: ${T.cream};
          border: 1px solid rgba(97, 114, 78, 0.12);
          border-radius: 18px;
          padding: 18px;
          color: ${T.oliveDark};
          font-size: 14px;
          line-height: 1.55;
          font-weight: 500;
        }

        .lc-soft .lc-list-card {
          background: ${T.white};
        }

        .lc-number-list {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .lc-number-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 16px;
          border-radius: 18px;
          background: rgba(255, 248, 239, 0.10);
          border: 1px solid rgba(215, 222, 201, 0.17);
        }

        .lc-number {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: ${T.sageLight};
          color: ${T.oliveDark};
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
          flex-shrink: 0;
        }

        .lc-number-item p {
          margin: 0;
          color: ${T.cream};
          font-size: 14px;
          line-height: 1.65;
        }

        .lc-pill-wrap {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .lc-pill {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          background: ${T.soft};
          border: 1px solid rgba(97, 114, 78, 0.14);
          color: ${T.oliveDark};
          font-size: 13.5px;
          font-weight: 600;
        }

        .lc-hero {
          min-height: 78svh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: ${T.olive};
        }

        .lc-hero-bg {
          position: absolute;
          inset: 0;
        }

        .lc-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.34;
          filter: saturate(0.8) contrast(1.05);
        }

        .lc-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.92) 0%, rgba(47,54,26,.76) 52%, rgba(97,114,78,.45) 100%),
            linear-gradient(to top, ${T.olive}, transparent 35%);
        }

        .lc-hero-content {
          position: relative;
          z-index: 2;
          width: min(92%, 1180px);
          margin: 0 auto;
          padding: 128px 0 80px;
        }

        .lc-hero-card {
          max-width: 760px;
          padding: 34px;
          border-radius: 30px;
          background: rgba(255, 248, 239, 0.10);
          border: 1px solid rgba(215, 222, 201, 0.22);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 28px 80px rgba(47,54,26,0.30);
        }

        .lc-hero h1 {
          margin: 20px 0 0;
          color: ${T.cream};
          font-size: clamp(2.25rem, 5vw, 4.6rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .lc-hero p {
          margin: 22px 0 0;
          max-width: 640px;
          color: ${T.sageLight};
          font-size: 17px;
          line-height: 1.75;
        }

        .lc-hero-actions {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .lc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 14px 30px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all .28s ease;
          font-family: inherit;
        }

        .lc-btn-primary {
          background: ${T.sageLight};
          color: ${T.oliveDark};
        }

        .lc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(215,222,201,0.22);
        }

        .lc-btn-secondary {
          background: transparent;
          color: ${T.cream};
          border: 1px solid rgba(215,222,201,0.35);
        }

        .lc-btn-secondary:hover {
          background: rgba(255,248,239,0.10);
          transform: translateY(-2px);
        }

        .lc-center {
          text-align: center;
        }

        .lc-center .lc-desc {
          margin-left: auto;
          margin-right: auto;
        }

        .lc-support {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 46px;
          background: ${T.olive};
          color: ${T.cream};
        }

        .lc-support img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.28;
        }

        .lc-support::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(47,54,26,.88), rgba(97,114,78,.66));
        }

        .lc-support-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .lc-support h2 {
          margin: 0;
          font-size: clamp(1.8rem, 3vw, 2.7rem);
          line-height: 1.25;
          font-weight: 650;
        }

        .lc-support p {
          margin: 16px auto 0;
          color: ${T.sageLight};
          line-height: 1.75;
          font-size: 15.5px;
        }

        .lc-faq-wrap {
          max-width: 920px;
          margin: 34px auto 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lc-faq-item {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(97,114,78,0.14);
          background: ${T.white};
          box-shadow: 0 10px 28px rgba(47,54,26,0.05);
        }

        .lc-faq-btn {
          width: 100%;
          border: none;
          background: ${T.white};
          color: ${T.oliveDark};
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          font-size: 15px;
          font-weight: 650;
        }

        .lc-faq-symbol {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${T.soft};
          color: ${T.olive};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .lc-faq-answer {
          padding: 0 22px 20px;
          color: ${T.brown};
          font-size: 14.5px;
          line-height: 1.75;
        }

        .lc-cta {
          text-align: center;
          background: ${T.olive};
          color: ${T.cream};
          border-radius: 34px;
          padding: 48px 28px;
          box-shadow: 0 24px 60px rgba(47,54,26,0.18);
        }

        .lc-cta h2 {
          margin: 0;
          font-size: clamp(1.7rem, 3vw, 2.6rem);
          line-height: 1.25;
          font-weight: 650;
        }

        .lc-cta p {
          margin: 14px auto 0;
          max-width: 620px;
          color: ${T.sageLight};
          line-height: 1.75;
        }

        .lc-cta .lc-btn {
          margin-top: 26px;
        }

        @media (max-width: 980px) {
          .lc-grid-2 {
            grid-template-columns: 1fr;
          }

          .lc-image {
            min-height: 300px;
          }

          .lc-section {
            padding: 72px 0;
          }
        }

        @media (max-width: 640px) {
          .lc-container {
            width: min(90%, 430px);
          }

          .lc-hero {
            min-height: auto;
          }

          .lc-hero-content {
            padding: 108px 0 58px;
          }

          .lc-hero-card {
            padding: 24px 20px;
            border-radius: 24px;
          }

          .lc-hero h1 {
            font-size: clamp(2rem, 10vw, 3.2rem);
            line-height: 1.12;
          }

          .lc-hero p {
            font-size: 15px;
            line-height: 1.7;
          }

          .lc-hero-actions {
            flex-direction: column;
          }

          .lc-btn {
            width: 100%;
          }

          .lc-section {
            padding: 58px 0;
          }

          .lc-card {
            padding: 22px;
            border-radius: 22px;
          }

          .lc-list-grid {
            grid-template-columns: 1fr;
          }

          .lc-image {
            min-height: 230px;
            border-radius: 22px;
          }

          .lc-support {
            border-radius: 24px;
            padding: 36px 20px;
            min-height: 280px;
          }

          .lc-faq-btn {
            padding: 18px;
            font-size: 14px;
          }

          .lc-faq-answer {
            padding: 0 18px 18px;
          }

          .lc-cta {
            border-radius: 26px;
            padding: 38px 20px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .lc-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="lc-hero">
        <div className="lc-hero-bg">
          <img src={heroImage} alt="Lung cancer treatment center" />
        </div>
        <div className="lc-hero-overlay" />

        <div className="lc-hero-content">
          <motion.div {...fadeUp(0)} className="lc-hero-card">

            <h1>Lung Cancer Treatment Center</h1>

            <p>
              Precision diagnosis, multidisciplinary guidance, and structured
              care for patients who need clarity, confidence, and long-term
              support.
            </p>

            <div className="lc-hero-actions">
              <a
                href={EKA}
                target="_blank"
                rel="noopener noreferrer"
                className="lc-btn lc-btn-primary"
              >
                Book an Appointment              </a>

              <a href="#lung-cancer-care" className="lc-btn lc-btn-secondary">
                Explore Care Approach
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS LUNG CANCER */}
      <section id="lung-cancer-care" className="lc-section lc-soft">
        <div className="lc-container">
          <motion.div {...fadeUp(0)} className="lc-card lc-center">
            <span className="lc-kicker">Understanding the Condition</span>

            <h2 className="lc-title">What is Lung Cancer?</h2>

            <p className="lc-desc">
              Lung cancer is a serious medical condition that begins when
              abnormal cells grow uncontrollably in the lungs. These cells may
              form tumors and affect normal breathing and lung function.
            </p>

            <p className="lc-desc">
              There are two main types of lung cancer: non-small cell lung
              cancer and small cell lung cancer. Smoking remains a major risk
              factor, but non-smokers may also develop lung cancer due to
              secondhand smoke, air pollution, radon, asbestos, or genetic
              factors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VAAYU APPROACH */}
      <section className="lc-section">
        <div className="lc-container">
          <div className="lc-grid-2">
            <motion.div {...fadeUp(0)} className="lc-card">
              <span className="lc-kicker">Vaayu Care Approach</span>

              <h2 className="lc-title">At Vaayu, We Go Beyond Diagnosis</h2>

              <p className="lc-desc">
                Our focus is to help patients and families understand the
                condition clearly and move forward with a structured care plan.
              </p>

              <div className="lc-list-grid">
                {[
                  "Chest X-rays or CT scans",
                  "Biopsies and tissue evaluation",
                  "Bronchoscopy-based airway assessment",
                  "Molecular testing when required",
                  "Follow-up and survivorship support",
                ].map((item) => (
                  <motion.div
                    key={item}
                    {...fadeUp(0.04)}
                    className="lc-list-card"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.08)}>
              <img
                src={consultImage}
                alt="Doctor consultation for lung cancer care"
                className="lc-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="lc-section lc-soft">
        <div className="lc-container">
          <div className="lc-grid-2">
            <motion.div {...fadeUp(0)}>
              <span className="lc-kicker">Warning Signs</span>

              <h2 className="lc-title">Signs and Symptoms</h2>

              <p className="lc-desc">
                Persistent or unusual respiratory symptoms should not be
                ignored, especially when they continue despite basic treatment.
              </p>

              <div className="lc-list-grid">
                {[
                  "Persistent cough",
                  "Blood in sputum",
                  "Chest pain or hoarseness",
                  "Recurring respiratory infections",
                  "Unexplained weight loss",
                ].map((symptom) => (
                  <motion.div
                    key={symptom}
                    {...fadeUp(0.04)}
                    className="lc-list-card"
                  >
                    {symptom}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.08)}>
              <img
                src={signsImage}
                alt="Symptoms and warning signs of lung cancer"
                className="lc-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PREVENTION */}
      <section className="lc-section lc-dark">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${diagnosisBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />

        <div className="lc-container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div {...fadeUp(0)} className="lc-card lc-card-dark">
            <span className="lc-kicker">Prevention and Risk Reduction</span>

            <h2 className="lc-title">Healthy Choices That Reduce Risk</h2>

            <p className="lc-desc">
              While every case cannot be prevented, several risk factors can be
              reduced with timely awareness and safer lifestyle choices.
            </p>

            <div className="lc-number-list">
              {[
                "Avoid smoking and exposure to secondhand smoke.",
                "Minimize exposure to air pollutants and known carcinogens.",
                "Test and mitigate radon levels where needed.",
                "Use proper protective equipment when working around asbestos or harmful chemicals.",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  {...fadeUp(index * 0.04)}
                  className="lc-number-item"
                >
                  <div className="lc-number">{index + 1}</div>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="lc-section">
        <div className="lc-container">
          <div className="lc-grid-2">
            <motion.div {...fadeUp(0)}>
              <img
                src={treatmentImage}
                alt="Lung cancer treatment options"
                className="lc-image"
              />
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="lc-card">
              <span className="lc-kicker">Treatment Options</span>

              <h2 className="lc-title">Personalized Treatment Planning</h2>

              <p className="lc-desc">
                Treatment is planned based on the type of lung cancer, stage,
                overall health, test results, and patient priorities. The goal
                is to combine medical precision with comfort and support.
              </p>

              <div className="lc-pill-wrap">
                {[
                  "Surgery when feasible",
                  "Targeted therapy",
                  "Immunotherapy",
                  "Chemotherapy",
                  "Radiation therapy",
                  "Palliative support",
                ].map((option) => (
                  <span key={option} className="lc-pill">
                    {option}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="lc-section lc-soft">
        <div className="lc-container">
          <motion.div {...fadeUp(0)} className="lc-support">
            <img src={journeyBg} alt="Supportive lung cancer care journey" />

            <div className="lc-support-content">
              <h2>Support for Your Journey</h2>
              <p>
                From medical guidance to emotional support and follow-up care,
                Vaayu is committed to helping patients and families feel more
                informed, supported, and prepared throughout the care journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lc-section">
        <div className="lc-container">
          <motion.div {...fadeUp(0)} className="lc-center">
            <span className="lc-kicker">Patient Questions</span>

            <h2 className="lc-title">Frequently Asked Questions</h2>

            <p className="lc-desc">
              Clear answers to common questions patients and families may have
              about lung cancer diagnosis, treatment, and care planning.
            </p>
          </motion.div>

          <div className="lc-faq-wrap">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                {...fadeUp(index * 0.03)}
                className="lc-faq-item"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="lc-faq-btn"
                >
                  <span>{faq.question}</span>
                  <span className="lc-faq-symbol">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="lc-faq-answer">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lc-section lc-soft">
        <div className="lc-container">
          <motion.div {...fadeUp(0)} className="lc-cta">
            <h2>Take the First Step Today</h2>

            <p>
              Book a consultation with Vaayu Chest & Sleep Specialists and get
              guided support for diagnosis, treatment planning, and long-term
              care.
            </p>

            <a
              href={EKA}
              target="_blank"
              rel="noopener noreferrer"
              className="lc-btn lc-btn-primary"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}