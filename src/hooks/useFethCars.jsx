import React from "react";
import CarsServices from "../services/CarsServices";

const useFethCars = () => {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    CarsServices.getCars()
      .then((resp) => {
        setCars(resp);
      })
      .catch((erro) => {
        console.error("Algo deu errado: ", erro);
      });
  }, []);

  return cars;
};

export default useFethCars;
