import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../../Service/authService";


export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error)
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
        console.log(action);
        state.loading = false;
        state.token = action.token;
        localStorage.setItem("token", action.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
