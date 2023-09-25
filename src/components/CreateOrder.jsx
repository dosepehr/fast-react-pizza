import { useSelector } from "react-redux";
import { selectUserName } from "../redux/reducers/userSlice";
import Button from "./Button";
import { formatCurrency } from "../helpers/formatCurrency";
import { getTotalAmount } from "../redux/reducers/cartSlice";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userSchema from "../validation/userSchema";

const CreateOrder = () => {
  const [priority, setPriority] = useState(false);
  const username = useSelector((state) => selectUserName(state));
  let totalPrice = useSelector((state) => getTotalAmount(state));
  if (priority) {
    totalPrice = totalPrice * 1.2;
  }
  const handleCreateOrder = (values) => {
    console.log(values);
  };
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Formik
        initialValues={{ username, mobile: "", address: "" }}
        validationSchema={userSchema}
        onSubmit={(values) => handleCreateOrder(values)}
      >
        <Form>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">First Name</label>
            <div className="grow">
              <Field className="input w-full" type="text" name="username" />
              <ErrorMessage name="username">
                {(msg) => (
                  <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Phone number</label>
            <div className="grow">
              <Field className="input w-full" type="tel" name="mobile" />
              <ErrorMessage name="mobile">
                {(msg) => (
                  <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>
          </div>
          <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Address</label>
            <div className="grow">
              <Field className="input w-full" type="text" name="address" />
              <ErrorMessage name="address">
                {(msg) => (
                  <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                    {msg}
                  </p>
                )}
              </ErrorMessage>
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
              onChange={(e) => setPriority(e.target.checked)}
            />
            <label htmlFor="priority" className="font-medium">
              Want to yo give your order priority?
            </label>
          </div>

          <Button type="primary">
            Order now from {formatCurrency(totalPrice)}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateOrder;
