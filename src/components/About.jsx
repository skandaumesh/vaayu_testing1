import React from "react";
import img from "../assets/img/About us image 1.jpg";
import img2 from "../assets/img/m.jpg";

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Vaayu Chest & Sleep Specialists",
    description:
      "Respiratory and sleep care center in Bengaluru for asthma, COPD, ILD, sleep apnea, chronic breathing problems, pulmonary rehabilitation, second opinion pulmonology care, and long-term lung care.",
    areaServed: "Bengaluru",
    medicalSpecialty: ["Pulmonology", "Sleep Medicine", "Pulmonary Rehabilitation"],
    knowsAbout: [
      "not improving despite treatment",
      "chronic breathing problem",
      "COPD not improving",
      "asthma not controlled",
      "pulmonary rehabilitation",
      "avoid hospitalisation",
      "second opinion pulmonologist",
      "long term lung care",
      "sleep apnea treatment",
      "lung fibrosis care",
      "chronic cough treatment",
      "breathlessness treatment",
      "respiratory specialist in Bengaluru",
      "pulmonologist in Bengaluru",
    ],
  };

  return (
    <section className="bg-[#eef4e9] py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 2xl:py-28 px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-center overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="w-full max-w-[1280px] grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 2xl:gap-18 items-center">
        {/* LEFT CONTENT */}
        <div className="relative w-full max-w-[620px] mx-auto xl:mx-0">
          <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white to-[#eef4e9] opacity-70" />

          <div className="relative rounded-[24px] border border-[#61724e]/15 bg-white/85 backdrop-blur-sm px-5 sm:px-7 lg:px-8 xl:px-9 py-7 sm:py-8 lg:py-9 xl:py-10 shadow-[0_15px_50px_rgba(47,54,26,0.08)]">
            <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#eef4e9] border border-[#61724e]/20 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#61724e]">
              About Vaayu Chest & Sleep Specialty Center
            </div>

            <h2 className="mt-4 text-[1.55rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.35rem] xl:text-[2.65rem] 2xl:text-[2.9rem] font-semibold text-[#2F361A] leading-[1.22] tracking-[-0.02em]">
              Advanced respiratory and sleep care in Bengaluru
            </h2>

            <p className="mt-4 text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-6 sm:leading-7 text-[#5f6b50]">
Vaayu Chest & Sleep Specialists is a dedicated outpatient center for comprehensive respiratory and sleep care, designed for patients who require structured, long-term management.            </p>

            <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-6 sm:leading-7 text-[#5f6b50]">
We provide specialized care for conditions such as asthma, COPD, interstitial lung disease (ILD), sleep apnea, and other complex breathing disorders through an integrated approach that combines advanced diagnostics, evidence-based treatment, pulmonary rehabilitation, and continuous follow-up under one roof.
            </p>

             <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-6 sm:leading-7 text-[#5f6b50]">
For patients who are not achieving desired outcomes with conventional treatment,  Vaayu Chest & sleep Specialty Center  offers a more coordinated and clinically focused pathway to long-term disease control.            </p>

            <div className="mt-5 h-[1px] w-16 bg-[#61724e]/30" />

            <p className="mt-3 text-[12.5px] sm:text-[13.5px] text-[#61724e] font-medium">
A more structured, deeper approach to respiratory care.            </p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center w-full max-w-[620px] mx-auto">
          <div className="hidden sm:block absolute -top-3 -right-3 w-full h-full rounded-[24px] bg-[#dfe8d8]" />

          <div className="relative w-full grid grid-cols-1 gap-4 rounded-[24px] bg-white/60 p-2 shadow-[0_20px_60px_rgba(47,54,26,0.16)]">
            <img
              src={img}
              alt="Vaayu Chest and Sleep Specialists Bengaluru"
              className="w-full h-[170px] sm:h-[210px] md:h-[230px] lg:h-[230px] xl:h-[245px] 2xl:h-[265px] object-cover rounded-[20px]"
            />

            <img
              src={img2}
              alt="Vaayu respiratory and sleep care"
              className="w-full h-[170px] sm:h-[210px] md:h-[230px] lg:h-[230px] xl:h-[245px] 2xl:h-[265px] object-cover rounded-[20px]"
            />
          </div>

          <div className="absolute bottom-3 left-3 sm:-bottom-4 sm:left-5 bg-white border border-[#61724e]/20 rounded-xl px-3 sm:px-5 py-2 sm:py-3 shadow-md max-w-[86%]">
            <p className="text-[11px] sm:text-[13px] font-semibold text-[#2F361A] leading-tight">
              Comprehensive Lung & Sleep Care
            </p>
            <p className="text-[10px] sm:text-[12px] text-[#61724e] mt-1 leading-tight">
              Diagnosis • Treatment • Rehabilitation • Follow-up
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;