import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const selectedPizzaIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (selectedPizzaIndex < 0) {
        state.cartItems.push(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
