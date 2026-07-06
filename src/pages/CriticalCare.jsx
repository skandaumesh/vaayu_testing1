import React from "react";
import { motion } from "framer-motion";

import heroImg1 from "../assets/img/female-patient-undergoing-surgery.jpg";
import heroImg2 from "../assets/img/young-doctor-showing-radiography.jpg";
import heroImg3 from "../assets/img/front-view-woman-meditating-mat.jpg";
import heroImg4 from "../assets/img/different-doctors-doing-surgical-procedure-patient.jpg";
import techImg1 from "../assets/img/lung.jpg";
import techImg2 from "../assets/img/front-view-man-using-nebulizer.jpg";
import techImg3 from "../assets/img/closeup-woman-nurse-showing-bones-radiography-monitoring-sickness-recovery.jpg";
import heroImgMain from "../assets/img/critical-care-main.jpg";

const E = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, delay, ease: E },
});

const CriticalCare = () => {
  return (
    <main className="critical-care-page">
      <style>{`
        .critical-care-page,
        .critical-care-page * {
          box-sizing: border-box;
        }

        .critical-care-page {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
background: #f4f7ef;          color: #3f472e;
          overflow-x: hidden;
          width: 100%;
        }

        .cc-container {
          width: min(92%, 1180px);
          margin: 0 auto;
        }

        .cc-section {
          padding: clamp(58px, 8vw, 88px) 0;
        }

        .cc-soft {
          background: #eef4e9;
        }

        .cc-white {
          background: #f4f7ef;
        }

        .cc-title {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.12;
          letter-spacing: -0.035em;
          font-weight: 650;
          color: #3f472e;
        }

        .cc-heading {
          margin: 0 0 16px;
          font-size: clamp(1.25rem, 2vw, 1.7rem);
          line-height: 1.3;
          font-weight: 650;
          color: #3f472e;
        }

        .cc-text {
          margin: 0;
          font-size: clamp(14.5px, 1.4vw, 16px);
          line-height: 1.78;
          color: #6e5b46;
        }

        .cc-text + .cc-text {
          margin-top: 14px;
        }

        .cc-card {
          background: #ffffff;
          border-radius: 26px;
          padding: clamp(24px, 4vw, 34px);
          border: 1px solid rgba(97, 114, 78, 0.14);
          box-shadow: 0 18px 50px rgba(47, 54, 26, 0.08);
        }

        .cc-inner {
          background: #ffffff;
          border-radius: 26px;
          padding: clamp(24px, 4vw, 34px);
          border: 1px solid rgba(97, 114, 78, 0.14);
          box-shadow: 0 18px 50px rgba(47, 54, 26, 0.08);
        }

        .cc-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(24px, 4vw, 40px);
          align-items: stretch;
        }

        .cc-list {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cc-list li {
          position: relative;
          padding: 14px 16px 14px 40px;
          border-radius: 16px;
          background: #f4f7ef;
          border: 1px solid rgba(97, 114, 78, 0.12);
          color: #6e5b46;
          font-size: 14.5px;
          line-height: 1.65;
        }

        .cc-list li::before {
          content: "";
          position: absolute;
          left: 18px;
          top: 24px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #61724e;
        }

        .cc-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
          border-radius: 22px;
          margin-top: 22px;
          box-shadow: 0 14px 36px rgba(47, 54, 26, 0.12);
        }

        .cc-side-image {
          width: 100%;
          height: 100%;
          min-height: 360px;
          object-fit: cover;
          display: block;
          border-radius: 26px;
          box-shadow: 0 18px 50px rgba(47, 54, 26, 0.12);
        }

        .cc-hero {
          min-height: 72svh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 118px 20px 76px;
          overflow: hidden;
        }

        .cc-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.92) 0%, rgba(47,54,26,.78) 52%, rgba(97,114,78,.52) 100%),
            linear-gradient(to top, #61724e, transparent 38%);
        }

        .cc-hero-content {
          position: relative;
          z-index: 2;
          width: min(92%, 760px);
          padding: clamp(26px, 4vw, 38px);
          border-radius: 30px;
          background: rgba(255, 248, 239, 0.10);
          border: 1px solid rgba(215, 222, 201, 0.22);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 28px 80px rgba(47,54,26,0.30);
          text-align: center;
        }

        .cc-kicker {
          display: inline-flex;
          align-items: center;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(97, 114, 78, 0.08);
          border: 1px solid rgba(97, 114, 78, 0.16);
          color: #61724e;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .cc-hero .cc-kicker,
        .cc-banner .cc-kicker {
          background: rgba(255, 248, 239, 0.10);
          color: #d7dec9;
          border-color: rgba(215, 222, 201, 0.22);
        }

        .cc-hero-title {
          margin: 0;
          color: #f4f7ef;
          font-size: clamp(2.35rem, 5vw, 4.7rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .cc-hero-sub {
          margin: 20px auto 0;
          max-width: 640px;
          color: #d7dec9;
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
        }

        .cc-banner {
          min-height: 340px;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(30px, 5vw, 48px);
          color: #f4f7ef;
          box-shadow: 0 24px 70px rgba(47,54,26,0.18);
        }

        .cc-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(47,54,26,.88), rgba(97,114,78,.66));
        }

        .cc-banner-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .cc-banner h2 {
          margin: 0;
          color: #f4f7ef;
          font-size: clamp(1.9rem, 4vw, 3.4rem);
          line-height: 1.12;
          letter-spacing: -0.03em;
          font-weight: 650;
        }

        .cc-conclusion {
          background: #61724e;
          color: #f4f7ef;
          border-radius: 30px;
          padding: clamp(28px, 5vw, 44px);
          box-shadow: 0 24px 70px rgba(47,54,26,0.18);
        }

        .cc-conclusion .cc-heading {
          color: #f4f7ef;
        }

        .cc-conclusion .cc-text {
          color: #d7dec9;
        }

        @media (max-width: 980px) {
          .cc-grid-2 {
            grid-template-columns: 1fr;
          }

          .cc-banner {
            min-height: 280px;
          }

          .cc-side-image {
            min-height: 280px;
          }
        }

        @media (max-width: 640px) {
          .cc-container {
            width: min(90%, 430px);
          }

          .cc-hero {
            min-height: auto;
            padding: 108px 18px 62px;
          }

          .cc-hero-content {
            width: 100%;
            border-radius: 24px;
          }

          .cc-hero-title {
            font-size: clamp(2.05rem, 10vw, 3.35rem);
          }

          .cc-card,
          .cc-inner,
          .cc-conclusion,
          .cc-banner,
          .cc-side-image {
            border-radius: 22px;
          }

          .cc-banner {
            min-height: 240px;
          }

          .cc-image {
            height: 240px;
          }

          .cc-side-image {
            min-height: 220px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .cc-hero {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>

      <section className="cc-hero" style={{ backgroundImage: `url(${heroImgMain})` }}>
        <motion.div {...fadeUp(0)} className="cc-hero-content">
          <span className="cc-kicker">Advanced Respiratory Support</span>
          <h1 className="cc-hero-title">Critical Care</h1>
          <p className="cc-hero-sub">
            Life-saving technologies and expertise for complex respiratory needs.
          </p>
        </motion.div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-banner" style={{ backgroundImage: `url(${heroImg1})` }}>
            <div className="cc-banner-content">
              <span className="cc-kicker">01</span>
              <h2>Oxygen Therapy and Ventilation</h2>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container cc-grid-2">
          <motion.div {...fadeUp(0)} className="cc-card">
            <h2 className="cc-heading">Expertise and Facilities</h2>
            <p className="cc-text">
              Experienced team trained in critical care, with a cumulative experience of &gt;30 years.
            </p>
            <p className="cc-text">
              Our services include a full-fledged respiratory ICU, with state-of-the-art equipment,
              a flourishing respiratory therapist program, ECMO program, and ICU bronchoscopy.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)}>
            <img src={heroImg1} alt="Oxygen therapy and ventilation" className="cc-side-image" />
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <div className="cc-grid-2">
            <motion.div {...fadeUp(0)} className="cc-card">
              <h3 className="cc-heading">Invasive Ventilation</h3>
              <p className="cc-text">
                During acute respiratory failure, patients may require additional support to maintain adequate oxygenation and ventilation.
              </p>
              <p className="cc-text">
                In critical care settings, three common methods of respiratory support are mechanical ventilators, non-invasive ventilators, and high-flow oxygen therapy.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="cc-card">
              <h3 className="cc-heading">Mechanical Ventilators</h3>
              <p className="cc-text">
                Mechanical ventilators are life-saving machines used when patients cannot breathe adequately on their own.
              </p>
              <p className="cc-text">
                The ventilator delivers oxygen and removes carbon dioxide through a breathing tube placed via intubation.
              </p>
              <p className="cc-text">
                Settings are adjusted by healthcare professionals. While essential for support, mechanical ventilation doesn’t treat the root cause of the illness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-inner">
            <h3 className="cc-heading">Non-Invasive Ventilation</h3>
            <p className="cc-text">
              Used when intubation isn't needed. Air is delivered through a mask or nasal prongs. Especially effective for COPD exacerbations or acute respiratory failure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-banner" style={{ backgroundImage: `url(${heroImg2})` }}>
            <div className="cc-banner-content">
              <span className="cc-kicker">02</span>
              <h2>ICU Bronchoscopy Program</h2>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container cc-grid-2">
          <motion.div {...fadeUp(0)} className="cc-card">
            <h2 className="cc-heading">What is ICU Bronchoscopy?</h2>
            <p className="cc-text">
              Bronchoscopy is a medical procedure that allows doctors to look inside the airways of the lungs. It is performed by inserting a thin, flexible tube called a bronchoscope into the airways. The bronchoscope has a camera and light on the end, which allows the doctor to see inside the airways.
            </p>
            <p className="cc-text">
              ICU bronchoscopy is a bronchoscopy that is performed in the intensive care unit (ICU). ICU patients are often critically ill and have breathing problems. Bronchoscopy can be used to help diagnose and treat these problems.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)}>
            <img src={heroImg2} alt="ICU bronchoscopy program" className="cc-side-image" />
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <div className="cc-grid-2">
            <motion.div {...fadeUp(0)} className="cc-card">
              <h3 className="cc-heading">Indications</h3>
              <ul className="cc-list">
                <li>To remove secretions and mucus plugs which may be obstructing the air passages, leading to difficulty in breathing and in ventilation.</li>
                <li>To diagnose lung infections: Bronchoscopy can be used to collect samples of lung tissue or fluid to diagnose lung infections, such as pneumonia or tuberculosis.</li>
                <li>To remove foreign bodies: Bronchoscopy can be used to remove foreign bodies, such as coins or food, that have been inhaled into the lungs.</li>
                <li>To treat bleeding and remove blood clots: Bronchoscopy can be used to stop bleeding in the lungs.</li>
                <li>To place a stent: A stent is a small, flexible tube that can be placed in the airways to keep them open. Bronchoscopy can be used to place a stent in the airways of ICU patients who have narrowed airways.</li>
                <li>To assess lung injury: Bronchoscopy can be used to assess lung injury, such as that caused by acute respiratory distress syndrome (ARDS).</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="cc-card">
              <h3 className="cc-heading">Technology and Expertise</h3>
              <p className="cc-text">
                Advanced bronchoscopic tools and a well-trained ICU team ensure accurate diagnosis and patient safety.
              </p>
              <p className="cc-text">All procedures are closely monitored to ensure safety.</p>
              <img src={techImg1} alt="Advanced bronchoscopy tools" className="cc-image" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-inner">
            <h3 className="cc-heading">Risks</h3>
            <ul className="cc-list">
              <li>Bleeding: There is a small risk of bleeding during bronchoscopy.</li>
              <li>Infection: There is a small risk of infection during bronchoscopy.</li>
              <li>Vomiting: There is a small risk of vomiting during bronchoscopy.</li>
              <li>Tracheostomy: There is a small risk of needing a tracheostomy, which is a surgical opening in the windpipe.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-card">
            <h2 className="cc-heading">Recovery and Support</h2>
            <p className="cc-text">
              The recovery from ICU bronchoscopy is usually quick and easy. Patients may experience some sore throat or coughing after the procedure. However, most patients are able to go home the same day as the procedure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-banner" style={{ backgroundImage: `url(${heroImg3})` }}>
            <div className="cc-banner-content">
              <span className="cc-kicker">03</span>
              <h2>Respiratory Therapy Program</h2>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container cc-grid-2">
          <motion.div {...fadeUp(0)} className="cc-card">
            <h2 className="cc-heading">What is Respiratory Therapy?</h2>
            <p className="cc-text">
              Respiratory therapists are healthcare professionals who specialize in the care of patients with respiratory problems. They work in a variety of settings, including hospitals, clinics, and home health care. In the intensive care unit (ICU), respiratory therapists play a vital role in the care of critically ill patients.
            </p>
            <p className="cc-text">
              There are many advantages to having respiratory therapists in the ICU. Respiratory therapists have specialized knowledge and skills in the care of patients with respiratory problems. They are also trained to use a variety of complex medical equipment, such as ventilators and oxygen concentrators. This allows them to provide high-quality care to patients who need it most. In addition, Respiratory therapists can also provide valuable education and support to patients and their families.
            </p>
            <p className="cc-text">
              The specific functions of respiratory therapists in the ICU can vary depending on the needs of the patients. However, some of the most common functions include:
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)}>
            <img src={heroImg3} alt="Respiratory therapy program" className="cc-side-image" />
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container">
          <div className="cc-grid-2">
            <motion.div {...fadeUp(0)} className="cc-card">
              <h3 className="cc-heading">Core Functions in the ICU</h3>
              <ul className="cc-list">
                <li>Monitoring patient's respiratory status: Respiratory therapists closely monitor patients' respiratory status, including their breathing rate, oxygen levels, and carbon dioxide levels. They also assess patients for signs of respiratory distress, such as shortness of breath and chest pain.</li>
                <li>Administering respiratory therapy: Respiratory therapists administer a variety of respiratory therapies, such as oxygen therapy, mechanical ventilation, and aerosol therapy. They also help to manage patients' pain and anxiety.</li>
                <li>Educating patients and families: Respiratory therapists educate patients and their families about respiratory conditions and treatments. They also provide support and counselling to help patients cope with their illness.</li>
                <li>Providing cough assist to the patients who are unable to do so.</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="cc-card">
              <h3 className="cc-heading">Why Respiratory Therapists Matter</h3>
              <p className="cc-text">
                They deliver fast, effective respiratory care and emotional support, easing the path to recovery.
              </p>
              <img src={techImg2} alt="Respiratory therapy equipment" className="cc-image" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-banner" style={{ backgroundImage: `url(${heroImg4})` }}>
            <div className="cc-banner-content">
              <span className="cc-kicker">04</span>
              <h2>ECMO Programme</h2>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container cc-grid-2">
          <motion.div {...fadeUp(0)} className="cc-card">
            <p className="cc-text">
              Extracorporeal membrane oxygenation (ECMO) is a life-support treatment that helps a person’s heart and lungs do their jobs when they are not working well on their own. ECMO does this by taking blood out of the body, oxygenating it outside the body, and then pumping it back into the body.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)}>
            <img src={heroImg4} alt="ECMO programme" className="cc-side-image" />
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <div className="cc-grid-2">
            <motion.div {...fadeUp(0)} className="cc-card">
              <h3 className="cc-heading">ECMO is used in a variety of situations, including:</h3>
              <ul className="cc-list">
                <li>Heart failure: ECMO can be used to help people with severe heart failure who are not responding to other treatments.</li>
                <li>Lung failure: ECMO can be used to help people with severe lung failure, such as those with acute respiratory distress syndrome (ARDS).</li>
                <li>Cardiopulmonary arrest: ECMO can be used to help people who have had a cardiac arrest and are not breathing on their own.</li>
                <li>Pregnancy: ECMO can be used to help pregnant women with severe heart or lung problems.</li>
              </ul>
              <p className="cc-text" style={{ marginTop: 18 }}>
                ECMO is a complex procedure that requires a team of specialized doctors and nurses. It is not without risks, but it can be a lifesaving treatment for people with severe heart or lung problems.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="cc-card">
              <h3 className="cc-heading">How does ECMO work?</h3>
              <p className="cc-text">
                ECMO works by using a machine called an extracorporeal membrane oxygenator (ECMO). The ECMO machine has two major parts:
              </p>
              <ul className="cc-list">
                <li>A pump: The pump takes blood out of the body through a large vein in the neck or groin.</li>
                <li>An oxygenator: The oxygenator oxygenates the blood outside the body.</li>
                <li>The blood then goes back into the body through a large vein in the neck or groin.</li>
              </ul>
              <p className="cc-text" style={{ marginTop: 18 }}>
                ECMO can be used for a short period of time, such as a few days, or for a longer period of time, such as weeks or months. The length of time that ECMO is used depends on the patient’s condition.
              </p>
              <img src={techImg3} alt="ECMO equipment" className="cc-image" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-inner">
            <h3 className="cc-heading">Risks of ECMO</h3>
            <ul className="cc-list">
              <li>Blood clots: ECMO can increase the risk of blood clots, which can lead to stroke or other problems.</li>
              <li>Infection: ECMO can increase the risk of infection.</li>
              <li>Bleeding: ECMO can increase the risk of bleeding.</li>
              <li>Other complications: Other complications of ECMO can include kidney problems, liver problems, and neurological problems.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-white">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-card">
            <h3 className="cc-heading">Recovery from ECMO</h3>
            <p className="cc-text">
              The recovery period after ECMO varies depending on the patient’s condition. Some people may need to stay in the hospital for several weeks or months after ECMO. Others may be able to go home sooner.
            </p>
            <p className="cc-text">
              The recovery period after ECMO can be challenging. Patients may need to learn how to do things that they took for granted, such as walking and eating. They may also need to see a variety of doctors and therapists to manage their condition.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="cc-section cc-soft">
        <div className="cc-container">
          <motion.div {...fadeUp(0)} className="cc-conclusion">
            <h3 className="cc-heading">Conclusion</h3>
            <p className="cc-text">
              Our comprehensive critical care services—from oxygen therapy to ECMO—are backed by expertise, technology, and a commitment to life-saving excellence. Speak with our team to understand how we can support your recovery journey.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CriticalCare;