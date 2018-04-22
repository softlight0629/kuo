import { observable, extendObservable, action, reaction, autorun } from 'mobx';
import { PageResource } from './resources';

class Site {

  id;
  guid;
  status;
  createAt;
  updateAt;

  @observable name;
  @observable domain;
  @observable address;
  @observable owner;

  @observable pageResources = [];

  constructor(store, initialState) {
    this.store = store;
    extendObservable(this, initialState);

    this.pageResources = 
      initialState.pageResources.map(pageResource => new PageResource(this.store, pageResource));
  }

  @action addPageResource(pageResource) {
    this.pageResources.push(new PageResource(this.store, pageResource));
  }

  getFirstPageResource() {
    return this.pageResources && this.pageResources[0];
  }

  toJson() {
    return {
      id: this.id,
      guid: this.guid,
      name: this.name,
      domain: this.domain,
      status: this.status,
      address: this.address,
      owner: this.owner,

      pageResources: this.pageResources.map(pageResource => pageResource.toJson()),
    }
  }

  updateSiteToServer() {
    this.store.siteStore.updateSiteToServer(this.toJson());
  }
}

export default Site;
