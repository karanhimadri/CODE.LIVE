import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    name: "unknown",
    email: "unknown@gmail.com",
    password: "#######",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUserDetails: (state, action) => {
      // if username or email cannot found or undefined than automatically default values are assigned
      const {
        name = state.userDetails.name,
        email = state.userDetails.email,
        password = state.userDetails.password,
      } = action.payload;
      state.userDetails.name = name;
      state.userDetails.email = email;
      state.userDetails.password = password;
    },
  },
});

export const { setAuthUserDetails } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
