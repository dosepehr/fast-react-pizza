import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const getAddress = async ({ latitude, longitude }) => {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
};

export const fetchAddress = createAsyncThunk("users/fetchAddress", async () => {
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  return { position, address };
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: localStorage.getItem("username") || "",
    address: "",
    position: {},
    status: "idle",
  },
  reducers: {
    addUsername(state, action) {
      state.name = action.payload;
      localStorage.setItem("username", action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Make sure to fill this field!";
      }),
});

export const selectUserName = (state) => state.user.name;
export const { addUsername } = userSlice.actions;
export default userSlice.reducer;
