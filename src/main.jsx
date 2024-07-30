import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
  easing: "ease-in-out",

  mirror: true,

  offset: 120,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
