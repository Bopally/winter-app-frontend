import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Serenity Mountain</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/accommodation">ACCOMMODATION</Link>
          </li>
          <li>
            <Link to="/activities">ACTIVITIES</Link>
          </li>
          <li>
            <Link to="/gastronomy">GASTRONOMY</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
