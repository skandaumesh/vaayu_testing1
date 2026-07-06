// src/components/SpecialtyClinics.jsx
import React from "react";
import { motion } from "framer-motion";

// ✅ Import image and video (keep these files in your assets/img folder)
import doctorImage from "../assets/img/specialist-doctor.jpg";
import specialtyVideo from "../assets/img/speciality.MP4";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const SpecialtyClinics = () => {
  // --- Content arrays (kept from your earlier versions) ---
  const clinics = [
    {
      name: "Interstitial Lung Disease (ILD) - Center of Excellence",
      desc: "Comprehensive care for ILD with high-end diagnostics, rehab support, and global expert consultations.",
    },
    {
      name: "Asthma - Center of Excellence",
      desc: "Customized asthma plans including allergen screening, medication management, and lifestyle coaching.",
    },
    {
      name: "COPD Management Clinic",
      desc: "Complete COPD support including pulmonary rehab, inhaler training, and home-based care guidance.",
    },
    {
      name: "Pulmonary Hypertension Clinic",
      desc: "Specialized care for PH with detailed evaluation, treatment optimization, and transplant counseling.",
    },
    {
      name: "Sarcoidosis",
      desc: "Integrated sarcoidosis clinic for multi-organ assessment, long-term monitoring, and patient education.",
    },
  ];

  const benefits = [
    {
      title: "Comprehensive Diagnostics",
      desc: "Access to Lung Function Lab and specialized testing services.",
    },
    {
      title: "World-Class Technology",
      desc: "Lung cryobiopsy, Bronchial Thermoplasty, Intervapor BTVA, and lung transplant support.",
    },
    {
      title: "Multidisciplinary Diagnosis",
      desc: "Integrated disease management through expert collaboration under one roof.",
    },
    {
      title: "Same-Day Testing",
      desc: "Quick, seamless testing for timely diagnosis and care.",
    },
    {
      title: "Global Expert Liaisons",
      desc: "Direct access to opinions from world-renowned pulmonary experts.",
    },
    {
      title: "Pulmonary Rehabilitation",
      desc: "Personalized rehab planning and enrolment to support long-term recovery.",
    },
    {
      title: "Holistic Care Approach",
      desc: "Focus on diet, exercise, hygiene, medications, and interventions for complete well-being.",
    },
    {
      title: "Home Services (In Progress)",
      desc: "CXR, spirometry, antigen detection and more—delivered at your doorstep.",
    },
    {
      title: "Support Services",
      desc: "Access to patient support groups and recovery communities.",
    },
  ];

  // --- Quiz sections (your exact questions) ---
  const SECTION1 = [
    "Regular / Occasional Cough",
    "Shortness of Breath / Breathlessness",
    "Wheezing",
    "Chest Tightness",
  ];

  const SECTION2 = [
    "Running Nose / Nose Block",
    "Sneezing",
    "Watery Eyes",
    "Rashes",
  ];

  const SECTION3 = [
    "Asthma",
    "Pneumonia",
    "Tuberculosis (TB)",
    "Sleep Apnea",
    "Lung Fibrosis",
    "COPD",
  ];

  // --- State ---
  const [quizAnswers, setQuizAnswers] = React.useState({});
  const [userInfo, setUserInfo] = React.useState({ name: "", phone: "" });
  const [showPopup, setShowPopup] = React.useState(false);
  const [errorPopup, setErrorPopup] = React.useState(null); // null or message
  const [submitting, setSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setQuizAnswers({
      ...quizAnswers,
      [e.target.name]: e.target.checked,
    });
  };

  // Prepare payload and send to Google Apps Script (or your backend)
  const handleSubmit = async () => {
    // validation: name & phone & at least one from each section
    const answered1 = SECTION1.some((q) => quizAnswers[q]);
    const answered2 = SECTION2.some((q) => quizAnswers[q]);
    const answered3 = SECTION3.some((q) => quizAnswers[q]);

    if (!userInfo.name.trim()) {
      setErrorPopup("Please enter your name.");
      return;
    }
    if (!userInfo.phone.trim()) {
      setErrorPopup("Please enter your phone number.");
      return;
    }
    if (!answered1 || !answered2 || !answered3) {
      setErrorPopup("Please select at least one option in each of the three sections.");
      return;
    }

    setErrorPopup(null);
    setSubmitting(true);

    const payload = {
      name: userInfo.name.trim(),
      phone: userInfo.phone.trim(),
      service: "Respiratory Health Check",
      answers: {
        section1: SECTION1.filter((q) => quizAnswers[q]).join(", ") || "None",
        section2: SECTION2.filter((q) => quizAnswers[q]).join(", ") || "None",
        section3: SECTION3.filter((q) => quizAnswers[q]).join(", ") || "None",
        extra: "N/A",
      },
      submittedAt: new Date().toISOString(),
    };

    try {
      // Replace this URL with your actual Google Apps Script web app URL if different.
      // Using mode: 'no-cors' to avoid CORS errors when posting to Apps Script from browser.
      await fetch(
        "https://script.google.com/macros/s/AKfycbx491ZUyv_AOORTCCTV0FR3MvTGpOTtJnxdaLp4ZvHonazxibvPuimPmls_kh98Cwfa/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      setShowPopup(true);
      // Optionally clear form
      setUserInfo({ name: "", phone: "" });
      setQuizAnswers({});
    } catch (err) {
      console.error("Submit error:", err);
      // If using no-cors, fetch will not throw on success; but keep fallback
      alert("There was an error submitting. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
     <motion.section
  className="bg-gray-100 pt-32 sm:pt-36 md:pt-28 pb-16"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">          <motion.div variants={fadeInUp}>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Our specialty clinics</h2>
<h1 className="text-[2rem] sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
                Advanced Clinics For <br />
              <span className="text-[#808000]">Focused Respiratory Care</span>
            </h1>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              We provide a one-stop landing place for the next-level care of complex, chronic respiratory diseases.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#808000] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b7000] transition">
                  Book an Appointment                </button>
              </a>
              <p className="text-sm text-gray-600">
                ⭐ 4.8 Rating on{" "}
                <a
                  href="https://g.co/kgs/jCzDLFY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div className="relative" variants={fadeInUp}>
            <img
              src={doctorImage}
              alt="Specialist Doctor"
              className="rounded-3xl w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white shadow-lg p-4 rounded-xl w-72">
              <p className="text-sm text-gray-700 italic">
                "The Interstitial Lung Clinic changed my life. Truly expert care!"
              </p>
              <div className="mt-2 text-sm font-semibold text-gray-800">
                — Patient, Vaayu Sleep and Clinic
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SPECIALTY CENTERS */}
      <motion.section
        className="py-16 px-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-[#808000] mb-10 text-center">Our Specialty Centers</h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clinics.map((clinic, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:scale-[1.02]"
              variants={fadeScale}
            >
              <h3 className="text-lg font-semibold text-[#4b4b4b] mb-2">{clinic.name}</h3>
              <p className="text-gray-600 text-sm">{clinic.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* BENEFITS + VIDEO */}
      <motion.section
  className="bg-gray-100 pt-44 md:pt-28 pb-16"        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-12">
          <motion.div variants={fadeScale}>
            <video
              className="rounded-3xl w-full shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={specialtyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <h2 className="text-3xl font-bold text-[#808000] mb-4">
              Why Choose Our Specialty Center?
            </h2>

            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-transform transform hover:scale-[1.02]"
                variants={fadeScale}
              >
                <div className="text-2xl text-[#808000]">✔️</div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT / MISSION - optional full content block */}
      <motion.section
        className="py-16 px-8 max-w-7xl mx-auto"
        variants={fadeInUp}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a global reference in respiratory care — delivering accurate diagnosis, compassionate treatment and lifelong rehabilitation support to patients with complex lung conditions.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To combine local expertise and global collaborations using evidence-based interventions, innovative technology, and patient-centered rehabilitation pathways so every patient receives the best possible outcomes.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CONTACT / CTA */}
      <motion.section className="py-12 px-8 bg-white" variants={fadeInUp}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Need expert advice?</h3>
            <p className="text-gray-600">Book an appointment for a detailed evaluation with our respiratory specialists.</p>
          </div>
          <div>
            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#808000] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b7000] transition">
                Book an Appointment              </button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* ========== QUIZ SECTION ========== */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#808000]">
            Quick Respiratory Health Check
          </h2>

          <label className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            className="w-full p-3 rounded mb-4 border"
            placeholder="Enter your name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />

          <label className="block mb-2 font-semibold">Phone Number</label>
          <input
            type="tel"
            className="w-full p-3 rounded mb-4 border"
            placeholder="Enter phone number"
            value={userInfo.phone}
            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
          />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">1. Do you experience any of these symptoms?</h3>
            {SECTION1.map((item) => (
              <label key={item} className="flex items-center gap-3 mb-2">
                <input type="checkbox" name={item} checked={!!quizAnswers[item]} onChange={handleChange} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <hr className="my-6" />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">2. Are you facing any allergy-related symptoms?</h3>
            {SECTION2.map((item) => (
              <label key={item} className="flex items-center gap-3 mb-2">
                <input type="checkbox" name={item} checked={!!quizAnswers[item]} onChange={handleChange} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <hr className="my-6" />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">3. Have you ever been diagnosed with any of the following?</h3>
            {SECTION3.map((item) => (
              <label key={item} className="flex items-center gap-3 mb-2">
                <input type="checkbox" name={item} checked={!!quizAnswers[item]} onChange={handleChange} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className={`w-full ${submitting ? "bg-gray-400" : "bg-[#808000] hover:bg-[#6b7000]"} text-white py-3 rounded-full mt-4`}
          >
            {submitting ? "Submitting..." : "Submit Health Check"}
          </button>

          {/* inline error popup (small) */}
          {errorPopup && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
              {errorPopup}
            </div>
          )}
        </div>
      </motion.section>

      {/* Success & Error Modal Popups (fullscreen overlays) */}
      {errorPopup && typeof errorPopup === "string" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 max-w-md text-center">
            <h3 className="text-xl font-bold text-red-600 mb-2">Incomplete Fields</h3>
            <p className="text-gray-700 mb-4">{errorPopup}</p>
            <button onClick={() => setErrorPopup(null)} className="bg-red-600 text-white px-6 py-2 rounded-full">OK</button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-11/12 max-w-md text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-3">Health Check Submitted ✅</h3>
            <p className="text-gray-700 mb-6">Thank you! Our team will contact you shortly.</p>
            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#808000] text-white px-6 py-3 rounded-full">Book Appointment</button>
            </a>
            <button onClick={() => setShowPopup(false)} className="block mx-auto mt-4 text-gray-500 underline">Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SpecialtyClinics;
