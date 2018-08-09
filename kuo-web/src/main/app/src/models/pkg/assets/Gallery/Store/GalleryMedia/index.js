import { observable, action } from 'mobx';

class GalleryMedia {

  @observable title;

  @observable description;

  @observable linkAddress;

  @observable cover;

  @observable width;

  @observable height;

  @observable mediaType;

  constructor({
    title,
    description,
    linkAddress,
    width,
    height,
    cover,
    mediaType,
  }) {
    this.title = title,
    this.description = description;
    this.linkAddress = linkAddress;
    this.width = width;
    this.height = height;
    this.cover = cover;
    this.mediaType = mediaType;
  }

  @action setCover(cover) {
    this.cover = cover;
  }
}

export default GalleryMedia;
