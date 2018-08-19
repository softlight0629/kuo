import { observable, action } from 'mobx';
import { AstmButton, AstmMenu, AstmText, AstmImage } from '../../models/pkg/assets';
import { PageRes } from '../../models/site/resource';

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
  @action addComponent(option) {
    this.pageResource.appendAst(option);
  }

  @action appendComp(option) {
    this.pageResource.appendAst(option);
  }
}


export default SketchBoardStore;
