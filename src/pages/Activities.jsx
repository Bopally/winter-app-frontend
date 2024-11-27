import SkiActivity from "../components/SkiActivity";
import ExcursionActivity from "../components/ExcursionActivity";
import ThermalBathsActivity from "../components/ThermalBathsActivity";
import KidsActivities from "../components/KidsActivities";
import HeaderFooterLayout from "../components/HeaderFooterLayout";

import "../styles/Activities.css";

function Activities() {
  return (
    <HeaderFooterLayout>
      <div className="container">
        <h1>ACTIVITIES</h1>

        <div className="activity-section ski-activity">
          <h2 className="activity-title">Ski Activities</h2>
          <SkiActivity />
        </div>

        <div className="activity-section">
          <h2 className="activity-title">Excursion Activity</h2>
          <ExcursionActivity />
        </div>

        <div className="activity-section">
          <h2 className="activity-title">Thermal Baths Activity</h2>
          <div className="card">
            <ThermalBathsActivity />
          </div>
        </div>

        <div className="activity-section">
          <h2 className="activity-title">Kids Activities</h2>
          <div className="card">
            <KidsActivities />
          </div>
        </div>
      </div>
    </HeaderFooterLayout>
  );
}

export default Activities;
