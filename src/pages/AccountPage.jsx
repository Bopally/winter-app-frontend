import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const handleLogout = () => {
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
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
