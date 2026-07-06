import React, { useEffect, useState } from "react";
import img1 from "../assets/img/prevention.jpg";
import img2 from "../assets/img/diagnosis.jpg";
import img3 from "../assets/img/treatment.jpg";
import img4 from "../assets/img/rehab.jpg";

const steps = [
  {
    title: "Prevention",
    text: "Respiratory vaccination, smoking cessation, sleep clinics",
    image: img1,
  },
  {
    title: "Advanced Diagnosis",
    text: "Point-of-care testing, blood test panels, Chest X-ray, CT scans.",
    image: img2,
  },
  {
    title: "Treatment",
    text: "Inpatient plans, critical care, lung transplant services",
    image: img3,
  },
  {
    title: "Pulmonary Wellness & Rehabilitation",
    text: "Your ticket to health maintenance and recovery",
    image: img4,
  },
];

const LifecyclePath = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500); // Change card every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white py-20 px-5 lg:px-32 text-center overflow-hidden">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#5B6641] mb-2">
        Covering The Lifecycle Of Respiratory And Sleep Disorders
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        Leaving no stone unturned in respiratory and sleep disorders' medicine
      </p>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center mt-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-full flex flex-col items-center space-y-4 transition-all duration-500 ${
              activeStep === index
                ? "scale-105 animate-bounce shadow-xl shadow-[#dce0d3]"
                : "opacity-70"
            }`}
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-white z-10 bg-white">
              <img
                src={step.image}
                alt={step.title}
                className="object-cover w-full h-full"
              />
              <span className="absolute -top-3 -left-3 bg-[#5B6641] text-white w-7 h-7 text-xs font-bold flex items-center justify-center rounded-full shadow">
                {`0${index + 1}`}
              </span>
            </div>
            <h4 className="text-md font-bold text-[#5B6641]">{step.title}</h4>
            <p className="text-xs text-gray-600 max-w-[150px]">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifecyclePath;
