import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";

function Header({ title }) {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header>
      <nav>
        <HomeButton />
        <div className="dropdown">
          <button className="dropbtn">
            {token ? "My Account" : "Connexion"}
          </button>
          <div className="dropdown-content">
            {!token ? (
              <>
                <Link to="/login">Sign In</Link>
                <Link to="/create-account">Join Us</Link>
              </>
            ) : (
              <>
                <Link to="/account">My Account</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </nav>
      <div>
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default Header;
