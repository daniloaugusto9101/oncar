import React from "react";
import CarsServices from "../../services/CarsServices";

const Home = () => {
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

  if (cars) {
    return (
      <div>
        <h1>Home</h1>
        {cars.map((obj, i) => (
          <p key={i}>{obj.title}</p>
        ))}
      </div>
    );
  }
};

export default Home;
