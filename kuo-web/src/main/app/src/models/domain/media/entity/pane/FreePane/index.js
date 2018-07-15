import { observable, action } from 'mobx';
import MediaCategory from '../../MediaCategory';
import { MediaFactory } from '../../../common';

class FreePane {
  
  @observable.ref categories = [];
  @observable.ref medias = [];
  @observable.ref currentCategory = {};

  constructor(service, paneType) {
    this.service = service;
    this.paneType = paneType;
  }

  fetch() {
    return this.service.mediaService.fetchMediaCategories('416cae22-ceaf-49b0-acae-22ceaf69b075')
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
      }));
  }

  @action reload() {
    this.service.mediaService.fetchMediaResources(this.currentCategory.guid)
      .then(action(res => {
        this.medias = res.data.map(media => MediaFactory.create(media));
      }));
  }
}

export default FreePane;
