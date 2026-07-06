import React from "react";
import { Helmet } from "react-helmet";

import heroImg from "../assets/img/home-care-hero.jpg";
import nursingImg from "../assets/img/card-nursing.png";
import testingImg from "../assets/img/bg-services-meds.jpg";
import rehabImg from "../assets/img/card-rehab.jpg";
import medsImg from "../assets/img/jj.jpg";
import injectImg from "../assets/img/card-injections.jpg";
import injectImg1 from "../assets/img/CONSULT.jpg";
import orrImg from "../assets/img/About us image 1.jpg";
import bgContact from "../assets/img/ar.jpg";

const T = {
  green: "#61724e",
  light: "#eef4e9",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const cards = [
  {
    title: "Home Nursing",
    desc: "Round-the-clock nursing, wound care, vitals monitoring, post-surgical support from trusted caregiving agencies.",
    img: nursingImg,
    link: "/home-care/home-nursing",
  },
  {
    title: "Home Testing (ECG, Spirometry & X-Ray at Home)",
    desc: "Certified phlebotomy, portable spirometry, overnight sleep studies, doorstep ECG & home chest X-ray.",
    img: testingImg,
    link: "/home-care/home-testing",
  },
  {
    title: "Home Rehabilitation",
    desc: "Physiotherapy, pulmonary rehab, cardiac rehab, post-COVID recovery—all at home with compassionate home caring.",
    img: rehabImg,
    link: "/home-care/home-rehab",
  },
  {
    title: "Home Delivery of Medications",
    desc: "Timely refills, cold-chain biologics, inhaler technique counselling, 24×7 pharmacist helpline.",
    img: medsImg,
    link: "/home-care/medications",
  },
  {
    title: "Home Injections & Antibiotics",
    desc: "IV antibiotics, IM injections, PICC line care, hydration drips—safe & sterile home help services.",
    img: injectImg,
    link: "/home-care/InjectionsAntibiotics",
  },
  {
    title: "Tele-Consultations",
    desc: "Consult the doctor from the comfort of your home—quick guidance for home help and home care services.",
    img: injectImg1,
    link: "#",
  },
];

const HomeCareOverview = () => {
  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: T.light,
        color: T.text,
        overflowX: "hidden",
      }}
    >
      <Helmet>
        <title>
          Home Care Services | Home Help, Home Caring & X-Ray at Home | Vaayu Chest & Sleep Specialists
        </title>
        <meta
          name="description"
          content="Vaayu provides trusted home care services: home help, home caring, home nursing, home chest X-ray (x ray at home near me), and home xray service near me—supported by caregiving agencies."
        />
        <meta
          name="keywords"
          content="home care services, home help, home caring, caregiving agencies, xray at home, home chest xray, x ray home service near me, home xray service near me, x ray at home near me, home help services"
        />
      </Helmet>

      <style>{`
        * { box-sizing: border-box; }

        html,
        body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .wrap {
          width: min(92%, 1240px);
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .section {
          padding: 90px 0;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 44px;
          align-items: center;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .home-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .home-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 70px rgba(47,54,26,0.16) !important;
        }

        @media (max-width: 1050px) {
          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .highlight-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .wrap {
            width: 100%;
            padding-left: 18px;
            padding-right: 18px;
          }

          .section {
            padding: 64px 0;
          }

          .hero-card,
          .split-card,
          .cta-card {
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .service-grid {
            grid-template-columns: 1fr;
          }

          .service-img,
          .split-img {
            height: 250px !important;
          }
        }

        @supports (-webkit-touch-callout: none) {
          img {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }

          [style*="backdrop-filter"] {
            -webkit-backdrop-filter: blur(16px);
          }
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          minHeight: "85svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "120px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(47,54,26,.90), rgba(47,54,26,.62))",
          }}
        />

        <div className="wrap">
          <div
            className="hero-card"
            style={{
              maxWidth: 950,
              margin: "auto",
              padding: 48,
              borderRadius: 34,
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              color: "#fff",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,.24)",
              boxShadow: "0 28px 80px rgba(47,54,26,.32)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.2rem,5vw,4.1rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
               Vaayu Home Care Services
            </h1>

            <p
              style={{
                margin: "18px auto 0",
                maxWidth: 760,
                fontSize: 15.5,
                lineHeight: 1.75,
                marginBottom: 0,
              }}
            >
              Hospital-grade expertise delivered to your
              doorstep—comprehensive <strong>home care services</strong>,
              reliable <strong>home help</strong> and{" "}
              <strong>home caring</strong>, plus diagnostics like{" "}
              <strong>X-ray at home</strong> and{" "}
              <strong>home chest X-ray</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="section" style={{ paddingTop: 72, paddingBottom: 42 }}>
        <div className="wrap">
          <div className="highlight-grid">
            {[
              {
                title: "X-Ray at Home",
                desc: (
                  <>
                    Need an <strong>x ray at home </strong>? We arrange a{" "}
                    <strong>home xray service</strong> with portable machines
                    and radiology reporting.
                  </>
                ),
              },
              {
                title: "Home Help Services",
                desc: (
                  <>
                    Trained caregivers for daily support—professional{" "}
                    <strong>home help services</strong> you can trust.
                  </>
                ),
              },
              {
                title: "Caregiving Agencies",
                desc: (
                  <>
                    Partnered <strong>caregiving agencies</strong> ensure
                    background-verified staff and supervised care.
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="home-card"
                style={{
                  background: T.white,
                  borderRadius: 26,
                  padding: 28,
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 18px 45px rgba(47,54,26,0.08)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "#f7faf4",
                    color: T.green,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    border: `1px solid ${T.border}`,
                    marginBottom: 18,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  style={{
                    color: T.green,
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: 10,
                    color: T.muted,
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section">
        <div className="wrap">
          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 46px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                padding: "7px 18px",
                borderRadius: 999,
                background: T.white,
                border: `1px solid ${T.border}`,
                color: T.green,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Home Care Services
            </span>

            <h2
              style={{
                marginTop: 18,
                color: T.green,
                fontSize: "clamp(1.9rem,3vw,2.8rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: 0,
              }}
            >
              Care support delivered at home
            </h2>
          </div>

          <div className="service-grid">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.link}
                className="home-card"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  background: T.white,
                  borderRadius: 28,
                  overflow: "hidden",
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 18px 45px rgba(47,54,26,0.08)",
                }}
              >
                <img
                  src={card.img}
                  alt={
                    card.title === "Home Testing (ECG, Spirometry & X-Ray at Home)"
                      ? "Home testing with ECG, spirometry and x ray at home near me"
                      : card.title === "Home Nursing"
                      ? "Home nursing and home caring by caregiving agencies"
                      : card.title === "Home Injections & Antibiotics"
                      ? "Home injections and antibiotics with home help services"
                      : card.title === "Home Rehabilitation"
                      ? "Home rehabilitation and pulmonary rehab—professional home caring"
                      : card.title === "Home Delivery of Medications"
                      ? "Home delivery of medications by Vaayu home care services"
                      : "Tele-consultations for home care services and home help"
                  }
                  className="service-img"
                  loading="lazy"
                  style={{
                    height: 210,
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: 24 }}>
                  <h3
                    style={{
                      color: T.green,
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 1.35,
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      marginTop: 10,
                      color: T.muted,
                      fontSize: 14,
                      lineHeight: 1.7,
                      marginBottom: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW SPLIT */}
      <section className="section">
        <div className="wrap">
          <div
            className="split-card grid-2"
            style={{
              background: T.white,
              padding: 40,
              borderRadius: 30,
              border: `1px solid ${T.border}`,
              boxShadow: "0 25px 70px rgba(47,54,26,0.10)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={orrImg}
                alt="Integrated home care services overview—home caring and home help"
                className="split-img"
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: 430,
                  height: 310,
                  objectFit: "cover",
                  borderRadius: 22,
                  border: "1px solid rgba(97,114,78,0.12)",
                  boxShadow: "0 18px 45px rgba(47,54,26,0.10)",
                }}
              />
            </div>

            <div style={{ maxWidth: 580 }}>
              <h2
                style={{
                  color: T.green,
                  fontSize: "clamp(1.9rem,3vw,2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Integrated Care, Every Step of the Way
              </h2>

              <p
                style={{
                  marginTop: 16,
                  color: T.muted,
                  fontSize: 15.5,
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}
              >
                Whether it’s administering IV antibiotics after your hospital
                discharge or guiding you through pulmonary rehab exercises, our
                multidisciplinary <strong>home care services</strong> team works
                from a <strong>single digital chart</strong> overseen by Vaayu
                pulmonologists. Need imaging? We coordinate{" "}
                <strong>home chest X-ray</strong> via a trusted{" "}
                <strong>x ray home service near me</strong> partner. One helpline
                for everything—<strong>home help</strong>,{" "}
                <strong>home caring</strong>, testing and rehab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          backgroundImage: `url(${bgContact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(47,54,26,.82), rgba(79,88,49,.70))",
          }}
        />

        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="cta-card"
            style={{
              maxWidth: 820,
              margin: "auto",
              padding: 42,
              borderRadius: 30,
              background: "rgba(255,255,255,.9)",
              border: `1px solid ${T.border}`,
              boxShadow: "0 24px 70px rgba(47,54,26,0.20)",
            }}
          >
            <h2
              style={{
                color: T.green,
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
               Not Sure Where to Start?
            </h2>

            <p
              style={{
                marginTop: 14,
                color: T.muted,
                fontSize: 15.5,
                lineHeight: 1.7,
                marginBottom: 0,
              }}
            >
              Call our care coordinator and we’ll match you with the right
              service—nursing, testing, rehab, meds or injections, including{" "}
              <strong>home xray service near me</strong> when you need an{" "}
              <strong>x ray at home</strong>.
            </p>

            <p style={{ marginTop: 18, color: T.text, fontWeight: 700 }}>
              📞 +91 98765 43210
            </p>

            <p style={{ color: T.text }}>
              📧{" "}
              <a
                href="mailto:admin@vaayuchest.com"
                style={{ color: T.green, fontWeight: 700 }}
              >
                admin@vaayuchest.com
              </a>
            </p>

            <p
              style={{
                color: T.muted,
                fontStyle: "italic",
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Vaayu—bringing expert care home, one visit at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCareOverview;