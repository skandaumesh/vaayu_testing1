import React from 'react';

/**
 * OverlayScrollableSection
 * Renders a full-width block on top of a background image,
 * with a dark overlay and a scrollable content pane.
 *
 * Props:
 *  - backgroundImage: URL or imported image
 *  - title:           string (main heading)
 *  - subtitle:        string (optional, e.g. date/time)
 *  - content:         array of strings or React nodes
 *  - height:          CSS value for height (default: '60vh')
 */
export default function OverlayScrollableSection({
  backgroundImage,
  title,
  subtitle,
  content,
  height = '60vh',
}) {
  return (
    <div
      className="w-full relative flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-50" />

      {/* Content container */}
      <div
        className="relative z-10 max-w-4xl w-full flex flex-col p-6"
        style={{ height }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="mb-4">{subtitle}</p>}

        <div className="flex-1 overflow-y-auto text-left">
          {content.map((item, idx) => (
            <p key={idx} className="mb-2">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
