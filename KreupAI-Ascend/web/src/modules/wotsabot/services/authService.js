import axios from 'axios';
import { API_URL } from "../../../../utils/apiConfig";


const API_URL_auth = `${API_URL}/api/auth`;

export const authService = {
  login: async (credentials) => {
    const response = await axios.post(`${API_URL_auth}/signin`, credentials);
    return response.data;
  },
  signup: async (data) => {
    const response = await axios.post(`${API_URL_auth}/signup`, data);
    return response.data;
  },
  logout: async () => {
    // Handle logout (if necessary on the server)
  },
};
