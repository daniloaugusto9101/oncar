import React from "react";
import CarsServices from "../services/CarsServices";

const usePostCar = () => {
  const postCar = async (car) => {
    try {
      const response = await CarsServices.postCar(car);
      return response;
    } catch (error) {
      console.error(`Ocorreu um erro: ${error}`);
    }
  };

  return { postCar };
};

export default usePostCar;
