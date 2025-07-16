import axios from 'axios';

export const baseURL = 'https://orange-casino.digitalOcean.com/api'

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;