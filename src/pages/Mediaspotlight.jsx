import React from "react";
import { FiPlay, FiArrowRight, FiDownload } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import heroBg from "../assets/img/media/news-hero.jpg";
import img1 from "../assets/img/media/WhatsApp Image 2026-01-21 at 4.13.06 PM.jpeg";
import img3 from "../assets/img/media/media-3.jpg";
import toiImg from "../assets/img/media/toi-jan12-2026-corrected.jpg";
import raviMehtaImg from "../assets/img/DSC00661 (1).JPG";
import toiFirewoodImg from "../assets/img/media/Dr Ravindra Mehta, interventional pulmonologist and founder & director, Vaayu Chest & Sleep Specialists quoted in The Times of India, Pg2.jpeg";
import samyuktaKarnatakaImg from "../assets/img/media/samyukta-karnataka-pg2.jpeg";
import sanjevaniImg from "../assets/img/media/Sanjevani.jpeg";
import apnRoundtableThumb from "../assets/img/media/apn-roundtable.png";
import rehabLaunchPreview from "../assets/img/media/preview.png";
import mediaVideo from "../assets/img/media/6036184_Bill_Dollar_3840x2160.mp4";

import hansIndiaCapture from "../assets/img/media/captures/hans-india-roundtable.jpg";
import pniRoundtableCapture from "../assets/img/media/captures/pni-news-roundtable.jpg";
import indianNewzCapture from "../assets/img/media/captures/indiannewz-critical-patient.jpg";
import pniCriticalCapture from "../assets/img/media/captures/pni-news-critical-patient.jpg";
import southFirstCapture from "../assets/img/media/captures/south-first-breathless.jpg";
import ndtvCapture from "../assets/img/media/captures/ndtv-copd.jpg";
import pniInaugurationCapture from "../assets/img/media/captures/pni-news-inauguration.jpg";
import hinduSurveillanceCapture from "../assets/img/media/captures/the-hindu-traffic-police-surveillance.jpg";


const font =
  "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const mediaItems = [
  {
    id: 17,
    featured: true,
    source: "The Hindu",
    date: "02 May 2026",
    category: "Featured",
    title: "Karnataka Launches Statewide Respiratory Surveillance for Traffic Police",
    excerpt:
      "The Hindu reports on Karnataka's Home Department launching a first-of-its-kind statewide respiratory health surveillance and research programme for traffic police, following VORIC's two-year screening of 3,287 traffic police personnel in Bengaluru — with Vaayu Respiratory Foundation as the technical implementation partner.",
    author: "Afshan Yasmeen",
    link: "https://www.thehindu.com/news/national/karnataka/karnataka-launches-statewide-respiratory-surveillance-for-traffic-police/article70929118.ece",
    pdf: "/media-pdfs/the-hindu-traffic-police-surveillance.pdf",
    image: hinduSurveillanceCapture,
    type: "external",
  },
  {
  id: 16,
  featured: false,
  source: "The Hans India",
  date: "2026",
  category: "Respiratory Health Roundtable",
  title:
    "Vaayu Chest & Sleep Specialty Center Addresses Respiratory Health Crisis at High-Level Health Roundtable",
  excerpt:
    "The Hans India highlights Vaayu’s high-level health roundtable focused on India’s growing respiratory health burden, the importance of early intervention, pulmonary rehabilitation, and integrated long-term lung care.",
  author: "Vaayu Chest & Sleep Specialists",
  link: "https://www.thehansindia.com/karnataka/vaayu-chest-and-sleep-specialty-center-addresses-respiratory-health-crisis-at-high-level-health-roundtable-1053118",
  archiveLink: "https://web.archive.org/web/20260312132046/https://www.thehansindia.com/karnataka/vaayu-chest-and-sleep-specialty-center-addresses-respiratory-health-crisis-at-high-level-health-roundtable-1053118",
  pdf: "/media-pdfs/hans-india-roundtable.pdf",
  image: hansIndiaCapture,
  type: "external",
},
  {
    id: 15,
    featured: false,
    source: "The Times of India",
    date: "31 Mar 2026",
    category: "Expert Insight",
    title: "Planning to use firewood? Doctors say it may be a bad idea",
    excerpt:
      "Dr. Ravindra Mehta of Vaayu Chest & Sleep Specialists was quoted in The Times of India on the health risks of firewood smoke, especially for households with poor ventilation and children.",
    author: "Dr. Ravindra Mehta",
    link: "https://timesofindia.indiatimes.com/city/bengaluru/planning-to-use-firewood-doctors-say-it-may-be-a-bad-idea/articleshow/129909837.cms",
    archiveLink: "https://web.archive.org/web/20260331060410/https://timesofindia.indiatimes.com/city/bengaluru/planning-to-use-firewood-doctors-say-it-may-be-a-bad-idea/articleshow/129909837.cms",
    image: toiFirewoodImg,
    type: "external",
  },
  {
    id: 13,
    featured: false,
    source: "PNI News",
    date: "25 Feb 2026",
    category: "Pulmonary Rehab Program",
    title:
      "Vaayu Chest and Sleep Specialty Center addresses the respiratory health crisis at high level health roundtable",
    excerpt:
      "Coverage of Vaayu’s high-level health roundtable focused on the respiratory health crisis, pulmonary care priorities, and expert-led discussion around lung health in India.",
    author: "Vaayu Chest & Sleep Specialists",
    link: "https://www.pninews.com/vaayu-chest-and-sleep-specialty-center-addresses-the-respiratory-health-crisis-at-high-level-health-roundtable/",
    pdf: "/media-pdfs/pni-news-roundtable.pdf",
    image: pniRoundtableCapture,
    type: "external",
  },
  {
    id: 12,
    featured: false,
    source: "APN News",
    date: "2026",
    category: "Pulmonary Rehab Program",
    title:
      "Vaayu Chest and Sleep Specialty Center addresses the respiratory health crisis at high level health roundtable",
    excerpt:
      "APN News coverage highlighting Vaayu’s roundtable on respiratory health, early detection, pulmonary care pathways, and the need for stronger lung health systems.",
    author: "Vaayu Chest & Sleep Specialists",
    link: "https://www.apnnews.com/vaayu-chest-and-sleep-specialty-center-addresses-the-respiratory-health-crisis-at-high-level-health-roundtable/",
    image: apnRoundtableThumb,
    type: "external",
  },
  {
    id: 14,
    featured: false,
    source: "Vaayu Update",
    date: "2026",
    category: "Rehab Launch 2.0",
    title: "Pulmonary & Cardiac Wellness Rehabilitation 2.0 launched by Vaayu",
    excerpt:
      "Vaayu introduces Rehab 2.0 — an advanced pulmonary and cardiac rehabilitation program focused on structured recovery, improved lung function, and long-term respiratory wellness.",
    author: "Vaayu Chest & Sleep Specialists",
    link: "https://drive.google.com/drive/folders/1sWiPF8FHj0Hy_57sUr36udZ9KX4Eyn5t?usp=sharing",
    image: rehabLaunchPreview,
    type: "image",
  },
  {
    id: 11,
    featured: false,
    source: "The Hans India",
    date: "2026",
    category: "Pulmonary Rehab Program",
    title:
      "Vaayu Chest and Sleep Specialty Center addresses respiratory health crisis at high level health roundtable",
    excerpt:
      "The Hans India features Vaayu’s expert roundtable discussion on respiratory health challenges, awareness, early intervention, and structured pulmonary care.",
    author: "Vaayu Chest & Sleep Specialists",
    link: "https://www.thehansindia.com/karnataka/vaayu-chest-and-sleep-specialty-center-addresses-respiratory-health-crisis-at-high-level-health-roundtable-1053118",
    pdf: "/media-pdfs/hans-india-roundtable.pdf",
    image: hansIndiaCapture,
    type: "external",
  },
  {
    id: 10,
    featured: false,
    source: "Samyukta Karnataka",
    date: "2026",
    category: "Pulmonary Rehab Program",
    title: "Pulmonary Rehab Program featured in Samyukta Karnataka",
    excerpt:
      "Vaayu’s Pulmonary Rehab Program highlighted in Samyukta Karnataka, showcasing specialised rehabilitation support for respiratory recovery and long-term pulmonary wellness.",
    author: "Vaayu Chest & Sleep Specialists",
    link: "https://drive.google.com/file/d/1-J9ZfLOQ6tBa5vvVXdv2xaYFwYp5fSp9/view?usp=sharing",
    image: samyuktaKarnatakaImg,
    type: "image",
  },
  {
    id: 9,
    featured: false,
    source: "Sanjevani",
    date: "2026",
    category: "Pulmonary Rehab Program",
    title: "Pulmonary Rehab Program featured in Sanjevani",
    excerpt:
      "Coverage of Vaayu’s Pulmonary Rehab Program, focusing on structured recovery, respiratory strengthening, and specialised rehabilitation care.",
    author: "Vaayu Chest & Sleep Specialists",
    link: "https://drive.google.com/file/d/1VwbJJ2S_H3a-r4Hda8Sh98YvhJUuXmJE/view?usp=sharing",
    image: sanjevaniImg,
    type: "image",
  },
  {
    id: 8,
    featured: false,
    source: "IndianNewz",
    date: "29 Jan 2026",
    category: "Clinical Recovery",
    title:
      "Vaayu Chest & Sleep Specialty Center helps a critical patient completely recover with state-of-the-art Pulmonary Rehabilitation after a major lung surgery",
    excerpt:
      "Vaayu Chest & Sleep Specialty Center reports a complete recovery of a critical patient through advanced pulmonary rehabilitation after a major lung surgery.",
    author: "Dr. Ravindra Mehta",
    link: "https://indiannewz.wordpress.com/2026/01/29/vaayu-chest-sleep-specialty-center-helps-a-critical-patient-completely-recover-with-state-of-the-art-pulmonary-rehabilitation-after-a-major-lung-surgery/",
    pdf: "/media-pdfs/indiannewz-critical-patient.pdf",
    image: indianNewzCapture,
    type: "external",
  },
  {
    id: 7,
    featured: false,
    source: "PNI News",
    date: "Jan 2026",
    category: "Clinical Recovery",
    title:
      "Vaayu Chest & Sleep Specialty Center helps a critical patient completely recover with state-of-the-art Pulmonary Rehabilitation after a major lung surgery",
    excerpt:
      "Under the leadership of Dr. Ravindra Mehta, Vaayu Chest & Sleep Specialty Center successfully enabled a critically ill patient to achieve complete recovery through advanced pulmonary rehabilitation following a major lung surgery.",
    author: "Dr. Ravindra Mehta",
    link: "https://www.pninews.com/amp/vaayu-chest-sleep-specialty-center-helps-a-critical-patient-completely-recover-with-state-of-the-art-pulmonary-rehabilitation-after-a-major-lung-surgery/",
    pdf: "/media-pdfs/pni-news-critical-patient.pdf",
    image: pniCriticalCapture,
    type: "external",
  },
  {
    id: 6,
    featured: false,
    source: "Health Desk",
    date: "Jan 2026",
    category: "Expert Insight",
    title:
      "Feeling breathless despite normal lung reports? Doctors explain possible causes",
    excerpt:
      "Breathlessness, frequent sighing, or the need to take deep breaths is not always a lung issue, and other causes must be considered.",
    author: "Dr.Sameer Bansal",
    link: "https://thesouthfirst.com/health/feeling-breathless-despite-normal-lung-reports-doctors-explain-possible-causes/",
    archiveLink: "https://web.archive.org/web/20260127025003/https://thesouthfirst.com/health/feeling-breathless-despite-normal-lung-reports-doctors-explain-possible-causes/",
    pdf: "/media-pdfs/south-first-breathless.pdf",
    image: southFirstCapture,
    type: "external",
  },
  {
    id: 1,
    featured: true,
    source: "Business Web News",
    date: "01 Oct 2023",
    category: "Inauguration",
    title:
      "VAAYU - A Unique Centre for Holistic Care of Pulmonary Health Inaugurated in Jayanagar, Bengaluru",
    excerpt:
      "A state-of-the-art facility and a unique centre for holistic care of pulmonary health inaugurated in Jayanagar, Bengaluru.",
    link: "https://businesswebnews.blogspot.com/2023/10/vaayu-unique-centre-for-holistic-care.html?m=1",
    archiveLink: "https://web.archive.org/web/20231226215740/https://businesswebnews.blogspot.com/2023/10/vaayu-unique-centre-for-holistic-care.html",
    image: img1,
    type: "external",
  },
  {
    id: 2,
    featured: true,
    source: "PNI News",
    date: "02 Oct 2023",
    category: "Inauguration",
    title: "VAAYU - A Unique Centre for Holistic Care of Pulmonary Health",
    excerpt:
      "VAAYU Chest and Sleep Services & VAAYU Pulmonary Wellness & Rehabilitation Centre inaugurated in Jayanagar, Bengaluru.",
    link: "https://www.pninews.com/vaayu-a-unique-centre-for-holistic-care-of-pulmonary-health/",
    pdf: "/media-pdfs/pni-news-inauguration.pdf",
    image: pniInaugurationCapture,
    type: "external",
  },
  {
    id: 3,
    featured: true,
    source: "Deccan Herald",
    date: "25 Sep 2023",
    category: "Inauguration",
    title: "VAAYU Pulmonary Wellness Services Launched Ahead of World Lung Day",
    excerpt:
      "The centre will have experienced pulmonologists, speciality services for asthma and other lung disorders, advanced diagnostics, paediatric pulmonology treatment, and an allergy centre, among other services, under one roof.",
    link: "https://www.deccanherald.com/india/karnataka/bengaluru/vaayu-pulmonary-wellness-services-launched-ahead-of-world-lung-day-2699287",
    pdf: "/media-pdfs/deccan-herald-inauguration.pdf",
    image: img3,
    type: "external",
  },
  {
    id: 4,
    featured: false,
    source: "NDTV",
    date: "Nov 2023",
    category: "Expert Article",
    title:
      "COPD Signs And Symptoms: Understanding The Importance Of Early Detection And Timely Intervention",
    excerpt:
      "Spokesperson: Dr. Ravindra Mehta, Chief of Pulmonary, Critical Care and Interventional Pulmonology, Bengaluru.",
    link: "https://www.ndtv.com/health/copd-signs-and-symptoms-understanding-the-importance-of-early-detection-and-timely-intervention-4589392",
    archiveLink: "https://web.archive.org/web/20250718081024/https://www.ndtv.com/health/copd-signs-and-symptoms-understanding-the-importance-of-early-detection-and-timely-intervention-4589392",
    pdf: "/media-pdfs/ndtv-copd.pdf",
    image: ndtvCapture,
    type: "external",
  },
  {
    id: 5,
    featured: false,
    source: "The Times of India",
    date: "12 Jan 2026",
    category: "Featured",
    title: "“The Air We Breathe” — Times of India (All Karnataka Edition)",
    excerpt:
      "Dr. Ravindra Mehta of Vaayu Chest & Sleep Specialists quoted on Bengaluru's air quality, traffic-linked pollution, and the rise in respiratory illness the clinic is seeing.",
    pdf: "/media-pdfs/toi-jan12-2026.pdf",
    image: toiImg,
    type: "image",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const CATEGORY_STYLES = {
  "Respiratory Health Roundtable": { bg: "bg-[#E7EFDD]", text: "text-[#4A5D32]" },
  "Expert Insight": { bg: "bg-[#E3EEF5]", text: "text-[#2C5B77]" },
  "Expert Article": { bg: "bg-[#E3EEF5]", text: "text-[#2C5B77]" },
  "Pulmonary Rehab Program": { bg: "bg-[#EDE7F6]", text: "text-[#5B4B8A]" },
  "Clinical Recovery": { bg: "bg-[#FBEAE0]", text: "text-[#A6563B]" },
  Inauguration: { bg: "bg-[#FBF0D9]", text: "text-[#8A6D1D]" },
  Featured: { bg: "bg-[#EEF2E4]", text: "text-[#3F4723]" },
  "Rehab Launch 2.0": { bg: "bg-[#F5E6EA]", text: "text-[#8A3B54]" },
};
const categoryStyle = (cat) => CATEGORY_STYLES[cat] || { bg: "bg-[#EEF2E4]", text: "text-[#3F4723]" };

const MediaCard = ({ item }) => {
  const cat = categoryStyle(item.category);
  return (
    <motion.article className="group relative bg-white rounded-2xl border border-[#e2e8d8] shadow-[0_4px_16px_rgba(63,71,46,0.06)] p-5 h-full overflow-hidden transition duration-300 hover:shadow-[0_16px_40px_rgba(91,102,65,0.18)] hover:-translate-y-1.5 hover:border-[#c7d4b4] will-change-transform">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8ba36b] via-[#5B6641] to-[#3F4723] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      {(() => {
        const ImageWrap = item.link ? "a" : "div";
        const imageWrapProps = item.link
          ? { href: item.link, target: "_blank", rel: "noreferrer", "aria-label": `Open ${item.source} article: ${item.title}` }
          : {};
        return (
          <ImageWrap {...imageWrapProps} className="block">
            <div className="relative rounded-xl overflow-hidden mb-4 shadow-[0_10px_24px_rgba(63,71,46,0.18)] ring-1 ring-black/[0.06] bg-[#EEF2E4]">
              <img
                src={item.image}
                alt={`${item.source} clipping — ${item.title}`}
                className="w-full h-44 object-cover object-top transition duration-500 group-hover:scale-[1.05]"
                loading="lazy"
                decoding="async"
              />
              <span className={`absolute top-2.5 right-2.5 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm ${cat.bg} ${cat.text}`}>
                {item.category}
              </span>
            </div>
          </ImageWrap>
        );
      })()}

      <p className="text-xs font-bold uppercase tracking-wide text-[#6A734F]">
        {item.source} • {item.date}
      </p>

      {item.link ? (
        <a href={item.link} target="_blank" rel="noreferrer" className="block">
          <h3 className="mt-2 text-xl font-semibold text-[#3F4723] leading-snug group-hover:text-[#5B6641]">
            {item.title}
          </h3>
        </a>
      ) : (
        <h3 className="mt-2 text-xl font-semibold text-[#3F4723] leading-snug">
          {item.title}
        </h3>
      )}

      <p className="text-gray-700 mt-2 text-sm leading-relaxed line-clamp-3">
        {item.excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#5B6641] hover:text-[#3F4723]"
          >
            Open Article <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        ) : item.pdf ? (
          <a
            href={item.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#5B6641] hover:text-[#3F4723]"
            title="This ran in print with no matching online article — here's the saved page"
          >
            View Full Clipping <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        ) : null}

        {item.link && item.pdf ? (
          <a
            href={item.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-[#5B6641]"
            title="Saved copy of the published page, in case the original link goes offline"
          >
            <FiDownload size={12} /> PDF
          </a>
        ) : item.link && item.archiveLink ? (
          <a
            href={item.archiveLink}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-gray-500 hover:text-[#5B6641]"
            title="Permanent archived copy, in case the original link goes offline"
          >
            Backup copy
          </a>
        ) : null}
      </div>
    </motion.article>
  );
};

const Mediaspotlight = () => {
  const featured = mediaItems.filter((x) => x.featured).slice(0, 3);
  const featuredIds = new Set(featured.map((x) => x.id));
  const recent = mediaItems.filter((x) => !featuredIds.has(x.id));

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);

  const siteUrl = "https://vaayu.example.com";
  const pageUrl = `${siteUrl}/media`;

  const seoTitle =
    "Vaayu in the News | Media Spotlight – Vaayu Chest & Sleep Specialists, Jayanagar Bengaluru";
  const seoDesc =
    "Explore Vaayu Chest & Sleep Specialists’ media coverage—Inauguration highlights, expert articles (NDTV), and Times of India features. Trusted pulmonary & sleep care in Jayanagar, Bengaluru.";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Media Spotlight",
      url: pageUrl,
      description: seoDesc,
      isPartOf: {
        "@type": "WebSite",
        name: "Vaayu Chest & Sleep Specialists",
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Media", item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      name: "Vaayu Chest & Sleep Specialists",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jayanagar",
        addressRegion: "Bengaluru",
        addressCountry: "IN",
      },
    },
  ];

  return (
<main
  className="bg-[#F6F7F2] min-h-screen overflow-x-hidden w-full"
  style={{ fontFamily: font }}
>      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/assets/media/news-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-24 sm:pt-28 md:pt-[120px] min-h-[420px] sm:min-h-[480px] md:min-h-[620px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={heroBg}
            className="w-full h-full object-cover"
            alt="Vaayu Chest & Sleep Specialists media coverage in Bengaluru"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
        </motion.div>

        <motion.div
          className="relative px-4 sm:px-6 lg:px-32 py-10 sm:py-12 max-w-3xl sm:max-w-4xl md:max-w-5xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-white/80 uppercase tracking-widest text-[10px] sm:text-xs font-bold"
          >
            VAAYU CHEST & SLEEP SPECIALISTS • Jayanagar, Bengaluru
          </motion.p>

          <motion.h1
            variants={fadeUp}
className="mt-3 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]"          >
            Media Spotlight
          </motion.h1>

          <motion.p
            variants={fadeUp}
className="text-white/85 mt-5 max-w-2xl text-[15px] sm:text-[17px] leading-8 font-normal"          >
            Inaugurations, expert columns, and major press mentions—showcasing Vaayu’s
            growing credibility in pulmonary, sleep medicine and rehabilitation in Bengaluru.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 sm:mt-7 flex flex-wrap gap-2 sm:gap-3">
            <span className="px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-xs sm:text-sm">
              Featured in National Media
            </span>
            <span className="px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-xs sm:text-sm">
              Pulmonary • Sleep • Rehab
            </span>
            <span className="px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-xs sm:text-sm">
              Bengaluru-based Specialists
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 sm:mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.eka.care/clinic/vaayu-chest-and-sleep-specialists?utm_source=%2Fdoctor%2F%5Bslug%5D&utm_medium=eka-web&utm_campaign=web-navigation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1f2a1a] px-5 sm:px-6 py-3 rounded-full font-extrabold shadow-lg hover:shadow-xl transition text-sm sm:text-base"
              aria-label="Book an appointment on Eka Care"
            >
              Book an Appointment <FiArrowRight />
            </a>
          </motion.div>
        </motion.div>

        <div className="h-10 sm:h-14 bg-gradient-to-b from-transparent to-[#F6F7F2]" />
      </section>

      {/* VIDEO */}
      <section className="px-4 sm:px-6 lg:px-32 mt-2">
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          <video
            src={mediaVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-[220px] sm:h-[280px] md:h-[460px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <motion.div
            className="absolute inset-0 flex flex-col justify-center px-5 sm:px-6 md:px-12"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center text-white/80 text-xs sm:text-sm font-semibold mb-3"
            >
              <FiPlay className="mr-2" /> Media Highlight
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-white text-xl sm:text-2xl md:text-4xl font-extrabold max-w-xl leading-tight"
            >
              A glimpse into Vaayu’s journey, inauguration & media presence
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/80 mt-3 max-w-xl text-sm sm:text-base"
            >
              Capturing moments of care, credibility, and commitment to pulmonary & sleep health.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURED GRID */}
      <section className="px-4 sm:px-6 lg:px-32 mt-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="lg:col-span-8">
            {featured[0] && (
             <motion.a
  href={featured[0].link}
  target="_blank"
  rel="noreferrer"
  className="group relative bg-white rounded-2xl border border-[#e2e8d8] shadow-[0_4px_16px_rgba(63,71,46,0.06)] p-5 block overflow-hidden transition duration-300 hover:shadow-[0_20px_48px_rgba(91,102,65,0.2)] hover:-translate-y-1.5 hover:border-[#c7d4b4]"
>
  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8ba36b] via-[#5B6641] to-[#3F4723] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

  <div className="relative rounded-xl overflow-hidden mb-4 shadow-[0_12px_32px_rgba(63,71,46,0.2)] ring-1 ring-black/[0.06] bg-[#EEF2E4]">
    <img
      src={featured[0].image}
      alt={`${featured[0].source} clipping — ${featured[0].title}`}
      className="w-full aspect-[16/9] sm:aspect-[2.2/1] object-cover object-top transition duration-500 group-hover:scale-[1.04]"
      loading="lazy"
      decoding="async"
    />
    <span className={`absolute top-3 right-3 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm ${categoryStyle(featured[0].category).bg} ${categoryStyle(featured[0].category).text}`}>
      {featured[0].category}
    </span>
  </div>

  <p className="text-xs font-bold uppercase tracking-wide text-[#6A734F]">
    {featured[0].source} • {featured[0].date}
  </p>

  <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight leading-tight text-[#3F4723] group-hover:text-[#5B6641]">
    {featured[0].title}
  </h2>

  <p className="mt-4 text-[15px] md:text-base leading-7 text-gray-700 max-w-3xl">
    {featured[0].excerpt}
  </p>

  <div className="mt-6 flex items-center justify-between">
    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
      Featured Coverage
    </span>

    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#5B6641] group-hover:text-[#3F4723]">
      Open Article <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
    </span>
  </div>
</motion.a>
            )}
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            {featured.slice(1).map((i) => (
              <motion.a
                key={i.id}
                href={i.link}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                className="group relative bg-white rounded-2xl border border-[#e2e8d8] shadow-[0_4px_16px_rgba(63,71,46,0.06)] p-4 flex-1 flex flex-col overflow-hidden transition duration-300 hover:shadow-[0_16px_36px_rgba(91,102,65,0.18)] hover:-translate-y-1.5 hover:border-[#c7d4b4]"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8ba36b] via-[#5B6641] to-[#3F4723] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div className="relative rounded-xl overflow-hidden mb-3 shadow-[0_8px_20px_rgba(63,71,46,0.16)] ring-1 ring-black/[0.06]">
                  <img
                    src={i.image}
                    className="h-[140px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={`absolute top-2 right-2 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm ${categoryStyle(i.category).bg} ${categoryStyle(i.category).text}`}>
                    {i.category}
                  </span>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#6A734F]">
                  {i.source} • {i.date}
                </p>
                <p className="text-[#3F4723] font-semibold mt-1 line-clamp-2 group-hover:text-[#5B6641]">
                  {i.title}
                </p>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#5B6641] group-hover:text-[#3F4723]">
                  Open <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DR. RAVINDRA MEHTA */}
      <section className="px-4 sm:px-6 lg:px-32 mt-12">
        <motion.div
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden group"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative overflow-hidden">
              <img
                src={raviMehtaImg}
                alt="Dr. Ravindra Mehta - Times of India quote on Bengaluru air quality crisis"
className="w-full h-[240px] sm:h-[280px] lg:h-full object-contain bg-[#f8f8f4] p-2 transition duration-500 group-hover:scale-[1.01]"                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
            </div>

            <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
              <p className="text-xs font-extrabold text-[#6A734F] uppercase tracking-widest">
                The Times of India • Bengaluru
              </p>

              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1f2a1a] leading-tight">
                Dr. Ravindra Mehta quoted in Times of India on Bengaluru’s Air Quality Crisis
              </h2>

              <p className="text-gray-600 mt-3 max-w-2xl text-sm sm:text-base">
                Read the coverage highlighting respiratory health concerns and expert insights
                around the city’s air quality situation.
              </p>

              <div className="mt-6">
                <Link
                  to="/media/dr-ravindra-mehta-times-of-india"
                  className="inline-flex items-center gap-2 bg-[#1f2a1a] text-white px-5 sm:px-6 py-3 rounded-full font-extrabold shadow-lg hover:shadow-xl transition text-sm sm:text-base"
                >
                  Open the TOI Quote Page <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* RECENTLY ADDED */}
      <section className="px-4 sm:px-6 lg:px-32 mt-12 pb-16">
        <motion.h2
className="text-3xl md:text-4xl font-black tracking-tight text-[#1f2a1a] mb-8"          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Recently Added
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {recent.map((item) => (
            <motion.div key={item.id} variants={fadeUp} className="h-full">
              <MediaCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Mediaspotlight;