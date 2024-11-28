import { Link } from "react-router-dom";
import HeaderFooterLayout from "../components/HeaderFooterLayout";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <HeaderFooterLayout title="Serenity Mountain">
      <main>
        <div className="row">
          <div className="column main-link accommodation">
            <Link to="/accommodation">ACCOMMODATION</Link>
          </div>
          <div className="column main-link activities">
            <Link to="/activities">ACTIVITIES</Link>
          </div>
        </div>
        <div className="full-width main-link gastronomy">
          <Link to="/gastronomy">GASTRONOMY</Link>
        </div>
      </main>
    </HeaderFooterLayout>
  );
}

export default HomePage;
