import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import CartSlice from "./CartSlice";

const appStore = configureStore({
  reducer: {
    product:productSlice,
    cart:CartSlice
  },
});

export default appStore;
