import ThermalBaths from "../assets/data/thermalBaths.json";

function ThermalBathsActivity() {
  return (
    <div>
      <div className="activity">
        <h3>{ThermalBaths.name}</h3>
        <p>{ThermalBaths.description}</p>
        <p>
          <strong>Duration:</strong> {ThermalBaths.duration}
        </p>
        <p>
          <strong>Price:</strong> {ThermalBaths.price}
        </p>
        <ul>
          {ThermalBaths.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThermalBathsActivity;
