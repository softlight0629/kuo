import { observable, autorun, action, reaction } from 'mobx';
import Site from '../../models/site/Site';

class WorkSpaceStore {

  @observable.ref site = {};

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  fetch(guid) {
    this.service.siteService.fetchSiteFromServer(guid)
      .then(action(res => {
        if (res.data) {
          this.site = new Site(this.store, res.data);
          this.store.sketchBoardStore.activatePage(this.site.getFirstPageResource())
          // this.store.sketchBoardStore.appendAst({
          //   kind: 'Gallery',
          //   meta: {
          //   },
          //   spec: {
          //     rect: {
          //       width: 568,
          //       height: 539,
          //       x: 200,
          //       y: 200,
          //     }
          //   },
          //   state: {
          //   },
          //   store: {
          //   }
          // });
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

    this.service.siteService.updateSiteToServer(this.site.serialize())
      .then(res => {
        console.log(res);
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
}

export default WorkSpaceStore;
