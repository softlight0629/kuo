import { observable, action } from 'mobx';
import * as _ from 'lodash';

class MediaGallery {

  @observable visible = false;

  @observable selectedMedias = [];

  @observable.ref categoryFolders = [];

  @observable.ref medias = [];

  props = {};

  category = '';

  @action open(category, props) {
    this.category = category;
    this.props = props;

    this.visible = true;
  }

  @action close() {
    this.visible = false;
  }

  @action setCategoryFolders(categoryFolders) {
    this.categoryFolders = categoryFolders;
  }

  @action setCategoryMedias(medias) {
    this.medias = medias;
  }

  @action addSelectedMedia(media) {
    this.selectedMedias.push(media);
  }

  @action removeFromSelectedMedias(media) {
    _.remove(this.selectedMedias, {
      id: media.id,
    });
  }

  @action reset() {
    this.props = {};
    this.medias = [];
    this.categoryFolders = [];
    this.selectedMedias = [];
  }
}

export default new MediaGallery();
