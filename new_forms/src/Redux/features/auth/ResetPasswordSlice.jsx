import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../src/Helper/axiosInterceptors";
import API_PATHS from "../../../../src/Service/apiPath";

export const resetPassword = createAsyncThunk(
  "reset/resetPassword",
  async ({ password, token, userId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_PATHS.RESET_PASSWORD,
        { password, token, userId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Reset failed");
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "reset",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default resetPasswordSlice.reducer;
