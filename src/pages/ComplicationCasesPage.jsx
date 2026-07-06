import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Phone, MessageSquare } from "lucide-react";

import heroBg from "../assets/img/c249f03b-b351-48a2-9718-4167462d8dc2.jpg";
import vaayuPromo from "../assets/img/vaayu-clinic-promo.jpg";
import sampleImg from "../assets/img/02a35cb1-9ef8-46ad-9719-1ff84e5131a1.jpg";


// ---- Phone config (JS) ----
const PHONE_E164 = "916364928680";
function formatIN(e164) {
  let d = String(e164).replace(/\D/g, "");
  if (d.startsWith("91")) d = d.slice(2);
  if (d.length === 10) return `+91 ${d.slice(0, 5)} ${d.slice(5)}`;
  return `+${e164}`;
}
const PRETTY_PHONE = formatIN(PHONE_E164);

// ---------- Vite globs ----------
const airwayBleedGlob = import.meta.glob(
  "../assets/cases/airway_bleed/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const pneumoGlob = import.meta.glob(
  "../assets/cases/pneumothorax/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const stentGlob = import.meta.glob(
  "../assets/cases/stent_migration/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const foreignBodyGlob = import.meta.glob(
  "../assets/cases/foreign_body/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const EBUS = import.meta.glob(
  "../assets/cases/E_BUS/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const Pleuroscopy = import.meta.glob(
  "../assets/cases/Pleuroscopy/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const RadialEBUS = import.meta.glob(
  "../assets/cases/RadialEBUS/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const Stentstitch = import.meta.glob(
  "../assets/cases/Stentstitch/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const STents = import.meta.glob(
  "../assets/cases/STents/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const TBB = import.meta.glob(
  "../assets/cases/TBB/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const KEF = import.meta.glob(
  "../assets/cases/KEF/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
// note: folder name has a space — keep it exactly as your filesystem path
const Trachealstenosis = import.meta.glob(
  "../assets/cases/Tracheal stenosis/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const Tumordebulking = import.meta.glob(
  "../assets/cases/Tumor debulking/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const Vocalcords = import.meta.glob(
  "../assets/cases/Vocalcords/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const cTBNA = import.meta.glob(
  "../assets/cases/cTBNA/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);
const EBBBleed = import.meta.glob(
  "../assets/cases/EBBBleed/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

function thumbsFrom(globObj) {
  return Object.entries(globObj)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url)
    .slice(0, 4);
}

// ---------------- Release gating (IST-aware) ----------------
const IST = "Asia/Kolkata";
const nowIST = () => new Date(new Date().toLocaleString("en-US", { timeZone: IST }));
function isReleased(releaseAt) {
  if (!releaseAt) return false;
  return nowIST().getTime() >= new Date(releaseAt).getTime();
}
function getVisibility(v) {
  // "public" only when a publicUrl exists AND release time has passed
  if (v.publicUrl && isReleased(v.releaseAt)) return "public";
  // if release time has passed but you haven't made it public yet
  if (isReleased(v.releaseAt)) return "preview";
  return "locked";
}
function visibilityLabel(vis) {
  if (vis === "public") return "Now Streaming";
  if (vis === "preview") return "Preview (publishing soon)";
  return "Coming Soon";
}

// --------------- Weekly manifest (edit this only) ---------------

const videos = [
// add (or update existing) entry for last week
  // add remaining items the same way…

  
  {
    id: "wk11-kef",
    title: "Stent migration",
    releaseAt: "2025-12-24T12:30:00+05:30",
    thumbnails: thumbsFrom(KEF),
    tags: ["StentAndStitch", "CombinedTechnique"],
    driveFolderUrl:
      "https://drive.google.com/drive/folders/17mz8tpTfoa3RIjUkzwzSWKJkS7KYOgj1?usp=sharing",
  },
  
  {
    id: "wk11-kef",
    title: "Y SEMS for carinal TEF",
    releaseAt: "2025-12-31T12:30:00+05:30",
    thumbnails: thumbsFrom(KEF),
    tags: ["StentAndStitch", "CombinedTechnique"],
    driveFolderUrl:
      "https://drive.google.com/drive/folders/17mz8tpTfoa3RIjUkzwzSWKJkS7KYOgj1?usp=sharing",
  },

];

// ---------------- Animations ----------------
const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const fadeUp = fadeIn;

export default function ComplicationCasesPage() {
  const [showCall, setShowCall] = useState(false);
  const callWrapRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!callWrapRef.current) return;
      if (!callWrapRef.current.contains(e.target)) setShowCall(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
{/* Hero */}
<section className="relative min-h-[90vh]">
  <img
    src={heroBg}
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-black/20" />

  {/* Centered container */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-40 flex items-center justify-center text-center">
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="relative z-10 rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-8 md:p-12 max-w-3xl"
    >
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#556B2F]">
        Procedural Training:  Real Interventional Pulmonology Cases

      </h1>
      <p className="mt-3 text-neutral-600">
        Growing collection of real world procedural videos designed for pulmonologists.
        Each release highlights complex scenarios, step-by-step management, and key 
        decision-making insights. New cases, expert talks on various procedural aspects are published weekly to support continuous learning.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
          Educational Use
        </span>
        <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
          Patient Privacy Respected
        </span>
        <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
          Case-Based Learning
        </span>
      </div>
    </motion.div>
  </div>
</section>


{/* Intro Content Block */}
{/* Intro Content Block — split hero card (like screenshot) */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
  <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-sm">
    {/* Right: large image */}
    <div className="relative h-[360px] sm:h-[420px] lg:h-[460px]">
     <img
  src={sampleImg}
  alt="Learner-focused procedural training"
  className="absolute inset-0 h-full w-full object-cover"
/>


      {/* Left: colored text card */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-6 lg:left-8">
<div className="w-[88vw] max-w-[520px] sm:w-[520px] lg:w-[560px] rounded-2xl bg-[#000000]/50 p-6 sm:p-7 lg:p-8 shadow-lg backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-lime-200">
            Get Skilled. Get Confident.
          </h2>

          {/* Author / role */}
          <div className="mt-4 flex items-center gap-3 text-teal-50/90">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white">
              DR
            </span>
            <div className="text-sm">
              <p className="font-medium">by Vaayu Chest & Sleep Specialists</p>
              <p className="text-teal-100/80">admin@vaayuchest.com
</p>
            </div>
          </div>

          {/* Copy */}
          <p className="mt-4 text-teal-50/95 text-sm sm:text-base">
            Real cases with step-by-step management and
            decision-making insights — built for medical learners.
          </p>

          {/* CTA pill */}
          <div className="mt-5">
            <a
              href="#latest-video" /* point this to your featured video section id */
              className="inline-flex items-center justify-between rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-900 shadow-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <span>Watch Video</span>
              <span className="ml-3 inline-block h-5 w-5 rounded-full bg-[#556B2F]" />
            </a>
          </div>
        </div>
      </div>

      {/* Optional: small floating action at bottom-right (like the yellow fab in screenshot) */}
      
      <section id="upcoming-videos" className="mx-auto max-w-7xl ..."> … </section>
<button
        type="button"
        title="Scroll"
        onClick={() => {
          const el = document.querySelector("#upcoming-videos");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#556B2F] text-white shadow-lg ring-1 ring-black/10 hover:bg-[#6B8E23]"
      >
        ↓
      </button>
    </div>
  </div>
</section>

{/* Featured YouTube Video   https://youtu.be/cKlT1NbrpDk?si=FyMslF_PO0njxDN_  */}

<section
  id="latest-video"
  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 scroll-mt-24"
>
  <div className="mx-auto w-full max-w-xl sm:max-w-2xl md:max-w-3xl">
    <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
      <div className="aspect-video w-full bg-black relative">

        <a
  href="https://youtu.be/cKlT1NbrpDk?si=FyMslF_PO0njxDN_"
  target="_blank"
  rel="noreferrer noopener"
  className="group block h-full w-full"
  title="Play on YouTube"
>
  <img
    src="https://img.youtube.com/vi/cKlT1NbrpDk/hqdefault.jpg"
    alt="Featured Video"
className="absolute inset-0 h-full w-full object-contain bg-black transition-transform duration-300 group-hover:scale-[1.02]"    onError={(e) => {
      e.currentTarget.src = "https://img.youtube.com/vi/p2kF9Iur2nc/0.jpg";
    }}
  />
  

  <div className="absolute inset-0 flex items-center justify-center">
    <span className="inline-flex items-center justify-center rounded-full bg-white/90 p-3 shadow-lg ring-1 ring-black/10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  </div>
</a>

      </div>

      <div className="px-4 py-4 sm:px-6 sm:py-5">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
Tracheal Stenosis & Stridor Management in COVID Times | Advanced Bronchoscopy | Vaayu Chest

        </h3>
        <p className="mt-2 text-sm sm:text-base text-neutral-600">

Complex Tracheal Stenosis: Combined Airway Recanalization & Anti-Migration Strategy
In this clinical case study by Vaayu Chest & Sleep Specialists, we present the management of a complex case of Post-Intubation Tracheal Stenosis (PITS) presenting with severe airway compromise.

This video walks medical professionals through the step-by-step interventional bronchoscopy procedure used to successfully recanalize the airway, deploy a silicone stent, and secure it against migration.
 <br /><br /> 


▶️ Watch the full procedure on YouTube.</p>
      </div>
    </div>
  </div>
</section>

{/* Weekly Releases (aligned thumbnails) */}
<section 
  id="recent-releases"
  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
>
  <h2 className="text-3xl font-extrabold tracking-tight text-[#61724e] text-center">
    Weekly Releases
  </h2>
  <p className="mt-3 text-neutral-600 text-center max-w-2xl mx-auto">
    Explore last week’s and recent procedural videos — featuring real-world
    cases, techniques, and complication management insights.
  </p>



  {/* Grid */}
  <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {[ 

       {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Tracheal Stenosis & Stridor Management in COVID Times | Advanced Bronchoscopy | Vaayu Chest", // change title if you want
  date: "27 May 2026",
  time: "12:30 PM IST",
  releaseAt: "2026-04-21T12:30:00+05:30",
  url: "https://youtu.be/cKlT1NbrpDk?si=hMWTmSqkIG4jlxi6",
  thumb: "https://img.youtube.com/vi/cKlT1NbrpDk/hqdefault.jpg",
},


       {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Emergency Tracheal Stenosis Management with Airway Stenting | Life-Saving Bronchoscopy Case", // change title if you want
  date: "19 May 2026",
  time: "12:30 PM IST",
  releaseAt: "2026-04-21T12:30:00+05:30",
  url: "https://youtu.be/Wn7pLmIhreU?si=7-cvZ10CXlAOSwqc",
  thumb: "https://img.youtube.com/vi/Wn7pLmIhreU/hqdefault.jpg",
},


      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Therapeutic Bronchoscopy for Tracheal Stenosis | Electrocautery & Balloon Bronchoplasty Case Study", // change title if you want
  date: "12 May 2026",
  time: "12:30 PM IST",
  releaseAt: "2026-04-21T12:30:00+05:30",
  url: "https://youtu.be/p2kF9Iur2nc?si=kF_AhQ-efRW8sHFC",
  thumb: "https://img.youtube.com/vi/p2kF9Iur2nc/hqdefault.jpg",
},


{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "A Case of Post-Tubercular Bronchial Stenosis | Complex Case, Unique Solution", // change title if you want
  date: "06 May 2026",
  time: "12:30 PM IST",
  releaseAt: "2026-04-21T12:30:00+05:30",
  url: "https://youtu.be/mEDk4cwrnKU?si=6GCVwxIF_h4bGQc9",
  thumb: "https://img.youtube.com/vi/mEDk4cwrnKU/hqdefault.jpg",
},


{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Massive Hemoptysis Treatment: Bronchial Blocker Case Study | Interventional Pulmonology", // change title if you want
  date: "29 April 2026",
  time: "12:30 PM IST",
  releaseAt: "2026-04-21T12:30:00+05:30",
  url: "https://youtu.be/rnCY7l8oUk0?si=DyjYRn60O-gJkqvB",
  thumb: "https://img.youtube.com/vi/rnCY7l8oUk0/hqdefault.jpg",
},

{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Prolonged Pneumothorax Management | CESB Sealing of Bronchopleural Fistula in High-Risk TB Patient", // change title if you want
  date: "21 April 2026",
  time: "12:30 PM IST",
  releaseAt: "2026-04-21T12:30:00+05:30",
  url: "https://youtu.be/Qyr9PxPGzn4?si=1w1sncvCVL1Eth-d",
  thumb: "https://img.youtube.com/vi/Qyr9PxPGzn4/hqdefault.jpg",
},

{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "EBUS-Guided Forceps Biopsy for TB Lymphadenitis | When TBNA Fails | Clinical Case Explained", // change title if you want
  date: "15 April 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/V-32ZQXw9RM?si=q6imOrlnDnOjhmwV",
  thumb: "https://img.youtube.com/vi/V-32ZQXw9RM/hqdefault.jpg",
},

{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Tracheal Stenosis Management | Hitch-Stitch Technique | Dr Ravindra Mehta", // change title if you want
  date: "07 April 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/1R5VhQs1a1I?si=6MGvo9JghgoROCLJ",
  thumb: "https://img.youtube.com/vi/1R5VhQs1a1I/hqdefault.jpg",
},



{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "High-Risk Lung Biopsy Made Safe | Guide Sheath Transbronchial Biopsy Explained", // change title if you want
  date: "01 April 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/ZtBLl46JnqM?si=TSz713nFAQL2ncku",
  thumb: "https://img.youtube.com/vi/ZtBLl46JnqM/hqdefault.jpg",
},

{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Areca Nut Removed from Lung | Endoscopic Bronchoscopy for RML Stenosis Case", // change title if you want
  date: "25 March 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/x7nQI8N3j1A?si=rJDJxJvKZPXdwG3i",
  thumb: "https://img.youtube.com/vi/x7nQI8N3j1A/hqdefault.jpg",
},



{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Areca Nut Removed from Lung | Endoscopic Bronchoscopy for RML Stenosis Case", // change title if you want
  date: "18 March 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/7LNB_8NcyPM?si=3g3HYOLCu8hMfYLg",
  thumb: "https://img.youtube.com/vi/7LNB_8NcyPM/hqdefault.jpg",
},


      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "How Did a Tooth End Up in the Lung? | Real Case Study | The Tooth Case Explained", // change title if you want
  date: "11 March 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/kudt3L1mf0I?si=lWLAeT85UcogA3dl",
  thumb: "https://img.youtube.com/vi/kudt3L1mf0I/hqdefault.jpg",
},

      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Foreign Body Retrieval Using Zero-Tip Basket | Sudden Onset Cough Case Study | Vaayu Chest & Sleep ", // change title if you want
  date: "04 March 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/8DgTwWHGLds?si=y0N76NSqENrYMj46",
  thumb: "https://img.youtube.com/vi/8DgTwWHGLds/hqdefault.jpg",
},
{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Airway Emergency: Esophageal Stent Erosion into Trachea | Bronchoscopic Rescue ", // change title if you want
  date: "25 Feb 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/ZOfzDCKAqME?si=AI77OWQ5GCkO7Ic_",
  thumb: "https://img.youtube.com/vi/ZOfzDCKAqME/hqdefault.jpg",
},


{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Malignant TEF Management: Bronchoscopic Stitch + Covered SEMS | Complete Closure Achieved ", // change title if you want
  date: "18 Feb 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/t_89vUG1qOE?si=XJmZup1O134MibX5",
  thumb: "https://img.youtube.com/vi/t_89vUG1qOE/hqdefault.jpg",
},
{
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Esophageal stent -> Airway Collapse ", // change title if you want
  date: "11 Feb 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/tGcbTTF4A5s?si=1wuGpuAeelw6iKrR",
  thumb: "https://img.youtube.com/vi/tGcbTTF4A5s/hqdefault.jpg",
},

      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Carinal Tracheo-esophaheal fistula (TEF) : Treated with SEMS Y--stent", // change title if you want
  date: "04 Feb 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/xPSobd5uM8s?si=UwD-GManavWYR0Tc",
  thumb: "https://img.youtube.com/vi/xPSobd5uM8s/hqdefault.jpg",
},
      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Post TBB Bleeding | Transbronchial Biopsy Complication | Bronchoscopy Case Discussion", // change title if you want
  date: "28 Jan 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/RDNO2MsuBcE?si=UwD-GManavWYR0Tc",
  thumb: "https://img.youtube.com/vi/RDNO2MsuBcE/hqdefault.jpg",
},

      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Image-Guided Bronchoscopy (IGB) | Transbronchial biopsy", // change title if you want
  date: "22 Jan 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/QRUsHMTMS1g?si=QPP04mSk0Vq0evje",
  thumb: "https://img.youtube.com/vi/QRUsHMTMS1g/hqdefault.jpg",
},

        {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Image-Guided Bronchoscopy (IGB) | Transbronchial biopsy", // change title if you want
  date: "14 Jan 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/aXdwBJmKyws?si=Pqb0nv7QiAOWy1uv",
  thumb: "https://img.youtube.com/vi/aXdwBJmKyws/hqdefault.jpg",
},
        {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Fluoroscopy in TBB", // change title if you want
  date: "07 Jan 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/TqYOeXztli0?si=FU3PuI-iM1Sqrju4",
  thumb: "https://img.youtube.com/vi/TqYOeXztli0/hqdefault.jpg",
},

      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "Carinal tracheo - esophageal fistula (TEF) : Treated with SEMS Y-stent", // change title if you want
  date: "01 Jan 2026",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/XMd5dW6LIck?si=4O532WPWh8S73JXH",
  thumb: "https://img.youtube.com/vi/XMd5dW6LIck/hqdefault.jpg",
},

      {
  id: "wk12-featured-kqgmagwiy9u", // unique
  title: "STENT MIGRATION", // change title if you want
  date: "24 Dec 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-12-24T12:30:00+05:30",
  url: "https://youtu.be/KqgMagWIY9U?si=8NNT3eULr65JAzNi",
  thumb: "https://img.youtube.com/vi/KqgMagWIY9U/hqdefault.jpg",
},


 {
  id: "wk08-hitch-stitch",
  title: "  TB stenosis - Hitch stitch",
  date: "17 Dec 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-11-12T12:30:00+05:30",
  url: "https://youtu.be/MzO5EUHR7jI?si=o5P6XB8Vht6eIJv8",
  thumb: "https://img.youtube.com/vi/MzO5EUHR7jI/hqdefault.jpg",
},
 {
  id: "wk06-ebus-ln-biopsy",
  title: " Stenting in MAO 2022",
  date: "10 Dec 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-11-12T12:30:00+05:30",
  url: "https://youtu.be/kmu220xr1NY",
  thumb: "https://img.youtube.com/vi/kmu220xr1NY/hqdefault.jpg",
},
 {
  id: "wk07-stenting-mao-2022",
  title: " Mid tracheal stent",
  date: "03 Dec 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-11-12T12:30:00+05:30",
  url: "https://youtu.be/wuxjhlZJh6Q",
  thumb: "https://img.youtube.com/vi/wuxjhlZJh6Q/hqdefault.jpg",
},


      {
  id: "wk06-ebus-ln-biopsyAS",
  title: " EBUS - Trans PA",
  date: "26 Nov 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-11-12T12:30:00+05:30",
  url: "https://youtu.be/5hnRzGJyvyc",
  thumb: "https://img.youtube.com/vi/5hnRzGJyvyc/hqdefault.jpg",
},



      {
  id: "wk06-ebus-ln-biopsyAD",
  title: " Complications Talk by Dr. Karan Madan",
  date: "19 Nov 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-11-12T12:30:00+05:30",
  url: "https://youtu.be/OAWwo_qXJtQ",
  thumb: "https://img.youtube.com/vi/OAWwo_qXJtQ/hqdefault.jpg",
},


      {
  id: "wk06-ebus-ln-biopsyAC",
  title: " EBUS – 4L Lymph Node Sampling",
  date: "12 Nov 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-11-12T12:30:00+05:30",
  url: "https://youtu.be/a9thefFCNqI",
  thumb: "https://img.youtube.com/vi/a9thefFCNqI/hqdefault.jpg",
},


  {
  id: "wk05-ebus-ln-biopsy",
  title: "EBUS LN Forceps Biopsy",
  date: "05 Nov 2025",
  time: "12:30 PM IST",
  releaseAt: "2025-11-05T12:30:00+05:30",
  url: "https://youtu.be/eP9QeLNaIdA",
  thumb: "https://img.youtube.com/vi/eP9QeLNaIdA/hqdefault.jpg",
},
{
    id: "wk04-tracheal-tumor-therapy",
    title: "Complications Talk – Multimodality Hot Therapy for Large Tracheal Tumor",
    date: "29 Oct 2025",
    time: "12:30 PM IST",
    releaseAt: "2025-10-29T12:30:00+05:30",
    url: "https://youtu.be/gMoh1FveMzY",
    thumb: "https://img.youtube.com/vi/gMoh1FveMzY/hqdefault.jpg",
  },
    

{
    id: "wk01-cao-carinal",
    title: "CAO – Carinal Tumor",
    date: "01 Oct 2025",
    time: "12:30 PM IST",
    releaseAt: "2025-10-01T12:30:00+05:30",
    url: "https://www.youtube.com/watch?v=3BgnHI1YkBQ",
    thumb: "https://img.youtube.com/vi/3BgnHI1YkBQ/hqdefault.jpg",
  },
      {
    id: "wk02-tracheal-tumor",
    title: "CAO talk – Dr. Ravindra Mehta",
    date: "08 Oct 2025",
    time: "12:30 PM IST",
    releaseAt: "2025-10-08T12:30:00+05:30",
    url: "https://youtu.be/tVlsMLvXnw4",
    thumb: "https://img.youtube.com/vi/tVlsMLvXnw4/hqdefault.jpg",
  },
  {
    id: "wk03-stent-migration",
    title: "CAO – Tracheal Tumor",
    date: "15 Oct 2025",
    time: "12:30 PM IST",
    releaseAt: "2025-10-15T12:30:00+05:30",
    url: "https://youtu.be/OPV-LVvGhyo?si=tnYdlovcszDVqvLG",
    thumb: "https://img.youtube.com/vi/OPV-LVvGhyo/hqdefault.jpg",
  },
  {
    id: "wk04-tb-stenosis",
    title: "Complications talk - Dr. Ritesh Agarwal",
    date: "22 Oct 2025",
    time: "12:30 PM IST",
    releaseAt: "2025-10-22T12:30:00+05:30",
    url: "https://youtu.be/MG-UJ7sJviY",
    thumb: "https://img.youtube.com/vi/MG-UJ7sJviY/hqdefault.jpg",
  },


    ]
      .sort(
        (a, b) =>
          new Date(b.releaseAt).getTime() - new Date(a.releaseAt).getTime()
      )
      .map((v) => (
        <motion.div
          key={v.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-1 transition"
        >
          <a
            href={v.url}
            target="_blank"
            rel="noreferrer noopener"
            className="block relative"
          >
            {/* ✅ Fix: uniform aspect ratio for all preview thumbnails */}
           <div className="relative aspect-video w-full overflow-hidden bg-black">
  <img
    src={v.thumb}
    alt={v.title}
className="absolute inset-0 w-full h-full object-contain bg-black transition-transform duration-300 group-hover:scale-[1.03]"    loading="lazy"
  />

  {/* subtle overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
</div>

            {/* Overlay effects */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="inline-flex items-center justify-center rounded-full bg-white/90 p-3 shadow-md ring-1 ring-black/10">
                <Play className="h-5 w-5 text-[#61724e]" />
              </span>
            </div>
          </a>

          {/* Text & CTA */}
          <div className="p-5">
            <h3 className="mt-1 text-lg font-semibold text-neutral-900 group-hover:text-[#6e5b46] transition">
              {v.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Released: {v.date}, {v.time}
            </p>
            <a
              href={v.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#61724e] px-4 py-2 text-white text-sm shadow hover:bg-[#6e5b46] transition"
            >
              <Play className="h-4 w-4" />
              Watch
            </a>
          </div>
        </motion.div>
      ))}
  </div>
</section>




     

      {/* Roadmap: Upcoming & Recent Releases 
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-neutral-900">Release Roadmap</h2>
          <p className="mt-2 text-neutral-600 text-sm">
            One new case video every week. “Now Streaming” items are public; “Preview” shows thumbnails without access; “Coming
            Soon” shows schedule.
          </p>

          <ol className="mt-6 space-y-4">
            {videos.map((v) => {
              const vis = getVisibility(v);
              const dateStr = v.releaseAt
                ? new Date(v.releaseAt).toLocaleString("en-IN", { timeZone: IST, dateStyle: "medium", timeStyle: "short" })
                : "TBA";
              return (
                <li key={`roadmap-${v.id}`} className="flex items-start gap-3">
                  <span
                    className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${
                      vis === "public" ? "bg-emerald-600" : vis === "preview" ? "bg-amber-500" : "bg-neutral-300"
                    }`}
                    aria-hidden
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-neutral-900">{v.title}</span>
                      <span className="text-xs text-neutral-500">• {dateStr} IST</span>
                      <span
                        className={`ml-1 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] ring-1 ${
                          vis === "public"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : vis === "preview"
                            ? "bg-amber-50 text-amber-700 ring-amber-200"
                            : "bg-neutral-50 text-neutral-700 ring-neutral-200"
                        }`}
                      >
                        {visibilityLabel(vis)}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">{v.blurb}</p>
                    {vis === "public" && v.publicUrl && (
                      <a
                        href={v.publicUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-1 inline-block text-sm font-medium text-emerald-700 hover:underline"
                      >
                        Watch now →
                      </a>
                    )}
                    {vis === "locked" && <p className="mt-1 text-xs text-neutral-500">Stay tuned — releases weekly.</p>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section> */}

      {/* Footer Note */}
      <footer className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-6 text-sm text-neutral-600">
            <p>
              Disclaimer: These materials are for professional education. All patient identifiers are removed/obscured. Follow
              institutional consent and data protection policies.
            </p>
          </div>
        </div>
      </footer>

      {/* Vaayu Promo Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-50 to-stone-50">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 ring-1 ring-black/5">
              Breathe Better • Sleep Better • Live Better
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Vaayu Chest & Sleep Specialty Center
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-neutral-700">
              Expert outpatient care for asthma, COPD, sleep apnea, allergies, post-infection breathlessness, and more. Our
              specialists combine advanced diagnostics with compassionate treatment to help you avoid unnecessary
              hospitalizations.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-neutral-800 sm:grid-cols-2">
              <li className="rounded-2xl bg-white/80 p-3 ring-1 ring-black/5 shadow-sm">
                Specialty Clinics: Asthma, COPD, Sleep, Allergy, Rehab
              </li>
              <li className="rounded-2xl bg-white/80 p-3 ring-1 ring-black/5 shadow-sm">
                Advanced Tests:  Home X-Ray and other services 
              </li>
              <li className="rounded-2xl bg-white/80 p-3 ring-1 ring-black/5 shadow-sm">Evidence-based care with clear action plans</li>
              <li className="rounded-2xl bg-white/80 p-3 ring-1 ring-black/5 shadow-sm">Same-week appointments • Transparent pricing</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
                className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-white shadow hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
              >
                <Calendar className="h-4 w-4" /> Book an Appointment              </a>
              <div className="relative inline-block" ref={callWrapRef}>
                <button
                  type="button"
                  onClick={() => setShowCall((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-neutral-900 ring-1 ring-black/10 shadow hover:bg-neutral-50"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </button>
                {showCall && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-2 w-64 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black/10 z-20"
                  >
                    <p className="text-xs text-neutral-600">Dial</p>
                    <a
                      href={`tel:${PHONE_E164}`}
                      className="mt-1 block text-lg font-semibold text-neutral-900 hover:underline"
                      onClick={() => setTimeout(() => setShowCall(false), 150)}
                    >
                      {PRETTY_PHONE}
                    </a>
                    <p className="mt-2 text-[11px] leading-4 text-neutral-500">Tap the number to open your phone’s dialer.</p>
                  </motion.div>
                )}
              </div>
              <a
                href="https://wa.me/916364928680"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-900 px-5 py-3 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <MessageSquare className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </motion.div>

      

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
              <img src={vaayuPromo} alt="Vaayu Clinic promotional image" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
