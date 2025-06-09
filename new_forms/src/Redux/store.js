import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import forgotPasswordReducer from "../features/auth/forgotPasswordSlice";
import resetPasswordReducer from "../features/auth/resetPasswordSlice";
import verifyEmailReducer from "../features/auth/verifyEmailSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    verifyEmail: verifyEmailReducer,
  },
});

export default store;
