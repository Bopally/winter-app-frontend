import excursionData from "../assets/data/excursions.json";

function ExcursionActivity() {
  return (
    <div>
      <div className="card-container">
        {excursionData.excursionActivities.map((activity, index) => (
          <div key={index} className="card">
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>
              <strong>Level:</strong> {activity.level}
            </p>
            <p>
              <strong>Duration:</strong> {activity.duration}
            </p>
            <p>
              <strong>Price:</strong> {activity.price}
            </p>
            <ul>
              {activity.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExcursionActivity;
