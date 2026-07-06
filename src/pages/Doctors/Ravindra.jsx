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
  MdEmail,
  MdVideoCall,
} from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

import ravindraImg from "../../assets/img/DSC00661 (1).jpg";
import aboutBg from "../../assets/img/logo_make_11_06_2023_412.jpg";

export default function Ravindra() {
  const doctor = useMemo(
    () => ({
      name: "Dr. Ravindra M Mehta",
      qualifications: "MBBS, MD, American Board ( Pulmonary Medicine, Internal Medicine, Critical Care , Sleep Medicine)",
      experienceLabel: "26+ Years Experience",
      subtitle: "Founder, Vaayu Chest & Sleep Specialists",

      summary: [
        "Seasoned Pulmonology and Critical Care Medicine Specialist with over 26 years of experience.",
        "Expert in Pulmonary Medicine, Interventional Pulmonology, Critical Care Medicine, and Sleep Medicine.",
        "Known for patient-centric care, thorough evaluation, and personalized treatment planning.",
      ],

      about: [
        "Dr. Ravindra Mehta is a highly experienced  Seasoned Pulmonology and Critical Care Medicine Specialist with more than 26 years of experience in the diagnosis and treatment of respiratory disorders.",
        "He completed his MBBS at Seth G S Medical College and KEM Hospital, University of Mumbai, followed by an MD in Internal Medicine from Lokmanya Tilak (Sion) Hospital, Mumbai. He later pursued advanced medical training in the United States, including a second MD in Internal Medicine from the State University of New York at Brooklyn (Downstate Medical Center).",
        "Dr. Mehta underwent fellowship training in Pulmonary Medicine, Critical Care Medicine, and Sleep Disorders Medicine at Winthrop University Hospital, New York, followed by Interventional Pulmonology training in New York, Boston, and France. He has established one of the leading Interventional Pulmonary Programs in the country and the first of its kind in Karnataka.",
      ],

      positions: [
        {
          role: "Founder",
          org: "Vaayu Chest & Sleep Specialists",
          icon: <MdWorkspacePremium />,
        },
        {
          role: "Pulmonologist",
          org: "Pulmonary & Respiratory Medicine",
          icon: <MdLocalHospital />,
        },
        {
          role: "Interventional Pulmonology Specialist",
          org: "Advanced airway and lung care",
          icon: <MdVerified />,
        },
      ],

      specializations: [
        "Pulmonary Medicine",
        "Interventional Pulmonology",
        "Critical Care Medicine",
        "Sleep Medicine",
      ],

      boardCertifications: [
        "Diplomat of the American Board of Pulmonary (Respiratory/Chest) Medicine",
        "Diplomat of the American Board of Critical Care (Intensive Care) Medicine",
        "Diplomat of the American Board of Sleep Medicine",
        "Diplomat of the American Association of Sleep Medicine",
        "Diplomat of the American Board of Internal Medicine (General Medicine)",
      ],

      treatments: [
        "Bronchiolitis Treatment",
        "Bronchiectasis Treatment",
        "Bronchial Asthma Treatment",
        "Pneumonia Treatment",
        "Respiratory Treatment",
        "Chest Disease Treatment",
      ],

      academic: [
        "Authored over 50 professional papers and abstracts.",
        "Written book chapters and reviewed articles for professional journals.",
        "Presented groundbreaking work in Interventional Pulmonology at international American and European meetings.",
      ],

      research: [
        "Mehta R, Niederman MS. Acute infectious pneumonia. Irwin & Rippe’s Intensive Care Medicine, 5th Edition, pages 796–816; rewritten in the 6th Edition.",
        "Adequate empirical therapy minimizes the impact of diagnostic methods in patients with ventilator-associated pneumonia.",
        "Natural history and variability of respiratory isolates and antibiotic susceptibility in a medical ICU.",
        "Continuous Positive Airway Pressure in Heart Failure with Cheyne-Stokes Respiration and Central Sleep Apnea – an important factor influencing mortality.",
      ],

      memberships: [
        "American Board of Pulmonary Medicine",
        "American Board of Critical Care Medicine",
        "American Board of Sleep Medicine",
        "American Association of Sleep Medicine",
        "American Board of Internal Medicine",
      ],

      languages: ["English", "Hindi", "Kannada"],

      clinic: {
        name: "Vaayu Chest & Sleep Specialists",
        address:
          "Ground & 3rd Floor, 37/17, 10th Main Rd, Jayanagar 5th Block, Bengaluru, Karnataka 560041, India",
        city: "Bengaluru",
        region: "Karnataka",
        country: "IN",
        postalCode: "560041",
      },

      philosophy:
        "Believes in advanced, evidence-based, and patient-centric respiratory care focused on improving quality of life.",

      consultationModes: ["In-clinic Consultation", "Video Consultation"],

      booking: {
        phoneDisplay: "+91 63649 28680",
        phoneLink: "tel:+916364928680",
        email: "info@vaayuchest.com",
        emailLink: "mailto:info@vaayuchest.com",
        clinicBookingNote:
          "Please contact the clinic for appointment scheduling and availability.",
      },
    }),
    []
  );

  const [isCallOpen, setIsCallOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("about");
  const [aboutExpanded, setAboutExpanded] = useState(false);

useEffect(() => {
  const SITE_NAME = "Vaayu Chest & Sleep Specialists";
  const PAGE_PATH = "/doctors/dr-ravindra-mehta";

  const SITE_ORIGIN =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://vaayuchest.com";

  const CANONICAL_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

  const OG_IMAGE = `${SITE_ORIGIN}/og/doctors/dr-ravindra-mehta.jpg`;

  const title = `${doctor.name} | Pulmonologist in Bengaluru | ${SITE_NAME}`;

  const description =
    `${doctor.name} is a senior Pulmonologist with 26+ years of experience in ` +
    `Pulmonary Medicine, Interventional Pulmonology, Critical Care Medicine and Sleep Medicine at Vaayu Chest & Sleep Specialists, Bengaluru.`;

  const keywords = [
    "Dr Ravindra Mehta",
    "Pulmonologist Bengaluru",
    "Pulmonary specialist Bangalore",
    "Interventional Pulmonology",
    "Sleep Medicine specialist",
    "Critical Care specialist",
    "Asthma specialist Bengaluru",
    "COPD specialist Bengaluru",
    "ILD specialist Bengaluru",
    "Vaayu Chest and Sleep Specialists",
    "Respiratory specialist Bangalore",
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

  // Basic SEO
  upsertMeta("description", description);
  upsertMeta("keywords", keywords);

  upsertMeta(
    "robots",
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
  );

  upsertLink("canonical", CANONICAL_URL);

  // Open Graph
  upsertMeta("og:title", title, "property");
  upsertMeta("og:description", description, "property");
  upsertMeta("og:type", "profile", "property");
  upsertMeta("og:url", CANONICAL_URL, "property");
  upsertMeta("og:image", OG_IMAGE, "property");
  upsertMeta("og:site_name", SITE_NAME, "property");

  // Twitter
  upsertMeta("twitter:card", "summary_large_image");
  upsertMeta("twitter:title", title);
  upsertMeta("twitter:description", description);
  upsertMeta("twitter:image", OG_IMAGE);

  // Physician Schema
  upsertScriptJsonLd("schema-ravindra-mehta", {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description,
    medicalSpecialty: [
      "Pulmonology",
      "Interventional Pulmonology",
      "Critical Care Medicine",
      "Sleep Medicine",
    ],

    knowsAbout: doctor.specializations,

    hasCredential: doctor.qualifications,

    worksFor: {
      "@type": "MedicalClinic",
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
    const schema = document.getElementById("schema-ravindra-mehta");

    if (schema) schema.remove();
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
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-xl">
                  <img
                    src={ravindraImg}
                    alt={doctor.name}
                    className="h-[360px] w-full object-cover md:h-[420px]"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: vaayu.olive }}
                    >
                      <MdVerified className="text-base" />
                      Vaayu Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold" style={{ color: vaayu.olive }}>
                Doctor Profile
              </p>

              <h1
                className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl"
                style={{ color: vaayu.dark }}
              >
                {doctor.name}
              </h1>

              <p className="mt-2 text-base font-medium" style={{ color: vaayu.olive }}>
                {doctor.subtitle}
              </p>

<div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">            
                <Pill text={doctor.qualifications} color={vaayu.dark} bg="#ffffff" border />
                <Pill text={doctor.experienceLabel} color="#ffffff" bg={vaayu.olive} />
              </div>

              <div
                className="mt-5 rounded-3xl p-5 shadow-sm"
                style={{
                  backgroundColor: vaayu.paper,
                  border: `1px solid ${vaayu.sage}`,
                }}
              >
                <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                  Care overview
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {doctor.summary.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: vaayu.olive }} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

<div className="mt-6 flex flex-wrap items-center gap-4">                <a
  href="https://www.eka.care/doctor/ravindra-mehta-pulmonologist-bengaluru?cid=64f5cb188d530b001eecbee9&utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white"
  style={{ backgroundColor: vaayu.olive }}
>
  Book an Appointment</a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold"
                  style={{
                    backgroundColor: "#ffffff",
                    color: vaayu.dark,
                    border: `1px solid ${vaayu.sage}`,
                  }}
                >
                  About
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
                  icon={<MdVideoCall />}
                  title="Consultation"
                  value="In-clinic & Video Consultation"
                  accent={vaayu.olive}
                  bg={vaayu.paper}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            opacity: 0.08,
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
              <h2 className="text-2xl font-extrabold" style={{ color: vaayu.dark }}>
                About the doctor
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                <TabButton active={activePanel === "about"} onClick={() => setActivePanel("about")} brand={vaayu} label="Overview" />
                <TabButton active={activePanel === "specializations"} onClick={() => setActivePanel("specializations")} brand={vaayu} label="Specializations" />
                <TabButton active={activePanel === "treatments"} onClick={() => setActivePanel("treatments")} brand={vaayu} label="Treatments" />
                <TabButton active={activePanel === "research"} onClick={() => setActivePanel("research")} brand={vaayu} label="Research" />
                <TabButton active={activePanel === "memberships"} onClick={() => setActivePanel("memberships")} brand={vaayu} label="Memberships" />
              </div>

              <div className="mt-6">
                {activePanel === "about" && (
                  <div className="grid gap-4">
                    <div
                      className="rounded-3xl p-6 shadow-sm"
                      style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                          Profile summary
                        </p>

                        <button
                          type="button"
                          onClick={() => setAboutExpanded((v) => !v)}
                          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold"
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

                    <InfoCard
                      icon={<MdWorkspacePremium />}
                      title="Medical philosophy"
                      items={[doctor.philosophy]}
                      brand={vaayu}
                    />
                  </div>
                )}

                {activePanel === "specializations" && (
                  <div className="grid gap-4">
                    <InfoCard
                      icon={<MdLocalHospital />}
                      title="Core special interests"
                      items={doctor.specializations}
                      brand={vaayu}
                    />
                    <InfoCard
                      icon={<MdVerified />}
                      title="American Board Certifications"
                      items={doctor.boardCertifications}
                      brand={vaayu}
                    />
                  </div>
                )}

                {activePanel === "treatments" && (
                  <InfoCard
                    icon={<MdOutlineStar />}
                    title="List of treatments"
                    items={doctor.treatments}
                    brand={vaayu}
                  />
                )}

                {activePanel === "research" && (
                  <div className="grid gap-4">
                    <InfoCard
                      icon={<MdLibraryBooks />}
                      title="Academic contributions"
                      items={doctor.academic}
                      brand={vaayu}
                    />
                    <InfoCard
                      icon={<MdSchool />}
                      title="Research & publications"
                      items={doctor.research}
                      brand={vaayu}
                    />
                  </div>
                )}

                {activePanel === "memberships" && (
                  <div className="grid gap-4">
                    <InfoCard
                      icon={<MdGroups />}
                      title="Memberships & certifications"
                      items={doctor.memberships}
                      brand={vaayu}
                    />
                    <div className="rounded-3xl p-6 shadow-sm" style={cardBase}>
                      <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                        Languages spoken
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {doctor.languages.map((lang) => (
                          <MiniTag key={lang} text={lang} brand={vaayu} />
                        ))}
                      </div>
                    </div>
                  </div>
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
                  

                 <div className="mt-6 grid gap-3 sm:grid-cols-2">

  {/* ✅ BOOK APPOINTMENT (EKA LINK) */}
  <a
    href="https://www.eka.care/doctor/ravindra-mehta-pulmonologist-bengaluru?cid=64f5cb188d530b001eecbee9&utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white"
    style={{ backgroundColor: vaayu.olive }}
  >
    Book an Appointment  </a>

  {/* EXISTING CALL BUTTON */}
  <button
    type="button"
    onClick={() => setIsCallOpen(true)}
    className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold"
    style={{
      backgroundColor: "#ffffff",
      color: vaayu.dark,
      border: `1px solid ${vaayu.sage}`,
    }}
  >
    <MdCall className="text-lg" />
    Call Clinic
  </button>

</div>
                </div>
              </div>

              <div className="mt-4 rounded-3xl p-6 shadow-sm" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                  Consultation modes
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {doctor.consultationModes.map((mode) => (
                    <MiniTag key={mode} text={mode} brand={vaayu} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
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
                  Available consultation modes
                </p>
                <p className="mt-1">Both in-clinic and video consultation are available.</p>
              </div>

              <div>
                <p className="font-bold" style={{ color: vaayu.dark }}>
                  Appointment contact
                </p>
                <p className="mt-1">{doctor.booking.clinicBookingNote}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
             

              <button
                type="button"
                onClick={() => setIsCallOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: "#ffffff",
                  color: vaayu.dark,
                  border: `1px solid ${vaayu.sage}`,
                }}
              >
                <MdCall className="text-lg" />
                Call Clinic
              </button>
            </div>
          </div>
        </div>
      </section>

      {isCallOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCallOpen(false)} />
          <div className="relative w-full max-w-sm rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: vaayu.olive }}>
                Call Clinic
              </p>

              <h3 className="mt-2 text-xl font-extrabold" style={{ color: vaayu.dark }}>
                {doctor.clinic.name}
              </h3>

              <div className="mt-2 rounded-2xl px-4 py-3" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                <p className="text-lg font-extrabold" style={{ color: vaayu.dark }}>
                  {doctor.booking.phoneDisplay}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsCallOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold"
                  style={{ backgroundColor: vaayu.paper, color: vaayu.dark, border: `1px solid ${vaayu.sage}` }}
                >
                  Close
                </button>

                <a
                  href={doctor.booking.phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white"
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
    </main>
  );
}

function Pill({ text, icon, color, bg, border = false }) {
  return (
    <span
className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-semibold"      style={{
        backgroundColor: bg,
        color,
        border: border ? "1px solid #e5e7eb" : "none",
      }}
    >
      {icon ? <span className="flex items-center justify-center text-sm">
  {icon}
</span> : null}
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
    <div className="rounded-2xl border border-white/60 p-4 shadow-sm" style={{ backgroundColor: bg }}>
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
      className="rounded-2xl px-4 py-2 text-sm font-semibold"
      style={{
        backgroundColor: active ? brand.olive : "#ffffff",
        color: active ? "#ffffff" : brand.dark,
        border: `1px solid ${brand.sage}`,
      }}
    >
      {label}
    </button>
  );
}

function InfoCard({ icon, title, items, brand }) {
  return (
    <div
      className="rounded-3xl p-6 shadow-sm"
      style={{
        backgroundColor: "#ffffff",
        border: `1px solid ${brand.sage}`,
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