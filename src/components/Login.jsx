import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate(); // redirect to the home page when login is successful

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/auth/login/${role}`,
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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
