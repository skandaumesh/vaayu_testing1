import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import HeroImage from "../assets/img/a1.jpg";
import WhatIsPRImage from "../assets/img/a2.jpg";
import GoalImage from "../assets/img/a3.jpg";
import benefitBg from "../assets/img/cta-bg.jpg";

import RehabEvent1 from "../assets/img/rehab event/C6337T01.JPG";
import RehabEvent2 from "../assets/img/rehab event/C6535T01.JPG";
import RehabEvent3 from "../assets/img/rehab event/C6527T01.JPG";
import RehabEvent4 from "../assets/img/rehab event/C6501T01.JPG";
import RehabEvent5 from "../assets/img/rehab event/C6467T01.JPG";
import RehabEvent6 from "../assets/img/rehab event/C6465T01.JPG";
import RehabEvent7 from "../assets/img/rehab event/C6386T01.JPG";
import RehabEvent8 from "../assets/img/rehab event/C6440T01.JPG";
import RehabEvent9 from "../assets/img/rehab event/C6358T01.JPG";
import RehabEvent10 from "../assets/img/rehab event/C6357T01.JPG";
import RehabEvent11 from "../assets/img/rehab event/C6403T01.JPG";
import RehabEvent12 from "../assets/img/rehab event/C6504T01.JPG";
import RehabEvent13 from "../assets/img/rehab event/C6475T01.JPG";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rehabEventPhotos = [
  { src: RehabEvent1, alt: "Rehab 2.0 event photo 1" },
  { src: RehabEvent2, alt: "Rehab 2.0 event photo 2" },
  { src: RehabEvent3, alt: "Rehab 2.0 event photo 3" },
  { src: RehabEvent4, alt: "Rehab 2.0 event photo 4" },
  { src: RehabEvent5, alt: "Rehab 2.0 event photo 5" },
  { src: RehabEvent6, alt: "Rehab 2.0 event photo 6" },
  { src: RehabEvent7, alt: "Rehab 2.0 event photo 7" },
  { src: RehabEvent8, alt: "Rehab 2.0 event photo 8" },
  { src: RehabEvent9, alt: "Rehab 2.0 event photo 9" },
  { src: RehabEvent10, alt: "Rehab 2.0 event photo 10" },
  { src: RehabEvent11, alt: "Rehab 2.0 event photo 11" },
  { src: RehabEvent12, alt: "Rehab 2.0 event photo 12" },
  { src: RehabEvent13, alt: "Rehab 2.0 event photo 13" },
];

const programHighlights = [
  {
    title: "Comprehensive Care",
    description:
      "Holistic approach with exercise training, education, nutrition, and psychosocial support.",
  },
  {
    title: "Evidence-Based Benefits",
    description:
      "Proven to reduce symptoms, improve exercise tolerance, and enhance quality of life.",
  },
  {
    title: "Expert Guidance",
    description:
      "Guidance from experienced healthcare professionals every step of the way.",
  },
  {
    title: "Tailored Exercise Plans",
    description:
      "Personalized routines based on your fitness level and health goals.",
  },
  {
    title: "Education",
    description:
      "Understanding your condition and learning symptom management strategies.",
  },
  {
    title: "Nutrition Support",
    description:
      "Nutrition guidance for lung health and disease management.",
  },
  {
    title: "Respiratory Therapist Support",
    description:
      "Hands-on guidance from expert respiratory therapists.",
  },
  {
    title: "Supportive Community",
    description:
      "Connect with others who understand and support your journey.",
  },
  {
    title: "Cost-Effective",
    description:
      "Helps reduce hospital stays and healthcare expenses.",
  },
];

const referrals = [
  {
    title: "Pulmonologists",
    icon: "🫁",
    desc: "Specialists referring patients with advanced lung conditions.",
  },
  {
    title: "General Physicians",
    icon: "🩺",
    desc: "Primary care providers who identify early respiratory symptoms.",
  },
  {
    title: "Cardio-Thoracic Surgeons",
    icon: "❤️‍🩹",
    desc: "Referrals post-surgery for integrated lung-heart recovery.",
  },
  {
    title: "Healthcare Professionals",
    icon: "👩‍⚕️",
    desc: "Allied providers supporting chronic care management.",
  },
  {
    title: "Self-referrals",
    icon: "🧍‍♂️",
    desc: "Individuals taking proactive steps toward better lung health.",
  },
];

const deliveryModes = [
  {
    title: "In-person",
    description:
      "Attend regular sessions at our center, supervised by a multidisciplinary team for consistent progress.",
    icon: "🏥",
  },
  {
    title: "Combined Rehab",
    description:
      "Integrated rehab for patients with both cardiac and pulmonary issues, combining strength and respiratory recovery.",
    icon: "🫀",
  },
  {
    title: "Hybrid Model",
    description:
      "Blends in-clinic visits with telehealth check-ins for flexibility and personalized care.",
    icon: "💻",
  },
  {
    title: "Custom Pathways",
    description:
      "We tailor delivery to patient-specific needs, ensuring accessibility and continuity of care.",
    icon: "📋",
  },
];

const aims = [
  "Improve exercise tolerance",
  "Reduce respiratory symptoms",
  "Improve ability to perform daily activities",
  "Improve quality of life",
  "Improve adherence to recommended treatments",
  "Reduce hospitalizations",
  "Improve survival rate",
];

const PulmonaryRehab = () => (
  <div className="max-w-full overflow-x-hidden pt-[92px] sm:pt-[110px] lg:pt-0">
    <Helmet>
<title>Pulmonary Rehabilitation in Bengaluru | Vaayu Chest & Sleep Specialists</title>      <meta
        name="description"
        content="Expert pulmonary rehabilitation in Bengaluru for asthma, COPD, ILD, post-COVID lung recovery, breathing exercises, endurance training, and specialist-guided rehab care."
      />
      <link rel="canonical" href="https://vaayuchest.com/pulmonary-rehab/pulmonary" />

      <meta
        property="og:title"
        content="Pulmonary Rehabilitation in Bengaluru | Vaayu"
      />
      <meta
        property="og:description"
        content="Specialist pulmonary rehabilitation in Bengaluru to improve breathing, endurance, and quality of life."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://vaayuchest.com/pulmonary-rehab/pulmonary"
      />
      <meta property="og:image" content="https://vaayuchest.com/og-image.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Pulmonary Rehabilitation in Bengaluru | Vaayu"
      />
      <meta
        name="twitter:description"
        content="Comprehensive pulmonary rehabilitation for chronic lung conditions and breathing recovery in Bengaluru."
      />
      <meta name="twitter:image" content="https://vaayuchest.com/og-image.jpg" />
    </Helmet>

    {/* Hero Section */}
    <section
      className="w-full min-h-[52vh] sm:min-h-[68vh] lg:min-h-[76vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4 pt-6 sm:pt-10 lg:pt-14 pb-8 sm:pb-14"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="bg-white/90 text-[#3f472e] p-4 sm:p-8 rounded-xl text-center w-full max-w-[92%] sm:max-w-3xl mx-auto shadow-md">
        <motion.h1
          className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Pulmonary Rehabilitation
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          A comprehensive approach to breathing better, improving lung health,
          and living stronger — guided by leading pulmonary rehab specialists in
          Bengaluru.
        </motion.p>
      </div>
    </section>

    {/* What is Pulmonary Rehabilitation */}
    <section className="grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 md:px-16 py-12 sm:py-20 max-w-7xl mx-auto">
      <motion.img
        src={WhatIsPRImage}
        alt="What is Pulmonary Rehabilitation"
        className="rounded-xl shadow-lg w-full h-[260px] sm:h-[400px] object-cover"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        loading="lazy"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5B6641] mb-4">
          What is Pulmonary Rehabilitation?
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Pulmonary rehabilitation is a specialized lung recovery program
          designed to improve lung function, reduce breathlessness, and enhance
          overall well-being. It is recommended for patients with conditions
          like{" "}
          <Link
            to="/specialty-clinic/asthma"
            className="text-[#5B6641] font-semibold underline"
          >
            asthma
          </Link>
          ,{" "}
          <Link
            to="/specialty-clinic/copd"
            className="text-[#5B6641] font-semibold underline"
          >
            COPD
          </Link>
          ,{" "}
          <Link
            to="/specialty-clinic/ild"
            className="text-[#5B6641] font-semibold underline"
          >
            ILD
          </Link>
          , and post-COVID lung damage.
        </p>

        <p className="text-gray-700 leading-relaxed">
          At Vaayu Pulmonary Rehab, our multidisciplinary team of lung
          specialists, respiratory therapists, and nutrition experts guide you
          through a customized recovery plan. Many patients also benefit from{" "}
          <Link to="/sleep-clinic" className="text-[#5B6641] font-semibold underline">
            sleep evaluation
          </Link>{" "}
          and{" "}
          <Link
            to="/rehab-wellness/stress-management"
            className="text-[#5B6641] font-semibold underline"
          >
            stress management
          </Link>{" "}
          when breathing problems affect rest, stamina, and confidence.
        </p>
      </motion.div>
    </section>

    {/* Rehab 2.0 Event Gallery */}
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-6 md:px-16">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
      >
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#5B6641] font-semibold mb-3">
            Photo Gallery
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#3f472e] mb-4">
            Rehab 2.0
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Highlights from the <strong>Rehab 2.0 event conducted on 8th March</strong>,
            showcasing participation, engagement, and Vaayu’s continued
            commitment to pulmonary and cardiac rehabilitation.
          </p>
        </div>

        <motion.div
          className="mb-6 overflow-hidden rounded-3xl shadow-lg relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={rehabEventPhotos[0].src}
            alt={rehabEventPhotos[0].alt}
            className="w-full h-[260px] md:h-[500px] object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
            <div className="p-4 sm:p-6 md:p-8">
              <p className="text-white/80 uppercase tracking-widest text-xs mb-2">
                Rehab 2.0 Event
              </p>
              <h3 className="text-white text-xl md:text-4xl font-bold">
                Vaayu Pulmonary Rehab
              </h3>
              <p className="text-white/90 mt-2 text-sm md:text-base">
                Conducted on 8th March
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rehabEventPhotos.slice(1).map((photo, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-md"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-[150px] md:h-[220px] object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Aim Section */}
    <section className="bg-[#F4F4F4] py-12 sm:py-20 px-4 sm:px-6 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Aim</h2>
          <p className="text-gray-600 mb-6">
            The primary goals of pulmonary rehabilitation in people with chronic
            lung disease are to:
          </p>

          <ul className="space-y-4">
            {aims.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.img
          src={GoalImage}
          alt="Pulmonary Rehab Goals"
          className="rounded-xl shadow-lg w-full h-[260px] sm:h-[400px] object-cover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          loading="lazy"
        />
      </motion.div>
    </section>

    {/* Program Highlights */}
    <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-16 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5B6641] mb-8 text-center">
          Program Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {programHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#F9F9F9] border-l-4 border-[#5B6641] p-6 rounded-xl shadow hover:shadow-md transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h4 className="font-semibold text-lg text-[#5B6641] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Who Can Benefit & Referrals */}
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-20 px-4 sm:px-6 md:px-16"
      style={{ backgroundImage: `url(${benefitBg})` }}
    >
      <div className="absolute inset-0 bg-[#556B2F]/90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-white uppercase">
            Who Can Benefit?
          </h3>

          <p className="text-white text-base leading-relaxed">
            Individuals with chronic lung diseases such as{" "}
            <strong>Asthma, COPD, ILD, Post COVID fibrosis, and Pulmonary Hypertension</strong>{" "}
            can benefit from structured pulmonary rehabilitation.
          </p>

          <p className="text-white text-base leading-relaxed">
            Whether you're managing a stable condition or recovering from an
            exacerbation, our program is designed to support your journey with
            care and compassion.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/specialty-clinic/asthma"
              className="px-4 py-2 rounded-full bg-white text-[#556B2F] font-medium text-sm hover:bg-[#EEF5E5] transition"
            >
              Asthma Clinic
            </Link>
            <Link
              to="/specialty-clinic/copd"
              className="px-4 py-2 rounded-full bg-white text-[#556B2F] font-medium text-sm hover:bg-[#EEF5E5] transition"
            >
              COPD Clinic
            </Link>
            <Link
              to="/specialty-clinic/ild"
              className="px-4 py-2 rounded-full bg-white text-[#556B2F] font-medium text-sm hover:bg-[#EEF5E5] transition"
            >
              ILD Clinic
            </Link>
          </div>

          <a
            href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#556B2F] text-white px-4 py-2 rounded mt-2 hover:bg-[#465726] transition">
              BOOK AN APPOINTMENT
            </button>
          </a>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {referrals.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#5B6641] text-white rounded-full flex items-center justify-center text-xl font-bold shadow shrink-0">
                {item.icon}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-white">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Delivery of Program */}
    <section className="bg-[#F9FAFB] py-12 sm:py-20 px-4 sm:px-6 md:px-16">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-[#5B6641] mb-12">
          How We Deliver Our Program
        </h3>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {deliveryModes.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left flex flex-col items-start"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-[#445c1f] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Statistics */}
    <section className="bg-[#DFF0D8] py-12 sm:py-20 px-4 sm:px-6 md:px-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-bold text-[#5B6641] mb-6">
          What Do the Numbers Say?
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-5xl font-bold text-[#5B6641] mb-2">2/3</p>
            <p className="text-gray-700">
              patients report positive outcomes after participating in pulmonary
              rehabilitation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-5xl font-bold text-[#5B6641] mb-2">90%+</p>
            <p className="text-gray-700">
              experience fewer hospital days after completing rehabilitation.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Related Care / Backlinks */}
    <section className="px-4 sm:px-6 md:px-16 py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto bg-[#F7FAF3] border border-[#dfe7d9] rounded-xl p-5 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5B6641] mb-3">
          Related Care at Vaayu
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Explore related services for breathing issues, chronic lung disease,
          sleep-related symptoms, and long-term respiratory recovery.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Link
            to="/specialty-clinic/asthma"
            className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition text-sm sm:text-base"
          >
            Asthma Clinic
          </Link>
          <Link
            to="/specialty-clinic/copd"
            className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition text-sm sm:text-base"
          >
            COPD Clinic
          </Link>
          <Link
            to="/specialty-clinic/ild"
            className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition text-sm sm:text-base"
          >
            ILD Clinic
          </Link>
          <Link
            to="/sleep-clinic"
            className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition text-sm sm:text-base"
          >
            Sleep Clinic
          </Link>
          <Link
            to="/rehab-wellness/stress-management"
            className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition text-sm sm:text-base"
          >
            Stress Management
          </Link>
          <Link
            to="/allergy-immunology/allergy-testing"
            className="px-4 py-2 rounded-full bg-white border border-[#cfdac7] text-[#556B2F] font-medium hover:bg-[#EEF5E5] transition text-sm sm:text-base"
          >
            Allergy Testing
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default PulmonaryRehab;