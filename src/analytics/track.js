// Conversion tracking for GA4.
//
// Until now the only thing sent to GA4 was a pageview, so the enquiries the
// clinic actually cares about (phone calls, WhatsApp messages, appointment
// requests, direction lookups) were invisible and no channel could be shown to
// work.
//
// Contact links are scattered across ~14 components, so rather than editing
// every call site this attaches one delegated listener to the document. Any
// tel:, wa.me, mailto: or maps link anywhere in the app is captured, including
// ones added later.

export const GA_ID = "G-ZBYG8VX7R3";

export const trackEvent = (name, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    page_path: window.location.pathname,
    ...params,
  });
};

// Where in the page the click happened, so we can tell a header call button
// from a footer one from the sticky mobile bar.
const ctaLocation = (el) => {
  const explicit = el.closest("[data-cta-location]");
  if (explicit) return explicit.getAttribute("data-cta-location");
  if (el.closest("header, nav")) return "header";
  if (el.closest("footer")) return "footer";
  return "page";
};

const classify = (href) => {
  const h = href.toLowerCase();
  if (h.startsWith("tel:")) return "call_click";
  if (h.includes("wa.me") || h.includes("api.whatsapp.com") || h.startsWith("whatsapp:"))
    return "whatsapp_click";
  if (h.startsWith("mailto:")) return "email_click";
  if (h.includes("google.com/maps") || h.includes("goo.gl/maps") || h.includes("maps.app.goo.gl"))
    return "directions_click";
  // Intent to book, wherever the button lives. The booking itself is captured
  // separately by form_submit on the appointment form.
  if (h === "/appointment" || h.endsWith("vaayuchest.com/appointment"))
    return "appointment_cta_click";
  return null;
};

let attached = false;

export const initConversionTracking = () => {
  if (attached || typeof document === "undefined") return;
  attached = true;

  document.addEventListener(
    "click",
    (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const event = classify(href);
      if (!event) return;

      trackEvent(event, {
        cta_location: ctaLocation(link),
        link_url: href,
        link_text: (link.textContent || "").trim().slice(0, 80),
      });
    },
    // Capture phase: fires even if a handler on the link stops propagation.
    true
  );

  // Any form submission counts as an enquiry. Forms are identified by an
  // explicit data-form-name where present, otherwise by their id or action.
  document.addEventListener(
    "submit",
    (e) => {
      const form = e.target;
      if (!(form instanceof HTMLFormElement)) return;
      const name =
        form.getAttribute("data-form-name") ||
        form.getAttribute("id") ||
        form.getAttribute("name") ||
        "unnamed_form";
      trackEvent("form_submit", { form_name: name });
    },
    true
  );
};
