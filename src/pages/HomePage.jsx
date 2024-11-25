// import { Link } from "react-router-dom";

// function HomePage() {
//   return (
//     <div>
//       <header>
//         <h1>Serenity Mountain</h1>

//         <nav>
//           <Link to="/login">LOGIN</Link>
//         </nav>
//       </header>
//       <main>
//         <p>
//           <Link to="/about">ABOUT</Link>
//         </p>

//         <p>
//           <Link to="/accommodation">ACCOMMODATION</Link>
//         </p>

//         <p>
//           <Link to="/activities">ACTIVITIES</Link>
//         </p>
//         <p>
//           <Link to="/gastronomy">GASTRONOMY</Link>
//         </p>
//       </main>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleProfileClick = () => {
    if (token) {
      handleLogout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>Serenity Mountain</h1>
      <nav>
        <button onClick={handleProfileClick}>
          {token ? "Logout" : "Login"}
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
