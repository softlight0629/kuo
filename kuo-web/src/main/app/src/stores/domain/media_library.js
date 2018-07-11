import { observable, action } from 'mobx';

class MediaLibraryStore {

  @observable.ref myUploadMedias = {};

  @observable.ref freeMedias = {};

  @observable.ref socialMedias = {};

  constructor(store, service) {
    this.store= store;
    this.service = service;
  }
}

export default MediaLibraryStore;
