import axios from "axios";

export const $api = axios.create({
  withCredentials: false,
  baseURL: import.meta.env.VITE_API_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem(
//     "access_token"
//   )}`;
//   return config;
// });
