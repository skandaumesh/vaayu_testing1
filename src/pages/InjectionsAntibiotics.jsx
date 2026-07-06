import React from "react";

// === Image imports (adjust paths if needed) ===
import heroImg    from "../assets/img/home-injections-hero.png";     // hero background
import injectImg  from "../assets/img/home-injection-nurse.png";     // split-section image
import bgServices from "../assets/img/bg-services-injections.png";   // services backdrop
import bgContact  from "../assets/img/allied.jpg";    // CTA backdrop
import whyImg     from "../assets/img/bg-contact-injections.png";     // “Why Choose” card image

const HomeInjections = () => {
  return (
    <div className="text-gray-800">
      {/* ── Hero ─────────────────────────────────────────────── */}
<section
className="relative bg-cover bg-center text-white px-6 pt-56 sm:pt-60 md:pt-40 pb-24 flex flex-col items-center justify-center"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="absolute inset-0 bg-black/40 z-0" />
  <div className="relative z-10 text-center max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
      💉 Home Injections & Antibiotics
    </h1>
    <h2 className="text-xl md:text-xl">
      Home injections and antibiotics services provide essential medical treatments in the comfort of a patient's home, ensuring timely administration of medications while enhancing convenience and adherence to treatment plans.
    </h2>
  </div>
</section>




      {/* ── Intro split section ─────────────────────────────── */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-gray-100 py-12 px-6">
        <div className="absolute inset-0 bg-white/60 z-0" />
        <img
          src={injectImg}
          alt="Home Injection Service"
          className="md:w-1/2 w-full object-cover z-10 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2 p-8 z-10">
          <h3 className="text-2xl font-semibold mb-4">🏠 Safe, Sterile, and On-Time</h3>
          <p>
            Skip hospital queues and lower cross-infection risk. Our&nbsp;
            <strong>Home Injections &amp;  Antibiotics Service</strong> brings
            experienced nurses to you—ensuring aseptic technique, accurate dosage,
            and post-injection monitoring without leaving home.
          </p>
        </div>
      </section>

      {/* ── Services list ───────────────────────────────────── */}
      <section
        className="relative bg-cover bg-center text-white py-16 px-6"
        style={{ backgroundImage: `url(${bgServices})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            🩺 Injection & IV Services We Offer
          </h3>
          <ul className="space-y-4 text-lg md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <li className="flex items-start gap-2">
              ✅&nbsp;
              <span>
                <strong>IV Antibiotic Therapy</strong> – Broad-spectrum, targeted, and step-down regimens.
              </span>
            </li>
            <li className="flex items-start gap-2">
              ✅&nbsp;
              <span>
                <strong>IM & Sub-cut Injections</strong> – Vitamins, insulin, biologics.
              </span>
            </li>
            <li className="flex items-start gap-2">
              ✅&nbsp;
              <span>
                <strong>Hydration & Electrolyte Infusions</strong> – Saline, dextrose, ORS drips.
              </span>
            </li>
            <li className="flex items-start gap-2">
              ✅&nbsp;
              <span>
                <strong>PICC Line & Port Care</strong> – Flushing, dressing changes, complication checks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              ✅&nbsp;
              <span>
                <strong>Pain-Management Injections</strong> – NSAIDs, corticosteroids, trigger-point shots.
              </span>
            </li>
            <li className="flex items-start gap-2">
              ✅&nbsp;
              <span>
                <strong>Post-Surgical Prophylaxis</strong> – Anti-coagulants & antibiotic cover at home.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Why Choose card ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src={whyImg}
            alt="Why Choose Vaayu Injections"
            className="w-full md:w-1/2 rounded-2xl object-cover"
          />
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              🌟 Why Choose Vaayu for Injections?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>🩺 Nurses certified in IV cannulation and asepsis</li>
              <li>🕒 Timed dosing with digital reminders</li>
              <li>🧪 Cold-chain antibiotics direct from our pharmacy</li>
              <li>📊 Vital monitoring & adverse-reaction alerts</li>
              <li>💚 Seamless coordination with your treating doctor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────── */}
      <section
        className="relative bg-cover bg-center text-white py-20 px-6 text-center"
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            📞 Schedule Your Injection Today
          </h3>
          <p className="mb-6">
            Need a single dose or a full IV course? <strong>Vaayu’s Injection Desk</strong> is ready to help.
          </p>
          <p className="mb-1">📍 Available in: Bengaluru (select zones)</p>
          <p className="mb-1">📞 Call: +91 636 492 8680 / +91 636 492 8681</p>
          <p className="mb-6">
            📧 Email:&nbsp;
            <a href="mailto:admin@vaayuchest.com" className="underline">
              admin@vaayuchest.com
            </a>
          </p>
          <p className="italic">Precise dosing, professional care—right where you live.</p>
        </div>
      </section>
    </div>
  );
};

export default HomeInjections;
