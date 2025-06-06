import axiosInstance from "../Helper/axiosInterceptors";
import API_PATHS from "./apiPath";

const getUsers = async (pageNumber = 1, pageSize = 1000) => {
  const response = await axiosInstance.get(
    `${API_PATHS.USER_LIST}?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return response.data.data;
};

const getUserById = async (id) => {
  const response = await axiosInstance.get(`${API_PATHS.USER_LIST}/${id}`);
  return response.data.user;
};

const deleteUserById = async (id) => {
  const response = await axiosInstance.delete(`${API_PATHS.USER_LIST}/${id}`);
  return response.data.user;
};

export default {
  getUsers,
  getUserById,
  deleteUserById,
};
