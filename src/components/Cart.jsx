import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartItems } from "../redux/reducers/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Button from "./Button";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => getCartItems(state));
  const username = useSelector((state) => state.user.name);
  if (!cartItems.length) {
    return (
      <>
        <Link
          to="/menu"
          className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        >
          &larr; Back to menu
        </Link>
        <p className="mt-7 font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </>
    );
  }
  return (
    <div className="px-4 py-3">
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

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
