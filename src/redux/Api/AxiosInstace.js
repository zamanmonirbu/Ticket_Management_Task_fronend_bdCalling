import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ticket-management-task-backend-bdcalling.onrender.com', // Replace with your server's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the authToken in each request
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken'); // Retrieve token from local storage
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`; // Attach token to the request
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle error
  }
);

export default axiosInstance;
