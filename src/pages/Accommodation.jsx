import hotelRoomsData from "../../public/data/hotelRooms.json";
import HeaderFooterLayout from "../components/HeaderFooterLayout";
import "../styles/Accommodation.css";

function Accommodation() {
  const handleImageClick = (index) => {
    const element = document.getElementById(`room-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderFooterLayout title="Accomodation">
      <div className="accommodation-page">
        <h2>Discover our rooms and suites</h2>
        <div className="room-gallery">
          {hotelRoomsData.rooms.map((room, index) => (
            <div key={index} className="room-card">
              <img
                src={room.image}
                alt={room.type}
                className="room-image"
                onClick={() => handleImageClick(index)}
              />
              <div className="room-type">{room.type}</div>
            </div>
          ))}
        </div>
        <div className="room-descriptions">
          {hotelRoomsData.rooms.map((room, index) => (
            <div key={index} id={`room-${index}`} className="room-description">
              <h3>{room.type}</h3>
              <p>{room.description}</p>
              <ul>
                {room.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </HeaderFooterLayout>
  );
}

export default Accommodation;
