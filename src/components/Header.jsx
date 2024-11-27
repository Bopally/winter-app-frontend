import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
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
              <Link to="/login">Sign In</Link>
              <Link to="/create-account">Join Us</Link>
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
  );
}

export default Header;
