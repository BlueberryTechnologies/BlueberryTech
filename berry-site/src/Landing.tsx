import { useState } from "react";
import blueberryLogo from "../data/Images/logotransparent.png";
import githubLogo from "./assets/github-mark-white.svg";
import "./Landing.css";

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://blueberry.dev" target="_blank">
          <img src={blueberryLogo} className="logo" alt="Blueberry logo" />
        </a>
      </div>
      <h1 className="header">Blueberry Technologies</h1>
      <div className="card">
        <button>
          <a href="https://github.com/BlueberryTechnologies" target="_blank">
            <img src={githubLogo} className="githubLogo"></img>
          </a>
        </button>
      </div>
      <p className="read-the-docs">© 2024 Blueberry Technologies</p>
    </>
  );
}

export default Landing;
