import React from "react";
import CarsServices from "../services/CarsServices";

const useFethCars = (refreshKey) => {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    CarsServices.getCars()
      .then((resp) => {
        setCars(resp);
      })
      .catch((err) => {
        console.error(`Algo deu errado: ${err}`);
      });
  }, [refreshKey]);

  return cars;
};

export default useFethCars;
