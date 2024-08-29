// axios
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosRequestConfig from './AxiosConfig';

// constants
import { STORAGE_KEYS, HTTP_CODE } from 'constants/common';
import RouteConfig from 'configs/RouteConfig';

export default class BaseService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create(axiosRequestConfig);

    this.axiosInstance.interceptors.response.use(
      res => res,
      error => {
        if (error?.response?.status === HTTP_CODE.UNAUTHORIZED) {
          window.location.pathname = RouteConfig.LOGIN;
        } else {
          return Promise.reject(error);
        }
      },
    );
  }


  request(endpoints: string[] = [], pathParams: any[] = [], data: any = null, params: any = null) {
    if (!this.axiosInstance) {
      return; // return if axios instance has not been initialized
    }

    const config = this.getConfig(endpoints, pathParams, data, params);

    return this.axiosInstance(config)
      .then(response => {
        // handle response
        return response;
      })
      .catch(error => {
        // handle error
        throw new Error(error);
      });
  }

  getConfig(endpoints: string[] = [], pathParams: any[] = [], data: null, params = null): AxiosRequestConfig {
    const [path, method] = endpoints;
    const pathBind = this.bindPath(path, pathParams);

    return {
      url: pathBind,
      method: method,
      data: data,
      params: params,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getAccessToken(),
      },
    };
  }

  getAccessToken() {
    // return accessToken
    return sessionStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) || '';
  }

  bindPath(path: string, pathParams: any[] = []) {
    if (!Array.isArray(pathParams) || !pathParams.length) {
      return path;
    }

    // binding
    return path.replace(/\$\d/g, (match) => {
      const idx = parseInt(match.replace('$', ''), 10);
      return pathParams[idx];
    });
  }
}
