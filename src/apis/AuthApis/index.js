import axiosClient, { baseUrl } from "../AxiosClient";

export const LoginApi = async (payload) => {
  const url = `${baseUrl}/auth/login`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    return err;
  }
};

export const RegisterApi = async (payload) => {
  const url = `${baseUrl}/auth/register`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    return err;
  }
};

export const ResetPasswordApi = async (payload) => {
  const url = `${baseUrl}/auth/reset-password`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    return err;
  }
};
