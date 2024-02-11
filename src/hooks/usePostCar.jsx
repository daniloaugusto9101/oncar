import React from "react";
import CarsServices from "../services/CarsServices";

const usePostCar = (car) => {
  const postCar = async (car) => {
    try {
      const response = await CarsServices.postCar(car);
      return response;
    } catch (error) {
      console.error(`An error occurred while posting the car: ${error}`);
      throw error;
    }
  };

  return postCar;
};

export default usePostCar;
