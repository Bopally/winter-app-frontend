import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";

import "../styles/Form.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate(); // redirect to the home page when login is successful

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login/${role}`,
        {
          email,
          password,
        }
      );
      onLogin(response.data.token);
      alert("Login successful!");
      navigate("/", { state: { message: "Login successful!" } });
    } catch (error) {
      console.error("Login error", error);
      alert("Invalid credentials, try again");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Welcome back </h2>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div>
          <label>Select your Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-select"
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
        <HomeButton />
      </form>
    </div>
  );
}

export default Login;
