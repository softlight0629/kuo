import { observable, action } from 'mobx';
import { AstmButton } from '../../models/assets';

class SketchBoardStore {

  @observable astms = [];

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  @action addAst(option) {
    this.astms.push(new AstmButton(option));
  }
}


export default SketchBoardStore;
