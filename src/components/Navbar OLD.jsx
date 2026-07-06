import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import vaayuLogo from "../assets/img/vaayu-logo.png";

const Z_TOP = 2147483647;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  // ✅ Desktop dropdown (fixed)
  const [desktopOpen, setDesktopOpen] = useState(null); // "services" | "resources" | "events" | null
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  // ✅ Desktop SERVICES sub-submenu (fixed)
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [serviceSubPos, setServiceSubPos] = useState({ top: 0, left: 0 });

  // ✅ Desktop RESOURCES nested submenus (fixed)
  const [resourcesOpen, setResourcesOpen] = useState(null); // "patients" | "professionals" | null
  const [patientsOpen, setPatientsOpen] = useState(null); // "education" | null
  const [resourcesSubPos, setResourcesSubPos] = useState({ top: 0, left: 0 });
  const [patientsSubPos, setPatientsSubPos] = useState({ top: 0, left: 0 });

  const servicesBtnRef = useRef(null);
  const resourcesBtnRef = useRef(null);
  const eventsBtnRef = useRef(null);

  // ✅ close delay to allow moving between panels
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

      setResourcesOpen(null);
      setPatientsOpen(null);
    }, 220);
  };

  const toggle = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeAll = () => {
    clearCloseTimer();
    setMenuOpen(false);
    setSubmenuOpen({});
    setDesktopOpen(null);
    setActiveServiceIndex(null);

    setResourcesOpen(null);
    setPatientsOpen(null);
  };

  const openDesktopMenu = (key, ref) => {
    clearCloseTimer();
    setDesktopOpen(key);

    // reset nested states when switching main menu
    setActiveServiceIndex(null);
    setResourcesOpen(null);
    setPatientsOpen(null);

    if (ref?.current) {
      const r = ref.current.getBoundingClientRect();
      setMenuPos({ top: r.bottom + 8, left: r.left });
    }
  };

  // keep fixed dropdown aligned on scroll/resize
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

  const serviceBranches = useMemo(
    () => [
      { name: "General Respiratory Center", path: "/general-opd" },
      {
        name: "Specialty Respiratory Center",
        path: "/specialty-clinic",
        submenu: [
          { name: "Interstitial Lung Disease (ILD)", highlight: true, path: "/specialty-clinic/ild" },
          { name: "Asthma", highlight: true, path: "/specialty-clinic/asthma" },
          { name: "Chronic Obstructive Pulmonary Disease (COPD)", path: "/specialty-clinic/copd" },
          { name: "Sarcoidosis", path: "/specialty-clinic/sarcoidosis" },
          { name: "Pulmonary Hypertension", path: "/specialty-clinic/pulmonary-hypertension" },
        ],
      },
      {
        name: "Pulmonary Wellness & Rehabilitation",
        path: "/pulmonary-rehab",
        submenu: [
          { name: "Pulmonary Rehabilitation", path: "/pulmonary-rehab/pulmonary" },
          { name: "Cardiac Rehabilitation", path: "/pulmonary-rehab/cardiac" },
          { name: "Rehab for pulmonary hypertension", path: "/pulmonary-rehab/PulmonaryHypertensionRehab" },
          { name: "Pain management", path: "/pulmonary-rehab/pain-management" },
        ],
      },
      {
        name: "Comprehensive Sleep Center",
        path: "/sleep-clinic",
        submenu: [
          { name: "Snoring", path: "/sleep-clinic/snoring" },
          { name: "Obstructive Sleep Apnea (OSA)", path: "/sleep-clinic/osa" },
          { name: "Insomnia", path: "/sleep-clinic/insomnia" },
          { name: "Parasomnias", path: "/sleep-clinic/parasomnias" },
        ],
      },
      {
        name: "Allergy and Immunology Center",
        path: "/allergy-immunology",
        submenu: [
          { name: "Allergy Testing", path: "/allergy-immunology/allergy-testing" },
          { name: "Immunotherapy", path: "/allergy-immunology/immunotherapy" },
        ],
      },
      {
        name: "Allied Services",
        path: "/allied-services",
        submenu: [
          { name: "ENT", path: "/allied-services/ent" },
          { name: "Pediatric Pulmonology", path: "/allied-services/pediatric-pulmonology" },
          { name: "Clinical Psychology", path: "/allied-services/clinical-psychology" },
          { name: "Diet and Nutrition", path: "/allied-services/diet" },
          { name: "Weight Management", path: "/allied-services/weight-management" },
        ],
      },
      {
        name: "Home Care Services",
        path: "/home-care",
        submenu: [
          { name: "Home Nursing", path: "/home-care/home-nursing" },
          { name: "Home Testing", path: "/home-care/home-testing" },
          { name: "Home Rehabilitation", path: "/home-care/home-rehab" },
          { name: "Home Delivery of Medications", path: "/home-care/Medications" },
          { name: "Home injections and antibiotics", path: "/home-care/InjectionsAntibiotics" },
        ],
      },
      {
        name: "Preventive Respiratory Center",
        path: "/preventive-clinics",
        submenu: [
          { name: "Tobacco Cessation", path: "/preventive-clinics/tobacco-cessation" },
          { name: "Respiratory Health Checks", path: "/preventive-clinics/health-checks" },
        ],
      },
    ],
    []
  );

  const patientEducationLinks = useMemo(
    () => [
      { name: "Asthma", path: "/specialty-clinic/asthma" },
      { name: "Chronic Obstructive Pulmonary Disease (COPD)", path: "/specialty-clinic/copd" },
      { name: "Interstitial Lung Disease(ILD)", path: "/specialty-clinic/ild" },
      { name: "Sarcoidosis", path: "/specialty-clinic/sarcoidosis" },
      { name: "Bronchiectasis", path: "/patient-resources/education/bronchiectasis" },
      { name: "Pulmonary Hypertension", path: "/specialty-clinic/pulmonary-hypertension" },
      { name: "Tuberculosis", path: "/patient-resources/education/tuberculosis" },
      { name: "Obstructive Sleep Apnea (OSA)", path: "/sleep-clinic/osa" },
      { name: "Lung Cancer", path: "/patient-resources/education/lung-cancer" },
      { name: "Lung Transplant", path: "/patient-resources/education/lung-transplant" },
      { name: "Critical Care", path: "/patient-resources/education/critical-care" },
      { name: "Blogs", path: "/blogs" },
    ],
    []
  );

  // ✅ helper to open the service sub-submenu as FIXED panel
  const openServiceSubmenu = (index, anchorEl) => {
    clearCloseTimer();
    setActiveServiceIndex(index);

    if (anchorEl) {
      const r = anchorEl.getBoundingClientRect();
      let left = r.right + 12;
      let top = r.top;

      const panelW = 360;
      const panelH = 420;

      if (left + panelW > window.innerWidth - 8) left = r.left - panelW - 12;
      if (top + panelH > window.innerHeight - 8) top = Math.max(8, window.innerHeight - panelH - 8);

      setServiceSubPos({ top, left });
    }
  };

  // ✅ RESOURCES: open Patients / Professionals fixed panel
  const openResourcesSub = (key, anchorEl) => {
    clearCloseTimer();
    setResourcesOpen(key);
    setPatientsOpen(null);

    if (!anchorEl) return;
    const r = anchorEl.getBoundingClientRect();
    let left = r.right + 12;
    let top = r.top;

    const panelW = 340;
    const panelH = 520;

    if (left + panelW > window.innerWidth - 8) left = r.left - panelW - 12;
    if (top + panelH > window.innerHeight - 8) top = Math.max(8, window.innerHeight - panelH - 8);

    setResourcesSubPos({ top, left });
  };

  // ✅ RESOURCES: open Patients -> Education fixed panel
  const openPatientsEducation = (anchorEl) => {
    clearCloseTimer();
    setPatientsOpen("education");

    if (!anchorEl) return;
    const r = anchorEl.getBoundingClientRect();
    let left = r.right + 12;
    let top = r.top;

    const panelW = 360;
    const panelH = 520;

    if (left + panelW > window.innerWidth - 8) left = r.left - panelW - 12;
    if (top + panelH > window.innerHeight - 8) top = Math.max(8, window.innerHeight - panelH - 8);

    setPatientsSubPos({ top, left });
  };

  const DesktopShell = ({ children }) => (
    <div
      className="fixed"
      style={{ top: menuPos.top, left: menuPos.left, zIndex: Z_TOP }}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      <div className="bg-[#78866B] rounded shadow-lg overflow-hidden">{children}</div>
    </div>
  );

  const FixedShell = ({ pos, children }) => (
    <div
      className="fixed"
      style={{ top: pos.top, left: pos.left, zIndex: Z_TOP }}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      <div className="bg-[#78866B] rounded shadow-lg overflow-hidden">{children}</div>
    </div>
  );

  return (
    <header className="w-full text-white font-sans fixed top-0 left-0 z-[99999]">
      {/* Top bar */}
      <div className="bg-[#5B6641] px-5 py-2 lg:px-32 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex-shrink-0">
          <img src={vaayuLogo} alt="Vaayu Chest and Sleep Specialists" className="h-16 sm:h-20 md:h-24" />
        </div>

        <div className="hidden md:flex items-center gap-6 ml-auto text-white text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-lg" /> <span>admin@vaayuchest.com</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlinePhone className="text-lg" /> <span>+91 63649 28680 / +91 63649 28681</span>
          </div>
          <a
            href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-100 text-[#5B6641] font-bold px-5 py-2 rounded shadow-lg animate-pulse hover:bg-yellow-300 transition duration-300">
              BOOK AN APPOINTMENT
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 mt-2 md:hidden text-xs text-white">
          <div className="flex items-center gap-2">
            <AiOutlineMail /> admin@vaayuchest.com
          </div>
          <div className="flex items-center gap-2">
            <AiOutlinePhone /> +91 63649 28680 / +91 63649 28681
          </div>
          <a
            href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-100 text-[#5B6641] font-bold px-5 py-2 rounded shadow-lg animate-pulse hover:bg-yellow-300 transition duration-300">
              BOOK AN APPOINTMENT
            </button>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[#6A734F] px-5 lg:px-32 overflow-visible relative z-[99999]">
        <div className="flex items-center py-3 justify-between lg:justify-center">
          {/* Desktop */}
          <ul className="hidden lg:flex gap-6 uppercase text-sm items-center mx-auto">
            <li><RouterLink to="/" className="hover:text-white" onClick={closeAll}>Home</RouterLink></li>
            <li><RouterLink to="/about" className="hover:text-white" onClick={closeAll}>About</RouterLink></li>

            <li onMouseEnter={() => openDesktopMenu("services", servicesBtnRef)} onMouseLeave={scheduleClose}>
              <button
                ref={servicesBtnRef}
                type="button"
                className="flex items-center gap-1 py-2 select-none cursor-pointer bg-transparent border-0 text-white"
              >
                OUR SERVICES
                <FiChevronDown className={`mt-[1px] transition-transform duration-200 ${desktopOpen === "services" ? "rotate-180" : ""}`} />
              </button>
            </li>

            <li onMouseEnter={() => openDesktopMenu("resources", resourcesBtnRef)} onMouseLeave={scheduleClose}>
              <button
                ref={resourcesBtnRef}
                type="button"
                className="flex items-center gap-1 py-2 select-none cursor-pointer bg-transparent border-0 text-white"
              >
                RESOURCES
                <FiChevronDown className={`mt-[1px] transition-transform duration-200 ${desktopOpen === "resources" ? "rotate-180" : ""}`} />
              </button>
            </li>

            <li onMouseEnter={() => openDesktopMenu("events", eventsBtnRef)} onMouseLeave={scheduleClose}>
              <button
                ref={eventsBtnRef}
                type="button"
                className="flex items-center gap-1 py-2 select-none cursor-pointer bg-transparent border-0 text-white"
              >
                EVENTS
                <FiChevronDown className={`mt-[1px] transition-transform duration-200 ${desktopOpen === "events" ? "rotate-180" : ""}`} />
              </button>
            </li>

            <li><RouterLink to="/patient-resources/testimonials" className="hover:text-white" onClick={closeAll}>Testimonials</RouterLink></li>
            <li><RouterLink to="/social-impact" className="hover:text-white" onClick={closeAll}>Social Impact</RouterLink></li>
            <li><RouterLink to="/media-spotlight" className="hover:text-white" onClick={closeAll}>Media Spotlight</RouterLink></li>
            <li><RouterLink to="/cont" className="hover:text-white" onClick={closeAll}>Contact</RouterLink></li>
          </ul>

          {/* ✅ Desktop: SERVICES dropdown */}
          {desktopOpen === "services" && (
            <DesktopShell>
              <ul className="min-w-[360px] divide-y divide-[#6A734F]">
                {serviceBranches.map((item, index) => {
                  const hasSub = !!item.submenu?.length;
                  return (
                    <li
                      key={item.name}
                      onMouseEnter={(e) => {
                        clearCloseTimer();
                        if (hasSub) openServiceSubmenu(index, e.currentTarget);
                        else setActiveServiceIndex(null);
                      }}
                    >
                      <RouterLink
                        to={item.path}
                        className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap"
                        onClick={closeAll}
                      >
                        <span className="flex items-center justify-between gap-3">
                          {item.name}
                          {hasSub && <FiChevronDown className="-rotate-90 opacity-80" />}
                        </span>
                      </RouterLink>
                    </li>
                  );
                })}
              </ul>
            </DesktopShell>
          )}

          {/* ✅ Desktop: SERVICES sub-submenu */}
          {desktopOpen === "services" && activeServiceIndex !== null && serviceBranches[activeServiceIndex]?.submenu && (
            <FixedShell pos={serviceSubPos}>
              <ul className="min-w-[360px] divide-y divide-[#6A734F]">
                {serviceBranches[activeServiceIndex].submenu.map((sub) => (
                  <li key={sub.name}>
                    <RouterLink
                      to={sub.path}
                      className="block px-4 py-2 text-white hover:bg-[#556B2F] whitespace-nowrap"
                      onClick={closeAll}
                    >
                      {sub.name}
                      {sub.highlight && (
                        <span className="text-yellow-300 font-semibold"> - Center of Excellence</span>
                      )}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </FixedShell>
          )}

          {/* ✅ Desktop: RESOURCES dropdown (from Code 1) */}
          {desktopOpen === "resources" && (
            <DesktopShell>
              <ul className="min-w-[260px] divide-y divide-[#6A734F]">
                <li
                  className="px-4 py-3 text-white whitespace-nowrap cursor-default"
                  onMouseEnter={(e) => openResourcesSub("patients", e.currentTarget)}
                >
                  <span className="flex items-center justify-between gap-3">
                    Patients <FiChevronDown className="-rotate-90 opacity-80" />
                  </span>
                </li>

                <li
                  className="px-4 py-3 text-white whitespace-nowrap cursor-default"
                  onMouseEnter={(e) => openResourcesSub("professionals", e.currentTarget)}
                >
                  <span className="flex items-center justify-between gap-3">
                    Professionals <FiChevronDown className="-rotate-90 opacity-80" />
                  </span>
                </li>

                <li>
                  <RouterLink to="/blogs" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    Blogs
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/gallery" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    Gallery
                  </RouterLink>
                </li>
              </ul>
            </DesktopShell>
          )}

          {/* ✅ Desktop: RESOURCES -> Patients submenu */}
          {desktopOpen === "resources" && resourcesOpen === "patients" && (
            <FixedShell pos={resourcesSubPos}>
              <ul className="min-w-[300px] divide-y divide-[#6A734F]">
                <li
                  className="px-4 py-3 text-white whitespace-nowrap cursor-default"
                  onMouseEnter={(e) => openPatientsEducation(e.currentTarget)}
                >
                  <span className="flex items-center justify-between gap-3">
                    Education <FiChevronDown className="-rotate-90 opacity-80" />
                  </span>
                </li>
              </ul>
            </FixedShell>
          )}

          {/* ✅ Desktop: RESOURCES -> Patients -> Education submenu */}
          {desktopOpen === "resources" && resourcesOpen === "patients" && patientsOpen === "education" && (
            <FixedShell pos={patientsSubPos}>
              <ul className="min-w-[340px] divide-y divide-[#6A734F]">
                {patientEducationLinks.map((link) => (
                  <li key={link.name}>
                    <RouterLink to={link.path} className="block px-4 py-2 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                      {link.name}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </FixedShell>
          )}

          {/* ✅ Desktop: RESOURCES -> Professionals submenu */}
          {desktopOpen === "resources" && resourcesOpen === "professionals" && (
            <FixedShell pos={resourcesSubPos}>
              <ul className="min-w-[260px] divide-y divide-[#6A734F]">
                <li>
                  <RouterLink to="/Procedural-Training" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    Procedural Video&apos;s
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/resources/innovations" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    Our Innovations
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/resources/publications" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    Our Publications
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/resources/job-openings" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    Job Openings
                  </RouterLink>
                </li>
              </ul>
            </FixedShell>
          )}

          {/* ✅ Desktop: EVENTS dropdown (from Code 1) */}
          {desktopOpen === "events" && (
            <DesktopShell>
              <ul className="min-w-[260px] divide-y divide-[#6A734F]">
                <li>
                  <RouterLink to="/capi-2025" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    CAPI 2025
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/rehab-conference" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    REVIVE 2025
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/camp" className="block px-4 py-3 text-white hover:bg-[#556B2F] whitespace-nowrap" onClick={closeAll}>
                    Camp
                  </RouterLink>
                </li>
              </ul>
            </DesktopShell>
          )}

          {/* Mobile Menu Toggle (Code 1 full) */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>

            {menuOpen && (
              <div className="bg-[#6A734F] text-white px-5 py-4 space-y-1 mt-2 rounded shadow-lg max-h-[80vh] overflow-y-scroll">
                <RouterLink to="/" onClick={closeAll} className="block py-2">Home</RouterLink>
                <RouterLink to="/about" onClick={closeAll} className="block py-2">About</RouterLink>

                {/* OUR SERVICES (accordion) */}
                <div className="border-t border-[#78866B] pt-2 mt-2">
                  <button className="w-full flex justify-between items-center py-2" onClick={() => toggle("services")} aria-expanded={!!submenuOpen["services"]}>
                    <span>OUR SERVICES</span>
                    <FiChevronDown className={`transition-transform ${submenuOpen["services"] ? "rotate-180" : ""}`} />
                  </button>

                  {submenuOpen["services"] && (
                    <div className="ml-3 space-y-1">
                      {serviceBranches.map((item, index) => {
                        const key = `svc-${index}`;
                        return (
                          <div key={key}>
                            {item.submenu ? (
                              <>
                                <button className="w-full flex justify-between items-center py-2 text-left" onClick={() => toggle(key)} aria-expanded={!!submenuOpen[key]}>
                                  <span>{item.name}</span>
                                  <FiChevronDown className={`transition-transform ${submenuOpen[key] ? "rotate-180" : ""}`} />
                                </button>

                                {submenuOpen[key] && (
                                  <div className="ml-4 mt-1 space-y-1 text-sm">
                                    {item.submenu.map((sub) => (
                                      <RouterLink key={sub.name} to={sub.path} onClick={closeAll} className="block py-1">
                                        {sub.name}
                                        {sub.highlight && <span className="text-yellow-300 font-semibold"> - Center of Excellence</span>}
                                      </RouterLink>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <RouterLink to={item.path} onClick={closeAll} className="block py-2">
                                {item.name}
                              </RouterLink>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* RESOURCES (accordion) */}
                <div className="border-t border-[#78866B] pt-2 mt-2">
                  <button className="w-full flex justify-between items-center py-2" onClick={() => toggle("resources")} aria-expanded={!!submenuOpen["resources"]}>
                    <span>RESOURCES</span>
                    <FiChevronDown className={`transition-transform ${submenuOpen["resources"] ? "rotate-180" : ""}`} />
                  </button>

                  {submenuOpen["resources"] && (
                    <div className="ml-3 space-y-1">
                      {/* Patients */}
                      <div>
                        <button className="w-full flex justify-between items-center py-2 text-left" onClick={() => toggle("res-patients")} aria-expanded={!!submenuOpen["res-patients"]}>
                          <span>Patients</span>
                          <FiChevronDown className={`transition-transform ${submenuOpen["res-patients"] ? "rotate-180" : ""}`} />
                        </button>

                        {submenuOpen["res-patients"] && (
                          <div className="ml-3">
                            <button className="w-full flex justify-between items-center py-2 text-left text-sm" onClick={() => toggle("res-education")} aria-expanded={!!submenuOpen["res-education"]}>
                              <span>Education</span>
                              <FiChevronDown className={`transition-transform ${submenuOpen["res-education"] ? "rotate-180" : ""}`} />
                            </button>

                            {submenuOpen["res-education"] && (
                              <div className="ml-3 mt-1 space-y-1 text-sm">
                                {patientEducationLinks.map((link) => (
                                  <RouterLink key={link.name} to={link.path} onClick={closeAll} className="block py-1">
                                    {link.name}
                                  </RouterLink>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Professionals */}
                      <div>
                        <button className="w-full flex justify-between items-center py-2 text-left" onClick={() => toggle("res-professionals")} aria-expanded={!!submenuOpen["res-professionals"]}>
                          <span>Professionals</span>
                          <FiChevronDown className={`transition-transform ${submenuOpen["res-professionals"] ? "rotate-180" : ""}`} />
                        </button>

                        {submenuOpen["res-professionals"] && (
                          <div className="ml-3 mt-1 space-y-1 text-sm">
                            <RouterLink to="/Procedural-Training" onClick={closeAll} className="block py-1">Procedural Video&apos;s</RouterLink>
                            <RouterLink to="/resources/innovations" onClick={closeAll} className="block py-1">Our Innovations</RouterLink>
                            <RouterLink to="/resources/publications" onClick={closeAll} className="block py-1">Our Publications</RouterLink>
                            <RouterLink to="/resources/job-openings" onClick={closeAll} className="block py-1">Job Openings</RouterLink>
                          </div>
                        )}
                      </div>

                      <RouterLink to="/blogs" onClick={closeAll} className="block py-2">Blogs</RouterLink>
                      <RouterLink to="/gallery" onClick={closeAll} className="block py-2">Gallery</RouterLink>
                    </div>
                  )}
                </div>

                {/* EVENTS (accordion) */}
                <div className="border-t border-[#78866B] pt-2 mt-2">
                  <button className="w-full flex justify-between items-center py-2" onClick={() => toggle("events")} aria-expanded={!!submenuOpen["events"]}>
                    <span>EVENTS</span>
                    <FiChevronDown className={`transition-transform ${submenuOpen["events"] ? "rotate-180" : ""}`} />
                  </button>

                  {submenuOpen["events"] && (
                    <div className="ml-3 mt-1 space-y-1 text-sm">
                      <RouterLink to="/capi-2025" onClick={closeAll} className="block py-2">CAPI 2025</RouterLink>
                      <RouterLink to="/rehab-conference" onClick={closeAll} className="block py-2">REVIVE 2025</RouterLink>
                      <RouterLink to="/camp" onClick={closeAll} className="block py-2">Camp</RouterLink>
                      <RouterLink to="/media-spotlight" onClick={closeAll} className="block py-2">Media Spotlight</RouterLink>
                    </div>
                  )}
                </div>

                <div className="border-t border-[#78866B] pt-2 mt-2 space-y-1">
                  <RouterLink to="/patient-resources/testimonials" onClick={closeAll} className="block py-2">Testimonials</RouterLink>
                  <RouterLink to="/social-impact" onClick={closeAll} className="block py-2">Social Impact</RouterLink>
                  <RouterLink to="/cont" onClick={closeAll} className="block py-2">Contact</RouterLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;