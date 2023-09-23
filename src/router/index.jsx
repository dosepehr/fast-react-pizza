import { createBrowserRouter } from 'react-router-dom';
import {
    Cart,
    CreateOrder,
    Home,
    MainLayout,
    Menu,
    Order,
} from '../components';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/order/new',
                element: <CreateOrder />,
            },
            {
                path: '/order/:id',
                element: <Order />,
            },
        ],
    },
]);
