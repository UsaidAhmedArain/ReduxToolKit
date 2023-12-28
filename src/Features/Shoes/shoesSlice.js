import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: 100,
};

const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    orderShoes: (state) => {
      state.stock--;
    },
    cancelShoes: (state) => {
      state.stock++;
    },
  },
});

export default shoesSlice.reducer;
export const { orderShoes, cancelShoes } = shoesSlice.actions;
