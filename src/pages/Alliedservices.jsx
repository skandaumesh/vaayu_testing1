import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/img/allied.jpg";
import finalBg from "../assets/img/cta-bg.jpg";

const T = {
  green: "#61724e",
  sage: "#9fab90",
  light: "#eef4e9",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

export default function AlliedServices() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const services = [
    {
      title: "Pediatric Pulmonology",
      desc: "Gentle, expert care for children with asthma, apnea, and breathing issues.",
    },
    {
      title: "Clinical Psychology",
      desc: "Supportive therapy for stress, anxiety, and emotional well-being related to chronic illness.",
    },
    {
      title: "Weight Management",
      desc: "Customized plans for healthier lungs through nutrition and fitness guidance.",
    },
    {
      title: "Diet & Nutrition",
      desc: "Meal planning and diet support that promotes respiratory strength and energy.",
    },
    {
      title: "ENT (Ear, Nose, Throat)",
      desc: "Specialized ENT services to treat airway obstructions and improve sleep quality.",
    },
    {
      title: "Home Care Services",
      desc: "Compassionate respiratory care at home—from oxygen therapy to rehabilitation.",
    },
  ];

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
      <style>{`
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; }

        .wrap {
          width: min(92%, 1240px);
          margin: auto;
        }

        .section {
          padding: 90px 0;
        }

        .grid {
          display: grid;
          gap: 28px;
        }

        .grid-3 {
          grid-template-columns: repeat(3, minmax(0,1fr));
        }

        @media (max-width: 1024px) {
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 767px) {
          .section { padding: 64px 0; }
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          minHeight: "85svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${heroImage})`,
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
              "linear-gradient(90deg, rgba(47,54,26,.9), rgba(47,54,26,.65))",
          }}
        />

        <div
          className="wrap"
          style={{
            position: "relative",
            textAlign: "center",
          }}
          data-aos="zoom-in"
        >
          <div
            style={{
              maxWidth: 900,
              margin: "auto",
              padding: "46px 48px",
              borderRadius: 32,
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,.2)",
              color: "#fff",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.2rem,5vw,4.2rem)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Allied Services at Vaayu
            </h1>

            <p
              style={{
                marginTop: 18,
                fontSize: 15.5,
                lineHeight: 1.7,
                opacity: 0.9,
              }}
            >
              Extending care beyond lungs to fortify your respiratory health –
              with integrated support from ENT to pediatric pulmonology,
              psychological support to nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="wrap">
          <div
            style={{
              background: T.white,
              borderRadius: 32,
              padding: "50px 40px",
              textAlign: "center",
              border: `1px solid ${T.border}`,
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            }}
            data-aos="fade-up"
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem,3vw,2.8rem)",
                fontWeight: 600,
              }}
            >
              Your Extended Circle of Care
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 15.5,
                lineHeight: 1.75,
                color: T.muted,
                maxWidth: 780,
                marginInline: "auto",
              }}
            >
              At Vaayu Chest and Sleep Specialists, our Allied Services are
              designed to treat the whole person—not just the lungs. Through
              collaboration and customized plans, we ensure each patient gets
              holistic care that addresses respiratory and non-respiratory needs alike.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: "#f7faf4" }}>
        <div className="wrap grid grid-3">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              style={{
                background: T.white,
                padding: "28px",
                borderRadius: 26,
                border: `1px solid ${T.border}`,
                boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: T.text,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  color: T.muted,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          position: "relative",
          padding: "100px 20px",
          backgroundImage: `url(${finalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(47,54,26,.92), rgba(79,88,49,.8))",
          }}
        />

        <div
          className="wrap"
          style={{
            position: "relative",
            textAlign: "center",
          }}
          data-aos="zoom-in"
        >
          <div
            style={{
              maxWidth: 800,
              margin: "auto",
              padding: "50px 36px",
              borderRadius: 32,
              background: "rgba(255,255,255,.12)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,.25)",
              color: "#fff",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.8rem,3vw,2.6rem)",
                fontWeight: 600,
              }}
            >
              Experience Healing with Vaayu
            </h3>

            <p
              style={{
                marginTop: 16,
                fontSize: 15.5,
                lineHeight: 1.7,
                opacity: 0.9,
              }}
            >
              Whether you're recovering from illness or building long-term wellness,
              our Allied Services bring you the care you need—when and where you need it.
            </p>

            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                marginTop: 26,
                padding: "14px 32px",
                borderRadius: 999,
                background: "#fff",
                color: T.green,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
Book a Consultation            </a>
          </div>
        </div>
      </section>
    </div>
  );
}