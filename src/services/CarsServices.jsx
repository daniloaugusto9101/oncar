import api from '../config/http';

const getCars = async () => {
    const { data } = await api.get('/cars');
    return data;
};
const getCarDetails = async (id) => {
    const { data } = await api.get(`/cars/${id}`);
    return data;
};

const postCar = async (car) => {
    const { data } = await api.post(`/cars/`, car);
    return data;
};

const deleteCar = async (idCar) => {
    const { data } = await api.delete(`/cars/${idCar}`);
    return data;
};

const postFinance = async (cliente) => {
    const { data } = await api.post(`/cars/finance`, cliente);
    return data;
};

const editCar = async (idCar, updatedCarData) => {
    const { data } = await api.put(`/cars/${idCar}`, updatedCarData);
    return data;
};

export default {
    getCars,
    getCarDetails,
    postCar,
    deleteCar,
    postFinance,
    editCar,
};
