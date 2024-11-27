function Restaurant({ name, image, menu }) {
  return (
    <div className="restaurant">
      <img src={image} alt={name} className="restaurant-image" />
      <h3>{name}</h3>
      <div className="menu">
        {menu.map((menuItem, index) => (
          <div key={index} className="menu-item">
            <h4>
              {menuItem.name} - {menuItem.price}
            </h4>
            <ul>
              {menuItem.dishes.map((dish, idx) => (
                <li key={idx}>
                  <strong>{dish.dish}:</strong> {dish.description}
                </li>
              ))}
            </ul>
            {menuItem.wine_pairing && (
              <p>
                <em>
                  {menuItem.wine_pairing.option} - {menuItem.wine_pairing.price}
                </em>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
