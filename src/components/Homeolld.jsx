import React, { useEffect, useState } from "react";
import About from "./About";
import InfoCards from "./InfoCards";
import DepartmentDetails from "../components/DepartmentDetails";
import StatsCards from "../components/StatsCards";
import LifecyclePath from "./LifecyclePath";
import CovidImpact from "./CovidImpact";
import Testimonials from "./Testimonials";
import CentersOfExcellence from "../components/CentersOfExcellence";
import { Helmet } from "react-helmet";
import rehabPreview from "../assets/img/rehablaunch.png";
import leftBg from "../assets/img/IMG_0159.JPG";
import rightBg from "../assets/img/IMG_0215.JPG";

const sliderContent = [
  {
    image: "/cm.jpg",
    title: "We Are Your Partners In The Journey From Illness To Wellness!!!!",
    text: "With our skilled, experienced, committed team, offering end to end solutions, we smoothen your path to recovery.",
  },
  {
    image: "/bc2.jpg",
    title: "We Walk With You On The Path To Better Health & Better Life",
    text: "We work with you to avoid hospitalisation. But if illness takes you there, we help expedite your recovery.",
  },
  {
    image: "/slider.jpg",
    title: "Vaayu Specialty Clinics: Advanced Treatments & Expert Care From Diagnosis to Renewed Health",
    text: "From targeted diagnostics to bespoke treatments for ILD, COPD, Asthma, Pulmonary Hypertension, and Sarcoidosis, our multidisciplinary teams unite under one roof—committed to restoring your lung health and transforming your life.",
  },
];

const newsItems = [
  "Pulmonary Rehabilitation Program - 8th March",
  "Advanced ILD Care",
  "Sleep Apnea Diagnosis & Treatment",
  "Asthma & COPD Specialist Care",
  "Breathe Better, Live Stronger with Vaayu",
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderContent.length);
    }, 50000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? sliderContent.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % sliderContent.length);
  };

  return (
    <div>
      <Helmet>
        <title>
          Vaayu Chest & Sleep Specialists | Asthma, COPD, ILD & Sleep Apnea Care in Bengaluru
        </title>
        <meta
          name="description"
          content="Vaayu Chest & Sleep Specialists in Bengaluru provide advanced care for asthma, COPD, ILD, sleep apnea, pulmonary hypertension, sarcoidosis, ENT issues, allergies, and rehabilitation services with expert pulmonologists and state-of-the-art facilities."
        />
        <meta
          name="keywords"
          content="asthma treatment Bengaluru, COPD specialist Bengaluru, ILD clinic Bengaluru, sleep apnea doctor Bengaluru, snoring treatment, pulmonologist near me, best lung specialist Bengaluru, pulmonary hypertension care, sarcoidosis specialist, allergy doctor Bengaluru, ENT clinic Bengaluru, pulmonary rehabilitation Bengaluru, cardiac rehabilitation Bengaluru, home rehab Bengaluru"
        />
        <meta property="og:title" content="Vaayu Chest & Sleep Specialists | Bengaluru" />
        <meta
          property="og:description"
          content="Expert respiratory and sleep care for asthma, COPD, ILD, sleep apnea, and more in Bengaluru. Book your appointment with our lung specialists today."
        />
        <meta property="og:image" content="https://vaayuchest.com/og-image.jpg" />
        <meta property="og:url" content="https://vaayuchest.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vaayu Chest & Sleep Specialists | Bengaluru" />
        <meta
          name="twitter:description"
          content="Breathe easy with advanced respiratory and sleep disorder care at Vaayu, Bengaluru."
        />
        <meta name="twitter:image" content="https://vaayuchest.com/og-image.jpg" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </Helmet>

      <style>
        {`
          @keyframes vaayuMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

<div
  className="relative w-full min-h-[420px] sm:min-h-[520px] md:h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col justify-start md:justify-center px-6 sm:px-8 lg:px-32 text-white transition-all duration-700 pt-24 sm:pt-32 md:pt-0 overflow-hidden"
  style={{ backgroundImage: `url(${sliderContent[current].image})` }}
>
  <div className="absolute inset-0 bg-black/45 z-0" />

  <div className="relative z-10 max-w-3xl mt-0 md:mt-0 pr-2 sm:pr-0">
    <h1 className="text-[28px] sm:text-3xl md:text-5xl font-bold leading-tight"> 
      {sliderContent[current].title}
    </h1>

   <p className="mt-4 text-[14px] sm:text-base md:text-lg max-w-2xl"> 
      {sliderContent[current].text}
    </p>
  </div>


 <button
  onClick={handlePrev}
  aria-label="Previous slide"
className="absolute left-4 bottom-16 sm:bottom-10 z-20 w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-50 hover:opacity-100 transition">
  <svg
    className="w-4 h-4 text-white/80"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button
  onClick={handleNext}
  aria-label="Next slide"
className="absolute right-4 bottom-16 sm:bottom-10 z-20 w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-50 hover:opacity-100 transition">
  <svg
    className="w-4 h-4 text-white/80"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
    {sliderContent.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={`w-2.5 h-2.5 rounded-full transition ${
          index === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white"
        }`}
      />
    ))}
  </div>
</div>

      <StatsCards />
      <CentersOfExcellence />

      <div className="px-5 lg:px-32 mt-16">
        <About />
      </div>



        

      <div className="px-5 lg:px-32 mt-16">
        <InfoCards />
      </div>

      <LifecyclePath />

      <div className="px-5 lg:px-32 mt-20">
        <DepartmentDetails />
      </div>

      <CovidImpact />
      <Testimonials />
    </div>
  );
};

export default Home;