import axiosClient, { baseUrl } from "../AxiosClient";

export const LoginApi = async (payload) => {
  const url = `${baseUrl}/api/auth/login`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    return err;
  }
};

export const RegisterApi = async (payload) => {
  const url = `${baseUrl}/api/auth/register`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    return err;
  }
};

export const ResetPasswordApi = async (payload) => {
  const url = `${baseUrl}/api/auth/reset-password`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    return err;
  }
};

export const ConfirmResetPasswordApi = async (payload) => {
  const url = `${Apiurl}/api/auth/reset-password/confirm/${payload.uid}-${payload.token}/`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    return err;
  }
};
