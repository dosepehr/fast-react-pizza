import { createSlice, current } from "@reduxjs/toolkit";

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
    updateQty(state, action) {
      const updatedItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      updatedItem.qty = updatedItem.qty + action.payload.changedAmount;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getQtyById = (state, itemId) =>
  state.cart.cartItems.find((item) => item.id === itemId)?.qty || 0;

export const { addToCart, updateQty } = cartSlice.actions;

export default cartSlice.reducer;
