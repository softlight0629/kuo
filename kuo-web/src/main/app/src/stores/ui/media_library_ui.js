import { observable, action } from 'mobx'
import MediaPane from '../../models/domain/media/entity/MediaPane';

class MediaLibraryUiStore {
  
  @observable mediaLibraryVisible = false;

  @observable mediaPanes = {};

  @observable.ref currentPane = {};

  constructor(store, service) {
    this.store = store;
    this.service = service;

    this.mediaPanes.myUploads = new MediaPane(service, 'myUploads');
    this.mediaPanes.socials = new MediaPane(service, 'socials');
    this.mediaPanes.frees = new MediaPane(service, 'frees');
  }
  
  fetchPane(type) {
    this.mediaPanes[type].fetch()
      .then(action(() => {
        this.currentPane = this.mediaPanes[type];
      }))
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
