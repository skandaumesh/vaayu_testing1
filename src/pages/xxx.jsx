import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      setStatusMessage(result.message);
      setIsSuccess(result.success);

      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Something went wrong. Please try again later.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F5EC] text-black px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-4xl font-semibold mb-8 text-black">We're here to help</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Smith"
                className="w-full px-4 py-3 bg-[#768359] text-white border border-gray-600 rounded focus:outline-none focus:border-black-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="xyz@gmail.com"
                className="w-full px-4 py-3 bg-[#768359] text-white border border-gray-600 rounded focus:outline-none focus:border-black-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know how we can help"
                className="w-full px-4 py-3 bg-[#768359] text-white border border-gray-600 rounded focus:outline-none focus:border-black-400"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#768359] text-white px-6 py-3 rounded hover:bg-[#A8A84A] transition"
            >
              Send message
            </button>

            {statusMessage && (
              <p
                className={`text-sm mt-2 ${
                  isSuccess ? "text-green-700" : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>

        {/* Right: Testimonial Box */}
        <div className="relative p-8 rounded-xl bg-gradient-to-br from-[#768359] to-[#3f472e] border border-[#333] shadow-lg">
          <div className="text-sm text-black mb-4">
            <strong className="text-white">Vaayu Chest & Sleep Center</strong>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
            “Vaayu’s comprehensive care approach{" "}
            <span className="text-white font-semibold">helped me breathe easier</span> and get back to my daily life faster. The clarity and compassion in their treatment plan made all the difference.”
          </p>
          <div className="absolute bottom-4 right-4 text-sm text-[#ffcc00] font-semibold">
            A Grateful Patient
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
