import React, { useEffect, useRef, useState } from "react";
import VisitPopup from "./VisitPopup";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhoneCall, FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const footerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [manuallyClosed, setManuallyClosed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !manuallyClosed) {
          setShowPopup(true);
          const timer = setTimeout(() => setShowPopup(false), 5000);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, [manuallyClosed]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setManuallyClosed(true);
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Testimonials", path: "/patient-resources/testimonials" },
    { label: "Social Impact", path: "/social-impact" },
    { label: "Media Spotlight", path: "/media-spotlight" },
    { label: "Contact", path: "/contact" },
  ];
            {/* Critical Care */}



  {/*const careLinks = [
    {
      label: "Oxygen Therapy & Ventilation",
      path: "/patient-resources/critical-care/oxygen-therapy",
    },
    {
      label: "ICU Bronchoscopy Program",
      path: "/patient-resources/critical-care/icu-bronchoscopy",
    },
    {
      label: "Respiratory Therapy Program",
      path: "/patient-resources/critical-care/respiratory-therapy",
    },
    {
      label: "ECMO Programme",
      path: "/patient-resources/critical-care/ecmo",
    },
  ];
*/}
  return (
    <>
      {showPopup && <VisitPopup onClose={handleClosePopup} />}

      <footer
        ref={footerRef}
        className="relative overflow-hidden text-white mt-8 md:mt-0"
        style={{
          background:
            "linear-gradient(135deg, #394125 0%, #394125 48%, #394125 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#ffffff_0,transparent_32%)]" />

<div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16"><div className="grid grid-cols-1 md:grid-cols-[1.3fr_.9fr_1.1fr] gap-14 lg:gap-20 items-start">            {/* Brand */}
<div className="max-w-[340px]">             
<h2 className="text-[2rem] leading-[1.25] font-[650] tracking-[-0.03em]">                Vaayu Chest & Sleep Specialty Center
              </h2>
<p className="mt-6 text-[15px] leading-8 text-white/78 max-w-[300px]">                Comprehensive respiratory, sleep, allergy, ENT and rehabilitation
                care designed to help patients breathe better, sleep better and
                live healthier.
              </p>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/company/vaayu-chest-and-sleep-specialist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#5B6641] flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
           <a
  href="https://www.instagram.com/vaayu_chest_and_sleep/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#5B6641] flex items-center justify-center transition"
  aria-label="Instagram"
>
  <FaInstagram />
</a>
                <a
                  href="https://www.youtube.com/@Vaayuchestandsleep0923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#5B6641] flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
              <nav className="space-y-3 text-sm">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition group"
                  >
                    <FiArrowRight className="text-xs opacity-60 group-hover:translate-x-1 transition" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Critical Care */}
            
            {/*   <div>
              <h3 className="text-lg font-semibold mb-5">Critical Care</h3>
              <nav className="space-y-3 text-sm">
                {careLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="flex items-start gap-2 text-white/80 hover:text-white transition group"
                  >
                    <FiArrowRight className="text-xs mt-1 opacity-60 group-hover:translate-x-1 transition" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
*/}
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-5">Contact Us</h3>

              <div className="space-y-4 text-sm text-white/80">
                <div className="flex gap-3">
                  <FiMapPin className="mt-1 text-white" />
                  <p>Jayanagar, Bengaluru</p>
                </div>

                <a
                  href="mailto:admin@vaayuchest.com"
                  className="flex gap-3 hover:text-white transition"
                >
                  <FiMail className="mt-1 text-white" />
                  admin@vaayuchest.com
                </a>

                <a
                  href="tel:+916364928680"
                  className="flex gap-3 hover:text-white transition"
                >
                  <FiPhoneCall className="mt-1 text-white" />
                  <span>
                    +91 63649 28680 <br />
                  </span>
                </a>
              </div>

           <a
  href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center mt-6 px-5 py-3 rounded-full bg-white text-[#5B6641] font-semibold text-sm hover:bg-[#E0F7F3] transition"
>
  Book / Enquire Now
</a>
            </div>
          </div>

          <div className="border-t border-white/15 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
            <p>
              © {new Date().getFullYear()} Vaayu Chest & Sleep Specialists. All
              rights reserved.
            </p>
            <p>
  Developed by{" "}
  <a
    href="https://tech-sculpt.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white font-semibold hover:text-[#E0F7F3] transition"
  >
    TechSculpt Technologies
  </a>
</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;