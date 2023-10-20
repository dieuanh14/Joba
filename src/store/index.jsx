// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/features/UserSlice";
import forgotPwdReducer from "../store/features/ForgotPwdSlice";
import paymentReducer from "../store/features/PaymentSlice";
import authReducer from "../store/features/AuthSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    passwordReset: forgotPwdReducer,
    payment: paymentReducer,
    auth: authReducer,

  },
});
