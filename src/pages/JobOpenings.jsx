import React from "react";
import heroBg from "../assets/img/D.jpg";
import careerImage from "../assets/img/pic.png";
import teamworkBg from "../assets/img/teamwork.jpg";
import stayConnectedBg from "../assets/img/stay-connected.jpg";
import missionBg from "../assets/img/abbb.png";
import teamQuoteImg from "../assets/img/CALL.png";
const font = "'Inter', sans-serif";
const JobOpenings = () => {
  return (
<div
  className="bg-white text-gray-800"
  style={{ fontFamily: font }}
>      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-black tracking-tight leading-tight text-center px-6">
          Join the Mission to Breathe Better with VAAYU
        </h1>
      </section>

      {/* 🔹 New Job Opening Section */}
      {/* 🔹 Current Job Opening Section */}
<section className="px-6 py-12 bg-[#f4f7ef]">
  <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl border border-[#e3e8d7] p-8 md:p-10">

    {/* TOP TAG */}
    <div className="inline-flex items-center rounded-full bg-[#eef4e9] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5B6641] mb-5">
      Current Opening
    </div>

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-black text-[#2f3722] leading-tight">
      Hiring: Operations Executive | VAAYU (Bengaluru)
    </h2>

    {/* META */}
    <div className="mt-5 flex flex-wrap gap-3">
      {[
        "₹3.5 LPA",
        "Bengaluru",
        "8:30 AM – 4:30 PM",
        "Full-time",
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-full bg-[#F4F5EC] px-4 py-2 text-sm font-semibold text-[#5B6641]"
        >
          {item}
        </div>
      ))}
    </div>

    {/* ABOUT */}
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-[#5B6641] mb-4">
        About VAAYU
      </h3>

      <p className="text-gray-700 leading-relaxed text-lg">
        VAAYU is a leading respiratory care center offering integrated pulmonology,
        sleep, and rehabilitation services. We focus on delivering a seamless,
        patient-first experience at every touchpoint.
      </p>
    </div>

    {/* ROLE OVERVIEW */}
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-[#5B6641] mb-4">
        Role Overview
      </h3>

      <p className="text-gray-700 leading-relaxed text-lg">
        The Operations Executive is the face of VAAYU. You will be responsible
        for ensuring a smooth, professional, and patient-friendly experience
        from the moment a patient walks in or calls.
      </p>
    </div>

    {/* RESPONSIBILITIES */}
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-[#5B6641] mb-5">
        Key Responsibilities
      </h3>

      <div className="space-y-6">

        <div className="bg-[#f8faf3] border border-[#e3e8d7] rounded-2xl p-5">
          <h4 className="font-bold text-lg text-[#2f3722] mb-3">
            Patient Interaction & Appointments
          </h4>

          <ul className="space-y-2 text-gray-700">
            <li>• Manage appointment scheduling (calls, walk-ins, WhatsApp)</li>
            <li>• Guide patients through consultation and service flow</li>
            <li>• Handle queries and ensure clear communication</li>
          </ul>
        </div>

        <div className="bg-[#f8faf3] border border-[#e3e8d7] rounded-2xl p-5">
          <h4 className="font-bold text-lg text-[#2f3722] mb-3">
            Billing & Payments
          </h4>

          <ul className="space-y-2 text-gray-700">
            <li>• Generate bills accurately and efficiently</li>
            <li>• Handle payments (cash, card, online)</li>
            <li>• Maintain daily transaction records</li>
          </ul>
        </div>

        <div className="bg-[#f8faf3] border border-[#e3e8d7] rounded-2xl p-5">
          <h4 className="font-bold text-lg text-[#2f3722] mb-3">
            Reconciliation & Documentation
          </h4>

          <ul className="space-y-2 text-gray-700">
            <li>• Perform end-of-day billing and payment reconciliation</li>
            <li>• Maintain proper records and reports</li>
            <li>• Coordinate with accounts/operations for discrepancies</li>
          </ul>
        </div>

        <div className="bg-[#f8faf3] border border-[#e3e8d7] rounded-2xl p-5">
          <h4 className="font-bold text-lg text-[#2f3722] mb-3">
            Front Desk Management
          </h4>

          <ul className="space-y-2 text-gray-700">
            <li>• Ensure a welcoming and organized reception area</li>
            <li>• Manage patient flow and waiting times</li>
            <li>• Support doctors and operations team as required</li>
          </ul>
        </div>

      </div>
    </div>

    {/* WHO WE'RE LOOKING FOR */}
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-[#5B6641] mb-5">
        Who We’re Looking For
      </h3>

      <ul className="grid md:grid-cols-2 gap-4">
        {[
          "Good communication skills (English + local language preferred)",
          "Basic computer knowledge (billing software, Excel, etc.)",
          "Organized, detail-oriented, and responsible",
          "Pleasant personality with a patient-friendly attitude",
          "Prior experience in clinic/hospital front office is a plus",
        ].map((item, index) => (
          <li
            key={index}
            className="bg-[#F4F5EC] rounded-xl px-4 py-4 text-gray-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* VALUES */}
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-[#5B6641] mb-5">
        What We Value
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          "Patient-first mindset",
          "Accuracy in billing and handling money",
          "Punctuality and reliability",
          "Professional communication and grooming",
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#dfe6d2] bg-white px-5 py-4 text-[#475034] font-medium"
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* WHY JOIN */}
    <div className="mt-10 rounded-[2rem] bg-[#5B6641] px-7 py-8 text-white">
      <h3 className="text-2xl font-black mb-5">
        Why Join VAAYU
      </h3>

      <ul className="space-y-3 text-white/90">
        <li>• Work in a professional healthcare environment</li>
        <li>• Opportunity to learn and grow in healthcare operations</li>
        <li>• Be part of a patient-centric, high-quality care team</li>
      </ul>
    </div>

    {/* APPLY */}
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-[#5B6641] mb-4">
        How to Apply
      </h3>

      <div className="rounded-2xl border border-[#dfe6d2] bg-[#f8faf3] p-6">
        <p className="text-gray-700 text-[16px] md:text-[17px] leading-8 text-[#4e573b]">
          Send your CV to:
        </p>

        <a
          href="mailto:care@vaayuchest.com"
          className="mt-3 inline-block text-xl font-bold text-[#5B6641] underline"
        >
          care@vaayuchest.com
        </a>

        <p className="mt-4 text-gray-700">
          Subject: <strong>Front Office Executive – VAAYU</strong>
        </p>
      </div>
    </div>

    {/* FINAL NOTE */}
    <div className="mt-10 text-center">
      <p className="text-[15px] md:text-base leading-7 text-[#475034] leading-relaxed">
        If you enjoy interacting with people, are organized, and want to be part
        of a high-quality healthcare setup, we’d love to meet you.
      </p>
    </div>

  </div>
</section>

      


{/* Overlay Section with Background Image */}
<section
  className="relative px-6 py-12"
  style={{
    backgroundImage: `url(${missionBg})`, // Make sure to import this at the top
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "1rem",
  }}
>
  <div className="relative max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-xl border border-white/40 space-y-8">

  {/* Mission Statement */}
  <p className="text-[16px] md:text-[17px] leading-8 text-[#4e573b] font-normal">
    We believe that healthcare is not just about treatment — it's about trust,
    teamwork, and a shared commitment to improving lives. If you’re passionate
    about making a real difference, we invite you to explore opportunities to
    grow with us.
  </p>

  {/* Job Openings Link */}
  <div>
    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#2f3722] mb-3">
      Current Job Openings
    </h2>

    <p className="text-[16px] md:text-[17px] leading-8 text-[#4e573b]">
      Check out our latest opportunities on our{" "}
      <a
        href="https://www.linkedin.com/company/vaayu-chest-and-sleep-specialist/"
        target="_blank"
        rel="noreferrer"
        className="text-[#5B6641] font-semibold underline underline-offset-4"
      >
        LinkedIn page
      </a>.
    </p>
  </div>
</div>
</section>




<section className="px-6 py-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">

    {/* Left: Text Block */}
    <div>
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#2f3722] mb-6">
        Why Work With Us?
      </h2>

      <ul className="space-y-4">
        {[
          "A collaborative and supportive work culture",
          "Opportunities for skill development and career advancement",
          "Exposure to cutting-edge respiratory care practices",
          "Regular CME sessions and workshops",
          "A chance to truly impact patients’ lives",
        ].map((item, index) => (
          <li
            key={index}
            className="rounded-2xl bg-[#f8faf3] border border-[#e3e8d7] px-5 py-4 text-[15px] md:text-base leading-7 text-[#4e573b]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Right: Overlay Box */}
    <div className="bg-white shadow-xl rounded-[2rem] p-7 md:p-8 border border-[#e3e8d7]">
      <h3 className="text-2xl font-black tracking-tight text-[#2f3722] mb-4">
        What Sets Us Apart
      </h3>

      <p className="text-[15px] md:text-base leading-8 text-[#4e573b]">
        Our team thrives on empathy, innovation, and continuous learning.
        With a focus on patient-first care, we build careers with purpose.
        Join a space where your work doesn’t just matter — it makes a difference.
      </p>
    </div>

  </div>
</section>
      {/* How to Apply */}
     <section className="px-6 py-12">
  <div className="max-w-4xl mx-auto bg-[#EEF2E4] p-8 md:p-10 rounded-[2rem] shadow-lg border border-[#dfe6d2]">

    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#2f3722] mb-5">
      How to Apply
    </h2>

    <p className="text-[16px] md:text-[17px] leading-8 text-[#4e573b]">
      Interested candidates can email their resume and a short cover letter to:
    </p>

    <div className="mt-5">
      <strong className="text-[#5B6641] text-lg md:text-xl font-black">
        care@vaayuchest.com
      </strong>
    </div>

    <p className="mt-4 text-[15px] md:text-base text-[#4e573b]">
      Please mention the job title in the subject line.
    </p>
  </div>
</section>

     

   


      {/* Stay Connected - With Background */}
      <section
        className="relative px-6 py-12"
        style={{
          backgroundImage: `url(${stayConnectedBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
        }}
      >
        <div className="relative max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🌐 Stay Connected</h2>
          <p className="text-lg">
            Follow us on{" "}
            <a
              href="https://www.linkedin.com/company/vaayu-chest-and-sleep-specialist/ "
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>,{" "}
            <a
              href="https://www.instagram.com/vaayu_chest_and_sleep/profilecard/?igsh=MTNib2t5dGh4MjQ1cw=="
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 underline"
            >
              Instagram
            </a>, and{" "}
            <a
              href="https://www.youtube.com/@Vaayuchestandsleep0923"
              target="_blank"
              rel="noreferrer"
              className="#708238 underline"
            >
              Youtube 
            </a>{" "}
            for the latest updates on careers, health tips, and life at Vaayu Chest and Sleep Specialists.
          </p>
        </div>
      </section>
    </div>
  );
};

export default JobOpenings;
