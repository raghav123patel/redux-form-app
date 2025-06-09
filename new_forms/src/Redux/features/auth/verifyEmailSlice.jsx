import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";

export const verifyEmail = createAsyncThunk(
  "verify/verifyEmail",
  async ({ token, userId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.VERIFY_EMAIL}?token=${token}&userId=${userId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Verification failed");
    }
  }
);

const verifyEmailSlice = createSlice({
  name: "verify",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default verifyEmailSlice.reducer;
