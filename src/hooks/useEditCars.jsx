import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarsServices from '../services/CarsServices';

const useEditCars = () => {
    const [cars, setCars] = React.useState([]);
    const navigate = useNavigate(); // Hook para navegação

    const editCar = (idCar, updatedCarData) => {
        return CarsServices.editCar(idCar, updatedCarData)
            .then((response) => {
                setCars((prevCars) => {
                    return prevCars.map((car) =>
                        car.id === idCar ? response.data : car
                    );
                });
                alert('Carro editado com sucesso');
                navigate('/oncar'); // Redireciona para /oncar após a edição
            })
            .catch((error) => {
                console.error(`Ocorreu um erro ao editar o carro: ${error}`);
            });
    };

    return { editCar };
};

export default useEditCars;
