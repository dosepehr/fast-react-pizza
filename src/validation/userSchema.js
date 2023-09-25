import * as yup from "yup";

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const userSchema = yup.object().shape({
  customer: yup.string().required("please give us your name:)"),
  phone: yup
    .string()
    .required(
      "Please give us your correct phone number. We might need it to contact you",
    )
    .matches(phoneRegExp, "the given phone number is not correct"),
});

export default userSchema;
