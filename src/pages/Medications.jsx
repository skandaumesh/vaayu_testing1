import React from "react";

import heroImg from "../assets/img/home-medications-hero.png";
import medsImg from "../assets/img/home-medications-delivery.jpg";
import bgServices from "../assets/img/bg-services-testing.jpg";
import bgContact from "../assets/img/social impact.jpg";
import whyImg from "../assets/img/treatment-img.jpg";

const T = {
  bg: "#58623b",
  dark: "#2F361A",
  surface: "#4f5831",
  sage: "#61724e",
  light: "#eef4e9",
  cream: "#fff8ef",
  muted: "#d7dec9",
  textDark: "#34401f",
};

const HomeMedications = () => {
  return (
    <div className="home-medications-page">
      <style>{`
        .home-medications-page,
        .home-medications-page * {
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hm-section {
          position: relative;
          overflow: hidden;
        }

        .hm-container {
          width: min(92%, 1200px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hm-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: ${T.muted};
          border: 1px solid rgba(215,222,201,.26);
          background: rgba(255,248,239,.08);
        }

        .hm-chip::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.muted};
        }

        .hm-hero {
          min-height: 88svh;
          display: flex;
          align-items: center;
          padding: 140px 0 90px;
          background-image: linear-gradient(90deg, rgba(47,54,26,.92), rgba(47,54,26,.78), rgba(97,114,78,.58)), url(${heroImg});
          background-size: cover;
          background-position: center;
          color: ${T.cream};
        }

        .hm-hero-card {
          max-width: 820px;
          padding: clamp(28px, 5vw, 48px);
          border-radius: 32px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.24);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 30px 90px rgba(47,54,26,.35);
        }

        .hm-hero h1 {
          margin: 18px 0 0;
          font-size: clamp(2.25rem, 5vw, 4.25rem);
          line-height: 1.1;
          letter-spacing: -0.035em;
          font-weight: 650;
        }

        .hm-hero h2 {
          margin-top: 18px;
          max-width: 760px;
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.75;
          font-weight: 400;
          color: ${T.muted};
        }

        .hm-split {
          padding: 90px 0;
          background: ${T.light};
        }

        .hm-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: center;
        }

        .hm-image-card {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(47,54,26,.18);
          border: 1px solid rgba(97,114,78,.18);
          background: #fff;
        }

        .hm-image-card img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
        }

        .hm-content-card {
          padding: clamp(26px, 4vw, 44px);
          border-radius: 30px;
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 18px 50px rgba(47,54,26,.1);
        }

        .hm-content-card h3,
        .hm-services h3,
        .hm-why h3,
        .hm-cta h3 {
          margin: 0;
          font-size: clamp(1.7rem, 3vw, 2.55rem);
          line-height: 1.18;
          letter-spacing: -0.025em;
          font-weight: 650;
        }

        .hm-content-card h3,
        .hm-why h3 {
          color: ${T.textDark};
        }

        .hm-content-card p {
          margin-top: 16px;
          color: #5f6b50;
          font-size: 15.5px;
          line-height: 1.75;
        }

        .hm-services {
          padding: 92px 0;
          background-image: linear-gradient(135deg, rgba(47,54,26,.9), rgba(79,88,49,.82)), url(${bgServices});
          background-size: cover;
          background-position: center;
          color: ${T.cream};
        }

        .hm-services-head {
          max-width: 720px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .hm-services h3 {
          margin-top: 18px;
        }

        .hm-service-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .hm-service-item {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          padding: 20px;
          border-radius: 20px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.16);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .hm-check {
          width: 28px;
          height: 28px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: ${T.muted};
          color: ${T.dark};
          font-size: 13px;
          font-weight: 800;
        }

        .hm-service-item span {
          color: ${T.muted};
          font-size: 14.5px;
          line-height: 1.65;
        }

        .hm-service-item strong {
          color: ${T.cream};
          font-weight: 700;
        }

        .hm-why {
          padding: 92px 0;
          background: ${T.light};
        }

        .hm-why-card {
          display: grid;
          grid-template-columns: .9fr 1fr;
          gap: 34px;
          align-items: center;
          padding: clamp(20px, 4vw, 36px);
          border-radius: 34px;
          background: ${T.cream};
          border: 1px solid rgba(97,114,78,.16);
          box-shadow: 0 28px 80px rgba(47,54,26,.12);
        }

        .hm-why-card img {
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 26px;
          display: block;
        }

        .hm-why-list {
          margin-top: 24px;
          display: grid;
          gap: 12px;
          padding: 0;
          list-style: none;
        }

        .hm-why-list li {
          padding: 14px 16px;
          border-radius: 16px;
          background: #eef4e9;
          color: #5f6b50;
          font-size: 14.5px;
          line-height: 1.55;
          border: 1px solid rgba(97,114,78,.12);
        }

        .hm-cta {
          padding: 92px 0;
          text-align: center;
          color: ${T.cream};
          background-image: linear-gradient(145deg, rgba(47,54,26,.9), rgba(97,114,78,.82)), url(${bgContact});
          background-size: cover;
          background-position: center;
        }

        .hm-cta-box {
          max-width: 820px;
          margin: 0 auto;
          padding: clamp(30px, 5vw, 54px);
          border-radius: 34px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 32px 90px rgba(47,54,26,.35);
        }

        .hm-cta h3 {
          color: ${T.cream};
        }

        .hm-cta p {
          margin: 14px auto 0;
          color: ${T.muted};
          font-size: 15.5px;
          line-height: 1.75;
          max-width: 640px;
        }

        .hm-cta a {
          color: ${T.cream};
          text-underline-offset: 4px;
        }

        .hm-final {
          margin-top: 18px !important;
          font-style: italic;
          color: ${T.cream} !important;
        }

        @media (max-width: 900px) {
          .hm-hero {
            min-height: auto;
            padding: 120px 0 70px;
          }

          .hm-split-grid,
          .hm-why-card {
            grid-template-columns: 1fr;
          }

          .hm-image-card img,
          .hm-why-card img {
            height: 320px;
          }

          .hm-service-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hm-container {
            width: min(90%, 430px);
          }

          .hm-hero {
            padding: 104px 0 54px;
          }

          .hm-hero-card,
          .hm-content-card,
          .hm-why-card,
          .hm-cta-box {
            border-radius: 24px;
          }

          .hm-split,
          .hm-services,
          .hm-why,
          .hm-cta {
            padding: 68px 0;
          }

          .hm-image-card img,
          .hm-why-card img {
            height: 240px;
          }

          .hm-service-item {
            padding: 16px;
            border-radius: 18px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .hm-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hm-section hm-hero">
        <div className="hm-container">
          <div className="hm-hero-card">
            <span className="hm-chip">Home Care Services</span>
            <h1> Home Medication Services</h1>
            <h2>
              Home medication services provide patients with assistance in managing their medications at home.
              This includes medication delivery, medication management consultations, and education on proper usage.
              These services aim to ensure adherence to prescribed therapies, minimize medication errors, and improve
              overall health outcomes.
            </h2>
          </div>
        </div>
      </section>

      {/* Intro Split Section */}
      <section className="hm-section hm-split">
        <div className="hm-container hm-split-grid">
          <div className="hm-image-card">
            <img src={medsImg} alt="Home Medication Delivery" />
          </div>

          <div className="hm-content-card">
            <span className="hm-chip" style={{ color: T.sage, borderColor: "rgba(97,114,78,.2)", background: "#eef4e9" }}>
              Vaayu Support
            </span>
            <h3 style={{ marginTop: 18 }}> Hassle-Free Medication Management</h3>
            <p>
              Never miss a dose again. <strong>Vaayu’s Home Medication Service</strong> ensures timely delivery of
              prescribed drugs, inhalers, oxygen supplies, and nutraceuticals—paired with pharmacist counselling
              to keep your treatment on track.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="hm-section hm-services">
        <div className="hm-container">
          <div className="hm-services-head">
            <span className="hm-chip">Medication Services</span>
            <h3> Medication Services We Offer</h3>
          </div>

          <div className="hm-service-grid">
            {[
              ["Same-day Delivery", "Critical meds, oxygen cylinders & consumables."],
              ["Refill Reminders & Auto-Dispatch", "Never run out of essential drugs."],
              ["Blister Packaging & Dose-Wise Organisers", "Easy adherence for seniors."],
              ["Respiratory Device Setup", "Nebulisers, CPAP/BiPAP filters & masks."],
              ["24×7 Pharmacist Helpline", "Drug interactions & side-effect guidance."],
              ["Cold-Chain Specials", "Insulin, biologics & vaccines delivered at 2-8 °C."],
            ].map(([title, text]) => (
              <div className="hm-service-item" key={title}>
                <span className="hm-check">✓</span>
                <span>
                  <strong>{title}</strong> – {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vaayu */}
      <section className="hm-section hm-why">
        <div className="hm-container">
          <div className="hm-why-card">
            <img src={whyImg} alt="Why Choose Vaayu Medications" />

            <div>
              <span className="hm-chip" style={{ color: T.sage, borderColor: "rgba(97,114,78,.2)", background: "#eef4e9" }}>
                Why Vaayu
              </span>
              <h3 style={{ marginTop: 18 }}>Why Choose Vaayu for Medications?</h3>

              <ul className="hm-why-list">
                <li> Pharmacist-verified orders & secure supply chain</li>
                <li> Live order tracking & e-prescription uploads</li>
                <li> Education on inhaler technique & device care</li>
                <li> Emergency stock dispatch within 2 hours (select zones)</li>
                <li> Loyalty savings on monthly refill bundles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="hm-section hm-cta">
        <div className="hm-container">
          <div className="hm-cta-box">
            <span className="hm-chip">Contact Vaayu</span>
            <h3 style={{ marginTop: 18 }}>📞 Order Your Medications Today</h3>

            <p>
              Need a quick refill or setting up first-time supplies?{" "}
              <strong>Vaayu’s Medications Desk is one call away.</strong>
            </p>

            <p>📍 Available in: Bengaluru (select zones)</p>
            <p>📞 Call: +91 98765 43213</p>
            <p>
              📧 Email:{" "}
              <a href="mailto:admin@vaayuchest.com">
                admin@vaayuchest.com
              </a>
            </p>

            <p className="hm-final">
              Reliable medicines, timely reminders, compassionate guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMedications;