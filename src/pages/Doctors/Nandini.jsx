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
  MdPsychology,
  MdVideoCall,
} from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

import nandiniImg from "../../assets/img/doctors/nandini naidu.JPG";
import aboutBg from "../../assets/img/logo_make_11_06_2023_412.jpg";

export default function Nandini() {
  const doctor = useMemo(
    () => ({
      name: "Nandini G",
      title: "Clinical Psychologist",
      qualifications: "M.Phil. Clinical Psychology",
      experienceLabel: "6+ yrs Experience",
      license: "RCI-Licensed Clinical Psychologist",

      summary: [
        "RCI-licensed Clinical Psychologist with 6+ years of experience across hospitals, outpatient settings, and mental health centres.",
        "Experienced in working with children, adolescents, adults, and older adults.",
        "Offers compassionate, patient-centered care with a focus on long-term emotional well-being and resilience.",
      ],

      about: [
        "Nandini G is an RCI-licensed Clinical Psychologist with over 6 years of experience across hospitals, outpatient settings, and mental health centres.",
        "She works with children, adolescents, adults, and older adults, offering comprehensive psychological assessments and evidence-based therapeutic interventions tailored to each person’s needs.",
        "Her approach is rooted in empathy and scientific care, with a focus on building strong therapeutic relationships and supporting meaningful, long-term emotional well-being.",
      ],

      positions: [
        {
          role: "Clinical Psychologist",
          org: "Vaayu Chest & Sleep Specialists",
          icon: <MdPsychology />,
        },
        {
          role: "RCI-Licensed Mental Health Professional",
          org: "Psychological Assessment & Evidence-Based Therapy",
          icon: <MdVerified />,
        },
        {
          role: "Multidisciplinary Care Specialist",
          org: "Collaborative mental health support across age groups",
          icon: <MdGroups />,
        },
      ],

      leadership: [
        "Works closely with multidisciplinary teams to provide integrated mental health care.",
        "Focuses on personalized treatment plans designed around each patient’s emotional, behavioural, and psychological needs.",
        "Supports long-term emotional well-being, resilience, and meaningful life outcomes through structured psychological care.",
      ],

      academic: [
        "Published research in peer-reviewed journals on substance use and cognitive functioning.",
        "Co-authored research on quality of life and coping among patients with chronic medical conditions.",
        "Trained in evidence-based psychotherapy approaches including CBT, DBT, behavioral and mindfulness-based therapies.",
      ],

      social: [
        "Provides compassionate and patient-centered care across different life stages, including children, adolescents, adults, and older adults.",
      ],

      memberships: ["RCI Registered Clinical Psychologist"],

      areasOfInterest: [
        "Psychological Assessment",
        "CBT",
        "DBT",
        "Behavioral Therapy",
        "Mindfulness-Based Therapy",
        "Mood Disorders",
        "Sleep Hygiene",
        "Insomnia Management",
        "Psychological Care in Medical Conditions",
      ],

      highlights: [
        "Anxiety",
        "Depression",
        "Stress Disorders",
        "Sleep Disorders",
        "Personality Concerns",
        "Substance Use Disorders",
      ],

      specializations: [
        "Comprehensive Psychological Assessment & Diagnosis",
        "Evidence-based Psychotherapy",
        "CBT, DBT, Behavioral and Mindfulness-based therapies",
      ],

      subSpecialties: [
        "Management of mood disorders – depression, anxiety and stress-related disorders",
        "Emotional dysregulation and personality concerns",
        "Behavioral interventions for sleep hygiene and insomnia management",
        "Psychological care in medical conditions",
      ],

      conditionsTreated: [
        "Mood disorders like anxiety and depression",
        "Adjustment and stress-related disorders",
        "Personality issues",
        "Substance use disorders",
        "Sleep disorders",
        "Psycho-somatic disorders",
        "Chronic medical conditions",
      ],

      achievements: [
        "Registered Clinical Psychologist with the Rehabilitation Council of India (RCI)",
        "Published research in peer-reviewed journals on substance use and cognitive functioning",
        "Co-authored research on quality of life and coping among patients with chronic medical conditions",
      ],

      languages: ["English", "Kannada", "Telugu", "Tamil", "Hindi"],

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
        { day: "Monday", time: "11:00 AM - 4:30 PM" },
        { day: "Tuesday", time: "11:00 AM - 4:30 PM" },
        { day: "Thursday", time: "11:00 AM - 4:30 PM" },
      ],

      consultationModes: ["In-clinic Consultation", "Video Consultation"],

      philosophy:
        "Personalized care rooted in empathy and scientific approach.",

      booking: {
        email: "nandini.naidu13@gmail.com",
        emailLink: "mailto:nandini.naidu13@gmail.com",
        phoneDisplay: "+91 Contact Clinic",
        phoneLink: "tel:+916364928680",
        clinicBookingNote:
          "Both in-clinic and video consultations are available. Please contact the clinic or email for appointment coordination.",
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
    const SITE_NAME = "Vaayu Chest & Sleep Specialists";
    const PAGE_PATH = "/doctors/nandini-g";
    const SITE_ORIGIN =
      typeof window !== "undefined" ? window.location.origin : "https://vaayuchest.com";
    const CANONICAL_URL = `${SITE_ORIGIN}${PAGE_PATH}`;
    const OG_IMAGE = `${SITE_ORIGIN}/og/doctors/nandini-g.jpg`;

    const title = `${doctor.name} | Clinical Psychologist in Jayanagar, Bengaluru | ${SITE_NAME}`;
    const description =
      `${doctor.name} is an RCI-licensed Clinical Psychologist at ${doctor.clinic.name}, ${doctor.clinic.city}. ` +
      `Expertise in psychological assessment, CBT, DBT, anxiety, depression, stress-related disorders, sleep issues, and emotional well-being.`;

    const keywords = [
      "Clinical Psychologist Bengaluru",
      "Psychologist Jayanagar",
      "RCI licensed psychologist Bengaluru",
      "CBT psychologist Bengaluru",
      "DBT therapist Bengaluru",
      "Anxiety psychologist Bengaluru",
      "Depression counselling Bengaluru",
      "Sleep hygiene psychologist Bengaluru",
      "Vaayu Chest and Sleep Specialists",
      "Nandini G Clinical Psychologist",
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

    upsertScriptJsonLd("schema-physician-nandini-g", {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: doctor.name,
      description,
      medicalSpecialty: ["Clinical Psychology", "Psychotherapy", "Behavioral Health"],
      hasCredential: doctor.qualifications,
      knowsAbout: doctor.highlights,
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

    upsertScriptJsonLd("schema-clinic-vaayu-jayanagar-psychology", {
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
        { "@type": "MedicalSpecialty", name: "Clinical Psychology" },
        { "@type": "MedicalSpecialty", name: "Behavioral Health" },
      ],
    });

    return () => {
      const s1 = document.getElementById("schema-physician-nandini-g");
      if (s1) s1.remove();
      const s2 = document.getElementById("schema-clinic-vaayu-jayanagar-psychology");
      if (s2) s2.remove();
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
      {/* HERO */}
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
<div className="order-1 md:order-none">
       <div className="relative mx-auto w-full max-w-sm">
                <div
                  className="absolute -inset-3 rounded-[28px] opacity-25 blur-xl"
                  style={{ backgroundColor: vaayu.olive }}
                />
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-xl">
                  <img
                    src={nandiniImg}
                    alt="Nandini G"
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

<div className="order-2 md:order-none">              <p className="text-sm font-semibold" style={{ color: vaayu.olive }}>
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
                    Care overview
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
                  href="#book"
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
                  icon={<MdVideoCall />}
                  title="Consultation"
                  value="In-clinic & Video Consultation"
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
      opacity: 0.08,
      filter: "grayscale(100%)",
      transform: "scale(1.03)",
    }}
  />

  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background: `linear-gradient(120deg, ${vaayu.paper} 0%, #ffffff 45%, ${vaayu.sage} 100%)`,
      opacity: 0.75,
    }}
  />

  <div className="relative mx-auto max-w-6xl px-4 py-14">
    
    {/* 🔥 DYNAMIC LAYOUT FIX */}
    <div
      className={`grid gap-6 ${
        activePanel === "about"
          ? "md:grid-cols-[1.35fr_0.65fr]"
          : "grid-cols-1"
      } md:items-start`}
    >
      
      {/* 🔥 IMAGE FIRST (WHEN NOT ABOUT) */}
      {activePanel !== "about" && (
        <div className="mb-6">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-3 rounded-[28px] opacity-20 blur-xl"
              style={{ backgroundColor: vaayu.olive }}
            />
            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-lg">
              <img
                src={nandiniImg}
                alt="Nandini G"
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* LEFT CONTENT */}
      <div
        className="relative overflow-hidden rounded-3xl p-7 shadow-sm transition"
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

            <h2
              className="mt-2 text-2xl font-extrabold"
              style={{ color: vaayu.dark }}
            >
              About the doctor
            </h2>

            <p className="mt-2 text-sm text-neutral-700">
              Profile summary, specializations, treated conditions and achievements.
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-6 flex flex-wrap gap-2">
          <TabButton active={activePanel === "about"} onClick={() => setActivePanel("about")} brand={vaayu} label="Overview" />
          <TabButton active={activePanel === "specializations"} onClick={() => setActivePanel("specializations")} brand={vaayu} label="Specializations" />
          <TabButton active={activePanel === "conditions"} onClick={() => setActivePanel("conditions")} brand={vaayu} label="Conditions" />
          <TabButton active={activePanel === "academic"} onClick={() => setActivePanel("academic")} brand={vaayu} label="Research" />
          <TabButton active={activePanel === "languages"} onClick={() => setActivePanel("languages")} brand={vaayu} label="Languages" />
        </div>

        {/* CONTENT SWITCH */}
        <div className="mt-6">

          {activePanel === "about" && (
            <div className="space-y-3 text-sm text-neutral-700">
              {doctor.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}

          {activePanel === "specializations" && (
            <InfoCard title="Specializations" items={doctor.specializations} brand={vaayu} />
          )}

          {activePanel === "conditions" && (
            <InfoCard title="Conditions Treated" items={doctor.conditionsTreated} brand={vaayu} />
          )}

          {activePanel === "academic" && (
            <InfoCard title="Research & Publications" items={doctor.academic} brand={vaayu} />
          )}

          {activePanel === "languages" && (
            <div className="flex flex-wrap gap-2">
              {doctor.languages.map((lang) => (
                <MiniTag key={lang} text={lang} brand={vaayu} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE PANEL (ONLY IN ABOUT) */}
      {activePanel === "about" && (
        <aside className="md:sticky md:top-24 space-y-4">
          
          <div className="rounded-3xl p-6 shadow-sm" style={cardBase}>
            <h3 className="text-sm font-bold" style={{ color: vaayu.dark }}>
              Clinic
            </h3>
            <p className="mt-2 text-sm font-semibold">{doctor.clinic.name}</p>
            <p className="text-sm text-neutral-700 mt-1">{doctor.clinic.address}</p>
          </div>

          <div className="rounded-3xl p-6 shadow-sm" style={cardBase}>
            <p className="text-sm font-semibold">Quick actions</p>

            <div className="mt-3 grid gap-3">
              <a
                href={doctor.booking.emailLink}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white text-center"
                style={{ backgroundColor: vaayu.olive }}
              >
                Email for Appointment
              </a>

              <button
                onClick={() => setIsCallOpen(true)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: vaayu.paper,
                  border: `1px solid ${vaayu.sage}`,
                }}
              >
                Call Clinic
              </button>
            </div>
          </div>

        </aside>
      )}
    </div>
  </div>
</section>
      {/* BOOKING + EXTRA */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: vaayu.dark }}>
                Areas of focus
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {doctor.areasOfInterest.map((item) => (
                  <Chip key={item} text={item} brand={vaayu} />
                ))}
              </div>

              <div className="mt-6 rounded-3xl p-6 shadow-sm" style={cardBase}>
                <h3 className="text-base font-bold" style={{ color: vaayu.dark }}>
                  Why do patients consult {doctor.name}?
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Patients may consult {doctor.name} for anxiety, depression, stress-related concerns,
                  emotional dysregulation, sleep issues, substance use concerns, psycho-somatic issues,
                  and psychological support in chronic medical conditions.
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
                    Available consultation modes
                  </p>
                  <p className="mt-1">Both in-clinic and video consultation are available.</p>
                </div>

                <div>
                  <p className="font-bold" style={{ color: vaayu.dark }}>
                    Available days
                  </p>
                  <p className="mt-1">Monday, Tuesday and Thursday — 11:00 AM to 4:30 PM</p>
                </div>

                <div>
                  <p className="font-bold" style={{ color: vaayu.dark }}>
                    Appointment contact
                  </p>
                  <p className="mt-1">{doctor.booking.clinicBookingNote}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={doctor.booking.emailLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.olive }}
                >
                  <MdEmail className="text-lg" />
                  Email Now
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
                You can request either an in-person or video consultation while booking.
              </p>
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
                Consultation schedule at <span className="font-semibold">{doctor.clinic.name}</span>, Jayanagar 5th Block.
              </p>
            </div>

            
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

          <p className="mt-4 text-xs text-neutral-400">
            ⓘ Timings may change on holidays or due to clinic schedules. Please confirm while booking.
          </p>
        </div>
      </section>

      {/* CALL MODAL */}
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
                  +91 63649 28680
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

/* Small UI Components */

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