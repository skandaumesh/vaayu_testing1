import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaBars, FaTimes, FaStethoscope } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import vaayuLogo from "../assets/img/vaayu-logo.png";

const Z_TOP = 2147483647;

const EKA_CARE_URL =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation";

const SERVICES_COL_1_W = 350;
const SERVICES_COL_2_W = 300;
const SERVICES_COL_3_W = 320;
const SERVICES_GAP = 12;

const RESOURCES_PANEL_W = 260;
const RESOURCES_SUB_PANEL_W = 300;
const PATIENTS_SUB_PANEL_W = 340;
const EVENTS_PANEL_W = 260;

const EMAIL = "admin@vaayuchest.com";
const PHONE_1 = "+91 63649 28680";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [contactPopup, setContactPopup] = useState(null);

  const [desktopOpen, setDesktopOpen] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [activeServiceChildIndex, setActiveServiceChildIndex] = useState(null);
  const [serviceCol2Top, setServiceCol2Top] = useState(0);
  const [serviceCol3Top, setServiceCol3Top] = useState(0);

  const [resourcesOpen, setResourcesOpen] = useState(null);
  const [patientsOpen, setPatientsOpen] = useState(null);
  const [resourcesSubPos, setResourcesSubPos] = useState({ top: 0, left: 0 });
  const [patientsSubPos, setPatientsSubPos] = useState({ top: 0, left: 0 });

  const servicesBtnRef = useRef(null);
  const resourcesBtnRef = useRef(null);
  const eventsBtnRef = useRef(null);
  const closeTimerRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setDesktopOpen(null);
      setActiveServiceIndex(null);
      setActiveServiceChildIndex(null);
      setResourcesOpen(null);
      setPatientsOpen(null);
      setServiceCol2Top(0);
      setServiceCol3Top(0);
    }, 220);
  };

  const toggle = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeAll = () => {
    clearCloseTimer();
    setMenuOpen(false);
    setSubmenuOpen({});
    setContactPopup(null);
    setDesktopOpen(null);
    setActiveServiceIndex(null);
    setActiveServiceChildIndex(null);
    setResourcesOpen(null);
    setPatientsOpen(null);
    setServiceCol2Top(0);
    setServiceCol3Top(0);
  };

  const serviceBranches = useMemo(
    () => [
      { name: "General Respiratory Center", path: "/general-opd" },
      {
        name: "Specialty Respiratory Center",
        path: "/specialty-clinic",
        submenu: [
          {
            name: "Interstitial Lung Disease (ILD)",
            highlight: true,
            path: "/specialty-clinic/ild",
          },
          {
            name: "Asthma",
            highlight: true,
            path: "/specialty-clinic/asthma",
          },
          {
            name: "Chronic Obstructive Pulmonary Disease (COPD)",
            path: "/specialty-clinic/copd",
          },
          { name: "Sarcoidosis", path: "/specialty-clinic/sarcoidosis" },
          {
            name: "Pulmonary Hypertension",
            path: "/specialty-clinic/pulmonary-hypertension",
          },
        ],
      },
      {
        name: "Rehabilitation services",
        path: "/rehab-wellness",
        submenu: [
          {
            name: "Pulmonary Rehabilitation",
            path: "/pulmonary-rehab/pulmonary",
          },
          {
            name: "Cardiac Rehabilitation",
            path: "/pulmonary-rehab/cardiac",
          },
          {
            name: "Integrated Cardio Pulmonary",
            path: "/rehab-wellness/integrated-cardio-pulmonary",
          },
          { name: "Cancer Rehab", path: "/rehab-wellness/cancer-rehab" },
        ],
      },
      {
        name: "Occupational Therapy & Pain Management",
        path: "/rehab-wellness/therapy",
        submenu: [
          {
            name: "Occupational Therapy",
            path: "/rehab-wellness/occupational-therapy",
          },
          {
            name: "Pain Management",
            path: "/pulmonary-rehab/pain-management",
          },
        ],
      },
      {
        name: "Wellness & Naturopathy",
        path: "/rehab-wellness/wellness",
        submenu: [
          { name: "Sleep Wellness", path: "/sleep-clinic" },
          { name: "Allergy Management", path: "/allergy-immunology" },
          {
            name: "Weight Management",
            path: "/allied-services/weight-management",
          },
          {
            name: "Stress Management",
            path: "/rehab-wellness/stress-management",
          },
          {
            name: "Clinical Yoga",
            path: "/rehab-wellness/clinical-yoga",
          },
        ],
      },
      {
        name: "Comprehensive Sleep Center",
        path: "/sleep-clinic",
        submenu: [
          { name: "Snoring", path: "/sleep-clinic/snoring" },
          {
            name: "Obstructive Sleep Apnea (OSA)",
            path: "/sleep-clinic/osa",
          },
          { name: "Insomnia", path: "/sleep-clinic/insomnia" },
          { name: "Parasomnias", path: "/sleep-clinic/parasomnias" },
        ],
      },
      {
        name: "Allergy and Immunology Center",
        path: "/allergy-immunology",
        submenu: [
          {
            name: "Allergy Testing",
            path: "/allergy-immunology/allergy-testing",
          },
          {
            name: "Immunotherapy",
            path: "/allergy-immunology/immunotherapy",
          },
        ],
      },
      {
        name: "Allied Services",
        path: "/allied-services",
        submenu: [
          { name: "ENT", path: "/allied-services/ent" },
          {
            name: "Pediatric Pulmonology",
            path: "/allied-services/pediatric-pulmonology",
          },
          {
            name: "Clinical Psychology",
            path: "/allied-services/clinical-psychology",
          },
          { name: "Diet and Nutrition", path: "/allied-services/diet" },
        ],
      },
      {
        name: "Home Care Services",
        path: "/home-care",
        submenu: [
          { name: "Home Nursing", path: "/home-care/home-nursing" },
          { name: "Home Testing", path: "/home-care/home-testing" },
          { name: "Home Rehabilitation", path: "/home-care/home-rehab" },
          {
            name: "Home Delivery of Medications",
            path: "/home-care/Medications",
          },
          {
            name: "Home Injections and Antibiotics",
            path: "/home-care/InjectionsAntibiotics",
          },
        ],
      },
      {
        name: "Preventive Respiratory Center",
        path: "/preventive-clinics",
        submenu: [
          {
            name: "Tobacco Cessation",
            path: "/preventive-clinics/tobacco-cessation",
          },
          {
            name: "Respiratory Health Checks",
            path: "/preventive-clinics/health-checks",
          },
        ],
      },
    ],
    []
  );

  const patientEducationLinks = useMemo(
    () => [
      { name: "Asthma", path: "/specialty-clinic/asthma" },
      {
        name: "Chronic Obstructive Pulmonary Disease (COPD)",
        path: "/specialty-clinic/copd",
      },
      {
        name: "Interstitial Lung Disease (ILD)",
        path: "/specialty-clinic/ild",
      },
      { name: "Sarcoidosis", path: "/specialty-clinic/sarcoidosis" },
      {
        name: "Bronchiectasis",
        path: "/patient-resources/education/bronchiectasis",
      },
      {
        name: "Pulmonary Hypertension",
        path: "/specialty-clinic/pulmonary-hypertension",
      },
      {
        name: "Tuberculosis",
        path: "/patient-resources/education/tuberculosis",
      },
      {
        name: "Obstructive Sleep Apnea (OSA)",
        path: "/sleep-clinic/osa",
      },
      {
        name: "Lung Cancer",
        path: "/patient-resources/education/lung-cancer",
      },
      {
        name: "Lung Transplant",
        path: "/patient-resources/education/lung-transplant",
      },
      {
        name: "Critical Care",
        path: "/patient-resources/education/critical-care",
      },
      { name: "Blogs", path: "/blogs" },
    ],
    []
  );

  const openDesktopMenu = (key, ref) => {
    clearCloseTimer();
    setDesktopOpen(key);
    setActiveServiceIndex(null);
    setActiveServiceChildIndex(null);
    setResourcesOpen(null);
    setPatientsOpen(null);
    setServiceCol2Top(0);
    setServiceCol3Top(0);

    if (ref?.current) {
      const r = ref.current.getBoundingClientRect();
      setMenuPos({ top: r.bottom + 8, left: r.left });
    }
  };

  useEffect(() => {
    const onScrollResize = () => {
      if (!desktopOpen) return;

      const ref =
        desktopOpen === "services"
          ? servicesBtnRef
          : desktopOpen === "resources"
          ? resourcesBtnRef
          : eventsBtnRef;

      if (ref?.current) {
        const r = ref.current.getBoundingClientRect();
        setMenuPos({ top: r.bottom + 8, left: r.left });
      }
    };

    window.addEventListener("scroll", onScrollResize, true);
    window.addEventListener("resize", onScrollResize);

    return () => {
      window.removeEventListener("scroll", onScrollResize, true);
      window.removeEventListener("resize", onScrollResize);
    };
  }, [desktopOpen]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const openResourcesSub = (key, anchorEl) => {
    clearCloseTimer();
    setResourcesOpen(key);
    setPatientsOpen(null);

    if (!anchorEl) return;

    const r = anchorEl.getBoundingClientRect();
    let left = r.right + 12;
    let top = r.top;

    if (left + RESOURCES_SUB_PANEL_W > window.innerWidth - 8) {
      left = r.left - RESOURCES_SUB_PANEL_W - 12;
    }

    if (top + 520 > window.innerHeight - 8) {
      top = Math.max(8, window.innerHeight - 520 - 8);
    }

    setResourcesSubPos({ top, left });
  };

  const openPatientsEducation = (anchorEl) => {
    clearCloseTimer();
    setPatientsOpen("education");

    if (!anchorEl) return;

    const r = anchorEl.getBoundingClientRect();
    let left = r.right + 12;
    let top = r.top;

    if (left + PATIENTS_SUB_PANEL_W > window.innerWidth - 8) {
      left = r.left - PATIENTS_SUB_PANEL_W - 12;
    }

    if (top + 520 > window.innerHeight - 8) {
      top = Math.max(8, window.innerHeight - 520 - 8);
    }

    setPatientsSubPos({ top, left });
  };

  const servicesColumn2 =
    activeServiceIndex !== null
      ? serviceBranches[activeServiceIndex]?.submenu || []
      : [];

  const servicesColumn3 =
    activeServiceIndex !== null && activeServiceChildIndex !== null
      ? serviceBranches[activeServiceIndex]?.submenu?.[activeServiceChildIndex]
          ?.submenu || []
      : [];

  const servicesDropdownWidth =
    SERVICES_COL_1_W +
    (servicesColumn2.length ? SERVICES_GAP + SERVICES_COL_2_W : 0) +
    (servicesColumn3.length ? SERVICES_GAP + SERVICES_COL_3_W : 0);

  const servicesDropdownLeft = clamp(
    menuPos.left,
    8,
    Math.max(8, window.innerWidth - servicesDropdownWidth - 8)
  );

  const DesktopShell = ({ children, width }) => (
    <div
      className="fixed"
      style={{ top: menuPos.top, left: menuPos.left, zIndex: Z_TOP }}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      <div
        className="bg-[#78866B] rounded-[10px] shadow-lg overflow-hidden"
        style={{ width }}
      >
        {children}
      </div>
    </div>
  );

  const FixedShell = ({ pos, children, width }) => (
    <div
      className="fixed"
      style={{ top: pos.top, left: pos.left, zIndex: Z_TOP }}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      <div
        className="bg-[#78866B] rounded-[10px] shadow-lg overflow-hidden"
        style={{ width }}
      >
        {children}
      </div>
    </div>
  );

  return (
    <header className="w-full text-white font-sans fixed top-0 left-0 z-[99999]">
      <div className="hidden md:flex bg-[#5B6641] px-5 py-2 lg:px-32 items-center justify-between text-sm">
       <div className="flex-shrink-0">
  <RouterLink
    to="/"
    onClick={closeAll}
    className="flex items-center gap-3"
  >
    <img
      src={vaayuLogo}
alt="Vaayu Chest and Sleep Specialists"
      className="h-16 sm:h-20 md:h-24 w-auto object-contain"
    />

    <div className="leading-tight">
      <p className="text-[#fff8ef] font-bold text-lg md:text-xl tracking-wide">
        Vaayu
      </p>
      <p className="text-[#d7dec9] font-semibold text-xs md:text-sm">
Chest & Sleep Specialty center      </p>
    </div>
  </RouterLink>
</div>

        <div className="hidden md:flex items-center gap-6 ml-auto text-white text-xs sm:text-sm">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-green-100">
            <AiOutlineMail className="text-lg" />
            <span>{EMAIL}</span>
          </a>

          <a href="tel:+916364928680" className="flex items-center gap-2 hover:text-green-100">
            <AiOutlinePhone className="text-lg" />
<span>{PHONE_1}</span>
          </a>

          <a href={EKA_CARE_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-100 text-[#5B6641] font-bold px-5 py-2 rounded shadow-lg animate-pulse hover:bg-yellow-300 transition duration-300">
              BOOK AN APPOINTMENT
            </button>
          </a>
        </div>
      </div>

      <div className="md:hidden bg-white text-[#4f5b3c] border-b border-[#e5eadc] shadow-[0_8px_24px_rgba(91,102,65,0.16)] relative z-[100000]">
        <div className="px-4 py-3 flex items-center justify-between gap-3 relative z-[100000]">
         <RouterLink
  to="/"
  onClick={closeAll}
  className="flex items-center gap-2 relative z-[100001]"
>
  <img
    src={vaayuLogo}
alt="Vaayu Chest and Sleep Specialists"
    className="h-[54px] w-auto object-contain"
  />

  <div className="leading-tight">
    <p className="text-[#61724e] font-bold text-base">
      Vaayu
    </p>
 <p className="text-[#61724e] font-semibold text-[10px]">
  Chest & Sleep Specialty Center
</p>
  </div>
</RouterLink>

          <div className="flex items-center gap-2 relative z-[100000]">
            <button type="button" onClick={() => { setMenuOpen(false); setContactPopup(contactPopup === "mail" ? null : "mail"); }} aria-label="Show email" className="relative z-[100001] h-10 w-10 rounded-full bg-[#eef4e9] text-[#5B6641] flex items-center justify-center shadow-sm cursor-pointer">
              <AiOutlineMail size={20} />
            </button>

            <button type="button" onClick={() => { setMenuOpen(false); setContactPopup(contactPopup === "phone" ? null : "phone"); }} aria-label="Show phone number" className="relative z-[100001] h-10 w-10 rounded-full bg-[#eef4e9] text-[#5B6641] flex items-center justify-center shadow-sm cursor-pointer">
              <AiOutlinePhone size={20} />
            </button>

            <button type="button" onClick={() => window.open(EKA_CARE_URL, "_blank", "noopener,noreferrer")} aria-label="Book appointment" className="relative z-[100001] h-10 w-10 rounded-full bg-[#5B6641] text-white flex items-center justify-center shadow-md cursor-pointer">
<FaStethoscope size={17} />            </button>

            <button type="button" onClick={() => { setContactPopup(null); setMenuOpen(!menuOpen); }} aria-label={menuOpen ? "Close menu" : "Open menu"} className="relative z-[100001] h-10 w-10 rounded-full bg-[#6A734F] text-white flex items-center justify-center shadow-md cursor-pointer">
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {contactPopup && (
          <div className="px-4 pb-4 relative z-[100002]">
            <div className="bg-[#f8faf3] border border-[#dfe6d4] rounded-2xl shadow-xl p-4 text-[#3f4a2f]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#6A734F] font-bold mb-1">
                    {contactPopup === "mail" ? "Email Us" : "Call Us"}
                  </p>

                  {contactPopup === "mail" ? (
                    <>
                      <p className="font-bold text-[15px] break-all">{EMAIL}</p>
                      <a href={`mailto:${EMAIL}`} className="inline-flex mt-3 bg-[#5B6641] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Open Mail
                      </a>
                    </>
                  ) : (
                    <>
  <p className="font-bold text-[15px]">{PHONE_1}</p>

  <div className="flex flex-wrap gap-2 mt-3">
    <a
      href="tel:+916364928680"
      className="inline-flex bg-[#5B6641] text-white px-4 py-2 rounded-full text-sm font-semibold"
    >
      Call Now
    </a>
  </div>
</>
                  )}
                </div>

                <button type="button" onClick={() => setContactPopup(null)} className="h-8 w-8 rounded-full bg-white text-[#5B6641] flex items-center justify-center shadow-sm" aria-label="Close contact popup">
                  <FaTimes size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {menuOpen && (
          <div className="px-4 pb-4 relative z-[100000]">
            <div className="bg-white border border-[#e6eadf] rounded-2xl shadow-xl max-h-[78vh] overflow-y-auto p-3">
              <div className="grid grid-cols-2 gap-2 mb-3">
              {/*
  <RouterLink to="/" onClick={closeAll} className="py-3 px-3 rounded-xl bg-[#f5f7ef] font-semibold text-center">
                  Home
                </RouterLink>
*/}

<RouterLink to="/" onClick={closeAll} className="py-3 px-3 rounded-xl bg-[#f5f7ef] font-semibold text-center">
  Home 
</RouterLink>
                <RouterLink to="/about" onClick={closeAll} className="py-3 px-3 rounded-xl bg-[#f5f7ef] font-semibold text-center">
                  About
                </RouterLink>

                <RouterLink to="/contact" onClick={closeAll} className="col-span-2 py-3 px-3 rounded-xl bg-[#5B6641] text-white font-semibold text-center shadow-sm">
                  Contact
                </RouterLink>
              </div>

              <div className="space-y-2">
                <button type="button" className="w-full flex justify-between items-center py-3 px-3 rounded-xl bg-[#eef4e9] text-[#3f4a2f] font-semibold" onClick={() => toggle("services")}>
                  <span>OUR SERVICES</span>
                  <FiChevronDown className={`transition-transform ${submenuOpen.services ? "rotate-180" : ""}`} />
                </button>

                {submenuOpen.services && (
                  <div className="pl-2 border-l-2 border-[#dfe6d4] space-y-1">
                    {serviceBranches.map((item, index) => {
                      const key = `svc-${index}`;
                      return (
                        <div key={key}>
                          {item.submenu ? (
                            <>
                              <button type="button" className="w-full flex justify-between items-center py-2.5 px-3 text-left rounded-lg hover:bg-[#f5f7ef]" onClick={() => toggle(key)}>
                                <span>{item.name}</span>
                                <FiChevronDown className={`transition-transform ${submenuOpen[key] ? "rotate-180" : ""}`} />
                              </button>

                              {submenuOpen[key] && (
                                <div className="ml-3 mt-1 space-y-1 text-sm">
                                  {item.submenu.map((sub, childIndex) => {
                                    const childKey = `${key}-child-${childIndex}`;
                                    return (
                                      <div key={childKey}>
                                        {sub.submenu ? (
                                          <>
                                            <button type="button" className="w-full flex justify-between items-center py-2 px-3 text-left rounded-lg bg-[#fafbf6]" onClick={() => toggle(childKey)}>
                                              <span>{sub.name}</span>
                                              <FiChevronDown className={`transition-transform ${submenuOpen[childKey] ? "rotate-180" : ""}`} />
                                            </button>

                                            {submenuOpen[childKey] && (
                                              <div className="ml-3 mt-1 space-y-1 text-sm">
                                                {sub.submenu.map((leaf) => (
                                                  <RouterLink key={leaf.name} to={leaf.path} onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#f7f9f2]">
                                                    {leaf.name}
                                                  </RouterLink>
                                                ))}
                                              </div>
                                            )}
                                          </>
                                        ) : (
                                          <RouterLink to={sub.path} onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">
                                            {sub.name}
                                            {sub.highlight && <span className="text-[#5B6641] font-semibold"> - Center of Excellence</span>}
                                          </RouterLink>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </>
                          ) : (
                            <RouterLink to={item.path} onClick={closeAll} className="block py-2.5 px-3 rounded-lg hover:bg-[#f5f7ef]">
                              {item.name}
                            </RouterLink>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                <button type="button" className="w-full flex justify-between items-center py-3 px-3 rounded-xl bg-[#eef4e9] text-[#3f4a2f] font-semibold" onClick={() => toggle("resources")}>
                  <span>RESOURCES</span>
                  <FiChevronDown className={`transition-transform ${submenuOpen.resources ? "rotate-180" : ""}`} />
                </button>

                {submenuOpen.resources && (
                  <div className="pl-2 border-l-2 border-[#dfe6d4] space-y-1">
                    <button type="button" className="w-full flex justify-between items-center py-2.5 px-3 text-left rounded-lg hover:bg-[#f5f7ef]" onClick={() => toggle("res-patients")}>
                      <span>Patients</span>
                      <FiChevronDown className={`transition-transform ${submenuOpen["res-patients"] ? "rotate-180" : ""}`} />
                    </button>

                    {submenuOpen["res-patients"] && (
                      <div className="ml-3 mt-1 space-y-1 text-sm">
                        <button type="button" className="w-full flex justify-between items-center py-2 px-3 text-left rounded-lg bg-[#fafbf6]" onClick={() => toggle("res-education")}>
                          <span>Education</span>
                          <FiChevronDown className={`transition-transform ${submenuOpen["res-education"] ? "rotate-180" : ""}`} />
                        </button>

                        {submenuOpen["res-education"] && (
                          <div className="ml-3 mt-1 space-y-1 text-sm">
                            {patientEducationLinks.map((link) => (
                              <RouterLink key={link.name} to={link.path} onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#f7f9f2]">
                                {link.name}
                              </RouterLink>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <button type="button" className="w-full flex justify-between items-center py-2.5 px-3 text-left rounded-lg hover:bg-[#f5f7ef]" onClick={() => toggle("res-professionals")}>
                      <span>Professionals</span>
                      <FiChevronDown className={`transition-transform ${submenuOpen["res-professionals"] ? "rotate-180" : ""}`} />
                    </button>

                    {submenuOpen["res-professionals"] && (
                      <div className="ml-3 mt-1 space-y-1 text-sm">
                        <RouterLink to="/Procedural-Training" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">Procedural Video&apos;s</RouterLink>
                        <RouterLink to="/resources/innovations" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">Our Innovations</RouterLink>
                        <RouterLink to="/resources/publications" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">Our Publications</RouterLink>
                        <RouterLink to="/resources/job-openings" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">Job Openings</RouterLink>
                      </div>
                    )}

                    <RouterLink to="/blogs" onClick={closeAll} className="block py-2.5 px-3 rounded-lg hover:bg-[#f5f7ef]">Blogs</RouterLink>
                    <RouterLink to="/gallery" onClick={closeAll} className="block py-2.5 px-3 rounded-lg hover:bg-[#f5f7ef]">Gallery</RouterLink>
                  </div>
                )}

                <button type="button" className="w-full flex justify-between items-center py-3 px-3 rounded-xl bg-[#eef4e9] text-[#3f4a2f] font-semibold" onClick={() => toggle("events")}>
                  <span>EVENTS</span>
                  <FiChevronDown className={`transition-transform ${submenuOpen.events ? "rotate-180" : ""}`} />
                </button>

                {submenuOpen.events && (
                  <div className="pl-2 border-l-2 border-[#dfe6d4] space-y-1 text-sm">
                    <RouterLink to="/revive-2026" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">REVIVE 2026</RouterLink>
                    <RouterLink to="/capi-2025" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">CAPI 2025</RouterLink>
                    <RouterLink to="/rehab-conference" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">REVIVE 2025</RouterLink>
                    <RouterLink to="/camp" onClick={closeAll} className="block py-2 px-3 rounded-lg bg-[#fafbf6]">Camp</RouterLink>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-2 pt-2">
                  <RouterLink to="/patient-resources/testimonials" onClick={closeAll} className="py-3 px-3 rounded-xl bg-[#f5f7ef] font-semibold">Testimonials</RouterLink>
                  <RouterLink to="/social-impact" onClick={closeAll} className="py-3 px-3 rounded-xl bg-[#f5f7ef] font-semibold">Social Impact</RouterLink>
                  <RouterLink to="/media-spotlight" onClick={closeAll} className="py-3 px-3 rounded-xl bg-[#f5f7ef] font-semibold">Media Spotlight</RouterLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <nav className="hidden md:block bg-[#6A734F] px-5 lg:px-32 overflow-visible relative z-[99999]">
        <div className="flex items-center py-3 justify-between lg:justify-center">
          <ul className="hidden lg:flex gap-6 uppercase text-sm items-center mx-auto">

            <li>
 <RouterLink to="/" className="hover:text-white" onClick={closeAll}>
  Home
</RouterLink>
</li>

      {/*      <li><RouterLink to="/" className="hover:text-white" onClick={closeAll}>Home</RouterLink></li>*/}
{/*
<li>
  <RouterLink
    to="/home-new"
    className="hover:text-white"
    onClick={closeAll}
  >
    Home 
  </RouterLink>
</li>*/}


{/*
<li>
  <RouterLink
    to="/home-new"
    className="hover:text-white"
    onClick={closeAll}
  >
    Home New
  </RouterLink>
</li>
*/}


            <li><RouterLink to="/about" className="hover:text-white" onClick={closeAll}>About</RouterLink></li>

            <li onMouseEnter={() => openDesktopMenu("services", servicesBtnRef)} onMouseLeave={scheduleClose}>
              <button ref={servicesBtnRef} type="button" className="flex items-center gap-1 py-2 select-none cursor-pointer bg-transparent border-0 text-white">
                OUR SERVICES <FiChevronDown className={`mt-[1px] transition-transform duration-200 ${desktopOpen === "services" ? "rotate-180" : ""}`} />
              </button>
              
            </li>

            <li onMouseEnter={() => openDesktopMenu("resources", resourcesBtnRef)} onMouseLeave={scheduleClose}>
              <button ref={resourcesBtnRef} type="button" className="flex items-center gap-1 py-2 select-none cursor-pointer bg-transparent border-0 text-white">
                RESOURCES <FiChevronDown className={`mt-[1px] transition-transform duration-200 ${desktopOpen === "resources" ? "rotate-180" : ""}`} />
              </button>
            </li>

            <li onMouseEnter={() => openDesktopMenu("events", eventsBtnRef)} onMouseLeave={scheduleClose}>
              <button ref={eventsBtnRef} type="button" className="flex items-center gap-1 py-2 select-none cursor-pointer bg-transparent border-0 text-white">
                EVENTS <FiChevronDown className={`mt-[1px] transition-transform duration-200 ${desktopOpen === "events" ? "rotate-180" : ""}`} />
              </button>
            </li>

            <li><RouterLink to="/patient-resources/testimonials" className="hover:text-white" onClick={closeAll}>Testimonials</RouterLink></li>
            <li><RouterLink to="/social-impact" className="hover:text-white" onClick={closeAll}>Social Impact</RouterLink></li>
            <li><RouterLink to="/media-spotlight" className="hover:text-white" onClick={closeAll}>Media Spotlight</RouterLink></li>
            <li><RouterLink to="/contact" className="hover:text-white" onClick={closeAll}>Contact</RouterLink></li>
          </ul>

          {desktopOpen === "services" && (
            <div className="fixed" style={{ top: menuPos.top, left: servicesDropdownLeft, zIndex: Z_TOP }} onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
              <div className="flex items-start relative" style={{ gap: `${SERVICES_GAP}px` }}>
                <div className="bg-[#78866B] rounded-[10px] shadow-lg overflow-hidden" style={{ width: SERVICES_COL_1_W }}>
                  <ul className="divide-y divide-[#6A734F]">
                    {serviceBranches.map((item, index) => {
                      const hasSub = !!item.submenu?.length;
                      const isActive = activeServiceIndex === index;
                      return (
                        <li key={item.name} onMouseEnter={(e) => {
                          clearCloseTimer();
                          if (hasSub) {
                            setActiveServiceIndex(index);
                            setActiveServiceChildIndex(null);
                            setServiceCol2Top(e.currentTarget.offsetTop);
                            setServiceCol3Top(0);
                          } else {
                            setActiveServiceIndex(null);
                            setActiveServiceChildIndex(null);
                            setServiceCol2Top(0);
                            setServiceCol3Top(0);
                          }
                        }}>
                          <RouterLink to={item.path} className={`block px-4 py-3 text-white ${isActive ? "bg-[#556B2F]" : "hover:bg-[#556B2F]"}`} onClick={closeAll}>
                            <span className="flex items-center justify-between w-full">
                              <span className="pr-2 whitespace-nowrap">{item.name}</span>
                              {hasSub && <FiChevronDown className="-rotate-90 opacity-80 shrink-0" />}
                            </span>
                          </RouterLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {servicesColumn2.length > 0 && (
                  <div className="bg-[#78866B] rounded-[10px] shadow-lg overflow-hidden" style={{ width: SERVICES_COL_2_W, marginTop: `${serviceCol2Top}px` }}>
                    <ul className="divide-y divide-[#6A734F]">
                      {servicesColumn2.map((sub, childIndex) => {
                        const hasChildSub = !!sub.submenu?.length;
                        const isActive = activeServiceChildIndex === childIndex;
                        return (
                          <li key={sub.name} onMouseEnter={(e) => {
                            clearCloseTimer();
                            if (hasChildSub) {
                              setActiveServiceChildIndex(childIndex);
                              setServiceCol3Top(e.currentTarget.offsetTop);
                            } else {
                              setActiveServiceChildIndex(null);
                              setServiceCol3Top(0);
                            }
                          }}>
                            <RouterLink to={sub.path} className={`block px-4 py-3 text-white ${isActive ? "bg-[#556B2F]" : "hover:bg-[#556B2F]"}`} onClick={closeAll}>
                              <span className="flex items-center justify-between w-full">
                                <span className="pr-2">{sub.name}{sub.highlight && <span className="text-[#d7dec9 font-semibold"> - Center of Excellence</span>}</span>
                                {hasChildSub && <FiChevronDown className="-rotate-90 opacity-80 shrink-0" />}
                              </span>
                            </RouterLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {servicesColumn3.length > 0 && (
                  <div className="bg-[#78866B] rounded-[10px] shadow-lg overflow-hidden" style={{ width: SERVICES_COL_3_W, marginTop: `${serviceCol2Top + serviceCol3Top}px` }}>
                    <ul className="divide-y divide-[#6A734F]">
                      {servicesColumn3.map((leaf) => (
                        <li key={leaf.name}>
                          <RouterLink to={leaf.path} className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>
                            {leaf.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {desktopOpen === "resources" && (
            <DesktopShell width={RESOURCES_PANEL_W}>
              <ul className="divide-y divide-[#6A734F]">
                <li className="px-4 py-3 text-white whitespace-nowrap cursor-default" onMouseEnter={(e) => openResourcesSub("patients", e.currentTarget)}>
                  <span className="flex items-center justify-between w-full"><span className="pr-2">Patients</span><FiChevronDown className="-rotate-90 opacity-80 shrink-0" /></span>
                </li>
                <li className="px-4 py-3 text-white whitespace-nowrap cursor-default" onMouseEnter={(e) => openResourcesSub("professionals", e.currentTarget)}>
                  <span className="flex items-center justify-between w-full"><span className="pr-2">Professionals</span><FiChevronDown className="-rotate-90 opacity-80 shrink-0" /></span>
                </li>
                <li><RouterLink to="/blogs" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>Blogs</RouterLink></li>
                <li><RouterLink to="/gallery" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>Gallery</RouterLink></li>
              </ul>
            </DesktopShell>
          )}

          {desktopOpen === "resources" && resourcesOpen === "patients" && (
            <FixedShell pos={resourcesSubPos} width={RESOURCES_SUB_PANEL_W}>
              <ul className="divide-y divide-[#6A734F]">
                <li className="px-4 py-3 text-white whitespace-nowrap cursor-default" onMouseEnter={(e) => openPatientsEducation(e.currentTarget)}>
                  <span className="flex items-center justify-between w-full"><span className="pr-2">Education</span><FiChevronDown className="-rotate-90 opacity-80 shrink-0" /></span>
                </li>
              </ul>
            </FixedShell>
          )}

          {desktopOpen === "resources" && resourcesOpen === "patients" && patientsOpen === "education" && (
            <FixedShell pos={patientsSubPos} width={PATIENTS_SUB_PANEL_W}>
              <ul className="divide-y divide-[#6A734F]">
                {patientEducationLinks.map((link) => (
                  <li key={link.name}>
                    <RouterLink to={link.path} className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>{link.name}</RouterLink>
                  </li>
                ))}
              </ul>
            </FixedShell>
          )}

          {desktopOpen === "resources" && resourcesOpen === "professionals" && (
            <FixedShell pos={resourcesSubPos} width={RESOURCES_SUB_PANEL_W}>
              <ul className="divide-y divide-[#6A734F]">
                <li><RouterLink to="/Procedural-Training" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>Procedural Video&apos;s</RouterLink></li>
                <li><RouterLink to="/resources/innovations" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>Our Innovations</RouterLink></li>
                <li><RouterLink to="/resources/publications" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>Our Publications</RouterLink></li>
                <li><RouterLink to="/resources/job-openings" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>Job Openings</RouterLink></li>
              </ul>
            </FixedShell>
          )}

          {desktopOpen === "events" && (
            <DesktopShell width={EVENTS_PANEL_W}>
              <ul className="divide-y divide-[#6A734F]">
                <li><RouterLink to="/revive-2026" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>REVIVE 2026</RouterLink></li>
                <li><RouterLink to="/capi-2025" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>CAPI 2025</RouterLink></li>
                <li><RouterLink to="/rehab-conference" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>REVIVE 2025</RouterLink></li>
                <li><RouterLink to="/camp" className="block px-4 py-3 text-white hover:bg-[#556B2F]" onClick={closeAll}>Camp</RouterLink></li>
              </ul>
            </DesktopShell>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;