import { createBrowserRouter } from 'react-router-dom';
import { Cart, CreateOrder, Home, Menu, Order } from '../components';

export const router = createBrowserRouter([
    {
        path: '/',
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
]);
