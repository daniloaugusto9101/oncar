import axios from "axios";
// import env from "./env";

// const defaultEnv = env.production.theMovieDBToken;
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  //   headers: {
  //     Authorization: `Bearer ${defaultEnv}`,
  //   },
});

export default api;
