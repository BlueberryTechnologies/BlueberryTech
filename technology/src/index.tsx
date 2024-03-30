import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./Landing/Landing";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Topbar from "./Topbar/Topbar";
import "./main.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Topbar />
    <Landing />
    <Projects />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
