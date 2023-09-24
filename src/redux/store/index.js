import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../reducers/apiSlice";
import userSlice from "../reducers/userSlice";
import cartSlice from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
