import { useState, useEffect } from "react";

function KidsActivities() {
  const [kidsActivities, setkidsActivities] = useState(null);

  useEffect(() => {
    fetch("/data/kidsActivities.json")
      .then((response) => response.json())
      .then((data) => setkidsActivities(data.kidsActivities))
      .catch((error) =>
        console.error("Error fetching kids activities data:", error)
      );
  }, []);

  if (!kidsActivities) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{kidsActivities.description}</p>
      <div className="activities-container-kids">
        {kidsActivities.activities.map((activity, index) => (
          <div key={index} className="activity">
            <h3>{activity.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidsActivities;
