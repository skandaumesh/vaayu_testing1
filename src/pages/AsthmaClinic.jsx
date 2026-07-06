import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import heroImage from "../assets/img/asthma.webp";
import consultImage from "../assets/img/asthma-consult.jpg";
import triggerImage from "../assets/img/causes.png";
import symptomsImage from "../assets/img/asthma-symptoms.jpg";
import treatmentImage from "../assets/img/asthma-treatment.png";
import journeyBg from "../assets/img/BANNER2.jpg";
import diagnosisBg from "../assets/img/or.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const AsthmaClinic = () => {
  const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  {
    q: "Why am I still breathless despite asthma inhalers?",
    a: "Persistent breathlessness may occur due to trigger exposure, poor inhaler technique, allergies, sleep-related breathing problems, low lung conditioning, or overlapping airway disease. At VAAYU, patients undergo a structured respiratory evaluation to identify why asthma control remains incomplete.",
  },

  {
    q: "When should I see an asthma specialist?",
    a: "You should seek specialist evaluation if symptoms continue despite treatment, inhaler use becomes frequent, breathing affects sleep or daily activity, or asthma attacks keep recurring. VAAYU evaluates both symptom control and underlying contributors affecting long-term breathing health.",
  },

  {
    q: "Can asthma affect sleep quality?",
    a: "Yes. Night-time cough, wheezing, chest tightness, and disturbed breathing can significantly affect sleep quality. VAAYU’s integrated respiratory and sleep-focused approach helps identify breathing issues that may worsen during sleep.",
  },

  {
    q: "Can breathing exercises help asthma?",
    a: "Selected patients may benefit from guided breathing retraining, improved activity conditioning, and breathing control techniques as part of a structured asthma-care plan at VAAYU.",
  },

  {
    q: "Can sleep apnea worsen asthma symptoms?",
    a: "Yes. Poor sleep quality and untreated sleep apnea may worsen breathing symptoms, fatigue, and asthma control in some patients. VAAYU evaluates respiratory and sleep-related breathing concerns together when clinically indicated.",
  },

  {
    q: "Why does my breathing worsen at night?",
    a: "Night-time breathing difficulty may occur due to airway inflammation, allergies, reflux, poor asthma control, or sleep-related breathing disorders. VAAYU’s evaluation process helps identify these overlapping contributors early.",
  },
];
  return (
    <motion.div
      className="asthma-page overflow-hidden bg-[#F7F8F3] text-[#2d3427]"
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
        <title>Severe Asthma & Long-Term Breathing Care in Bengaluru | Vaayu Chest & Sleep Specialists</title>
        <meta
  name="description"
  content="Asthma specialist care in Jayanagar, Bengaluru for wheezing, chronic cough, breathlessness, night-time symptoms and uncontrolled asthma with lung testing, inhaler optimization and structured follow-up at Vaayu Chest & Sleep Specialists."
/>
        <link rel="canonical" href="https://vaayuchest.com/specialty-clinic/asthma" />

        <meta
          property="og:title"
          content="Severe Asthma & Long-Term Breathing Care in Bengaluru | Vaayu"
        />
        <meta
          property="og:description"
          content="Specialist asthma care in Bengaluru for chronic cough, breathlessness, wheezing, night-time symptoms and uncontrolled asthma."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaayuchest.com/specialty-clinic/asthma" />
        <meta property="og:image" content="https://vaayuchest.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Severe Asthma & Long-Term Breathing Care in Bengaluru | Vaayu"
        />
        <meta
          name="twitter:description"
          content="Structured asthma care with specialist evaluation, lung testing, inhaler guidance, breathing recovery and follow-up support."
        />
        <meta name="twitter:image" content="https://vaayuchest.com/og-image.jpg" />
      </Helmet>

      <style>{`
        .asthma-page,
        .asthma-page * {
          box-sizing: border-box;
        }

        .asthma-page {
          overflow-x: hidden;
        }

        .asthma-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .asthma-section {
          border-radius: 34px;
          background: rgba(255,255,255,0.86);
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 24px 68px rgba(47,54,26,0.10);
        }

        .asthma-section-dark {
          border-radius: 34px;
          background: #4f5831;
          border: 1px solid rgba(215,222,201,0.16);
          box-shadow: 0 24px 68px rgba(47,54,26,0.18);
        }

        .asthma-card {
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 14px 34px rgba(47,54,26,0.08);
        }

        .asthma-heading {
          font-size: clamp(1.9rem, 3.1vw, 2.8rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .asthma-subheading {
          font-size: clamp(1.45rem, 2.2vw, 2.05rem);
          line-height: 1.16;
          letter-spacing: -0.03em;
          font-weight: 650;
        }

        .asthma-body {
          font-size: 15.5px;
          line-height: 1.82;
          color: #4f5a44;
        }

        .asthma-body-light {
          font-size: 15.5px;
          line-height: 1.82;
          color: #d7dec9;
        }

        .asthma-image {
          border-radius: 28px;
          box-shadow: 0 22px 58px rgba(47,54,26,0.14);
          width: 100%;
          min-height: 320px;
          object-fit: cover;
          object-position: center;
        }

        .asthma-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 30px;
          border-radius: 999px;
          background: #61724e;
          color: #fff8ef;
          font-size: 14.5px;
          font-weight: 750;
          transition: all .28s ease;
          box-shadow: 0 16px 40px rgba(47,54,26,0.22);
        }

        .asthma-btn:hover {
          transform: translateY(-2px);
          background: #4f5831;
          box-shadow: 0 22px 55px rgba(47,54,26,0.26);
        }

        .asthma-text-limit {
          max-width: 650px;
        }

        .asthma-pill {
          border-radius: 999px;
          background: #E6F0D4;
          color: #333;
          padding: 10px 16px;
          font-size: 14px;
          box-shadow: 0 10px 24px rgba(47,54,26,0.07);
        }

        @media (max-width: 760px) {
          .asthma-wrap {
            width: min(90%, 440px);
          }

          .asthma-section,
          .asthma-section-dark {
            border-radius: 26px;
          }

          .asthma-card {
            border-radius: 18px;
          }

          .asthma-image {
            min-height: 260px;
          }

          .asthma-btn {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .asthma-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="asthma-hero relative w-full min-h-[72svh] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 py-28 sm:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 w-full max-w-[760px] mx-auto rounded-[30px] sm:rounded-[34px] border border-white/20 bg-white/12 backdrop-blur-[14px] px-5 sm:px-9 md:px-12 py-8 sm:py-10 text-center text-[#fff8ef] shadow-[0_30px_80px_rgba(47,54,26,0.34)]">
          <h1 className="text-[clamp(1.85rem,4vw,3.45rem)] leading-[1.06] tracking-[-0.045em] font-[700]">
            Severe Asthma & Long-Term Breathing Care in Bengaluru
          </h1>

          <p className="mt-5 text-[clamp(15px,1.6vw,17.5px)] leading-[1.78] text-[#e6ebdf] max-w-[620px] mx-auto">
          Comprehensive asthma care for wheezing, chronic cough, breathlessness, recurrent flare-ups, uncontrolled asthma, and severe asthma symptoms — with specialist evaluation, advanced lung testing, inhaler optimization, and structured follow-up support in Bengaluru.
          </p>

          <p className="mt-4 text-xs sm:text-sm tracking-wide uppercase text-[#d7dec9]">
            Asthma Specialists • Airway Assessment • Breathing Recovery 
          </p>
        </div>
      </section>

      <div className="asthma-wrap py-12 sm:py-16 space-y-14 sm:space-y-16 lg:space-y-24">
        
        {/* Vaayu Promise */}
        <motion.section
          className="asthma-section grid md:grid-cols-2 gap-7 lg:gap-10 items-center p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <div>
            <h2 className="asthma-heading text-[#556B2F] mb-5">
              Why Some Asthma Patients Continue To Struggle
            </h2>

            <div className="asthma-text-limit">
              <p className="asthma-body">
                Many patients continue to experience breathlessness, cough, wheezing,
                fatigue, or disturbed sleep even after starting asthma medicines.
              </p>

              <p className="mt-5 asthma-body">
At VAAYU Chest & Sleep Specialists in Jayanagar, Bengaluru, we look beyond short-term symptom relief.        Our team evaluates airway inflammation, triggers, allergies,
                inhaler technique, lifestyle factors, sleep quality, and overlapping
                respiratory conditions to understand why control is incomplete.
              </p>
              <br></br>
              <p className="mt-5 asthma-body">
  Care is guided by experienced respiratory and sleep specialists who manage
  complex asthma, chronic cough, breathlessness, and overlapping sleep-related
  breathing concerns.
</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-6">
              {[
                "Advanced Airway Assessment",
                "Trigger & Allergy Analysis",
                "Sleep-Integrated Asthma Care",
                "Long-Term Asthma Monitoring",
              ].map((label, index) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={index}
className="rounded-[18px] border border-[#e4eadc] bg-[#fbfcf8] px-5 py-4 transition duration-300 hover:border-[#cfdac7]"                >
                  <p className="text-[15px] font-[550] text-[#3f4a36] leading-[1.5]">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <img
            src={consultImage}
            alt="Asthma specialist consultation in Bengaluru at Vaayu"
            className="asthma-image h-full"
            loading="lazy"
          />
        </motion.section>

        

        {/* What is Asthma */}
        <motion.section
          className="asthma-section-dark grid md:grid-cols-2 gap-7 lg:gap-10 items-center p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-white">
            <h2 className="asthma-heading mb-5">What is Asthma?</h2>

            <p className="asthma-body-light">
              Asthma is a chronic inflammatory airway condition that can cause
              wheezing, cough, chest tightness, and fluctuating breathing difficulty.
              Symptoms may worsen due to allergies, pollution, infections, exercise,
              weather changes, stress, or poor sleep.
            </p>

            <p className="mt-5 asthma-body-light">
              Some patients improve quickly with inhalers, while others need deeper
              evaluation because several factors may be contributing to poor asthma
              control.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[28px] shadow-[0_24px_68px_rgba(0,0,0,0.25)] aspect-[9/16] md:aspect-video bg-black">
<iframe
  loading="lazy"
                className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/TmrIuuZ_L_M?rel=0&modestbranding=1"
              title="Asthma awareness video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.section>

        {/* Triggers */}
        <motion.section
          className="asthma-section grid md:grid-cols-2 gap-7 lg:gap-10 items-center p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <img
            src={triggerImage}
            alt="Asthma triggers like pollen, dust, infection and smoke"
            className="asthma-image h-full"
            loading="lazy"
          />

          <div>
            <h2 className="asthma-heading text-[#556B2F] mb-5">
              Common Asthma Triggers
            </h2>

            <p className="asthma-body mb-5">
              Identifying triggers helps reduce flare-ups and improve day-to-day
              asthma control.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pollution, dust mites, pollen, or pet dander",
                "Respiratory infections like cold or flu",
                "Exercise or cold air",
                "Emotional stress or strong scents",
                "Smoking or secondhand smoke",
              ].map((trigger, index) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={index}
                  className="asthma-card bg-[#f4f6ef] p-5 text-sm"
                >
                  {trigger}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
<section className="bg-[#eef3e6] border-y border-[#d8e2cf]">
  <div className="asthma-wrap py-7">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        "Asthma Care in Jayanagar",
        "Advanced Lung Testing",
        "Structured Follow-Up",
      ].map((item, index) => (
        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border border-[#d9e4cf]
            bg-white/90
            backdrop-blur-sm
            px-6
            py-5
            shadow-[0_10px_30px_rgba(47,54,26,0.06)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_16px_40px_rgba(47,54,26,0.10)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbf5] to-transparent opacity-70" />

          <div className="relative flex items-center justify-center text-center">
            <p className="text-[15px] sm:text-[16px] font-semibold tracking-[-0.01em] text-[#556B2F] leading-relaxed">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* Symptoms */}
        <motion.section
          className="asthma-section grid md:grid-cols-2 gap-7 lg:gap-10 items-center p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <div>
            <h2 className="asthma-heading text-[#556B2F] mb-5">
              Symptoms That Need Attention
            </h2>

            <p className="mb-5 asthma-body">
              Early recognition helps prevent flare-ups. If symptoms are frequent,
              worsening, or disturbing sleep, it is important to get specialist
              guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
  "Frequent wheezing or chest tightness",
  "Breathlessness while walking or climbing stairs",
  "Night-time cough or disturbed sleep",
  "Repeated inhaler use",
  "Symptoms despite regular treatment",
  "Recurrent asthma attacks or emergency visits",
  "Reduced stamina or exercise tolerance",
  "Persistent cough that does not improve",
  "Allergies or seasonal worsening",
  "Snoring or poor sleep with breathing issues",
].map((symptom, index) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={index}
                  className="asthma-card p-5 text-left hover:bg-[#E6F0D4] transition"
                >
                  {symptom}
                </motion.div>
              ))}
            </div>

            <p className="mt-5 text-sm text-gray-700 leading-relaxed">
              Some persistent symptoms may overlap with{" "}
              <a href="/specialty-clinic/copd" className="text-[#556B2F] font-semibold underline">
                COPD
              </a>{" "}
              or sleep-related breathing problems, especially when cough or breathlessness
              continues despite treatment.
            </p>
          </div>

          <img
            src={symptomsImage}
            alt="Asthma symptoms such as wheezing, cough and breathlessness"
            className="asthma-image h-full"
            loading="lazy"
          />
        </motion.section>

        {/* Beyond Medications */}
        <motion.section
          className="asthma-section p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="asthma-heading text-[#556B2F] mb-5">
            Asthma Care Beyond Medications
          </h2>

          <p className="asthma-body max-w-[820px]">
            Asthma control often depends on more than medicines alone. Breathing
            efficiency, fitness level, sleep quality, allergies, stress, environment,
            and inhaler technique can all influence symptoms.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Medication review",
              "Inhaler technique correction",
              "Breathing retraining",
              "Trigger control",
              "Lifestyle guidance",
              "Follow-up planning",
            ].map((item, index) => (
              <span key={index} className="asthma-pill">
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Diagnosis */}
        <motion.section
          className="relative overflow-hidden text-center bg-cover bg-center text-white p-5 sm:p-8 lg:p-10 rounded-[26px] sm:rounded-[34px] shadow-[0_24px_68px_rgba(47,54,26,0.14)] border border-white/30"
          style={{ backgroundImage: `url(${diagnosisBg})` }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-[#2f361a]/60" />

          <div className="relative z-10">
            <h2 className="asthma-heading mb-5">How We Diagnose at Vaayu</h2>

            <p className="mb-6 max-w-3xl mx-auto leading-[1.82] text-[#fff8ef]">
              Accurate diagnosis helps match the right treatment to the right patient.
              Our team uses structured history, trigger review, lung function testing,
              and airway response assessment to understand asthma severity and control.
            </p>

            <div className="space-y-4 text-left max-w-2xl mx-auto">
              {[
                "Detailed symptom history and trigger analysis",
                "Spirometry to assess lung function and airways",
                "Peak flow monitoring for day-to-day variation",
                "Allergy evaluation where relevant",
                "Bronchodilator response assessment",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-white bg-[#556B2F] rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm text-white leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 max-w-3xl mx-auto text-sm text-white leading-relaxed">
              When needed, patients may also be guided toward{" "}
              <a href="/sleep-clinic" className="font-semibold underline">
                sleep evaluation
              </a>{" "}
              or{" "}
              <a href="/pulmonary-rehab" className="font-semibold underline">
                pulmonary rehabilitation
              </a>{" "}
              for more complete breathing care.
            </p>
          </div>
        </motion.section>

        {/* Why Not Improve */}
        <motion.section
          className="asthma-section p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="asthma-heading text-[#556B2F] mb-5">
            Why Some Asthma Patients Do Not Improve
          </h2>

          <p className="asthma-body mb-6 max-w-[780px]">
            When symptoms continue despite treatment, it may mean that another
            contributor is being missed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Poor inhaler technique",
              "Undiagnosed allergies",
              "Sleep apnea",
              "Chronic sinus disease",
              "Anxiety-related breathing patterns",
              "Obesity-related breathing difficulty",
              "Reduced lung conditioning",
              "Untreated reflux",
              "Overlapping COPD or airway disease",
            ].map((item, index) => (
              <div key={index} className="asthma-card p-5 text-sm leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Treatment */}
        <motion.section
          className="asthma-section grid md:grid-cols-2 gap-7 lg:gap-10 items-center p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <img
            src={treatmentImage}
            alt="Advanced asthma treatment and structured breathing support at Vaayu"
            className="asthma-image h-full"
            loading="lazy"
          />

          <div>
            <h2 className="asthma-heading text-[#556B2F] mb-5">
              Advanced Asthma Treatment & Breathing Support
            </h2>

            <p className="asthma-body">
              Asthma treatment at VAAYU is personalized based on symptom severity,
              trigger pattern, lung function, lifestyle, activity level, and treatment
              goals.
            </p>

            <p className="mt-5 asthma-body">
              The aim is to reduce flare-ups, improve confidence with breathing,
              support stamina, and help patients maintain better control in daily life.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Inhaler optimization",
                "Breathing retraining",
                "Exercise capacity improvement",
                "Vaccination support",
                "Smoking cessation",
                "Sleep-related breathing review",
                "Structured monitoring",
              ].map((item, index) => (
                <span key={index} className="asthma-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Lifestyle / Prevention */}
        <motion.section
          className="relative overflow-hidden text-center p-8 sm:p-12 lg:p-14 rounded-[26px] sm:rounded-[34px] text-white bg-cover bg-center shadow-[0_24px_68px_rgba(47,54,26,0.14)]"
          style={{ backgroundImage: `url(${journeyBg})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-[#2f361a]/70" />

          <div className="relative z-10">
            <h2 className="asthma-heading mb-5">Self-Care, Breathing & Prevention</h2>

            <p className="max-w-3xl mx-auto text-[#d7dec9] leading-[1.82]">
              Correct inhaler use, trigger control, physical activity, sleep quality,
              and timely reviews can help reduce flare-ups and support better everyday
              breathing.
            </p>
          </div>
        </motion.section>

        {/* Related Links */}
        <section className="asthma-section bg-[#F7FAF3] p-5 sm:p-7 lg:p-8">
          <h2 className="asthma-subheading text-[#556B2F] mb-4">
            Related Care at Vaayu
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed max-w-[760px]">
            Explore related services for chronic cough, breathlessness, sleep-related
            symptoms, rehabilitation, and long-term respiratory support.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/specialty-clinic/copd"
              className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition"
            >
              COPD Clinic
            </a>
            <a
              href="/specialty-clinic/ild"
              className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition"
            >
              ILD Clinic
            </a>
            <a
              href="/sleep-clinic"
              className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition"
            >
              Sleep Clinic
            </a>
            <a
              href="/pulmonary-rehab"
              className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition"
            >
              Pulmonary Rehabilitation
            </a>
            <a
              href="/rehab-wellness/stress-management"
              className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition"
            >
              Stress Management
            </a>
          </div>
        </section>

        {/* FAQ */}
        {/* FAQ */}
<section className="asthma-section p-5 sm:p-7 lg:p-10">
  <h2 className="asthma-subheading text-[#556B2F] mb-6">
    Asthma FAQs
  </h2>

  <div className="space-y-4">
    {faqs.map((faq, index) => {
      const isOpen = openFaq === index;

      return (
        <motion.div
          key={index}
          layout
          transition={{ duration: 0.3 }}
          className="asthma-card overflow-hidden"
        >
          <button
            onClick={() => setOpenFaq(isOpen ? null : index)}
            className="w-full flex items-center justify-between text-left p-5 sm:p-6"
          >
            <h3 className="font-semibold text-[#2d3427] text-[15px] sm:text-[16px] leading-relaxed pr-5">
              {faq.q}
            </h3>

            <div
              className={`shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              <span className="text-[#556B2F] text-2xl font-light">
                +
              </span>
            </div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.28,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="asthma-body text-[15px] leading-[1.8]">
                {faq.a}
              </p>
            </div>
          </motion.div>
        </motion.div>
      );

    })}
  </div>
</section>

<div className="sr-only">
  asthma specialist Bengaluru, severe asthma treatment Bengaluru,
  uncontrolled asthma specialist, chronic cough specialist,
  breathing difficulty while sleeping, wheezing at night,
  chest tightness after walking, breathlessness climbing stairs,
  inhaler not working properly, cough not going away,
  recurrent wheezing treatment, breathing problem at night,
  lung specialist for asthma, asthma doctor in Jayanagar Bengaluru,
  difficult asthma management, persistent cough and wheezing,
  sleep disturbance due to asthma, asthma flare up treatment,
  shortness of breath specialist Bengaluru
</div>
        {/* CTA */}
        <motion.section
          className="text-center mt-12 rounded-[26px] sm:rounded-[34px] bg-gradient-to-br from-[#4f5831] to-[#61724e] px-5 py-11 sm:px-10 sm:py-16 text-[#fff8ef] shadow-[0_30px_90px_rgba(47,54,26,0.2)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="asthma-heading mb-5">
Get Expert Evaluation For Persistent Asthma Symptoms
          </h3>

          <p className="mb-7 leading-relaxed max-w-3xl mx-auto text-[#d7dec9]">
            If wheezing, cough, breathlessness, flare-ups, poor sleep, or reduced
            stamina continue despite treatment, VAAYU can help assess the full picture
            and build a clearer asthma care plan.
          </p>

          <a
            href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
            target="_blank"
            rel="noopener noreferrer"
            className="asthma-btn bg-[#fff8ef] text-[#293018] hover:bg-[#e3f0df]"
          >
            BOOK AN APPOINTMENT
          </a>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AsthmaClinic;