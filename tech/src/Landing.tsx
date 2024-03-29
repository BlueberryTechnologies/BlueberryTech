import { Link, Typography } from "@mui/material";
import blueberryLogo from "./assets/Images/ImageFiles/logotransparent.png";
import githubLogo from "./assets/Images/SVG/github-mark-white.svg";
import "./assets/CSS/Landing.css";

function Landing() {
  return (
    <>
      <div>
        <Link href="https://blueberry.dev" target="_blank">
          <img src={blueberryLogo} className="logo" alt="Blueberry logo" />
        </Link>
      </div>
      <Typography variant="h1">Blueberry Technologies</Typography>
      <div className="card">
        <button>
          <Link href="https://github.com/BlueberryTechnologies" target="_blank">
            <img src={githubLogo} className="githubLogo"></img>
          </Link>
        </button>
      </div>
      <Typography className="read-the-docs">
        © 2024 Blueberry Technologies
      </Typography>
    </>
  );
}

export default Landing;
