import { observable, action } from 'mobx';
import Site from '../../models/site/Site';

class DashboardStore {

  @observable site = {};

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  fetch(guid) {
    this.service.siteService.fetchAllSitesFromServer()
      .then(res => {
        console.log(res.data);
      });

    this.service.siteService.fetchSiteFromServer(guid)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(this.store, res.data);

          console.log(this.site);
        }
      }));
  }
}

export default DashboardStore;
