import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails/CarDetails";

export const router = createBrowserRouter([
  {
    path: "/oncar",
    element: <RootLayout />, //rota base da aplicação

    // Toas as rotas configuradas aqui são renderizadas no outlet
    children: [
      {
        path: "/oncar",
        element: <Home />,
      },
      {
        path: "/oncar/car/:carId",
        element: <CarDetails />,
      },
    ],
  },
]);
