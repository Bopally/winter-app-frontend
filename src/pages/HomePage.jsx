import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/account");
  };

  return (
    <div>
      <nav>
        <p>
          <Link to="/about">ABOUT</Link>
        </p>
        <div className="dropdown">
          <button className="dropbtn">
            {token ? "My Account" : "Connexion"}
          </button>
          <div className="dropdown-content">
            {!token ? (
              <>
                <Link to="/login">Sign Up</Link>
                <Link to="/create-account">Create an Account</Link>
              </>
            ) : (
              <>
                <button onClick={handleProfileClick}>My Account</button>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </nav>
      <header>
        <h1>Serenity Mountain</h1>
      </header>

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
    </div>
  );
}

export default HomePage;
