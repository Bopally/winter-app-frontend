import { useState, useEffect } from "react";

function ThermalBathsActivity() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch("/data/thermalBaths.json")
      .then((response) => response.json())
      .then((data) => setActivity(data))
      .catch((error) =>
        console.error("Error fetching thermal bath data:", error)
      );
  }, []);

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="activity">
        <h3>{activity.name}</h3>
        <p>{activity.description}</p>
        <p>
          <strong>Duration:</strong> {activity.duration}
        </p>
        <p>
          <strong>Price:</strong> {activity.price}
        </p>
        <ul>
          {activity.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThermalBathsActivity;
