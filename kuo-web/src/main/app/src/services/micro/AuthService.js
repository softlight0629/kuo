import oauth from '../../utils/oauth';

const endpoint = 'http://192.168.1.101:8081/auth/api';

// 取数据，处理请求的一些异常处理，store 应该只领域的数据，其他的都有 service 处理
class AuthService {

  async login() {
    return await oauth.authenticate();
  }

  async fetchUserAuth() {
    return await oauth.get(`${endpoint}/api/user/me`);
  }
}

export default AuthService;
