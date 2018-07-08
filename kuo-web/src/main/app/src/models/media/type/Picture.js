import { observable, action, computed } from "mobx";

class Picture {

  @observable fileUrl;
  
  constructor(option) {
    this.fileName = option.fileName;
    this.fileUrl = option.fileUrl;
    this.originFileName = option.originFileName;
    this.mediaType= option.mediaType;
    this.mimeType = option.mimeType;
    this.width = option.width;
    this.height = option.height;
  }

  @action replaceImage(url) {
    console.log('replace...', url);
    this.fileUrl = url;
  }

  @computed
  get pictureUrl() {
    return this.fileUrl;
  }
}

export default Picture;
