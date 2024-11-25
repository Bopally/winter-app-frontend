import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (token) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Serenity Mountain</h1>
      <nav>
        <button onClick={handleProfileClick}>
          {token ? "My Account" : "Login"}
        </button>
        <p>
          <Link to="/about">ABOUT</Link>
        </p>
      </nav>
      <main>
        <p>
          <Link to="/accommodation">ACCOMMODATION</Link>
        </p>
        <p>
          <Link to="/activities">ACTIVITIES</Link>
        </p>
        <p>
          <Link to="/gastronomy">GASTRONOMY</Link>
        </p>
      </main>
    </div>
  );
}

export default HomePage;
