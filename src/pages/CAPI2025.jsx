import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RegistrationModal from "../components/RegistrationModal";

import heroImage from "../assets/img/lung-cancer.jpg";
import vaayuImg from "../assets/img/WhatsApp Image 2026-02-09 at 4.53.40 PM.jpg.jpeg";
import royalImg from "../assets/img/pattabi.jpeg";
import partnerLogo1 from "../assets/img/log1.png";
import partnerLogo2 from "../assets/img/sss.jpg";
import partnerLogo3 from "../assets/img/log3.png";
import partnerLogo4 from "../assets/img/log4.png";
import partnerLogo5 from "../assets/img/log5.png";
import alliedBg from "../assets/img/allied.jpg";
import vaayuLogo from "../assets/img/vaayu-logo.jpg";
import royalcareLogo from "../assets/img/royalcare-logo.png";

const speakerVideos = [
  "https://youtu.be/0dOTlJPgjpk",
  "https://youtu.be/CfmKaRy_UC0",
  "https://youtu.be/OviN_kcIovs",
  "https://youtu.be/NFPku06pcGA",
  "https://youtu.be/BJEqhjfxUGE",
  "https://youtu.be/Ye1xVyS3Bw0",
];

const toEmbedSrc = (url) => {
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "");
    if (host === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if (host.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    return url.replace("watch?v=", "embed/");
  } catch {
    return url;
  }
};

const eventDate = new Date("2025-07-26T13:15:00");

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

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [visible, setVisible] = useState(true);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +eventDate - +now;
    if (difference <= 0) return { expired: true };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!visible || !timeLeft || timeLeft.expired) return null;

  return (
    <div className="capi-countdown">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSd6O9M6TSCl3gWgkAw8l2Cg2iq8bACm3D2jYq8heDWvzLAgJg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="capi-countdown-link"
      >
        <strong>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </strong>
        <span>To go. Limited seats available.</span>
      </a>

      <button onClick={() => setVisible(false)} className="capi-countdown-close">
        ×
      </button>
    </div>
  );
};

const CAPI2025Page = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="capi-page">
      {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}
      <CountdownTimer />

      <style>{`
        * { box-sizing: border-box; }

        html, body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .capi-page {
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          background: ${T.light};
          color: ${T.text};
          overflow-x: hidden;
        }

        .capi-wrap {
          width: min(92%, 1240px);
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .capi-section {
          padding: clamp(64px, 7vw, 96px) 0;
        }

        .capi-card {
          background: ${T.white};
          border: 1px solid ${T.border};
          border-radius: clamp(24px, 3vw, 32px);
          box-shadow: 0 20px 60px rgba(47,54,26,0.08);
        }

        .capi-hero {
          min-height: 88svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          position: relative;
          padding: clamp(110px, 12vw, 150px) 20px;
        }

        .capi-hero-card {
          max-width: 980px;
          margin: auto;
          padding: clamp(28px, 5vw, 52px);
          border-radius: clamp(24px, 3vw, 34px);
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(255,255,255,.35);
          box-shadow: 0 28px 80px rgba(47,54,26,.30);
          text-align: center;
        }

     .capi-title {
  color: ${T.green};
  font-size: clamp(1.9rem, 4vw, 3.2rem); /* ↓ reduced */
  font-weight: 550; /* ↓ softer */
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0;
}
.capi-heading {
  color: ${T.green};
  font-size: clamp(1.5rem, 2.5vw, 2.2rem); /* ↓ reduced */
  font-weight: 550; /* ↓ softer */
  line-height: 1.2;
  letter-spacing: -0.025em;
  margin: 0;
}

        .capi-text {
          color: ${T.muted};
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
        }

        .capi-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(28px, 5vw, 46px);
        }

        .capi-logo-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 26px;
          align-items: center;
        }

        .capi-video-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .capi-partner-card {
          background: ${T.white};
          border: 1px solid ${T.border};
          border-radius: 22px;
          padding: 22px;
          text-align: center;
          box-shadow: 0 14px 34px rgba(47,54,26,0.07);
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .capi-countdown {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 50;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          max-width: 360px;
          padding: 16px 18px;
          border-radius: 18px;
          background: ${T.green};
          color: #fff;
          border: 1px solid rgba(255,255,255,.35);
          box-shadow: 0 22px 60px rgba(47,54,26,.28);
        }

        .capi-countdown-link {
          color: #fff;
          text-decoration: none;
          display: grid;
          gap: 4px;
        }

        .capi-countdown-link span {
          font-size: 13px;
          opacity: .9;
        }

        .capi-countdown-close {
          background: transparent;
          border: none;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          line-height: 1;
        }

        iframe {
          border: 0;
        }

        @media (max-width: 1100px) {
          .capi-logo-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .capi-video-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .capi-grid-2 {
            grid-template-columns: 1fr;
          }

          .capi-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .capi-wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .capi-hero {
            min-height: auto;
            padding-top: 112px;
            padding-bottom: 72px;
          }

          .capi-card,
          .capi-hero-card {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .capi-video-grid,
          .capi-logo-grid {
            grid-template-columns: 1fr;
          }

          .capi-countdown {
            left: 16px;
            right: 16px;
            bottom: 16px;
            max-width: none;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .capi-hero {
            min-height: auto;
          }

          img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }
      `}</style>

      {/* Hero Section */}
      <header className="capi-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(47,54,26,0.72)",
          }}
        />

        <div className="capi-wrap">
          <div className="capi-hero-card">
            <h1 className="capi-title">
              4th Annual Meeting Of
              <br />
              CAPI (Conclave Of Advanced Pulmonary Interventions)
              <br />
              July-2025
            </h1>

            <p
              style={{
                margin: "20px auto 0",
                maxWidth: 820,
                color: T.text,
fontSize: "15.5px",
fontWeight: 500,
letterSpacing: "-0.01em",                lineHeight: 1.6,
              }}
            >
              Globally First Of Its Kind — Focused On Complications And Safety In
              Interventional Pulmonology
            </p>

           
          </div>
        </div>
      </header>

      {/* From Two Formidable IP Institutes */}
      <section className="capi-section">
        <div className="capi-wrap">
          <h2 className="capi-heading" style={{ textAlign: "center" }}>
            From Two Formidable IP Institutes
          </h2>

          <div className="capi-grid-2" style={{ marginTop: 36 }}>
            <div className="capi-card" style={{ padding: 28, textAlign: "center" }}>
              <img src={vaayuLogo} alt="Vaayu Chest and Sleep Specialists" style={{ height: 92, margin: "auto" }} />
              <img
                src={vaayuImg}
                alt="Vaayu Team"
                style={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  borderRadius: 18,
                  marginTop: 20,
                }}
              />
              <p style={{ marginTop: 18, fontWeight: 600 }}>Dr. Ravindra Mehta &amp; Team</p>
            </div>

            <div className="capi-card" style={{ padding: 28, textAlign: "center" }}>
              <img src={royalcareLogo} alt="Royal Care Logo" style={{ height: 92, margin: "auto" }} />
              <img
                src={royalImg}
                alt="Royal Care Team"
                style={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  borderRadius: 18,
                  marginTop: 20,
                }}
              />
              <p style={{ marginTop: 18, fontWeight: 600 }}>Dr. VR Pattabhi Raman &amp; Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement CTA Section */}
      <section className="capi-section">
        <div className="capi-wrap">
          <div className="capi-card capi-grid-2" style={{ overflow: "hidden" }}>
            <div style={{ padding: "clamp(26px,4vw,44px)" }}>
              <p style={{ color: T.green, fontWeight: 700, fontSize: 18 }}>
                CAPI 2025: A Milestone in Interventional Pulmonology
              </p>
              <p style={{ color: T.text, fontSize: "clamp(1.1rem,2vw,1.45rem)", lineHeight: 1.55, fontWeight: 600 }}>
                From rare case discussions to global faculty insights, CAPI 2025 brought together a vibrant
                community of doctors and innovators for a landmark experience.
              </p>
            </div>

            <div
              style={{
                background: T.soft,
                padding: "clamp(26px,4vw,44px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: T.green, fontSize: 18, lineHeight: 1.7, textAlign: "center", fontWeight: 600 }}>
                Thank you to all who joined us — your presence made CAPI 2025 an unforgettable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In Association With */}
      <section className="capi-section" style={{ background: T.white }}>
        <div className="capi-wrap" style={{ textAlign: "center" }}>
          <h2 className="capi-heading">In Association With</h2>

          <div style={{ marginTop: 28, marginBottom: 46 }}>
            <img src={royalcareLogo} alt="RoyalCare Logo" style={{ height: 112, margin: "auto", objectFit: "contain" }} />
            <p style={{ marginTop: 14, color: T.muted, fontWeight: 600 }}>
              RoyalCare Super Specialty Hospital
            </p>
          </div>

          <div className="capi-logo-grid">
            {[
              { logo: partnerLogo1, label: "Indian Association For Bronchology" },
              { logo: partnerLogo2, label: "Karnataka Pulmonologists Association", tall: true },
              { logo: partnerLogo3, label: "The Asian Pacific Interventional Pulmonology Alliance" },
              { logo: partnerLogo4, label: "World Association for Bronchology & Interventional Pulmonology" },
              { logo: partnerLogo5, label: "European Association for Bronchology and Interventional Pulmonology" },
            ].map((item) => (
              <div key={item.label} className="capi-partner-card">
                <img
                  src={item.logo}
                  alt={item.label}
                  style={{
                    height: item.tall ? 140 : 86,
                    maxWidth: "100%",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                />
                <p style={{ marginTop: 14, color: T.muted, fontSize: 13.5, lineHeight: 1.5 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dignitaries Speak */}
      <section className="capi-section">
        <div className="capi-wrap">
          <h2 className="capi-heading" style={{ textAlign: "center" }}>
            Words of Support from Our Esteemed Dignitaries
          </h2>

          <div className="capi-grid-2" style={{ marginTop: 38 }}>
            {[
              "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7349011240381206529?compact=1",
              "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7350472313177296897?compact=1",
            ].map((src, index) => (
              <div key={src} className="capi-card" style={{ padding: 14 }}>
                <iframe
                  src={src}
                  height="399"
                  width="100%"
                  allowFullScreen
                  title={`Dignitary Video ${index + 1}`}
                  style={{ borderRadius: 16 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers' Videos */}
      <section className="capi-section" style={{ background: T.white }}>
        <div className="capi-wrap">
          <h2 className="capi-heading" style={{ textAlign: "center" }}>
            Expert Insights: Real World Applications
          </h2>

          <div className="capi-video-grid" style={{ marginTop: 38 }}>
            {speakerVideos.map((url, i) => (
              <div key={url} className="capi-card" style={{ padding: 12 }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: 16,
                    }}
                    src={toEmbedSrc(url)}
                    title={`CAPI Speaker Video ${i + 1}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page background block */}
      <section className="capi-section">
        <div className="capi-wrap">
          <div
            className="capi-card"
            style={{
              minHeight: 260,
              backgroundImage: `url(${alliedBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(238,244,233,0.55)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="capi-section" style={{ paddingTop: 0 }}>
        <div className="capi-wrap">
          <div className="capi-card" style={{ padding: "clamp(28px,5vw,52px)", textAlign: "center" }}>
            <h2 className="capi-heading">A Gathering of Experts, Ideas, and Innovation</h2>
            <p className="capi-text" style={{ margin: "18px auto 0", maxWidth: 850 }}>
              CAPI 2025 was a resounding success — uniting interventional pulmonology leaders for insightful
              discussions, global case collaborations, and transformative learning. Thank you to all the doctors,
              faculty, and attendees who made it impactful. Highlights and session recordings will be shared soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CAPI2025Page;