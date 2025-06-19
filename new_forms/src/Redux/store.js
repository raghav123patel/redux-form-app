import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../Redux/features/auth/registerSlice";
import loginReducer from "../Redux/features/auth/loginSlice";
import forgotPasswordReducer from "../Redux/features/auth/forgotPasswordSlice";
import resetPasswordReducer from "../Redux/features/auth/ResetPasswordSlice";
import verifyEmailReducer from "../Redux/features/auth/verifyEmailSlice";

import userListReducer from "../Redux/features/users/userListSlice";
import userDetailReducer from "../Redux/features/users/userDetailSlice";
import userDeleteReducer from "../Redux/features/users/userDeleteSlice";
import userUpdateReducer from "../Redux/features/users/userUpdateSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    forgot: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    verifyEmail: verifyEmailReducer,

    userList: userListReducer,
    userDetail: userDetailReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import registerReducer from "../Redux/features/auth/registerSlice";
// import loginReducer from "../Redux/features/auth/loginSlice";
// import forgotPasswordReducer from "../Redux/features/auth/forgotPasswordSlice";
// import resetPasswordReducer from "../Redux/features/auth/ResetPasswordSlice";
// import verifyEmailReducer from "../Redux/features/auth/verifyEmailSlice";
// import userListReducer from "../Redux/features/users/userListSlice";
// const store = configureStore({
//   reducer: {
//     register: registerReducer,
//     login: loginReducer,
//     forgotPassword: forgotPasswordReducer,
//     resetPassword: resetPasswordReducer,
//     verifyEmail: verifyEmailReducer,
//     userList: userListReducer,
//   },
// });

// export default store;
