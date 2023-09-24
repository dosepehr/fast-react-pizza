import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../reducers/apiSlice";
import userSlice from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
