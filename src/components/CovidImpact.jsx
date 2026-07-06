import React from "react";
import { FaCheck } from "react-icons/fa";
import covidImg from "../assets/img/covid.avif";
import { motion } from "framer-motion";

const points = [
  "Part of various tactical advisory committees to the government of Karnataka",
  "Conducted various awareness programs for the community",
  "Regular newspaper articles on the latest in COVID",
  "More than 10k patients treated",
  "Performed more than 500 COVID bronchoscopies – for research and treatment purposes – project in collaboration with IISc.",
  "Developed guidelines for government, community and medical fraternity.",
  "Awarded Namma Bengalurean of the Year for 2022 for COVID achievements",
];

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const CovidImpact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-5 lg:px-32 py-20">
      {/* Left Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInLeft}
      >
        <span className="bg-[#eef1ea] text-[#5B6641] px-3 py-1 text-xs font-bold rounded-md uppercase tracking-wide mb-3 inline-block">
          VAAYU
        </span>
        <h2 className="text-4xl font-bold text-[#5B6641] mb-8">Our COVID Impact</h2>

        <ul className="space-y-5">
          {points.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-gray-700 text-base leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              viewport={{ once: false }}
            >
              <span className="bg-[#e1e6d9] text-[#5B6641] p-2 rounded-full">
                <FaCheck className="text-sm" />
              </span>
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInZoom}
      >
        <img
          src={covidImg}
          alt="Covid Impact"
          className="w-full max-w-md h-auto object-cover rounded-lg mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default CovidImpact;
