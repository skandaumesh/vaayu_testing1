// Route-level SEO for client-side navigation. The first paint of every route
// is already correct: scripts/gen-seo-pages.mjs prerenders a static shell per
// route with the right title, description and canonical baked in. This keeps
// them correct as the user navigates within the SPA.
//
// Metadata lives in src/seo/routeMeta.js so the build script and the runtime
// cannot drift apart.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE, BRAND, SKIP, META, slugToTitle } from "../seo/routeMeta";


const upsertMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const key = (pathname.replace(/\/+$/, "") || "/").toLowerCase();
    if (SKIP.includes(key)) return;

    const m = META[key];
    if (m) {
      document.title = m.t;
      upsertMeta("description", m.d);
    } else {
      document.title = `${slugToTitle(key)} | ${BRAND}`;
    }
    upsertCanonical(`${BASE}${key === "/" ? "/" : key}`);
  }, [pathname]);

  return null;
}
