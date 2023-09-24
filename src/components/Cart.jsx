import { useSelector } from "react-redux";
import { getCartItems } from "../redux/reducers/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Button from "./Button";

const Cart = () => {
  const cartItems = useSelector((state) => getCartItems(state));
  const username = useSelector((state) => state.user.name);
  return (
    <div className="mx-auto max-w-3xl px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <p className="mt-7 text-xl font-semibold">Your cart, {username}</p>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
};

export default Cart;
