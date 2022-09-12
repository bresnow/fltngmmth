import axios from "redaxios";

const api = axios.create({
  baseURL: `${process.env.ENDPOINT}`,
});

export default api;
