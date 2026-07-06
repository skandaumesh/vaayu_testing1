// src/pages/Doctors/Rasheeka.jsx

import { useEffect, useMemo, useState } from "react";
import {
  MdLocationOn,
  MdOutlineAccessTime,
  MdCall,
  MdVerified,
  MdSchool,
  MdWorkspacePremium,
  MdLibraryBooks,
  MdLocalHospital,
  MdOutlineStar,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLanguage,
} from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

import rasheekaImg from "../../assets/img/doctors/Rasheeka.jpg";
import aboutBg from "../../assets/img/logo_make_11_06_2023_412.jpg";

export default function Rasheeka() {
  const doctor = useMemo(
    () => ({
      name: "Dr. Rasheeka VP",
      title: "Pulmonologist",
      qualifications:
        "MBBS, MD Pulmonary Medicine, DNB Pulmonary Medicine, EDARM, Fellowship in Interventional Pulmonology and Pulmonary Critical Care",
      experienceLabel: "6 yrs Experience",
      email: "rashika2695@gmail.com",

      summary: [
        "Pulmonologist with advanced training in pulmonary medicine and critical respiratory care.",
        "European Diplomate in Adult Respiratory Medicine.",
        "Fellowship-trained in Interventional Pulmonology and Pulmonary Critical Care.",
      ],

      about: [
        "Dr. Rasheeka VP is a highly trained Pulmonologist with MD and DNB in Pulmonary Medicine, along with European Diplomate in Adult Respiratory Medicine certification and Fellowship training in Interventional Pulmonology and Pulmonary Critical Care.",
        "She brings advanced expertise in managing complex respiratory disorders, including airway diseases, interstitial lung disease, pulmonary infections, and critically ill patients.",
        "Her clinical practice in severe asthma is complemented by proficiency in diagnostic and therapeutic bronchoscopy and other interventional procedures. Known for her meticulous approach and clinical judgment, she is dedicated to delivering precise, evidence-driven care with a focus on safety, outcomes, and overall respiratory health.",
      ],

      education: [
        "MBBS",
        "MD Pulmonary Medicine",
        "DNB Pulmonary Medicine",
        "EDARM",
        "Fellowship in Interventional Pulmonology and Pulmonary Critical Care",
      ],

      positions: [
        {
          role: "Pulmonologist",
          org: "Vaayu Chest & Sleep Specialists",
          icon: <FaUserDoctor />,
        },
        {
          role: "Fellowship-trained Specialist",
          org: "Interventional Pulmonology and Pulmonary Critical Care",
          icon: <MdWorkspacePremium />,
        },
        {
          role: "European Diplomate",
          org: "Adult Respiratory Medicine",
          icon: <MdSchool />,
        },
      ],

      coreSpecialisation: ["Pulmonary Medicine"],

      subSpeciality: [
        "Interventional Pulmonology",
        "Airway Diseases",
        "Pulmonary Critical Care",
      ],

      conditionsTreated: [
        "Asthma / Severe Asthma",
        "Bronchitis",
        "COPD",
        "Bronchiectasis",
        "LRTI / Pneumonia",
        "Sleep Apnea",
        "Pleural Effusion / Pneumothorax",
        "Interstitial Lung Disease",
        "Tuberculosis",
      ],

      achievements: [
        "European Respiratory Society Young Scientist Award",
        "APSR Teaching Library Award",
      ],

      languages: ["English", "Hindi", "Kannada", "Malayalam"],

      philosophy: [
        "Dr. Rasheeka follows a patient-focused and evidence-led approach, emphasizing clarity, trust, and individualized care.",
        "She believes in combining clinical excellence with thoughtful communication, ensuring that each patient is well-informed and actively involved in decision-making.",
        "Her approach prioritizes not just disease management, but long-term well-being, with care that is compassionate and tailored to each individual’s unique clinical needs.",
      ],

      highlights: [
        "Pulmonary Medicine",
        "Severe Asthma",
        "Interventional Pulmonology",
        "Pulmonary Critical Care",
        "ILD",
        "COPD",
        "Bronchoscopy",
        "Sleep Apnea",
      ],

      consultationMode: "Both in-clinic and video consultation",

      clinic: {
        name: "Vaayu Chest & Sleep Specialists",
        address:
          "Ground & 3rd Floor, 37/17, 10th Main Rd, Jayanagar 5th Block, Bengaluru, Karnataka 560041, India",
        city: "Bengaluru",
        region: "Karnataka",
        country: "IN",
        postalCode: "560041",
      },

      timings: [
        { day: "Monday", time: "03:00 PM - 04:30 PM" },
        { day: "Wednesday", time: "03:00 PM - 04:30 PM" },
        { day: "Friday", time: "03:00 PM - 04:30 PM" },
      ],

      experience: [
        {
          role: "Pulmonologist",
          org: "Vaayu Chest & Sleep Specialists",
        },
        {
          role: "Specialist Training",
          org: "Interventional Pulmonology and Pulmonary Critical Care",
        },
      ],

      booking: {
        offlineAddress:
          "GROUND AND 3RD FLOORS, NO. 37-16, 10th Main Road, Jayanagar 5th block, Bengaluru, Karnataka, 560041, Bengaluru",
        onlineNote:
          "Video consultation is available. Appointment confirmation may depend on doctor availability.",
        feeNote:
          "Consultation fee may vary depending on the type of consultation. Please contact the clinic after booking for exact charges.",
        ekacareLink:
          "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation",
        phoneLink: "tel:+916364928680",
        phoneDisplay: "+91 63649 28680",
      },
    }),
    []
  );

  const [isCallOpen, setIsCallOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("about");
  const [aboutExpanded, setAboutExpanded] = useState(false);

  useEffect(() => {
    if (!isCallOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsCallOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCallOpen]);

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}, []);

  useEffect(() => {
    const SITE_NAME = "Vaayu Chest & Sleep Specialists";
    const PAGE_PATH = "/doctors/dr-rasheeka-vp";
    const SITE_ORIGIN =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://vaayuchest.com";
    const CANONICAL_URL = `${SITE_ORIGIN}${PAGE_PATH}`;
    const OG_IMAGE = `${SITE_ORIGIN}/og/doctors/dr-rasheeka-vp.jpg`;

    const title = `${doctor.name} | Pulmonologist in Jayanagar, Bengaluru | ${SITE_NAME}`;
    const description =
      `${doctor.name} is a Pulmonologist at ${doctor.clinic.name}, Bengaluru. Expertise in severe asthma, COPD, ILD, pulmonary infections, bronchoscopy, interventional pulmonology and pulmonary critical care.`;

    const keywords = [
      "Dr Rasheeka VP",
      "Rasheeka VP Pulmonologist",
      "Pulmonologist Bengaluru",
      "Pulmonologist Jayanagar",
      "Severe asthma doctor Bengaluru",
      "COPD specialist Bengaluru",
      "ILD specialist Bengaluru",
      "Interventional Pulmonology Bengaluru",
      "Bronchoscopy specialist Bengaluru",
      "Pulmonary critical care doctor Bengaluru",
      "Vaayu Chest and Sleep Specialists",
    ].join(", ");

    const upsertMeta = (key, content, attr = "name") => {
      const selector = `meta[${attr}="${key}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const upsertLink = (rel, href) => {
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", href);
    };

    const upsertScriptJsonLd = (id, json) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(json);
      document.head.appendChild(script);
    };

    document.title = title;
    upsertMeta("description", description);
    upsertMeta("keywords", keywords);
    upsertMeta(
      "robots",
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    );
    upsertLink("canonical", CANONICAL_URL);

    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", "profile", "property");
    upsertMeta("og:site_name", SITE_NAME, "property");
    upsertMeta("og:url", CANONICAL_URL, "property");
    upsertMeta("og:image", OG_IMAGE, "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", OG_IMAGE);

    upsertScriptJsonLd("schema-physician-rasheeka-vp", {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: doctor.name,
      description,
      email: doctor.email,
      medicalSpecialty: [
        "Pulmonology",
        "Interventional Pulmonology",
        "Pulmonary Critical Care",
        "Respiratory Medicine",
      ],
      knowsAbout: doctor.highlights,
      hasCredential: doctor.qualifications,
      worksFor: {
        "@type": "MedicalOrganization",
        name: doctor.clinic.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: doctor.clinic.address,
          addressLocality: doctor.clinic.city,
          addressRegion: doctor.clinic.region,
          postalCode: doctor.clinic.postalCode,
          addressCountry: doctor.clinic.country,
        },
      },
    });

    return () => {
      const s1 = document.getElementById("schema-physician-rasheeka-vp");
      if (s1) s1.remove();
    };
  }, [doctor]);

  const vaayu = {
    dark: "#3F4723",
    olive: "#5B6641",
    sage: "#E6EAD2",
    paper: "#F4F5EC",
  };

  const cardBase = {
    backgroundColor: "#ffffff",
    border: `1px solid ${vaayu.sage}`,
  };

  return (
    <main className="bg-white">
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(120deg, ${vaayu.sage} 0%, #ffffff 55%, ${vaayu.paper} 100%)`,
        }}
      >
        <div
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: vaayu.olive }}
        />
        <div
          className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: vaayu.dark }}
        />

        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="order-1">
              <div className="relative mx-auto w-full max-w-sm">
                <div
                  className="absolute -inset-3 rounded-[28px] opacity-25 blur-xl"
                  style={{ backgroundColor: vaayu.olive }}
                />
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-xl">
                  <img
                    src={rasheekaImg}
                    alt="Dr. Rasheeka VP"
                    className="h-[360px] w-full object-cover md:h-[420px]"
                    loading="eager"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm"
                      style={{ backgroundColor: vaayu.olive }}
                    >
                      <MdVerified className="text-base" />
                      Vaayu Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2">
              <p className="text-sm font-semibold" style={{ color: vaayu.olive }}>
                Doctor Profile
              </p>

              <h1
                className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl"
                style={{ color: vaayu.dark }}
              >
                {doctor.name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Pill
                  icon={<FaUserDoctor />}
                  text={doctor.title}
                  color={vaayu.dark}
                  bg={vaayu.paper}
                />
                <Pill text="Pulmonary Medicine" color={vaayu.dark} bg="#ffffff" border />
                <Pill text={doctor.experienceLabel} color="#ffffff" bg={vaayu.olive} />
              </div>

              <div
                className="mt-5 rounded-3xl p-5 shadow-sm"
                style={{
                  backgroundColor: vaayu.paper,
                  border: `1px solid ${vaayu.sage}`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: vaayu.olive }}
                  >
                    <MdWorkspacePremium className="text-xl" />
                  </span>
                  <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                    Advanced respiratory care expertise
                  </p>
                </div>

                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {doctor.summary.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{ backgroundColor: vaayu.olive }}
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={doctor.booking.ekacareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.olive }}
                >
                  Book an Appointment                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:bg-white active:scale-[0.99]"
                  style={{
                    backgroundColor: "#ffffff",
                    color: vaayu.dark,
                    border: `1px solid ${vaayu.sage}`,
                  }}
                >
                  About
                </a>

                <a
                  href="#timings"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:bg-white active:scale-[0.99]"
                  style={{
                    backgroundColor: "#ffffff",
                    color: vaayu.dark,
                    border: `1px solid ${vaayu.sage}`,
                  }}
                >
                  View Timings
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <InfoMini
                  icon={<MdLocationOn />}
                  title="Clinic Location"
                  value="Jayanagar 5th Block, Bengaluru"
                  accent={vaayu.olive}
                  bg={vaayu.paper}
                />

                <InfoMini
                  icon={<MdOutlineAccessTime />}
                  title="OPD Timings"
                  value="Mon / Wed / Fri, 3:00 PM - 4:30 PM"
                  accent={vaayu.olive}
                  bg={vaayu.paper}
                />

                <InfoMini
                  icon={<MdLocalHospital />}
                  title="Consultation Mode"
                  value={doctor.consultationMode}
                  accent={vaayu.olive}
                  bg={vaayu.paper}
                />

                <InfoMini
                  icon={<MdLanguage />}
                  title="Languages"
                  value={doctor.languages.join(", ")}
                  accent={vaayu.olive}
                  bg={vaayu.paper}
                />
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold" style={{ color: vaayu.dark }}>
                  Key expertise
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {doctor.highlights.map((h) => (
                    <Chip key={h} text={h} brand={vaayu} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #ffffff 0%, ${vaayu.paper} 55%, #ffffff 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            filter: "grayscale(100%)",
            transform: "scale(1.03)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(120deg, ${vaayu.paper} 0%, #ffffff 45%, ${vaayu.sage} 100%)`,
            opacity: 0.82,
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-start">
            <div
              className="relative overflow-hidden rounded-3xl p-7 shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                border: `1px solid ${vaayu.sage}`,
              }}
            >
              <div
                className="absolute left-0 top-0 h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${vaayu.olive}, ${vaayu.sage})`,
                }}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: vaayu.olive }}
                  >
                    About
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold" style={{ color: vaayu.dark }}>
                    About the doctor
                  </h2>
                  <p className="mt-2 text-sm text-neutral-700">
                    Profile, education, specialisations, achievements, treatment areas and philosophy.
                  </p>
                </div>

                <div
                  className="hidden sm:flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-bold"
                  style={{
                    backgroundColor: vaayu.paper,
                    color: vaayu.dark,
                    border: `1px solid ${vaayu.sage}`,
                  }}
                >
                  <MdVerified className="text-base" style={{ color: vaayu.olive }} />
                  Verified Profile
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <TabButton active={activePanel === "about"} onClick={() => setActivePanel("about")} brand={vaayu} label="Overview" />
                <TabButton active={activePanel === "education"} onClick={() => setActivePanel("education")} brand={vaayu} label="Education" />
                <TabButton active={activePanel === "speciality"} onClick={() => setActivePanel("speciality")} brand={vaayu} label="Speciality" />
                <TabButton active={activePanel === "conditions"} onClick={() => setActivePanel("conditions")} brand={vaayu} label="Conditions" />
                <TabButton active={activePanel === "achievements"} onClick={() => setActivePanel("achievements")} brand={vaayu} label="Achievements" />
                <TabButton active={activePanel === "philosophy"} onClick={() => setActivePanel("philosophy")} brand={vaayu} label="Philosophy" />
              </div>

              <div className="mt-6">
                {activePanel === "about" && (
                  <div className="grid gap-4">
                    <div
                      className="rounded-3xl p-6 shadow-sm"
                      style={{
                        backgroundColor: vaayu.paper,
                        border: `1px solid ${vaayu.sage}`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                            style={{ backgroundColor: vaayu.olive }}
                          >
                            <MdOutlineStar className="text-xl" />
                          </span>

                          <div>
                            <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                              Profile summary
                            </p>
                            <p className="mt-1 text-sm text-neutral-700">
                              Tap to expand for full introduction.
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setAboutExpanded((v) => !v)}
                          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]"
                          style={{
                            backgroundColor: "#ffffff",
                            color: vaayu.dark,
                            border: `1px solid ${vaayu.sage}`,
                          }}
                        >
                          {aboutExpanded ? (
                            <>
                              Less <MdKeyboardArrowUp className="text-lg" />
                            </>
                          ) : (
                            <>
                              Read more <MdKeyboardArrowDown className="text-lg" />
                            </>
                          )}
                        </button>
                      </div>

                      <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
                        <p>{doctor.about[0]}</p>
                        {aboutExpanded && (
                          <>
                            <p>{doctor.about[1]}</p>
                            <p>{doctor.about[2]}</p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {doctor.positions.map((p) => (
                        <HoverCard key={p.role} brand={vaayu}>
                          <div className="flex items-start gap-3">
                            <span
                              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                              style={{ backgroundColor: vaayu.olive }}
                            >
                              <span className="text-xl">{p.icon}</span>
                            </span>

                            <div>
                              <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                                {p.role}
                              </p>
                              <p className="mt-1 text-sm text-neutral-700">{p.org}</p>
                            </div>
                          </div>
                        </HoverCard>
                      ))}
                    </div>
                  </div>
                )}

                {activePanel === "education" && (
                  <InfoCard icon={<MdSchool />} title="Education background" items={doctor.education} brand={vaayu} elevated />
                )}

                {activePanel === "speciality" && (
                  <div className="grid gap-4">
                    <InfoCard icon={<FaUserDoctor />} title="Core specialisation" items={doctor.coreSpecialisation} brand={vaayu} elevated />
                    <InfoCard icon={<MdWorkspacePremium />} title="Sub-speciality" items={doctor.subSpeciality} brand={vaayu} elevated />
                  </div>
                )}

                {activePanel === "conditions" && (
                  <div
                    className="rounded-3xl p-6 shadow-sm"
                    style={{
                      backgroundColor: vaayu.paper,
                      border: `1px solid ${vaayu.sage}`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                        style={{ backgroundColor: vaayu.olive }}
                      >
                        <MdLocalHospital className="text-xl" />
                      </span>

                      <div>
                        <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                          Conditions treated
                        </p>
                        <p className="mt-1 text-sm text-neutral-700">
                          Respiratory and pulmonary conditions managed by {doctor.name}.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {doctor.conditionsTreated.map((c) => (
                        <Chip key={c} text={c} brand={vaayu} />
                      ))}
                    </div>
                  </div>
                )}

                {activePanel === "achievements" && (
                  <InfoCard icon={<MdOutlineStar />} title="Notable achievements" items={doctor.achievements} brand={vaayu} elevated />
                )}

                {activePanel === "philosophy" && (
                  <InfoCard icon={<MdLibraryBooks />} title="Medical philosophy" items={doctor.philosophy} brand={vaayu} elevated />
                )}
              </div>
            </div>

            <aside className="md:sticky md:top-24">
              <div className="rounded-3xl p-6 shadow-sm" style={cardBase}>
                <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: vaayu.olive }}>
                  Clinic
                </h3>
                <p className="mt-2 text-sm font-semibold" style={{ color: vaayu.dark }}>
                  {doctor.clinic.name}
                </p>
                <p className="mt-1 text-sm text-neutral-700">{doctor.clinic.address}</p>
              </div>

              <div className="mt-4 rounded-3xl p-6 shadow-sm" style={cardBase}>
                <p className="text-sm font-semibold" style={{ color: vaayu.dark }}>
                  Quick actions
                </p>

                <div className="mt-3 grid gap-3">
                  <a
                    href={doctor.booking.ekacareLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95 active:scale-[0.99]"
                    style={{ backgroundColor: vaayu.olive }}
                  >
                    Book an Appointment                  </a>

                  <button
                    type="button"
                    onClick={() => setIsCallOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white active:scale-[0.99]"
                    style={{
                      backgroundColor: vaayu.paper,
                      color: vaayu.dark,
                      border: `1px solid ${vaayu.sage}`,
                    }}
                  >
                    <MdCall className="text-lg" />
                    Call Clinic
                  </button>
                </div>
              </div>

              <div
                className="mt-4 rounded-3xl p-6 shadow-sm"
                style={{
                  backgroundColor: vaayu.paper,
                  border: `1px solid ${vaayu.sage}`,
                }}
              >
                <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                  Languages
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.languages.map((l) => (
                    <MiniTag key={l} text={l} brand={vaayu} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + BOOKING */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: vaayu.dark }}>
                Experience
              </h2>

              <div className="mt-5 grid gap-4">
                {doctor.experience.map((e) => (
                  <div key={e.role} className="rounded-3xl p-6 shadow-sm" style={cardBase}>
                    <p className="text-sm font-bold" style={{ color: vaayu.dark }}>
                      {e.role}
                    </p>
                    <p className="mt-1 text-sm text-neutral-700">{e.org}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl p-6 shadow-sm" style={cardBase}>
                <h3 className="text-base font-bold" style={{ color: vaayu.dark }}>
                  Why do patients visit {doctor.name}?
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Patients consult {doctor.name} for severe asthma, COPD, bronchiectasis,
                  pneumonia, sleep apnea, pleural conditions, interstitial lung disease
                  and tuberculosis.
                </p>
              </div>
            </div>

            <div
              id="book"
              className="rounded-3xl p-7 shadow-sm"
              style={{
                backgroundColor: vaayu.paper,
                border: `1px solid ${vaayu.sage}`,
              }}
            >
              <h2 className="text-2xl font-bold" style={{ color: vaayu.dark }}>
                Book an appointment
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-neutral-700">
                <div>
                  <p className="font-bold" style={{ color: vaayu.dark }}>
                    Offline visit
                  </p>
                  <p className="mt-1">{doctor.booking.offlineAddress}</p>
                </div>

                <div>
                  <p className="font-bold" style={{ color: vaayu.dark }}>
                    Video consultation
                  </p>
                  <p className="mt-1">{doctor.booking.onlineNote}</p>
                </div>

                <div>
                  <p className="font-bold" style={{ color: vaayu.dark }}>
                    Consultation mode
                  </p>
                  <p className="mt-1">{doctor.consultationMode}</p>
                </div>

                <div>
                  <p className="font-bold" style={{ color: vaayu.dark }}>
                    Consultation fees
                  </p>
                  <p className="mt-1">{doctor.booking.feeNote}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={doctor.booking.ekacareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.olive }}
                >
                  Book on Eka Care
                </a>

                <button
                  type="button"
                  onClick={() => setIsCallOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:bg-white active:scale-[0.99]"
                  style={{
                    backgroundColor: "#ffffff",
                    color: vaayu.dark,
                    border: `1px solid ${vaayu.sage}`,
                  }}
                >
                  <MdCall className="text-lg" />
                  Call clinic
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMINGS */}
      <section
        id="timings"
        className="border-t"
        style={{
          background: `linear-gradient(135deg, ${vaayu.paper}, ${vaayu.sage}30)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div
                className="mb-2 h-1 w-14 rounded-full"
                style={{ backgroundColor: vaayu.olive }}
              />
              <h2
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: vaayu.dark }}
              >
                Clinic Timings
              </h2>
              <p className="mt-1 text-sm text-neutral-700">
                OPD schedule at{" "}
                <span className="font-semibold">{doctor.clinic.name}</span>, Jayanagar
                5th Block.
              </p>
            </div>

            <a
              href={doctor.booking.ekacareLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, ${vaayu.olive}, ${vaayu.dark})`,
              }}
            >
              Book an Appointment            </a>
          </div>

          <div
            className="mt-8 overflow-hidden rounded-3xl border shadow-2xl"
            style={{
              borderColor: `${vaayu.sage}55`,
background: `linear-gradient(180deg, ${vaayu.dark} 0%, ${vaayu.olive} 100%)`,            }}
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr
                  style={{
                    background: `linear-gradient(135deg, ${vaayu.dark}, ${vaayu.olive})`,
                  }}
                >
                  <th className="px-6 py-4 font-semibold text-neutral-100">Day</th>
                  <th className="px-6 py-4 font-semibold text-neutral-100">Time</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {doctor.timings.map((row) => (
                  <tr key={row.day} className="transition hover:bg-white/5">
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex rounded-xl px-3 py-1 text-sm font-semibold"
                        style={{
                          backgroundColor: `${vaayu.sage}30`,
                          color: "#f7f5f6",
                        }}
                      >
                        {row.day}
                      </span>
                    </td>

                    <td className="px-6 py-4 font-medium text-neutral-300">
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Timings may change on holidays or due to clinical commitments. Please confirm while booking.
          </p>
        </div>
      </section>

      {isCallOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCallOpen(false)}
          />

          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="p-6">
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: vaayu.olive }}
              >
                Call Clinic
              </p>

              <h3 className="mt-2 text-xl font-extrabold" style={{ color: vaayu.dark }}>
                {doctor.clinic.name}
              </h3>

              <p className="mt-3 text-sm text-neutral-700">Phone number</p>

              <div
                className="mt-2 rounded-2xl px-4 py-3"
                style={{
                  backgroundColor: vaayu.paper,
                  border: `1px solid ${vaayu.sage}`,
                }}
              >
                <p className="text-lg font-extrabold" style={{ color: vaayu.dark }}>
                  {doctor.booking.phoneDisplay}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Tap “Call now” to dial
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsCallOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-[0.99]"
                  style={{
                    backgroundColor: vaayu.paper,
                    color: vaayu.dark,
                    border: `1px solid ${vaayu.sage}`,
                  }}
                >
                  Close
                </button>

                <a
                  href={doctor.booking.phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.olive }}
                >
                  <MdCall className="text-lg" />
                  Call now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-10" />
    </main>
  );
}

/* ----------------- Small UI Components ----------------- */

function Pill({ text, icon, color, bg, border = false }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        backgroundColor: bg,
        color,
        border: border ? "1px solid #e5e7eb" : "none",
      }}
    >
      {icon ? <span className="text-sm">{icon}</span> : null}
      {text}
    </span>
  );
}

function Chip({ text, brand }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition"
      style={{
        backgroundColor: brand.paper,
        color: brand.dark,
        border: `1px solid ${brand.sage}`,
      }}
    >
      {text}
    </span>
  );
}

function MiniTag({ text, brand }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
      style={{
        backgroundColor: "#ffffff",
        color: brand.dark,
        border: `1px solid ${brand.sage}`,
      }}
    >
      {text}
    </span>
  );
}

function InfoMini({ icon, title, value, accent, bg }) {
  return (
    <div
      className="rounded-2xl border border-white/60 p-4 shadow-sm transition hover:-translate-y-[1px]"
      style={{ backgroundColor: bg }}
    >
      <div className="flex items-start gap-3">
        <div
          className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: accent }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-600">{title}</p>
          <p className="mt-1 text-sm font-semibold text-neutral-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, brand, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]"
      style={{
        backgroundColor: active ? brand.olive : "#ffffff",
        color: active ? "#ffffff" : brand.dark,
        border: `1px solid ${brand.sage}`,
        boxShadow: active ? "0 10px 25px rgba(0,0,0,0.08)" : "none",
      }}
    >
      {label}
    </button>
  );
}

function HoverCard({ children, brand }) {
  return (
    <div
      className="rounded-3xl p-5 shadow-sm transition"
      style={{
        backgroundColor: "#ffffff",
        border: `1px solid ${brand.sage}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 18px 45px rgba(0,0,0,0.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.06)";
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({ icon, title, items, brand, elevated = false }) {
  return (
    <div
      className="rounded-3xl p-6 shadow-sm transition"
      style={{
        backgroundColor: "#ffffff",
        border: `1px solid ${brand.sage}`,
        boxShadow: elevated
          ? "0 18px 45px rgba(0,0,0,0.08)"
          : "0 1px 2px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: brand.olive }}
        >
          <span className="text-xl">{icon}</span>
        </span>

        <div>
          <p className="text-sm font-extrabold" style={{ color: brand.dark }}>
            {title}
          </p>

          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {items.map((it) => (
              <li key={it} className="flex gap-2">
                <span
                  className="mt-2 h-2 w-2 rounded-full"
                  style={{ backgroundColor: brand.olive }}
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}