import React from 'react';
import { useGetMenuItemsQuery } from '../redux/reducers/apiSlice';
import Loading from './Loading';
import MenuItem from './MenuItem';

const Menu = () => {
    const { data: menuItems, isLoading } = useGetMenuItemsQuery();

    return (
        <div>
            {!isLoading ? (
                menuItems.data.map((pizza) => (
                    <MenuItem pizza={pizza} key={pizza.id} />
                ))
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Menu;
