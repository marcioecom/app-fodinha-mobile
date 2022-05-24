import axios from "axios";
import { API_URL } from "react-native-dotenv";

export const api = axios.create({
  baseURL: API_URL
});
