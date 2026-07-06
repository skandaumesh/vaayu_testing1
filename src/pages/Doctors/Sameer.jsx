// src/pages/Doctors/Sameer.jsx
// ✅ SEO added: title, meta description, keywords, canonical, robots
// ✅ OpenGraph + Twitter
// ✅ JSON-LD: Physician + MedicalClinic
// ✅ Works without react-helmet (React 19 safe)

import { useEffect, useMemo, useState } from "react";
import {
  MdLocationOn,
  MdOutlineAccessTime,
  MdCall,
  MdVerified,
  MdSchool,
  MdWorkspacePremium,
  MdGroups,
  MdLibraryBooks,
  MdLocalHospital,
  MdOutlineStar,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

import sameerImg from "../../assets/img/sameer.jpeg";
import aboutBg from "../../assets/img/logo_make_11_06_2023_412.jpg";

export default function Sameer() {
  const doctor = useMemo(
    () => ({
      name: "Dr. Sameer Bansal",
      title: "Pulmonologist",
      qualifications: "MBBS, MD, DNB, EDRM, IDCCM",
      experienceLabel: "16 yrs Overall Experience",

      summary: [
        "Senior Consultant & Clinical Head – VAAYU Chest & Sleep Specialists",
        "Senior Consultant – Pulmonary, Critical Care & Interventional Pulmonology (Apollo Hospitals, Bengaluru)",
        "Associate Professor – Apollo Health, Education and Research Foundation",
      ],

      about: [
        "Dr. Sameer Bansal is a senior specialist in Pulmonology, Interventional Pulmonology, Sleep Medicine & Critical Care Medicine with 16 years of overall experience.",
        "His clinical focus includes complex airway and respiratory care, advanced bronchoscopy, and long-term management of chronic lung diseases.",
        "He is actively involved in academic teaching, research, peer-review, and professional education initiatives.",
      ],

      positions: [
        {
          role: "Senior Consultant & Clinical Head",
          org: "VAAYU Chest & Sleep Specialists",
          icon: <MdWorkspacePremium />,
        },
        {
          role: "Senior Consultant – Pulmonary, Critical care & Interventional Pulmonology",
          org: "Apollo Hospitals, Bengaluru",
          icon: <MdLocalHospital />,
        },
        {
          role: "Associate Professor",
          org: "Apollo Health, Education and Research Foundation",
          icon: <MdSchool />,
        },
      ],

      leadership: [
        "Setup VAAYU Center of Excellence for Asthma and ILD specialty clinic with international collaboration.",
        "Setup Lung transplant program, specialty respiratory clinics and IP fellowship programs at Apollo Bengaluru.",
      ],

      academic: [
        "Editorial board member – Annals of Interventional Pulmonology; reviewer for multiple national and international respiratory medicine journals.",
        "45 publications and 5 book chapters in national & international journals.",
        "Speaker at various national and international respiratory and interventional pulmonology forums.",
      ],

      social: [
        "Runs a non-profit education-focused organization in Bengaluru focused on Social Emotional Learning in early childhood education.",
      ],

      memberships: ["ICS", "IAB", "WABIP", "ERS", "ATS", "ASPR"],

      areasOfInterest: [
        "Severe Asthma",
        "COPD",
        "ILD",
        "Pulmonary rehab",
        "BPF",
        "Hemoptysis",
        "TB",
        "Antibiotics",
      ],

      highlights: ["ILD", "COPD", "Asthma", "Sleep Medicine", "Bronchoscopy", "Lung Cancer"],

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
        { day: "Mon", time: "10:30 AM - 01:15 PM" },
        { day: "Tue", time: "11:30 AM - 04:00 PM" },
        { day: "Wed", time: "10:30 AM - 01:15 PM" },
        { day: "Thu", time: "11:00 AM - 04:00 PM" },
        { day: "Fri - Sat", time: "10:30 AM - 01:15 PM" },
      ],

      experience: [
        { role: "Consultant & Clinical Head - Present", org: "Vaayu Chest & Sleep Specialists" },
        { role: "Consultant - Present", org: "Apollo Specialty Hospital" },
      ],

      booking: {
        offlineAddress:
          "GROUND AND 3RD FLOORS, NO. 37-16, 10th Main Road, Jayanagar 5th block, Bengaluru, Karnataka, 560041, Bengaluru",
        onlineNote:
          "You can book an online appointment through Eka Care. Your appointment will be confirmed by the doctor instantly.",
        feeNote:
          "Consultation fee may vary depending on the type of consultation. Please contact the clinic after booking for exact charges.",
        ekacareLink:
          "https://www.eka.care/doctor/sameer-bansal-pulmonologist-bengaluru?cid=64f5cb188d530b001eecbee9&utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation",
        phoneLink: "tel:+916364928680",
        phoneDisplay: "+91 63649 28680",
      },
    }),
    []
  );

  const [isCallOpen, setIsCallOpen] = useState(false);

  // ✅ About section interactivity
  const [activePanel, setActivePanel] = useState("about"); // about | leadership | academic | social | memberships | interests
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
    const SITE_NAME = "Vaayu Chest & Sleep Specialists";
    const PAGE_PATH = "/doctors/dr-sameer-bansal";
    const SITE_ORIGIN =
      typeof window !== "undefined" ? window.location.origin : "https://vaayuchest.com";
    const CANONICAL_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

    const OG_IMAGE = `${SITE_ORIGIN}/og/doctors/dr-sameer-bansal.jpg`;

    const title = `${doctor.name} | Pulmonologist in Jayanagar, Bengaluru | ${SITE_NAME}`;
    const description =
      `${doctor.name} (${doctor.qualifications}) is a Pulmonologist at ${doctor.clinic.name}, ` +
      `${doctor.clinic.city}. Expertise in ILD, COPD, Asthma, Sleep Medicine, Bronchoscopy & Lung Cancer. ` +
      `View clinic timings and appointment options.`;

    const keywords = [
      "Pulmonologist Bengaluru",
      "Pulmonologist Jayanagar",
      "ILD doctor Bengaluru",
      "Interstitial lung disease specialist",
      "COPD specialist Bengaluru",
      "Asthma doctor Bengaluru",
      "Sleep medicine specialist Bengaluru",
      "Sleep apnea clinic Bengaluru",
      "Bronchoscopy specialist",
      "Vaayu Chest and Sleep Specialists",
      "Dr Sameer Bansal pulmonologist",
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
      const selector = `link[rel="${rel}"]`;
      let tag = document.querySelector(selector);
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
    upsertMeta("description", description, "name");
    upsertMeta("keywords", keywords, "name");
    upsertMeta(
      "robots",
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      "name"
    );
    upsertLink("canonical", CANONICAL_URL);

    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", "profile", "property");
    upsertMeta("og:site_name", SITE_NAME, "property");
    upsertMeta("og:url", CANONICAL_URL, "property");
    upsertMeta("og:image", OG_IMAGE, "property");

    upsertMeta("twitter:card", "summary_large_image", "name");
    upsertMeta("twitter:title", title, "name");
    upsertMeta("twitter:description", description, "name");
    upsertMeta("twitter:image", OG_IMAGE, "name");

    upsertScriptJsonLd("schema-physician-sameer-bansal", {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: doctor.name,
      description,
      medicalSpecialty: [
        "Pulmonology",
        "Sleep Medicine",
        "Critical Care Medicine",
        "Interventional Pulmonology",
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

    upsertScriptJsonLd("schema-clinic-vaayu-jayanagar", {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: doctor.clinic.name,
      url: CANONICAL_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: doctor.clinic.address,
        addressLocality: doctor.clinic.city,
        addressRegion: doctor.clinic.region,
        postalCode: doctor.clinic.postalCode,
        addressCountry: doctor.clinic.country,
      },
      department: [
        { "@type": "MedicalSpecialty", name: "Pulmonology" },
        { "@type": "MedicalSpecialty", name: "Sleep Medicine" },
      ],
    });

    return () => {
      const s1 = document.getElementById("schema-physician-sameer-bansal");
      if (s1) s1.remove();
      const s2 = document.getElementById("schema-clinic-vaayu-jayanagar");
      if (s2) s2.remove();
    };
  }, [doctor]);

  // ✅ Vaayu brand palette ONLY
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
      {/* ================= HERO ================= */}
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
            {/* Image */}
<div className="order-1 md:order-1">
                <div className="relative mx-auto w-full max-w-sm">
                <div
                  className="absolute -inset-3 rounded-[28px] opacity-25 blur-xl"
                  style={{ backgroundColor: vaayu.olive }}
                />
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-xl">
                  <img
                    src={sameerImg}
                    alt="Dr. Sameer Bansal"
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

            {/* Text */}
<div className="order-2 md:order-2">
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
                <Pill icon={<FaUserDoctor />} text={doctor.title} color={vaayu.dark} bg={vaayu.paper} />
                <Pill text={doctor.qualifications} color={vaayu.dark} bg="#ffffff" border />
                <Pill text={doctor.experienceLabel} color="#ffffff" bg={vaayu.olive} />
              </div>

              {/* Premium summary */}
              <div
                className="mt-5 rounded-3xl p-5 shadow-sm transition"
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
                    Senior leadership & academic roles
                  </p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {doctor.summary.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: vaayu.olive }} />
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
                  value="Mon–Sat (As per schedule)"
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

      {/* ================= ABOUT (BG + INTERACTIVITY) ================= */}
      <section
        id="about"
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #ffffff 0%, ${vaayu.paper} 55%, #ffffff 100%)`,
        }}
      >
        {/* ✅ Background image (subtle) */}
       {/* ✅ Background image (visible but subtle) */}
<div
  className="pointer-events-none absolute inset-0"
  style={{
    backgroundImage: `url(${aboutBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 2.14,              // ✅ increase
    filter: "grayscale(100%)",  // ✅ remove blur
    transform: "scale(1.03)",
  }}
/>

{/* ✅ Soft overlay (reduce opacity) */}
<div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `linear-gradient(120deg, ${vaayu.paper} 0%, #122335 45%, ${vaayu.sage} 100%)`,
    opacity: 0.65,   // ✅ was 0.9 (too strong)
  }}
/>


        {/* Soft decorative glows */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{ backgroundColor: vaayu.sage }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: vaayu.olive }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-start">
            {/* About - premium shell */}
            <div
              className="relative overflow-hidden rounded-3xl p-7 shadow-sm transition"
              style={{
                backgroundColor: "#ffffff",
                border: `1px solid ${vaayu.sage}`,
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute left-0 top-0 h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${vaayu.olive}, ${vaayu.sage})` }}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: vaayu.olive }}>
                    About
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold" style={{ color: vaayu.dark }}>
                    About the doctor
                  </h2>
                  <p className="mt-2 text-sm text-neutral-700">
                    A concise profile with expandable details, leadership, academics and interests.
                  </p>
                </div>

                <div
                  className="hidden sm:flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-bold"
                  style={{
                    backgroundColor: vaayu.paper,
                    color: vaayu.dark,
                    border: `1px solid ${vaayu.sage}`,
                  }}
                  title="Verified profile"
                >
                  <MdVerified className="text-base" style={{ color: vaayu.olive }} />
                  Verified Profile
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-6 flex flex-wrap gap-2">
                <TabButton active={activePanel === "about"} onClick={() => setActivePanel("about")} brand={vaayu} label="Overview" />
                <TabButton
                  active={activePanel === "leadership"}
                  onClick={() => setActivePanel("leadership")}
                  brand={vaayu}
                  label="Leadership"
                />
                <TabButton
                  active={activePanel === "academic"}
                  onClick={() => setActivePanel("academic")}
                  brand={vaayu}
                  label="Academics"
                />
                <TabButton active={activePanel === "social"} onClick={() => setActivePanel("social")} brand={vaayu} label="Social impact" />
                <TabButton
                  active={activePanel === "memberships"}
                  onClick={() => setActivePanel("memberships")}
                  brand={vaayu}
                  label="Memberships"
                />
                <TabButton active={activePanel === "interests"} onClick={() => setActivePanel("interests")} brand={vaayu} label="Interests" />
              </div>

              {/* Panels */}
              <div className="mt-6">
                {activePanel === "about" && (
                  <div className="grid gap-4">
                    {/* Expandable About */}
                    <div
                      className="rounded-3xl p-6 shadow-sm"
                      style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}
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
                            <p className="mt-1 text-sm text-neutral-700">Tap to expand for full introduction.</p>
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

                    {/* Positions */}
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

                {activePanel === "leadership" && (
                  <InfoCard icon={<MdWorkspacePremium />} title="Leadership & programs" items={doctor.leadership} brand={vaayu} elevated />
                )}

                {activePanel === "academic" && (
                  <div className="grid gap-4">
                    <InfoCard
                      icon={<MdLibraryBooks />}
                      title="Academics, editorial & speaking"
                      items={doctor.academic}
                      brand={vaayu}
                      elevated
                    />
                    <div
                      className="rounded-3xl p-6 shadow-sm"
                      style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                          style={{ backgroundColor: vaayu.olive }}
                        >
                          <MdOutlineStar className="text-xl" />
                        </span>
                        <div>
                          <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                            Publications & chapters
                          </p>
                          <p className="mt-1 text-sm text-neutral-700">
                            45 publications and 5 book chapters in national & international journals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePanel === "social" && (
                  <InfoCard icon={<MdGroups />} title="Social impact" items={doctor.social} brand={vaayu} elevated />
                )}

                {activePanel === "memberships" && (
                  <div className="rounded-3xl p-6 shadow-sm" style={{ backgroundColor: "#ffffff", border: `1px solid ${vaayu.sage}` }}>
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                        style={{ backgroundColor: vaayu.olive }}
                      >
                        <MdOutlineStar className="text-xl" />
                      </span>
                      <div>
                        <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                          Professional memberships
                        </p>
                        <p className="mt-1 text-sm text-neutral-700">Active memberships in leading respiratory and pulmonary societies.</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {doctor.memberships.map((m) => (
                        <MiniTag key={m} text={m} brand={vaayu} />
                      ))}
                    </div>
                  </div>
                )}

                {activePanel === "interests" && (
                  <div className="rounded-3xl p-6 shadow-sm" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                        style={{ backgroundColor: vaayu.olive }}
                      >
                        <MdWorkspacePremium className="text-xl" />
                      </span>
                      <div>
                        <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                          Areas of interest
                        </p>
                        <p className="mt-1 text-sm text-neutral-700">Advanced respiratory and interventional pulmonology focus areas.</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {doctor.areasOfInterest.map((a) => (
                        <Chip key={a} text={a} brand={vaayu} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky sidebar */}
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

              {/* Mini “Explore profile” */}
              <div className="mt-4 rounded-3xl p-6 shadow-sm" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                  Explore profile
                </p>
                <p className="mt-1 text-sm text-neutral-700">
                  Switch tabs in “About” to view leadership, academics, memberships and interests.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <MiniAction onClick={() => setActivePanel("leadership")} label="Leadership" brand={vaayu} />
                  <MiniAction onClick={() => setActivePanel("academic")} label="Academics" brand={vaayu} />
                  <MiniAction onClick={() => setActivePanel("memberships")} label="Memberships" brand={vaayu} />
                  <MiniAction onClick={() => setActivePanel("interests")} label="Interests" brand={vaayu} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE + BOOKING ================= */}
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
                  Patients consult {doctor.name} for ILD, COPD, Asthma, Tuberculosis and Sleep apnea.
                </p>
              </div>
            </div>

            <div
              id="book"
              className="rounded-3xl p-7 shadow-sm"
              style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}
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
                    Online consultation
                  </p>
                  <p className="mt-1">{doctor.booking.onlineNote}</p>
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

              <p className="mt-3 text-xs text-neutral-500">
                Tip: Share your symptoms (breathlessness, cough, snoring, sleep issues) while booking to save time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMINGS ================= */}
     <section
  id="timings"
  className="border-t"
  style={{
    background: `linear-gradient(135deg, ${vaayu.paper}, ${vaayu.sage}30)`,
  }}
>
  <div className="mx-auto max-w-6xl px-4 py-14">
    {/* Header */}
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
        Book an Appointment      </a>
    </div>

  {/* Timings Card */}
<div
  className="mt-8 overflow-hidden rounded-3xl border shadow-2xl"
  style={{
    borderColor: `${vaayu.sage}55`,
background: `linear-gradient(180deg, ${vaayu.dark} 0%, ${vaayu.olive} 100%)`,  }}
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
        <tr
          key={row.day}
          className="transition hover:bg-white/5"
        >
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


{/* Note */}
{/* Note */}
<p className="mt-4 text-xs text-neutral-400">
  ⓘ Timings may change on holidays or due to clinical commitments. Please confirm
  while booking.
</p>

</div>   {/* ✅ close container div */}
</section>  {/* ✅ close timings section */}




      {/* ================= CALL POPUP MODAL ================= */}
      {isCallOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCallOpen(false)} />

          <div className="relative w-full max-w-sm rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: vaayu.olive }}>
                Call Clinic
              </p>

              <h3 className="mt-2 text-xl font-extrabold" style={{ color: vaayu.dark }}>
                {doctor.clinic.name}
              </h3>

              <p className="mt-3 text-sm text-neutral-700">Phone number</p>

              <div className="mt-2 rounded-2xl px-4 py-3" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                <p className="text-lg font-extrabold" style={{ color: vaayu.dark }}>
                  {doctor.booking.phoneDisplay}
                </p>
                <p className="text-xs text-neutral-500 mt-1">(Tap “Call now” to dial)</p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsCallOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.paper, color: vaayu.dark, border: `1px solid ${vaayu.sage}` }}
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
    <div className="rounded-2xl border border-white/60 p-4 shadow-sm transition hover:-translate-y-[1px]" style={{ backgroundColor: bg }}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ backgroundColor: accent }}>
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
      style={{ backgroundColor: "#ffffff", border: `1px solid ${brand.sage}` }}
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
        boxShadow: elevated ? "0 18px 45px rgba(0,0,0,0.08)" : "0 1px 2px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: brand.olive }}>
          <span className="text-xl">{icon}</span>
        </span>
        <div>
          <p className="text-sm font-extrabold" style={{ color: brand.dark }}>
            {title}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {items.map((it) => (
              <li key={it} className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: brand.olive }} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MiniAction({ label, onClick, brand }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl px-3 py-2 text-xs font-bold transition active:scale-[0.99]"
      style={{
        backgroundColor: "#ffffff",
        color: brand.dark,
        border: `1px solid ${brand.sage}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = brand.sage;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#ffffff";
      }}
    >
      {label}
    </button>
  );
}
