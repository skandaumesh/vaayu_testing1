// src/pages/AboutUs.jsx
import { Link } from "react-router-dom";
import React from "react";
import { FaStethoscope, FaHospitalUser } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import pic1 from "../assets/img/banner31.jpg";
import pic2 from "../assets/img/m.jpg";
import cc from "../assets/img/cc.jpg";
import aa from "../assets/img/aa.jpg";
import bb from "../assets/img/bb.jpg";
import ee from "../assets/img/ee.jpg";
import hh from "../assets/img/hh.jpg";
import doctorImage from "../assets/img/doctor.png";
import a11 from "../assets/img/anjali.jpg";
import a3 from "../assets/img/PRERANA ABHISHEKI.jpeg";
import a99 from "../assets/img/IMG-20250617-WA0005.jpg";
import ajithaImg from "../assets/img/doctors/Dr Ajitha Tavvala.jpeg";
import nandiniImg from "../assets/img/doctors/nandini naidu.JPG";
import a18 from "../assets/img/a18.png";
import rasheekaImg from "../assets/img/doctors/Rasheeka.jpg";
import yu from "../assets/img/yu.jpg";
import naturo from "../assets/img/focused-young-indian-man-meditating-lotus-pose (1).jpg";

import opdImg from "../assets/img/Pearly Penile Papules Removal Price_ A Comparison of Treatment Options (1).jpg";
import pmImg from "../assets/img/Breathe Easy Again_ How Lung Transplants Can Give a Second Chance at Life.jpg";
import aImg from "../assets/img/a1.jpg";
import sleepImg from "../assets/img/SLEEP.jpg";
import allergyImg from "../assets/img/skin-allergy-person-s-arm.jpg";
import amImg from "../assets/img/healthchecks-packages.png";
import nursingImg from "../assets/img/tb-hero.jpg";
import tobaccoImg from "../assets/img/tobacco-cta.png";

const AboutUs = () => {
  const stats = [
  ];

  const services = [
    {
      image: opdImg,
      title: "General Respiratory Center",
      path: "/general-opd",
      desc: "Care for common respiratory concerns such as cough, breathlessness, chest discomfort, wheezing, infections, and routine lung health needs.",
    },
    {
      image: pmImg,
      title: "Specialty Respiratory Center",
      path: "/specialty-clinic",
      desc: "Specialised care for chronic and complex lung conditions including Asthma, COPD, ILD, Sarcoidosis, and Pulmonary Hypertension.",
    },
    {
      image: aImg,
      title: "Rehabilitation Services",
      path: "/rehab-wellness",
      desc: "Pulmonary, cardiac, integrated cardio-pulmonary, and cancer rehabilitation programs focused on recovery, strength, and better quality of life.",
    },
    {
      image: yu,
      title: "Occupational Therapy & Pain Management",
      path: "/rehab-wellness/therapy",
      desc: "Supportive therapy programs for mobility, pain relief, daily function, posture, and long-term recovery needs.",
    },
    {
      image: naturo,
      title: "Wellness & Naturopathy",
      path: "/rehab-wellness/wellness",
      desc: "Holistic wellness support including sleep wellness, allergy management, weight management, stress management, and clinical yoga.",
    },
    {
      image: sleepImg,
      title: "Comprehensive Sleep Center",
      path: "/sleep-clinic",
      desc: "Diagnosis and treatment of sleep concerns such as snoring, obstructive sleep apnea, insomnia, and parasomnias.",
    },
    {
      image: allergyImg,
      title: "Allergy and Immunology Center",
      path: "/allergy-immunology",
      desc: "Complete allergy care including allergy testing, immunotherapy, and long-term management for respiratory and immune-related allergies.",
    },
    {
      image: amImg,
      title: "Allied Services",
      path: "/allied-services",
      desc: "Integrated support services including ENT, Pediatric Pulmonology, Clinical Psychology, Diet and Nutrition, and Weight Management.",
    },
    {
      image: nursingImg,
      title: "Home Care Services",
      path: "/home-care",
      desc: "Home-based support including nursing, home testing, rehabilitation, medication delivery, injections, and antibiotics.",
    },
    {
      image: tobaccoImg,
      title: "Preventive Respiratory Center",
      path: "/preventive-clinics",
      desc: "Preventive programs including tobacco cessation, respiratory health checks, vaccination awareness, and early risk screening.",
    },
  ];

  const team = [
    { image: cc, name: "Dr. Ravindra Mehta", title: "Director, Vaayu Chest & Sleep Specialists" },
    { image: aa, name: "Dr. Sameer Bansal", title: "Consultant Pulmonologist & Clinical Head" },
    { image: bb, name: "Dr. Hariprasad", title: "Consultant Pulmonologist" },
    { image: ee, name: "Dr. Suneela H Nayak", title: "Allergy & Pediatric Pulmonology" },
    { image: hh, name: "Dr. Yogita Hathmode", title: "Head, Pulmonary Wellness & Rehabilitation" },
    { image: a11, name: "Dr. Aneesha", title: "Pulmonologist" },
    { image: a3, name: "Dr.Prerana Abhisheki", title: "Specialists in Cardio Pulmonary Rehabilitation" },
    { image: a99, name: "Dr. Sagar T V", title: "Specialist - Pulmonary Rehabilitation" },
    { image: ajithaImg, name: "Dr. Ajitha Tavvala ", title: "Otorhinolaryngologist (ENT specialist)" },
    { image: nandiniImg, name: "Dr. Nandini G", title: "Clinical Psychologist" },
    { image: a18, name: "Dr. Abhishek L", title: "Physiotherapist" },
    { image: rasheekaImg, name: "Dr. Rasheeka VP", title: "Pulmonologist" },
  ];

  return (
    <div className="font-sans bg-[#F4F5EC] text-[#3F4723] overflow-x-hidden">
      <Helmet>
        <title>About Us | Vaayu Chest & Sleep Specialists Bengaluru</title>
        <meta
          name="description"
          content="Vaayu Chest & Sleep Specialists in Bengaluru offers expert care in pulmonology, sleep medicine, asthma, COPD, ILD, allergy care, ENT, and rehabilitation services."
        />
        <meta
          name="keywords"
          content="Vaayu Chest & Sleep Specialists, pulmonologist in Bengaluru, sleep clinic Bengaluru, asthma specialist Bengaluru, COPD treatment Bengaluru, ILD clinic Bengaluru, allergy testing Bengaluru, ENT services, pulmonary rehabilitation Bengaluru"
        />
        <meta name="author" content="Vaayu Chest & Sleep Specialists" />
        <meta property="og:title" content="About Us | Vaayu Chest & Sleep Specialists Bengaluru" />
        <meta
          property="og:description"
          content="Expert pulmonology and sleep disorder care in Bengaluru with 50+ years of experience. Specialising in asthma, COPD, ILD, allergy, ENT, and rehabilitation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaayuchest.com/about" />
        <meta property="og:image" content="https://vaayuchest.com/og-image.jpg" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <link rel="canonical" href="https://vaayuchest.com/about" />
      </Helmet>

      {/* HERO / ABOUT INTRO */}
<section className="px-5 sm:px-6 md:px-20 pt-16 sm:pt-20 md:pt-16 pb-14 md:pb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">        {/* ✅ Text first on mobile, right side on desktop */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <p className="text-sm text-[#5B6641] uppercase tracking-[0.18em] font-semibold">
            About Us
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 leading-tight text-[#3F4723]">
            Trusted Care,
            <br className="hidden sm:block" /> Proven Expertise
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
            At Vaayu, we believe in delivering healthcare that you can trust. With
            a team of highly qualified physicians and medical specialists, we are
            committed to providing comprehensive, evidence-based care that leads
            to real, measurable outcomes.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#dfe6d4] rounded-2xl p-5 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-[#5B6641]">{s.value}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Image second on mobile, left side on desktop */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
  src={pic2}
  alt="Vaayu clinical team"
  className="w-full h-auto rounded-none shadow-xl object-contain"
/>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="px-5 sm:px-6 md:px-20 py-16 bg-[#E6EAD2]">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white/40">
          <div className="w-full md:w-1/4 bg-[#5B6641] p-6 md:p-8 flex flex-row md:flex-col justify-around md:justify-center items-center md:items-start gap-4 md:gap-8 text-center md:text-left">
            <span className="text-white text-base md:text-xl font-bold uppercase">Mission</span>
            <span className="text-white text-base md:text-xl font-bold uppercase">Vision</span>
            <span className="text-white text-base md:text-xl font-bold uppercase">Values</span>
          </div>

          <div className="flex-1 p-6 md:p-10 space-y-9">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#7C946C]/50 rounded-full flex items-center justify-center">
                <FaHospitalUser className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-[#3F4723]">
                  Our Mission
                </h4>
                <p className="text-gray-700 mt-1 text-sm md:text-base leading-relaxed">
                  To deliver compassionate, evidence-based respiratory and sleep care
                  that empowers every patient to breathe easier and live healthier lives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#7C946C]/30 rounded-full flex items-center justify-center">
                <MdOutlineHealthAndSafety className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-[#3F4723]">
                  Our Vision
                </h4>
                <p className="text-gray-700 mt-1 text-sm md:text-base leading-relaxed">
                  To be the global leader in holistic respiratory and sleep wellness,
                  pioneering innovations that enhance patient outcomes worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#7C946C]/20 rounded-full flex items-center justify-center">
                <FaStethoscope className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-[#5B6641]">
                  Our Values
                </h4>
                <p className="text-gray-700 mt-1 text-sm md:text-base leading-relaxed">
                  Integrity, innovation, and empathy guide every aspect of our care,
                  ensuring trust and excellence in all we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        className="px-5 sm:px-6 md:px-20 py-20 md:py-24 text-center bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/BANNER2.jpg')" }}
      >
        <div className="bg-black/50 p-6 md:p-8 rounded-3xl max-w-4xl mx-auto backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-[#ffeb99]">Vaayu Respiratory & Sleep Care</span>
          </h2>
          <p className="max-w-3xl mx-auto text-white leading-relaxed">
            Our mission is to help you live a healthier, happier life by connecting
            you with comprehensive, preventive, and evidence-based care for your
            respiratory and sleep health needs.
          </p>
        </div>
      </section>
{/* WHY VAAYU */}
<section className="bg-[#F4F5EC] px-5 sm:px-6 md:px-20 py-16 md:py-20">
  <div className="text-center mb-12">
    <span className="inline-block bg-[#5B6641] text-white uppercase text-xs px-4 py-2 rounded-full tracking-[0.14em]">
      Why Vaayu
    </span>

    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#3F4723] leading-tight">
      More Than a Clinic.
      <br />
      A Complete Respiratory Care Ecosystem.
    </h2>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
      Vaayu combines advanced respiratory medicine, pulmonary rehabilitation,
      sleep care, diagnostics, wellness, and long-term recovery under one
      coordinated system of care.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        num: "01",
        title: "True Continuum of Care",
        text: "Screening → Diagnosis → Treatment → Rehabilitation → Wellness → Long-term follow-up.",
      },
      {
        num: "02",
        title: "Advanced Outpatient Model",
        text: "Hospital-grade respiratory care designed to reduce admissions and improve recovery.",
      },
      {
        num: "03",
        title: "Pulmonary Rehabilitation Experts",
        text: "One of India’s strongest pulmonary rehabilitation ecosystems with structured recovery pathways.",
      },
      {
        num: "04",
        title: "Integrated Multidisciplinary Team",
        text: "Pulmonology, ENT, sleep medicine, psychology, physiotherapy, nutrition and wellness together.",
      },
      {
        num: "05",
        title: "Integrated Sleep & Respiratory Care",
        text: "In-house sleep lab with coordinated care for sleep apnea, snoring and complex sleep disorders.",
      },
      {
        num: "06",
        title: "Same-Day Diagnostics",
        text: "Most advanced respiratory investigations reviewed during the same visit.",
      },
      {
        num: "07",
        title: "20+ Years of Expertise",
        text: "Experienced specialists with national and international respiratory training.",
      },
      {
        num: "08",
        title: "Long-Term Recovery Focus",
        text: "Structured programs designed for stability, endurance, prevention and quality of life.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        viewport={{ once: true }}
        className="bg-white border border-[#dfe6d4] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#5B6641] text-white flex items-center justify-center font-bold text-sm mb-5">
          {item.num}
        </div>

        <h3 className="text-lg font-semibold text-[#3F4723] leading-snug">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {item.text}
        </p>
      </motion.div>
    ))}
  </div>
</section>
      {/* Services */}
      <section className="px-5 sm:px-6 md:px-20 py-16 bg-[#F4F5EC]">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#5B6641] text-white uppercase text-xs px-4 py-2 rounded-full">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#3F4723]">
            Explore Our Respiratory & Sleep Care Services
          </h2>
          <p className="text-gray-600 mt-3">
            Designed for comprehensive respiratory and sleep health support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to={svc.path} className="block h-full no-underline">
                <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition h-full group border border-[#e2e8d8]">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-44 object-cover rounded-xl mb-4"
                  />

                  <h3 className="text-xl font-semibold text-[#3F4723] group-hover:text-[#5B6641]">
                    {svc.title}
                  </h3>

                  <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                    {svc.desc}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[#5B6641]">
                    Explore Service →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F9FAF5] px-5 sm:px-6 md:px-20 py-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Experienced and <span className="text-[#5B6641]">Skilled Team</span> of Experts
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {team.map((doc, i) => {
            const isRavindra = doc.name === "Dr. Ravindra Mehta";
            const isSameer = doc.name === "Dr. Sameer Bansal";
            const isAjitha = doc.name.trim() === "Dr. Ajitha Tavvala";
            const isNandini = doc.name.trim() === "Dr. Nandini G";
const isRasheeka = doc.name.trim() === "Dr. Rasheeka VP";
            const Card = (
              <div className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition cursor-pointer h-full border border-[#e2e8d8]">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h4 className="font-semibold text-lg">{doc.name}</h4>
                <p className="text-sm text-[#5B6641] mt-1">{doc.title}</p>

               {(isRavindra || isSameer || isAjitha || isNandini || isRasheeka) && (
  <p className="mt-3 text-xs text-gray-500">View Profile →</p>
)}
              </div>
            );

            return (
              <div key={i}>
                {isRavindra ? (
                  <Link to="/doctors/dr-ravindra-mehta" aria-label="View Dr. Ravindra Mehta profile">
                    {Card}
                  </Link>
                ) : isSameer ? (
                  <Link to="/doctors/dr-sameer-bansal" aria-label="View Dr. Sameer Bansal profile">
                    {Card}
                  </Link>
            
                ) : isAjitha ? (
                  <Link to="/doctors/dr-ajitha" aria-label="View Dr. Ajitha profile">
                    {Card}
                  </Link>
               ) : isNandini ? (
  <Link to="/doctors/nandini-g" aria-label="View Nandini G profile">
    {Card}
  </Link>
) : isRasheeka ? (
  <Link to="/doctors/dr-rasheeka-vp" aria-label="View Dr. Rasheeka VP profile">
    {Card}
  </Link>
) : (
  Card
)}
             
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Pick Us */}
      <section className="bg-white px-5 sm:px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              Why Pick Us for Your Health Care
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <FaStethoscope className="text-[#5B6641] mt-1" size={24} />
                <div>
                  <h5 className="font-semibold">Comprehensive Services</h5>
                  <p className="text-sm text-gray-700">
                    From OPD to telehealth and rehab, all under one roof.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MdOutlineHealthAndSafety className="text-[#5B6641] mt-1" size={24} />
                <div>
                  <h5 className="font-semibold">Preventive & Evidence-Based</h5>
                  <p className="text-sm text-gray-700">
                    We lead with data-driven protocols for long-term health.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaHospitalUser className="text-[#5B6641] mt-1" size={24} />
                <div>
                  <h5 className="font-semibold">Patient-Centric Model</h5>
                  <p className="text-sm text-gray-700">
                    You are at the center of every decision we make.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
           <div className="w-full shadow-xl rounded-[22px] bg-white overflow-hidden">
  <img
    src={pic1}
    alt="Vaayu team"
    className="w-full h-auto block object-cover"
  />
</div>
            <div className="absolute top-4 left-4 bg-[#5B6641] text-white px-4 py-3 rounded-2xl shadow-md">
              <p className="font-bold text-xl">50+</p>
              <p className="text-sm">Years of Combined Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;