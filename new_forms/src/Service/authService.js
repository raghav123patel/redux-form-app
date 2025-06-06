
import axiosInstance from "../Helper/axiosInterceptors";
import API_PATHS from "./apiPath";

const registerUser = async (userData) => {
  const response = await axiosInstance.post(API_PATHS.REGISTER, userData);
  return response.data.data; 
};

const verifyEmail = async (token, userId) => {
  const response = await axiosInstance.get(
    `${API_PATHS.VERIFY_EMAIL}?token=${token}&userId=${userId}`
  );
  return response.data;
};

const forgotPassword = async (email) => {
  const response = await axiosInstance.post(API_PATHS.FORGOT_PASSWORD, { email });
  return response.data;
};

const resetPassword = async ({ password, token, userId }) => {
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
};

const login = async (credentials) => {
  const response = await axiosInstance.post(API_PATHS.LOGIN, credentials);
  return response.data.data;
};

export default {
  registerUser,
  verifyEmail,
forgotPassword,
resetPassword,
login,
};
