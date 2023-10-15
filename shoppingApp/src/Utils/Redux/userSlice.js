import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoginStatus: false,
  },
  reducers: {
    userLoginStatus: (state, action) => {
      state.userLoginStatus = action.payload;
    },
  },
});

export const { userLoginStatus } = userSlice.actions;

export default userSlice.reducer;
