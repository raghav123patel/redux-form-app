import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/axiosInterceptors";
import API_PATHS from "../../../Service/apiPath";

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `${API_PATHS.USER_DELETE}/${userId}`
      );
      return response; // return ID to remove from list
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete user");
    }
  }
);

const userDeleteSlice = createSlice({
  name: "userDelete",
  initialState: {
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.fulfilled, (state) => {
        state.success = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userDeleteSlice.reducer;

// // src/Redux/features/user/userDeleteSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../../Helper/axiosInterceptors";
// import API_PATHS from "../../../Service/apiPath";

// export const deleteUser = createAsyncThunk(
//   "users/deleteUser",
//   async (userId, { rejectWithValue }) => {
//     try {
//       await axiosInstance.delete(`${API_PATHS.USER_DELETE}/${userId}`);
//       return userId;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Failed to delete user");
//     }
//   }
// );

// const userDeleteSlice = createSlice({
//   name: "userDelete",
//   initialState: {
//     deleting: false,
//     success: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(deleteUser.pending, (state) => {
//         state.deleting = true;
//         state.success = false;
//         state.error = null;
//       })
//       .addCase(deleteUser.fulfilled, (state) => {
//         state.deleting = false;
//         state.success = true;
//       })
//       .addCase(deleteUser.rejected, (state, action) => {
//         state.deleting = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userDeleteSlice.reducer;
