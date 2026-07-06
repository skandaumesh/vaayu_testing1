// Full Code with Unique Content for Each Condition (Integrated with Layout)
import React, { useState } from "react";
import headerBg from "../assets/img/PIC2.jpg";
import asthmaImage from "../assets/img/asthma_symptoms_mosaic.png";
import triggersImage from "../assets/img/images.png";
import diagnosisImage from "../assets/img/dia-H.jpg";

const Testimonials = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${headerBg})` }}>
        <div className="bg-black bg-opacity-50 p-6 rounded text-center text-white max-w-2xl">
          <h1 className="text-4xl font-bold mb-2">Patient Stories123</h1>
          <p className="text-lg">Real voices. Real recoveries. Hear from patients who’ve found relief and hope.</p>
        </div>
      </div>

      {/* Testimonial Upload/Display Blocks */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-[#3f472e] mb-8">Share Your Experience</h2>

        {/* Video Upload Block */}
        <div className="bg-[#EAEEE9] p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-semibold text-[#3f472e] mb-4">Upload Your Testimonial Video</h3>
          <form>
            <input type="file" accept="video/*" className="mb-4 block w-full" />
            <textarea
              rows="4"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="Write a short description or story (optional)"
            ></textarea>
            <button
              type="submit"
              className="bg-[#3f472e] text-white px-6 py-2 rounded hover:bg-[#5b6146] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Testimonials Display Block */}
        <div>
          <h3 className="text-2xl font-semibold text-[#3f472e] mb-6">Watch What Our Patients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Videos */}
            {[1, 2, 3].map((id) => (
              <div key={id} className="rounded shadow bg-white p-4">
                <video controls className="w-full rounded mb-3">
                  <source src={`https://www.w3schools.com/html/mov_bbb.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-[#3f472e]">Patient testimonial #{id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;