import { api } from "instance/instance";

const loginUser = async (data) => {
  const response = await api("POST", `/auth/login`, data);
  return response; // .data error
};

const signUpUser = async (data) => {
  const response = await api("post", `/user/signup`, data);
  return response.data;
};

const refreshUserData = async (token) => {
  const response = await api("get", `/auth/refresh`);
  return response.data;
};

export { refreshUserData, loginUser, signUpUser };
