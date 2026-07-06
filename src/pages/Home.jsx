import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DoctorsAndTeam from "../components/DoctorsAndTeam";
import Testimonials from "../components/Testimonials";

import heroImg from "../assets/img/wmremove-transformed.png";
import heroImg1 from "../assets/img/IMG_0159.JPG";
import mehtaImg from "../assets/img/mehta.JPG";
import doctorImg from "../assets/img/DSC00661 (1).JPG";
import nebulizerImg from "../assets/img/De.jpeg";
import nebulizerImg11 from "../assets/img/front-view-man-using-nebulizer.jpg";
import sleepImg from "../assets/img/young-guy-sleeping-bed-wearing-smartwatch-sleep-tracker.jpg";
import rehabImg1 from "../assets/img/IMG_0215.JPG";
import rehabImg2 from "../assets/img/healthcare-concept-clinic (1).jpg";

import aboutImage from "../assets/img/About us image 1.jpg";
import whyVaayuImg from "../assets/img/IMG_0215.JPG";
import journeyBg from "../assets/img/clinical-psychology-hero.jpg";
import careImg from "../assets/img/healthchecks-benefit.jpg";
import diagnosticsImg from "../assets/img/Live Pain-Free Again with Innovative RenuO2 Pain Treatment Utah.jpg";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";
const T = {
  bg: "#58623b",
  deep: "#2f361a",
  green: "#61724e",
  green2: "#4f5831",
  sage: "#9fab90",
  muted: "#d7dec9",
  cream: "#cce1bb",
  cream2: "#e3f0df",
  light: "#eaf1e6",
  text: "#fff8ef",
  ink: "#293018",
};

const E = [0.22, 1, 0.36, 1];
const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.7, delay, ease: E },
});

const Chip = ({ children, dark = false }) => (
  <span className={dark ? "vc-chip dark" : "vc-chip"}>{children}</span>
);

const SectionTitle = ({ chip, title, text, light = false }) => (
  <motion.div {...fu()} className="vc-section-title">
    {chip && <Chip dark={!light}>{chip}</Chip>}
    <h2 className={light ? "light" : ""}>{title}</h2>
    {text && <p className={light ? "light" : ""}>{text}</p>}
  </motion.div>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState(0);
const [showMobilePopup, setShowMobilePopup] = useState(false);
const [popupClosed, setPopupClosed] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.innerWidth > 760 || popupClosed) return;

    const aboutSection = document.querySelector(".vc-about-section");

    if (aboutSection) {
      const aboutTop = aboutSection.getBoundingClientRect().top;

      if (aboutTop < window.innerHeight * 0.75) {
        setShowMobilePopup(true);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, [popupClosed]);

useEffect(() => {
    document.title =
      "VAAYU Chest & Sleep Center Bengaluru | Pulmonary Rehabilitation, COPD, ILD, Sleep Apnea & Respiratory Care";

    const metaDescription =
      "VAAYU Chest & Sleep Center in Bengaluru offers advanced outpatient respiratory care — pulmonary rehabilitation, COPD management, ILD treatment, severe asthma, sleep apnea, and long-term lung recovery. One roof. 360° care. 20,000+ patients.";

    const metaKeywords =
      "pulmonary rehabilitation Bengaluru, COPD rehabilitation Bengaluru, ILD specialist Bengaluru, sleep apnea treatment Bengaluru, severe asthma treatment Bengaluru, breathlessness clinic Bengaluru, pulmonologist near me, lung fibrosis care, sleep study Bengaluru, chronic cough specialist, lung doctor Bengaluru, home pulmonary rehabilitation, post COVID lung recovery Bengaluru, interstitial lung disease Bengaluru, COPD specialist Bengaluru, bronchiectasis treatment, oxygen therapy rehabilitation, lung exercise program Bengaluru";

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", metaDescription);
    setMeta("keywords", metaKeywords);

    const ogTags = [
      ["og:title", "VAAYU Chest & Sleep Center — Bengaluru's Advanced Respiratory Care Ecosystem"],
      ["og:description", "End-to-end respiratory care: diagnosis, rehabilitation, sleep medicine, and long-term lung recovery under one roof in Bengaluru."],
      ["og:type", "website"],
    ];
    ogTags.forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, []);

  const patientSignals = [
    { label: "Breathlessness despite treatment", sub: "Not improving on inhalers or medications" },
    { label: "Uncontrolled asthma or COPD", sub: "Frequent attacks, flare-ups, ED visits" },
    { label: "Chronic cough, fatigue or poor stamina", sub: "Affecting daily work and quality of life" },
    { label: "Frequent respiratory flare-ups", sub: "Recurrent admissions for lung disease" },
    { label: "Oxygen dependency or slow recovery", sub: "Post-discharge, post-ICU, post-COVID" },
    { label: "Poor sleep, snoring or suspected sleep apnea", sub: "Daytime sleepiness, unrefreshed sleep" },
    { label: "Multiple treatments with no clear answers", sub: "Seen many doctors, still searching" },
    { label: "Need for a specialist second opinion", sub: "Complex ILD, severe asthma, lung fibrosis" },
    { label: "Long COVID breathlessness", sub: "Persisting months after recovery" },
    { label: "Post-ICU lung deconditioning", sub: "Muscle weakness, reduced exercise tolerance" },
    { label: "Lung nodule or early lung cancer concern", sub: "Monitoring, staging, support & recovery" },
    { label: "Expat or outstation patient", sub: "Expedited workup for tight timelines" },
  ];

  const programs = [
    {
      title: "Severe Asthma Program",
      image: nebulizerImg11,
      tag: "severe asthma treatment Bengaluru",
      text: "For patients with persistent breathlessness, frequent attacks or poor response to inhalers — including those who may need biologics or allergy workup.",
      symptoms: ["Frequent asthma attacks", "Night-time breathlessness", "Poor inhaler response", "Allergic triggers"],
      items: [
        "Comprehensive severe asthma evaluation",
        "Biologics assessment & guidance",
        "Allergy testing & immunotherapy",
        "Advanced lung function testing (FeNO, IOS)",
        "Breathing retraining & optimization",
      ],
    },
    {
      title: "COPD & Emphysema Care",
      image: rehabImg1,
      tag: "COPD rehabilitation Bengaluru",
      text: "Structured, long-term COPD management focused on improving breathing capacity, reducing flare-ups, avoiding hospitalization and building endurance.",
      symptoms: ["Progressive breathlessness", "Frequent chest infections", "Recurrent hospital admissions", "Reduced exercise tolerance"],
      items: [
        "COPD rehabilitation & exercise programs",
        "Oxygen optimization & assessment",
        "Breathlessness reduction strategies",
        "Prevent rehospitalization pathway",
        "Long-term COPD monitoring",
      ],
    },
    {
      title: "Lung Fibrosis / ILD Program",
      image: nebulizerImg,
      tag: "ILD specialist Bengaluru",
      text: "Disease-specific structured care for interstitial lung disease and pulmonary fibrosis — combining monitoring, rehabilitation, oxygen support and recovery planning.",
      symptoms: ["Progressive breathlessness", "Dry persistent cough", "Reduced exercise capacity", "Oxygen dependency"],
      items: [
        "ILD & pulmonary fibrosis assessment",
        "Fibrosis progression monitoring",
        "Pulmonary rehabilitation for ILD",
        "Ambulatory oxygen evaluation",
        "Exercise conditioning & stamina building",
      ],
    },
    {
      title: "Sleep Disorders Center",
      image: sleepImg,
      tag: "sleep apnea treatment Bengaluru",
      text: "Integrated multidisciplinary sleep care involving pulmonology, ENT, psychology and sleep dentistry — for snoring, sleep apnea and insomnia.",
      symptoms: ["Loud snoring", "Daytime sleepiness", "Unrefreshed sleep", "Morning headaches"],
      items: [
        "In-house sleep lab & sleep studies",
        "Sleep apnea diagnosis & CPAP therapy",
        "Pulmonology + ENT + Psychology team",
        "Sleep dentistry for oral appliance therapy",
        "Complex sleep disorder management",
      ],
    },
    {
      title: "Bronchiectasis Program",
      image: rehabImg2,
      tag: "bronchiectasis treatment Bengaluru",
      text: "Dedicated care for bronchiectasis — an often undertreated condition causing chronic cough, recurrent chest infections and reduced lung capacity.",
      symptoms: ["Chronic productive cough", "Recurrent chest infections", "Breathlessness on exertion", "Fatigue"],
      items: [
        "Bronchiectasis specialist evaluation",
        "Airway clearance techniques",
        "Pulmonary rehabilitation",
        "Infection management plan",
        "Long-term disease monitoring",
      ],
    },
   {
  title: "Post-ICU & Ventilator Recovery",
  image: careImg,
  tag: "post ICU pulmonary rehabilitation Bengaluru",
  text: "Structured pulmonary rehabilitation for patients recovering after ICU stay, ventilator support, severe lung infection, prolonged oxygen dependency, or critical respiratory illness.",
  symptoms: [
    "Weakness after ICU stay",
    "Breathlessness after ventilation",
    "Reduced stamina & endurance",
    "Difficulty returning to routine activity"
  ],
  items: [
    "Post-ICU respiratory assessment",
    "Ventilator recovery rehabilitation",
    "Oxygen optimization & monitoring",
    "Strength and endurance rebuilding",
    "Functional recovery & breathing training",
  ],
},
  ];

  const rehabIncludes = [
    "Respiratory physiotherapy",
    "Breathing retraining",
    "Endurance conditioning",
    "Oxygen optimization",
    "Airway clearance techniques",
    "Nutrition guidance",
    "Sleep optimization",
    "Psychological support",
    "Yoga & naturopathy integration",
    "Smoking & vaping cessation",
    "Home exercise planning",
    "Disease education & self-management",
  ];

  // Diagnostics reorganised into two tiers — no icons
  const diagnosticsCore = [
  {
    title: "Sleep Study & Sleep Lab",
    text: "Advanced sleep assessment for sleep apnea, snoring, oxygen fluctuation, and sleep-related breathing disorders.",
  },
  {
    title: "DLCO Testing",
    text: "Detects early lung damage, reduced oxygen transfer and functional impairment before symptoms worsen.",
  },
  {
    title: "FeNO Testing",
    text: "Measures airway inflammation to guide asthma treatment, identify steroid-responsive disease and monitor biologics.",
  },
  {
    title: "Point-of-Care Ultrasound",
    text: "Real-time bedside respiratory and pleural assessment available within the outpatient setting.",
  },
];

const diagnosticsSecondary = [
  {
    title: "IOS / Impulse Oscillometry",
    text: "Advanced lung mechanics testing useful in small airways disease and early respiratory dysfunction.",
  },
   {
title: "Portable Digital Chest X-Ray",
text: "Rapid chest imaging services available right from your room to your doorstep.",  },
  {
    title: "Allergy Testing",
    text: "Identifies allergic triggers for asthma, rhinitis and complex respiratory presentations.",
  },
  {
    title: "Exercise Capacity Assessment",
    text: "Evaluates stamina, oxygen response, physical endurance and rehabilitation progress.",
  },
   {
    title: "Pulmonary Function Testing (PFT)",
    text: "Comprehensive lung function assessment to evaluate airflow limitation, lung capacity, breathing efficiency, and respiratory performance.",
  },
];
  const why = [
    {
      n: "01",
      title: "True Continuum of Care",
      text: "Screening → Diagnosis → Intervention → Rehab → Wellness → Follow-up. Connected. Not fragmented.",
    },
    {
      n: "02",
      title: "Advanced Outpatient Model",
      text: "Hospital-grade respiratory care without the hospital. Avoid admissions, reduce healthcare contact.",
    },
    {
      n: "03",
      title: "Pulmonary Rehabilitation Experts",
      text: "One of India's strongest pulmonary rehab programs with 15,000+ rehab visits over 2.5 years.",
    },
    {
      n: "04",
      title: "Multidisciplinary Team Under One Roof",
      text: "Pulmonologist, ENT, Sleep Physician, Psychologist, Physiotherapist, Dietician, Yoga therapist.",
    },
    {
      n: "05",
      title: "Integrated Sleep & Respiratory Care",
      text: "In-house sleep lab with pulmonology, ENT, sleep dentistry and psychology coordinated together.",
    },
    {
      n: "06",
      title: "Same-Day Diagnostics & Planning",
      text: "Most tests done and reviewed on the same visit. Saves your 3Ts — time, traffic and travel.",
    },
    {
      n: "07",
      title: "20+ Years of Expertise",
      text: "Nationally and internationally trained respiratory specialists with deep clinical experience.",
    },
    {
      n: "08",
      title: "Hospital Continuity Care",
      text: "If you need admission, the VAAYU team follows you to the hospital — and brings you back to outpatient care.",
    },
  ];

  const outcomes = [
    { stat: "↑", label: "Exercise capacity & 6MWT improvement" },
    { stat: "↓", label: "Breathlessness at rest and on exertion" },
    { stat: "↓", label: "Repeat hospitalizations & emergency visits" },
    { stat: "↑", label: "Oxygen efficiency & saturation on exertion" },
    { stat: "↑", label: "Sleep quality & daytime energy" },
    { stat: "↓", label: "Fatigue and post-exertional symptoms" },
    { stat: "↑", label: "Daily independence & quality of life" },
    { stat: "↑", label: "Long-term disease stability & control" },
  ];

  const journey = [
    { step: "01", label: "Consultation", desc: "Specialist respiratory & sleep assessment" },
    { step: "02", label: "Diagnosis", desc: "Same-day advanced diagnostic workup" },
    { step: "03", label: "Care Plan", desc: "Personalized treatment & rehabilitation plan" },
    { step: "04", label: "Rehabilitation", desc: "Supervised pulmonary rehab program" },
    { step: "05", label: "Wellness", desc: "Yoga, nutrition, psychology integration" },
    { step: "06", label: "Follow-Up", desc: "Long-term monitoring & disease management" },
  ];

  // FAQs categorised into 4 groups
  const faqCategories = [
  {
    label: "About VAAYU",
    icon: "",
    faqs: [
      {
        q: "What makes VAAYU different from a regular pulmonology clinic?",
        a: "VAAYU is an integrated outpatient respiratory care center in Bengaluru, not just a regular pulmonology clinic. We bring together pulmonology, advanced diagnostics, pulmonary rehabilitation, sleep medicine, ENT, psychology, nutrition, yoga, and long-term follow-up under one coordinated care model.",
      },
      {
        q: "What conditions do respiratory specialists at VAAYU treat?",
        a: "VAAYU treats asthma, COPD, lung fibrosis/ILD, bronchiectasis, sleep apnea, chronic cough, breathlessness, post-ICU recovery, oxygen dependency, respiratory allergies, and complex respiratory conditions that need specialist-led care.",
      },
      {
        q: "Do you provide multidisciplinary respiratory care?",
        a: "Yes. VAAYU provides multidisciplinary respiratory care with pulmonology, ENT, psychology, nutrition, sleep dentistry, pulmonary rehabilitation, yoga, and wellness support working together within one care pathway.",
      },
      {
        q: "What is the benefit of an outpatient respiratory center compared to repeated hospital visits?",
        a: "An outpatient respiratory center helps patients receive advanced care, diagnostics, rehabilitation, and follow-up without depending only on hospital visits. The goal is to detect worsening early, improve function, reduce avoidable admissions, and support long-term stability.",
      },
      {
        q: "Do you offer second opinions for complex respiratory diseases?",
        a: "Yes. VAAYU offers second opinions for complex respiratory diseases such as severe asthma, ILD/lung fibrosis, COPD, bronchiectasis, unexplained breathlessness, and difficult-to-control symptoms.",
      },
    ],
  },
  {
    label: "Symptoms & Conditions",
    icon: "",
    faqs: [
      {
        q: "When should I see a pulmonologist for breathlessness or chronic cough?",
        a: "You should see a pulmonologist if breathlessness or chronic cough is persistent, worsening, affecting daily activity, disturbing sleep, or not improving with regular medication. Early evaluation helps identify conditions like asthma, COPD, ILD, infection, allergy, or sleep-related breathing problems.",
      },
      {
        q: "Why do some respiratory patients not improve despite medications?",
        a: "Some patients do not improve with medications alone because the problem may involve poor lung conditioning, incorrect inhaler technique, oxygen drop during activity, sleep issues, anxiety, mucus clearance problems, or an undiagnosed condition. VAAYU looks beyond prescriptions to identify the full cause.",
      },
      {
        q: "How is VAAYU useful for elderly patients with chronic respiratory disease?",
        a: "VAAYU supports elderly patients with chronic respiratory disease through specialist review, safe diagnostics, oxygen assessment, pulmonary rehabilitation, home-based options, fall-risk-aware planning, and long-term follow-up.",
      },
      {
        q: "Can VAAYU help avoid repeated hospital admissions for COPD or lung disease?",
        a: "Yes. VAAYU focuses on reducing repeated respiratory hospitalizations through optimized treatment, inhaler review, oxygen assessment, pulmonary rehabilitation, early warning plans, infection prevention, and regular follow-up.",
      },
      {
        q: "Is pulmonary rehabilitation useful after ICU stay, pneumonia or COVID?",
        a: "Yes. Pulmonary rehabilitation can help after ICU stay, ventilator support, pneumonia, severe infection, or COVID-related lung weakness by improving breathing efficiency, stamina, strength, oxygen response, and confidence in daily activity.",
      },
    ],
  },
  {
    label: "Pulmonary Rehab",
    icon: "",
    faqs: [
      {
        q: "What is pulmonary rehabilitation and who needs it?",
        a: "Pulmonary rehabilitation is a medically supervised recovery program that improves breathing, stamina, oxygen use, strength, and daily function. It is useful for patients with COPD, ILD/lung fibrosis, bronchiectasis, post-COVID symptoms, post-ICU weakness, oxygen dependency, or reduced exercise capacity.",
      },
      {
        q: "Can pulmonary rehabilitation help COPD, lung fibrosis or bronchiectasis?",
        a: "Yes. Pulmonary rehabilitation can improve exercise tolerance, reduce breathlessness, support oxygen efficiency, improve quality of life, and reduce flare-ups in patients with COPD, ILD/lung fibrosis, bronchiectasis, post-COVID symptoms, and post-hospitalization weakness.",
      },
      {
        q: "Do you offer home-based pulmonary rehabilitation in Bengaluru?",
        a: "Yes. VAAYU offers center-based, home-based, and hybrid pulmonary rehabilitation in Bengaluru depending on the patient’s condition, mobility, oxygen needs, and recovery goals.",
      },
      {
        q: "What is the role of pulmonary rehabilitation beyond medications and inhalers?",
        a: "Medications and inhalers help control disease, but pulmonary rehabilitation improves how patients breathe, move, tolerate activity, clear mucus, manage oxygen, and regain confidence. It addresses the functional recovery that medicines alone may not provide.",
      },
      {
        q: "Can oxygen-dependent patients undergo pulmonary rehabilitation?",
        a: "Yes. Oxygen-dependent patients can undergo pulmonary rehabilitation with proper assessment, monitoring, oxygen planning, and individualized intensity. VAAYU designs rehab safely based on each patient’s baseline capacity.",
      },
      {
        q: "Can pulmonary rehabilitation improve exercise capacity and quality of life?",
        a: "Yes. Pulmonary rehabilitation can improve walking capacity, stamina, breathlessness control, oxygen efficiency, muscle strength, confidence, independence, and overall quality of life.",
      },
      {
        q: "How many pulmonary rehabilitation sessions are usually required?",
        a: "The number of sessions depends on diagnosis, severity, oxygen needs, baseline fitness, and recovery goals. Many patients benefit from a structured multi-week program followed by home exercises and periodic progress reviews.",
      },
    ],
  },
  {
    label: "Sleep & Diagnostics",
    icon: "",
    faqs: [
      {
        q: "Do you provide integrated care for sleep apnea and snoring?",
        a: "Yes. VAAYU provides integrated care for sleep apnea and snoring through sleep study, pulmonology review, CPAP guidance, ENT evaluation, sleep dentistry support, psychology input, and follow-up care.",
      },
      {
        q: "Can I get all respiratory tests done under one roof?",
        a: "Yes. VAAYU offers advanced respiratory and sleep testing under one roof, including PFT, DLCO, FeNO, IOS, sleep study, oxygen assessment, allergy testing, point-of-care ultrasound, and portable digital chest X-ray support.",
      },
      {
        q: "What advanced lung diagnostics are available at VAAYU?",
        a: "VAAYU offers advanced lung diagnostics such as DLCO, FeNO, IOS, sleep lab testing, point-of-care ultrasound, PFT, oxygen and ventilation assessment, allergy testing, and advanced respiratory evaluation for complex lung conditions.",
      },
    ],
  },
];
  const aboutPillars = [
    {
      title: "True Continuum of Care",
      sub: "Screening to long-term follow-up — fully connected, not fragmented",
      icon: "",
    },
    {
      title: "Advanced Outpatient Without Hospitalization",
      sub: "Hospital-grade care designed to prevent unnecessary admissions",
      icon: "",
    },
    {
      title: "Integrated Rehab, Wellness & Sleep",
      sub: "Rehab + yoga + psychology + nutrition + sleep — the complete recovery engine",
      icon: "",
    },
  ];

  return (
    <main className="vc-page">
      <style>{`
      /* DR RAVI MEHTA PHILOSOPHY */
.vc-philosophy-section {
  background: #eaf1e6;
  color: #293018;
}

.vc-philosophy-card {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 0;
  overflow: hidden;
  border-radius: 34px;
  background: #ffffff;
  border: 1px solid rgba(97,114,78,.14);
  box-shadow: 0 26px 72px rgba(47,54,26,.14);
}

.vc-philosophy-image {
  min-height: 460px;
  background: #dfe8da;
}

.vc-philosophy-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.vc-philosophy-content {
  padding: 48px 46px;
}

.vc-philosophy-content h2 {
  margin: 16px 0 18px;
  color: #293018;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1.12;
  letter-spacing: -0.035em;
  font-weight: 800;
}

.vc-philosophy-content p {
  color: #526043;
  font-size: 15px;
  line-height: 1.8;
  margin: 0 0 16px;
}

.vc-philosophy-quote {
  margin: 22px 0;
  padding: 20px 22px;
  border-radius: 20px;
  background: rgba(97,114,78,.08);
  border-left: 4px solid #61724e;
  color: #293018;
  font-size: 16px;
  line-height: 1.75;
  font-weight: 700;
}

.vc-philosophy-list {
  display: grid;
  gap: 10px;
  margin: 22px 0;
}

.vc-philosophy-point {
  padding: 13px 16px;
  border-radius: 16px;
  background: rgba(97,114,78,.06);
  border: 1px solid rgba(97,114,78,.12);
  color: #293018;
  font-size: 14.5px;
  font-weight: 700;
}

@media (max-width: 900px) {
  .vc-philosophy-card {
    grid-template-columns: 1fr;
  }

  .vc-philosophy-content {
    order: 1;
    padding: 30px 22px;
  }

  .vc-philosophy-image {
    order: 2;
    min-height: 320px;
  }
}
    /* ── RESET & BASE ── */
        .vc-page, .vc-page * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        .vc-page {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Inter, system-ui, sans-serif;
          background: ${T.bg};
          color: ${T.text};
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .vc-wrap {
          width: min(92%, 1240px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .vc-section {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
        }

        .vc-light {
          background:
            radial-gradient(circle at 12% 18%, rgba(159,171,144,.18), transparent 30%),
            radial-gradient(circle at 88% 72%, rgba(97,114,78,.12), transparent 34%),
            ${T.light};
          color: ${T.ink};
        }

        .vc-dark {
          background:
            radial-gradient(circle at 12% 20%, rgba(215,222,201,.10), transparent 32%),
            radial-gradient(circle at 90% 75%, rgba(159,171,144,.12), transparent 34%),
            ${T.bg};
        }

        .clinical-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .45;
          background-image:
            linear-gradient(rgba(97,114,78,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(97,114,78,.055) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
          -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 78%);
        }

        .vc-chip {
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

        .vc-chip.dark {
          color: ${T.green};
          background: rgba(97,114,78,.07);
          border-color: rgba(97,114,78,.18);
        }

        .vc-section-title {
          max-width: 790px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .vc-section-title h2 {
          margin: 18px 0 0;
          color: ${T.ink};
          font-size: clamp(1.85rem, 3.5vw, 3.1rem);
          line-height: 1.12;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        .vc-section-title h2.light { color: ${T.text}; }

        .vc-section-title p {
          margin: 16px auto 0;
          max-width: 680px;
          color: #5d684b;
          font-size: 15.5px;
          line-height: 1.75;
        }

        .vc-section-title p.light { color: ${T.muted}; }

        .vc-btn-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .vc-btn-primary, .vc-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14.5px;
          transition: transform .28s ease, box-shadow .28s ease, background .28s ease;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
          touch-action: manipulation;
        }

        .vc-btn-primary {
          background: ${T.green};
          color: ${T.text};
          box-shadow: 0 16px 40px rgba(47,54,26,.22);
        }

        .vc-btn-secondary {
          background: rgba(255,248,239,.08);
          color: ${T.text};
          border: 1px solid rgba(215,222,201,.28);
        }

        /* CARE JOURNEY DESKTOP FIX */
.vc-journey-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
  margin-top: 48px;
  align-items: start;
}

.vc-journey-step {
  text-align: center;
  position: relative;
}

.vc-journey-num {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  margin: 0 auto 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 248, 239, 0.08);
  border: 2px solid rgba(215, 222, 201, 0.28);

  color: #fff8ef;
  font-size: 13px;
  font-weight: 800;
}

.vc-journey-label {
  color: #fff8ef;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 8px;
}

.vc-journey-desc {
  color: #d7dec9;
  font-size: 13.5px;
  line-height: 1.6;
}
@media (max-width: 760px) {

  .vc-stat-grid {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 12px !important;

    background: transparent !important;
    margin-top: 18px !important;
  }

  .vc-stat {
    width: calc(50% - 6px) !important;

    padding: 18px 14px !important;

    border-radius: 18px !important;

    background: rgba(255,255,255,0.05) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;

    min-height: auto !important;
  }

  .vc-stat strong {
    display: block;
    font-size: 1.75rem !important;
    line-height: 1 !important;
    margin-bottom: 8px !important;
  }

  .vc-stat span {
    font-size: 12px !important;
    line-height: 1.4 !important;
  }
}
        @media (hover: hover) {
          .vc-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 22px 50px rgba(47,54,26,.32); }
          .vc-btn-secondary:hover { transform: translateY(-2px); background: rgba(255,248,239,.14); }
        }

        /* ── HERO ── */
        .vc-hero {
          min-height: 100svh;
          min-height: -webkit-fill-available;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: ${T.deep};
        }

        .vc-hero-bg {
          position: absolute;
          inset: 0;
        }

        .vc-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .22;
          filter: saturate(.75) contrast(1.05);
        }

        .vc-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(47,54,26,.97), rgba(47,54,26,.84), rgba(97,114,78,.5)),
            radial-gradient(circle at 74% 38%, rgba(215,222,201,.18), transparent 34%);
        }

       .vc-hero-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) 400px;
  gap: 48px;
  align-items: center;
  padding: 120px 0 74px;
}
        .vc-hero h1 {
          margin: 22px 0 0;
          max-width: 920px;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          line-height: 1.08;
          letter-spacing: -.04em;
          font-weight: 700;
          color: ${T.text};
        }

        .vc-hero h1 span { color: ${T.muted}; }

        .vc-hero-card {
          margin-top: 26px;
          max-width: 790px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,248,239,.08);
          border: 1px solid rgba(215,222,201,.22);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
        }

        .vc-hero-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 15.5px;
          line-height: 1.75;
        }

        .vc-hero-card strong { color: ${T.text}; }

        .vc-hero-tags {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .vc-hero-tag {
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(159,171,144,.18);
          border: 1px solid rgba(215,222,201,.2);
          color: ${T.muted};
          font-size: 12px;
          font-weight: 600;
        }

        .vc-stats-card {
          border-radius: 30px;
          padding: 28px;
          background: rgba(255,248,239,.095);
          border: 1px solid rgba(215,222,201,.26);
          -webkit-backdrop-filter: blur(18px);
          backdrop-filter: blur(18px);
          box-shadow: 0 30px 80px rgba(47,54,26,.36);
        }

        .vc-stats-card h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.35;
          color: ${T.text};
        }

        .vc-stats-card p {
          color: ${T.muted};
          font-size: 14px;
          line-height: 1.7;
        }

        .vc-stat-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(215,222,201,.16);
          overflow: hidden;
          border-radius: 22px;
        }

        .vc-stat {
          padding: 18px;
          background: rgba(47,54,26,.25);
        }

        .vc-stat strong {
          display: block;
          color: ${T.text};
          font-size: 24px;
          font-weight: 750;
        }

        .vc-stat span {
          color: ${T.muted};
          font-size: 12px;
        }

        /* ── ABOUT VAAYU — redesigned ── */
        .vc-about-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 26px 72px rgba(47,54,26,.18);
          border: 1px solid rgba(97,114,78,.14);
        }

        .vc-about-image-col {
          position: relative;
          min-height: 360px;
          overflow: hidden;
        }

        .vc-about-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: saturate(.88) brightness(.88);
          transition: transform .6s ease;
        }

        .vc-about-image-col:hover img {
          transform: scale(1.03);
        }

        .vc-about-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(47,54,26,.45) 100%);
        }

        .vc-about-content-col {
          background: rgba(255,255,255,.92);
          padding: 44px 42px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .vc-about-content-col h2 {
          margin: 16px 0 0;
          color: ${T.ink};
          font-size: clamp(1.6rem, 2.6vw, 2.4rem);
          line-height: 1.15;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        .vc-about-lead {
          margin-top: 14px;
          color: #526043;
          font-size: 14.5px;
          line-height: 1.75;
        }

        .vc-about-highlight {
          margin-top: 18px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(97,114,78,.07);
          border-left: 3px solid ${T.green};
          color: ${T.ink};
          font-size: 14px;
          line-height: 1.65;
          font-style: italic;
        }

        .vc-about-pillars-new {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vc-pillar-new {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 14px;
          background: rgba(97,114,78,.06);
          border: 1px solid rgba(97,114,78,.12);
          transition: background .22s;
        }

        .vc-pillar-new:hover {
          background: rgba(97,114,78,.11);
        }

        .vc-pillar-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: ${T.green};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 15px;
          color: #fff;
        }

        .vc-pillar-text-wrap {
          flex: 1;
          min-width: 0;
        }

        .vc-pillar-title {
          font-weight: 700;
          font-size: 14px;
          color: ${T.ink};
          line-height: 1.3;
        }

        .vc-pillar-sub-new {
          font-size: 12.5px;
          color: #6a7a56;
          margin-top: 2px;
          line-height: 1.4;
        }

        /* ── COMPARE ── */
        .vc-compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .vc-compare-card {
          border-radius: 32px;
          padding: 36px;
          border: 1px solid rgba(215,222,201,.16);
          box-shadow: 0 28px 70px rgba(0,0,0,.18);
        }

        .vc-compare-card.traditional {
          background: rgba(47,54,26,.34);
        }

        .vc-compare-card.vaayu {
          background: linear-gradient(145deg, ${T.green2}, ${T.green});
        }

        .vc-compare-card h3 {
          margin: 0;
          color: ${T.text};
          font-size: 25px;
          letter-spacing: -.02em;
          font-weight: 700;
        }

        .vc-compare-card ul {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: grid;
          gap: 16px;
        }

        .vc-compare-card li {
          color: ${T.muted};
          line-height: 1.55;
          font-size: 15px;
          padding-left: 18px;
          position: relative;
        }

        .vc-compare-card li::before {
          content: "";
          position: absolute;
          left: 0;
          top: -10px;
right: -10px;
          height: 6px;
          border-radius: 50%;
          background: rgba(215,222,201,.5);
        }

        .vc-compare-card.vaayu li::before {
          background: rgba(255,248,239,.6);
        }

        /* ── PATIENT SIGNALS ── */
        .vc-signal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

 .vc-signal-card {
  min-height: 150px;
  border-radius: 24px;
  padding: 22px;
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(97,114,78,.14);
  color: #293018;
  box-shadow: 0 12px 34px rgba(47,54,26,.08);

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 0.25s ease;
}

.vc-signal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 42px rgba(47,54,26,.12);
}

        .vc-signal-label {
          font-weight: 700;
          font-size: 14.5px;
          line-height: 1.4;
          color: ${T.ink};
        }

        .vc-signal-sub {
          font-size: 12.5px;
          color: #6a7a56;
          margin-top: 4px;
          line-height: 1.4;
        }

        /* ── PROGRAMS ── */
        @media (max-width: 760px) {
  .vc-treatment-grid {
    grid-template-columns: 1fr !important;
    gap: 24px;
  }

  .vc-treatment-card {
    width: 100%;
    border-radius: 28px;
  }

  .vc-treatment-img {
    height: 240px;
  }

  .vc-treatment-body {
    padding: 24px 22px;
  }

  .vc-treatment-body h3 {
    font-size: 22px;
    line-height: 1.25;
  }
}
        .vc-treatment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        .vc-treatment-card {
          border-radius: 32px;
          overflow: hidden;
          background: #3f482b;
          border: 1px solid rgba(255,255,255,.06);
          box-shadow: 0 28px 70px rgba(0,0,0,.32);
          transition: transform .32s ease, box-shadow .32s ease;
          position: relative;
        }

        @media (hover: hover) {
          .vc-treatment-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 40px 90px rgba(0,0,0,.42);
          }
          .vc-treatment-card:hover img {
            transform: scale(1.06);
            filter: brightness(.95);
          }
        }

        .vc-treatment-img {
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .vc-treatment-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(.78) saturate(.9);
          transition: transform .4s ease, filter .4s ease;
        }

        .vc-treatment-tag {
          position: absolute;
          bottom: 10px;
          left: 12px;
          background: rgba(47,54,26,.82);
          color: ${T.muted};
          font-size: 10.5px;
          padding: 4px 10px;
          border-radius: 999px;
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
        }

        .vc-treatment-body {
          padding: 26px;
        }

        .vc-treatment-body h3 {
          color: #ffffff;
          margin: 0;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 700;
        }

        .vc-treatment-body p {
          color: ${T.muted};
          line-height: 1.65;
          font-size: 14px;
          margin-top: 10px;
        }

        .vc-treatment-symptoms {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .vc-symptom-tag {
          background: rgba(159,171,144,.15);
          border: 1px solid rgba(159,171,144,.2);
          color: ${T.sage};
          font-size: 11.5px;
          padding: 4px 10px;
          border-radius: 999px;
        }

        .vc-treatment-body ul {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
          display: grid;
          gap: 9px;
        }

        .vc-treatment-body li {
          color: #d7dec9;
          font-size: 13.5px;
          line-height: 1.45;
          display: grid;
          grid-template-columns: 8px 1fr;
          column-gap: 10px;
        }

        .vc-treatment-body li::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #9fab90;
          margin-top: 8px;
        }

        /* ── REHAB ── */
        .vc-rehab-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 34px;
          align-items: stretch;
        }

        .vc-premium-panel {
          border-radius: 34px;
          padding: 42px;
          background:
            linear-gradient(145deg, rgba(255,248,239,.09), rgba(255,248,239,.045)),
            ${T.green2};
          border: 1px solid rgba(215,222,201,.18);
          box-shadow: 0 24px 68px rgba(47,54,26,.18);
        }

        .vc-premium-panel h2 {
          margin: 18px 0 0;
          color: ${T.text};
          font-size: clamp(1.9rem, 3vw, 2.8rem);
          line-height: 1.13;
          letter-spacing: -.035em;
        }

        .vc-premium-panel p {
          color: ${T.muted};
          line-height: 1.8;
          font-size: 15px;
        }

        .vc-clean-list {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .vc-clean-item {
          padding: 15px 16px;
          border-radius: 18px;
          background: rgba(255,248,239,.065);
          border: 1px solid rgba(215,222,201,.13);
          color: ${T.text};
          font-size: 14.5px;
          line-height: 1.55;
          font-weight: 600;
        }

        .vc-clean-item::before {
          content: "";
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          margin-right: 11px;
          background: ${T.muted};
          transform: translateY(-1px);
        }

        .vc-pill-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 26px;
        }

        .vc-pill-box {
          padding: 15px 16px;
          border-radius: 18px;
          background: rgba(255,248,239,.07);
          border: 1px solid rgba(215,222,201,.13);
          color: ${T.text};
          font-size: 13.5px;
          line-height: 1.45;
          font-weight: 500;
        }

        /* ── JOURNEY ── */
      @media (min-width: 761px) {
  .vc-journey-grid {
    position: relative;
  }

  .vc-journey-grid::before {
    content: "";
    position: absolute;
    top: 32px;
    left: 8%;
    right: 8%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(215, 222, 201, 0.35),
      transparent
    );
    z-index: 0;
  }

  .vc-journey-step {
    position: relative;
    z-index: 2;
  }

  .vc-journey-num {
    background: #58623b;
    position: relative;
    z-index: 3;
  }
}

        /* ── DIAGNOSTICS — redesigned ── */
        .vc-diag-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: stretch;
        }

        .vc-diag-image-col {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          height: 100%;
          min-height: 480px;
          box-shadow: 0 26px 68px rgba(47,54,26,.18);
        }

        .vc-diag-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(.86) brightness(.88);
        }

        .vc-diag-image-badge {
          position: absolute;
          bottom: 18px;
          left: 18px;
          right: 18px;
          padding: 14px 18px;
          border-radius: 16px;
          background: rgba(47,54,26,.82);
          border: 1px solid rgba(215,222,201,.18);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          color: ${T.text};
          font-size: 13px;
          font-weight: 600;
          line-height: 1.5;
        }

        .vc-diag-image-badge span {
          display: block;
          color: ${T.sage};
          font-size: 11px;
          font-weight: 400;
          margin-top: 2px;
        }

        .vc-diag-content {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .vc-diag-intro {
          margin-bottom: 24px;
        }

        .vc-diag-intro h2 {
          margin: 16px 0 0;
          color: ${T.ink};
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          line-height: 1.18;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        .vc-diag-intro p {
          margin-top: 12px;
          color: #526043;
          font-size: 14.5px;
          line-height: 1.7;
        }

        /* Core tests — prominent cards */
        .vc-diag-core-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 14px;
        }

        .vc-diag-core-card {
          border-radius: 18px;
          padding: 20px 18px;
          background: rgba(255,255,255,.85);
          border: 1px solid rgba(97,114,78,.15);
          box-shadow: 0 6px 20px rgba(47,54,26,.07);
          transition: box-shadow .22s;
        }

        .vc-diag-core-card:hover {
          box-shadow: 0 10px 28px rgba(47,54,26,.12);
        }

        .vc-diag-core-title {
          font-size: 13.5px;
          font-weight: 700;
          color: ${T.ink};
          line-height: 1.3;
          margin-bottom: 7px;
        }

        .vc-diag-core-text {
          font-size: 12px;
          color: #5d6e48;
          line-height: 1.55;
        }

        /* Secondary tests — compact list */
        .vc-diag-secondary-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #7a8f65;
          margin-bottom: 8px;
          padding-left: 2px;
        }

        .vc-diag-secondary-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .vc-diag-secondary-item {
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(97,114,78,.06);
          border: 1px solid rgba(97,114,78,.1);
          transition: background .2s;
        }

        .vc-diag-secondary-item:hover {
          background: rgba(97,114,78,.11);
        }

        .vc-diag-secondary-inner {
          flex: 1;
          min-width: 0;
        }

        .vc-diag-secondary-title {
          font-size: 12.5px;
          font-weight: 700;
          color: ${T.ink};
          line-height: 1.3;
        }

        .vc-diag-secondary-text {
          font-size: 11.5px;
          color: #5d6e48;
          line-height: 1.45;
          margin-top: 3px;
        }

        /* full-width last item */
        .vc-diag-secondary-item.full-width {
          grid-column: 1 / -1;
        }

        /* ── WHY ── */
        .vc-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .vc-why-card {
          min-height: 180px;
          padding: 26px;
          border-radius: 26px;
          background: rgba(255,248,239,.075);
          border: 1px solid rgba(215,222,201,.15);
          transition: transform .28s ease, background .28s ease;
        }

        @media (hover: hover) {
          .vc-why-card:hover {
            transform: translateY(-6px);
            background: rgba(255,248,239,.11);
          }
        }

        .vc-why-n {
          color: ${T.muted};
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .12em;
        }

        .vc-why-card h3 {
          margin: 12px 0 8px;
          color: ${T.text};
          font-size: 17px;
          line-height: 1.3;
          font-weight: 700;
        }

        .vc-why-card p {
          margin: 0;
          color: ${T.muted};
          font-size: 13px;
          line-height: 1.6;
        }

        /* ── OUTCOMES ── */
        .vc-outcome-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(97,114,78,.18);
          box-shadow: 0 24px 60px rgba(47,54,26,.1);
        }

        .vc-outcome-item {
          padding: 28px 32px;
          background: rgba(255,255,255,.82);
          border-right: 1px solid rgba(97,114,78,.12);
          border-bottom: 1px solid rgba(97,114,78,.12);
          display: flex;
          align-items: center;
          gap: 18px;
          transition: background .22s ease;
        }

        @media (hover: hover) {
          .vc-outcome-item:hover {
            background: rgba(255,255,255,.96);
          }
        }

        .vc-outcome-item:nth-child(2n) { border-right: none; }
        .vc-outcome-item:nth-last-child(-n+2) { border-bottom: none; }

        .vc-outcome-stat {
          font-size: 22px;
          font-weight: 800;
          color: ${T.green2};
          flex-shrink: 0;
          width: 36px;
          text-align: center;
        }

        .vc-outcome-label {
          color: #3a4a2a;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 600;
        }

        /* ── FAQ — categorised ── */
        .vc-faq-section {
          background:
            radial-gradient(circle at 15% 20%, rgba(159,171,144,.18), transparent 32%),
            linear-gradient(180deg, ${T.light} 0%, #dfe8da 45%, ${T.bg} 100%);
          color: ${T.ink};
        }

        .vc-faq-shell {
          max-width: 1080px;
          margin: 0 auto;
        }

        .vc-faq-top {
          padding: 42px;
          border-radius: 34px;
          background: linear-gradient(145deg, ${T.green2}, ${T.green});
          color: ${T.text};
          text-align: center;
          box-shadow: 0 30px 78px rgba(47,54,26,.18);
        }

        .vc-faq-top h2 {
          margin: 16px 0 0;
          font-size: clamp(1.9rem, 3.2vw, 2.8rem);
          line-height: 1.1;
          letter-spacing: -.03em;
          font-weight: 700;
        }

        /* Category tabs */
        .vc-faq-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 22px;
        }

        .vc-faq-tab {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(215,222,201,.28);
          background: rgba(255,248,239,.1);
          color: ${T.muted};
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all .22s;
          font-family: inherit;
          -webkit-user-select: none;
          user-select: none;
        }

        .vc-faq-tab:hover {
          background: rgba(255,248,239,.18);
          color: ${T.text};
        }

        .vc-faq-tab.active {
          background: rgba(255,248,239,.95);
          color: ${T.green2};
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(47,54,26,.2);
        }

        .vc-faq-tab-icon {
          font-size: 14px;
        }

        .vc-faq-count {
          font-size: 11px;
          background: rgba(97,114,78,.2);
          padding: 2px 7px;
          border-radius: 999px;
        }

        .vc-faq-tab.active .vc-faq-count {
          background: rgba(97,114,78,.12);
          color: ${T.green};
        }

        .vc-faq-list {
          margin-top: 24px;
          display: grid;
          gap: 12px;
        }

        .vc-faq-item {
          border-radius: 22px;
          overflow: hidden;
          background: ${T.cream2};
          border: 1px solid rgba(97,114,78,.15);
          box-shadow: 0 12px 32px rgba(47,54,26,.07);
        }

        .vc-faq-q {
          width: 100%;
          border: none;
          background: transparent;
          text-align: left;
          cursor: pointer;
          padding: 22px 24px;
          color: ${T.ink};
          font-size: 15.5px;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-family: inherit;
          line-height: 1.4;
          -webkit-user-select: none;
          user-select: none;
        }

        .vc-faq-q span:last-child {
          color: ${T.green};
          font-size: 22px;
          line-height: 1;
          flex-shrink: 0;
        }

        .vc-faq-a {
          padding: 0 24px 22px;
          color: #526043;
          font-size: 14.5px;
          line-height: 1.75;
        }

        /* ── CTA ── */
        .vc-cta {
          background: ${T.light};
          padding: 92px 0;
        }

        .vc-cta-box {
          border-radius: 38px;
          padding: clamp(30px, 5vw, 58px);
          background:
            linear-gradient(135deg, rgba(47,54,26,.94), rgba(97,114,78,.88)),
            url(${whyVaayuImg});
          background-size: cover;
          background-position: center;
          color: ${T.text};
          box-shadow: 0 30px 90px rgba(47,54,26,.2);
        }

        .vc-cta-box h2 {
          max-width: 820px;
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.1rem);
          line-height: 1.1;
          letter-spacing: -.035em;
          font-weight: 700;
        }

        .vc-cta-box p {
          max-width: 700px;
          color: ${T.muted};
          line-height: 1.75;
        }

        /* ── TRUST BAR ── */
      @media (max-width: 760px) {
  .vc-trust-bar {
    padding: 20px 0;
  }

  .vc-trust-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px 26px;
    align-items: start;
  }

  .vc-trust-item {
    position: relative;
    padding-left: 14px;
    color: #f3f4ea;
    font-size: 13px;
    line-height: 1.5;
    font-weight: 500;
    text-align: left;
    letter-spacing: 0.01em;
  }

  .vc-trust-item::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: rgba(230, 236, 214, 0.7);
  }

  .vc-trust-dot {
    display: none;
  }
}
  
        /* ── FOOTER ── */
        .vc-footer-tag {
          padding: 70px 20px;
          background: #f4f7f4;
        }

        .vc-footer-box {
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 26px;
          padding: 58px 28px;
          text-align: center;
          background: linear-gradient(145deg, ${T.green2}, ${T.deep});
          box-shadow: 0 20px 60px rgba(0,0,0,.08);
        }

        .vc-footer-box h3 {
          margin: 0;
          color: ${T.text};
          font-size: 28px;
          font-weight: 700;
        }

        .vc-footer-box p {
          margin: 12px auto 0;
          color: ${T.muted};
          max-width: 650px;
          line-height: 1.65;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .vc-treatment-grid { grid-template-columns: repeat(2, 1fr); }
          .vc-journey-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .vc-journey-grid::before { display: none; }
          .vc-why-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 1024px) {
          .vc-hero-layout,
          .vc-rehab-grid,
          .vc-compare-grid {
            grid-template-columns: 1fr;
          }

          .vc-about-section {
            grid-template-columns: 1fr;
          }

          .vc-about-image-col {
            min-height: 260px;
          }

          .vc-diag-layout {
            grid-template-columns: 1fr;
          }

          .vc-diag-image-col {
            height: 240px;
          }

          .vc-signal-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

       @media (max-width: 760px) {

  .vc-journey-grid {
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin-top: 28px;
  }

  .vc-journey-grid::before {
    display: none;
  }

  .vc-journey-step {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    padding: 0;
    text-align: left;
  }

  .vc-journey-num {
    width: 54px;
    height: 54px;
    min-width: 54px;
    border-radius: 50%;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 11px;
    font-weight: 800;

    margin: 0;
  }

  .vc-journey-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .vc-journey-label {
    margin: 0;
    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;
    color: #fff8ef;
  }

  .vc-journey-desc {
    margin: 6px 0 0;
    width: 100%;

    font-size: 14px;
    line-height: 1.7;
    color: #d7dec9;

    word-break: normal;
    overflow-wrap: break-word;
  }
}

        @media (max-width: 480px) {
          .vc-diag-core-grid { grid-template-columns: 1fr; }
          .vc-outcome-grid { grid-template-columns: 1fr; }
          .vc-outcome-item:nth-child(2n) { border-right: 1px solid rgba(97,114,78,.12); }
          .vc-outcome-item:nth-last-child(-n+2) { border-bottom: 1px solid rgba(97,114,78,.12); }
          .vc-outcome-item:last-child { border-bottom: none; }
        }
          .vc-hero-card {
  margin-top: 18px;
  padding: 18px;
  border-radius: 20px;
}

.vc-hero-card p {
  font-size: 13.8px;
  line-height: 1.72;
}

.vc-hero h1 {
  margin-top: 16px;
  font-size: clamp(2rem, 8vw, 2.7rem);
  line-height: 1.05;
}

.vc-stats-card {
  margin-top: -6px;
  padding: 20px;
  border-radius: 22px;
}

.vc-stats-card h3 {
  font-size: 1.05rem;
  line-height: 1.35;
}

.vc-stat-grid {
  grid-template-columns: 1fr 1fr;
}

.vc-stat {
  padding: 16px;
}

.vc-stat strong {
  font-size: 1.7rem;
}

.vc-section {
  padding: 52px 0;
}
@media (max-width: 760px) {
  .vc-hero-layout {
    padding-top: 32px !important;
    padding-bottom: 42px !important;
    gap: 24px !important;
  }

  .vc-hero {
    min-height: auto !important;
  }
}
@media (max-width: 760px) {
  .vc-rehab-grid {
    grid-template-columns: 1fr !important;
    gap: 22px;
  }

  .vc-premium-panel {
    padding: 26px 18px !important;
    border-radius: 26px !important;
    width: 100%;
    overflow: hidden;
  }

  .vc-premium-panel h2 {
    font-size: 2rem !important;
    line-height: 1.15 !important;
  }

  .vc-premium-panel p {
    font-size: 14px !important;
    line-height: 1.75 !important;
  }

  .vc-pill-grid {
    grid-template-columns: 1fr !important;
    gap: 10px;
  }

  .vc-clean-item,
  .vc-pill-box {
    font-size: 13.5px !important;
    line-height: 1.5 !important;
    padding: 14px 16px !important;
  }
}
  /* FINAL RESPONSIVE POLISH */

html,
body {
  overflow-x: hidden;
}

img {
  max-width: 100%;
}

.vc-wrap {
  width: min(92%, 1240px);
}

@media (max-width: 1024px) {
  .vc-hero-layout,
  .vc-rehab-grid,
  .vc-diag-layout,
  .vc-compare-grid,
  .vc-about-section {
    grid-template-columns: 1fr !important;
  }

  .vc-treatment-grid,
  .vc-why-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .vc-signal-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 760px) {
  .vc-wrap {
    width: min(90%, 430px);
  }

  .vc-section {
    padding: 56px 0 !important;
  }

  .vc-hero-layout {
    padding-top: 34px !important;
    padding-bottom: 44px !important;
    gap: 24px !important;
  }

  .vc-hero h1 {
    font-size: clamp(2rem, 8vw, 2.7rem) !important;
    line-height: 1.08 !important;
  }

  .vc-btn-row {
    flex-direction: column;
    align-items: stretch;
  }

  .vc-btn-primary,
  .vc-btn-secondary {
    width: 100%;
    text-align: center;
  }

  .vc-treatment-grid,
  .vc-why-grid,
  .vc-signal-grid,
  .vc-pill-grid,
  .vc-diag-core-grid,
  .vc-diag-secondary-list,
  .vc-outcome-grid {
    grid-template-columns: 1fr !important;
  }

  .vc-treatment-card,
  .vc-premium-panel,
  .vc-about-section,
  .vc-cta-box,
  .vc-faq-top {
    border-radius: 24px !important;
  }

  .vc-about-content-col {
    padding: 28px 20px !important;
  }

  .vc-section-title {
    margin-bottom: 34px !important;
  }

  .vc-section-title h2 {
    font-size: clamp(1.75rem, 7vw, 2.35rem) !important;
  }

  .vc-section-title p {
    font-size: 14px !important;
  }
}

@media (max-width: 390px) {
  .vc-wrap {
    width: 92%;
  }

  .vc-chip {
    font-size: 10.5px;
    letter-spacing: 0.08em;
  }

  .vc-hero h1 {
    font-size: 2rem !important;
  }

  .vc-stat-grid {
    grid-template-columns: 1fr !important;
  }
}
  @media (max-width: 760px) {

  .vc-mobile-book-popup {
  display: none;
}

@media (max-width: 760px) {
  .vc-mobile-book-popup {
    position: fixed;
    left: 14px;
    right: 14px;
    bottom: 16px;
    z-index: 9999;

    display: block;

    padding: 18px 16px 16px;
    border-radius: 24px;

    background: rgba(255, 252, 246, 0.96);
    border: 1px solid rgba(97, 114, 78, 0.14);

    box-shadow: 0 18px 44px rgba(47, 54, 26, 0.18);
    backdrop-filter: blur(14px);

    animation: vcPopupUp 0.35s ease;
  }

  @keyframes vcPopupUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .vc-mobile-popup-title {
    padding-right: 34px;
    margin-bottom: 13px;

    color: #2f3722;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 800;
  }

  .vc-mobile-book-btn {
    width: 100%;
    display: flex;
    justify-content: center;

    padding: 14px 18px;
    border-radius: 999px;

    background: #61724e;
    color: #fff;
    text-decoration: none;

    font-size: 14px;
    font-weight: 800;
  }
/* MOBILE POPUP */

.vc-mobile-popup {
  position: fixed;
  left: 14px;
  right: 14px;
  bottom: 14px;
  z-index: 9999;

  border-radius: 22px;

  background: linear-gradient(135deg, #58623b, #3f4723);

  box-shadow: 0 24px 60px rgba(0,0,0,.28);

  padding: 18px 18px 16px;

  border: 1px solid rgba(255,255,255,.08);

  backdrop-filter: blur(14px);

  overflow: visible; /* ADD THIS */
}

.vc-mobile-popup-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.vc-mobile-popup-small {
  margin: 0;
  font-size: 11px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.72);
}

.vc-mobile-popup h4 {
  margin: 4px 0 2px;
  color: #fff;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
}

.vc-mobile-popup span {
  color: rgba(255,255,255,.8);
  font-size: 12px;
}

.vc-mobile-popup-btn {
  flex-shrink: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 110px;
  height: 44px;

  border-radius: 999px;

  background: #ffffff;
  color: #3f4723;

  font-size: 13px;
  font-weight: 700;

  text-decoration: none;
}

.vc-mobile-popup-close {
  position: absolute;
  top: -10px;
  right: -10px;

 width: 10px;
height: 10px;

  font-size: 9px;

  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.15);

  background: #eef3e5;
  color: #3f4723;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 8px 20px rgba(0,0,0,.18);
}
@media (min-width: 761px) {
  .vc-mobile-popup {
    display: none;
  }
}
  .vc-mobile-popup-close {
  position: absolute;

  top: -6px;
  right: -6px;

  width: 14px;
  height: 14px;

  min-width: 14px;
  min-height: 14px;

  padding: 0;

  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12);

  background: #eef3e5;
  color: #3f4723;

  font-size: 6px;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 4px 10px rgba(0,0,0,.12);
}
      `}</style>

      {/* ── HERO ── */}
      <section className="vc-hero">
        <div className="vc-hero-bg">
          <img src={heroImg} alt="Advanced respiratory and sleep care at Vaayu Bengaluru" />
        </div>

        <div className="vc-wrap">
          <div className="vc-hero-layout">
            <motion.div {...fu()}>
              <Chip>Bengaluru's Advanced Respiratory, Sleep & Rehab Center</Chip>

              <h1>
                Breathe Better. <br />
                Recover Stronger. <br />
                <span>Live Beyond Symptoms.</span>
              </h1>

              <div className="vc-hero-card">
                <p>
                  <strong>
                    VAAYU is Bengaluru's only integrated outpatient respiratory care ecosystem —
                    combining pulmonology, sleep medicine, advanced diagnostics,
                    pulmonary rehabilitation, and allied wellness under one roof.
                  </strong>
                </p>
                <p style={{ marginTop: 12 }}>
                  We are not a clinic. We are not a hospital. We are the missing middle — advanced
                  specialist care built for patients with chronic, complex respiratory and sleep
                  conditions who need more than a prescription and a follow-up appointment.
                </p>
                <p style={{ marginTop: 12 }}>
                  Our model: Screening → Diagnosis → Intervention → Rehabilitation → Wellness → Long-term Follow-up.
                  Fully connected. Multidisciplinary. Built around your recovery.
                </p>

                <div className="vc-hero-tags">
                  {["Pulmonary Rehabilitation", "COPD Care", "ILD / Lung Fibrosis", "Sleep Apnea", "Severe Asthma", "Long COVID Recovery", "Bronchiectasis", "Breathlessness Clinic"].map(t => (
                    <span className="vc-hero-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 30 }}>
                <h3 style={{ color: "#fff8ef", fontSize: "clamp(1.2rem,2vw,1.7rem)", fontWeight: 650, letterSpacing: "-0.03em", marginBottom: 18, lineHeight: 1.2 }}>
                  Start with a structured respiratory care plan
                </h3>
                <div className="vc-btn-row">
                  <a href={EKA} target="_blank" rel="noreferrer" className="vc-btn-primary">Book a Consultation</a>
                  <a href="/contact" target="_blank" rel="noreferrer" className="vc-btn-secondary">Speak With Our Respiratory Team</a>
                </div>
              </div>
            </motion.div>

            <motion.div {...fu(0.12)} className="vc-stats-card">
              <h3>20+ years of expertise. One integrated respiratory care destination.</h3>
              <p>
                Nationally and internationally trained specialists. Advanced outpatient care
                built for chronic, complex respiratory and sleep disorders.
              </p>
              <div className="vc-stat-grid">
                {[
                  ["20K+", "Patients Supported"],
                  ["15K+", "Rehab Visits"],
                  ["2.5 Yrs", "Since Launch"],
                  ["360°", "Care Model"],
                ].map(([n, l]) => (
                  <div className="vc-stat" key={l}>
                    <strong>{n}</strong>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
     {/* ── TRUST BAR ── */}
<section
  className="vc-trust-bar"
  style={{
    background: "#58623b",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  }}
>
  <div
    className="vc-wrap"
    style={{
      padding: "22px 0",
    }}
  >
    <div
      className="vc-trust-inner"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "14px 28px",
      }}
    >
      {[
        "Pulmonology & Sleep Medicine",
        "In-House Sleep Lab",
        "Advanced Diagnostics On-Site",
        "Pulmonary Rehabilitation",
        "Same-Day Test Results",
        "Home Rehab Programs",
        "Second Opinion Consultations",
        "ENT · Psychology · Nutrition · Yoga",
      ].map((item, i) => (
        <div
          key={i}
          style={{
            color: "#f3f4ea",
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "999px",
              background: "rgba(230,236,214,0.7)",
              flexShrink: 0,
            }}
          />
          {item}
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ── ABOUT — redesigned layout ── */}
      <section className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap">
        <motion.div {...fu()} className="vc-about-section">

  {/* Left: Content column */}
  <div className="vc-about-content-col">
    <Chip dark>About VAAYU</Chip>

    <h2>
      Not a Clinic. Not a Hospital.
      <br />
      A Complete Respiratory Care Ecosystem.
    </h2>

    <p className="vc-about-lead">
      India's healthcare landscape has a vacuum. Large hospitals focus on acute inpatient care.
      Smaller clinics offer basic outpatient treatment. Neither delivers what chronic respiratory
      patients truly need — structured, long-term, multidisciplinary care with continuity.
    </p>

    <div className="vc-about-highlight">
      We call it the <strong>blockchain of healthcare</strong> — we follow patients through their
      entire disease course, prevent worsening, and ensure continuity even if they need a hospital admission.
    </div>

    <div className="vc-about-pillars-new">
      {aboutPillars.map((p) => (
        <div className="vc-pillar-new" key={p.title}>
          <div className="vc-pillar-icon">{p.icon}</div>

          <div className="vc-pillar-text-wrap">
            <div className="vc-pillar-title">{p.title}</div>
            <div className="vc-pillar-sub-new">{p.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Right: Image column */}
  <div className="about-vaayu-image-wrap">
    <img
      src={heroImg1}
      alt="About Vaayu"
      className="about-vaayu-image"
    />
  </div>

</motion.div>
        </div>
      </section>

      {/* ── DR RAVI MEHTA PHILOSOPHY ── */}
<section className="vc-section vc-philosophy-section">
  <div className="clinical-bg" />
  <div className="vc-wrap">
    <motion.div {...fu()} className="vc-philosophy-card">
      <div className="vc-philosophy-image">
        <img
          src={mehtaImg}
          alt="Dr Ravi Mehta Vaayu Chest and Sleep Specialists"
        />
      </div>

      <div className="vc-philosophy-content">
        <Chip dark>Dr Ravi Mehta — Philosophy</Chip>

        <h2>A Different Way of Thinking About Respiratory and Sleep Health</h2>

        <p>
          At the heart of VAAYU is a shift in thinking. Dr. Ravi Mehta believes
          that patients don’t fail treatment — treatment fails when it is
          fragmented, symptom-driven, and short-term.
        </p>

        <div className="vc-philosophy-quote">
          “Breathlessness, fatigue, and poor sleep are not isolated problems —
          they are signals of deeper imbalance.”
        </div>

        <p>Instead of focusing only on relief, VAAYU focuses on:</p>

        <div className="vc-philosophy-list">
          <div className="vc-philosophy-point">Understanding the root cause</div>
          <div className="vc-philosophy-point">Restoring function</div>
          <div className="vc-philosophy-point">Preventing recurrence</div>
          <div className="vc-philosophy-point">Building long-term stability</div>
        </div>

        <p>
          Care at VAAYU is designed not just to treat disease — but to restore
          how you breathe, sleep, and live.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* ── COMPARE ── */}
      <section className="vc-section vc-dark">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="The VAAYU Difference"
            title="Traditional Respiratory Care vs The VAAYU Model"
            text="Patients with chronic lung and sleep conditions deserve more than episodic, disconnected care. They need a partner."
            light
          />
          <div className="vc-compare-grid">
            <motion.div {...fu()} className="vc-compare-card traditional">
              <h3>Traditional Care</h3>
              <ul>
                <li>Clinic → Lab → Hospital: all disconnected</li>
                <li>Episodic, symptom-focused consultations</li>
                <li>Medications as the only tool</li>
                <li>Limited or no follow-up after treatment</li>
                <li>Rehabilitation handled elsewhere (if at all)</li>
                <li>Hospital-only escalation when things worsen</li>
                <li>No care coordination between providers</li>
              </ul>
            </motion.div>
            <motion.div {...fu(0.1)} className="vc-compare-card vaayu">
              <h3>VAAYU Model</h3>
              <ul>
                <li>Integrated continuum: diagnosis to recovery to prevention</li>
                <li>Long-term respiratory partnership, not one-time visits</li>
                <li>Medications + rehabilitation + wellness combined</li>
                <li>Structured long-term follow-up and disease monitoring</li>
                <li>In-house pulmonary rehabilitation — center, home and hybrid</li>
                <li>Focus on preventing hospitalization and reducing flare-ups</li>
                <li>All specialists coordinated under one clinical roof</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="Who We Help"
            title="Patients Who Need More Than Just Medication"
            text="VAAYU is for patients looking for structured, comprehensive answers — not temporary relief. If any of these describe you, we can help."
          />
          <div className="vc-signal-grid">
            {patientSignals.map((item, i) => (
              <motion.div {...fu(i * 0.035)} className="vc-signal-card" key={item.label}>
                <div className="vc-signal-label">{item.label}</div>
                <div className="vc-signal-sub">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="vc-section vc-dark">
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <SectionTitle
            chip="Conditions & Programs"
            title="Disease-Specific Programs for Complex Respiratory Conditions"
            text="Every program at VAAYU combines specialist consultation, advanced diagnostics, rehabilitation, and long-term monitoring — not just a diagnosis."
            light
          />
          <div className="vc-treatment-grid">
            {programs.map((program, i) => (
              <motion.div {...fu(i * 0.06)} className="vc-treatment-card" key={program.title}>
                <div className="vc-treatment-img">
                  <img src={program.image} alt={program.title + " at Vaayu Bengaluru"} />
                  <span className="vc-treatment-tag">{program.tag}</span>
                </div>
                <div className="vc-treatment-body">
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <div className="vc-treatment-symptoms">
                    {program.symptoms.map(s => <span className="vc-symptom-tag" key={s}>{s}</span>)}
                  </div>
                  <ul>
                    {program.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARE JOURNEY ── */}
      <section className="vc-section vc-dark" style={{ paddingTop: 8 }}>
        <div className="vc-wrap">
         <div className="vc-journey-heading">
  <SectionTitle
    chip="Your Care Pathway"
    title="How the VAAYU Care Journey Works"
    text="A connected, end-to-end respiratory care pathway — from your first visit to long-term recovery and disease management."
    light
  />
</div>
          <div className="vc-journey-grid">
            {journey.map((s, i) => (
              <motion.div {...fu(i * 0.07)} className="vc-journey-step" key={s.step}>
  <div className="vc-journey-num">{s.step}</div>

  <div className="vc-journey-content">
    <div className="vc-journey-label">
      {s.label}
    </div>

    <div className="vc-journey-desc">
      {s.desc}
    </div>
  </div>
</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REHAB ── */}
      <section className="vc-section vc-light">
        <div className="clinical-bg" />
        <div className="vc-wrap vc-rehab-grid">
          <motion.div {...fu()} className="vc-premium-panel">
            <Chip>Pulmonary Rehabilitation</Chip>
            <h2>Pulmonary Rehabilitation Beyond Exercise</h2>
            <p>
              Pulmonary rehabilitation is the most evidence-based, most underused tool in
              respiratory recovery — and it is VAAYU's single biggest clinical differentiator.
            </p>
            <p>
              Most respiratory centers in India stop at diagnosis and medication. At VAAYU,
              rehabilitation is a medically supervised, multidisciplinary recovery program
              designed to improve breathlessness, stamina, oxygen efficiency, sleep, mental
              health and quality of daily life.
            </p>
            <p>
              Over <strong style={{ color: T.text }}>15,000 rehabilitation visits</strong> completed
              in 2.5 years. Evidence-based, ATS/ERS-aligned, and tailored to your diagnosis.
            </p>
            <div className="vc-clean-list">
              <div className="vc-clean-item">Center-based pulmonary rehabilitation</div>
              <div className="vc-clean-item">Home-based pulmonary rehabilitation (Bengaluru)</div>
              <div className="vc-clean-item">Hybrid recovery programs</div>
            </div>
          </motion.div>

          <motion.div {...fu(0.1)} className="vc-premium-panel">
            <Chip>What Rehab Includes</Chip>
            <h2>Complete Recovery Support for Daily Life</h2>
            <p>
              VAAYU's rehabilitation is not just exercise training. It is a full recovery
              ecosystem — each element supported by clinical evidence.
            </p>
            <div className="vc-pill-grid">
              {rehabIncludes.map((item) => (
                <div className="vc-pill-box" key={item}>{item}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DIAGNOSTICS — redesigned ── */}
      <section className="vc-section vc-light" style={{ paddingTop: 0 }}>
        <div className="clinical-bg" />
        <div className="vc-wrap">
          <div className="vc-diag-layout">
            {/* Left: Image */}
            <motion.div {...fu()}>
              <div className="vc-diag-image-col">
                <img src={diagnosticsImg} alt="Advanced respiratory diagnostics at Vaayu Bengaluru" />
                <div className="vc-diag-image-badge">
                  Same-day results, specialist reviewed
                  <span>Most tests completed & interpreted on the same visit</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div {...fu(0.1)} className="vc-diag-content">
              <div className="vc-diag-intro">
                <Chip dark>Advanced Diagnostics</Chip>
                <h2>Hospital-Grade Lung Diagnostics in an Outpatient Setting</h2>
                <p>
                  Early and accurate diagnosis changes outcomes. VAAYU offers advanced respiratory
                  diagnostics with same-day specialist interpretation — no repeat visits needed.
                </p>
              </div>

              {/* Core tests — prominent 2×2 grid */}
              <div className="vc-diag-core-grid">
                {diagnosticsCore.map((item) => (
                  <div className="vc-diag-core-card" key={item.title}>
                    <div className="vc-diag-core-title">{item.title}</div>
                    <div className="vc-diag-core-text">{item.text}</div>
                  </div>
                ))}
              </div>

              {/* Secondary tests — compact list */}
              <div className="vc-diag-secondary-label">Additional Tests Available</div>
              <div className="vc-diag-secondary-list">
                {diagnosticsSecondary.map((item, idx) => (
                  <div
                    className={`vc-diag-secondary-item${idx === diagnosticsSecondary.length - 1 && diagnosticsSecondary.length % 2 !== 0 ? " full-width" : ""}`}
                    key={item.title}
                  >
                    <div className="vc-diag-secondary-inner">
                      <div className="vc-diag-secondary-title">{item.title}</div>
                      <div className="vc-diag-secondary-text">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
      {/* ── OUTCOMES ── */}
      <section
        className="vc-section vc-light"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(244,248,239,.70), rgba(244,248,239,.88)), url(${journeyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="vc-wrap">
          <SectionTitle
            chip="Outcomes"
            title="What Recovery at VAAYU Looks Like"
            text="The goal is not temporary symptom relief. The goal is better control, better stamina and better daily independence — measured, tracked and sustained."
          />
          <div className="vc-outcome-grid">
            {outcomes.map((item, i) => (
              <motion.div {...fu(i * 0.04)} className="vc-outcome-item" key={item.label}>
                <div className="vc-outcome-stat">{item.stat}</div>
                <div className="vc-outcome-label">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ marginTop: 80, marginBottom: 100 }}>
        <Testimonials />
      </div>

      <DoctorsAndTeam />

      {/* ── FAQ — categorised ── */}
      <section className="vc-section vc-faq-section">
        <div className="clinical-bg" />
        <div className="vc-wrap vc-faq-shell">
          <div className="vc-faq-top">
            <Chip>FAQ</Chip>
            <h2>Common Questions Patients Ask Before Coming to VAAYU</h2>
            <p style={{ color: T.muted, marginTop: 10, fontSize: 14, opacity: 0.85 }}>
              Browse by topic to find answers faster
            </p>

            {/* Category tabs */}
            <div className="vc-faq-tabs">
              {faqCategories.map((cat, i) => (
                <button
                  key={cat.label}
                  className={`vc-faq-tab${activeFaqCategory === i ? " active" : ""}`}
                  onClick={() => { setActiveFaqCategory(i); setOpenFaq(null); }}
                >
                  <span className="vc-faq-tab-icon">{cat.icon}</span>
                  {cat.label}
                  <span className="vc-faq-count">{cat.faqs.length}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="vc-faq-list">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaqCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                style={{ display: "grid", gap: 12 }}
              >
                {faqCategories[activeFaqCategory].faqs.map((item, i) => (
                  <div className="vc-faq-item" key={item.q}>
                    <button
                      className="vc-faq-q"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span>{openFaq === i ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.26 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="vc-faq-a">{item.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vc-cta">
        <div className="vc-wrap">
          <motion.div {...fu()} className="vc-cta-box">
            <h2>Don't Let Breathlessness Define Your Life</h2>
            <p>
              If breathing problems, chronic cough, fatigue, poor sleep or repeated respiratory
              flare-ups are limiting you — structured, integrated care at VAAYU can make a
              measurable difference.
            </p>
            <p>
              Early intervention, pulmonary rehabilitation and multidisciplinary lung and sleep
              care improve long-term outcomes, reduce hospitalizations and restore quality of life.
              Our team is here to build your recovery plan.
            </p>
            <div className="vc-btn-row" style={{ marginTop: 28 }}>
              <a href={EKA} target="_blank" rel="noreferrer" className="vc-btn-primary">
                Book Your Consultation
              </a>
              <a href={EKA} target="_blank" rel="noreferrer" className="vc-btn-secondary">
                Begin Your Recovery Journey
              </a>
            </div>
          </motion.div>
        </div>
      </section>

{/* MOBILE FLOATING BOOK POPUP */}
<AnimatePresence>
  {showMobilePopup && (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 120, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="vc-mobile-popup"
    >
      <button
        className="vc-mobile-popup-close"
        onClick={() => {
          setShowMobilePopup(false);
          setPopupClosed(true);
        }}
      >
        ✕
      </button>

      <div className="vc-mobile-popup-content">
        <div>
          <p className="vc-mobile-popup-small">
            Advanced Respiratory Care
          </p>

          <h4>Book Appointment</h4>

          <span>VAAYU Chest & Sleep Center</span>
        </div>

        <a
          href={EKA}
          target="_blank"
          rel="noopener noreferrer"
          className="vc-mobile-popup-btn"
        >
          Book Now
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* ── FOOTER ── */}
      <section className="vc-footer-tag">
        <footer className="vc-footer-box">
          <h3>VAAYU Chest & Sleep Specialty Center — Bengaluru</h3>
          <p>
            Bengaluru's integrated outpatient respiratory care ecosystem. Because how you breathe and how you sleep defines how you live.
          </p>
          <p style={{ marginTop: 10, fontSize: 13, opacity: 0.7 }}>
            Open Mon–Sat · 8:30 AM – 7:30 PM · Pulmonology · Sleep Medicine · Pulmonary Rehabilitation · Diagnostics
          </p>
        </footer>
      </section>


    </main>
  );
}