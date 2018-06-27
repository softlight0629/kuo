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

  constructor(store, option) {
    this.store = store;
    extendObservable(this, option);

    this.pageResources = 
      option.pageResources.map(pageResource => new PageResource(this.store, pageResource));
  }

  @action addPageResource(option) {
    const pageResource = new PageResource(this.store, option);
    this.pageResources.push(pageResource);
    this.store.sketchBoardStore.refPageResource(pageResource);
  }

  getFirstPageResource() {
    return this.pageResources && this.pageResources[0];
  }

  serialize() {
    return {
      id: this.id,
      guid: this.guid,
      name: this.name,
      domain: this.domain,
      status: this.status,
      address: this.address,
      owner: this.owner,

      pageResources: this.pageResources.map(pageResource => pageResource.serialize()),
    }
  }

  updateSiteToServer() {
    this.store.siteStore.updateSiteToServer(this.serialize());
  }
}

export default Site;
