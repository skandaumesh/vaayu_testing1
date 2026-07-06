import React from "react";
import diagnosisImage from "../assets/img/dia.jpg";
import impactBg from "../assets/img/react.jpg";

const Testimonials = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/Wm2DLsJOtxQ?rel=0&modestbranding=1",
      caption:
        "Thanks to Vaayu, I have significantly improved my health. Their expert guidance and tailored programs have made a remarkable difference.",
      type: "youtube",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/2NbUjgo0v34?rel=0&modestbranding=1",
      caption:
        "Rehabilitation at Vaayu helped me regain lung capacity and improve my overall health.",
      type: "youtube",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/rgOEMibJRl0?rel=0&modestbranding=1",
      caption:
        "With Vaayu’s support, I recovered from low oxygen levels and regained my strength.",
      type: "youtube",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/579z48wFilk?rel=0&modestbranding=1",
      caption: "A story of recovery — inspiring and heartfelt.",
      type: "youtube",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[420px] bg-cover bg-center flex items-center justify-center px-4 pt-24 sm:pt-28 md:pt-24"
        style={{ backgroundImage: `url(${diagnosisImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-xl w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 text-center text-white shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Patient Experience
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Real voices. Real recoveries. Hear from patients who’ve found relief
            and hope.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#3f472e] mb-6">
          Watch What Our Patients Say
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-xl shadow-sm bg-white p-4 border border-[#e6eadf]"
            >
              <iframe
                className="w-full aspect-video rounded-lg mb-3"
                src={video.src}
                title={`video-${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

              <p className="text-sm text-[#3f472e] leading-relaxed">
                {video.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section
        className="bg-cover bg-center py-10 sm:py-12 px-4"
        style={{ backgroundImage: `url(${impactBg})` }}
      >
        <div className="max-w-4xl mx-auto text-center bg-white/85 backdrop-blur-md p-5 sm:p-8 rounded-2xl shadow">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5B6641] mb-4">
            Thousands Treated, Thousands Transformed
          </h3>

          <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
            Vaayu has helped thousands breathe better, sleep peacefully, and
            live healthier lives with structured care and support.
          </p>

          {/* TESTIMONIAL BOX */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md text-[#3f472e] max-w-2xl mx-auto">
            <p className="italic text-sm sm:text-base leading-relaxed">
              "At Vaayu, every patient is treated like family. The care here is
              not just clinical — it's deeply human."
            </p>
            <div className="mt-4 font-semibold text-sm sm:text-base">
              – A Grateful Patient
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;