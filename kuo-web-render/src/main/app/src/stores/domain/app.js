import { observable, action } from 'mobx';
import Site from '../../models/site/Site';

class AppStore {

  @observable.ref site = {};
  
  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  fetch(guid) {
    this.service.siteService.fetchSiteFromServer(guid)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(res.data);
        }
      }));
  }
}

export default AppStore;
