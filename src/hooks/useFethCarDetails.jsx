import React from "react";
import CarsServices from "../services/CarsServices";

const useFethCarDetails = (idCar) => {
  const [car, setCar] = React.useState({});

  React.useEffect(() => {
    CarsServices.getCarDetails(idCar)
      .then((resp) => {
        setCar(resp);
      })
      .catch((err) => {
        console.error(`Algo deu errado: ${err}`);
      });
  }, [idCar]);

  return car;
};

export default useFethCarDetails;
