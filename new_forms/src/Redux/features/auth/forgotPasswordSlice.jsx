import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";

export const forgotPassword = createAsyncThunk(
  "forgot/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(API_PATHS.FORGOT_PASSWORD, {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error sending reset link"
      );
    }
  }
);

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
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Reset password link sent to your email.";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.message = "Error sending reset link.";
        state.error = action.payload;
      });
  },
});

export default forgotPasswordSlice.reducer;
