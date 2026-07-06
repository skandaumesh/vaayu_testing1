import React from "react";

// ✅ Import all images
import bgHero from "../assets/img/img5.jpg";
import imgOverview from "../assets/img/1.png";
import hitchStitch from "../assets/img/2.png";
import tTube from "../assets/img/3.png";
import ebusBiopsy from "../assets/img/4.png";
import cesbAirleak from "../assets/img/5.png";
import cesbHemoptysis from "../assets/img/6.png";
import summaryImg from "../assets/img/7.png";

const font = "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const InnovationBlock = ({ title, points, img, reverse, link }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 ${
      reverse ? "md:[&>*:first-child]:order-2" : ""
    } gap-8 md:gap-12 items-center py-12 md:py-16`}
  >
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_16px_50px_rgba(63,71,46,0.10)] border border-[#E3E8D7]">
      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#2f3722] mb-5 leading-tight">
        {title}
      </h3>

      <ul className="space-y-3 text-[15px] md:text-base leading-7 text-[#4e573b]">
        {points.map((pt, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#5B6641] shrink-0" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt={title}
            className="w-full rounded-[2rem] shadow-[0_16px_50px_rgba(63,71,46,0.12)] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          />
        </a>
      ) : (
        <img
          src={img}
          alt={title}
          className="w-full rounded-[2rem] shadow-[0_16px_50px_rgba(63,71,46,0.12)]"
        />
      )}
    </div>
  </div>
);

const Innovations = () => {
  return (
    <div
      className="bg-[#F4F5EC] text-[#3f472e] overflow-x-hidden"
      style={{ fontFamily: font }}
    >
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center px-6 py-28 md:py-36 text-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/75 backdrop-blur-md p-7 md:p-10 rounded-[2rem] border border-white/50 shadow-2xl">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-[#5B6641] mb-4">
              Clinical Innovation
            </p>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-[#2f3722] mb-5">
              Our Innovations
            </h1>

            <p className="text-[16px] md:text-[18px] leading-8 text-[#4e573b] max-w-2xl mx-auto">
              Innovations born out of real-world clinical challenges —
              cost-effective, India-centric, and globally recognized.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-[#6A734F] mb-4">
              Innovation With Purpose
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#2f3722] mb-6">
              Practical Solutions for Real Clinical Challenges
            </h2>

            <div className="space-y-5 text-[16px] md:text-[17px] leading-8 text-[#4e573b]">
              <p>
                Time and again we come up with situations in our day-to-day
                practice, which are difficult to manage, not only from a
                clinical perspective, but also due to resource limitation.
              </p>

              <p>
                While majority of medications and devices are now available in
                India, cost remains a major limitation.
              </p>

              <p>
                Since most of the research happens in the West, the medical
                devices so conceived are customized to their population.
              </p>

              <p>
                These factors demand low-cost innovative solutions to tackle
                challenging clinical situations.
              </p>
            </div>
          </div>

          <div>
            <img
              src={imgOverview}
              alt="Innovation overview"
              className="w-full rounded-[2rem] shadow-[0_18px_60px_rgba(63,71,46,0.14)]"
            />
          </div>
        </div>
      </section>

      {/* INNOVATION BLOCKS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-[#6A734F] mb-4">
            Published Work
          </p>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#2f3722]">
            Recognized Respiratory Innovations
          </h2>

          <p className="mt-5 text-[16px] md:text-[17px] leading-8 text-[#4e573b]">
            A collection of clinical innovations developed to solve practical
            problems in respiratory and airway care.
          </p>
        </div>

        <InnovationBlock
          title="The Hitch Stitch"
          img={hitchStitch}
          link="https://karger.com/res/article-abstract/93/2/106/290149/The-Hitch-Stitch-An-Effective-Method-of-Preventing?redirectedFrom=fulltext"
          reverse={false}
          points={[
            "Airway stents are either the modality of choice or salvage therapy.",
            "However, since airways are dynamic, it can lead to stent migration.",
            "Literature has described a few techniques to hold the stent in position.",
            "We devised a low-cost, cosmetically superior, technically simpler method.",
          ]}
        />

        <InnovationBlock
          title="An Innovative Solution for T Tube Obstruction"
          img={tTube}
          link="https://onlinelibrary.wiley.com/doi/abs/10.1002/lary.27046"
          reverse={true}
          points={[
            "Montgomery’s T tubes are required for airway stenosis.",
            "However, blockage of T tube poses a challenge.",
            "We came up with an innovative solution using fenestrated tracheostomy tube.",
          ]}
        />

        <InnovationBlock
          title="EBUS Forceps Biopsy"
          img={ebusBiopsy}
          link="https://pubmed.ncbi.nlm.nih.gov/31845474/"
          reverse={false}
          points={[
            "We struggle with negative results from mediastinal lymph node sampling.",
            "We report use of forceps trans-bronchially into the mediastinal lymph nodes.",
            "This has helped redefine the algorithm for negative EBUS procedures.",
          ]}
        />

        <InnovationBlock
          title="Innovative Solution of Persistent Air Leaks – CESB"
          img={cesbAirleak}
          link="https://pubmed.ncbi.nlm.nih.gov/29346253/"
          reverse={true}
          points={[
            "Surgery is the standard therapy for persistent air leak.",
            "However, many patients are not ideal candidates for surgery.",
            "We devised a low-cost, indigenous method that has been highly successful.",
          ]}
        />

        <InnovationBlock
          title="CESB for Hemoptysis"
          img={cesbHemoptysis}
          link="https://journals.sagepub.com/doi/abs/10.1177/1556984520904351"
          reverse={false}
          points={[
            "The same CESB device was found useful for massive hemoptysis.",
            "This can help tide over the crisis until a more definitive therapy is planned.",
          ]}
        />
      </section>

      {/* SUMMARY SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-[#6A734F] mb-4">
            Summary
          </p>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#2f3722]">
            Advancing Respiratory Care Through Innovation
          </h2>
        </div>

        <a
          href="https://onlinelibrary.wiley.com/doi/abs/10.1002/ppul.23709"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={summaryImg}
            alt="Innovations summary"
            className="w-full rounded-[2rem] shadow-[0_18px_60px_rgba(63,71,46,0.14)] cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          />
        </a>
      </section>
    </div>
  );
};

export default Innovations;