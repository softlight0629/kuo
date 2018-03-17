import { observable, action, extendObservable } from 'mobx';
import client from '../utils/client';

export default class AuthStore {

  constructor() {
    extendObservable(this, {
      username: 'john',
      userAuth: {},
    });
  }

  async login(username, password) {
    await client.login(username, password);
    const res = await client.fetch('http://100.72.192.136/auth/api/user/me');
    this.userAuth = res.data.principal;
  }

  getUserAuth() {
    return this.userAuth;
  }
}
