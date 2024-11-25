import SkiActivity from "../components/SkiActivity";
import ExcursionActivity from "../components/ExcursionActivity";
import ThermalBathsActivity from "../components/ThermalBathsActivity";
import KidsActivities from "../components/KidsActivities";

function Activities() {
  return (
    <div>
      <h1>ACTIVITIES</h1>

      <SkiActivity />
      <ExcursionActivity />
      <ThermalBathsActivity />
      <KidsActivities />
    </div>
  );
}

export default Activities;
