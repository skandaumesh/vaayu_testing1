import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ildImg from "../assets/img/lung-cancer.jpg";
import asthmaImg from "../assets/img/asthma.jpg";
import rehabImg from "../assets/img/home-care-hero.png";
import sleepImg from "../assets/img/insomnia-hero.jpg";

const CentersOfExcellence = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, disable: "mobile" });
  }, []);

  const centers = [
    {
      target: "500",
      label: "Patients Under Treatment",
      title: "Interstitial Lung Disease (ILD)",
      description:
        "Advanced diagnosis and personalised care plans for interstitial lung diseases.",
      link: "/specialty-clinic/ild",
      img: ildImg,
    },
    {
      target: "1500",
      label: "Patients Treated",
      title: "Asthma",
      description:
        "Long-term asthma care focused on control, prevention, and better daily breathing.",
      link: "/specialty-clinic/asthma",
      img: asthmaImg,
    },
    {
      target: "1000",
      label: "Patients Helped",
      title: "Pulmonary Rehabilitation",
      description:
        "Structured rehabilitation for chronic respiratory patients to improve function and quality of life.",
      link: "/pulmonary-rehab/pulmonary",
      img: rehabImg,
    },
    {
      target: "200",
      label: "Patients Treated",
      title: "Sleep Clinic",
      description:
        "Diagnosis and treatment support for sleep disorders including sleep apnea and insomnia.",
      link: "/sleep-clinic",
      img: sleepImg,
    },
  ];

  const taglines = [
    "Individualised treatment plans",
    "Multidisciplinary team discussions",
    "Beyond inhalers: root-cause approach",
    "Patient-centered, doctor-led care",
    "Outcome-driven protocols",
  ];

  return (
    <section className="coe-section">
      <div className="coe-bg" />

      <div className="coe-wrap">
        {/* TOP CONTENT */}
        <div className="coe-head">
          <div className="coe-chip">Centers of Excellence</div>

          <h2>Specialised respiratory and sleep care under one roof</h2>

          <p>
            Dedicated care programs for complex lung and sleep conditions, built
            around structured evaluation, long-term treatment, and continuous
            follow-up.
          </p>

          <div className="coe-tags">
            {taglines.map((text, i) => (
              <div key={i} className="coe-tag">
                <span />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="coe-cards">
          {centers.map((item, index) => (
            <Link to={item.link} key={index} className="coe-card">
              <div className="coe-card-img">
                <img src={item.img} alt={item.title} />

                <div className="coe-card-overlay" />

                <div className="coe-card-stat">
                  <p>{item.label}</p>

                  <strong>
                    <CountUp
                      end={parseInt(item.target)}
                      duration={2}
                      separator=","
                    />
                    +
                  </strong>
                </div>
              </div>

              <div className="coe-card-body">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="coe-link">
                  <span>Explore care program</span>
                  <i />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .coe-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #eef4e9;
          padding: 70px 0;
          font-family: Inter, system-ui, -apple-system, sans-serif;
        }

        .coe-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 12% 18%, rgba(97,114,78,0.13), transparent 30%),
            radial-gradient(circle at 90% 72%, rgba(159,171,144,0.22), transparent 32%);
          pointer-events: none;
        }

        .coe-wrap {
          position: relative;
          z-index: 2;
          width: 92%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .coe-head {
          text-align: center;
          max-width: 840px;
          margin: 0 auto 38px;
        }

        .coe-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(97,114,78,.2);
          background: rgba(255,255,255,.78);
          padding: 8px 16px;
          color: #61724e;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .coe-head h2 {
          margin-top: 18px;
          font-size: clamp(2rem, 4vw, 3.15rem);
          line-height: 1.12;
          font-weight: 700;
          color: #2F361A;
          letter-spacing: -0.02em;
        }

        .coe-head > p {
          margin: 16px auto 0;
          max-width: 660px;
          color: #5f6b50;
          font-size: 15px;
          line-height: 1.7;
        }

        .coe-tags {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .coe-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 999px;
          border: 1px solid rgba(97,114,78,.15);
          background: rgba(255,255,255,.82);
          padding: 10px 15px;
          box-shadow: 0 8px 22px rgba(47,54,26,.05);
        }

        .coe-tag span {
          width: 22px;
          height: 1px;
          background: rgba(97,114,78,.45);
          flex-shrink: 0;
        }

        .coe-tag p {
          margin: 0;
          color: #3F4723;
          font-size: 13.5px;
          font-weight: 500;
          line-height: 1.3;
        }

        .coe-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .coe-card {
          display: block;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(97,114,78,.16);
          background: #fff;
          text-decoration: none;
          box-shadow: 0 14px 38px rgba(47,54,26,0.10);
          transition: all .28s ease;
        }

        .coe-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 70px rgba(47,54,26,0.16);
        }

        .coe-card-img {
          position: relative;
          height: 135px;
          overflow: hidden;
        }

        .coe-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .coe-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(47,54,26,.68),
            rgba(47,54,26,.18),
            transparent
          );
        }

        .coe-card-stat {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 12px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
        }

        .coe-card-stat p {
          margin: 0;
          max-width: 65%;
          color: #fff8ef;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.25;
          text-transform: uppercase;
          letter-spacing: .09em;
        }

        .coe-card-stat strong {
          color: #fff8ef;
          font-size: 28px;
          line-height: 1;
          font-weight: 700;
          white-space: nowrap;
        }

        .coe-card-body {
          padding: 20px;
        }

        .coe-card-body h3 {
          color: #2F361A;
          font-size: 17px;
          line-height: 1.25;
          font-weight: 700;
          margin: 0;
        }

        .coe-card-body > p {
          margin-top: 11px;
          color: #5f6b50;
          font-size: 13.5px;
          line-height: 1.6;
        }

        .coe-link {
          margin-top: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #61724e;
          font-size: 13px;
          font-weight: 600;
        }

        .coe-link i {
          width: 34px;
          height: 1px;
          background: rgba(97,114,78,.5);
        }

        @media (max-width: 1180px) {
          .coe-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 760px;
            margin: 0 auto;
          }

          .coe-card-img {
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .coe-section {
            padding: 58px 0;
          }

          .coe-wrap {
            width: 90%;
          }

          .coe-head {
            text-align: left;
            margin-bottom: 30px;
          }

          .coe-head h2 {
            font-size: 1.85rem;
          }

          .coe-head > p {
            font-size: 14px;
          }

          .coe-tags {
            justify-content: flex-start;
          }

          .coe-tag {
            width: 100%;
            border-radius: 14px;
          }

          .coe-cards {
            grid-template-columns: 1fr;
          }

          .coe-card-img {
            height: 160px;
          }
        }

        @media (min-width: 1400px) {
          .coe-wrap {
            max-width: 1280px;
          }

          .coe-cards {
            gap: 22px;
          }

          .coe-card-img {
            height: 155px;
          }
        }

        @supports (-webkit-touch-callout: none) {
          .coe-card,
          .coe-tag {
            transform: translateZ(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CentersOfExcellence;