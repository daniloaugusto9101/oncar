import React from "react";
import useFethCars from "../../hooks/useFethCars";

const Home = () => {
  const cars = useFethCars();

  if (cars) {
    return (
      <div>
        <h1>Home</h1>
        {cars.map((obj, i) => (
          <p key={i}>{obj.title}</p>
        ))}
      </div>
    );
  }
};

export default Home;
