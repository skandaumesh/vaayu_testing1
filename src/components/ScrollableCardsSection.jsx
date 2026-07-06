import React, { useRef, useEffect, useState } from "react";

const ScrollableCardsSection = ({ subtitle, title, buttonText, cards }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxX, setMaxX] = useState(0);

  // Calculate how far the cards can scroll horizontally
  useEffect(() => {
    const calc = () => {
      if (!containerRef.current || !trackRef.current) return;
      const viewW = containerRef.current.clientWidth * 0.66; // right 2/3
      const fullW = trackRef.current.scrollWidth;
      setMaxX(fullW - viewW);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [cards]);

  // Sync vertical scroll → horizontal translate
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const y = Math.min(Math.max(-rect.top, 0), rect.height);
      const prog = y / rect.height;
      trackRef.current.style.transform = `translateX(-${prog * maxX}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxX]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-white">
      <div className="sticky top-0 flex items-center h-screen px-6 md:px-20">
        {/* Left column */}
        <div className="w-1/3 pr-8">
          <span className="inline-block bg-blue-500 text-white uppercase text-xs px-3 py-1 rounded-full">
            {subtitle}
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight">{title}</h2>
          <button className="mt-6 inline-flex items-center bg-black text-white px-6 py-3 rounded-full">
            {buttonText}
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>

        {/* Right column: scrolling cards */}
        <div className="w-2/3 overflow-hidden">
          <div
            ref={trackRef}
            className="flex space-x-8 will-change-transform transition-transform duration-0"
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl shadow p-4 w-64 flex-shrink-0"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-40 w-full object-cover rounded-lg"
                />
                <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableCardsSection;
