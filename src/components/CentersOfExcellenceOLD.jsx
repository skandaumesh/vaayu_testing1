import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CentersOfExcellence = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const counters = [
    {
      target: "500",
      label: "Patients Under Treatment",
      title: "Interstitial Lung Disease (ILD)",
      description:
        "Advanced diagnosis and personalised care plans for interstitial lung diseases.",
      link: "/specialty-clinic/ild",
    },
    {
      target: "1500",
      label: "Patients Treated",
      title: "Asthma",
      description:
        "Long-term asthma care focused on control, prevention, and better breathing.",
      link: "/specialty-clinic/asthma",
    },
    {
      target: "1000",
      label: "Patients Helped",
      title: "Pulmonary Rehabilitation",
      description:
        "Structured rehab to improve function, stamina, and quality of life.",
      link: "/pulmonary-rehab/pulmonary",
    },
    {
      target: "200",
      label: "Patients Treated",
      title: "Sleep Clinic",
      description:
        "Diagnosis and care for sleep apnea, snoring, insomnia, and sleep concerns.",
      link: "/sleep-clinic",
    },
  ];

  const taglines = [
    "Individualised treatment plans",
    "Multidisciplinary team discussions",
    "Root-cause focused approach",
    "Doctor-led patient care",
    "Outcome-driven protocols",
  ];

  return (
<section className="coe-section">
  <div className="coe-wrap">
    <div className="coe-head">
      <p className="coe-chip">Centers of Excellence</p>

      <h1>Specialised respiratory and sleep care under one roof</h1>

      <p>
        Dedicated care programs for complex lung and sleep conditions, built
        around structured evaluation, long-term treatment, and continuous follow-up.
      </p>

      <div className="coe-tags">
        {taglines.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>

    <div className="coe-cards">
      {counters.map((item) => (
        <Link to={item.link} key={item.title} className="coe-card">
          <div>
            <p>{item.label}</p>
            <h3>{item.title}</h3>
          </div>

          <strong>
            <CountUp end={parseInt(item.target)} duration={2} separator="," />+
          </strong>

          <span>{item.description}</span>

          <b>Explore care →</b>
        </Link>
      ))}
    </div>
  </div>

  <style>{`
    .coe-section {
      background: #eef4e9;
      padding: 72px 20px;
    }

    .coe-wrap {
      max-width: 1180px;
      margin: 0 auto;
    }

    .coe-head {
      text-align: center;
      max-width: 850px;
      margin: 0 auto 38px;
    }

    .coe-chip {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 999px;
      background: #fff;
      border: 1px solid #dfe6d4;
      color: #5B6641;
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: .16em;
    }

    .coe-head h1 {
      margin-top: 18px;
      font-size: clamp(2rem, 4vw, 3.2rem);
      line-height: 1.12;
      font-weight: 800;
      color: #2F361A;
    }

    .coe-head > p {
      margin: 16px auto 0;
      max-width: 650px;
      color: #5f6b50;
      line-height: 1.7;
      font-size: 15px;
    }

    .coe-tags {
      margin-top: 22px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .coe-tags span {
      background: #fff;
      border: 1px solid #dfe6d4;
      color: #3f472e;
      border-radius: 999px;
      padding: 10px 15px;
      font-size: 13px;
      font-weight: 600;
    }

    .coe-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .coe-card {
      min-height: 260px;
      background: #fff;
      border: 1px solid #dfe6d4;
      border-radius: 24px;
      padding: 24px;
      text-decoration: none;
      box-shadow: 0 14px 34px rgba(47,54,26,.09);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: .25s ease;
    }

    .coe-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 22px 50px rgba(47,54,26,.14);
    }

    .coe-card p {
      font-size: 10px;
      color: #6A734F;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: .12em;
      margin-bottom: 10px;
    }

    .coe-card h3 {
      color: #2F361A;
      font-size: 18px;
      line-height: 1.3;
      font-weight: 800;
    }

    .coe-card strong {
      display: block;
      color: #5B6641;
      font-size: 38px;
      font-weight: 900;
      margin: 18px 0 8px;
    }

    .coe-card span {
      color: #666;
      font-size: 14px;
      line-height: 1.6;
    }

    .coe-card b {
      margin-top: 18px;
      color: #5B6641;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .08em;
    }

    @media(max-width: 1180px) {
      .coe-cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media(max-width: 640px) {
      .coe-section {
        padding: 56px 16px;
      }

      .coe-head {
        text-align: left;
      }

      .coe-tags {
        justify-content: flex-start;
      }

      .coe-cards {
        grid-template-columns: 1fr;
      }

      .coe-card {
        min-height: auto;
      }
    }
  `}</style>
</section>
  );
};

export default CentersOfExcellence;