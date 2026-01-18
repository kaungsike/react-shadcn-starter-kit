import axios from "axios";

// base URL from env
export const baseURL = import.meta.env.VITE_API_URL;


export const api = axios.create({
  baseURL: baseURL,
  withCredentials: true, 
  headers: {
    Accept: "application/json",
  },
});


