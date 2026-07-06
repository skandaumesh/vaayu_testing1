import React, { useState } from "react";
import opdImage from "../assets/img/OPD.jpg";
import entImage from "../assets/img/DeWatermark.ai_1753859308812.jpeg"; // Adjust the path if needed
import entImage1 from "../assets/img/parasomnia-hero.png"; // Adjust the path if needed
import entImage2 from "../assets/img/rehab.jpg"; // Adjust the path if needed
import entImage3 from "../assets/img/wmremove-transformed.png"; // Adjust the path if needed
const categories = [
  "general-respiratory-opd",
  "Specialty Clinics",
  "Comprehensive Sleep Clinic",
  "Rehabilitation services",
  "Diagnostic",
];

const departmentContent = {
  "general-respiratory-opd": {
    title: "General OPD",
    image: opdImage,
    link: "./general-opd",
    paragraphs: [
      "Our General OPD is designed to diagnose and treat a wide range of lung diseases and respiratory conditions, such as chronic cough, asthma, and breathlessness.",
      "With advanced equipment and expert consultation, we ensure high-quality respiratory care.",
    ],
    points: [
      "Comprehensive lung function testing",
      "Testing and treatment for conditions ranging from asthma COPD to ILD and bronchiectasis, lung cancer, pneumonia and sleep apnea",
      "Access to pulmonary rehabilitation programs for long-term recovery",
    ],
  },

  "Specialty Clinics": {
    title: "Specialty Clinics",
    image: entImage,
    link: "/allied-services/ent",
    paragraphs: [
      "Our Specialty Clinics are designed to provide focused, high-quality care across a range of complex medical conditions.",
      "Each clinic is led by experts in their field and supported by multidisciplinary teams to ensure precise diagnosis and tailored treatment.",
    ],
    points: [
      "Dedicated, condition-specific care models",
      "Advanced diagnostics and personalized treatment plans",
      "Integrated approach for holistic patient outcomes",
    ],
  },

  "Comprehensive Sleep Clinic": {
    title: "Comprehensive Sleep Clinic",
    image: entImage1,
    link: "/allergy-immunology",
    paragraphs: [
      "Our Comprehensive Sleep Clinic offers end-to-end care for individuals experiencing sleep disturbances and related health issues.",
      "We focus on accurate diagnosis, personalized treatment, and long-term management of sleep disorders.",
    ],
    points: [
      "Multidisciplinary approach to sleep health",
      "Integration with pulmonology, ENT, Dental and Nutrition (weight loss), and psychology",
      "State-of-the-art sleep study facilities (Polysomnography)",
    ],
  },

  "Rehabilitation services": {
    title: "Rehabilitation services",
    image: entImage2,
    link: "./general-opd",
    paragraphs: [
      "Our Rehabilitation Services are designed to restore strength, improve mobility, and enhance the overall quality of life for patients recovering from illness, surgery, or managing chronic conditions",
      "We offer personalized rehab programs led by a multidisciplinary team of specialists.",
    ],
    points: [
      "Patient-centered care plans tailored to individual goals",
      "Holistic approach combining physical, respiratory, and occupational therapies",
      "Close collaboration with medical specialists for integrated recovery",
    ],
  },

  "Diagnostic": {
    title: "Diagnostic Services",
    image: entImage3,
    link: "./general-opd",
    paragraphs: [
      "Our state-of-the-art Diagnostic Services form the backbone of accurate medical care.",
      "We combine advanced technology with expert interpretation to provide fast, reliable, and precise results, enabling timely and effective treatment decisions.",
    ],
    points: [
      "Range of PFT tests. Spirometry, DLCO, 6MWT",
      "Radiology,Chest X ray and CT scan",
      "Range of blood tests with panels curated towards underlying disease",
      "Echo, ECG, Lung ultrasound & Other advanced diagnostics",
    ],
  },
};


const DepartmentDetails = () => {
  const [activeTab, setActiveTab] = useState("general-respiratory-opd");
  const content = departmentContent[activeTab];

  if (!content) {
    return (
      <div className="text-center text-red-500 py-10">
        Content not available. Please try again.
      </div>
    );
  }

  return (
    <div className="px-5 lg:px-32 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`border px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === category
                ? "bg-[#5B6641] text-white"
                : "border-[#5B6641] text-gray-700 hover:bg-[#daf5f0]"
            }`}
          >
            {departmentContent[category]?.title || category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={content.image}
            alt={content.title}
            className="rounded-xl shadow-md w-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">{content.title}</h2>
          <div className="w-10 h-1 bg-[#1ABC9C] mb-2"></div>

          {content.paragraphs.map((para, index) => (
            <p key={index} className="text-sm text-gray-700">
              {para}
            </p>
          ))}

          <ul className="text-sm text-gray-700 space-y-2 mt-4">
            {content.points.map((point, index) => (
              <li key={index}>
                <span className="inline-block mr-2 text-[#1ABC9C]">⭘</span>
                <strong>{point}</strong>
              </li>
            ))}
          </ul>

         
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;
