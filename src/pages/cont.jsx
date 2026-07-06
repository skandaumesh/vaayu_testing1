import React, { useState } from "react";
import contactImage from "../assets/img/calling.jpg";

const Contact1Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formBody = new FormData();
    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("message", formData.message);

    try {
      const response = await fetch("https://vaayuchest.com/contact.php", {
        method: "POST",
        body: formBody,
      });

      const text = await response.text();

      if (text.toLowerCase().includes("success")) {
        setStatus("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed: " + text);
      }
    } catch (err) {
      setStatus("❌ Network Error: " + err.message);
    }
  };

  // Responsive styles using JS
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "0 auto",
    background: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    overflow: "hidden",
  };

  const imageStyle = {
    flex: "1 1 50%",
    minHeight: "300px",
    backgroundImage: `url(${contactImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const formPanelStyle = {
    flex: "1 1 50%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  // Mobile override
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    containerStyle.flexDirection = "column";
    imageStyle.flex = "0 0 auto";
    formPanelStyle.flex = "0 0 auto";
  }

  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "4rem 1rem" }}>
      <div style={containerStyle}>
        {/* Left Image Panel */}
        <div style={imageStyle}></div>

        {/* Right Form Panel */}
        <div style={formPanelStyle}>
          <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem", textAlign: "center", color: "#333" }}>
            We're here to help
          </h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Let us know how we can help you!"
              rows={5}
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.75rem",
                backgroundColor: "#5b6641",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                borderRadius: "6px",
                fontSize: "1rem",
              }}
            >
              Send Message
            </button>
            <p style={{ textAlign: "center", marginTop: "1rem", color: "#444" }}>{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact1Form;
