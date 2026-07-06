// ✅ FILE 1: src/pages/DrRavindraMehtaTOI.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Replace these with your real assets
import toiClip from "../assets/img/ravi.jpeg"; // scanned TOI clipping image
import drRaviPhoto from "../assets/img/ravi-doctor.jpg"; // doctor portrait (right side)

// Brand palette
const OLIVE = "#5B6641";
const OLIVE_DARK = "#6A734F";
const OLIVE_SOFT = "#78866B";

// ✅ ADD: Eka Care booking URL (replace with your exact Eka Care link)
const EKA_CARE_BOOKING_URL = "https://www.eka.care/doctor/ravindra-mehta-pulmonologist-bengaluru?cid=64f5cb188d530b001eecbee9&utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"; // <-- paste Vaayu/Dr Ravindra booking link here

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const softScale = {
  hidden: { opacity: 0, scale: 0.985 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const DrRavindraMehtaTOI = () => {
  // ✅ Disappear / reappear title effect
  const titlePhrases = useMemo(
    () => [
      "Dr. Ravindra Mehta",
      "Senior Consultant • Vaayu",
      "Quoted in Times of India",
      "Bengaluru Air Quality Crisis",
    ],
    []
  );

  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTitleIdx((i) => (i + 1) % titlePhrases.length);
    }, 2200);
    return () => clearInterval(t);
  }, [titlePhrases.length]);

  const pageUrl = "https://vaayuchest.com/media/dr-ravindra-mehta-times-of-india";

  // ✅ helper to open Eka Care safely
  const openEkaCare = () => {
    window.open(EKA_CARE_BOOKING_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#F4F5EC] text-[#3f472e] min-h-screen">
      <Helmet>
        <title>Dr. Ravindra Mehta quoted in Times of India | Vaayu Chest & Sleep Specialists</title>
        <meta
          name="description"
          content="Dr. Ravindra Mehta, Senior Consultant at Vaayu Chest & Sleep Clinic, was quoted in The Times of India on Bengaluru’s air quality crisis and rising respiratory burden."
        />
        <meta
          name="keywords"
          content="Dr Ravindra Mehta, Dr Ravindra Mehta Times of India, Ravindra Mehta Vaayu, pulmonologist Bengaluru, lung specialist Bengaluru, Vaayu Chest and Sleep"
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content="Dr. Ravindra Mehta quoted in Times of India | Vaayu" />
        <meta
          property="og:description"
          content="Media coverage: Dr. Ravindra Mehta discusses Bengaluru air pollution and respiratory burden in The Times of India."
        />
        <meta property="og:image" content={toiClip} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Ravindra Mehta quoted in Times of India | Vaayu" />
        <meta
          name="twitter:description"
          content="Dr. Ravindra Mehta featured in The Times of India on Bengaluru’s air quality crisis."
        />
        <meta name="twitter:image" content={toiClip} />

        {/* ✅ Schema: Person + Article */}
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Vaayu Chest & Sleep Specialists",
                  "url": "https://vaayuchest.com",
                },
                {
                  "@type": "Person",
                  "name": "Dr. Ravindra Mehta",
                  "jobTitle": "Senior Consultant",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Vaayu Chest & Sleep Specialists",
                    "url": "https://vaayuchest.com",
                  },
                  "url": pageUrl,
                },
                {
                  "@type": "Article",
                  "headline":
                    "Dr. Ravindra Mehta quoted in Times of India on Bengaluru’s Air Quality Crisis",
                  "author": { "@type": "Person", "name": "Dr. Ravindra Mehta" },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Vaayu Chest & Sleep Specialists",
                    "url": "https://vaayuchest.com",
                  },
                  "image": [toiClip],
                  "mainEntityOfPage": pageUrl,
                },
              ],
            },
            null,
            0
          )}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40"
            style={{ background: OLIVE_SOFT }}
          />
          <div
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25"
            style={{ background: OLIVE }}
          />
          <div className="absolute inset-0 opacity-[0.5] bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.95)_0,transparent_40%),radial-gradient(circle_at_80%_35%,rgba(255,255,255,0.85)_0,transparent_38%),radial-gradient(circle_at_55%_85%,rgba(255,255,255,0.7)_0,transparent_42%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-22 pb-10">
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#5B6641]/20 bg-white/70 backdrop-blur px-4 py-2 text-sm font-extrabold text-[#5B6641] hover:bg-white transition"
            >
              ← Back to Blogs
            </Link>

            <button
              type="button"
              onClick={() => window.open(toiClip, "_blank", "noopener,noreferrer")}
              className="inline-flex items-center justify-center rounded-2xl bg-[#5B6641] px-4 py-2 text-sm font-extrabold text-white hover:opacity-95 transition"
            >
              Open TOI Clipping
            </button>
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Title + animated phrase */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="lg:col-span-7">
              <p className="text-xs uppercase tracking-wider text-[#6A734F]">Media Coverage</p>

              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#3f472e]">
                “Dr. Ravindra Mehta quoted in Times of India on{" "}
                <span className="text-[#5B6641]">Bengaluru’s Air Quality Crisis</span>”
              </h1>

              {/* Disappear / reappear effect */}
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-[#6A734F]">Highlighted as</p>
                <div className="mt-2 h-10 sm:h-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={titleIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex items-center rounded-2xl bg-white/80 backdrop-blur border border-[#5B6641]/15 px-4 py-2"
                    >
                      <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ background: OLIVE }} />
                      <span className="text-sm sm:text-base font-extrabold text-[#3f472e]">
                        {titlePhrases[titleIdx]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <p className="mt-6 text-base sm:text-lg text-[#3f472e]/90 leading-relaxed max-w-2xl">
                Dr. Ravindra Mehta, Senior Consultant at Vaayu Chest & Sleep Clinic, was featured in{" "}
                <span className="font-semibold">The Times of India</span> discussing how rising air pollution is
                increasing respiratory burden in Bengaluru.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                {/* ✅ UPDATED: Book consultation now opens Eka Care */}
                <button
                  type="button"
                  onClick={openEkaCare}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#5B6641] px-6 py-3 text-sm font-extrabold text-white hover:opacity-95 transition"
                >
                Book a Consultation on Eka Care
                </button>

                <button
                  type="button"
                  onClick={() => document.getElementById("article")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-[#5B6641]/25 bg-white/50 px-6 py-3 text-sm font-extrabold text-[#5B6641] hover:bg-white transition"
                >
                  View Article Below ↓
                </button>
              </div>

              {/* SEO-friendly visible keywords */}
              <p className="mt-5 text-xs text-[#6A734F]">
                Dr Ravindra Mehta Vaayu • Dr Ravindra Mehta Times of India • Pulmonologist Bengaluru • Lung specialist Bengaluru
              </p>
            </motion.div>

            {/* Right: Doctor image */}
            <motion.div variants={softScale} initial="hidden" animate="show" className="lg:col-span-5">
              <div className="group relative rounded-[2.25rem] overflow-hidden border border-[#5B6641]/15 bg-white shadow-2xl">
                <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div
                    className="h-full w-full blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(91,102,65,0.25), transparent 45%), radial-gradient(circle at 70% 70%, rgba(120,134,107,0.20), transparent 50%)",
                    }}
                  />
                </div>

                <div className="relative aspect-[4/5] bg-[#eef1e8] overflow-hidden">
                  <img
                    src={drRaviPhoto}
                    alt="Dr. Ravindra Mehta - Senior Consultant at Vaayu Chest & Sleep Specialists"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-2xl bg-white/85 backdrop-blur px-4 py-3">
                      <p className="text-xs uppercase tracking-wider text-[#6A734F]">Senior Consultant</p>
                      <p className="mt-1 text-sm font-extrabold text-[#3f472e]">Dr. Ravindra Mehta</p>
                      <p className="mt-1 text-xs text-[#3f472e]/80">Vaayu Chest & Sleep Specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT HIM */}
      <section id="about" className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid lg:grid-cols-12 gap-10 items-stretch"
        >
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-wider text-[#6A734F]">About Dr. Ravindra Mehta</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#3f472e]">
              Trusted voice in respiratory care
            </h2>
            <p className="mt-3 text-[#3f472e]/90 leading-relaxed">
              Dr. Ravindra Mehta is a Senior Consultant at Vaayu Chest & Sleep Specialists, known for
              evidence-based clinical guidance and patient-first care. This Times of India mention reinforces
              his credibility as a leading expert addressing Bengaluru’s air pollution and respiratory burden.
            </p>

            <div className="mt-6 rounded-[2rem] bg-white border border-[#5B6641]/15 shadow-lg p-6">
              <p className="text-sm font-extrabold text-[#5B6641]">Why this matters</p>
              <ul className="mt-3 space-y-2 text-sm text-[#3f472e]/90">
                <li>• Public-facing credibility through reputed media coverage</li>
                <li>• Reinforces Vaayu’s authority in lung & sleep care</li>
                <li>• Encourages early action for pollution-related symptoms</li>
              </ul>
            </div>

            {/* ✅ Optional extra CTA here too */}
            <button
              type="button"
              onClick={openEkaCare}
              className="mt-6 w-full inline-flex items-center justify-center rounded-2xl bg-[#6A734F] px-6 py-3 text-sm font-extrabold text-white hover:opacity-95 transition"
            >
              Book Consultation on Eka Care
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Evidence-based guidance",
                  desc: "Clinical decision-making backed by reliable evaluation and clear next steps.",
                },
                {
                  title: "Pollution & respiratory burden",
                  desc: "Focus on how AQI and particulate exposure increase lung symptoms in Bengaluru.",
                },
                {
                  title: "Patient-first communication",
                  desc: "Simplifies complex respiratory topics for families to act early.",
                },
                {
                  title: "Trusted at Vaayu",
                  desc: "Senior Consultant at Vaayu Chest & Sleep Specialists.",
                },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="rounded-[2rem] bg-white border border-[#5B6641]/15 shadow-lg p-6"
                >
                  <div className="text-xs uppercase tracking-wider text-[#6A734F]">Highlight</div>
                  <div className="mt-2 text-lg font-extrabold text-[#3f472e]">{c.title}</div>
                  <p className="mt-2 text-sm text-[#3f472e]/90 leading-relaxed">{c.desc}</p>
                  <div className="mt-4 h-[2px] w-16 rounded-full bg-[#5B6641]/60" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ARTICLE */}
      <section id="article" className="relative bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-wider text-[#6A734F]">Times of India</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#3f472e]">
              Scanned Article Clipping
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3f472e]/90 max-w-3xl mx-auto">
              “Dr. Ravindra Mehta quoted in Times of India on Bengaluru’s Air Quality Crisis”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-10"
          >
            <div className="group rounded-[2.25rem] overflow-hidden border border-[#5B6641]/15 bg-[#F4F5EC] shadow-2xl">
              <div className="relative">
                <img
                  src={toiClip}
                  alt="Times of India article clipping featuring Dr. Ravindra Mehta"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => window.open(toiClip, "_blank", "noopener,noreferrer")}
                    className="inline-flex items-center justify-center rounded-2xl bg-white text-[#5B6641] px-5 py-3 text-sm font-extrabold hover:opacity-95 transition"
                  >
                    Open Full Image
                  </button>

                  {/* ✅ UPDATED: Book now opens Eka Care */}
                  <button
                    type="button"
                    onClick={openEkaCare}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#5B6641] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95 transition"
                  >
                    Book on Eka Care
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white">
                <p className="text-sm text-[#3f472e]/90 leading-relaxed">
                  This coverage highlights Dr. Ravindra Mehta’s role as a trusted expert addressing Bengaluru’s air
                  pollution concerns and its impact on respiratory health.
                </p>
                <p className="mt-2 text-xs text-[#6A734F]">
                  Dr Ravindra Mehta Times of India • Dr Ravindra Mehta Vaayu • Bengaluru air quality • Respiratory burden
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-14">
        <div
          className="rounded-[2.5rem] overflow-hidden text-white shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${OLIVE} 0%, ${OLIVE_DARK} 100%)` }}
        >
          <div className="relative px-6 sm:px-10 py-10">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_35%),radial-gradient(circle_at_80%_30%,#ffffff_0,transparent_30%),radial-gradient(circle_at_50%_80%,#ffffff_0,transparent_35%)]" />

            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold">
                  Want to consult Dr. Ravindra Mehta at Vaayu?
                </h3>
                <p className="mt-3 text-white/90 leading-relaxed">
                  If you’re experiencing pollution-related breathlessness, cough, wheeze, or sleep-related breathing
                  issues, Vaayu can guide you with the right evaluation and next steps.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                {/* ✅ UPDATED: Book consultation now opens Eka Care */}
                <button
                  type="button"
                  onClick={openEkaCare}
                  className="inline-flex items-center justify-center rounded-2xl bg-white text-[#5B6641] px-6 py-3 font-extrabold hover:opacity-95 transition"
                >
                  Book on Eka Care
                </button>

                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3 font-extrabold hover:bg-white/15 transition"
                >
                  Explore Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrRavindraMehtaTOI;
