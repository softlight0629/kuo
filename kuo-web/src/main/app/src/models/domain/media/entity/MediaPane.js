import { observable, action } from 'mobx';
import MediaCategory from './MediaCategory';
import { MediaFactory } from '../common';

class MediaPane {
  
  @observable.ref categories = [];
  @observable.ref medias = [];
  @observable.ref currentCategory = {};

  constructor(service, paneType) {
    this.service = service;
    this.paneType = paneType;
  }

  fetch() {
    return this.service.mediaService.fetchMediaCategories('d03a8377-fb85-4d08-ba83-77fb85ad0813')
      .then(action(res => {
        this.categories = res.data.map(category => new MediaCategory(category));
        this.selectCategory(this.categories[0]);
      }));
  }

  @action selectCategory(category) {
    this.currentCategory = category;

    this.service.mediaService.fetchMediaResources(category.guid)
      .then(action(res => {
        this.medias = res.data.map(media => MediaFactory.create(media));
      }))
  }
}

export default MediaPane;
