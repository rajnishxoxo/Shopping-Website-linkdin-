import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
        state.productList=action.payload
    },
  },
});

export const {addProduct} = productSlice.actions;

export default productSlice.reducer;