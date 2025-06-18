
import axiosInstance from "../Helper/axiosInterceptors";
import API_PATHS from "./apiPath";

export const register = async (userData) => {
  const response = await axiosInstance.post(API_PATHS.REGISTER, userData);
  console.log(response);
  return response.data.data; 
};

export const verifyEmail = async ({token, id}) => {
  console.log("heduyhuih");
  
  console.log(token,"",id)
  const response = await axiosInstance.get(
    `${API_PATHS.VERIFY_EMAIL}?token=${token}&userId=${id}`
  );
  console.log(response);
  return response.data;
};

const forgotPassword = async (email) => {
  const response = await axiosInstance.post(API_PATHS.FORGOT_PASSWORD, { email });
  console.log(response);
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
  console.log(response);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axiosInstance.post(API_PATHS.LOGIN, credentials);
  console.log(response);
  return response.data.data;
};

export default {
  
forgotPassword,
resetPassword,

};
