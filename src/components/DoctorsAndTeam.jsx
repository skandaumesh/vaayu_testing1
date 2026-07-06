import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import rasheekaImg from "../assets/img/doctors/Rasheeka.jpg";
// ✅ Actual doctor and specialist images
//import cc from "../assets/img/cc.png";
import cc from "../assets/img/DSC00661 (1).jpg";


import aa from "../assets/img/Screenshot 2026-05-19 092742.png";
import bb from "../assets/img/bb.png";
import dd from "../assets/img/dd.png";
import ee from "../assets/img/ee.png";
import ff from "../assets/img/ff.png";
import gg from "../assets/img/gg.png";
import hh from "../assets/img/DR YOGITA HATMODE.jpg";
import mm from "../assets/img/mm.jpg";

import a1 from "../assets/img/DR MOHANTESH.jpg";
import a2 from "../assets/img/IMG_20220221_170111.jpg";
import a3 from "../assets/img/PRERANA ABHISHEKI.jpeg";
import a7 from "../assets/img/1000432755.jpg";
import a8 from "../assets/img/IMG-20250617-WA0005.jpg";
import a9 from "../assets/img/saw.jpg";
import a10 from "../assets/img/sharanya.jpeg";


import a121 from "../assets/img/ashamam.png";
import  a122 from "../assets/img/payalmam.png";
import a123 from "../assets/img/mohansir.png";


import a11 from "../assets/img/anj.png";
import a14 from "../assets/img/e.jpg";
import a18 from "../assets/img/a18.png";

import ajithaImg from "../assets/img/doctors/Dr Ajitha Tavvala.jpeg";
import nandiniImg from "../assets/img/doctors/nandini naidu.JPG";

// ✅ Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DoctorsAndTeam = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const doctors = [
    {
      img: cc,
      name: "Dr. Ravindra Mehta",
      specialties: "Director, Vaayu chest & sleep specialists",
      socials: {
        email: "ravimehta@vaayuchest.com",
        linkedin: "https://www.linkedin.com/in/dr-ravi-mehta/",
      },
    },
    {
      img: aa,
      name: "Dr. Sameer Bansal",
      specialties: "Consultant Pulmonologist & Clinical Head",
      socials: {
        email: "sameer@vaayuchest.com",
        linkedin: "https://www.linkedin.com/in/sameer-bansal-5498a831/",
      },
    },
    {
      img: bb,
      name: "Dr. Hariprasad",
      specialties: "Consultant Pulmonologist",
      socials: {
        email: "hari.prasad@vaayuclinic.com",
        linkedin: "https://linkedin.com/in/hariprasad",
      },
    },
    {
      img: a11,
      name: "Dr. Aneesha",
      specialties: "Consultant Pulmonologist",
      socials: {
        email: "Aneejallepalli209@gmail.com",
        linkedin: "#",
      },
    },
    {
  img: rasheekaImg,
  name: "Dr. Rasheeka VP",
  specialties: "Pulmonologist",
  socials: {
    email: "rashika2695@gmail.com",
    linkedin: "#",
  },
},
    {
      img: hh,
      name: "Dr. Yogita Hathmode",
      specialties: "Head, Pulmonary Wellness & Rehabilitation",
      socials: {
        email: "rehabilitation@vaayuchest.com",
        linkedin:
          "https://www.linkedin.com/in/dr-yogita-hatmode-pt-mpt-crd-m-i-a-f-t-7048a6190/",
      },
    },
    {
      img: a3,
      name: "Dr.Prerana Abhisheki",
      specialties: "Specialist in Cardio Pulmonary Rehabilitation",
      socials: {
        email: "preranaabhisheki@gmail.com",
        linkedin: "#",
      },
    },
    {
      img: ee,
      name: "Dr. Suneela H Nayak",
      specialties: "Allergy & Pediatric Pulmonology",
      socials: {
        email: "suneela.nayak@vaayuclinic.com",
        linkedin: "https://linkedin.com/in/suneelanayak",
      },
    },
   
    {
      img: ajithaImg,
      name: "Dr. Ajitha Tavvala ",
      specialties: "Otorhinolaryngologist (ENT specialist)",
      socials: {
        email: "#",
        linkedin: "#",
      },
    },
  
   
    
    {
      img: nandiniImg,
      name: "Dr.Nandini G",
      specialties: "Clinical Psychologist",
      socials: {
        email: "nandini.naidu13@gmail.com",
        linkedin: "#",
      },
    },
    
    

  
    {
      img: a8,
      name: "Dr.Sagar T V",
      specialties: "Specialist - Pulmonary Rehabilitation",
      socials: {
        email: "sagartv.pt@gmail.com",
        linkedin: "https://www.linkedin.com/in/sagar-t-v-416636224",
      },
    },
    {
      img: a18,
      name: "Dr. Abhishek L",
      specialties: "Physiotherapist",
      socials: {
        email: "#",
        linkedin: "#",
      },
    },
  ];

  const team = [
    {
      img: a2,
      name: "Dr.Anantha V S",
      specialties: "Chief Operating Officer",
      socials: {
        email: "drananthvs@gmail.com",
        linkedin: "https://www.linkedin.com/in/dr-ananth-v-shanbhogue-3443b2192/",
      },
    },
    {
      img: a10,
      name: "Ms.Sharanya S",
      specialties: "Assistant Manager",
      socials: {
        email: "saranyasubramani33@gmail.com",
        linkedin: "#",
      },
    },
    {
  img: a121,
  name: "Mrs.Asha Shetty",
  specialties: "Front office executive",
  socials: {
    email: "asha40120@gmail.com",
    linkedin: "#",
  },
},

    {
  img: a123,
  name: "Mr.Mohan Kumar",
  specialties: "Patient Care Coordinator",
  socials: {
    email: "kumsomilohi@gmail.com",
    linkedin: "#",
  },
},
    
    {
      img: a14,
      name: "Mr.Manohara BR",
      specialties: "Business Development Manager",
      socials: {
        email: "manohara.br@gmail.com",
        linkedin: "#",
      },
    },
   {
  img: a122,
  name: "Ms.Payel Sadhu",
  specialties: "Staff Nurse",
  socials: {
    email: "sadhupayel2@gmail.com",
    linkedin: "#",
  },
},
  ];

  const displayed = activeTab === "doctors" ? doctors : team;

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-32">
        <h1 className="text-4xl font-semibold text-[#5B6641] text-center mb-8">
          Meet Our {activeTab === "doctors" ? "Doctors" : "Team"}
        </h1>

        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActiveTab("doctors")}
            className={`px-6 py-2 font-semibold rounded-l-full ${
              activeTab === "doctors"
                ? "bg-[#5B6641] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
Clinical Team          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-6 py-2 font-semibold rounded-r-full ${
              activeTab === "team"
                ? "bg-[#5B6641] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Admin Team
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((e, index) => {
            const isRavindra = e.name === "Dr. Ravindra Mehta";
            const isSameer = e.name === "Dr. Sameer Bansal";
const isAjitha = e.name.trim() === "Dr. Ajitha Tavvala";
            const isNandini = e.name === "Dr.Nandini G";
const isRasheeka = e.name === "Dr. Rasheeka VP";
            const hasProfile =
  isRavindra ||
  isSameer ||
  isAjitha ||
  isNandini ||
  isRasheeka;

            const Card = (
              <motion.div
                className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={e.img}
                  alt={e.name}
                  className="h-56 w-full rounded-t-xl object-cover"
                />

                <div className="flex flex-col justify-center items-center p-4 text-center">
                  <h1 className="font-semibold text-xl">{e.name}</h1>
                  <h3 className="pt-2 text-sm text-gray-600">{e.specialties}</h3>

                  {hasProfile && (
                    <p className="mt-2 text-xs text-gray-500">View Profile →</p>
                  )}

                  <div className="flex gap-4 mt-3">
                    {e.socials?.email &&
                      e.socials.email !== "#" &&
                      e.socials.email !== "" && (
                        <a
                          href={`mailto:${e.socials.email}`}
                          title="Email"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FaEnvelope
                            className="text-[#6b7280] hover:text-[#374151]"
                            size={20}
                          />
                        </a>
                      )}

                    {e.socials?.linkedin &&
                      e.socials.linkedin !== "" &&
                      e.socials.linkedin !== "#" && (
                        <a
                          href={e.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LinkedIn"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FaLinkedin
                            className="text-[#0077b5] hover:text-blue-700"
                            size={20}
                          />
                        </a>
                      )}

                    {e.socials?.twitter &&
                      e.socials.twitter !== "" &&
                      e.socials.twitter !== "#" && (
                        <a
                          href={e.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Twitter (X)"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <FaXTwitter
                            className="text-[#000000] hover:text-gray-800"
                            size={20}
                          />
                        </a>
                      )}
                  </div>
                </div>
              </motion.div>
            );

            return (
              <div key={index}>
                {isRavindra ? (
                  <Link
                    to="/doctors/dr-ravindra-mehta"
                    aria-label="View Dr. Ravindra Mehta profile"
                  >
                    {Card}
                  </Link>
                ) : isSameer ? (
                  <Link
                    to="/doctors/dr-sameer-bansal"
                    aria-label="View Dr. Sameer Bansal profile"
                  >
                    {Card}
                  </Link>
                
              
                ) : isAjitha ? (
                  <Link
                    to="/doctors/dr-ajitha"
                    aria-label="View Dr. Ajitha profile"
                  >
                    {Card}
                  </Link>
                ) : isNandini ? (
                  <Link
                    to="/doctors/nandini-g"
                    aria-label="View Nandini G profile"
                  >
                    {Card}
                  </Link>
                  ) : isRasheeka ? (
  <Link to="/doctors/dr-rasheeka-vp">
    {Card}
  </Link>
                ) : (
                  Card
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorsAndTeam;