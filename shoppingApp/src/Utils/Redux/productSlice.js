import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    menswear: [],
    womenswear: [],
    electronics: [],
    jewellery: [],
  },
  reducers: {
    addMensProduct: (state, action) => {
      state.menswear = action.payload;
    },
  },
});

export const { addMensProduct } = productSlice.actions;

export default productSlice.reducer;
