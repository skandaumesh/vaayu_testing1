// src/pages/Rehabconference.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

import heroImg from "../assets/img/digital-art-style-theatre-stage.jpg";
import eventImg from "../assets/img/people-taking-part.jpg";
import mainPic from "../assets/img/rehab.jpg";
import subPic from "../assets/img/cardiac-overview.jpg";
import heroImg21 from "../assets/img/medics-his-staff-meet-discuss-lungs-radiography-patient-care-strategy.jpg";
import heroImg2 from "../assets/img/front-view-woman-meditating-mat.jpg";

import academicPartner from "../assets/img/df.png";
import knowledgePartner from "../assets/img/asf.png";
import partner1 from "../assets/img/Screenshot 2025-09-03 171926.png";
import partner2 from "../assets/img/Screenshot 2025-09-03 171821.png";
import partner3 from "../assets/img/11.png";

import sp1 from "../assets/img/Revive sponsers/cipla.png";
import sp2 from "../assets/img/Revive sponsers/download.png";
import sp3 from "../assets/img/Revive sponsers/WhatsApp Image 2025-10-03 at 12.38.20_65ce1cbe.jpg";
import sp4 from "../assets/img/Revive sponsers/image[1].png";
import sp5 from "../assets/img/Revive sponsers/download (1).jpeg";
import sp6 from "../assets/img/Revive sponsers/WhatsApp Image 2025-10-03 at 12.38.20_c94fb030.jpg";
import sp7 from "../assets/img/Revive sponsers/Screenshot 2025-10-03 161231.png";
import sp8 from "../assets/img/Revive sponsers/Screenshot 2025-10-03 161254.png";

const BASE_URL = "https://vaayuchest.com";
const EVENT_ISO = "2025-10-12T09:00:00+05:30";
const OG_IMAGE = `${BASE_URL}/assets/img/srfd.png`;

const SEO_TITLE =
  "REVIVE 2025 – Pulmonary & Cardiac Rehabilitation Conclave | Event Highlights";
const SEO_DESCRIPTION =
  "REVIVE 2025, the Conclave of Pulmonary & Cardiac Rehabilitation, was successfully conducted in Bengaluru by Vaayu Chest & Sleep Specialists with expert sessions, workshops, posters and collaborations.";

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const SponsorsSection = () => {
  const sponsors = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8];

  return (
    <section className="revive-section">
      <div className="revive-wrap">
        <div className="revive-center">
          <p className="revive-eyebrow">Supporters</p>
          <h2 className="revive-heading">Our Sponsors</h2>
        </div>

        <div className="logo-grid">
          {sponsors.map((img, i) => (
            <div className="revive-card logo-card" key={i}>
              <img src={img} alt={`Sponsor ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InAssociationSection = () => {
  const partners = [
    { img: academicPartner, name: "Academic Partner" },
    { img: partner1, name: "The Society of Cardiovascular and Pulmonary Rehabilitation" },
    { img: partner2, name: "Karnataka Pulmonologists Association" },
    { img: partner3, name: "HealthSpecifics Academy | PR Clinics" },
    { img: knowledgePartner, name: "Knowledge Partner" },
  ];

  return (
    <section className="revive-section white">
      <div className="revive-wrap">
        <div className="revive-center">
          <p className="revive-eyebrow">Partners</p>
          <h2 className="revive-heading">In Association With</h2>
        </div>

        <div className="logo-grid">
          {partners.map((p) => (
            <div className="revive-card logo-card" key={p.name}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoShowcaseSection = () => (
  <section className="revive-section white">
    <div className="revive-wrap">
      <div className="revive-center">
        <p className="revive-eyebrow">Watch</p>
        <h2 className="revive-heading">Why Rehabilitation Matters</h2>
      </div>

      <div className="video-grid">
        {[
          {
            src: "https://www.youtube.com/embed/8PBa0WWW_mM?si=07pz-ghDYCjt3oi8",
            text: "Learn the impact of structured pulmonary & cardiac rehabilitation.",
          },
          {
            src: "https://www.youtube.com/embed/Y0t-3roRcZ8?si=zyKWNs0wUCdE0anv",
            text: "A closer look at rehab impact & outcomes.",
          },
        ].map((v) => (
          <div className="revive-card video-card" key={v.src}>
            <div className="video-frame">
              <iframe
                src={v.src}
                title="REVIVE 2025 video"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EventIntroSection = () => (
  <section className="revive-section white">
    <div className="revive-wrap">
      <div className="revive-center">
        <p className="revive-eyebrow">About the Event</p>
        <h2 className="revive-heading">REVIVE 2025 Was Successfully Hosted</h2>
        <p className="revive-text max">
          The 1st Conclave on Pulmonary &amp; Cardiac Rehabilitation in
          Bengaluru—organized by Vaayu Chest &amp; Sleep Specialists—brought
          together leading pulmonary specialists, cardiac experts and
          rehabilitation professionals in a landmark collaboration.
        </p>
      </div>

      <div className="revive-card split-card">
        <div>
          <h3>Two Lenses. One Goal.</h3>
          <p>
            This academic conference examined Pulmonary &amp; Cardiac Rehab
            through two critical perspectives—rehab specialists and clinicians.
            The synergy between both disciplines led to insightful discussions
            and exemplary outcomes.
          </p>

          {[
            "Topics helped rehab specialists and trainees understand key clinical issues and the transition to rehabilitation.",
            "A two-way conversation elevated care and explored innovative rehab-delivery models.",
            "Evidence-based talks, panel discussions and cross-disciplinary insights were delivered by esteemed faculty.",
          ].map((item, i) => (
            <div className="point" key={item}>
              <span>{i + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <img src={heroImg21} alt="REVIVE 2025 collaborative learning" />
      </div>
    </div>
  </section>
);

const Rehabconference = () => {
  return (
    <HelmetProvider>
      <div className="revive-page">
        <Helmet>
          <title>{SEO_TITLE}</title>
          <meta name="description" content={SEO_DESCRIPTION} />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href={`${BASE_URL}/rehab-conference`} />
          <meta property="og:title" content={SEO_TITLE} />
          <meta property="og:description" content={SEO_DESCRIPTION} />
          <meta property="og:type" content="event" />
          <meta property="og:url" content={`${BASE_URL}/rehab-conference`} />
          <meta property="og:image" content={OG_IMAGE} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "REVIVE 2025 – Conclave of Pulmonary & Cardiac Rehabilitation",
              description: SEO_DESCRIPTION,
              startDate: EVENT_ISO,
              eventStatus: "https://schema.org/EventCompleted",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Bengaluru",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bengaluru",
                  addressRegion: "Karnataka",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "Vaayu Chest & Sleep Specialists",
                url: BASE_URL,
              },
            })}
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

          .logo-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 22px;
          }

          .logo-card {
            padding: 24px;
            text-align: center;
            min-height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .logo-card img {
            height: 110px;
            width: 100%;
            object-fit: contain;
            margin: auto;
          }

          .logo-card p {
            margin: 12px 0 0;
            color: ${T.muted};
            font-size: 13.5px;
            line-height: 1.5;
          }

          .video-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 26px;
          }

          .video-card { padding: 14px; }
          .video-card p { text-align: center; color: ${T.muted}; font-size: 13px; }

          .video-frame {
            position: relative;
            width: 100%;
            padding-top: 56.25%;
            overflow: hidden;
            border-radius: 18px;
            background: #000;
          }

          .video-frame iframe {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: 0;
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

          @media (max-width: 1050px) {
            .logo-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }

          @media (max-width: 900px) {
            .split-card,
            .video-grid {
              grid-template-columns: 1fr;
            }
            .logo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
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

            .logo-grid,
            .grid-3 {
              grid-template-columns: 1fr;
            }

            .split-card img {
              height: 260px;
            }
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
                REVIVE 2025
                <br />
                Conclave of Pulmonary &amp; Cardiac Rehabilitation
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
                Successfully held on 12th October 2025 in Bengaluru, India
              </p>
              <p className="revive-text max">
                A landmark conclave that brought together leading experts in
                pulmonary and cardiac rehabilitation for evidence-based learning,
                workshops, case discussions and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* SUCCESS NOTE */}
        <section className="revive-section white">
          <div className="revive-wrap">
            <div className="revive-card impact-card">
              <h2 className="revive-heading">A Successful Conclave</h2>
              <p className="revive-text max">
                REVIVE 2025 was successfully conducted on 12th October 2025 in
                Bengaluru, bringing together experts across pulmonology,
                cardiology, and rehabilitation. The event featured insightful
                sessions, hands-on workshops, poster presentations, and meaningful
                discussions focused on improving patient outcomes through
                structured rehabilitation.
              </p>
            </div>
          </div>
        </section>

        <EventIntroSection />

        {/* HIGHLIGHTS */}
        <section className="revive-section">
          <div className="revive-wrap">
            <h2 className="revive-heading">Key Highlights from REVIVE 2025</h2>

            <div className="split-card revive-card" style={{ marginTop: 32 }}>
              <img src={eventImg} alt="Pulmonary Rehabilitation workshop" />
              <div>
                {[
                  {
                    title: "1-Day Conference on Pulmonary & Cardiac Rehabilitation",
                    text: "Focused solely on Pulmonary & Cardiac Rehabilitation (PR).",
                  },
                  {
                    title: "Eminent Faculty",
                    text: "National & international pulmonologists and physiotherapists.",
                  },
                  {
                    title: "Interactive Sessions",
                    text: "Case discussions, panel talks, and debates.",
                  },
                  {
                    title: "Knowledge Quest",
                    text: "Quiz, poster presentations, and more.",
                  },
                  {
                    title: "Hands-On Workshops",
                    text: "Practical learning on building a PR program.",
                  },
                  {
                    title: "Innovation Showcase",
                    text: "Latest tools, protocols, and devices.",
                  },
                  {
                    title: "Internationally Accredited Certification",
                    text: "Recognized credentials in Pulmonary & Cardiac Rehabilitation.",
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

        {/* WHY IMPACTFUL */}
        <section className="revive-section white">
          <div className="revive-wrap">
            <div className="revive-card impact-card">
              <h2 className="revive-heading">Why REVIVE 2025 Was Impactful</h2>
              <p className="revive-text max">
                This was more than just a conference — it became a platform for
                advancing Pulmonary &amp; Cardiac Rehabilitation. Participants
                gained practical, evidence-based insights from leading experts,
                explored the latest rehabilitation techniques, and connected with
                peers who share a passion for improving patient recovery.
              </p>

              <div className="grid-3" style={{ marginTop: 34 }}>
                {[
                  {
                    title: "Cutting-edge Research",
                    text: "Participants explored the latest evidence-based rehab protocols.",
                  },
                  {
                    title: "Networking Hub",
                    text: "Specialists, physiotherapists and innovators connected in a collaborative environment.",
                  },
                  {
                    title: "Hands-On Training",
                    text: "Interactive workshops and demonstrations helped translate knowledge into practice.",
                  },
                ].map((item) => (
                  <div className="revive-card" style={{ padding: 24 }} key={item.title}>
                    <h3 style={{ color: T.green, margin: 0 }}>{item.title}</h3>
                    <p className="revive-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE + COPY */}
        <section className="revive-section">
          <div className="revive-wrap">
            <div className="split-card revive-card">
              <div style={{ position: "relative" }}>
                <img src={subPic} alt="Team collaborating at rehab conference" />
                <img
                  src={mainPic}
                  alt="Teamwork moment"
                  style={{
                    width: "48%",
                    height: 170,
                    position: "absolute",
                    right: 20,
                    bottom: -30,
                    border: "8px solid #fff",
                    boxShadow: "0 18px 45px rgba(47,54,26,.18)",
                  }}
                />
              </div>

              <div>
                <p className="revive-eyebrow">Breathe. Heal. Thrive.</p>
                <h2 className="revive-heading">Breathe Better. Live Stronger.</h2>
                <p className="revive-text">
                  Leading Pulmonologists, Cardiologists, Physiotherapists, and
                  Rehabilitation Experts came together at REVIVE 2025, hosted by
                  Vaayu Chest &amp; Sleep Specialists.
                </p>

                {[
                  "Expert keynote sessions from national & international specialists",
                  "Evidence-based rehab protocols for better patient outcomes",
                  "Hands-on workshops & live demonstrations",
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

        {/* POSTER PRESENTATION */}
        <section className="revive-section white">
          <div className="revive-wrap">
            <div className="revive-center">
              <p className="revive-eyebrow">Poster Presentation</p>
              <h2 className="revive-heading">E-Poster Presentations at REVIVE 2025</h2>
              <p className="revive-text max">
                REVIVE 2025 featured a highly engaging E-Poster presentation
                segment, where participants showcased innovative research and
                clinical insights in pulmonary and cardiac rehabilitation.
              </p>
            </div>

            <div className="split-card revive-card">
              <div>
                <h3>Theme</h3>
                <p>
                  <strong>Transforming Pulmonary and Cardiac Rehabilitation:</strong>{" "}
                  Innovating Care, Improving Outcomes.
                </p>

                {[
                  "Junior Category — UG/PG students & clinicians within 3 years of graduation",
                  "Senior Category — Graduates, postgraduates, clinicians, academicians",
                  "PhD Scholars — Registered PhD candidates",
                ].map((item, i) => (
                  <div className="point" key={item}>
                    <span>{i + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3>Abstract Guidelines Followed</h3>
                {[
                  "Word limit: max 300 words",
                  "Submitting author was the presenting author",
                  "File format: MS Word or PDF",
                  "Maximum 2 abstracts per author",
                  "Conference registration was mandatory for presentation",
                  "Top 5 posters were selected for oral presentation",
                ].map((item, i) => (
                  <div className="point" key={item}>
                    <span>{i + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
                <p className="revive-text">
                  Thank you to all participants who contributed to making this
                  segment insightful and competitive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ELEVATING SECTION */}
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
                Elevating Pulmonary &amp; Cardiac Rehabilitation
              </h2>
              <p className="revive-text max">
                REVIVE 2025 created a transformative learning experience where
                science met practice in the heart of Bengaluru. Leading
                pulmonologists, cardiologists, and rehabilitation specialists
                came together for hands-on workshops, clinical insights, and
                meaningful innovation.
              </p>
            </div>
          </div>
        </section>

        <InAssociationSection />
        <VideoShowcaseSection />
        <SponsorsSection />

        {/* SEO CONTENT */}
        <section className="revive-section white">
          <div className="revive-wrap">
            <div className="revive-card" style={{ padding: "clamp(28px,5vw,52px)" }}>
              <h2 className="revive-heading">More about REVIVE 2025</h2>
              <p className="revive-text">
                REVIVE 2025, India’s premier Conclave of Pulmonary &amp; Cardiac
                Rehabilitation, took place on 12th October 2025 in Bengaluru.
                This one-day event brought together leading pulmonologists,
                cardiologists, physiotherapists, and rehabilitation experts to
                share evidence-based practices and innovations in respiratory
                and cardiac care.
              </p>
              <p className="revive-text">
                The conclave featured hands-on rehabilitation workshops, live
                demonstrations, case-based discussions, and an innovation
                showcase of new rehab tools and devices. REVIVE 2025 offered
                practical training, networking opportunities, and meaningful
                academic exchange for rehabilitation professionals.
              </p>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="revive-section" style={{ paddingTop: 0 }}>
          <div className="revive-wrap">
            <div className="revive-card impact-card dark-card">
              <h2 className="revive-heading">Thank You for Being Part of REVIVE 2025</h2>
              <p className="revive-text max">
                We thank every speaker, delegate, partner, sponsor, and
                participant who contributed to making REVIVE 2025 a successful
                and meaningful conclave.
              </p>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Rehabconference;