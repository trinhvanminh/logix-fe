import axiosClient, { baseUrl } from "../AxiosClient";
import { toast } from "react-toastify";
import axios from "axios";

export const LoginApi = async (payload) => {
  const url = `${baseUrl}/api/auth/login`;
  try {
    const response = await axiosClient.post(url, payload);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    toast.error(
      <>
        Something went wrong with the login:
        <br />
        {err.response?.data?.message}
      </>
    );
  }
};

export const RegisterApi = async (payload) => {
  const url = `${baseUrl}/api/auth/register`;
  try {
    const response = await axiosClient.post(url, payload);
    response && toast.success("Successfully registered");
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    toast.error(
      <>
        Something went wrong with the registration:
        <br />
        {err.response?.data?.message}
      </>
    );
  }
};

export const ResetPasswordApi = async (payload) => {
  const url = `${baseUrl}/api/auth/reset-password`;
  try {
    const response = await axiosClient.post(url, payload);
    return response;
  } catch (err) {
    toast.error(
      <>
        Something went wrong with the reset password:
        <br />
        {err.response?.data?.message}
      </>
    );
  }
};

export const ConfirmResetPasswordApi = async ({ new_password1, userToken }) => {
  const url = `${baseUrl}/api/auth/reset-password/confirm/`;
  try {
    const response = await axios.patch(
      url,
      {
        newpassword: new_password1,
      },
      {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      }
    );
    return response;
  } catch (err) {
    toast.error(
      <>
        Something went wrong with the confirm reset password:
        <br />
        {err.response?.data?.message}
      </>
    );
  }
};
