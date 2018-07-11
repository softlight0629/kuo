import { observable, computed } from 'mobx';

class MediaBase {

  @observable fileUrl;

  constructor(option) {
    this.id = option.id;
    this.guid = option.guid;
    this.fileName = option.fileName;
    this.fileUrl = option.fileUrl;
    this.originFileName = option.originFileName;
    this.mediaType = option.mediaType;
    this.mimeType = option.mimeType;
    this.createAt = option.createAt;
    this.updateAt = option.updateAt;
  }

  @computed get cover() {
    return this.fileUrl;
  } 

}

export default MediaBase;
