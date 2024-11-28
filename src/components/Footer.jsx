import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function Footer() {
  return (
    <footer>
      <p>
        <Link to="/about">ABOUT</Link>
      </p>
      <p>
        <a
          href="https://github.com/Bopally"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
