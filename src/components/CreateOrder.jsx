import { useSelector } from "react-redux";
import { selectUserName } from "../redux/reducers/userSlice";
import Button from "./Button";
import { formatCurrency } from "../helpers/formatCurrency";
import { getTotalAmount } from "../redux/reducers/cartSlice";

const CreateOrder = () => {
  const username = useSelector((state) => selectUserName(state));
  const totalPrice = useSelector((state) => getTotalAmount(state));
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <form>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
        </div>
        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
          <div className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
            <Button type="small">Get position</Button>
          </div>
        </div>
        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <Button type="primary">
          Order now from {formatCurrency(totalPrice)}
        </Button>
      </form>
    </div>
  );
};

export default CreateOrder;
