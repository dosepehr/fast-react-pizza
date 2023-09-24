import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: localStorage.getItem("username") || "",
    orders: {},
  },
  reducers: {
    addUsername(state, action) {
      state.name = action.payload;
      localStorage.setItem("username", action.payload);
    },
  },
});

export const selectUserName = (state) => state.user.name;
export const { addUsername } = userSlice.actions;
export default userSlice.reducer;
