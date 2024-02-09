import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { carId } = useParams();
  return <div>CarDetails id recebido: {carId}</div>;
};

export default CarDetails;
