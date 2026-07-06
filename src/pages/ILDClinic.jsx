import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import heroImage from "../assets/img/hm.png";
import rightImage from "../assets/img/a3.jpg";
import treatmentImage from "../assets/img/treatment-img.jpg";
import causeImage from "../assets/img/ac.jpg";
import journeyBg from "../assets/img/BANNER2.jpg";
import symptomsImage from "../assets/img/asj.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 22 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -22 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AccordionItem({ q, a, idx, open, setOpen }) {
  const isOpen = open === idx;

  return (
    <div className="ild-card overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-5 px-5 sm:px-6 py-5 text-left"
        onClick={() => setOpen(isOpen ? null : idx)}
        aria-expanded={isOpen}
      >
        <span className="font-[650] text-[#2d3427] text-[15px] sm:text-[16px] leading-relaxed">
          {q}
        </span>

        <span
          className={`shrink-0 text-[#556B2F] text-2xl font-light transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 sm:px-6 pb-6 pt-0 text-[#4f5a44] leading-[1.8] text-[15px]">
          {a}
        </div>
      </motion.div>
    </div>
  );
}

const ILDClinic = () => {
  const [open, setOpen] = useState(0);

  const faq = useMemo(
    () => [
      {
        q: "What exactly is ILD?",
        a: (
          <>
            ILD, or Interstitial Lung Disease, refers to a group of lung conditions
            where inflammation or scarring affects the lung tissue. At VAAYU,
            evaluation focuses on identifying the exact type of ILD, the possible
            cause, lung function impact, and the right long-term care pathway.
          </>
        ),
      },
      {
        q: "Why am I not getting better despite treatment for breathing problems?",
        a: (
          <>
            Persistent breathlessness, dry cough, or fatigue may sometimes be due to
            lung fibrosis or another complex respiratory condition rather than a simple
            infection or asthma-like problem. VAAYU provides structured ILD evaluation
            to identify the real cause instead of only repeating medicines.
          </>
        ),
      },
      {
        q: "Can ILD or lung fibrosis be controlled?",
        a: (
          <>
            Many ILD conditions need long-term monitoring, but symptoms and progression
            can often be managed better with the right diagnosis, medication review,
            pulmonary rehabilitation, oxygen assessment, and regular follow-up at a
            specialist respiratory center like VAAYU.
          </>
        ),
      },
      {
        q: "Can pulmonary rehabilitation help lung fibrosis?",
        a: (
          <>
            Yes, selected patients with lung fibrosis or ILD may benefit from pulmonary
            rehabilitation to improve breathlessness, stamina, exercise confidence, and
            quality of life. At VAAYU, rehab is integrated into ILD care when clinically
            appropriate.
          </>
        ),
      },
      {
        q: "Do all ILD patients need oxygen?",
        a: (
          <>
            Not every ILD patient needs oxygen. Oxygen requirement depends on lung
            function, walking capacity, oxygen levels during activity, and disease
            severity. VAAYU evaluates this through structured assessment and follow-up.
          </>
        ),
      },
      {
        q: "Do you provide second opinions for ILD diagnosis?",
        a: (
          <>
            Yes. VAAYU supports second-opinion evaluation for suspected ILD, lung
            fibrosis, abnormal HRCT findings, unexplained breathlessness, and patients
            who need clarity on diagnosis or long-term care planning.
          </>
        ),
      },
    ],
    []
  );

  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "VAAYU Chest & Sleep Specialists provides structured ILD diagnosis, lung fibrosis care, pulmonary rehabilitation, oxygen assessment, and long-term respiratory follow-up in Bengaluru.",
        },
      })),
    }),
    [faq]
  );

  return (
    <motion.div
      className="ild-page overflow-hidden bg-[#F7F8F3] text-[#2d3427]"
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
        <title>ILD & Lung Fibrosis Specialist in Bengaluru | VAAYU Chest</title>

        <meta
          name="description"
          content="Advanced ILD and lung fibrosis care in Jayanagar, Bengaluru for lung scarring, pulmonary fibrosis, dry cough, unexplained breathlessness and reduced stamina with HRCT review, lung testing, pulmonary rehabilitation and long-term respiratory support."
        />

        <link rel="canonical" href="https://vaayuchest.com/specialty-clinic/ild" />

        <meta
          property="og:title"
          content="Advanced ILD & Lung Fibrosis Care in Bengaluru | VAAYU"
        />
        <meta
          property="og:description"
          content="Specialist ILD care in Bengaluru with advanced diagnostics, lung fibrosis treatment planning, pulmonary rehabilitation and structured follow-up."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaayuchest.com/specialty-clinic/ild" />
        <meta property="og:image" content="https://vaayuchest.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Advanced ILD & Lung Fibrosis Care in Bengaluru | VAAYU"
        />
        <meta
          name="twitter:description"
          content="ILD and lung fibrosis care with HRCT review, lung function testing, pulmonary rehabilitation, oxygen assessment and long-term respiratory follow-up."
        />
        <meta name="twitter:image" content="https://vaayuchest.com/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            name: "Interstitial Lung Disease",
            alternateName: [
              "ILD",
              "Lung fibrosis",
              "Pulmonary fibrosis",
              "Lung scarring",
              "Unexplained breathlessness",
              "Dry cough with breathlessness",
              "Reduced oxygen levels",
            ],
          })}
        </script>
      </Helmet>

      <style>{`
        .ild-page,
        .ild-page * {
          box-sizing: border-box;
        }

        .ild-page {
          overflow-x: hidden;
        }

        .ild-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .ild-section {
          border-radius: 34px;
          background: rgba(255,255,255,0.86);
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 22px 56px rgba(47,54,26,0.09);
          content-visibility: auto;
          contain-intrinsic-size: 1px 900px;
        }

        .ild-section-dark {
          border-radius: 34px;
          background: #4f5831;
          border: 1px solid rgba(215,222,201,0.16);
          box-shadow: 0 22px 56px rgba(47,54,26,0.14);
        }

        .ild-card {
          border-radius: 20px;
          background: #ffffff;
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 12px 30px rgba(47,54,26,0.07);
        }

        .ild-heading {
          font-size: clamp(1.9rem, 3.1vw, 2.8rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .ild-subheading {
          font-size: clamp(1.45rem, 2.2vw, 2.05rem);
          line-height: 1.16;
          letter-spacing: -0.03em;
          font-weight: 650;
        }

        .ild-body {
          font-size: 15.5px;
          line-height: 1.82;
          color: #4f5a44;
        }

        .ild-body-light {
          font-size: 15.5px;
          line-height: 1.82;
          color: #d7dec9;
        }

        .ild-image {
          border-radius: 28px;
          box-shadow: 0 18px 46px rgba(47,54,26,0.12);
          width: 100%;
          min-height: 320px;
          object-fit: cover;
          object-position: center;
        }

        .ild-btn {
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
          box-shadow: 0 14px 32px rgba(47,54,26,0.18);
        }

        .ild-btn:hover {
          transform: translateY(-2px);
          background: #4f5831;
          box-shadow: 0 18px 42px rgba(47,54,26,0.22);
        }

        .ild-text-limit {
          max-width: 660px;
        }

        .ild-pill {
          border-radius: 999px;
          background: #E6F0D4;
          color: #333;
          padding: 10px 16px;
          font-size: 14px;
          box-shadow: 0 8px 20px rgba(47,54,26,0.06);
        }

        .ild-clean-card {
          border-radius: 18px;
          border: 1px solid #e4eadc;
          background: #fbfcf8;
          padding: 16px 18px;
          transition: all .28s ease;
        }

        .ild-clean-card:hover {
          border-color: #cfdac7;
          transform: translateY(-2px);
        }

        @media (max-width: 760px) {
          .ild-wrap {
            width: min(90%, 440px);
          }

          .ild-section,
          .ild-section-dark {
            border-radius: 26px;
          }

          .ild-card {
            border-radius: 18px;
          }

          .ild-image {
            min-height: 260px;
          }

          .ild-btn {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .ild-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        className="ild-hero relative w-full min-h-[72svh] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 py-28 sm:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full max-w-[780px] mx-auto rounded-[30px] sm:rounded-[34px] border border-white/20 bg-black/30 md:bg-white/12 md:backdrop-blur-[14px] px-5 sm:px-9 md:px-12 py-8 sm:py-10 text-center text-[#fff8ef] shadow-[0_18px_42px_rgba(47,54,26,0.22)]">
          <h1 className="text-[clamp(1.85rem,4vw,3.5rem)] leading-[1.06] tracking-[-0.045em] font-[700] break-words">
            Advanced ILD & Lung Fibrosis Care in Bengaluru
          </h1>

          <p className="mt-5 text-[clamp(15px,1.6vw,17.5px)] leading-[1.78] text-[#e6ebdf] max-w-[640px] mx-auto">
            Comprehensive care for interstitial lung disease(ILD), pulmonary fibrosis,
            lung scarring, dry cough, unexplained breathlessness, and progressive
            respiratory symptoms — with advanced diagnostics, rehabilitation support,
            and structured follow-up.
          </p>

        
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#eef3e6] border-y border-[#d8e2cf]">
        <div className="ild-wrap py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            {[
              "ILD & Lung Fibrosis Care",
              "Advanced HRCT & Lung Testing",
              "Pulmonary Rehabilitation",
              "Long-Term Respiratory Support",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-full bg-white px-4 py-3 text-[13px] sm:text-sm font-semibold text-[#556B2F] shadow-[0_8px_22px_rgba(47,54,26,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ild-wrap py-12 sm:py-16 space-y-14 sm:space-y-16 lg:space-y-24 overflow-hidden">
        {/* INTRO */}
        <motion.section
          className="ild-section grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10 items-center p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <div>
            <h2 className="ild-heading text-[#556B2F] mb-5">
              Comprehensive ILD & Lung Fibrosis Care Beyond Medications
            </h2>

            <div className="ild-text-limit">
              <p className="ild-body">
                At VAAYU Chest & Sleep Specialists in Jayanagar, Bengaluru, ILD care
                extends beyond medicines alone. Patients with lung fibrosis often need
                structured evaluation, oxygen assessment, pulmonary rehabilitation,
                exercise support, and long-term monitoring.
              </p>

              <p className="mt-5 ild-body">
                Many patients experience unexplained breathlessness, dry cough, fatigue,
                reduced stamina, or repeated hospital visits before receiving an accurate
                ILD diagnosis. Early specialist evaluation can improve clarity, planning,
                and long-term quality of life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Advanced ILD Evaluation",
                "HRCT & Lung Testing Review",
                "Rehab for Lung Fibrosis",
                "Oxygen & Follow-Up Planning",
              ].map((item, index) => (
                <div key={index} className="ild-clean-card">
                  <p className="text-[15px] font-[550] text-[#3f4a36] leading-[1.5]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            src={rightImage}
            alt="Consultation with ILD and lung fibrosis specialist in Bengaluru"
            className="ild-image h-full"
            loading="lazy"
            decoding="async"
          />
        </motion.section>

        {/* WHAT IS ILD */}
        <motion.section
          className="ild-section-dark text-center p-6 sm:p-9 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="ild-heading text-white mb-5">What is ILD?</h2>

          <p className="max-w-3xl mx-auto ild-body-light">
            Interstitial Lung Disease is a group of conditions that affect the lung
            tissue and may cause inflammation, scarring, stiffness, and reduced oxygen
            exchange. This can lead to breathlessness, dry cough, fatigue, and reduced
            exercise capacity.
          </p>

          <p className="max-w-3xl mx-auto ild-body-light mt-5">
            Some patients are treated repeatedly for asthma, infection, or general
            breathing problems before ILD is identified correctly. At VAAYU, advanced
            respiratory evaluation helps differentiate complex lung diseases earlier
            and more accurately.
          </p>
        </motion.section>

        {/* WHO SHOULD SEE */}
        <motion.section
          className="ild-section p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="ild-heading text-[#556B2F] mb-5">
            Who Should Consider ILD Evaluation?
          </h2>

          <p className="ild-body mb-6 max-w-[780px]">
            You may need specialist ILD evaluation if breathing symptoms persist,
            scans show lung scarring, or your stamina is reducing despite treatment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Persistent dry cough",
              "Breathlessness while walking",
              "Reduced exercise tolerance",
              "Lung scarring on CT scan",
              "Oxygen level drops",
              "Repeated pneumonia or admissions",
              "Fatigue with breathing difficulty",
              "Multiple failed treatments elsewhere",
            ].map((item, index) => (
              <div key={index} className="ild-clean-card">
                <p className="text-[15px] font-[550] text-[#3f4a36] leading-[1.5]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

{/* CAUSES */}
<motion.section
  className="ild-section p-5 sm:p-7 lg:p-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={slideInLeft}
>
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="ild-heading text-[#556B2F] mb-5">
      What Causes ILD?
    </h2>

    <p className="ild-body mb-8 max-w-3xl mx-auto">
      ILD may develop due to autoimmune disease, environmental exposure,
      medication reactions, infections, smoking-related factors, or unknown
      causes. Identifying the cause helps guide treatment and long-term follow-up.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        "Rheumatoid arthritis",
        "Pigeon exposure",
        "Mould exposure",
        "Occupational exposures",
        "Medication or radiation history",
        "Smoking or genetic risk",
      ].map((cause, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="ild-clean-card bg-white border border-[#dfe6d4] rounded-2xl p-5 shadow-[0_10px_28px_rgba(47,54,26,0.08)]"
        >
          <p className="text-[15px] font-[600] text-[#3f4a36] leading-[1.5]">
            {cause}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

        
        {/* DIAGNOSIS */}
        <motion.section
          className="ild-section text-center p-5 sm:p-8 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="ild-heading text-[#556B2F] mb-4">
            How ILD is Diagnosed & Managed
          </h2>

          <p className="mb-7 max-w-3xl mx-auto ild-body">
            Advanced lung diagnostics help identify early lung damage, hidden exercise
            limitation, oxygen reduction, and progressive fibrosis patterns that may
            not be clear through basic testing alone.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "High-resolution CT scan review",
              "Pulmonary Function Tests",
              "DLCO and oxygen assessment",
              "Autoimmune blood work",
              "6-minute walk test",
              "Bronchoscopy or biopsy if needed",
            ].map((step, index) => (
              <div key={index} className="ild-clean-card">
                <p className="text-[15px] font-[550] text-[#3f4a36] leading-[1.5]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* TREATMENT */}
        <motion.section
          className="ild-section grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10 items-center p-5 sm:p-7 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <img
            src={treatmentImage}
            alt="Structured ILD treatment and lung fibrosis support at VAAYU"
            className="ild-image h-full"
            loading="lazy"
            decoding="async"
          />

          <div>
            <h2 className="ild-heading text-[#556B2F] mb-5">
              Structured ILD Management & Lung Fibrosis Support
            </h2>

            <p className="ild-body mb-5">
              ILD management often requires more than medications alone. VAAYU combines
              medical treatment, pulmonary rehabilitation, oxygen optimization, breathing
              recovery strategies, exercise conditioning, and long-term follow-up to
              support respiratory stability.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Antifibrotic medication review",
                "Immunosuppressive therapy if needed",
                "Pulmonary rehabilitation",
                "Oxygen assessment",
                "Exercise conditioning",
                "Smoking cessation support",
                "Long-term follow-up",
              ].map((item, index) => (
                <span key={index} className="ild-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* JOURNEY */}
        <motion.section
          className="relative ild-section text-center p-8 sm:p-12 lg:p-14 text-white bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${journeyBg})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-[#2f361a]/70" />

          <div className="relative z-10">
            <h2 className="ild-heading mb-5">
              Long-Term Care For Better Breathing Stability
            </h2>

            <p className="max-w-3xl mx-auto text-[#d7dec9] leading-[1.82]">
              Living with ILD can feel uncertain, but early diagnosis, regular monitoring,
              rehabilitation support, and timely treatment planning can help patients
              manage symptoms with more confidence.
            </p>
          </div>
        </motion.section>

        {/* FAQ */}
        <section id="ild-faq" className="ild-section p-5 sm:p-7 lg:p-10">
          <h2 className="ild-subheading text-[#556B2F] mb-4">ILD FAQs</h2>

          <p className="mb-7 text-[#5d6850] leading-relaxed max-w-[760px]">
            Quick answers about ILD, lung fibrosis treatment, pulmonary rehabilitation,
            oxygen assessment, and specialist respiratory care at VAAYU.
          </p>

          <div className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem
                key={idx}
                idx={idx}
                q={item.q}
                a={item.a}
                open={open}
                setOpen={setOpen}
              />
            ))}
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="ild-section bg-[#F7FAF3] p-5 sm:p-7 lg:p-8">
          <h2 className="ild-subheading text-[#556B2F] mb-4">
            Related Care at VAAYU
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed max-w-[760px]">
            Explore related services for breathlessness, chronic cough, sleep-related
            symptoms, pulmonary rehabilitation, and long-term respiratory support.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              ["Asthma Clinic", "/specialty-clinic/asthma"],
              ["COPD Clinic", "/specialty-clinic/copd"],
              ["Sleep Clinic", "/sleep-clinic"],
              ["Pulmonary Rehabilitation", "/pulmonary-rehab"],
              ["Stress Management", "/rehab-wellness/stress-management"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <div className="sr-only">
          ILD specialist Bengaluru, lung fibrosis treatment Bengaluru,breathing specialist near Jayanagar, pulmonary
          fibrosis rehabilitation, breathing problem specialist Bengaluru , shortness of breath doctor Bengaluru, unexplained breathlessness, dry cough specialist,
          oxygen assessment lung disease, pulmonary rehabilitation Bengaluru,best pulmonologist near me,best lung doctor in South Bengaluru, lung
          scarring treatment, dry cough not going away ,interstitial lung disease care, breathlessness while
          walking, pulmonary fibrosis doctor Jayanagar, ILD second opinion Bengaluru.
        </div>

        {/* CTA */}
        <motion.section
          className="text-center mt-12 rounded-[26px] sm:rounded-[34px] bg-gradient-to-br from-[#4f5831] to-[#61724e] px-5 py-11 sm:px-10 sm:py-16 text-[#fff8ef] shadow-[0_24px_70px_rgba(47,54,26,0.18)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="ild-heading mb-5">
            Get Expert Evaluation For ILD & Lung Fibrosis
          </h3>

          <p className="mb-7 leading-relaxed max-w-3xl mx-auto text-[#d7dec9]">
            If dry cough, breathlessness, lung scarring, reduced stamina, or low oxygen
            levels are affecting daily life, VAAYU can help assess the full picture and
            build a structured care plan in Jayanagar, Bengaluru.
          </p>

          <a
            href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
            target="_blank"
            rel="noopener noreferrer"
            className="ild-btn bg-[#fff8ef] text-[#293018] hover:bg-[#e3f0df]"
          >
            BOOK AN APPOINTMENT
          </a>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ILDClinic;