/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const appId = process.env.REACT_APP_X_APP_ID;
const apiKey = process.env.REACT_APP_X_APP_KEY;
const rmoteUserId = process.env.REACT_APP_X_REMOTE_USER_ID;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['x-app-id'] = appId;
    config.headers['x-app-key'] = apiKey;
    config.headers['x-remote-user-id'] = rmoteUserId;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
