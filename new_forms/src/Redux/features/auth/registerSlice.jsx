import { createAsyncThunk } from "reduxjs/toolkit";
import { registerUser } from "../../../Service/authService";

export const registerUsers = createAsyncThunk(
  'users/registerUsers',
  async (userData, thunkAPI) => {
    console.log(userData);
    try{
    const response = await registerUser(userData);
    console.log(response);
    return response.data;
  } catch(error) {
     return thunkAPI.rejectWithValue(error);
  }
}
);

