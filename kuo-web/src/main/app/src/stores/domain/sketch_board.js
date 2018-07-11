import { observable, action } from 'mobx';
import { AstmButton, AstmMenu, AstmText, AstmImage } from '../../models/asset/entity';
import { PageRes } from '../../models/domain/site/entity/resource';

class SketchBoardStore {

  @observable.ref pageResource;

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  @action activatePage(pageResource) {
    this.pageResource = pageResource;
  }

  @action appendAst(option) {
    this.pageResource.appendAst(option);
  }
}


export default SketchBoardStore;
