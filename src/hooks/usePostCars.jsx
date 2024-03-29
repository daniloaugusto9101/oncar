import React from "react";
import CarsServices from "../services/CarsServices";
import { GlobalCars } from "../storage/GlobalCars";

const usePostCar = () => {
  // const { cars, setCars } = React.useContext(GlobalCars);
  const [cars, setCars] = React.useState([]);

  const postCar = (car) => {
    return CarsServices.postCar(car)
      .then((response) => {
        setCars(response.data);
        console.log("chamou post");
      })
      .catch((error) => {
        console.error(`Ocorreu um erro: ${error}`);
      });
  };

  return { postCar };
};

export default usePostCar;
