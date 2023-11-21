import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // API'nizin temel URL'si
  timeout: 10000 // İsteğin zaman aşımı süresi
});

export default api;
