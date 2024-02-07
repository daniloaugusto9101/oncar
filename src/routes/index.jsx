import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Cars from "../pages/Cars/Cars"

export const router = createBrowserRouter([
  {
    path: "/oncar",
    element: <RootLayout />,
    children: [
      {
        path: "/oncar/cars",
        element: <Cars />,
      },
    ],
  },
])
