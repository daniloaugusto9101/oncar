import React from "react";
import CarsServices from "../services/CarsServices";
import { GlobalCars } from "../storage/GlobalCars";

const useDeleteCars = () => {
  const [cars, setCars] = React.useState([]);

  const delCar = (idCar) => {
    return CarsServices.deleteCar(idCar)
      .then((response) => {
        setCars(response.data);
        console.log("chamou delete");
      })
      .catch((error) => {
        console.error(`Ocorreu um erro: ${error}`);
      });
  };

  return { delCar };
};

export default useDeleteCars;
