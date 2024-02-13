import React from "react";
import CarItem from "../CarItem/CarItem";

const CarList = ({ cars }) => {
  return (
    <>
      {cars.map((car, id) => (
        <CarItem key={id} car={car} />
      ))}
    </>
  );
};

export default CarList;
