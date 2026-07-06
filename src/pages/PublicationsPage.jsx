import React from "react";
import heroImage from "../assets/img/publication herp.jpg";

const font =
  "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const publications = [
  {
    title:
      "Use of fibrinolytics and deoxyribonuclease in adult patients with pleural empyema: a consensus statement",
    link: "https://drive.google.com/file/d/1KWBFEDCWO5-08iX38oSz-guWbRyvZjou/view?usp=sharing",
  },
  {
    title:
      "The “Hitch Stitch”: An Effective Method of Preventing Migration in High Tracheal Stenosis",
    link: "https://drive.google.com/file/d/1B6UdezfCIchKnV3CbyR1alPYsgpYyp_6/view?usp=sharing",
  },
  {
    title:
      "Bronchoscopic Segmental Lavage for Refractory Lipoid Pneumonia in a Toddler",
    link: "https://drive.google.com/file/d/1CEqFxePKiwTz6UWBVwvUt7nqhq1J1Kg4/view?usp=sharing",
  },
  {
    title:
      "Utility of EBUS-TBNA in PET-positive mediastinal lymph nodes in subjects with extra-thoracic malignancy",
    link: "https://drive.google.com/file/d/1MkhM50Ei47XoHODEJDSg4H8Cr4Y9ULM4/view?usp=sharing",
  },
  {
    title:
      "The safety and efficacy of different methods for obtaining transbronchial lung cryobiopsy in diffuse lung diseases",
    link: "https://drive.google.com/file/d/1MnJgSOIbd6Yc4nRg0ntuka7Kvdma2YsP/view?usp=sharing",
  },
  {
    title:
      "Defining expanded areas in EBUS sampling: EBUS guided trans- and intra-pulmonary artery needle aspiration, with review of transvascular EBUS",
    link: "https://drive.google.com/file/d/1WNp4H-UjJ6zg_YnAHHuliKu9kgHl9OH1/view?usp=sharing",
  },
  {
    title:
      "Guidelines for Diagnostic Flexible Bronchoscopy in Adults: Joint Indian Chest Society/National College of Chest Physicians (I)/Indian Association for Bronchology Recommendations",
    link: "https://drive.google.com/file/d/1ZH0J7JxDJ0zTsH19RMNYudcfrin03993/view?usp=sharing",
  },
  {
    title:
      "A Novel Technique for the Management of Massive Hemoptysis: The Customized Endobronchial Silicone Blocker",
    link: "https://drive.google.com/file/d/1KzvEP-uCasgXx669SeSyaxuX4C6bZKwC/view?usp=sharing",
  },
  {
    title:
      "A shorter symptom onset to remdesivir treatment interval is associated with a lower mortality in moderate-to-severe COVID-19",
    link: "https://drive.google.com/file/d/1wjK9Qkd2OY5R1OHWDfBF0vOAhliXTn65/view?usp=sharing",
  },
];

export default function PublicationsPage() {
  return (
    <div
      className="bg-[#F4F5EC] text-[#3f472e] overflow-x-hidden"
      style={{ fontFamily: font }}
    >
      {/* HERO */}
      <section
        className="relative min-h-[420px] md:min-h-[520px] bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/15 backdrop-blur-md border border-white/25 rounded-[2rem] px-6 md:px-10 py-8 md:py-10 shadow-2xl">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-white/90 mb-4">
            Research & Knowledge
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white mb-5">
            Our Publications
          </h1>

          <p className="text-[16px] md:text-[18px] leading-8 text-white/90 max-w-2xl mx-auto">
            Advancing respiratory and sleep health through research,
            innovation, and clinical knowledge.
          </p>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-[#6A734F] mb-4">
            Published Work
          </p>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#2f3722]">
            Respiratory Care Publications
          </h2>

          <p className="mt-5 text-[16px] md:text-[17px] leading-8 text-[#4e573b]">
            Have a look at some of our publications and research contributions
            in pulmonology, bronchoscopy, airway care, and respiratory medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] border border-[#E3E8D7] p-6 md:p-7 shadow-[0_14px_45px_rgba(63,71,46,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(63,71,46,0.14)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF2E4] text-[#5B6641] font-black">
                {index + 1}
              </div>

              <h3 className="text-lg md:text-xl font-black tracking-tight leading-snug text-[#2f3722] mb-5">
                {pub.title}
              </h3>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#5B6641] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4d5639]"
              >
                View Publication
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}