import { observable, action } from 'mobx'
import * as _ from 'lodash';
import { FreePane, MyUploadPane } from '../../models/media/pane';

class MediaLibraryUiStore {
  
  @observable mediaLibraryVisible = false;

  @observable mediaPanes = {};

  @observable.ref currentPane = {};

  @observable selectedMedias = [];

  doneFn = null;

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

  @action select(media) {
    const exists = this.selectedMedias.filter(selectedMedia => selectedMedia.id === media.id);
    if (exists.length > 0) {
      _.remove(this.selectedMedias, selectedMedia => selectedMedia.id === media.id);
    } else {
      this.selectedMedias.push(media);
    }
  }

  done() {
    this.doneFn && this.doneFn(this.selectedMedias);
    this.reset();
  }

  @action reset() {
    this.doneFn = null;
    this.selectedMedias = [];
  }
  
  @action openWithPane(paneType, doneFn) {
    this.mediaLibraryVisible = true;
    this.fetchPane(paneType);
    this.doneFn = doneFn;
  }

  @action open(doneFn) {
    this.mediaLibraryVisible = true;
    this.doneFn = doneFn;
  }

  @action close() {
    this.mediaLibraryVisible = false;
  }

}

export default MediaLibraryUiStore;
