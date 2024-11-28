import Snowfall from "react-snowfall";
import "../styles/NotFound.css";
import HomeButton from "../components/HomeButton";

function NotFound() {
  return (
    <div className="not-found-page">
      <Snowfall color="white" snowflakeCount={200} />
      <div className="not-found-container">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <HomeButton />
      </div>
    </div>
  );
}
export default NotFound;
