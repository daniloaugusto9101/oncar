import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import CarDetails from '../pages/CarDetails/CarDetails';
import NewCar from '../pages/NewCar/NewCar';
import Finance from '../pages/Finance/Finance';
import EditCar from '../pages/EditCar';

export const router = createBrowserRouter([
    {
        path: '/oncar',
        element: <RootLayout />,

        children: [
            {
                path: '/oncar',
                element: <Home />,
            },
            {
                path: '/oncar/car/:carId',
                element: <CarDetails />,
            },
            {
                path: '/oncar/car/add',
                element: <NewCar />,
            },
            {
                path: '/oncar/car/edit/:carId',
                element: <EditCar />,
                props: true,
            },
            {
                path: '/oncar/finance',
                element: <Finance />,
            },
        ],
    },
]);
