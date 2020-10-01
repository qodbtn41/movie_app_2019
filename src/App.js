import React from "react";

function Food({ name }) {
  return <h1>I like {name}</h1>;
}
function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
      <Food name="Potato" />
      <Food name="ramen" />
      <Food name="samgiopsal" />
      <Food name="chukumi" />
    </div>
  );
}

export default App;
