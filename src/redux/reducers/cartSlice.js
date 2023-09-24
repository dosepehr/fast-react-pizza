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
    updateQty(state, action) {
      const updatedItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      updatedItem.qty = updatedItem.qty + action.payload.changedAmount;
      if (updatedItem.qty === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getQtyById = (state, itemId) =>
  state.cart.cartItems.find((item) => item.id === itemId)?.qty || 0;

export const { addToCart, updateQty, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
