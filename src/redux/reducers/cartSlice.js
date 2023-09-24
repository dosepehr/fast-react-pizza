import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
  },
  reducers: {},
});

export default cartSlice.reducer;
