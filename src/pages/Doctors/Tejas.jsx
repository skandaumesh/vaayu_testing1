import { useMemo, useState } from "react";
import { MdVerified, MdCall } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";


export default function Tejas() {
  const doctor = useMemo(
    () => ({
      name: "Dr. Tejas Bharat Jogi",
      title: "Pulmonologist",
      qualifications: "MBBS, MD, DNB (Pulmonary Medicine)",
      experienceLabel: "5 yrs Overall Experience",

      summary: [
        "Pulmonologist (Core specialization: Pulmonology)",
        "Current Fellow in Interventional Pulmonology – Apollo Hospital, Bengaluru",
        "Consultation: In-clinic & Video Consultation",
      ],

      about: [
        "Dr. Tejas Bharat Jogi is a Pulmonologist with core specialization in Pulmonology and 5 years of overall experience.",
        "He is currently a Fellow in Interventional Pulmonology at Apollo Hospital, Bengaluru, with strong clinical exposure to complex respiratory care and advanced bronchoscopic procedures.",
        "He believes in holistic, one-stop care tailored to each patient’s daily requirements, ensuring practical and compassionate treatment plans.",
      ],

      medicalPhilosophy:
        "Believes in holistic and one stop care for patients and care catered to daily requirements.",

      conditionsTreated: ["Asthma", "COPD", "ILD", "OSA", "TB", "Pneumonia"],

      achievements: [
        "Paper presentation – NAPCON",
        "Poster presentation – Bronchocon",
        "International Pulmo Conference – Goa",
        "Attended workshops: EBUS (Tata Oncocon) and Bronchoscopy",
        "First prize – Quiz on Sleep Conference by Indian Chest Society (Jan 2026)",
        "Hands-on workshop – Thoracoscopy (Bombay Hospital)",
        "Faculty – Vaayu Chest Revive Conference",
      ],

      languages: ["English", "Hindi", "Marathi", "Gujarati", "Marwadi"],

      clinic: {
        name: "Vaayu Chest & Sleep Specialists",
        address:
          "Ground & 3rd Floor, 37/17, 10th Main Rd, Jayanagar 5th Block, Bengaluru, Karnataka 560041, India",
      },

      timings: [{ day: "Mon - Sat", time: "09:00 AM - 09:00 PM" }],

      booking: {
        ekacareLink: "https://www.eka.care/", // replace later
        phoneLink: "tel:+916364928680",
        phoneDisplay: "+91 63649 28680",
      },
    }),
    []
  );

  const [isCallOpen, setIsCallOpen] = useState(false);

  const vaayu = {
    dark: "#3F4723",
    olive: "#5B6641",
    sage: "#E6EAD2",
    paper: "#F4F5EC",
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(120deg, ${vaayu.sage} 0%, #ffffff 55%, ${vaayu.paper} 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            {/* Image */}
<div className="order-2 md:order-2">              <div className="relative mx-auto w-full max-w-sm">
                <div
                  className="absolute -inset-3 rounded-[28px] opacity-25 blur-xl"
                  style={{ backgroundColor: vaayu.olive }}
                />
                <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-xl">
                  <img
                    src={tejasImg}
                    alt={doctor.name}
                    className="h-[360px] w-full object-cover md:h-[420px]"
                    loading="eager"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm"
                      style={{ backgroundColor: vaayu.olive }}
                    >
                      <MdVerified className="text-base" />
                      Vaayu Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
  <div className="order-2 md:order-2">
              <p className="text-sm font-semibold" style={{ color: vaayu.olive }}>
                Doctor Profile
              </p>

              <h1
                className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl"
                style={{ color: vaayu.dark }}
              >
                {doctor.name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Pill icon={<FaUserDoctor />} text={doctor.title} color={vaayu.dark} bg={vaayu.paper} />
                <Pill text={doctor.qualifications} color={vaayu.dark} bg="#ffffff" border />
                <Pill text={doctor.experienceLabel} color="#ffffff" bg={vaayu.olive} />
              </div>

              <div className="mt-5 rounded-3xl p-5 shadow-sm" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                  Highlights
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {doctor.summary.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: vaayu.olive }} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#timings"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.olive }}
                >
                  View Timings
                </a>

                <button
                  type="button"
                  onClick={() => setIsCallOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition active:scale-[0.99]"
                  style={{ backgroundColor: "#ffffff", color: vaayu.dark, border: `1px solid ${vaayu.sage}` }}
                >
                  <MdCall className="text-lg" />
                  Call Clinic
                </button>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold" style={{ color: vaayu.dark }}>
                  Conditions treated
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {doctor.conditionsTreated.map((c) => (
                    <Chip key={c} text={c} brand={vaayu} />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold" style={{ color: vaayu.dark }}>
                  Languages
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {doctor.languages.map((l) => (
                    <MiniTag key={l} text={l} brand={vaayu} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + ACHIEVEMENTS */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl p-7 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${vaayu.sage}` }}>
              <h2 className="text-2xl font-extrabold" style={{ color: vaayu.dark }}>
                About
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
                {doctor.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-5 rounded-3xl p-5" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                <p className="text-sm font-extrabold" style={{ color: vaayu.dark }}>
                  Medical philosophy
                </p>
                <p className="mt-2 text-sm text-neutral-700">“{doctor.medicalPhilosophy}”</p>
              </div>
            </div>

            <div className="rounded-3xl p-7 shadow-sm" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
              <h2 className="text-2xl font-extrabold" style={{ color: vaayu.dark }}>
                Achievements & conferences
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {doctor.achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: vaayu.olive }} />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMINGS (dark card, light text) */}
      <section id="timings" className="border-t" style={{ backgroundColor: vaayu.paper }}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 h-1 w-14 rounded-full" style={{ backgroundColor: vaayu.olive }} />
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: vaayu.dark }}>
                Clinic Timings
              </h2>
              <p className="mt-1 text-sm text-neutral-700">
                Available <span className="font-semibold">Monday to Saturday</span>, 9:00 AM to 9:00 PM.
              </p>
            </div>

            <a
              href={doctor.booking.ekacareLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              style={{ background: `linear-gradient(135deg, ${vaayu.olive}, ${vaayu.dark})` }}
            >
              Book an Appointment            </a>
          </div>

          <div
            className="mt-8 overflow-hidden rounded-3xl border shadow-2xl"
            style={{
              borderColor: `${vaayu.sage}55`,
              background: "linear-gradient(180deg, #141615 0%, #1c1f1e 100%)",
            }}
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: `linear-gradient(135deg, ${vaayu.dark}, ${vaayu.olive})` }}>
                  <th className="px-6 py-4 font-semibold text-neutral-100">Day</th>
                  <th className="px-6 py-4 font-semibold text-neutral-100">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {doctor.timings.map((row) => (
                  <tr key={row.day} className="transition hover:bg-white/5">
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex rounded-xl px-3 py-1 text-sm font-semibold"
                        style={{ backgroundColor: `${vaayu.olive}30`, color: "#f5f7f6" }}
                      >
                        {row.day}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-neutral-300">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-neutral-600">
            ⓘ Timings may change on holidays or due to clinical commitments. Please confirm while booking.
          </p>
        </div>
      </section>

      {/* CALL MODAL */}
      {isCallOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsCallOpen(false)} />
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: vaayu.olive }}>
                Call Clinic
              </p>
              <h3 className="mt-2 text-xl font-extrabold" style={{ color: vaayu.dark }}>
                {doctor.clinic.name}
              </h3>

              <div className="mt-4 rounded-2xl px-4 py-3" style={{ backgroundColor: vaayu.paper, border: `1px solid ${vaayu.sage}` }}>
                <p className="text-lg font-extrabold" style={{ color: vaayu.dark }}>
                  {doctor.booking.phoneDisplay}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsCallOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.paper, color: vaayu.dark, border: `1px solid ${vaayu.sage}` }}
                >
                  Close
                </button>

                <a
                  href={doctor.booking.phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.99]"
                  style={{ backgroundColor: vaayu.olive }}
                >
                  <MdCall className="text-lg" />
                  Call now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-10" />
    </main>
  );
}

/* ---------- small UI atoms (reuse from Sameer.jsx if already present) ---------- */

function Pill({ text, icon, color, bg, border = false }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: bg, color, border: border ? "1px solid #e5e7eb" : "none" }}
    >
      {icon ? <span className="text-sm">{icon}</span> : null}
      {text}
    </span>
  );
}

function Chip({ text, brand }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: brand.paper, color: brand.dark, border: `1px solid ${brand.sage}` }}
    >
      {text}
    </span>
  );
}

function MiniTag({ text, brand }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
      style={{ backgroundColor: "#ffffff", color: brand.dark, border: `1px solid ${brand.sage}` }}
    >
      {text}
    </span>
  );
}
