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
    emptyCart: (state) => {
      state.item.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
