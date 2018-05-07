import { observable, action } from 'mobx';
import oauth from '../../utils/oauth';

class AuthStore {

  @observable auth = {};

  isAuthenticated = false;

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  login(callback) {
    oauth.authenticate()
      .then((res) => {
        this.fetchUserAuth();
      });
  }

  fetchUserAuth() {
    this.service.authService.fetchUserAuth()
      .then(action(res => {
        this.auth = res.data;
        this.isAuthenticated = true;
      }))
      .catch(e => {
        console.log(e);
      });
  }

  authenticate() {
    if (!this.isAuthenticated) {
      oauth.authenticate()
        .then((res) => {
          this.fetchUserAuth();
        });
    }
  }
}

export default AuthStore;
