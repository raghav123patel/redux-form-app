import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(API_PATHS.REGISTER, userData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    loading: false,
    error: null,
    registrationData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.registrationData = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
