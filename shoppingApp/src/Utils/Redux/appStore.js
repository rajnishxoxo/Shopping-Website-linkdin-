import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import CartSlice from "./CartSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    product: productSlice,
    cart: CartSlice,
    user: userSlice,
  },
});

export default appStore;
