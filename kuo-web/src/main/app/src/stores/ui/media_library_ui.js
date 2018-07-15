import { observable, action } from 'mobx'
import { FreePane, MyUploadPane } from '../../models/domain/media/entity/pane';

class MediaLibraryUiStore {
  
  @observable mediaLibraryVisible = false;

  @observable mediaPanes = {};

  @observable.ref currentPane = {};

  constructor(store, service) {
    this.store = store;
    this.service = service;

    this.mediaPanes.myUploads = new MyUploadPane(service, 'myUploads');
    // this.mediaPanes.socials = new MediaPane(service, 'socials');
    this.mediaPanes.frees = new FreePane(service, 'frees');
  }
  
  @action fetchPane(type) {
    this.currentPane = this.mediaPanes[type];
    this.currentPane.fetch()
      .catch(e => {
        console.log(e);
      });
  }
  
  @action openWithPane(paneType) {
    this.mediaLibraryVisible = true;
    this.fetchPane(paneType);
  }

  @action open() {
    this.mediaLibraryVisible = true;
  }

  @action close() {
    this.mediaLibraryVisible = false;
  }

}

export default MediaLibraryUiStore;
