import React from "react";
import { FiPlay, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import heroBg from "../assets/img/media/news-hero.jpg";
import img1 from "../assets/img/media/WhatsApp Image 2026-01-21 at 4.13.06 PM.jpeg";
import img2 from "../assets/img/media/media-2.jpg";
import img3 from "../assets/img/media/media-3.jpg";
import ndtvImg from "../assets/img/media/ndtv.jpg";
import toiImg from "../assets/img/media/The Times of India, Pg2-All Karnataka Edition_12th Jan 2026.jpeg";
import raviMehtaImg from "../assets/img/DSC00661 (1).JPG";
import toiFirewoodImg from "../assets/img/media/Dr Ravindra Mehta, interventional pulmonologist and founder & director, Vaayu Chest & Sleep Specialists quoted in The Times of India, Pg2.jpeg";
import samyuktaKarnatakaImg from "../assets/img/media/samyukta-karnataka-pg2.jpeg";
import sanjevaniImg from "../assets/img/media/Sanjevani.jpeg";
import pniRoundtableThumb from "../assets/img/media/pni-roundtable.png";
import apnRoundtableThumb from "../assets/img/media/apn-roundtable.png";
import hansRoundtableThumb from "../assets/img/media/hans-roundtable.png";
import breathlessImg from "../assets/img/breathless.png";
import homeRehabImg from "../assets/img/rehab.jpg";
import indianNewzImg from "../assets/img/bg-contact-homecare.png";
import rehabLaunchPreview from "../assets/img/media/preview.png";
import mediaVideo from "../assets/img/media/6036184_Bill_Dollar_3840x2160.mp4";


const font =
  "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const mediaItems = [
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
  image: hansRoundtableThumb,
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
    image: pniRoundtableThumb,
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
    image: hansRoundtableThumb,
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
    image: indianNewzImg,
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
    image: homeRehabImg,
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
    image: breathlessImg,
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
    image: img2,
    type: "external",
  },
  {
    id: 3,
    featured: true,
    source: "FM Live",
    date: "05 Oct 2023",
    category: "Inauguration",
    title:
      "Vaayu - A Unique Centre for Holistic Care of Pulmonary Health Inaugurated in Jayanagar, Bengaluru",
    excerpt:
      "A state-of-the-art facility for pulmonary health launched with leading specialists in Bengaluru.",
    link: "https://www.fmlive.in/vaayu-a-unique-centre-for-holistic-care-of-pulmonary-health-inaugurated-in-jayanagar-Bengaluru/",
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
    image: ndtvImg,
    type: "external",
  },
  {
    id: 5,
    featured: false,
    source: "The Times of India",
    date: "12 Jan 2026",
    category: "Featured",
    title: "Vaayu featured in The Times of India (All Karnataka Edition)",
    excerpt:
      "Vaayu Chest & Sleep Specialists featured in The Times of India – All Karnataka Edition.",
    link: "#",
    image: toiImg,
    type: "external",
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

const MediaCard = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="block h-full"
      aria-label={`Open ${item.source} article: ${item.title}`}
    >
      <motion.article
        className="group bg-white rounded-[1.8rem] border border-[#E3E8D7] p-6 shadow-[0_12px_35px_rgba(31,42,26,0.06)] h-full transition will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,42,26,0.10)]"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="text-[11px] font-extrabold px-3 py-1.5 rounded-full bg-[#EEF2E4] text-[#1f2a1a]">
            {item.category}
          </span>

          <p className="text-xs text-gray-500 shrink-0">
            {item.date}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#6A734F]">
            {item.source}

            {item.author && (
              <span className="ml-1 normal-case tracking-normal text-gray-500 font-medium">
                • By {item.author}
              </span>
            )}
          </p>

          <h3 className="mt-3 text-[22px] leading-[1.28] font-black tracking-tight text-[#1f2a1a]">
            {item.title}
          </h3>

          <p className="text-[15px] leading-7 text-[#5c6651] mt-4 line-clamp-4">
            {item.excerpt}
          </p>
        </div>

        <div className="mt-7 pt-5 border-t border-[#E8ECDD] flex items-center justify-between">
          <span className="text-sm font-bold text-[#5B6641]">
            Media Coverage
          </span>

          <span className="inline-flex items-center gap-2 bg-[#1f2a1a] text-white px-5 py-2.5 rounded-full text-sm font-extrabold shadow-md">
            Open Article <FiExternalLink />
          </span>
        </div>
      </motion.article>
    </a>
  );
};

const Mediaspotlight = () => {
  const featured = mediaItems.filter((x) => x.featured).slice(0, 3);
  const recent = mediaItems;

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
  className="group bg-white rounded-[2rem] border border-[#E3E8D7] p-7 md:p-9 shadow-[0_12px_35px_rgba(31,42,26,0.06)] block"
  whileHover={{ y: -4 }}
  transition={{ type: "spring", stiffness: 260, damping: 22 }}
>
  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#6A734F]">
    {featured[0].source} • {featured[0].date}
  </p>

  <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight leading-[1.05] text-[#1f2a1a]">
    {featured[0].title}
  </h2>

  <p className="mt-5 text-[16px] md:text-[17px] leading-8 text-[#5c6651] max-w-3xl">
    {featured[0].excerpt}
  </p>

  <div className="mt-8 flex items-center justify-between border-t border-[#E8ECDD] pt-5">
    <span className="text-sm font-bold text-[#5B6641]">
      Featured Coverage
    </span>

    <span className="inline-flex items-center gap-2 bg-[#1f2a1a] text-white px-5 py-3 rounded-full text-sm font-extrabold shadow-md">
      Open Article <FiExternalLink />
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
                className="group relative rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <img
                  src={i.image}
className="h-[180px] sm:h-[200px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white/80 text-xs font-bold">
                    {i.source} • {i.date}
                  </p>
                  <p className="text-white font-extrabold mt-1 line-clamp-2">
                    {i.title}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold px-4 py-2 rounded-full bg-white text-[#1f2a1a] shadow">
                    Open <FiExternalLink />
                  </span>
                </div>
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