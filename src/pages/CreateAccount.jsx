import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === "student" ? "/students" : "/instructors";
      const data =
        role === "student"
          ? { name, email, password }
          : { name, email, password, picture, description, experience }; // Inclure email et password

      console.log("Data being sent:", data); // Log des données envoyées

      const response = await axios.post(
        `http://localhost:5000${endpoint}`,
        data
      );
      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error creating account", error);
      alert("There was an issue creating your account. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        {role === "instructor" && (
          <>
            <div>
              <label>Picture URL:</label>
              <input
                type="text"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Experience (years):</label>
              <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
