import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import CampRollingCollageGallery from "../components/CampRollingCollageGallery";

// ✅ HERO background image (use import; do NOT use Windows absolute path in React)
import heroBg from "../assets/img/Camp/a8.jpg";

// Desk images (existing)
import camp1 from "../assets/img/Camp/lung capacity.jpeg";
import camp2 from "../assets/img/Camp/allergy.jpeg";
import camp3 from "../assets/img/Camp/sleep.jpeg";
import camp4 from "../assets/img/Camp/camp4.jpeg";
import camp5 from "../assets/img/Camp/a3.jpg";

const OLIVE = "#5B6641";
const OLIVE_DARK = "#6A734F";
const OLIVE_SOFT = "#78866B";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const softScale = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

function useInViewOnce(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function CountUp({ value = 100, suffix = "+", label = "" }) {
  const { ref, inView } = useInViewOnce({ threshold: 0.25 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    const from = 0;
    const to = value;

    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3">
      <div className="text-xl font-extrabold text-white">
        {n}
        {suffix}
      </div>
      <div className="text-xs text-white/85 mt-1">{label}</div>
    </div>
  );
}

function GlowCard({ children, className = "" }) {
  return (
    <div
      className={[
        "group relative rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-500">
        <div
          className="h-full w-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(91,102,65,0.25), transparent 45%), radial-gradient(circle at 70% 70%, rgba(120,134,107,0.20), transparent 50%)",
          }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function IconBadge({ children }) {
  return (
    <div className="h-12 w-12 rounded-2xl bg-[#5B6641]/10 text-[#5B6641] flex items-center justify-center">
      {children}
    </div>
  );
}

function Pill({ text }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#78866B]/15 px-3 py-1 text-xs font-extrabold text-[#5B6641]">
      {text}
    </span>
  );
}

function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const active = idx === open;
        return (
          <div key={it.q} className="rounded-3xl border border-gray-200 bg-white overflow-hidden">
            <button
              onClick={() => setOpen(active ? -1 : idx)}
              className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
              type="button"
            >
              <span className="font-extrabold text-gray-900">{it.q}</span>
              <span
                className={[
                  "h-10 w-10 rounded-2xl flex items-center justify-center transition",
                  active ? "bg-[#5B6641] text-white" : "bg-[#5B6641]/10 text-[#5B6641]",
                ].join(" ")}
              >
                <motion.span
                  animate={{ rotate: active ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  +
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="px-5 sm:px-6 pb-5 text-sm text-gray-700 leading-relaxed">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const Camp = () => {
  /**
   * ✅ FIX FOR "ZERO PHOTOS" ISSUE (Works in Vite + CRA)
   *
   * Put camp gallery images inside:
   *   public/camp-gallery/
   *
   * Example:
   *   public/camp-gallery/01.jpg
   *   public/camp-gallery/02.jpg
   *   public/camp-gallery/03.jpg
   */
  const gallery = useMemo(
    () => [
      { src: "/camp-gallery/01.jpeg", alt: "Camp photo 1" },
      { src: "/camp-gallery/02.jpeg", alt: "Camp photo 2" },
      { src: "/camp-gallery/03.jpeg", alt: "Camp photo 3" },
      { src: "/camp-gallery/04.jpeg", alt: "Camp photo 4" },
      { src: "/camp-gallery/05.jpeg", alt: "Camp photo 5" },
      { src: "/camp-gallery/06.jpeg", alt: "Camp photo 6" },
      { src: "/camp-gallery/07.jpeg", alt: "Camp photo 7" },
      { src: "/camp-gallery/08.jpeg", alt: "Camp photo 8" },
            { src: "/camp-gallery/10.jpg", alt: "Camp photo 10" },
            { src: "/camp-gallery/11.jpg", alt: "Camp photo 10" },

     
    ],
    []
  );

  // ✅ fallback if any image is missing
  const safeGallery = gallery?.length ? gallery : [{ src: camp5, alt: "Camp photo" }];

  const desks = useMemo(
    () => [
      {
        key: "lung",
        title: "Lung Capacity Check Desk",
        pill: "Breathing Screening",
        image: camp2,
        points: [
          "Quick, non-invasive lung capacity screening",
          "Basic airflow & breathing efficiency check",
          "Early guidance if reduced lung function is suspected",
        ],
        why: "Many lung issues develop silently. This desk helps identify early warning signs and guides you on next steps.",
      },
      {
        key: "sleep",
        title: "Sleep Health Desk",
        pill: "Sleep Patterns",
        image: camp3,
        points: [
          "Understand your sleep routine and quality",
          "Awareness on snoring & daytime sleepiness",
          "Practical tips for healthier sleep habits",
        ],
        why: "Sleep impacts energy, immunity, heart health, and breathing. Learn when sleep evaluation may be needed.",
      },
      {
        key: "rehab",
        title: "Pulmonary & Cardiac Rehab Desk",
        pill: "Strength & Endurance",
        image: camp4,
        points: [
          "Simple muscle strength & endurance checks",
          "Activity-based demonstrations",
          "Learn why rehab improves stamina & daily function",
        ],
        why: "Structured rehab can reduce breathlessness, improve tolerance, and enhance quality of life in lung/heart conditions.",
      },
      {
        key: "allergy",
        title: "Allergy & Immunology Desk",
        pill: "Triggers & Control",
        image: camp1,
        points: [
          "Know common allergy triggers affecting breathing",
          "Info on testing & long-term control options",
          "How allergies can affect lungs and sleep",
        ],
        why: "Uncontrolled allergies can worsen asthma and sleep. Understand triggers and options like immunotherapy.",
      },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      { title: "Quick Checks", desc: "Simple, non-invasive screening and awareness." },
      { title: "Clear Guidance", desc: "What the results may indicate and next steps." },
      { title: "Rehab Awareness", desc: "See how rehab improves stamina & outcomes." },
    ],
    []
  );

  const [activeDesk, setActiveDesk] = useState(desks[0].key);
  const active = desks.find((d) => d.key === activeDesk);

  const [highlightIndex, setHighlightIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHighlightIndex((i) => (i + 1) % highlights.length), 3500);
    return () => clearInterval(t);
  }, [highlights.length]);

  return (
    <div className="bg-white">
      {/* HERO */}
      
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Vaayu Camp Hero Background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_35%),radial-gradient(circle_at_80%_30%,#ffffff_0,transparent_30%),radial-gradient(circle_at_50%_80%,#ffffff_0,transparent_35%)]" />
        </div>

        <motion.div
          className="absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl opacity-25"
          style={{ background: OLIVE_SOFT }}
          animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 right-0 h-80 w-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#ffffff" }}
          animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-10 pt-[110px] sm:pt-[120px] lg:pt-[130px] pb-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-yellow-300" />
                Community Health Camp
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Vaayu Chest & Sleep <span className="text-white-200">Specialty Center</span>
              </h1>

              <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                Preventive care begins with awareness. Explore our{" "}
                <span className="font-semibold">4 dedicated desks</span> for lungs, sleep, rehabilitation, and allergy &
                immunology education.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#desks"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-[#5B6641] px-5 py-3 font-extrabold shadow-lg hover:opacity-95 transition"
                >
                  Explore Desks
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white px-5 py-3 font-semibold hover:bg-white/15 transition"
                >
                  View Camp Gallery
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <CountUp value={4} suffix="+" label="Dedicated Desks" />
                <CountUp value={10} suffix=" min" label="Quick Screening" />
                <CountUp value={100} suffix="%" label="Non-invasive" />
                <CountUp value={1} suffix=" step" label="Clear Next Guidance" />
              </div>
            </motion.div>

            <motion.div variants={softScale} initial="hidden" animate="show" className="lg:col-span-5">
              <div className="rounded-3xl bg-white shadow-xl overflow-hidden">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500">Today’s Highlight</p>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                        >
                          <h2 className="mt-1 text-xl font-extrabold text-[#5B6641]">
                            {highlights[highlightIndex].title}
                          </h2>
                          <p className="mt-2 text-sm text-gray-700">{highlights[highlightIndex].desc}</p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                   
                      
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {desks.slice(0, 3).map((d) => (
                      <button
                        key={d.key}
                        onClick={() => {
                          setActiveDesk(d.key);
                          document.getElementById("desks")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group rounded-2xl border border-gray-200 p-3 text-left hover:border-[#5B6641]/40 hover:bg-[#5B6641]/5 transition"
                        type="button"
                      >
                        <div className="text-xs font-extrabold text-[#5B6641]">{d.pill}</div>
                        <div className="mt-1 text-xs text-gray-700 line-clamp-2">{d.title}</div>
                        <div className="mt-2 text-[10px] text-gray-500 group-hover:text-gray-700 transition">
                          Tap to view →
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#78866B]/10 border border-[#78866B]/20 p-4">
                    <p className="text-sm font-semibold text-[#5B6641]">Note</p>
                    <p className="mt-1 text-sm text-gray-700">
                      Camps are for awareness & screening. If needed, we guide you for detailed evaluation at Vaayu.
                    </p>
                  </div>
                </div>

                <div className="bg-[#5B6641] px-6 py-4">
                  <div className="flex items-center justify-between gap-3 text-white">
                    <div>
                      <p className="text-xs text-white/80">Need help?</p>
                      <p className="font-extrabold">Call: +91 63649 28680 / 28681</p>
                    </div>
                    <a
                      href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-white text-[#5B6641] px-4 py-2 text-sm font-extrabold hover:opacity-95 transition"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center justify-center"
          >
            <a
              href="#desks"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs text-white/90 hover:bg-white/15 transition"
            >
              Scroll to explore desks
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }} aria-hidden="true">
                ↓
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* DESKS */}
      <section id="desks" className="max-w-6xl mx-auto px-5 lg:px-10 py-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Camp Desks</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#5B6641]">Tap a desk to reveal details</h2>
            <p className="mt-2 text-gray-700 max-w-2xl">
              This section is interactive — click the desk tabs to switch content smoothly.
            </p>
          </div>

          <div className="flex gap-3">
           
            <a
              href="#contact"
              className="rounded-xl bg-[#5B6641] px-4 py-2 text-sm font-extrabold text-white shadow hover:opacity-95 transition"
            >
              Enquire
            </a>
          </div>
        </motion.div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            {desks.map((d) => {
              const isActive = d.key === activeDesk;
              return (
                <button
                  key={d.key}
                  onClick={() => setActiveDesk(d.key)}
                  className={[
                    "w-full text-left rounded-3xl border p-5 transition group",
                    isActive
                      ? "border-[#5B6641]/40 bg-[#5B6641]/5"
                      : "border-gray-200 bg-white hover:border-[#5B6641]/30 hover:bg-[#5B6641]/[0.04]",
                  ].join(" ")}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Pill text={d.pill} />
                      <div className="mt-2 font-extrabold text-gray-900">{d.title}</div>
                      <div className="mt-1 text-sm text-gray-700 line-clamp-2">{d.why}</div>
                    </div>

                    <motion.div
                      className={[
                        "h-10 w-10 rounded-2xl flex items-center justify-center shrink-0",
                        isActive ? "bg-[#5B6641] text-white" : "bg-[#5B6641]/10 text-[#5B6641]",
                      ].join(" ")}
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 220, damping: 16 }}
                      aria-hidden="true"
                    >
                      ↗
                    </motion.div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDesk}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
              >
                <GlowCard className="rounded-[2rem]">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/9] bg-gray-100">
                      {active?.image ? (
                        <motion.img
                          src={active.image}
                          alt={active.title}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.35 }}
                        />
                      ) : (
                        <div
                          className="h-full w-full"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 30%, rgba(91,102,65,0.25), transparent 55%), radial-gradient(circle at 70% 70%, rgba(120,134,107,0.20), transparent 60%)",
                          }}
                        />
                      )}
                    </div>

                    <div className="absolute top-4 left-4 rounded-full bg-white/85 backdrop-blur px-4 py-2 text-xs font-extrabold text-[#5B6641]">
                      {active?.pill}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">{active?.title}</h3>
                        <p className="mt-2 text-sm text-gray-700 leading-relaxed">{active?.why}</p>
                      </div>

                      <IconBadge>
                        <motion.span
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          aria-hidden="true"
                        >
                          ✦
                        </motion.span>
                      </IconBadge>
                    </div>

                    <div className="mt-6 grid sm:grid-cols-2 gap-3">
                      {active?.points?.map((p) => (
                        <div
                          key={p}
                          className="rounded-2xl border border-gray-200 bg-white p-4 hover:border-[#5B6641]/30 hover:bg-[#5B6641]/[0.03] transition"
                        >
                          <div className="text-sm font-semibold text-gray-900">✓</div>
                          <div className="mt-1 text-sm text-gray-700">{p}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href="#contact"
                        className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#5B6641] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95 transition"
                      >
                        Ask about this desk
                      </a>
                      <a
                        href="#gallery"
                        className="inline-flex flex-1 items-center justify-center rounded-2xl border border-[#5B6641]/25 px-5 py-3 text-sm font-extrabold text-[#5B6641] hover:bg-[#5B6641]/5 transition"
                      >
                        See Photos
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ✅ GALLERY */}
     {/*   <div id="gallery">
        <CampRollingCollageGallery images={safeGallery} title="Moments from our camps" speed={40} />
      </div> */}

      {/* GALLERY */}
<section
  id="gallery"
  className="relative overflow-hidden px-5 lg:px-10 py-20"
  style={{
    background: "linear-gradient(180deg, #F4F5EC 0%, #ffffff 100%)",
  }}
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-10 flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#5B6641]">
          Camp Gallery
        </p>

        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#3F4723]">
          Moments from our camps
        </h2>

        <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-700">
          A closer look at our health camp activities, awareness desks, and
          patient engagement moments.
        </p>
      </div>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {safeGallery.map((img, index) => (
        <div
          key={img.src}
          className={`group relative overflow-hidden rounded-3xl border border-[#E6EAD2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
            index === 0 || index === 5 ? "lg:col-span-2 lg:row-span-2" : ""
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
              index === 0 || index === 5
                ? "h-[320px] sm:h-[420px]"
                : "h-[220px]"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-5 lg:px-10 pb-14">
        <div className="rounded-[2.5rem] overflow-hidden text-white" style={{ background: OLIVE }}>
          <div className="relative px-6 sm:px-10 py-10">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_35%),radial-gradient(circle_at_80%_30%,#ffffff_0,transparent_30%),radial-gradient(circle_at_50%_80%,#ffffff_0,transparent_35%)]" />

            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl sm:text-3xl font-extrabold">Want details about the next camp?</h2>
                <p className="mt-3 text-white/90 leading-relaxed max-w-2xl">
                  WhatsApp us and we’ll share date, location, timings, and desk-wise details.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+916364928680"
                    className="inline-flex items-center justify-center rounded-2xl bg-white text-[#5B6641] px-5 py-3 font-extrabold hover:opacity-95 transition"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:admin@vaayuchest.com"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-5 py-3 font-extrabold hover:bg-white/15 transition"
                  >
                    Email Us
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-white text-gray-900 p-6 shadow-xl">
                  <p className="text-xs uppercase tracking-wider text-gray-500">WhatsApp Message (copy)</p>
                  <div className="mt-3 rounded-2xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-800">
                    Hi Vaayu Team, I would like details about the upcoming Health Camp (Lung Capacity / Sleep / Rehab /
                    Allergy desk). Please share date, location and timings.
                  </div>

                  <a
                    href="https://wa.me/916364928680?text=Hi%20Vaayu%20Team%2C%20I%20would%20like%20details%20about%20the%20upcoming%20Health%20Camp%20(Lung%20Capacity%20%2F%20Sleep%20%2F%20Rehab%20%2F%20Allergy%20desk).%20Please%20share%20date%2C%20location%20and%20timings."
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#6A734F] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95 transition"
                  >
                    WhatsApp Enquiry
                  </a>

                  <div className="mt-3 text-xs text-gray-500">You can edit the message after WhatsApp opens.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Camp;
