import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://bdcallingbackend.onrender.com',
  // baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    } else {
      console.warn('No auth token found');
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
