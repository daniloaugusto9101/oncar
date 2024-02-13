import React from "react";
import CarsServices from "../services/CarsServices";

const usePostCar = () => {
  const [message, setMessage] = React.useState(false);

  const postCar = (car) => {
    return CarsServices.postCar(car)
      .then((response) => {
        setMessage(true);
        return response;
      })
      .catch((error) => {
        console.error(`Ocorreu um erro: ${error}`);
        setMessage(false);
      });
  };

  return { postCar, message, setMessage };
};

export default usePostCar;
