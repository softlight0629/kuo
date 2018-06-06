import { observable, action } from 'mobx';
import { AstmButton, AstmMenu, AstmText, AstmImage } from '../../models/artboard/assets';
import { PageResource } from '../../models/site/resources';

class SketchBoardStore {

  @observable.ref pageResource;

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  @action refPageResource(pageResource) {
    this.pageResource = pageResource;
  }

  @action addAst(option) {
    this.pageResource.addAst(option);
  }
}


export default SketchBoardStore;
