import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ✅ Rolling Horizontal Preview + Click → Spread Collage Overlay
 * - Preview: infinite horizontal rolling thumbnails with spacing (no repetition shown in your data)
 * - Overlay: your current "spread out" polaroid collage (NO repetition)
 *
 * Usage:
 * <CampRollingCollageGallery images={gallery} title="Moments from our camps" />
 */

function CampRollingCollageGallery({ images = [], title = "Moments from our camps", speed = 40 }) {
  const [open, setOpen] = useState(false);

  // ✅ Unique images only (by src)
  const uniqueImages = useMemo(() => {
    const seen = new Set();
    return (images || []).filter((img) => {
      const key = img?.src;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [images]);

  // ✅ Duplicate only for smooth infinite rolling animation (UI-only)
  // (No "different images" request is respected in data; duplication is only for seamless loop)
  const rollingTrack = useMemo(() => [...uniqueImages, ...uniqueImages], [uniqueImages]);

  // ✅ Spread collage positions (same vibe as your existing collage)
  const positions = useMemo(
    () => [
      { top: "10%", left: "8%", rotate: -10, w: "170px" },
      { top: "8%", left: "28%", rotate: 8, w: "220px" },
      { top: "14%", left: "55%", rotate: -6, w: "180px" },
      { top: "20%", left: "74%", rotate: 7, w: "160px" },

      { top: "40%", left: "12%", rotate: 9, w: "210px" },
      { top: "42%", left: "38%", rotate: -12, w: "230px" },
      { top: "44%", left: "66%", rotate: 6, w: "190px" },

      { top: "68%", left: "18%", rotate: -7, w: "190px" },
      { top: "70%", left: "44%", rotate: 10, w: "220px" },
      { top: "72%", left: "70%", rotate: -8, w: "180px" },
    ],
    []
  );

  // ESC closes
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <section id="gallery" className="bg-[#78866B]/10">
      <div className="max-w-6xl mx-auto px-5 lg:px-10 py-14">
        {/* Title */}
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-600">Gallery</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#5B6641]">{title}</h2>
          <p className="mt-2 text-sm text-gray-700 max-w-2xl">
            Scroll preview below. Click anywhere to expand and view all images.
          </p>
        </div>

        {/* ✅ Rolling preview strip (click opens overlay) */}
        <button type="button" onClick={() => setOpen(true)} className="mt-8 w-full text-left">
          <div className="rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-lg transition p-4 sm:p-5">
            <div className="relative rounded-3xl overflow-hidden bg-gray-100">
              {/* Height of strip */}
              <div className="h-[160px] sm:h-[180px] md:h-[200px]">
                {/* Gradient fades at edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-white via-white/60 to-transparent z-10" />

                {/* Rolling track */}
                <motion.div
                  className="absolute inset-0 flex items-center"
                  style={{ willChange: "transform" }}
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: speed, // bigger = slower
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <div className="flex items-center gap-4 sm:gap-5 px-4">
                    {rollingTrack.map((img, i) => (
                      <div
                        key={`${img?.src}-${i}`}
                        className="shrink-0 rounded-2xl overflow-hidden bg-gray-200 border border-gray-100 shadow-sm"
                        style={{ width: 220, height: 130 }}
                      >
                        <img
                          src={img?.src}
                          alt={img?.alt || "Camp photo"}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Click pill */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs font-extrabold text-[#5B6641]">
                    Click to Expand →
                  </div>
                </div>
              </div>
            </div>

            {/* tiny hint */}
            <div className="mt-3 text-xs text-gray-500">
              Showing {uniqueImages.length} photos • Tap to view full collage
            </div>
          </div>
        </button>
      </div>

      {/* ✅ Expanded collage overlay (NO repetition) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="collageOverlay"
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0, pointerEvents: "none" }}
            animate={{ opacity: 1, pointerEvents: "auto" }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="fixed top-4 right-4 z-[10000] h-12 w-12 rounded-2xl bg-white/15 border border-white/20 text-white hover:bg-white/25 transition"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Stage */}
            <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
              {uniqueImages.map((img, i) => {
                const p = positions[i % positions.length];

                const driftX = ((i % 5) - 2) * 7;
                const driftY = ((i % 7) - 3) * 6;
                const floatDur = 5 + (i % 5);

                return (
                  <motion.div
                    key={`${img?.src}-${i}`}
                    className="absolute"
                    style={{ top: p.top, left: p.left, width: p.w }}
                    initial={{ opacity: 0, scale: 0.6, y: 40, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: p.rotate,
                      x: [0, driftX, 0, -driftX, 0],
                      y: [0, -driftY, 0, driftY, 0],
                    }}
                    exit={{ opacity: 0, scale: 0.6, y: 40 }}
                    transition={{
                      opacity: { duration: 0.4, delay: i * 0.03 },
                      scale: { duration: 0.4, delay: i * 0.03 },
                      rotate: { duration: 0.4, delay: i * 0.03 },
                      x: { duration: floatDur, repeat: Infinity, ease: "easeInOut" },
                      y: { duration: floatDur + 0.8, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ scale: 1.06, rotate: p.rotate + 2 }}
                  >
                    {/* Polaroid */}
                    <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
                      <div className="bg-white p-2">
                        <div className="rounded-xl overflow-hidden bg-gray-100">
                          <img src={img?.src} alt={img?.alt || "Camp photo"} className="h-40 sm:h-44 md:h-48 w-full object-cover" />
                        </div>
                        <div className="h-6" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* If no images */}
              {uniqueImages.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-white/80">
                  No images found.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CampRollingCollageGallery;
