import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroImg from "../assets/img/en.png";
import whatIsEntImg from "../assets/img/ENT.png";
import entCareImg from "../assets/img/C.jpg";
import whatWeTreatImg from "../assets/img/male-working-as-paediatrician.jpg";
import servicesBg from "../assets/img/cta-bg.jpg";

const T = {
  green: "#61724e",
  light: "#eef4e9",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

export default function ENTServices() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: T.light }}>

      <style>{`
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden; }
h2, h3, h4 {
  color: #61724e !important;
}
        .wrap {
          width: min(92%, 1240px);
          margin: auto;
        }

        .section {
          padding: 90px 0;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          align-items: center;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 900px) {
          .grid-2, .grid-3 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .section { padding: 60px 0; }
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
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(47,54,26,.9), rgba(47,54,26,.6))"
        }}/>

        <div className="wrap" data-aos="zoom-in">
          <div style={{
            maxWidth: 900,
            margin: "auto",
            padding: "46px",
            borderRadius: 32,
            background: "rgba(255,255,255,.12)",
            backdropFilter: "blur(16px)",
            color: "#fff",
            textAlign: "center"
          }}>
            <h1 style={{
              fontSize: "clamp(2.2rem,5vw,4rem)",
              fontWeight: 600
            }}>
              ENT Services
            </h1>

            <p style={{
              marginTop: 16,
              fontSize: 15.5,
              lineHeight: 1.7
            }}>
              Precision care for Ear, Nose, and Throat conditions—delivered with expertise and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS ENT */}
      <section className="section">
  <div className="wrap grid-2" style={{ alignItems: "center" }}>

    {/* TEXT */}
    <div data-aos="fade-right" style={{ maxWidth: 600 }}>
      <h2
        style={{
          fontSize: "clamp(2rem,3vw,2.8rem)",
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        What is ENT?
      </h2>

      <p
        style={{
          marginTop: 16,
          fontSize: 15.5,
          lineHeight: 1.8,
          color: "#5f6b50",
        }}
      >
        ENT (Ear, Nose, and Throat) or Otolaryngology focuses on the diagnosis
        and treatment of disorders affecting these vital senses. From sinus
        problems and allergies to hearing loss and voice disorders, ENT
        specialists manage a broad spectrum of conditions. At Vaayu, our ENT
        care is seamlessly integrated with respiratory and allergy services to
        deliver complete healing.
      </p>
    </div>

    {/* IMAGE */}
    <div data-aos="fade-left" style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={whatIsEntImg}
        alt="What is ENT"
        style={{
          width: "100%",
          maxWidth: "420px",   // 👈 KEY FIX (reduced size)
          height: "320px",     // 👈 controlled height
          objectFit: "cover",
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
        }}
      />
    </div>

  </div>
</section>
      {/* CARE */}
      <section className="section" style={{ background: "#f7faf4" }}>
        <div className="wrap grid-2">
          <img src={entCareImg} style={{ borderRadius: 20 }} data-aos="fade-right"/>

          <div data-aos="fade-left">
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 600 }}>
              Comprehensive ENT Care
            </h2>

            <p style={{ marginTop: 14, color: T.muted }}>
              ENT disorders can significantly affect your hearing, breathing, and daily comfort. At Vaayu, we offer advanced diagnostic and treatment services to manage a wide range of ENT conditions in both children and adults.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE TREAT */}
      <section style={{
        padding: "100px 20px",
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: "cover"
      }}>
        <div className="wrap grid-2" style={{
          background: "rgba(255,255,255,.9)",
          padding: 40,
          borderRadius: 30
        }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 600 }}>
              What We Treat
            </h2>

            {["Chronic sinusitis","Hearing loss","Sore throat","Vertigo","Allergic rhinitis","Pediatric ENT","Sleep issues"]
              .map((item,i)=>(
                <div key={i} style={{ display:"flex",gap:12,marginTop:12 }}>
                  <div style={{
                    width:32,height:32,borderRadius:"50%",
                    background:T.green,color:"#fff",
                    display:"flex",alignItems:"center",justifyContent:"center"
                  }}>{i+1}</div>
                  <p>{item}</p>
                </div>
              ))}
          </div>

          <img src={whatWeTreatImg} style={{ borderRadius: 20 }} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <h2 style={{
            textAlign:"center",
            fontSize:"clamp(1.8rem,3vw,2.6rem)",
            fontWeight:600
          }}>
            Services We Offer
          </h2>

          <div className="grid-3" style={{ marginTop: 40 }}>
            {["Endoscopic sinus evaluation","Audiology","Minor procedures","Allergy testing","Sleep assessments","Specialist collaboration"]
              .map((s,i)=>(
                <div key={i} style={{
                  background:T.white,
                  padding:24,
                  borderRadius:24,
                  border:`1px solid ${T.border}`
                }}>
                  <h4 style={{ fontWeight:600 }}>{s}</h4>
                  <p style={{ marginTop:8, color:T.muted }}>
                    Comprehensive and coordinated care tailored to each individual's ENT needs.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding:"100px 20px",
        backgroundImage:`url(${servicesBg})`,
        backgroundSize:"cover",
        textAlign:"center"
      }}>
        <div className="wrap">
          <div style={{
            maxWidth:800,
            margin:"auto",
            padding:40,
            borderRadius:30,
            background:"rgba(255,255,255,.9)"
          }}>
            <h3 style={{ fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:600 }}>
              Breathe, Speak & Hear Better with Vaayu
            </h3>

            <p style={{ marginTop:14 }}>
              Schedule your ENT consultation with our multidisciplinary team and experience holistic ENT care.
            </p>

            <a href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists" target="_blank">
              <button style={{
                marginTop:20,
                padding:"14px 30px",
                borderRadius:999,
                background:T.green,
                color:"#fff"
              }}>
                BOOK AN APPOINTMENT
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}