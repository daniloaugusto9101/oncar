import React from "react";
import CarsServices from "../services/CarsServices";

const useFethCars = () => {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    CarsServices.getCars()
      .then((resp) => {
        setCars(resp);
        console.log("Chamou useFetchCars");
      })
      .catch((err) => {
        console.error(`Algo deu errado: ${err}`);
      });
  }, []);

  return cars;
};

export default useFethCars;
