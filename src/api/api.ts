import axios from "axios";

// const baseURL = process.env.WIS_BACKEND_BASE_URL;

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
