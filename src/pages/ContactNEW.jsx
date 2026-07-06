import React, { useState } from "react";
import contactImage from "../assets/img/calling.jpg";

const WEB3FORMS_ACCESS_KEY = "f5d50419-6b45-4c6d-8a8f-0c9ef5e93ef7";

const ContactNEW = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "info", message: "Sending your message..." });

    const form = new FormData();
    form.append("access_key", WEB3FORMS_ACCESS_KEY);
    form.append("subject", "New Contact Form Enquiry - Vaayu Website");
    form.append("from_name", "Vaayu Chest & Sleep Specialists Website");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully. Our team will contact you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            result?.message ||
            result?.body?.message ||
            "Submission failed. Please check your Web3Forms access key.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f4f7ef] px-4 sm:px-6 lg:px-20 py-16 sm:py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[620px]">
          <img
            src={contactImage}
            alt="Contact Vaayu Chest and Sleep Specialists"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#1f2a1a]/55"></div>

          <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-3">
              Contact Vaayu
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              We’re here to help you breathe better 
            </h1>

            <p className="mt-4 text-white/90 leading-relaxed max-w-md">
              Reach out to Vaayu Chest & Sleep Specialty Center for appointments,
              respiratory concerns, sleep issues, rehabilitation support, or
              general enquiries.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#5B6641] mb-3">
            Send us a message
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Fill in the details below and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div>
              <label className="block text-sm font-semibold text-[#3f472e] mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[#dfe6d4] bg-white px-4 py-3 outline-none focus:border-[#5B6641] focus:ring-2 focus:ring-[#5B6641]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3f472e] mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#dfe6d4] bg-white px-4 py-3 outline-none focus:border-[#5B6641] focus:ring-2 focus:ring-[#5B6641]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3f472e] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-[#dfe6d4] bg-white px-4 py-3 outline-none focus:border-[#5B6641] focus:ring-2 focus:ring-[#5B6641]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3f472e] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us how we can help you"
                className="w-full rounded-xl border border-[#dfe6d4] bg-white px-4 py-3 outline-none resize-none focus:border-[#5B6641] focus:ring-2 focus:ring-[#5B6641]/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5B6641] text-white font-bold py-3.5 rounded-xl hover:bg-[#46512f] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p
                className={`text-center text-sm font-medium ${
                  status.type === "success"
                    ? "text-green-700"
                    : status.type === "error"
                    ? "text-red-600"
                    : "text-[#5B6641]"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactNEW;