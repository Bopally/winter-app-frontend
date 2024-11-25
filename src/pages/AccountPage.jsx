import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstructorDashboard from "../components/InstructorDashboard";

function Account() {
  // State to store the authentication token
  const [token, setToken] = useState(null);
  // State to restrict the role to instructors only
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);

      try {
        // Decode the token to extract the user's role
        const payload = JSON.parse(atob(storedToken.split(".")[1]));
        setRole(payload.role);
      } catch (error) {
        console.error("Error decoding token", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Logout functionality
  const handleLogout = () => {
    // Remove the token from localStorage and redirect to the home page
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div>
      <h1>Account Page</h1>
      <p>
        Welcome to your account. Here you can manage your personal information
        and settings.
      </p>
      {/* Render the Instructor Dashboard only if the user is an instructor */}
      {token && role === "SkiInstructor" && (
        <InstructorDashboard token={token} />
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
