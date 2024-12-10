import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your server's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
