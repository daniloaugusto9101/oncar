import React from "react";
import useFethCars from "../../hooks/useFethCars";

const Home = () => {
  const cars = useFethCars();

  if (cars) {
    return (
      <main>
        <h1>Home</h1>
        {cars.map((obj, i) => (
          <p key={i}>{obj.title}</p>
        ))}
      </main>
    );
  }
};

export default Home;
