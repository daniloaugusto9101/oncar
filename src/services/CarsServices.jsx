import api from "../config/http";

const getCars = async () => {
  // const recurso = "post";
  const { data } = await api.get("/posts");
  return data;
};
const getCarDetails = async (id) => {
  // const recurso = "post";
  const { data } = await api.get("/post");
  return data;
};

export default {
  getCars,
  getCarDetails,
};
