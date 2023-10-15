import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoginStatus: false,
    userInfo: [],
  },
  reducers: {
    userLoginStatus: (state, action) => {
      state.userLoginStatus = action.payload;
    },
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { userLoginStatus ,addUserInfo } = userSlice.actions;

export default userSlice.reducer;
