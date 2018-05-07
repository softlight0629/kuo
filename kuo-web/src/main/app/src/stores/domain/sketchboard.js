import { observable, action } from 'mobx';
import { AstmButton } from '../../models/assets';

class SketchBoardStore {

  @observable astms = [];

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  @action addAst(option) {
    const astm = new AstmButton(option);
    this.astms.push(astm);

    this.store.astmRefUiStore.refAstm(astm);
  }
}


export default SketchBoardStore;
