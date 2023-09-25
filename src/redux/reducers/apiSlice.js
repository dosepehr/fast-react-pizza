import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://react-fast-pizza-api.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getMenuItems: builder.query({
      query: () => "menu",
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "order",
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetMenuItemsQuery, useCreateOrderMutation } = apiSlice;
