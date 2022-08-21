import { toast } from "react-toastify";
import axiosClient, { baseUrl } from "../AxiosClient";

export const getRates = async () => {
  const url = `${baseUrl}/api/rates/`;
  try {
    const response = await axiosClient.get(url);
    return { response: response.data, error: null };
  } catch (err) {
    toast.error(
      <>
        Something went wrong with getMovies
        <br />
        {err.response?.data?.message}
      </>
    );
    return { response: null, error: err };
  }
};
