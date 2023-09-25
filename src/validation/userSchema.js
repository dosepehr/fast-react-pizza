import * as yup from "yup";

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const userSchema = yup.object().shape({
  username: yup.string().required("please give us your name:)"),
  mobile: yup
    .string()
    .required(
      "Please give us your correct phone number. We might need it to contact you",
    )
    .matches(phoneRegExp, "the given phone number is not correct"),
  address: yup.string().required("please enter your address"),
});

export default userSchema;
