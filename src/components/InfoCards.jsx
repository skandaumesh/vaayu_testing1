import React from "react";
import "./InfoCards.css";

const InfoCards = () => {
  return (
    <section className="info-cards">

      {/* EMERGENCY */}
       {/* VAAYU CARE */}
<div className="info-card">
  <p className="info-label">Vaayu Care</p>

  <h3>Specialists in Lung & Sleep Health</h3>

  <p>
    Focused care for asthma, COPD, ILD, and sleep disorders with a
    structured approach to long-term recovery and better breathing.
  </p>
</div>

      {/* APPOINTMENT */}
      <div className="info-card">
        <p className="info-label">Appointments</p>

        <h3>Consultation & Follow-ups</h3>

        <p>
          Book consultations for respiratory care, sleep disorders,
          rehabilitation, and specialist services through our clinic.
        </p>
      </div>

      {/* WORKING HOURS */}
      <div className="info-card">
        <p className="info-label">Working Hours</p>

        <div className="hours-box">
          <div>
            <span className="day">Monday - Saturday</span>
            <span className="time">8:00 AM – 7:00 PM</span>
          </div>
        </div>

        <p>
          Visit us during consultation hours for appointments, diagnostics,
          and ongoing care support.
        </p>
      </div>

    </section>
  );
};

export default InfoCards;