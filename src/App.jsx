import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccountPage";
import Account from "./pages/AccountPage";
import About from "./pages/AboutPage";
import Accommodation from "./pages/Accommodation";
import Activities from "./pages/Activities";
import Gastronomy from "./pages/Gastronomy";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gastronomy" element={<Gastronomy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
