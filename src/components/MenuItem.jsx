import React from "react";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex gap-x-4 py-2">
      <div>
        <img
          src={imageUrl}
          alt={name}
          className={`w-24 h-24 ${soldOut && "opacity-70 grayscale"}`}
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
              <p className="text-sm">{unitPrice}</p>
            ) : (
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            )}
          </div>
          {!soldOut && (
            <button className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold tracking-wide text-stone-800 outline-none duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 uppercase">
              add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
