import { useNavigate } from "react-router-dom";

import homeIcon from "../styles/Images/HomeButton.png";

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <img
      src={homeIcon}
      alt="Home"
      title="Go back to HomePage"
      onClick={handleClick}
      className="home-icon"
      style={{ cursor: "pointer", width: "50px", height: "50px" }}
    />
  );
}

export default HomeButton;
