import { Link } from "react-router-dom";

import pulmonaryImg from "../assets/img/ot-daily-life.jpg";
import cardiacImg from "../assets/img/cardiac-rehab.jpg";
import integratedImg from "../assets/img/card-rehab.jpg";
import cancerImg from "../assets/img/cancer.jpg";

export default function RehabWellness() {
  const services = [
    {
      title: "Pulmonary Rehabilitation",
      desc: "Improve breathing, stamina, and confidence through structured lung recovery programs.",
      img: pulmonaryImg,
      path: "/pulmonary-rehab/pulmonary",
    },
    {
      title: "Cardiac Rehabilitation",
      desc: "Supervised heart recovery support focused on strength, endurance, and safe activity.",
      img: cardiacImg,
      path: "/pulmonary-rehab/cardiac",
    },
    {
      title: "Integrated Cardio Pulmonary",
      desc: "Combined heart and lung rehabilitation for patients needing complete recovery support.",
      img: integratedImg,
      path: "/rehab-wellness/integrated-cardio-pulmonary",
    },
    {
      title: "Cancer Rehab",
      desc: "Supportive rehabilitation to reduce fatigue, rebuild strength, and improve quality of life.",
      img: cancerImg,
      path: "/rehab-wellness/cancer-rehab",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#3F4723] overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-20 pt-32 pb-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#9fab90]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#61724e]/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-sm font-semibold text-[#61724e]">
              Rehabilitation & Wellness
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Recovery that helps you{" "}
              <span className="text-[#61724e]">breathe, move & live better.</span>
            </h1>

            <p className="mt-6 text-[#6e5b46] leading-relaxed max-w-xl">
              Vaayu’s rehabilitation programs support long-term recovery through
              pulmonary, cardiac, integrated cardio-pulmonary, and cancer rehab care.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
  to="/contact"
  className="inline-flex items-center justify-center mt-3 px-5 py-3 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#5B6641] transition"
>
  Contact Us
</Link>

              <a
                href="#programs"
                className="px-7 py-3 rounded-full bg-white/50 border border-white/70 backdrop-blur-md text-[#61724e] font-semibold text-center hover:bg-white transition"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] bg-white/35 border border-white/60 backdrop-blur-xl shadow-2xl p-4">
              <img
                src={pulmonaryImg}
                alt="Vaayu rehabilitation care"
                className="w-full h-[420px] object-cover rounded-[24px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white/45 border border-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-5 max-w-xs">
              <p className="text-sm text-[#6e5b46]">Complete recovery journey</p>
              <h3 className="text-xl font-bold mt-1">
                Diagnosis → Therapy → Rehab → Follow-up
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto rounded-[32px] bg-white/35 border border-white/70 backdrop-blur-xl shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8">
          {[
            ["Structured Recovery", "Programs designed around breathing, endurance, movement, and daily function."],
            ["Guided by Experts", "Care supported by respiratory, cardiac, rehab, and allied health specialists."],
            ["Long-Term Support", "Focused on improving quality of life beyond the first consultation."],
          ].map(([title, desc]) => (
            <div key={title}>
              <div className="w-12 h-12 rounded-2xl bg-[#61724e] text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-[#6e5b46] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-sm font-semibold text-[#61724e]">
              Our Programs
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold">
              Choose the right rehab path
            </h2>

            <p className="mt-4 text-[#6e5b46] max-w-2xl mx-auto">
              Each program supports a different recovery need while staying connected
              to Vaayu’s complete respiratory and wellness ecosystem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((svc) => (
              <Link key={svc.title} to={svc.path} className="group">
                <div className="h-full rounded-[28px] bg-white/35 border border-white/70 backdrop-blur-xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                  <div className="p-3">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="h-48 w-full object-cover rounded-[22px]"
                    />
                  </div>

                  <div className="p-6 pt-3">
                    <h3 className="text-xl font-bold group-hover:text-[#61724e] transition">
                      {svc.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#6e5b46] leading-relaxed">
                      {svc.desc}
                    </p>

                    <p className="mt-5 text-sm font-bold text-[#61724e]">
                      View Service →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 pb-24">
        <div className="max-w-7xl mx-auto rounded-[36px] bg-[#61724e]/90 text-white backdrop-blur-xl shadow-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <h2 className="relative text-3xl md:text-5xl font-bold">
            Need help choosing the right rehab program?
          </h2>

          <p className="relative mt-5 max-w-2xl mx-auto text-white/85 leading-relaxed">
            Our team can guide you based on your symptoms, diagnosis, recovery goals,
            and current health condition.
          </p>

        <Link
  to="/contact"
  className="inline-flex items-center justify-center mt-3 px-5 py-3 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#5B6641] transition"
>
Talk to our team </Link>
        </div>
      </section>
    </div>
  );
}