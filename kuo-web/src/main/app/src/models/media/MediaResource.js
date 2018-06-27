import { observable } from "mobx";

class MediaResource {
  
  @observable id;

  @observable fileUrl;

  @observable fileName;

  constructor(option) {
    this.id = option.id;
    this.fileUrl = option.fileUrl;
    this.fileName = option.fileName;
  }
}

export default MediaResource;
