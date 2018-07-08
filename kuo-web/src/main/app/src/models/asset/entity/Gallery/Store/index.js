import { observable } from 'mobx';
import { MediaFactory } from '../../../common';

class Store {
  
  @observable medias = [];

  constructor({ medias }) {
    this.medias = medias.map(media => MediaFactory.create(media));
  }
}

export default Store;
