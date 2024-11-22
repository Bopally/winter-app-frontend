import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Accommodation from "./pages/Accommodation";
import Activities from "./pages/Activities";
import Gastronomy from "./pages/Gastronomy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gastronomy" element={<Gastronomy />} />
      </Routes>
    </div>
  );
}

export default App;
