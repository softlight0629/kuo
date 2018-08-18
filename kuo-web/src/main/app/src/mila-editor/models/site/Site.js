import { observable, extendObservable, action, reaction, autorun } from 'mobx';
import { PageRes } from './resource';

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

  @observable pageResList = [];

  constructor(store, option) {
    this.store = store;
    extendObservable(this, option);

    this.pageResList = 
      option.pageResList.map(pageRes => new PageRes(this.store, pageRes));
  }

  @action addPageResource(option) {
    const pageRes = new PageRes(this.store, option);
    this.pageResList.push(pageRes);
    this.store.sketchBoardStore.activatePage(pageRes);
  }

  getFirstPageResource() {
    return this.pageResList && this.pageResList[0];
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

      pageResList: this.pageResList.map(pageRes => pageRes.serialize()),
    }
  }

  updateSiteToServer() {
    this.store.siteStore.updateSiteToServer(this.serialize());
  }
}

export default Site;
