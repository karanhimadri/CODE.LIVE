import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./firebase/authSlice";
export const ReduxStore = configureStore({
  reducer: {
    auth_store: authReducer,
  },
});
