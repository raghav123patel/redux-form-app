import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInterceptors";
import API_PATHS from "../../Service/apiPath";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(API_PATHS.LOGIN, credentials);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
