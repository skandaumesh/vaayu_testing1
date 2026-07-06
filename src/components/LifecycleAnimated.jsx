import React, { useEffect, useState } from "react";
import img1 from "../assets/img/prevention.jpg";
import img2 from "../assets/img/diagnosis.jpg";
import img3 from "../assets/img/treatment.jpg";
import img4 from "../assets/img/offerImg.jpg";

const steps = [
  {
    title: "Prevention",
    text: "Respiratory vaccination, smoking cessation, sleep clinics",
    image: img1,
  },
  {
    title: "Advanced Diagnosis",
    text: `Point-of-care testing, blood test panels, Chest X-ray, CT scans.`,
    image: img2,
  },
  {
    title: "Treatment",
    text: "Individualized inpatient plans, critical care, lung transplant services",
    image: img3,
  },
  {
    title: "Pulmonary Wellness & Rehabilitation",
    text: "Your ticket to health maintenance and recovery",
    image: img4,
  },
];

const LifecycleAnimated = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length ? prev + 1 : 0));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white py-16 px-5 lg:px-32 text-center overflow-hidden">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#153B66] mb-4">
        Covering The Lifecycle Of Respiratory And Sleep Disorders
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Leaving no stone unturned in respiratory and sleep disorders' medicine
      </p>

      {/* Animated Arrow */}
      <div className="absolute top-[140px] left-0 w-full h-0 z-10">
        <div
          className={`transition-transform duration-500 ease-in-out w-6 h-6`}
          style={{
            transform: `translateX(${activeStep * 25}%)`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-cyan-600 animate-bounce"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center mt-16">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-white z-10">
              <img
                src={step.image}
                alt={step.title}
                className="object-cover w-full h-full"
              />
              <span className="absolute -top-3 -left-3 bg-emerald-500 text-white w-7 h-7 text-xs font-bold flex items-center justify-center rounded-full shadow">
                {`0${index + 1}`}
              </span>
            </div>
            <h4 className="text-md font-bold text-[#1ABC9C]">{step.title}</h4>
            <p className="text-xs text-gray-600 max-w-[150px]">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifecycleAnimated;
