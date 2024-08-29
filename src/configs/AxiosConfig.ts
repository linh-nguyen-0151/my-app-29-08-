import axios, { AxiosRequestConfig } from 'axios';

const cancelTokenSource = axios.CancelToken.source();
const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: process.env.BASE_API_URL,
  responseType: 'json',
  timeout: 30000,
  cancelToken: cancelTokenSource.token,
};

export default axiosRequestConfig;