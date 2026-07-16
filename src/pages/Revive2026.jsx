// src/pages/Revive2026.jsx
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Confetti from "react-confetti";
import "swiper/css";

import heroImg from "../assets/img/digital-art-style-theatre-stage.jpg";
import eventImg from "../assets/img/people-taking-part.jpg";
import heroImg2 from "../assets/img/front-view-woman-meditating-mat.jpg";
import ganeshImg from "../assets/img/Dr Ganesh Raghu.png";
import sallyImg from "../assets/img/Dr Sally.png";
import rikImg from "../assets/img/Dr Rik framed.png";
import shaswatImg from "../assets/img/Dr Shashwat.png";
import veenaImg from "../assets/img/Dr veena.png";
import satishImg from "../assets/img/Dr k s Satish.png";
import venkateshImg from "../assets/img/Dr Venkatesh T k.png";
import waqarImg from "../assets/img/waqar naqvi.png";
import barryImg from "../assets/img/barry.jpeg";
import mariyaImg from "../assets/img/dr mariya.jpeg";
import sameerImg from "../assets/img/sameer.jpeg";
import yogitaImg from "../assets/img/DR YOGITA HATMODE.jpg";
import dhilipImg from "../assets/img/dr dilip.jpeg";
import shradhaImg from "../assets/img/dr shradha.jpeg";

import hl1 from "../assets/highlights/web/h1.jpg";
import hl2 from "../assets/highlights/web/h2.jpg";
import hl3 from "../assets/highlights/web/h3.jpg";
import hl4 from "../assets/highlights/web/h4.jpg";
import hl5 from "../assets/highlights/web/h5.jpg";
import hl6 from "../assets/highlights/web/h6.jpg";
import hl7 from "../assets/highlights/web/h7.jpg";
import hl8 from "../assets/highlights/web/h8.jpg";
import hl9 from "../assets/highlights/web/h9.jpg";
import hl10 from "../assets/highlights/web/h10.jpg";

const HIGHLIGHTS_2025 = [hl1, hl2, hl3, hl4, hl5, hl6, hl7, hl8, hl9, hl10];

const BASE_URL = "https://vaayuchest.com";
const EVENT_DATE = new Date("2026-08-23T08:45:00+05:30");

const SEO_TITLE =
  "REVIVE 2026 – Reimagining Pulmonary & Cardiac Rehabilitation | Vaayu Chest & Sleep Specialists";
const SEO_DESCRIPTION =
  "REVIVE 2026, the Conclave of Pulmonary & Cardiac Rehabilitation by Vaayu Chest & Sleep Specialists, Bengaluru — practical skills, real-world challenges and future-ready technology. Sessions, hands-on workshops and pre-conference scientific paper presentations.";

const T = {
  green: "#61724e",
  deep: "#4f5831",
  light: "#eef4e9",
  soft: "#f7faf4",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const KEYNOTE_SPEAKERS = [
  {
    name: "Dr. Ganesh Raghu",
    role: "M.D., ATSF, FCCP, FACP — Director, Center for Interstitial Lung Disease (ILD) & Co-Director, Scleroderma Clinic, UWMC. Professor of Medicine, Adjunct Professor of Laboratory Medicine and Pathology, University of Washington (UW)",
    img: ganeshImg,
  },
  {
    name: "Dr. Sally Singh",
    role: "Professor of Pulmonary and Cardiac Rehabilitation, Centre for Exercise and Rehabilitation Science, University Hospitals of Leicester NHS Trust, UK",
    img: sallyImg,
  },
  {
    name: "Dr. Rik Gosselink",
    role: "Emeritus Professor, Department of Rehabilitation Sciences, Faculty of Movement and Rehabilitation Sciences, University of Leuven, Belgium. Extraordinary Professor, Stellenbosch University, South Africa",
    img: rikImg,
  },
  {
    name: "Dr. Waqar M. Naqvi",
    role: "PhD, FIAP, International FIAMER Institute Fellow — Founder & Director, AD VIVUM Education and Research, Qatar",
    img: waqarImg,
  },
  {
    name: "Dr. Barry A. Franklin",
    role: "PhD, FACSM, MAACVPR, FAHA, FASPC, FPCNA (Hon) — Director (Emeritus), Preventive Cardiology and Cardiac Rehabilitation, Corewell Health East, William Beaumont University Hospital, Royal Oak",
    img: barryImg,
  },
];

const SPEAKERS = [
  {
    name: "Dr. K S Satish",
    role: "Pulmonologist, Manipal Hospital, Bangalore",
    img: satishImg,
  },
  {
    name: "Dr. Venkatesh T K",
    role: "Interventional Cardiologist, Apollo Hospital, Bangalore",
    img: venkateshImg,
  },
  {
    name: "Dr. Veena Kiran Nambiar",
    role: "Professor, Ramaiah College of Physiotherapy, Ramaiah Memorial Hospital, Bangalore",
    img: veenaImg,
  },
  {
    name: "Dr. Shaswat Verma",
    role: "Associate Professor, Ramaiah College of Physiotherapy, Bangalore",
    img: shaswatImg,
  },
  {
    name: "Dr. Mariya Jiandani",
    role: "Prof & HOD (Physiotherapy), Seth GSMC & KEMH. Cardiac Rehabilitation Foundation Certified, FAIMER Fellow & Faculty, IFI Fellow 2024",
    img: mariyaImg,
  },
  {
    name: "Dr. Sameer Bansal",
    role: "Organizing Chairman, REVIVE 2025 — Consultant Pulmonologist & Clinical Head, Vaayu Chest & Sleep Specialists",
    img: sameerImg,
  },
  {
    name: "Dr. Yogita Hatmode",
    role: "Organizing Secretary, REVIVE 2025 — Head, Pulmonary Wellness & Rehabilitation, Vaayu Chest & Sleep Specialists",
    img: yogitaImg,
  },
  {
    name: "Dr. R. Dhilip Kumar",
    role: "HOD — Cardiac Rehab, Vaayu Chest & Sleep Speciality Centre",
    img: dhilipImg,
  },
  {
    name: "Dr. Shradha",
    role: "Specialist — Pulmonary Rehabilitation, Vaayu Chest & Sleep Specialists",
    img: shradhaImg,
  },
];

const REGISTER_URL = "https://forms.gle/VpHGZ17V5tZDi9fF6";

const EVENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "REVIVE 2026 — Conclave of Pulmonary & Cardiac Rehabilitation",
  description: SEO_DESCRIPTION,
  startDate: "2026-08-23T08:45:00+05:30",
  endDate: "2026-08-23T18:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: `${BASE_URL}/revive-2026`,
  image: [`${BASE_URL}/revive-2026-og.jpg`],
  location: {
    "@type": "Place",
    name: "Hyatt Centric Hebbal Bengaluru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hebbal",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "MedicalOrganization",
    name: "Vaayu Chest & Sleep Specialists",
    url: BASE_URL,
    telephone: "+91 63649 28680",
    email: "admin@vaayuchest.com",
  },
  performer: [...KEYNOTE_SPEAKERS, ...SPEAKERS].map((sp) => ({
    "@type": "Person",
    name: sp.name,
    description: sp.role,
  })),
  offers: {
    "@type": "Offer",
    url: REGISTER_URL,
    availability: "https://schema.org/InStock",
    validFrom: "2026-07-01T00:00:00+05:30",
  },
  subEvent: {
    "@type": "Event",
    name: "REVIVE 2026 Pre-Conference — Scientific Paper Presentation",
    description:
      "Virtual pre-conference scientific paper presentation session for pulmonary and cardiac rehabilitation research.",
    startDate: "2026-08-20T14:30:00+05:30",
    endDate: "2026-08-20T16:30:00+05:30",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: `${BASE_URL}/revive-2026`,
    },
  },
};

const Countdown = () => {
  const calc = () => {
    const diff = Math.max(0, EVENT_DATE.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff / 3600000) % 24,
      mins: Math.floor(diff / 60000) % 60,
      secs: Math.floor(diff / 1000) % 60,
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.mins },
    { label: "Seconds", value: t.secs },
  ];

  return (
    <section className="rv-countdown">
      <p className="revive-eyebrow">Save the Date — 23 August 2026</p>
      <h2 className="revive-heading" style={{ marginBottom: 28 }}>
        The Conclave Begins In
      </h2>
      <div className="rv-count-grid">
        {units.map((u) => (
          <div className="rv-count-tile" key={u.label}>
            <span className="num" key={u.value}>{String(u.value).padStart(2, "0")}</span>
            <span className="lbl">{u.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const CELEBRATION_COLORS = [
  "#61724e",
  "#8ba36b",
  "#c9d8b2",
  "#f2c94c",
  "#f2994a",
  "#ffffff",
];

const SpeakerCard = ({ sp, variant }) => (
  <div
    className={`speaker-slide revive-card${variant === "keynote" ? " keynote" : ""}`}
    tabIndex={0}
  >
    <div className="speaker-photo">
      {sp.img ? (
        <img src={sp.img} alt={sp.name} />
      ) : (
        <div className="speaker-initial">
          {sp.name.replace("Dr. ", "").charAt(0)}
        </div>
      )}
    </div>
    <div className="speaker-info">
      <h3>{sp.name}</h3>
      <p className="speaker-role-brief">{sp.role}</p>
      <p className="speaker-role-inline">{sp.role}</p>
    </div>
    <div className="speaker-overlay">
      {sp.img && <img src={sp.img} alt="" />}
      <div>
        <h3>{sp.name}</h3>
        <p className="speaker-role">{sp.role}</p>
      </div>
    </div>
  </div>
);

const Revive2026 = () => {
  const [celebrate, setCelebrate] = useState(true);
  const [winSize, setWinSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const onResize = () =>
      setWinSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <HelmetProvider>
      <div className="revive-page">
        {celebrate && (
          <Confetti
            width={winSize.width}
            height={winSize.height}
            numberOfPieces={500}
            recycle={false}
            gravity={0.22}
            initialVelocityY={14}
            tweenDuration={1000}
            colors={CELEBRATION_COLORS}
            onConfettiComplete={() => setCelebrate(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              pointerEvents: "none",
            }}
          />
        )}
        <Helmet>
          <title>{SEO_TITLE}</title>
          <meta name="description" content={SEO_DESCRIPTION} />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href={`${BASE_URL}/revive-2026`} />
          <meta property="og:title" content={SEO_TITLE} />
          <meta property="og:description" content={SEO_DESCRIPTION} />
          <meta property="og:type" content="event" />
          <meta property="og:url" content={`${BASE_URL}/revive-2026`} />
          <meta property="og:image" content={`${BASE_URL}/revive-2026-og.jpg`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={SEO_TITLE} />
          <meta name="twitter:description" content={SEO_DESCRIPTION} />
          <meta name="twitter:image" content={`${BASE_URL}/revive-2026-og.jpg`} />
          <script type="application/ld+json">
            {JSON.stringify(EVENT_SCHEMA)}
          </script>
        </Helmet>

        <style>{`
          * { box-sizing: border-box; }
          html, body { width: 100%; max-width: 100%; overflow-x: hidden; }
          img { max-width: 100%; display: block; }

          .revive-page {
            font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            background: ${T.light};
            color: ${T.text};
            overflow-x: hidden;
          }

          .revive-wrap {
            width: min(92%, 1240px);
            margin: auto;
            position: relative;
            z-index: 2;
          }

          .revive-section {
            padding: clamp(64px, 7vw, 96px) 0;
          }

          .revive-section.white { background: ${T.white}; }

          .revive-card {
            background: ${T.white};
            border: 1px solid ${T.border};
            border-radius: clamp(24px, 3vw, 32px);
            box-shadow: 0 20px 60px rgba(47,54,26,0.08);
          }

          .revive-center {
            text-align: center;
            max-width: 860px;
            margin: 0 auto 42px;
          }

          .revive-eyebrow {
            color: ${T.green};
            text-transform: uppercase;
            letter-spacing: .12em;
            font-weight: 700;
            font-size: 12px;
            margin: 0;
          }

          .revive-heading {
            color: ${T.green};
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-weight: 600;
            line-height: 1.2;
            margin: 14px 0 0;
          }

          .revive-title {
            font-size: clamp(2.15rem, 5vw, 4rem);
            font-weight: 600;
            line-height: 1.12;
            margin: 0;
          }

          .revive-text {
            color: ${T.muted};
            font-size: clamp(14px, 1.4vw, 16px);
            line-height: 1.75;
          }

          .revive-text.max {
            max-width: 760px;
            margin: 16px auto 0;
          }

          .hero {
            min-height: 88svh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
            position: relative;
            padding: clamp(110px, 12vw, 150px) 20px;
          }

          .hero-date {
            display: inline-block;
            margin: 18px auto 0;
            padding: 12px 26px;
            border-radius: 999px;
            background: ${T.green};
            color: #fff;
            font-weight: 700;
            font-size: clamp(1.05rem, 2.4vw, 1.45rem);
            line-height: 1.4;
            box-shadow: 0 10px 28px rgba(47,54,26,.25);
          }

          .hero-card {
            max-width: 980px;
            margin: auto;
            padding: clamp(30px, 5vw, 54px);
            border-radius: clamp(24px, 3vw, 34px);
            background: rgba(255,255,255,.92);
            text-align: center;
            border: 1px solid rgba(255,255,255,.35);
            box-shadow: 0 28px 80px rgba(47,54,26,.30);
          }

          .split-card {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(28px, 5vw, 46px);
            align-items: center;
            padding: clamp(24px, 4vw, 42px);
          }

          .split-card h3 {
            color: ${T.green};
            font-size: clamp(1.4rem, 2.4vw, 2rem);
            font-weight: 600;
            margin: 0 0 12px;
          }

          .split-card p {
            color: ${T.muted};
            line-height: 1.75;
          }

          .split-card .split-img {
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 14px 34px rgba(47, 54, 26, 0.12);
          }

          .split-card img {
            width: 100%;
            height: clamp(280px, 34vw, 420px);
            object-fit: cover;
            border-radius: 24px;
            transition: transform 0.6s ease;
          }

          .split-card .split-img:hover img,
          .split-card img:hover {
            transform: scale(1.05);
          }

          .point {
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 12px;
            align-items: center;
            padding: 14px;
            border-radius: 16px;
            background: ${T.soft};
            border: 1px solid ${T.border};
            margin-top: 12px;
            transition: transform 0.25s ease, background 0.25s ease,
                        border-color 0.25s ease, box-shadow 0.25s ease;
          }

          .point:hover {
            transform: translateX(8px);
            background: ${T.white};
            border-color: rgba(97, 114, 78, 0.4);
            box-shadow: 0 10px 26px rgba(47, 54, 26, 0.1);
          }

          .point span {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            background: ${T.green};
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 13px;
            transition: background 0.25s ease, transform 0.25s ease;
          }

          .point:hover span {
            background: linear-gradient(135deg, #e9c46a 0%, ${T.green} 70%);
            transform: scale(1.12);
          }

          .point p { margin: 0; color: ${T.text}; line-height: 1.55; }

          .grid-3 {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 22px;
          }

          .grid-4 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 22px;
          }

          .rv-countdown {
            text-align: center;
            padding: clamp(28px, 3.5vw, 44px) 20px clamp(50px, 6vw, 72px);
            background: ${T.light};
          }

          .rv-count-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: clamp(16px, 2.5vw, 28px);
          }

          @keyframes rvPop {
            0% { transform: translateY(6px) scale(0.92); opacity: 0.35; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }

          .rv-count-tile {
            cursor: default;
            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
            min-width: clamp(96px, 12vw, 150px);
            padding: clamp(20px, 2.6vw, 32px) 12px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.55);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.7);
            box-shadow: 0 8px 32px rgba(47, 54, 26, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8);
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .rv-count-tile:hover {
            transform: translateY(-5px) scale(1.04);
            border-color: rgba(97, 114, 78, 0.45);
            box-shadow: 0 0 0 1px rgba(97,114,78,0.22),
                        0 0 26px rgba(97, 114, 78, 0.4),
                        0 18px 40px rgba(47, 54, 26, 0.16),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9);
          }

          .rv-count-tile .num {
            display: inline-block;
            animation: rvPop .45s ease;
            font-size: clamp(2rem, 5vw, 3.4rem);
            font-weight: 700;
            color: ${T.deep};
            line-height: 1;
            font-variant-numeric: tabular-nums;
          }

          .rv-count-tile .lbl {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: ${T.muted};
          }

          .rv-quicknav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: clamp(22px, 3vw, 38px);
            padding: clamp(40px, 5vw, 60px) 24px clamp(28px, 3.5vw, 44px);
            background: linear-gradient(180deg, ${T.white} 0%, ${T.light} 100%);
          }

          .rv-quicknav a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: clamp(160px, 19vw, 230px);
            padding: clamp(24px, 3vw, 34px) 30px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.65);
            box-shadow: 0 8px 32px rgba(47, 54, 26, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 0.75);
            color: ${T.deep};
            font-weight: 700;
            font-size: clamp(15px, 1.6vw, 17px);
            letter-spacing: 0.02em;
            text-decoration: none;
            transition: transform .25s ease, box-shadow .25s ease,
                        background .25s ease, border-color .25s ease, color .25s ease;
          }

          .rv-quicknav a:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.65);
            border-color: rgba(97, 114, 78, 0.45);
            color: ${T.green};
            box-shadow: 0 0 0 1px rgba(97,114,78,0.25),
                        0 0 24px rgba(97, 114, 78, 0.45),
                        0 18px 40px rgba(47, 54, 26, 0.16),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9);
          }

          .rv-quicknav a.reg {
            background: linear-gradient(135deg, rgba(97,114,78,0.92), rgba(79,88,49,0.92));
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255,255,255,0.35);
            color: #fff;
            box-shadow: 0 8px 32px rgba(79, 88, 49, 0.35),
                        inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }

          .rv-quicknav a.reg:hover {
            color: #fff;
            border-color: rgba(255,255,255,0.6);
            box-shadow: 0 0 28px rgba(97, 114, 78, 0.65),
                        0 18px 44px rgba(47, 54, 26, 0.28),
                        inset 0 1px 0 rgba(255, 255, 255, 0.35);
          }

          @media (max-width: 560px) {
            .rv-countdown {
            text-align: center;
            padding: clamp(28px, 3.5vw, 44px) 20px clamp(50px, 6vw, 72px);
            background: ${T.light};
          }

          .rv-count-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: clamp(16px, 2.5vw, 28px);
          }

          @keyframes rvPop {
            0% { transform: translateY(6px) scale(0.92); opacity: 0.35; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }

          .rv-count-tile {
            cursor: default;
            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
            min-width: clamp(96px, 12vw, 150px);
            padding: clamp(20px, 2.6vw, 32px) 12px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.55);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.7);
            box-shadow: 0 8px 32px rgba(47, 54, 26, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8);
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .rv-count-tile:hover {
            transform: translateY(-5px) scale(1.04);
            border-color: rgba(97, 114, 78, 0.45);
            box-shadow: 0 0 0 1px rgba(97,114,78,0.22),
                        0 0 26px rgba(97, 114, 78, 0.4),
                        0 18px 40px rgba(47, 54, 26, 0.16),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9);
          }

          .rv-count-tile .num {
            display: inline-block;
            animation: rvPop .45s ease;
            font-size: clamp(2rem, 5vw, 3.4rem);
            font-weight: 700;
            color: ${T.deep};
            line-height: 1;
            font-variant-numeric: tabular-nums;
          }

          .rv-count-tile .lbl {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: ${T.muted};
          }

          .rv-quicknav { gap: 14px; }
            .rv-quicknav a { min-width: calc(50% - 14px); }
          }

          html { scroll-behavior: smooth; }
          #about, #highlights, #speakers, #register { scroll-margin-top: 96px; }

          .speakers-section {
            background:
              radial-gradient(640px 320px at 10% 6%, rgba(255, 255, 255, 0.09), transparent 60%),
              radial-gradient(520px 280px at 90% 94%, rgba(233, 196, 106, 0.14), transparent 60%),
              linear-gradient(160deg, ${T.deep} 0%, ${T.green} 100%);
            overflow: hidden;
          }

          .speakers-section .revive-eyebrow { color: #e9c46a; }
          .speakers-section .revive-heading { color: #ffffff; }

          .speakers-full {
            width: 100%;
            padding: 0 18px;
          }

          .speaker-slide {
            position: relative;
            display: flex;
            gap: 18px;
            align-items: center;
            padding: 20px 22px;
            border-radius: 20px;
            min-height: 150px;
            height: 100%;
            overflow: hidden;
            box-shadow: none !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .speaker-slide:hover,
          .speaker-slide:focus-within {
            transform: translateY(-6px) scale(1.05);
            z-index: 30;
            box-shadow: 0 18px 44px rgba(47, 54, 26, 0.2) !important;
          }

          .speaker-photo {
            flex-shrink: 0;
            padding: 4px;
            border-radius: 50%;
            background: linear-gradient(135deg, #e9c46a 0%, ${T.green} 55%, ${T.deep} 100%);
            box-shadow: 0 8px 22px rgba(47, 54, 26, 0.18);
          }

          .speaker-photo img,
          .speaker-initial {
            width: 100px;
            height: 100px;
            object-fit: cover;
            object-position: top center;
            border-radius: 50%;
            background: ${T.soft};
            border: 3px solid #ffffff;
          }

          .speaker-initial {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${T.green};
            font-size: 40px;
            font-weight: 700;
          }

          .speaker-info h3 {
            color: ${T.text};
            font-size: 1.1rem;
            font-weight: 700;
            margin: 6px 0 0;
          }

          .speaker-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 18px;
            background: linear-gradient(150deg, ${T.deep} 0%, ${T.green} 100%);
            border-radius: 20px;
            opacity: 0;
            transform: translateY(14px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            pointer-events: none;
          }

          .speaker-overlay img { display: none; }

          .speaker-slide:hover .speaker-overlay,
          .speaker-slide:focus-within .speaker-overlay {
            opacity: 1;
            transform: translateY(0);
          }

          .speaker-overlay h3 {
            color: #ffffff;
            font-size: 1rem;
            font-weight: 700;
            margin: 0 0 6px;
          }

          .speaker-role {
            color: rgba(255, 255, 255, 0.88);
            font-size: 12.5px;
            line-height: 1.5;
            margin: 0;
          }

          .speaker-role-brief {
            margin: 7px 0 0;
            color: ${T.muted};
            font-size: 12.5px;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .speaker-role-inline { display: none; }

          /* Keynote row: photo centered on top, name under it, info on hover */
          .speaker-slide.keynote {
            flex-direction: column;
            justify-content: flex-start;
            text-align: center;
            gap: 14px;
            padding: 30px 16px 26px;
            background: linear-gradient(180deg, #ffffff 0%, #f5f8ef 100%);
            border: 1px solid rgba(233, 196, 106, 0.45) !important;
          }

          .speaker-slide.keynote::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 62%;
            height: 4px;
            border-radius: 0 0 10px 10px;
            background: linear-gradient(90deg, #e9c46a, ${T.green});
          }

          .speaker-slide.keynote .speaker-photo img,
          .speaker-slide.keynote .speaker-initial {
            width: 118px;
            height: 118px;
          }

          .speaker-slide.keynote .speaker-info h3 {
            margin: 0;
            font-size: 1.16rem;
          }

          .speaker-photo { transition: box-shadow 0.3s ease; }

          .speaker-slide.keynote:hover .speaker-photo,
          .speaker-slide.keynote:focus-within .speaker-photo {
            box-shadow: 0 0 0 7px rgba(233, 196, 106, 0.28),
                        0 14px 34px rgba(47, 54, 26, 0.3);
          }

          .speaker-slide.keynote .speaker-role-brief { display: none; }

          .speaker-slide.keynote .speaker-overlay {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 10px;
          }

          /* marquee cards: tie into the gold accent language */
          .speaker-slide:not(.keynote) {
            border: 1px solid rgba(233, 196, 106, 0.3) !important;
          }

          /* gold underline accent below the section heading */
          .speakers-section .revive-center::after {
            content: "";
            display: block;
            width: 76px;
            height: 4px;
            margin: 18px auto 0;
            border-radius: 999px;
            background: linear-gradient(90deg, #e9c46a, rgba(233, 196, 106, 0.25));
          }

          /* Touch devices & small screens: no hover, so show credentials inline */
          @media (hover: none), (max-width: 640px) {
            .speaker-overlay,
            .speaker-role-brief { display: none; }

            .speaker-role-inline {
              display: block;
              color: ${T.muted};
              font-size: 12px;
              line-height: 1.55;
              margin: 7px 0 0;
            }

            .speaker-slide {
              flex-direction: column;
              text-align: center;
              padding: 24px 18px 22px;
              gap: 14px;
              min-height: 0;
            }

            .speaker-info {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .speaker-photo img,
            .speaker-initial {
              width: 96px;
              height: 96px;
            }

            .speaker-initial { font-size: 36px; }
          }

          .revive-page .swiper-slide { height: auto; }

          /* continuous conveyor-belt motion */
          .speakers-marquee .swiper-wrapper {
            transition-timing-function: linear !important;
          }

          /* room for the hover pop-out so it isn't clipped */
          .speakers-marquee { padding: 18px 0; }

          .highlights-full {
            width: 100%;
            padding: 16px 18px 22px;
          }

          .highlights-marquee .swiper-wrapper {
            transition-timing-function: linear !important;
          }

          .highlight-card {
            border-radius: 22px;
            overflow: hidden;
            border: 1px solid ${T.border};
            box-shadow: 0 18px 44px rgba(47,54,26,.16);
            background: ${T.white};
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .highlight-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 26px 56px rgba(47, 54, 26, 0.24);
          }

          .highlight-card img {
            width: 100%;
            height: clamp(220px, 26vw, 320px);
            object-fit: cover;
            display: block;
            transition: transform 0.6s ease;
          }

          .highlight-card:hover img {
            transform: scale(1.07);
          }

          .faculty-card {
            position: relative;
            padding: 36px 26px 30px;
            text-align: center;
            background: linear-gradient(180deg, #ffffff 0%, ${T.soft} 100%);
            border: 1px solid ${T.border};
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .faculty-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 72px;
            height: 4px;
            border-radius: 0 0 6px 6px;
            background: linear-gradient(90deg, #e9c46a, ${T.green});
          }

          .faculty-card:hover {
            transform: scale(1.07);
            box-shadow: 0 18px 44px rgba(47, 54, 26, 0.18);
          }

          .faculty-badge {
            display: inline-block;
            padding: 5px 14px;
            border-radius: 999px;
            background: ${T.light};
            color: ${T.deep};
            font-size: 10.5px;
            font-weight: 700;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            margin-bottom: 16px;
          }

          .faculty-card h3 {
            color: ${T.text};
            font-size: clamp(1.05rem, 1.6vw, 1.25rem);
            font-weight: 600;
            margin: 16px 0 0;
          }

          .faculty-photo-ring {
            display: inline-block;
            padding: 4px;
            border-radius: 50%;
            background: linear-gradient(135deg, #e9c46a 0%, ${T.green} 55%, ${T.deep} 100%);
            box-shadow: 0 10px 26px rgba(47, 54, 26, 0.18);
          }

          .faculty-photo {
            width: 128px;
            height: 128px;
            object-fit: cover;
            object-position: top center;
            border-radius: 50%;
            background: ${T.soft};
            border: 3px solid #ffffff;
            display: block;
          }

          .faculty-role {
            color: ${T.muted};
            font-size: 13px;
            line-height: 1.55;
            margin: 8px 0 0;
          }

          .grid-2-center {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 280px));
            gap: 22px;
            justify-content: center;
          }

          @media (max-width: 640px) {
            .grid-2-center { grid-template-columns: 1fr; }
          }

          .impact-card {
            padding: clamp(28px, 5vw, 54px);
            text-align: center;
          }

          .dark-card {
            background: ${T.green};
            color: #fff;
          }

          .dark-card .revive-heading,
          .dark-card .revive-text {
            color: #fff;
          }

          .cta-btn {
            display: inline-block;
            background: ${T.white};
            color: ${T.green};
            font-weight: 700;
            padding: 14px 30px;
            border-radius: 999px;
            text-decoration: none;
            margin: 18px 8px 0;
            box-shadow: 0 14px 34px rgba(0,0,0,0.16);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .cta-btn:hover {
            transform: translateY(-4px) scale(1.04);
            box-shadow: 0 0 22px rgba(233, 196, 106, 0.5),
                        0 20px 44px rgba(0, 0, 0, 0.22);
          }

          .cta-btn.solid {
            background: ${T.green};
            color: #fff;
            box-shadow: 0 14px 34px rgba(97,114,78,0.35);
          }

          @keyframes ctaPulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(233, 196, 106, 0.65),
                          0 14px 34px rgba(97, 114, 78, 0.35);
            }
            70% {
              transform: scale(1.05);
              box-shadow: 0 0 0 18px rgba(233, 196, 106, 0),
                          0 14px 34px rgba(97, 114, 78, 0.35);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(233, 196, 106, 0),
                          0 14px 34px rgba(97, 114, 78, 0.35);
            }
          }

          .cta-btn.pulse { animation: ctaPulse 1.7s ease-out infinite; }
          .cta-btn.pulse:hover { animation: none; }

          @media (prefers-reduced-motion: reduce) {
            .cta-btn.pulse { animation: none; }
          }

          @media (max-width: 1050px) {
            .grid-3,
            .grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }

          @media (max-width: 900px) {
            .split-card { grid-template-columns: 1fr; }
          }

          @media (max-width: 767px) {
            .revive-wrap {
              width: 100%;
              padding-left: 18px;
              padding-right: 18px;
            }

            .hero {
              min-height: auto;
              padding-top: 112px;
              padding-bottom: 72px;
            }

            .revive-card,
            .hero-card,
            .split-card {
              padding: 24px !important;
              border-radius: 24px !important;
            }

            .grid-3,
            .grid-4 { grid-template-columns: 1fr; }

            .split-card img { height: 260px; }
          }

          @supports (-webkit-touch-callout: none) {
            .hero { min-height: auto; }
            img { -webkit-transform: translateZ(0); transform: translateZ(0); }
          }
        `}</style>

        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(47,54,26,.72)",
            }}
          />
          <div className="revive-wrap">
            <div className="hero-card">
              <h1 className="revive-title">
                REVIVE 2026
                <br />
                Reimagining Pulmonary &amp; Cardiac Rehabilitation
              </h1>
              <p
                style={{
                  margin: "20px auto 0",
                  maxWidth: 780,
                  color: T.text,
                  fontSize: "clamp(1rem,2vw,1.3rem)",
                  lineHeight: 1.65,
                  fontWeight: 600,
                }}
              >
                Practical Skills • Real-World Challenges • Future-Ready
                Technology
              </p>
              <p className="revive-text max">
                Join clinicians, therapists and innovators reimagining pulmonary
                &amp; cardiac rehabilitation.
              </p>
              <p className="hero-date">
                23 August 2026 &mdash; Hyatt Centric Hebbal, Bengaluru
              </p>
              <div>
                <a
                  className="cta-btn solid pulse"
                  href="https://forms.gle/VpHGZ17V5tZDi9fF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK NAV */}
        <nav className="rv-quicknav">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="#speakers">Speakers</a>
          {/* TODO: point to the registration/payment link once available */}
          <a href="#register" className="reg">Registration</a>
        </nav>

        {/* COUNTDOWN */}
        <Countdown />

        {/* ABOUT */}
        <section id="about" className="revive-section white">
          <div className="revive-wrap">
            <div className="revive-card impact-card">
              <h2 className="revive-heading">About the Conclave</h2>
              <p className="revive-text max">
                REVIVE 2026 aims to bridge the gap between guidelines and
                practice by focusing on practical skills, implementation
                challenges, and scalable solutions that can improve patient
                outcomes in routine care. It is especially relevant in a
                healthcare landscape where rehabilitation must be more
                accessible, personalized, and adaptable to diverse patient
                needs.
              </p>
              <p className="revive-text max">
                The spirit of the conclave is not just academic discussion, but
                application. By highlighting real-world challenges, REVIVE 2026
                encourages participants to address issues such as patient
                adherence, resource limitations, multidisciplinary
                coordination, and continuity of care after discharge — with an
                emphasis on digital monitoring, virtual rehabilitation,
                point-of-care tools, and data-supported decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* KEY HIGHLIGHTS */}
        <section id="highlights" className="revive-section">
          <div className="revive-wrap">
            <h2 className="revive-heading">Key Highlights of REVIVE 2026</h2>

            <div className="split-card revive-card" style={{ marginTop: 32 }}>
              <img src={eventImg} alt="REVIVE 2026 sessions and workshops" />
              <div>
                {[
                  {
                    title: "Practical Sessions",
                    text: "For everyday rehab care and clinical decisions.",
                  },
                  {
                    title: "Case-Based Sessions",
                    text: "On real hospital and community challenges.",
                  },
                  {
                    title: "Future-Ready Technology",
                    text: "Digital tools and innovative rehab models.",
                  },
                  {
                    title: "Team-Based Learning",
                    text: "Across doctors, therapists, and rehab staff.",
                  },
                  {
                    title: "Hands-On Workshop",
                    text: "Practice techniques directly with expert guidance.",
                  },
                ].map((item, i) => (
                  <div className="point" key={item.title}>
                    <span>{i + 1}</span>
                    <p>
                      <strong>{item.title}</strong>
                      <br />
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SPEAKERS SLIDER */}
        <section id="speakers" className="revive-section speakers-section" style={{ paddingBottom: 48 }}>
          <div className="revive-wrap">
            <div className="revive-center" style={{ marginBottom: 30 }}>
              <p className="revive-eyebrow">Faculty</p>
              <h2 className="revive-heading">Speakers &amp; Chairpersons</h2>
            </div>

            <div className="grid-4" style={{ marginBottom: 38 }}>
              {KEYNOTE_SPEAKERS.map((sp) => (
                <SpeakerCard key={sp.name} sp={sp} variant="keynote" />
              ))}
            </div>
          </div>

          <div className="speakers-full">
            <Swiper
              className="speakers-marquee"
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              speed={9000}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {SPEAKERS.map((sp) => (
                <SwiperSlide key={sp.name}>
                  <SpeakerCard sp={sp} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* REVIVE 2025 HIGHLIGHTS */}
        <section
          id="highlights-2025"
          className="revive-section"
          style={{ background: T.soft, overflow: "hidden", paddingBottom: 48 }}
        >
          <div className="revive-wrap">
            <div className="revive-center" style={{ marginBottom: 26 }}>
              <p className="revive-eyebrow">Looking Back</p>
              <h2 className="revive-heading">Highlights from REVIVE 2025</h2>
              <p className="revive-text max">
                Moments from last year&apos;s conclave — hands-on workshops,
                expert faculty and a community rethinking rehabilitation
                together.
              </p>
            </div>
          </div>

          <div className="highlights-full">
            <Swiper
              className="highlights-marquee"
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              speed={5000}
              spaceBetween={24}
              grabCursor
              slidesPerView={1.15}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
            >
              {HIGHLIGHTS_2025.map((img, i) => (
                <SwiperSlide key={img}>
                  <div className="highlight-card">
                    <img src={img} alt={`REVIVE 2025 highlight ${i + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* PRE-CONFERENCE */}
        <section className="revive-section white">
          <div className="revive-wrap">
            <div className="revive-center">
              <p className="revive-eyebrow">Pre-Conference</p>
              <h2 className="revive-heading">
                Scientific Paper Presentation
              </h2>
            </div>

            <div className="split-card revive-card">
              <div>
                <h3>Present Your Research</h3>
                <p>
                  Present your research to an expert panel ahead of the main
                  conclave. The virtual pre-conference session celebrates new
                  evidence and emerging investigators in pulmonary and cardiac
                  rehabilitation.
                </p>
              </div>

              <div>
                {[
                  "Thursday, 20 August 2026 — Virtual session",
                  "02:30 PM – 04:30 PM (2 hours)",
                  "Judges: Dr. Rasheeka & Dr. Cherishma Dsilva",
                ].map((item, i) => (
                  <div className="point" key={item}>
                    <span>{i + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ELEVATING BANNER */}
        <section
          className="revive-section"
          style={{
            backgroundImage: `url(${heroImg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(47,54,26,.68)",
            }}
          />
          <div className="revive-wrap">
            <div className="revive-card impact-card">
              <h2 className="revive-heading">
                Rehabilitation That Is Accessible, Personalized &amp; Future-Ready
              </h2>
              <p className="revive-text max">
                REVIVE 2026 continues the journey started by REVIVE 2025 —
                bringing science and practice together in the heart of
                Bengaluru with hands-on workshops, clinical insights, and
                meaningful innovation.
              </p>
            </div>
          </div>
        </section>

        {/* CLOSING / CTA */}
        <section id="register" className="revive-section" style={{ paddingTop: 0 }}>
          <div className="revive-wrap">
            <div className="revive-card impact-card dark-card">
              <h2 className="revive-heading">Be Part of REVIVE 2026</h2>
              <p className="revive-text max">
                Register your interest for the conclave, workshops, or the
                pre-conference paper presentations.
              </p>
              <div>
                <a
                  className="cta-btn pulse"
                  href="https://forms.gle/VpHGZ17V5tZDi9fF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Revive2026;
