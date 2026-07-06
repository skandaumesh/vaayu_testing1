import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Why Should I choose Medical Health",
    answer:
      "Choosing Vaayu Chest and Sleep Specialists ensures expert care for respiratory and sleep disorders. With advanced technology, personalized treatment plans, and a patient-centric approach, they prioritize your health and comfort, leading to effective outcomes and enhanced well-being. Trust Vaayu for comprehensive medical health solutions tailored to your needs....",
  },
  {
    question: "What are the Centre’s visiting hours?",
    answer: "Visiting hours are from 8 AM to 7 PM, Monday to Saturday.",
  },
  {
    question: "How many visitors are allowed?",
    answer: "Only two visitors are allowed per patient at a time.",
  },
];

const FaqAndAppointment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  return (
    <div className="bg-gray-100 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 lg:px-32">
        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl text-[#5B6641] font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                  className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left ${
                    activeIndex === index ? "bg-[#5B6641] text-white" : ""
                  }`}
                >
                  {faq.question}
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 text-sm text-gray-700 bg-white">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Form (Replaced) */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl text-[#5B6641] font-bold mb-6 text-center">
            We're here to help
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B6641]"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B6641]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Let us know how we can help you!"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B6641]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#5B6641] text-white font-bold rounded-md hover:bg-[#768359] transition"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm text-center mt-2 text-gray-700">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FaqAndAppointment;
