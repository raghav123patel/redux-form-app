import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verifyEmail } from "../../../Service/authService";

export const emailVerification = createAsyncThunk(
  "verify/verifyEmail",
  async ({ token, id}, { rejectWithValue }) => {
    console.log(token, id);
    try {
      const response = await verifyEmail({token, id});
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("sdgjhgsah",error);
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
  reducers: {
      resetverification: (state) => {
          state.loading = false;
          state.error = null;
          state.success = false;
        }
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailVerification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(emailVerification.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(emailVerification.rejected, (state, action) => {
        console.log(action);
        
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default verifyEmailSlice.reducer;
export const { resetverification } = verifyEmailSlice.actions;
