import axios from "axios";
import { API_URL } from "./contants";

const API = axios.create({
  baseURL: API_URL,
});

export default API;
