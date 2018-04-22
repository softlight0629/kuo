import { observable, action } from 'mobx';
import Site from '../../models/site/Site';

class AccountStore {

  @observable mysites = [];

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  fetch() {
    this.service.siteService.fetchAllSitesFromServer()
      .then(action(res => {
        if (res.data) {
          this.mysites = res.data.map(site => new Site(this.store, site));
        }
      }));
  }
}

export default AccountStore;
