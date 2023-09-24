import { formatCurrency } from "../helpers/formatCurrency";
import ItemQty from "./ItemQty";
const CartItem = ({ item }) => {
  const { id, name, qty, unitPrice } = item;
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {qty}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(qty * unitPrice)}</p>
        <ItemQty id={id} currentQty={qty} />
      </div>
    </li>
  );
};

export default CartItem;
