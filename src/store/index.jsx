// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/features/UserSlice";
import forgotPwdReducer from "../store/features/ForgotPwdSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    passwordReset: forgotPwdReducer,
  },
});
