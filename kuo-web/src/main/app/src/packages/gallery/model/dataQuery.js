import { observable, action } from 'mobx';
import GalleryMedia from './GalleryMedia';

class DataQuery {
  
  @observable galleryMedias = [];

  constructor({ galleryMedias }) {
    this.galleryMedias = galleryMedias.map(galleryMedia => new GalleryMedia(galleryMedia));
  }

  @action addGalleryMedias(galleryMedias) {
    if (!galleryMedias || galleryMedias.length <= 0) {
      return;
    }

    for (const galleryMedia of galleryMedias) {
      this.galleryMedias.push(new GalleryMedia(galleryMedia));
    }
  }

  @action addGalleryMedia(galleryMedia) {
    this.galleryMedias.push(new GalleryMedia(galleryMedia));
  }
}

export default DataQuery;
