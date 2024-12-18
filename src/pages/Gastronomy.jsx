import HeaderFooterLayout from "../components/HeaderFooterLayout";
import Restaurant from "../components/Restaurant";
import WineMenu from "../components/WineMenu";
import gastronomyData from "../assets/data/gastronomy.json";
import "../styles/Gastronomy.css";

function Gastronomy() {
  const { description } = gastronomyData.restaurants[0];

  return (
    <HeaderFooterLayout title="Gastronomy">
      <div className="gastronomy-page">
        <h2>Serenity Peaks</h2>
        <p>{description}</p>
        <section className="restaurants">
          {gastronomyData.restaurants.map((restaurant, index) => (
            <Restaurant key={index} {...restaurant} />
          ))}
        </section>
        <section className="wines">
          {gastronomyData.wines.map((wine, index) => (
            <WineMenu key={index} {...wine} />
          ))}
        </section>
      </div>
    </HeaderFooterLayout>
  );
}

export default Gastronomy;
