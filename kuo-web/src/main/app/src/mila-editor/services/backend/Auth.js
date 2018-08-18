import oauth from '../../utils/oauth';

const endpoint = 'http://192.168.1.102:8081/auth/api';

class AuthService {

  async login() {
    return await oauth.authenticate();
  }

  async fetchUserAuth() {
    return await oauth.get(`${endpoint}/user/me`);
  }
}

export default AuthService;
