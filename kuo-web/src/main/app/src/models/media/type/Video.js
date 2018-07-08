import { observable } from "mobx";

class Video {

  @observable cover;

  constructor(option) {
    this.cover = option.cover;
    this.mediaType = option.mediaType;
  }

  get pictureUrl() {
    return this.cover;
  }
}

export default Video;
