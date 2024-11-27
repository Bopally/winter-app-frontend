function WineMenu({ name, description, image }) {
  return (
    <div className="wine-card">
      <img src={image} alt={name} className="wine-image" />
      <h3>{name}</h3>
      <p className="menu-item">{description}</p>
    </div>
  );
}

export default WineMenu;
