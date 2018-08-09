import { observable, action } from 'mobx';
import MediaFolder from '../../folder/MediaFolder';
import { MediaFactory } from '../../core';

class MyUploadPane {
  
  @observable.ref folders = [];
  @observable.ref medias = [];
  @observable.ref currentFolder = {};

  constructor(service, paneType) {
    this.service = service;
    this.paneType = paneType;
  }

  fetch() {
    return this.service.mediaService.fetchMediaFolders('111')
      .then(action(res => {
        this.folders = res.data.map(folder => new MediaFolder(folder));
        this.selectFolder(this.folders[0]);
      }));
  }

  @action selectFolder(folder) {
    this.currentFolder = folder;
    this.service.mediaService.fetchMediaResources(folder.guid)
      .then(action(res => {
        this.medias = res.data.map(media => MediaFactory.create(media));
      }))
  }

  @action reload(folder) {
    this.service.mediaService.fetchMediaResources(this.currentFolder.guid)
      .then(action(res => {
        this.medias = res.data.map(media => MediaFactory.create(media));
      }));
  }

  addNewFolder(name, parentGuid) {
    return this.service.mediaService.addMediaFolder(name, parentGuid)
      .then(res => {
        this.fetch()
          .then(() => {
            this.selectFolder((this.folders.filter(folder => folder.guid === res.data.guid))[0]);
          })
      });
  }
}

export default MyUploadPane;
