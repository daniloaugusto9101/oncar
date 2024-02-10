import api from "../config/http";

const getCars = async () => {
  // const recurso = "post";
  const { data } = await api.get("/cars");
  return data;
};
const getCarDetails = async (id) => {
  // const recurso = "post";
  const { data } = await api.get(`/cars${id}`);
  return data;
};

export default {
  getCars,
  getCarDetails,
};
