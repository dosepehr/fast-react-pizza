import { useSelector } from "react-redux";
import { getTotalAmount, getTotalQty } from "../redux/reducers/cartSlice";
import { Link } from "react-router-dom";
import { formatCurrency } from "../helpers/formatCurrency";

const CartOverview = () => {
  const totalQty = useSelector((state) => getTotalQty(state));
  const totalAmount = useSelector((state) => getTotalAmount(state));

  if (!totalAmount) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <div className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQty} pizzas</span>
        <span>{formatCurrency(totalAmount)}</span>
      </div>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
