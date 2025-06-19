import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../../Service/authService";

export const registeredUsers = createAsyncThunk(
  "register/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await register(userData);
      console.log("API response in thunk:", response);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || "registration failed");
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
  reducers: {
    resetRegistration: (state) => {
      state.loading = false;
      state.error = null;
      state.registrationData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registeredUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registeredUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.registrationData = action.payload;
      })
      .addCase(registeredUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetRegistration } = registerSlice.actions;
export default registerSlice.reducer;
