import React from "react";
import PropTypes from "prop-types";

function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <img src={image} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
const foodlILike = [
  {
    key: 1,
    name: "Potato",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcafedelites.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBaked-Potato-Wedges-IMAGE-49.jpg&f=1&nofb=1",
    rating: 4.9,
  },
  {
    key: 2,
    name: "ramen",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-R5uQo-tGPJA%2FVGUmdQ46L0I%2FAAAAAAAANTg%2F3GoTSQ8SLWE%2Fs1600%2F515.jpg&f=1&nofb=1",
    rating: 4.7,
  },
  {
    key: 3,
    name: "samgiopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gildedgingerbread.com%2Fwp-content%2Fuploads%2F2017%2F08%2FSamgyeopsal-1.jpg&f=1&nofb=1",
    rating: 8.8,
  },
  {
    key: 4,
    name: "chukumi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-z_PjxY9_V7U%2FUW3pnJz6b-I%2FAAAAAAAAANQ%2F8SOJaFB43iw%2Fs1600%2Fchukumi.jpg&f=1&nofb=1",
    rating: 2.3,
  },
];

function renderFood(dish) {
  return <Food key={dish.key} name={dish.name} image={dish.image} rating={dish.rating} />;
}

function App() {
  return <div>{foodlILike.map(renderFood)}</div>;
}

export default App;
