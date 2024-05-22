import React from 'react';
import CarsServices from '../services/CarsServices';
import { GlobalCars } from '../storage/GlobalCars';

const useFetchCars = () => {
    const { cars, setCars } = React.useContext(GlobalCars);

    const fetchCars = () => {
        CarsServices.getCars()
            .then((resp) => {
                setCars(resp);
            })
            .catch((err) => {
                console.error(`Algo deu errado: ${err}`);
            });
    };

    React.useEffect(() => {
        fetchCars();
    }, [setCars]);

    return { cars, fetchCars };
};

export default useFetchCars;
