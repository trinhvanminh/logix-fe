import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const axiosClient = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
