import React from "react";
import { useGetMenuItemsQuery } from "../redux/reducers/apiSlice";
import Loading from "./Loading";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { data: menuItems, isLoading } = useGetMenuItemsQuery();

  return (
    <ul className="divide-y divide-stone-200 px-1 sm:px-10">
      {!isLoading ? (
        menuItems.data.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)
      ) : (
        <Loading />
      )}
    </ul>
  );
};

export default Menu;
