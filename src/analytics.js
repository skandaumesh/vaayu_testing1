// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  if (!window.__GA_INITIALIZED__) {
    ReactGA.initialize("G-ZBYG8VX7R3"); // your GA4 ID
    window.__GA_INITIALIZED__ = true;
  }
};

export const sendPageview = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
