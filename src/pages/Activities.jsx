import React, { useState } from "react";
import SkiActivity from "../components/SkiActivity";
import ExcursionActivity from "../components/ExcursionActivity";
import ThermalBathsActivity from "../components/ThermalBathsActivity";
import KidsActivities from "../components/KidsActivities";
import Login from "../components/Login";

function Activities() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const handleLogin = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem("authToken", jwtToken);
  };

  return (
    <div>
      <h1>ACTIVITIES</h1>
      <Login onLogin={handleLogin} />
      {/* Login system for the activities Student and Instructors*/}
      <SkiActivity token={token} />
      <ExcursionActivity />
      <ThermalBathsActivity />
      <KidsActivities />
    </div>
  );
}

export default Activities;
