import { useNavigate } from "react-router-dom";

import homeIconForm from "../styles/Images/HomeButtonForm.png";

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <img
      src={homeIconForm}
      alt="Home"
      title="Go back to HomePage"
      onClick={handleClick}
      className="home-icon-form"
      style={{ cursor: "pointer", width: "50px", height: "50px" }}
    />
  );
}

export default HomeButton;
