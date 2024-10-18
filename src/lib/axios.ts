import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://gutendex.com/',
});

export default axiosInstance;
