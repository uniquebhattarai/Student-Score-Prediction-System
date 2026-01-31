
import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const apiConnector = async (method, url, data, headers = {}) => {
  return axiosInstance({
    method,
    url,
    data,
    headers,
  });
};
