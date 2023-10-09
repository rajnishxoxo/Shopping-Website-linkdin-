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
    addWomensProduct: (state, action) => {
      state.womenswear = action.payload;
    }
  },
});

export const { addMensProduct,addWomensProduct } = productSlice.actions;

export default productSlice.reducer;
