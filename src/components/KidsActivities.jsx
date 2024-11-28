import kidsActivitiesData from "../assets/data/kidsActivities.json";

function KidsActivities() {
  return (
    <div>
      <p>{kidsActivitiesData.description}</p>
      <div className="activities-container-kids">
        {kidsActivitiesData.activities.map((activity, index) => (
          <div key={index} className="activity">
            <h3>{activity.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsActivities;
