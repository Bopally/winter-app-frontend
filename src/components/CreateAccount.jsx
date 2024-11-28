import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";

import "../styles/Form.css";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === "student" ? "/students" : "/instructors";
      const data =
        role === "student"
          ? { name, email, password }
          : { name, email, password, picture, description, experience };

      console.log("Data being sent:", data);

      // const response = await axios.post(
      // `http://localhost:5000${endpoint}`,
      // data
      // );

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}${endpoint}`,
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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {role === "instructor" && (
          <>
            <div>
              <input
                type="text"
                placeholder="Picture URL"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
                className="form-input"
              />
            </div>
            <div>
              <textarea
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div>
              <label>Years of Experience:</label>
              <input
                type="number"
                min="0"
                max="50"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
                className="form-input"
              />
            </div>
          </>
        )}
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
          Create Account
        </button>
        <HomeButton />
      </form>
    </div>
  );
}

export default CreateAccount;
