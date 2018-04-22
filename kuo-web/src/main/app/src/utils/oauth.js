import cookies from 'browser-cookies';
import client from './client';

class Oauth {

  constructor(client) {
    this.clientId = 'SimpleClientId';
    this.endpoint = 'http://192.168.1.101:8081';

    this.accessToken = '';
  }

  async authenticate() {
    const formData = new FormData();
    formData.append('client_id', this.clientId);
    formData.append('grant_type', 'password');
    formData.append('username', 'john');
    formData.append('password', '123');

    const res = await client.post(`${this.endpoint}/auth/oauth/token`, formData);
    this.accessToken = res.data.access_token;
    cookies.set('accessToken', res.data.access_token);
    cookies.set('refreshToken', res.data.refresh_token);
  }

  async _refreshToken() {
    const formData = new FormData();
    formData.append('client_id', this.clientId);
    formData.append('grant_type', 'refresh_token');

    const refreshToken = cookies.get('refreshToken');
    if (!refreshToken) {
      return;
    }

    formData.append('refresh_token', refreshToken);

    const res = await client.post(`${this.endpoint}/auth/oauth/token`, formData);
    this.accessToken = res.data.access_token;

    cookies.set('refreshToken', res.data.refresh_token)
  }

  _getAccessToken() {
    if (!this.accessToken) {
      const accessToken = cookies.get('access_token');
      if (accessToken) {
        this.accessToken = accessToken;
      }
    }

    return this.accessToken;
  }

  async get(path, option = {}) {
    option.headers = Object.assign({}, option.headers, {
      'Authorization': `Bearer ${this._getAccessToken()}`,
    });

    let res;
    try {
      res = await client.get(path, option);
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await this._refreshToken();
        res = await this.get(path, option);
      }
    }
    
    return res;
  }

  async post(path, option) {
    option.headers = Object.assign({}, option.headers, {
      'Authorization': `Bearer ${this._getAccessToken()}`,
    });

    let res;
    try {
      res = await client.post(path, option);
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await this._refreshToken();
        res = await this.post(path, option);
      }
    }
    
    return res;
  }

  async delete(path, option) {
    option.headers = Object.assign({}, option.headers, {
      'Authorization': `Bearer ${this._getAccessToken()}`,
    });

    let res;
    try {
      res = await client.delete(path, option);
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await this._refreshToken();
        res = await this.delete(path, option);
      }
    }
    
    return res;
  }

  async put(path, option) {
    option.headers = Object.assign({}, option.headers, {
      'Authorization': `Bearer ${this._getAccessToken()}`,
    });

    let res;
    try {
      res = await client.put(path, option);
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await this._refreshToken();

        res = await this.put(path, option);
      }
    }
    
    return res;
  }
}

export default new Oauth();
