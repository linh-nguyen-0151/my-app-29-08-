import BaseService from 'configs/ServiceConfig';
import { HTTP_METHOD } from 'constants/common';
import { LoginRequest } from 'models/SampleModel';


const ENDPOINTS = {
  API_LOGIN: ['/api/login', HTTP_METHOD.POST],
  POST_WITH_PATH_PARAMS_SAMPLE: ['/api/$0/post-sample/$1', HTTP_METHOD.POST],
};

class AuthService extends BaseService {

  constructor() {
    super();
  }

  async login(data: LoginRequest) {
    try {
      await this.request(ENDPOINTS.API_LOGIN, [], data);
    } catch (err: any) {
      console.error(err);
    }
  };

  logout() {
    // remove user from local storage to log user out
    sessionStorage.clear();
  }
}

export default new AuthService();
