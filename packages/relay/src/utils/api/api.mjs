import axios from "redaxios";
import process from 'process'
const api = axios.create({
  baseURL: `${process.env.ENDPOINT}`,
});

export default api;
