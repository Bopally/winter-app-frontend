import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstructorDashboard from "../components/InstructorDashboard";
import HeaderFooterLayout from "../components/HeaderFooterLayout";

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

  return (
    <HeaderFooterLayout title="My Account">
      <div>
        {/* Render the Instructor Dashboard only if the user is an instructor */}
        {token && role === "SkiInstructor" && (
          <InstructorDashboard token={token} />
        )}
      </div>
    </HeaderFooterLayout>
  );
}

export default Account;
