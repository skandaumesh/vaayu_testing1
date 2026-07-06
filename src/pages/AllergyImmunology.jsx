import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import heroImage from "../assets/img/adult-allergy.jpg";
import overviewImage from "../assets/img/doctor-from-future-concept.jpg";
import testImage from "../assets/img/skin-allergy-reaction-test-arm.jpg";
import treatmentImage from "../assets/img/woman-suffering-from-flower-allergy.jpg";
import triggerImage from "../assets/img/hands-patient-suffering-from-psoriasis.jpg";
import ctaBgImage from "../assets/img/cta-bg.jpg";

const T = {
  bg: "#58623b",
  surface: "#4f5831",
  green: "#61724e",
  sage: "#9fab90",
  light: "#eef4e9",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const fadeIn = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function AllergyImmunology() {
  const Section = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="allergy-page">
      <Helmet>
        <title>
          Allergy & Immunology | Allergy Testing, Treatment & Relief | Vaayu
        </title>
        <meta
          name="description"
          content="Vaayu’s Allergy & Immunology clinic offers expert allergy testing, personalized allergy treatment, and long-term allergy relief. Get precise diagnosis for seasonal, food, skin, and respiratory allergies."
        />
        <meta
          name="keywords"
          content="allergy, allergy testing, allergy treatment, allergy relief, allergy triggers, allergy specialists, immunology, seasonal allergies, food allergy, skin allergy"
        />
        <meta property="og:title" content="Allergy & Immunology at Vaayu" />
        <meta
          property="og:description"
          content="Expert allergy testing and allergy treatment to help you breathe easier. Personalized plans for lasting allergy relief."
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Vaayu Allergy & Immunology Clinic",
            medicalSpecialty: ["Allergy", "Immunology", "Pulmonology"],
            url: "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists",
            description:
              "Allergy testing and allergy treatment with personalized plans for long-term relief.",
          })}
        </script>
      </Helmet>

      <style>{`
        .allergy-page,
        .allergy-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        html,
        body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .allergy-page {
          width: 100%;
          overflow-x: hidden;
          background: ${T.light};
          color: ${T.text};
        }

        .allergy-page img {
          max-width: 100%;
          display: block;
        }

        .allergy-page section {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .allergy-wrap {
          width: min(92%, 1240px);
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .allergy-chip {
          display: inline-flex;
          align-items: center;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.28);
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .allergy-chip.light {
          background: ${T.white};
          border: 1px solid ${T.border};
          color: ${T.green};
        }

        .allergy-hero {
          position: relative;
          min-height: 86svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 132px 0 88px;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center;
        }

        .allergy-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(47,54,26,.88) 0%, rgba(47,54,26,.70) 52%, rgba(97,114,78,.42) 100%);
        }

        .allergy-hero-card {
          width: min(100%, 920px);
          margin: 0 auto;
          text-align: center;
          padding: 46px 48px;
          border-radius: 34px;
          background: rgba(255,255,255,.13);
          border: 1px solid rgba(255,255,255,.26);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 28px 80px rgba(47,54,26,.35);
          color: #ffffff;
        }

        .allergy-hero h1 {
          margin: 20px 0 0;
          font-size: clamp(2.15rem, 5vw, 4.35rem);
          font-weight: 600;
          line-height: 1.12;
          letter-spacing: -0.03em;
        }

        .allergy-hero p {
          margin: 20px auto 0;
          max-width: 760px;
          font-size: 15.5px;
          line-height: 1.78;
          color: rgba(255,255,255,.88);
        }

        .allergy-section {
          padding: 88px 0;
          background: ${T.light};
        }

        .allergy-section.white {
          background: ${T.white};
        }

        .allergy-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(30px, 5vw, 56px);
          align-items: center;
        }

        .allergy-grid > * {
          min-width: 0;
        }

        .allergy-card {
          background: ${T.white};
          border: 1px solid ${T.border};
          border-radius: 30px;
          padding: 34px;
          box-shadow: 0 20px 52px rgba(47,54,26,.10);
        }

        .allergy-card h2,
        .allergy-content h2 {
          margin: 0 0 16px;
          font-size: clamp(1.8rem, 3.2vw, 2.75rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: ${T.text};
        }

        .allergy-card p,
        .allergy-content p {
          margin: 0 0 18px;
          color: ${T.muted};
          font-size: 15px;
          line-height: 1.78;
        }

        .allergy-card ul,
        .allergy-content ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 12px;
        }

        .allergy-card li,
        .allergy-content li {
          padding: 13px 15px;
          border-radius: 16px;
          background: #f7faf4;
          border: 1px solid rgba(97,114,78,.12);
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.6;
        }

        .allergy-content strong,
        .allergy-card strong {
          color: ${T.text};
          font-weight: 700;
        }

        .allergy-img-card {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(47,54,26,.16);
          border: 1px solid rgba(97,114,78,.12);
          background: ${T.white};
        }

        .allergy-img-card img {
          width: 100%;
          height: 430px;
          object-fit: cover;
        }

        .treatment-list {
          display: grid;
          gap: 14px;
        }

        .treatment-item {
          padding: 16px 18px;
          border-radius: 18px;
          background: ${T.white};
          border: 1px solid ${T.border};
          box-shadow: 0 12px 30px rgba(47,54,26,.08);
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.65;
        }

        .allergy-cta {
          position: relative;
          padding: 96px 0;
          background-image: url(${ctaBgImage});
          background-size: cover;
          background-position: center;
        }

        .allergy-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(47,54,26,.90), rgba(79,88,49,.82));
        }

        .allergy-cta-card {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          border-radius: 34px;
          padding: 52px 34px;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.22);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(47,54,26,.30);
          color: #ffffff;
        }

        .allergy-cta-card h3 {
          margin: 0;
          font-size: clamp(1.85rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .allergy-cta-card p {
          margin: 16px auto 0;
          max-width: 680px;
          color: rgba(255,255,255,.86);
          font-size: 15.5px;
          line-height: 1.75;
        }

        .allergy-cta-card a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          padding: 14px 30px;
          border-radius: 999px;
          background: ${T.white};
          color: ${T.green};
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,.75);
          box-shadow: 0 16px 38px rgba(47,54,26,.22);
        }

        @media (max-width: 900px) {
          .allergy-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .allergy-wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .allergy-hero {
            min-height: auto;
            padding: 112px 0 70px;
          }

          .allergy-hero-card,
          .allergy-card,
          .allergy-cta-card {
            border-radius: 24px;
            padding: 24px;
          }

          .allergy-hero h1 {
            font-size: clamp(2rem, 9vw, 3.2rem);
          }

          .allergy-hero p,
          .allergy-card p,
          .allergy-content p,
          .allergy-cta-card p {
            font-size: 14px;
          }

          .allergy-section {
            padding: 64px 0;
          }

          .allergy-img-card img {
            height: 300px;
          }

          .allergy-card li,
          .allergy-content li,
          .treatment-item {
            font-size: 13.5px;
          }

          .allergy-cta {
            padding: 72px 0;
          }

          .allergy-cta-card a {
            width: 100%;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .allergy-page section {
            min-height: auto;
          }

          .allergy-page img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }

          [style*="backdrop-filter"] {
            -webkit-backdrop-filter: blur(18px);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="allergy-hero" aria-label="Allergy hero banner">
        <div className="allergy-wrap">
          <motion.div
            className="allergy-hero-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <span className="allergy-chip">Allergy & Immunology</span>
            <h1>Allergy & Immunology at Vaayu – Expert Allergy Care</h1>
            <p>
              Expert <strong>allergy</strong> evaluation, precise{" "}
              <strong>allergy testing</strong>, and targeted{" "}
              <strong>allergy treatment</strong> to help you breathe, live, and
              thrive better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="allergy-section">
        <div className="allergy-wrap allergy-grid">
          <Section>
            <div className="allergy-img-card">
              <img
                src={overviewImage}
                alt="Allergy and immunology specialist overview at Vaayu"
                loading="lazy"
              />
            </div>
          </Section>

          <Section>
            <div className="allergy-card">
              <h2>What is Allergy & Immunology?</h2>
              <p>
                <strong>Allergy and immunology</strong> is the specialty that
                addresses immune system issues—like seasonal{" "}
                <strong>allergies</strong>, asthma, food sensitivities, and
                autoimmune conditions. At Vaayu, our{" "}
                <strong>allergy clinic</strong> provides precise diagnosis and
                personalized plans for long-term{" "}
                <strong>allergy relief</strong>.
              </p>

              <ul>
                <li>Accurate diagnosis for allergies, asthma, and immune issues</li>
                <li>
                  Evidence-based <strong>allergy treatment</strong>
                </li>
                <li>
                  Personalized plans for prevention & long-term{" "}
                  <strong>allergy</strong> control
                </li>
                <li>Multidisciplinary support across specialties</li>
              </ul>
            </div>
          </Section>
        </div>
      </section>

      {/* Allergy Testing */}
      <section className="allergy-section white">
        <div className="allergy-wrap allergy-grid">
          <Section>
            <div className="allergy-content">
              <span className="allergy-chip light">Allergy Testing</span>
              <h2>Allergy Testing</h2>
              <p>
                Our <strong>allergy testing</strong> pinpoints the root cause of
                symptoms so your <strong>allergy</strong> care plan is accurate
                and effective.
              </p>

              <p>
                <strong>Types of Allergy Tests:</strong>
              </p>

              <ul>
                <li>
                  <strong>Skin Prick Test:</strong> Detects immediate{" "}
                  <strong>allergy</strong> reactions.
                </li>
                <li>
                  <strong>Intradermal Test:</strong> For subtle reactions under
                  the skin.
                </li>
                <li>
                  <strong>Patch Test:</strong> For delayed skin{" "}
                  <strong>allergy</strong> reactions.
                </li>
                <li>
                  <strong>Blood Tests (IgE):</strong> Measures allergen-specific
                  IgE levels.
                </li>
              </ul>
            </div>
          </Section>

          <Section>
            <div className="allergy-img-card">
              <img
                src={testImage}
                alt="Skin allergy testing and blood IgE tests at Vaayu"
                loading="lazy"
              />
            </div>
          </Section>
        </div>
      </section>

      {/* Treatment */}
      <section className="allergy-section">
        <div className="allergy-wrap allergy-grid">
          <Section>
            <div className="allergy-img-card">
              <img
                src={treatmentImage}
                alt="Allergy treatment and care for seasonal and skin allergies"
                loading="lazy"
              />
            </div>
          </Section>

          <Section>
            <div className="allergy-content">
              <span className="allergy-chip light">Treatments & Care</span>
              <h2>Allergy Treatments & Care</h2>

              <p>
                Our <strong>allergy treatment</strong> plans address the root of
                immune overreactions and help you manage symptoms for lasting{" "}
                <strong>allergy relief</strong>.
              </p>

              <div className="treatment-list">
                {[
                  ["Antihistamines", "Ease sneezing, itching, and runny nose."],
                  ["Decongestants", "Relieve sinus pressure and nasal swelling."],
                  ["Nasal corticosteroids", "Lower inflammation in airways."],
                  [
                    "Leukotriene modifiers",
                    "Block inflammation-related chemicals.",
                  ],
                  [
                    "Immunotherapy",
                    "Long-term allergy control via controlled exposure.",
                  ],
                ].map(([title, desc]) => (
                  <div key={title} className="treatment-item">
                    <strong>{title}:</strong> {desc}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Triggers */}
      <section className="allergy-section white">
        <div className="allergy-wrap allergy-grid">
          <Section>
            <div className="allergy-content">
              <span className="allergy-chip light">Common Triggers</span>
              <h2>Common Allergy Triggers</h2>

              <p>
                Identifying your <strong>allergy triggers</strong> is the first
                step to effective prevention and <strong>allergy</strong>{" "}
                control.
              </p>

              <ul>
                <li>
                  <strong>Pollen:</strong> From trees, grasses, and plants.
                </li>
                <li>
                  <strong>Dust mites:</strong> In furniture, carpets, and
                  bedding.
                </li>
                <li>
                  <strong>Animal dander:</strong> From pets with fur or feathers.
                </li>
                <li>
                  <strong>Mold spores:</strong> Thrive in moist indoor areas.
                </li>
              </ul>
            </div>
          </Section>

          <Section>
            <div className="allergy-img-card">
              <img
                src={triggerImage}
                alt="Common allergy triggers including pollen, dust mites, and dander"
                loading="lazy"
              />
            </div>
          </Section>
        </div>
      </section>

      {/* Final CTA */}
      <section className="allergy-cta">
        <div className="allergy-wrap">
          <motion.div
            className="allergy-cta-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Allergy Relief Starts at Vaayu</h3>

            <p>
              Whether it’s seasonal, food, skin, or respiratory{" "}
              <strong>allergy</strong>, our allergy specialists deliver
              evidence-based care to help you breathe easier.
            </p>

            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}