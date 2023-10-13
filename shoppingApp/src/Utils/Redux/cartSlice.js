import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.item.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const itemToDelete = action.payload;

      const indexToDelete = state.item.findIndex(
        (data) => data.id === itemToDelete.id
      );

      if (indexToDelete !== -1) {
        state.item.splice(indexToDelete, 1);
      }
    },
  },
});

export const { addToCart ,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
