import React from "react";
import { formatCurrency } from "../helpers/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getQtyById } from "../redux/reducers/cartSlice";
import ItemQty from "./itemQty";
import Button from "./Button";
const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQty = useSelector((state) => getQtyById(state, id));
  const handleAddToCart = () => {
    dispatch(addToCart({ ...pizza, qty: 1 }));
  };
  return (
    <li className="flex gap-x-4 py-2">
      <div>
        <img
          src={imageUrl}
          alt={name}
          className={`h-24 w-24 ${soldOut && "opacity-70 grayscale"}`}
        />
      </div>
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex w-full items-center justify-between">
          <div>
            {!soldOut ? (
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
            ) : (
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            )}
          </div>
          {!soldOut &&
            (!currentQty > 0 ? (
              <Button onClick={handleAddToCart} type="small">
                add to cart
              </Button>
            ) : (
              <ItemQty id={id} currentQty={currentQty} />
            ))}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
