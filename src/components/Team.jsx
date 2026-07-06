import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ✅ Import doctor images
import cc from "../assets/img/cc.png";
import aa from "../assets/img/aa.png";
import bb from "../assets/img/bb.png";
import dd from "../assets/img/dd.png";
import ee from "../assets/img/ee.png";
import ff from "../assets/img/ff.png";
import gg from "../assets/img/gg.png";
import hh from "../assets/img/hh.png";
import ii from "../assets/img/ii.png";

const Team = () => {
  const data = [
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
      img: dd,
      name: "Dr. Rohith Vadala",
      specialties: "Consultant Pulmonologist",
      socials: {
        email: "rohith.vadala@vaayuclinic.com",
        linkedin: "https://linkedin.com/in/rohithvadala",
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
      img: hh,
      name: "Dr. Yogita Hathmode",
      specialties: "Head, Pulmonary Wellness & Rehabilitation",
      socials: {
        email: "rehabilitation@vaayuchest.com",
        linkedin: "https://www.linkedin.com/in/dr-yogita-hatmode-pt-mpt-crd-m-i-a-f-t-7048a6190/",
      },
    },
    {
      img: ii,
      name: "Dr. Anmol Thorbole",
      specialties: "Head, Respiratory Therapy Services",
      socials: {
        email: "anmol.thorbole@vaayuclinic.com",
        linkedin: "https://linkedin.com/in/anmolthorbole",
      },
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-32">
        <h1 className="text-4xl font-semibold text-[#5B6641] text-center mb-12">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((e, index) => (
            <div
              key={index}
              className="h-[430px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white"
            >
              <img
                src={e.img}
                alt={e.name}
                className="h-56 w-full rounded-t-xl object-cover"
              />
              <div className="flex flex-col justify-center items-center p-4 text-center">
                <h1 className="font-semibold text-xl">{e.name}</h1>
                <h3 className="pt-2 text-sm text-gray-600">{e.specialties}</h3>
                <div className="flex gap-4 mt-3">
                  {e.socials?.email && (
                    <a href={`mailto:${e.socials.email}`} title="Email">
                      <FaEnvelope className="text-[#6b7280] hover:text-[#374151]" size={20} />
                    </a>
                  )}
                  {e.socials?.linkedin && (
                    <a href={e.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <FaLinkedin className="text-[#0077b5] hover:text-blue-700" size={20} />
                    </a>
                  )}
                  {e.socials?.twitter && (
                    <a href={e.socials.twitter} target="_blank" rel="noopener noreferrer" title="Twitter (X)">
                      <FaXTwitter className="text-[#000000] hover:text-gray-800" size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
