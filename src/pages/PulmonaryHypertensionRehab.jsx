import React from "react";

// Image imports (keep them all the same as requested)
import heroBg from "../assets/img/a1.jpg";
import rehabImage from "../assets/img/pulmonary-rehab12.jpg";
import bgRespiratoryCare from "../assets/img/ONETWO.jpg";
import rehabCta from "../assets/img/pulmonary-rehab.jpg";
import specialtyImage from "../assets/img/pulmonary-rehab12.jpg";

const PulmonaryHypertensionRehab = () => {
  const features = [
    {
      title: "1. Supervised Exercise Training",
      summary: "Low-intensity, expert-monitored workouts to:",
      list: [
        "Improve oxygen use",
        "Strengthen muscles",
        "Boost daily stamina",
      ],
    },
    {
      title: "2. Breathing Techniques",
      summary: "Exercises to ease breathlessness and anxiety:",
      list: [
        "Pursed-lip & diaphragmatic breathing",
        "Inspiratory muscle training",
      ],
    },
    {
      title: "3. Diet & Nutrition",
      summary: "Plans crafted by expert dietitians for heart and lung health:",
      list: [
        "Low-sodium, anti-inflammatory diets",
        "Energy and weight management",
      ],
    },
    {
      title: "4. Psychological Support",
      summary: "Caring for emotional well-being with:",
      list: [
        "Counseling & mindfulness sessions",
        "Peer support and stress management",
      ],
    },
    {
      title: "5. Medication & Oxygen Monitoring",
      summary: "Coordinated care with your PH specialist to ensure:",
      list: [
        "Correct medication use and adherence",
        "Safe oxygen therapy and side-effect tracking",
      ],
    },
  ];

  return (
    <div
      className="overflow-hidden bg-[#F7F8F3] text-[#2d3427]"
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        WebkitFontSmoothing: "antialiased",
        textRendering: "geometricPrecision",
      }}
    >
      <style>{`
        * {
          box-sizing: border-box;
        }

        .ph-wrap {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .ph-section {
          border-radius: 34px;
          background: rgba(255,255,255,0.84);
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 24px 68px rgba(47,54,26,0.10);
        }

        .ph-card {
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid rgba(97,114,78,0.12);
          box-shadow: 0 16px 40px rgba(47,54,26,0.08);
        }

        .ph-heading {
          font-size: clamp(2rem, 3.4vw, 3rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .ph-subheading {
          font-size: clamp(1.55rem, 2.4vw, 2.2rem);
          line-height: 1.15;
          letter-spacing: -0.03em;
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
        }

        .ph-btn:hover {
          transform: translateY(-2px);
          background: #4f5831;
          box-shadow: 0 24px 55px rgba(47,54,26,0.28);
        }

        @media (max-width: 760px) {
          .ph-wrap {
            width: min(90%, 440px);
          }

          .ph-section {
            border-radius: 24px;
          }

          .ph-card {
            border-radius: 18px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .ph-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="ph-hero relative w-full min-h-[72svh] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 py-32 overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 w-full max-w-[820px] mx-auto rounded-[34px] border border-white/20 bg-white/12 backdrop-blur-[14px] px-6 sm:px-9 md:px-12 py-8 sm:py-10 text-center text-[#fff8ef] shadow-[0_30px_80px_rgba(47,54,26,0.34)]">
          <h1 className="text-[clamp(2.3rem,5vw,5rem)] leading-[1.02] tracking-[-0.055em] font-[700]">
            Pulmonary Hypertension Rehabilitation
          </h1>

          <p className="mt-5 text-[clamp(15px,1.6vw,18px)] leading-[1.8] text-[#e6ebdf] max-w-2xl mx-auto">
            Breathe easier, live stronger. A dedicated rehab program designed to restore your energy, confidence, and lung health.
          </p>
        </div>
      </section>

      <div className="ph-wrap py-14 sm:py-16 space-y-14 sm:space-y-20 lg:space-y-24">

        {/* Intro */}
        <section className="ph-section p-6 sm:p-8 lg:p-10">
          <h2 className="ph-heading text-[#556B2F] mb-5">
            Pulmonary Hypertension Rehabilitation
          </h2>

          <p className="ph-body">
            Pulmonary Hypertension (PH) can be a life-altering condition, but with the right support, patients can regain control of their health and quality of life. Our Pulmonary Hypertension Rehabilitation Program is a comprehensive, multi-disciplinary approach designed to manage symptoms, improve stamina, and enhance overall well-being.
          </p>
        </section>

        {/* Features */}
        <section className="ph-section grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10">
          
          {/* Image */}
          <div>
            <img
              src={specialtyImage}
              alt="Pulmonary rehabilitation support"
              className="ph-image min-h-[320px] h-full"
            />
          </div>

          {/* Features */}
          <div>
            <h2 className="ph-heading text-[#5B6641] mb-6">
              Our Key Rehab Pillars
            </h2>

            <div className="space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="ph-card p-5 flex items-start gap-4"
                >
                  <div className="text-[#556B2F] text-lg mt-1">
                    ✔
                  </div>

                  <div>
                    <p className="font-semibold text-[#2d3427] leading-relaxed">
                      {item.title}
                    </p>

                    <p className="text-[#4f5a44] leading-relaxed mt-1">
                      {item.summary}
                    </p>

                    <ul className="list-disc list-inside text-[#5c6851] text-sm mt-3 space-y-1">
                      {item.list.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section
          className="relative overflow-hidden rounded-[34px] bg-cover bg-center py-16 sm:py-20 px-5 sm:px-8"
          style={{ backgroundImage: `url(${bgRespiratoryCare})` }}
        >
          <div className="absolute inset-0 bg-[#2f361a]/55"></div>

          <div className="relative z-10 max-w-3xl mx-auto bg-white/88 backdrop-blur-md p-6 sm:p-10 rounded-[28px] shadow-[0_24px_68px_rgba(47,54,26,0.16)]">
            <h2 className="ph-subheading text-[#556B2F] mb-5">
              Who Should Join?
            </h2>

            <p className="ph-body">
              Our program is ideal for those recently diagnosed with PH, post-hospitalization, or struggling with breathlessness, fatigue, or daily activities. It’s time to reclaim control.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden rounded-[34px] bg-cover bg-center py-16 sm:py-20 px-5 sm:px-8 text-white"
          style={{ backgroundImage: `url(${rehabCta})` }}
        >
          <div className="absolute inset-0 bg-[#2f361a]/70"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="ph-heading mb-5">
              Start Your Recovery Today
            </h2>

            <p className="text-[#d7dec9] leading-[1.85] text-[15.5px] mb-8">
              Take the first step towards better lung health, improved stamina, and a renewed sense of well-being.
            </p>

            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
              target="_blank"
              rel="noopener noreferrer"
              className="ph-btn"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PulmonaryHypertensionRehab;