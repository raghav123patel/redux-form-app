import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPassword } from "../../../Service/authService";

// ✅ Async thunk for forgot password
export const forgot = createAsyncThunk(
  "forgot/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await forgotPassword(email); // ✅ await added
      console.log("Forgot Password Response:", response.data);
      return response.data; // ✅ return the actual message
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data || { message: "Error sending reset link" }
      );
    }
  }
);

// ✅ Slice setup
const forgotPasswordSlice = createSlice({
  name: "forgot",
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgot.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(forgot.fulfilled, (state, action) => {
        state.loading = false;
        state.message =
          action.payload.message || "Reset password link sent to your email."; // ✅ use API message
        state.error = null;
      })
      .addCase(forgot.rejected, (state, action) => {
        state.loading = false;
        state.message = null;
        state.error = action.payload?.message || "Something went wrong"; // ✅ show actual error
      });
  },
});

export default forgotPasswordSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import forgotPassword from "../../../Service/authService";
// export const forgot = createAsyncThunk(
//   "forgot/forgotPassword",
//   async ({ email }, { rejectWithValue }) => {
//     try {
//       const response = await forgotPassword(email);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || "Error sending reset link"
//       );
//     }
//   }
// );

// const forgotPasswordSlice = createSlice({
//   name: "forgot",
//   initialState: {
//     loading: false,
//     message: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(forgot.pending, (state) => {
//         state.loading = true;
//         state.message = null;
//         state.error = null;
//       })
//       .addCase(forgot.fulfilled, (state) => {
//         state.loading = false;
//         state.message = "Reset password link sent to your email.";
//       })
//       .addCase(forgot.rejected, (state, action) => {
//         state.loading = false;
//         state.message = "Error sending reset link.";
//         state.error = action.payload;
//       });
//   },
// });

// export default forgotPasswordSlice.reducer;
