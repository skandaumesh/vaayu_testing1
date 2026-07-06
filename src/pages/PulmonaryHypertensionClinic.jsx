import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import heroImage from "../assets/img/lung-diagnosis.jpg";
import consultImage from "../assets/img/pulmonary-consult.png";
import causeImage from "../assets/img/tb-lifestyle.jpg";
import symptomsImage from "../assets/img/pulmonary-symptoms.jpg";
import treatmentImage from "../assets/img/pb.jpg";
import lifestyleImage from "../assets/img/hm.png";
import journeyBg from "../assets/img/BANNER2.jpg";
import diagnosisBg from "../assets/img/or.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=pulmonary-hypertension-page&utm_medium=eka-web&utm_campaign=web-navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const symptoms = [
  "Unexplained breathlessness during walking or climbing stairs",
  "Reduced exercise capacity or easy tiredness",
  "Chest pressure, heaviness, or discomfort",
  "Dizziness, fainting, or near-fainting episodes",
  "Swelling in legs, ankles, or abdomen",
  "Fast or irregular heartbeat",
  "Low oxygen levels or worsening fatigue",
];

const causes = [
  "Chronic lung diseases such as COPD, ILD, or sleep apnea",
  "Left heart disease, valve disease, or heart failure",
  "Blood clots in the lungs or chronic thromboembolic PH",
  "Connective tissue disorders such as scleroderma or lupus",
  "Liver disease, blood disorders, or certain medications",
  "Unexplained pulmonary vascular disease requiring specialist review",
];

const diagnostics = [
  "Echocardiography for pressure estimation and right-heart strain",
  "Pulmonary function tests and DLCO to assess lung contribution",
  "6-minute walk test to measure exercise capacity and oxygen response",
  "HRCT chest and CT pulmonary angiography when indicated",
  "Sleep evaluation if PH is linked to sleep apnea or low night oxygen",
  "Right heart catheterization when confirmation is required",
];

const treatments = [
  "Treatment of the underlying cause",
  "PH-targeted medicines when appropriate",
  "Oxygen assessment and oxygen therapy",
  "Diuretics and fluid management",
  "Anticoagulation in selected patients",
  "Pulmonary rehabilitation and supervised activity planning",
  "Monitoring of right-heart function",
  "Referral support for advanced PH interventions when needed",
];

const monitoring = [
  "Regular symptom and oxygen review",
  "Exercise capacity tracking",
  "Medication response monitoring",
  "Lifestyle and travel guidance",
  "Sleep and breathing assessment",
  "Long-term follow-up planning",
];

const PulmonaryHypertensionClinic = () => {
  return (
    <motion.div
      className="ph-page overflow-hidden bg-[#F7F8F3] text-[#2d3427]"
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        WebkitFontSmoothing: "antialiased",
        textRendering: "geometricPrecision",
      }}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Helmet>
        <title>
          Pulmonary Hypertension Specialist in Bengaluru | PH Care Center | Vaayu
        </title>
        <meta
          name="description"
          content="Pulmonary Hypertension specialist care in Bengaluru at Vaayu. Advanced PH diagnosis, breathlessness evaluation, right-heart assessment, oxygen support, pulmonary rehabilitation, and long-term monitoring."
        />
        <meta
          name="keywords"
          content="pulmonary hypertension specialist Bengaluru, pulmonary hypertension treatment Bengaluru, PH specialist clinic Bengaluru, pulmonary vascular disease center, breathlessness specialist Bengaluru, right heart failure specialist, pulmonary hypertension diagnosis Bengaluru, right heart catheterization Bengaluru, pulmonary rehabilitation for PH, Vaayu pulmonary hypertension clinic"
        />
        <link
          rel="canonical"
          href="https://vaayuchest.com/specialty-clinic/pulmonary-hypertension"
        />
      </Helmet>

      <style>{`
        .ph-page,
        .ph-page * {
          box-sizing: border-box;
        }

        .ph-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .ph-section {
          border-radius: 34px;
          background: rgba(255,255,255,0.86);
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 24px 68px rgba(47,54,26,0.10);
        }

        .ph-dark {
          border-radius: 34px;
          background: #4f5831;
          border: 1px solid rgba(215,222,201,0.16);
          box-shadow: 0 24px 68px rgba(47,54,26,0.18);
        }

        .ph-card {
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 16px 40px rgba(47,54,26,0.08);
          color: #2f361a;
          line-height: 1.6;
        }

        .ph-soft-card {
          border-radius: 20px;
          background: #eef4e9;
          border: 1px solid rgba(97,114,78,0.14);
          color: #2f361a;
          line-height: 1.65;
        }

        .ph-heading {
          font-size: clamp(1.8rem, 3.2vw, 2.85rem);
          line-height: 1.1;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .ph-body {
          font-size: 15.5px;
          line-height: 1.85;
          color: #4f5a44;
        }

        .ph-image {
          width: 100%;
          border-radius: 28px;
          box-shadow: 0 22px 58px rgba(47,54,26,0.14);
          object-fit: cover;
          object-position: center;
        }

        .ph-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 14px 34px;
          border-radius: 999px;
          background: #61724e;
          color: #fff8ef;
          font-size: 14px;
          font-weight: 700;
          transition: all .3s ease;
          box-shadow: 0 18px 45px rgba(47,54,26,0.22);
          text-decoration: none;
        }

        .ph-btn:hover {
          transform: translateY(-2px);
          background: #4f5831;
          box-shadow: 0 24px 55px rgba(47,54,26,0.28);
        }

        .ph-hidden-seo {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        @media (max-width: 760px) {
          .ph-wrap {
            width: min(90%, 440px);
          }

          .ph-section,
          .ph-dark {
            border-radius: 24px;
          }

          .ph-card,
          .ph-soft-card {
            border-radius: 18px;
          }

          .ph-btn {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .ph-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      <div className="ph-hidden-seo">
        Pulmonary hypertension specialist Bengaluru, pulmonary hypertension treatment Bengaluru,
        PH care center Bengaluru, breathlessness clinic Bengaluru, right heart failure specialist,
        pulmonary vascular disease clinic, unexplained breathlessness evaluation, pulmonary
        hypertension diagnosis Bengaluru, right heart catheterization Bengaluru, Vaayu Chest and
        Sleep Specialists, pulmonary rehabilitation for PH, oxygen assessment for pulmonary
        hypertension, PH long term monitoring Bengaluru.
      </div>

      <section
        className="ph-hero relative w-full min-h-[72svh] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 py-32 overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[#2f361a]/75" />

        <div className="relative z-10 w-full max-w-[860px] mx-auto rounded-[34px] border border-white/20 bg-white/12 backdrop-blur-[14px] px-6 sm:px-9 md:px-12 py-8 sm:py-10 text-center text-[#fff8ef] shadow-[0_30px_80px_rgba(47,54,26,0.34)]">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] uppercase text-[#d7dec9]">
            Vaayu Pulmonary Hypertension Care
          </p>

          <h1 className="text-[clamp(2rem,4vw,4rem)] leading-[1.05] tracking-[-0.045em] font-[700]">
            Pulmonary Hypertension Specialist & PH Care Center in Bengaluru
          </h1>

          <p className="mt-5 text-[clamp(15px,1.6vw,18px)] leading-[1.8] text-[#e6ebdf] max-w-2xl mx-auto">
            Advanced evaluation for unexplained breathlessness, right-heart strain,
            pulmonary vascular disease, oxygen needs, and long-term PH management at Vaayu.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="ph-btn mt-7">
            Book PH Evaluation
          </a>
        </div>
      </section>

      <div className="ph-wrap py-14 sm:py-16 space-y-14 sm:space-y-20 lg:space-y-24">
        <motion.section
          className="ph-section grid md:grid-cols-2 gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10"
          variants={slideInRight}
        >
          <div>
            <h2 className="ph-heading text-[#556B2F] mb-5">
              What is Pulmonary Hypertension?
            </h2>

            <p className="ph-body">
              Pulmonary Hypertension is a serious heart-lung circulation disorder where pressure
              in the lung blood vessels becomes abnormally high. This can strain the right side
              of the heart and reduce oxygen delivery during daily activity.
            </p>

            <p className="mt-5 ph-body">
              PH may be linked to lung disease, heart disease, blood clots, sleep apnea,
              connective tissue disorders, or pulmonary vascular disease. At Vaayu, evaluation
              focuses on identifying the cause, severity, oxygen response, and long-term care needs.
            </p>
          </div>

          <img
            src={consultImage}
            alt="Pulmonary hypertension specialist consultation at Vaayu Bengaluru"
            className="ph-image min-h-[320px] h-full"
            loading="lazy"
          />
        </motion.section>

        <motion.section
          className="ph-dark grid md:grid-cols-2 gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10"
          variants={fadeInUp}
        >
          <img
            src={symptomsImage}
            alt="Pulmonary hypertension symptoms and breathlessness warning signs"
            className="ph-image min-h-[320px] h-full"
            loading="lazy"
          />

          <div>
            <h2 className="ph-heading text-white mb-5">
              Early Warning Signs of Pulmonary Hypertension
            </h2>

            <p className="text-[#d7dec9] leading-[1.85] mb-5">
              PH symptoms can look like asthma, COPD, anxiety, or general weakness. Persistent
              breathlessness should not be ignored, especially when routine treatment is not helping.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {symptoms.map((symptom) => (
                <div key={symptom} className="ph-card p-5 text-left">
                  {symptom}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="ph-section grid md:grid-cols-2 gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10"
          variants={slideInLeft}
        >
          <div>
            <h2 className="ph-heading text-[#556B2F] mb-5">
              Conditions That Can Lead to Pulmonary Hypertension
            </h2>

            <p className="ph-body mb-5">
              Identifying the cause is important because treatment differs for each PH group.
              Vaayu evaluates both respiratory and sleep-related contributors to PH.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {causes.map((item) => (
                <div key={item} className="ph-soft-card p-5">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <img
            src={causeImage}
            alt="Causes of pulmonary hypertension including lung disease heart disease and sleep apnea"
            className="ph-image min-h-[320px] h-full"
            loading="lazy"
          />
        </motion.section>

        <motion.section
          className="relative overflow-hidden text-center bg-cover bg-center text-white p-8 sm:p-10 lg:p-12 rounded-[34px] shadow-[0_24px_68px_rgba(47,54,26,0.16)]"
          style={{ backgroundImage: `url(${diagnosisBg})` }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-[#2f361a]/72" />

          <div className="relative z-10">
            <h2 className="ph-heading mb-5">
              Advanced Pulmonary Hypertension Diagnostics at Vaayu
            </h2>

            <p className="mb-7 max-w-3xl mx-auto text-[#fff8ef] leading-[1.85]">
              PH diagnosis requires careful correlation between symptoms, heart findings, lung
              function, oxygen response, sleep health, imaging, and specialist interpretation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
              {diagnostics.map((step) => (
                <div key={step} className="rounded-[18px] bg-white/12 border border-white/20 p-5">
                  <p className="text-sm text-white leading-relaxed m-0">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="ph-section grid md:grid-cols-2 gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10"
          variants={slideInRight}
        >
          <img
            src={treatmentImage}
            alt="Pulmonary hypertension treatment and long-term management at Vaayu"
            className="ph-image min-h-[320px] h-full"
            loading="lazy"
          />

          <div>
            <h2 className="ph-heading text-[#556B2F] mb-5">
              Long-Term Pulmonary Hypertension Management
            </h2>

            <p className="ph-body">
              PH care is not one-time treatment. It needs regular monitoring, right treatment
              selection, oxygen assessment, medication review, and safe activity planning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {treatments.map((item) => (
                <div key={item} className="ph-soft-card p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="ph-section grid md:grid-cols-2 gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10"
          variants={slideInLeft}
        >
          <img
            src={lifestyleImage}
            alt="Daily living and monitoring with pulmonary hypertension"
            className="ph-image min-h-[320px] h-full"
            loading="lazy"
          />

          <div>
            <h2 className="ph-heading text-[#556B2F] mb-5">
              Daily Living & Long-Term Monitoring in PH
            </h2>

            <p className="ph-body">
              People with PH need guidance on activity, oxygen use, medication safety, sleep,
              travel, pregnancy risk, and follow-up. Vaayu supports patients with structured
              respiratory and sleep-focused monitoring.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {monitoring.map((item) => (
                <div key={item} className="ph-soft-card p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative overflow-hidden rounded-[34px] bg-cover bg-center py-16 sm:py-20 px-5 sm:px-8 text-white"
          style={{ backgroundImage: `url(${journeyBg})` }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-[#2f361a]/76"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="ph-heading mb-5">
              Early Diagnosis & Structured Follow-up Can Improve Outcomes
            </h2>

            <p className="text-[#d7dec9] leading-[1.85] text-[15.5px]">
              With the right specialist evaluation and consistent monitoring, pulmonary
              hypertension can be managed more safely. Vaayu focuses on understanding the cause,
              tracking progression, and supporting long-term heart-lung health.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="text-center mt-12 rounded-[34px] bg-[#4f5831] px-6 py-12 sm:px-10 sm:py-16 text-[#fff8ef] shadow-[0_30px_90px_rgba(47,54,26,0.2)]"
          variants={fadeInUp}
        >
          <h3 className="ph-heading mb-5">
            Book Pulmonary Hypertension Evaluation at Vaayu
          </h3>

          <p className="mb-7 leading-relaxed max-w-3xl mx-auto text-[#d7dec9]">
            Get specialist-led PH assessment in Bengaluru with breathlessness evaluation,
            diagnostics, oxygen review, and long-term monitoring.
          </p>

          <a href={EKA} target="_blank" rel="noopener noreferrer" className="ph-btn">
            BOOK AN APPOINTMENT
          </a>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PulmonaryHypertensionClinic;