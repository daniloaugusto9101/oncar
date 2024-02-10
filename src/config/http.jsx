import axios from "axios";
// import env from "./env";

const api = axios.create({
  baseURL: "https://oncar-api-cyan.vercel.app/api/v1",
});

export default api;
