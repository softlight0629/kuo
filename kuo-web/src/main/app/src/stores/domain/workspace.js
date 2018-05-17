import { observable, autorun, action, reaction } from 'mobx';
import Site from '../../models/site/Site';

class WorkSpaceStore {

  @observable site = {};

  @observable.ref pageResource = {};

  @observable name = '';

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  fetch(guid) {
    this.service.siteService.fetchSiteFromServer(guid)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(this.store, res.data);
          this.pageResource = this.site.getFirstPageResource();
          this.name = this.pageResource.name;
        }
      }))
      .catch(e => {
        console.log(e);
      })
  }

  save() {
    if (!this.site.guid) {
      this.store.workSpaceUiStore.openSavePanel();
      return;
    }

    this.service.siteService.updateSiteToServer(this.site.toJson())
      .then(res => {
      });
  }

  createSite(option) {
    this.service.siteService.addSiteToServer(option)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(this.store, res.data);
        }

        this.store.workSpaceUiStore.closeSavePanel();
      }));
  }

  addPageResource(option) {
    this.site.addPageResource(option);
  }

  @action activatePageResource(pageResource) {
    this.pageResource = pageResource;
    this.name = pageResource.name;
  }
}

export default WorkSpaceStore;
