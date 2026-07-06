import React from "react";
import { motion } from "framer-motion";

import OneTwoHero from "../assets/img/aqq.png";
import preventive from "../assets/img/tobacco-program.png";
import smokingBg from "../assets/img/tobacco-program.png";
import tipsBg from "../assets/img/abbb.png";
import smokingImg from "../assets/img/zzz.png";

const EKA =
  "https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists";

const T = {
  green: "#61724e",
  light: "#eef4e9",
  soft: "#f7faf4",
  white: "#ffffff",
  text: "#2F361A",
  muted: "#5f6b50",
  border: "rgba(97,114,78,0.14)",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PreventiveClinics = () => {
  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: T.light,
        color: T.text,
      }}
    >
      <style>{`
        .wrap{width:min(92%,1240px);margin:auto}
        .section{padding:90px 0}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:46px;align-items:center}
        .card{background:#fff;border:1px solid ${T.border};border-radius:30px;box-shadow:0 20px 60px rgba(0,0,0,0.08)}
        .point{display:grid;grid-template-columns:40px 1fr;gap:12px;padding:14px;border-radius:14px;background:${T.soft}}

        @media(max-width:900px){
          .grid-2{grid-template-columns:1fr}
        }
      `}</style>

      {/* HERO */}
      <motion.section
        className="section"
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${OneTwoHero})`,
          backgroundSize: "cover",
          position: "relative",
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <div style={{
          position:"absolute",
          inset:0,
          background:"linear-gradient(90deg, rgba(47,54,26,.9), rgba(47,54,26,.6))"
        }}/>

        <div className="wrap">
          <div style={{
            maxWidth:900,
            margin:"auto",
            padding:40,
            borderRadius:30,
            background:"rgba(255,255,255,.12)",
            backdropFilter:"blur(16px)",
            color:"#fff",
            textAlign:"center"
          }}>
            <h1 style={{fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:600}}>
              Preventive Respiratory Center
            </h1>

            <p style={{marginTop:14}}>
              Protect your lungs before problems begin. Vaayu’s preventive care combines education, therapy, and vaccination.
            </p>

            <a href={EKA} target="_blank" rel="noopener noreferrer"
              style={{
                display:"inline-block",
                marginTop:22,
                padding:"12px 28px",
                background:"#fff",
                color:T.green,
                borderRadius:999,
                fontWeight:600,
                textDecoration:"none"
              }}>
              Book on EkaCare
            </a>
          </div>
        </div>
      </motion.section>

      {/* WHY */}
      <section className="section">
        <div className="wrap">
          <div className="card grid-2" style={{padding:40}}>

            <img src={preventive} style={{width:"100%",borderRadius:20}} />

            <div>
              <h2 style={{color:T.green}}>
                Why Preventive Respiratory Care?
              </h2>

              <div style={{marginTop:20,display:"grid",gap:12}}>
                {[
                  "Quit smoking and vaping",
                  "Protect against airborne infections",
                  "Improve immunity and lifestyle habits",
                  "Minimize environmental exposures"
                ].map((item,i)=>(
                  <div key={i} className="point">
                    <div style={{
                      width:32,height:32,borderRadius:10,
                      background:T.green,color:"#fff",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontWeight:600
                    }}>
                      {i+1}
                    </div>
                    <p style={{margin:0}}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SMOKING */}
      <section className="section" style={{backgroundImage:`url(${smokingBg})`,backgroundSize:"cover"}}>
        <div className="wrap">
          <div className="card grid-2" style={{padding:40,background:"rgba(255,255,255,.92)"}}>

            <img src={smokingImg} style={{width:"100%",borderRadius:20}} />

            <div>
              <h2 style={{color:T.green}}>
                Smoking Cessation Clinic
              </h2>

              <p style={{marginTop:10,color:T.muted}}>
                Quit for good with our multidisciplinary program.
              </p>

              <div style={{marginTop:18,display:"grid",gap:12}}>
                {[
                  "Behavioral & Cognitive Therapy",
                  "Nicotine Replacement Therapy",
                  "Pharmacotherapy (3–6 month plans)"
                ].map((item,i)=>(
                  <div key={i} className="point">
                    <div style={{
                      width:32,height:32,borderRadius:10,
                      background:T.green,color:"#fff",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontWeight:600
                    }}>
                      {i+1}
                    </div>
                    <p style={{margin:0}}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VACCINATION */}
      <section className="section">
        <div className="wrap">

          <h2 style={{textAlign:"center",color:T.green}}>
            Adult Respiratory Vaccination Clinic
          </h2>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
            gap:20,
            marginTop:30
          }}>
            {[
              "Influenza Vaccine",
              "Pneumococcal Vaccine",
              "Tdap Booster",
              "COVID-19 Vaccine",
              "Shingles Vaccine",
              "Custom Vaccines"
            ].map((item,i)=>(
              <div key={i} className="card" style={{padding:20}}>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TIPS */}
      <section className="section" style={{backgroundImage:`url(${tipsBg})`,backgroundSize:"cover"}}>
        <div className="wrap">
          <div className="card" style={{padding:40,background:"rgba(0,0,0,0.6)",color:"#fff"}}>

            <h2 style={{textAlign:"center"}}>
              Tips to Keep Your Lungs Healthy
            </h2>

            <div style={{marginTop:20,display:"grid",gap:12}}>
              {[
                "Get enough sleep",
                "Manage stress with exercise or yoga",
                "Stay hydrated",
                "Avoid allergens",
                "Wear mask in pollution",
                "Regular pulmonologist checkups"
              ].map((item,i)=>(
                <div key={i} className="point" style={{background:"rgba(255,255,255,.1)",color:"#fff"}}>
                  <div style={{
                    width:32,height:32,borderRadius:10,
                    background:"#fff",color:T.green,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontWeight:600
                  }}>
                    {i+1}
                  </div>
                  <p style={{margin:0}}>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PreventiveClinics;