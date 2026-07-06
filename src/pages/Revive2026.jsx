// src/pages/Revive2026.jsx
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import heroImg from "../assets/img/digital-art-style-theatre-stage.jpg";
import eventImg from "../assets/img/people-taking-part.jpg";
import heroImg2 from "../assets/img/front-view-woman-meditating-mat.jpg";
import ganeshImg from "../assets/img/Dr. Ganesh Raghu .jpeg";
import sallyImg from "../assets/img/Dr. Sally SIngh .jpeg";

const BASE_URL = "https://vaayuchest.com";

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

const SPEAKERS = [
  {
    name: "Dr. Ganesh Raghu",
    role: "Pulmonary Fibrosis & Rehabilitation Outcomes (International Speaker)",
    img: ganeshImg,
  },
  {
    name: "Dr. Sally Singh",
    role: "Pulmonary Rehabilitation Implementation (International Speaker)",
    img: sallyImg,
  },
  {
    name: "Dr. Rik Gosslink",
    role: "Respiratory Rehabilitation — Past, Present & Future (International Speaker)",
    img: null,
  },
  {
    name: "Dr. Shashwat Verma",
    role: "Pulmonary Rehabilitation in Multimorbid Patients",
    img: null,
  },
  {
    name: "Dr. Veena Nambiar",
    role: "Cardiac Rehabilitation — Execution & Pathways in India",
    img: null,
  },
  {
    name: "Dr. Sumanta Ghosh",
    role: "Technology-Enhanced Pulmonary & Cardiac Rehabilitation",
    img: null,
  },
];

const CHAIRPERSONS = ["Dr. K S Satish", "Dr. Venkatesh T K"];

const WORKSHOP = [
  { topic: "Design Pulmonary Rehabilitation", stations: ["Multidisciplinary Team"] },
  { topic: "Pulmonary Function Testing", stations: ["6MWT", "Spirometry", "DLCO"] },
  { topic: "O2 Therapy and NIV", stations: ["HFNC", "NIV"] },
  { topic: "Airway Clearance Therapy", stations: ["Cough Assist", "SIMEOX", "Acapella"] },
  { topic: "Respiratory Muscle Training", stations: ["RMT Device"] },
];

const Revive2026 = () => {
  return (
    <HelmetProvider>
      <div className="revive-page">
        <Helmet>
          <title>{SEO_TITLE}</title>
          <meta name="description" content={SEO_DESCRIPTION} />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href={`${BASE_URL}/revive-2026`} />
          <meta property="og:title" content={SEO_TITLE} />
          <meta property="og:description" content={SEO_DESCRIPTION} />
          <meta property="og:type" content="event" />
          <meta property="og:url" content={`${BASE_URL}/revive-2026`} />
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

          .split-card img {
            width: 100%;
            height: clamp(280px, 34vw, 420px);
            object-fit: cover;
            border-radius: 24px;
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
          }

          .point p { margin: 0; color: ${T.text}; line-height: 1.55; }

          .grid-3 {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 22px;
          }

          .speaker-slide {
            display: grid;
            grid-template-columns: minmax(0, 420px) 1fr;
            gap: clamp(24px, 4vw, 46px);
            align-items: center;
            padding: clamp(24px, 4vw, 42px);
          }

          .speaker-photo img,
          .speaker-initial {
            width: 100%;
            height: clamp(260px, 30vw, 380px);
            object-fit: cover;
            object-position: top center;
            border-radius: 24px;
          }

          .speaker-initial {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${T.light};
            color: ${T.green};
            font-size: clamp(64px, 8vw, 110px);
            font-weight: 700;
            border: 1px solid ${T.border};
          }

          .speaker-info h3 {
            color: ${T.text};
            font-size: clamp(1.6rem, 3vw, 2.4rem);
            font-weight: 600;
            margin: 10px 0 12px;
          }

          .speaker-role {
            color: ${T.muted};
            font-size: clamp(15px, 1.6vw, 18px);
            line-height: 1.6;
            margin: 0;
          }

          @media (max-width: 800px) {
            .speaker-slide { grid-template-columns: 1fr; text-align: center; }
            .speaker-photo img, .speaker-initial { height: 280px; }
          }

          .faculty-card {
            padding: 30px 24px;
            text-align: center;
          }

          .faculty-card h3 {
            color: ${T.text};
            font-size: clamp(1.05rem, 1.6vw, 1.25rem);
            font-weight: 600;
            margin: 14px 0 0;
          }

          .faculty-avatar {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: ${T.light};
            color: ${T.green};
            font-weight: 700;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            border: 2px solid ${T.border};
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
          }

          .cta-btn.solid {
            background: ${T.green};
            color: #fff;
            box-shadow: 0 14px 34px rgba(97,114,78,0.35);
          }

          @media (max-width: 1050px) {
            .grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
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

            .grid-3 { grid-template-columns: 1fr; }

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
                The upcoming conclave in Bengaluru brings together clinicians,
                rehabilitation specialists, therapists and technology-driven
                healthcare thinkers to rethink how pulmonary and cardiac
                rehabilitation is delivered. Main conclave date &amp; venue to
                be announced.
              </p>
              <div>
                <a className="cta-btn solid" href="tel:+916364928680">
                  Register Your Interest
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SPEAKERS SLIDER */}
        <section className="revive-section white" style={{ paddingBottom: 40 }}>
          <div className="revive-wrap">
            <div className="revive-center" style={{ marginBottom: 30 }}>
              <p className="revive-eyebrow">Faculty</p>
              <h2 className="revive-heading">Meet Our Speakers</h2>
            </div>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              loop
              speed={800}
              spaceBetween={26}
              slidesPerView={1}
            >
              {SPEAKERS.map((sp) => (
                <SwiperSlide key={sp.name}>
                  <div className="speaker-slide revive-card">
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
                      <p className="revive-eyebrow">Speaker</p>
                      <h3>{sp.name}</h3>
                      <p className="speaker-role">{sp.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ABOUT */}
        <section className="revive-section white">
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
        <section className="revive-section">
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
                    title: "Case-Based Discussions",
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
                    title: "Patient-Centered Focus",
                    text: "On recovery, function, and long-term quality of life.",
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

        {/* CHAIRPERSONS */}
        <section className="revive-section white">
          <div className="revive-wrap">
            <div className="revive-center">
              <p className="revive-eyebrow">Faculty</p>
              <h2 className="revive-heading">Chairpersons</h2>
            </div>

            <div className="grid-2-center">
              {CHAIRPERSONS.map((name) => (
                <div className="revive-card faculty-card" key={name}>
                  <span className="faculty-avatar">
                    {name.replace("Dr. ", "").charAt(0)}
                  </span>
                  <h3>{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKSHOP */}
        <section className="revive-section">
          <div className="revive-wrap">
            <div className="revive-center">
              <p className="revive-eyebrow">Hands-On Learning</p>
              <h2 className="revive-heading">Workshop • 3:00 PM – 5:00 PM</h2>
              <p className="revive-text max">
                Practical workstations covering the full spectrum of
                cardiopulmonary rehabilitation skills.
              </p>
            </div>

            <div className="grid-3">
              {WORKSHOP.map((w, i) => (
                <div className="revive-card" style={{ padding: 24 }} key={w.topic}>
                  <h3 style={{ color: T.green, margin: 0 }}>
                    {i + 1}. {w.topic}
                  </h3>
                  {w.stations.map((st, j) => (
                    <div className="point" key={st}>
                      <span>{String.fromCharCode(97 + j)}</span>
                      <p>{st}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div
              className="revive-card impact-card"
              style={{ marginTop: 26, padding: 24 }}
            >
              <p className="revive-text" style={{ margin: 0 }}>
                Delegates rotate through workstations every 30 minutes — all
                delegates are divided into 5 groups of 24 each.
              </p>
            </div>
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
        <section className="revive-section" style={{ paddingTop: 0 }}>
          <div className="revive-wrap">
            <div className="revive-card impact-card dark-card">
              <h2 className="revive-heading">Be Part of REVIVE 2026</h2>
              <p className="revive-text max">
                Registration details will be announced soon. Reach out to
                reserve your interest for the conclave, workshops, or the
                pre-conference paper presentations.
              </p>
              <div>
                <a className="cta-btn" href="tel:+916364928680">
                  Call +91 63649 28680
                </a>
                <a className="cta-btn" href="mailto:admin@vaayuchest.com">
                  admin@vaayuchest.com
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
