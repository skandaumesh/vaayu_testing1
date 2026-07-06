import React, { useEffect, useState } from "react";

/* ---------- Images (use relative paths) ---------- */
import heroBg from "../assets/img/Beige Elegant Minimalist Travel Scrapbook Photo Collage (Portrait) 3.jpg";

import outing1 from "../assets/img/PHOTO-2025-04-27-16-11-36.jpg";
import outing2 from "../assets/img/PHOTO-2024-09-22-21-42-53 2.jpg"; // ok but consider renaming to remove spaces

import christmas1 from "../assets/img/chr2.jpeg";
import christmas2 from "../assets/img/chri.jpg";

import team1 from "../assets/img/PHOTO-2024-08-16-10-48-01 2.jpg"; // ok but consider renaming
import team2 from "../assets/img/PHOTO-2025-05-08-21-13-42 2.jpg";

/* Voric () — convert HEIC to jpg/jpg and update names accordingly */
import voric1 from "../assets/img/IMG_7287 2.jpg"; // converted from "IMG_7287 2.HEIC"
import voric2 from "../assets/img/IMG_1659.jpg";   // converted from "IMG_1659.HEIC"
import voric3 from "../assets/img/Beige Elegant Minimalist Travel Scrapbook Photo Collage (Portrait) 3.jpg"; // renamed from long PNG
import voric4 from "../assets/img/IMG_0951.jpg";   // converted from "IMG_0951.HEIC"
import voric5 from "../assets/img/IMG_7047.jpg";   // converted from "IMG_7047.HEIC"

/* Inauguration (all JPGs) */
import ina1 from "../assets/img/_M0A1015.JPG";
import ina2 from "../assets/img/_M0A0999.JPG";
import ina3 from "../assets/img/_M0A1242.JPG";
import ina4 from "../assets/img/_M0A1272.JPG";
import ina5 from "../assets/img/_M0A1323.JPG";
import ina6 from "../assets/img/_M0A1143.JPG";
import ina7 from "../assets/img/_M0A1103.JPG";
import ina8 from "../assets/img/_M0A1291.JPG";

//Revive 2.0
import RehabEvent1 from "../assets/img/rehab event/C6337T01.JPG";
import RehabEvent2 from "../assets/img/rehab event/C6535T01.JPG";
import RehabEvent3 from "../assets/img/rehab event/C6527T01.JPG";
import RehabEvent4 from "../assets/img/rehab event/C6501T01.JPG";
import RehabEvent5 from "../assets/img/rehab event/C6467T01.JPG";
import RehabEvent6 from "../assets/img/rehab event/C6465T01.JPG";
import RehabEvent7 from "../assets/img/rehab event/C6386T01.JPG";
import RehabEvent8 from "../assets/img/rehab event/C6440T01.JPG";
import RehabEvent9 from "../assets/img/rehab event/C6358T01.JPG";
import RehabEvent10 from "../assets/img/rehab event/C6357T01.JPG";
import RehabEvent11 from "../assets/img/rehab event/C6403T01.JPG";
import RehabEvent12 from "../assets/img/rehab event/C6504T01.JPG";
import RehabEvent13 from "../assets/img/rehab event/C6475T01.JPG";

// New CAPI images
import capi1 from "../assets/img/IMG-20250728-WA0067.jpg";
import capi2 from "../assets/img/IMG-20250728-WA0024.jpg";
import capi3 from "../assets/img/IMG-20250728-WA0177.jpg";
import capi4 from "../assets/img/IMG-20250728-WA0269.jpg";
import capi5 from "../assets/img/IMG-20250728-WA0033.jpg";
import capi6 from "../assets/img/IMG-20250728-WA0027.jpg";
import capi7 from "../assets/img/IMG-20250728-WA0200.jpg";
import capi8 from "../assets/img/IMG-20250728-WA0248.jpg";
import capi9 from "../assets/img/IMG-20250728-WA0239.jpg";
import capi10 from "../assets/img/IMG-20250728-WA0153.jpg";
import capi11 from "../assets/img/IMG-20250728-WA0273.jpg";
import capi12 from "../assets/img/IMG-20250728-WA0298.jpg";
import capi13 from "../assets/img/IMG-20250728-WA0204.jpg";
import capi14 from "../assets/img/IMG-20250728-WA0028.jpg";

//camp
/* Camp Images */
import camp1 from "../assets/img/Camp/a1.jpg";
import camp2 from "../assets/img/Camp/a2.jpg";
import camp3 from "../assets/img/Camp/a3.jpg";
import camp4 from "../assets/img/Camp/a4.jpg";
import camp5 from "../assets/img/Camp/a5.jpg";
import camp6 from "../assets/img/Camp/a6.jpg";
import camp7 from "../assets/img/Camp/a7.jpg";
import camp8 from "../assets/img/Camp/a8.jpg";


/* Dignitaries — JPG/JPEG direct; HEICs converted to jpg below */

import dig_sally from "../assets/img/Dr. Sally SIngh .jpeg";
import dig_nandini from "../assets/img/Dr. Nandini - Head of KSRTC.jpeg";
import dig_ganesh from "../assets/img/Dr. Ganesh Raghu .jpeg";
import dig_murthy from "../assets/img/Mr. Narayan Murthy.JPG";
import dig_pradeep from "../assets/img/Mr. Pradeep Kar.jpeg";
import dig_salumarada from "../assets/img/Mrs. Salumarada Thimakka .JPG"; // works, but consider renaming

/* Convert these HEICs and import the converted files */
import dig_shivakumar from "../assets/img/mr-dk-shivakumar.jpg";           // from "Mr. D K Shivakumar with RM & AT at Manipal Hospital.HEIC"
import dig_gmr_with from "../assets/img/Mr. Grandhi Mallikarjuna Rao.jpg"; // from "Mr. Grandhi Mallikarjuna Rao with RM & SN.HEIC"
import dig_gmr from "../assets/img/Mr. Grandhi Mallikarjuna Rao.jpg";           // from "Mr. Grandhi Mallikarjuna Rao.HEIC"
import dig_yediyurappa from "../assets/img/mr-yediyurappa-team.jpg";        // from "Mr. Yedyurappa with our team.heic"


/* Revive 2025 */
/* Revive 2025 */
import revive1 from "../assets/img/Revive Gallery/_Q3A7634.JPG";
import revive2 from "../assets/img/Revive Gallery/_Q3A7682.JPG";
import revive3 from "../assets/img/Revive Gallery/_Q3A7718.JPG";
import revive4 from "../assets/img/Revive Gallery/_Q3A7721.JPG";
import revive5 from "../assets/img/Revive Gallery/_Q3A7724.JPG";
import revive6 from "../assets/img/Revive Gallery/_Q3A7728.JPG";
import revive7 from "../assets/img/Revive Gallery/_Q3A7741.JPG";
import revive8 from "../assets/img/Revive Gallery/_Q3A7764.JPG";
import revive9 from "../assets/img/Revive Gallery/_Q3A7871.JPG";
import revive10 from "../assets/img/Revive Gallery/_Q3A8063.JPG";
import revive11 from "../assets/img/Revive Gallery/_Q3A8160.JPG";
import revive12 from "../assets/img/Revive Gallery/_Q3A8171.JPG";
import revive13 from "../assets/img/Revive Gallery/_Q3A8189.JPG";
import revive14 from "../assets/img/Revive Gallery/REVIVE 2025.jpg";

//



/* ---------- Lightbox / Modal ---------- */
const LightboxModal = ({ title, images, startIndex = 0, onClose }) => {
  const [index, setIndex] = useState(startIndex);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const active = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#5B6641] text-white rounded-t-xl">
          <h3 className="font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded hover:bg-white/10"
            aria-label="Dismiss"
            title="Dismiss"
          >
            ✕
          </button>
        </div>

        {/* Main image */}
        <div className="relative bg-black flex items-center justify-center" style={{ minHeight: 420 }}>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full px-3 py-2"
            aria-label="Previous"
            title="Previous"
          >
            ←
          </button>

          <img
            src={active.src}
            alt={active.alt || title}
            className="max-h-[100vh] w-auto max-w-full object-contain"
            loading="lazy"
          />

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full px-3 py-2"
            aria-label="Next"
            title="Next"
          >
            →
          </button>
        </div>

        {/* Thumbnails */}
        <div className="px-4 py-3 border-t">
          <div className="flex gap-3 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                className={`flex-shrink-0 rounded border ${i === index ? "border-[#5B6641]" : "border-gray-200"} hover:border-[#5B6641]`}
                onClick={() => setIndex(i)}
                title={img.alt || `${title} ${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt || `${title} ${i + 1}`}
                  className="h-20 w-28 object-cover rounded"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Category card (single full cover photo) ---------- */
const CategoryCard = ({ title, images, onOpen, aspect = "landscape" }) => {
  const cover = images[0];
  const aspectClass = aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div className="rounded-lg bg-white shadow hover:shadow-md transition overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(0)}
        className="block w-full text-left"
        title={`Open ${title}`}
      >
        <div className={`relative ${aspectClass} w-full`}>
          <img
            src={cover.src}
            alt={cover.alt || title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* Title pill */}
          <span className="absolute top-2 left-2 text-xs sm:text-sm font-semibold text-white bg-[#5B6641]/95 px-2 py-1 rounded">
            {title}
          </span>
          {/* View all badge */}
          {images.length > 1 && (
            <span className="absolute bottom-2 right-2 text-[11px] sm:text-xs text-[#5B6641] bg-white/95 px-2 py-1 rounded-full shadow">
              View all ({images.length})
            </span>
          )}
        </div>
      </button>
    </div>
  );
};

/* ---------- Page ---------- */
const Gallery = () => {
  const [lightbox, setLightbox] = useState({
    open: false,
    title: "",
    images: [],
    startIndex: 0,
  });

  const openLightbox = (title, images, startIndex = 0) =>
    setLightbox({ open: true, title, images, startIndex });

  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));

  const categories = [


    {
  title: "Rehab 2.0 Event",
  images: [
    { src: RehabEvent3, alt: "Rehab 2.0 Event 1" },
    { src: RehabEvent2, alt: "Rehab 2.0 Event 2" },
    { src: RehabEvent1, alt: "Rehab 2.0 Event 3" },
    { src: RehabEvent4, alt: "Rehab 2.0 Event 4" },
    { src: RehabEvent5, alt: "Rehab 2.0 Event 5" },
    { src: RehabEvent6, alt: "Rehab 2.0 Event 6" },
    { src: RehabEvent7, alt: "Rehab 2.0 Event 7" },
    { src: RehabEvent8, alt: "Rehab 2.0 Event 8" },
    { src: RehabEvent9, alt: "Rehab 2.0 Event 9" },
    { src: RehabEvent10, alt: "Rehab 2.0 Event 10" },
    { src: RehabEvent11, alt: "Rehab 2.0 Event 11" },
    { src: RehabEvent12, alt: "Rehab 2.0 Event 12" },
    { src: RehabEvent13, alt: "Rehab 2.0 Event 13" },
  ],
  aspect: "landscape",
},
{
  title: "Camp",
  images: [
        { src: camp8, alt: "Camp 8" },
    { src: camp1, alt: "Camp 1" },
        { src: camp3, alt: "Camp 3" },
    { src: camp2, alt: "Camp 2" },
    { src: camp4, alt: "Camp 4" },
    { src: camp5, alt: "Camp 5" },
    { src: camp6, alt: "Camp 6" },
    { src: camp7, alt: "Camp 7" },
  ],
  aspect: "landscape",
},

   {
  title: "Revive 2025",
  images: [
    { src: revive1, alt: "Revive 2025 - 1" },
    { src: revive14, alt: "Revive 2025 - 1" },
    { src: revive2, alt: "Revive 2025 - 2" },
    { src: revive3, alt: "Revive 2025 - 3" },
    { src: revive4, alt: "Revive 2025 - 4" },
    { src: revive5, alt: "Revive 2025 - 5" },
    { src: revive6, alt: "Revive 2025 - 6" },
    { src: revive7, alt: "Revive 2025 - 7" },
    { src: revive8, alt: "Revive 2025 - 8" },
    { src: revive9, alt: "Revive 2025 - 9" },
    { src: revive10, alt: "Revive 2025 - 10" },
    { src: revive11, alt: "Revive 2025 - 11" },
    { src: revive12, alt: "Revive 2025 - 12" },
    { src: revive13, alt: "Revive 2025 - 13" },
  ],
  aspect: "landscape", // change to "portrait" if most photos are vertical
},


    {
      title: "CAPI-2025",
      images: [
        { src: capi1, alt: "capi 1" },
        { src: capi2, alt: "capi 2" },
        { src: capi3, alt: "capi 3" },
        { src: capi4, alt: "capi 4" },
        { src: capi6, alt: "capi 6" },
        { src: capi7, alt: "capi 7" },
        { src: capi8, alt: "capi 8" },
        { src: capi5, alt: "capi 5" },
        { src: capi9, alt: "capi 9" },
        { src: capi10, alt: "capi 10" },
        { src: capi11, alt: "capi 11" },
        { src: capi12, alt: "capi 12" },
        { src: capi13, alt: "capi 13" },
        { src: capi14, alt: "capi 14" },

      ],
      aspect: "landscape",
    },
    
    {
      title: "Outing",
      images: [
        { src: outing1, alt: "Outing 1" },
        { src: outing2, alt: "Outing 2" },
      ],
      aspect: "landscape",
    },
    {
      title: "Christmas",
      images: [
        { src: christmas1, alt: "Christmas 1" },
        { src: christmas2, alt: "Christmas 2" },
      ],
      aspect: "landscape",
    },
    {
      title: "Team",
      images: [
        { src: team1, alt: "Team 1" },
        { src: team2, alt: "Team 2" },
      ],
      aspect: "landscape",
    },
    {
      title: "Voric",
      images: [
        { src: voric1, alt: "Voric 1" },
        { src: voric2, alt: "Voric 2" },
        { src: voric3, alt: "Voric Collage" },
        { src: voric4, alt: "Voric 4" },
        { src: voric5, alt: "Voric 5" },
      ],
      aspect: "landscape",
    },
    {
      title: "Inauguration",
      images: [
        { src: ina1, alt: "Inauguration 1" },
        { src: ina2, alt: "Inauguration 2" },
        { src: ina3, alt: "Inauguration 3" },
        { src: ina4, alt: "Inauguration 4" },
        { src: ina5, alt: "Inauguration 5" },
        { src: ina6, alt: "Inauguration 6" },
        { src: ina7, alt: "Inauguration 7" },
        { src: ina8, alt: "Inauguration 8" },
      ],
      aspect: "landscape",
    },
    {
      title: "Dignitaries",
      images: [
        { src: dig_murthy, alt: "Mr. Narayana Murthy" },

        { src: dig_sally, alt: "Dr. Sally Singh" },
        { src: dig_nandini, alt: "Dr. Nandini (KSRTC Head)" },
        { src: dig_ganesh, alt: "Dr. Ganesh Raghu" },
        { src: dig_pradeep, alt: "Mr. Pradeep Kar" },
        { src: dig_salumarada, alt: "Mrs. Salumarada Thimmakka" },

        { src: dig_shivakumar, alt: "Mr. D K Shivakumar" },       // converted from HEIC
        { src: dig_gmr_with, alt: "Mr. G M Rao with team" },       // converted from HEIC
        { src: dig_gmr, alt: "Mr. G M Rao" },                      // converted from HEIC
        { src: dig_yediyurappa, alt: "Mr. B S Yediyurappa with team" }, // converted from HEIC
      ],
      aspect: "", // many dignitary photos are vertical—looks better
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO — fullscreen, single image, centered */}
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden rounded-b-2xl mb-12">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 55%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent" />
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Vaayu Gallery</h1>
          <p className="text-white/90 max-w-3xl">
            Welcome to our Gallery. Here we showcase glimpses of our clinics,
            wellness camps, rehabilitation sessions, team moments, and social impact work.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-16">
        {categories.map((cat, ci) => (
          <CategoryCard
            key={ci}
            title={cat.title}
            images={cat.images}
            aspect={cat.aspect}
            onOpen={(startIndex) => openLightbox(cat.title, cat.images, startIndex)}
          />
        ))}
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <LightboxModal
          title={lightbox.title}
          images={lightbox.images}
          startIndex={lightbox.startIndex}
          onClose={closeLightbox}
        />
      )}
    </main>
  );
};

export default Gallery;
