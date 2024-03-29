import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "../Landing/Landing.tsx";
import Projects from "../Projects/Projects.tsx";
import Footer from "../Footer/Footer.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Landing />
    <Projects />
    <Footer />
  </React.StrictMode>
);
