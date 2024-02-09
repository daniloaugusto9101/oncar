import React from "react";
import CarItem from "../CarItem/CarItem";

const CarList = ({ cars }) => {
  return (
    <>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </>
  );
};

export default CarList;
