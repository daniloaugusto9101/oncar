import api from "../config/http";

const getCars = async () => {
  const { data } = await api.get("/cars");
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

export default {
  getCars,
  getCarDetails,
  postCar,
  deleteCar,
};
