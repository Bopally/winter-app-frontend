import { Link } from "react-router-dom";
import HeaderFooterLayout from "../components/HeaderFooterLayout";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <HeaderFooterLayout title="Serenity Mountain">
      <main>
        <div className="row">
          <Link to="/accommodation" className="column main-link accommodation">
            <div>ACCOMMODATION</div>
          </Link>
          <Link to="/activities" className="column main-link activities">
            <div>ACTIVITIES</div>
          </Link>
        </div>
        <Link to="/gastronomy" className="full-width main-link gastronomy">
          <div>GASTRONOMY</div>
        </Link>
      </main>
    </HeaderFooterLayout>
  );
}

export default HomePage;
