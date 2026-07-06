import React, { useState } from 'react';
import appointmentImg from '../assets/img/appointment.jpg'; // ✅ import image

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to right, #dbe4b2, #cbdc9b)'
    }}>
      <div style={{
        display: 'flex',
        maxWidth: '900px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        width: '100%'
      }}>
        {/* ✅ Image on the left side */}
        <div style={{
          flex: 1,
          minHeight: '500px'
        }}>
          <img 
            src={appointmentImg}
            alt="Appointment Illustration"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Form on the right side */}
        <div style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{ fontSize: '28px', color: '#3d5a2a', marginBottom: '10px' }}>Book an Appointment</h2>
          <p style={{ fontSize: '14px', color: '#5e5e5e', marginBottom: '20px' }}>
            Please fill out the form below to make an appointment
          </p>
          <input type="text" placeholder="First Name" style={inputStyle} />
          <input type="text" placeholder="Last Name" style={inputStyle} />
          <input type="tel" placeholder="Phone Number" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <select style={inputStyle}>
            <option value="">Preferred Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={inputStyle}
          />
          <small style={{ fontSize: '12px', color: '#7a7a7a', marginBottom: '16px' }}>
            By clicking Send, you agree to our updated Privacy Policy terms and conditions.
          </small>
          <button style={buttonStyle}>Leave a Request</button>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '12px',
  marginBottom: '16px',
  border: '1px solid #d1d1d1',
  borderRadius: '8px',
  fontSize: '14px',
  width: '100%'
};

const buttonStyle = {
  padding: '14px',
  backgroundColor: '#7a9c4b',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 600,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};

export default AppointmentForm;
