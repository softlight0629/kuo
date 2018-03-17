import axios from 'axios';
import cookies from 'browser-cookies';

const endpoint = 'http://100.72.192.136';

class RestClient {

  async login(username, password) {
    const formData = new FormData();
    formData.append('client_id', 'SimpleClientId');
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);

    const res = await axios.post(`${endpoint}/auth/oauth/token`, formData);
    this.accessToken = res.data.access_token;

    cookies.set('refreshToken', res.data.refresh_token);
    console.log(this.accessToken);
  }

  async refreshToken() {
    const formData = new FormData();
    formData.append('client_id', 'SimpleClientId');
    formData.append('grant_type', 'refresh_token');

    const refreshToken = cookies.get('refreshToken');

    if (!refreshToken) {
      return;
    }

    formData.append('refresh_token', refreshToken);

    const res = await axios.post(`${endpoint}/auth/oauth/token`, formData);
    this.accessToken = res.data.access_token;
    cookies.set('refreshToken', res.data.refresh_token)
  }
  
  async fetch(resource) {
    let res;
    try {
      res = await axios.get(resource, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
        },
      });
    } catch (e) {
      if (e.response.status === 401) {
        await this.refreshToken();
      }

      res = await axios.get(resource, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
        },
      });
    }

    return res;
  }
}

const client = new RestClient();

export default client;
