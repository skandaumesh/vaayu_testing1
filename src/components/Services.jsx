import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import opdImg from "../assets/img/OPD.jpg";
import respiratoryImg from "../assets/img/Breathe Easy Again_ How Lung Transplants Can Give a Second Chance at Life.jpg";
import rehabImg from "../assets/img/offerImg.jpg";
import sleepImg from "../assets/img/sl.jpg";
import allergyImg from "../assets/img/wmremove-transformed (1).png";
import homeCareImg from "../assets/img/re.jpg";
import entImg from "../assets/img/ENT.jpg";
import preventiveImg from "../assets/img/close-up-man-holding-broken.jpg";
import yu from "../assets/img/yu.jpg";
import naturo from "../assets/img/focused-young-indian-man-meditating-lotus-pose (1).jpg";
import alliedImg from "../assets/img/ENT.jpg";

const services = [
  {
    image: opdImg,
    title: "General Respiratory Center",
    path: "/general-opd",
    desc: "Care for cough, breathlessness, wheezing, chest discomfort, infections, and routine lung health needs.",
  },
  {
    image: respiratoryImg,
    title: "Specialty Respiratory Center",
    path: "/specialty-clinic",
    desc: "Advanced care for Asthma, COPD, ILD, Sarcoidosis, Pulmonary Hypertension, and complex respiratory conditions.",
  },
  {
    image: rehabImg,
    title: "Rehabilitation Services",
    path: "/rehab-wellness",
    desc: "Pulmonary, cardiac, integrated cardio-pulmonary, and cancer rehabilitation for recovery and long-term wellness.",
  },
  {
    image: yu,
    title: "Occupational Therapy & Pain Management",
    path: "/rehab-wellness/therapy",
    desc: "Support for mobility, pain relief, daily function, posture, and recovery needs.",
  },
  {
    image: naturo,
    title: "Wellness & Naturopathy",
    path: "/rehab-wellness/wellness",
    desc: "Sleep wellness, allergy management, weight management, stress management, and clinical yoga.",
  },
  {
    image: sleepImg,
    title: "Comprehensive Sleep Center",
    path: "/sleep-clinic",
    desc: "Care for snoring, obstructive sleep apnea, insomnia, parasomnias, and sleep-related breathing concerns.",
  },
  {
    image: allergyImg,
    title: "Allergy and Immunology Center",
    path: "/allergy-immunology",
    desc: "Allergy testing, immunotherapy, and long-term care for respiratory and immune-related allergies.",
  },
  {
    image: alliedImg,
    title: "Allied Services",
    path: "/allied-services",
    desc: "ENT, Pediatric Pulmonology, Clinical Psychology, Diet and Nutrition, and Weight Management.",
  },
  {
    image: homeCareImg,
    title: "Home Care Services",
    path: "/home-care",
    desc: "Home nursing, home testing, home rehabilitation, medication delivery, injections, and antibiotics.",
  },
  {
    image: preventiveImg,
    title: "Preventive Respiratory Center",
    path: "/preventive-clinics",
    desc: "Tobacco cessation, respiratory health checks, vaccination awareness, and early risk screening.",
  },
];

const Services = () => {
  return (
    <div className="relative px-5 lg:px-32 py-16 bg-[#F4F5EC]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <span className="text-gray-700">Explore Our </span>
        <span className="text-[#5B6641]">Respiratory & Sleep Care Services</span>
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Comprehensive care designed around breathing, sleep, rehabilitation,
        prevention, and long-term wellness.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="h-auto">
            <Link to={service.path} className="block h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg text-center p-5 h-full hover:shadow-xl transition group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-md mb-4 h-60 w-full object-cover"
                />

                <h3 className="text-lg font-bold mb-2 text-[#3F4723] group-hover:text-[#5B6641]">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#5B6641]">
                  Explore Service →
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-[#5B6641] text-2xl lg:text-3xl cursor-pointer px-2">
        &#10094;
      </div>

      <div className="custom-swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-[#5B6641] text-2xl lg:text-3xl cursor-pointer px-2">
        &#10095;
      </div>
    </div>
  );
};

export default Services;