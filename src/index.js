import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import logoFavicon from "./assets/logo.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// set favicon to bundled logo
const setFavicon = (href) => {
  try {
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = href;
  } catch (e) {
    // silently ignore in non-browser environments
  }
};
setFavicon(logoFavicon);
// create a circular favicon by drawing the image into a canvas and using its data URL
const setCircularFavicon = (imgHref, size = 64) => {
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        // Draw circular clip
        ctx.save();
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        // Draw image covering the canvas
        ctx.drawImage(img, 0, 0, size, size);
        ctx.restore();
        const dataUrl = canvas.toDataURL('image/png');
        setFavicon(dataUrl);
      } catch (e) {
        // fallback to original href
        setFavicon(imgHref);
      }
    };
    img.onerror = () => {
      // fallback
      setFavicon(imgHref);
    };
    img.src = imgHref;
    // If the image is cached and already complete, trigger onload manually
    if (img.complete) img.onload();
  } catch (e) {
    setFavicon(imgHref);
  }
};

setCircularFavicon(logoFavicon);
