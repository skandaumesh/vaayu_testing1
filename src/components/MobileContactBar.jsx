// Persistent Call / WhatsApp / Book bar, mobile only.
//
// Most visitors arrive on a phone, mid-symptom, from a search result deep in
// the site. Previously they had to scroll back to the header or hunt for a
// contact link, and WhatsApp existed on only a handful of pages. This keeps all
// three actions one tap away everywhere.
//
// Clicks are picked up by the delegated listener in src/analytics/track.js;
// data-cta-location tags them so this bar can be compared against the header
// and footer in GA4.
import { useLocation } from "react-router-dom";

const PHONE = "+916364928680";
const WHATSAPP = "916364928680";

// A message prefilled with the page context, so the front desk knows what the
// enquiry is about before replying.
const whatsappMessage = (pathname) => {
  const topic = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/[-_]+/g, " ");
  return topic
    ? `Hi Vaayu, I would like to know more about ${topic}.`
    : "Hi Vaayu, I would like to book an appointment.";
};

export default function MobileContactBar() {
  const { pathname } = useLocation();
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage(pathname))}`;

  return (
    <>
      <style>{`
        .mcb {
          position: fixed;
          left: 0; right: 0; bottom: 0;
          z-index: 1200;
          display: none;
          background: #ffffff;
          border-top: 1px solid #e2e8d8;
          box-shadow: 0 -6px 24px rgba(47,54,26,.14);
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
        .mcb-inner { display: grid; grid-template-columns: repeat(3, 1fr); }
        .mcb a {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 3px; padding: 9px 4px 8px;
          font-size: 12px; font-weight: 700; letter-spacing: .01em;
          text-decoration: none; color: #3d4a2c;
          border-right: 1px solid #eef1e8;
          min-height: 54px;
          -webkit-tap-highlight-color: transparent;
        }
        .mcb a:last-child { border-right: none; }
        .mcb a:active { background: #f4f6ee; }
        .mcb a:focus-visible { outline: 2px solid #b48a2c; outline-offset: -2px; }
        .mcb svg { width: 19px; height: 19px; }
        .mcb .mcb-book { background: #61724e; color: #fff; }
        .mcb .mcb-book:active { background: #55643f; }
        .mcb .mcb-wa { color: #1f7a4d; }

        @media (max-width: 860px) {
          .mcb { display: block; }
          /* keep the bar from covering the end of the page */
          body { padding-bottom: 54px; }
        }
        @media print { .mcb { display: none; } }
      `}</style>

      <div className="mcb" role="region" aria-label="Contact Vaayu">
        <div className="mcb-inner">
          <a href={`tel:${PHONE}`} data-cta-location="mobile_bar" aria-label="Call Vaayu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </a>

          <a href={waHref} className="mcb-wa" target="_blank" rel="noopener noreferrer"
             data-cta-location="mobile_bar" aria-label="Message Vaayu on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
            </svg>
            WhatsApp
          </a>

          <a href="/appointment" className="mcb-book" data-cta-location="mobile_bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book
          </a>
        </div>
      </div>
    </>
  );
}
