// src/components/HeroSlider.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const HeroSlider = () => {
  const slides = [
    {
      image: "C:\Users\sharm\Downloads\project\vaayu\public\m.jpeg",
      title: "We are your partners in the journey from illness to wellness!!",
      text: "With our skilled, experienced, committed team, we smoothen your path to recovery.",
    },  
    {
      image: "..public/m.jpg",
      title: "360° Respiratory & Sleep Care",
      text: "From diagnosis to recovery — a complete solution for your lung health, allergies, and sleep concerns.",
    },
    {
      image: "/slide3.jpg",
      title: "Future-Ready Pulmonary Services",
      text: "Empowering you with advanced tech, expert doctors, and compassionate care every step of the way.",
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={3000} // 3 seconds
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      transitionTime={800}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          {/* Slide Image */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[200vh] object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-5 lg:px-32 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {slide.title}
            </h2>
            <p className="text-base lg:text-lg mb-6">{slide.text}</p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-md transition">
                See Services
              </button>
              <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-cyan-600 transition">
                Service List
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
