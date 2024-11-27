import { useState } from "react";
import Login from "../components/Login";

function LoginPage() {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);

  const handleLogin = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem("authToken", jwtToken);
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
      {token && <p>Login successful!</p>}
    </div>
  );
}

export default LoginPage;
