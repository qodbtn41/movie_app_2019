import React from "react";

function Food({ name }) {
  return <h1>I like {name}</h1>;
}

const foodlILike = ["Potato", "ramen", "samgiopsal", "chukumi"];

function App() {
  return (
    <div className="App">
      {foodlILike.map((food) => (
        <Food name={food} />
      ))}
    </div>
  );
}

export default App;
