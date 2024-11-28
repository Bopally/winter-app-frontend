import { Link } from "react-router-dom";

import githubIcon from "../styles/Images/Github-icon.png";
import linkedinIcon from "../styles/Images/Linkedin-icon.png";

import "../styles/HomePage.css";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-link">
          <Link to="/about">Learn more about us!</Link>
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-icons">
          <a
            href="https://github.com/Bopally"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ballot-estelle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
        <p className="footer-link privacy-link">
          <Link to="/not-found">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
