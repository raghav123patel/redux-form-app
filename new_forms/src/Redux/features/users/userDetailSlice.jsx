import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/axiosInterceptors";
import API_PATHS from "../../../Service/apiPath";

export const fetchUserDetail = createAsyncThunk(
  "users/fetchUserDetail",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.USER_DETAIL}/${userId}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch user detail"
      );
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetailSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../../Helper/axiosInterceptors";
// import API_PATHS from "../../../Service/apiPath";

// export const fetchUserDetail = createAsyncThunk(
//   "users/fetchUserDetail",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(
//         `${API_PATHS.USER_DETAIL}/${userId}`
//       );
//       return response.data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || "Failed to fetch user detail"
//       );
//     }
//   }
// );

// const userDetailSlice = createSlice({
//   name: "userDetail",
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserDetail.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserDetail.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(fetchUserDetail.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userDetailSlice.reducer;
