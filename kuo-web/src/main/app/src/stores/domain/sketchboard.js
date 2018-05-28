import { observable, action } from 'mobx';
import { AstmButton, AstmMenu, AstmText } from '../../models/artboard/assets';

class SketchBoardStore {

  @observable astms = [];

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  _getAstm(option) {
    if (option.astm === 'Button') {
      return new AstmButton(option);
    }

    if (option.astm === 'Menu') {
      return new AstmMenu(option);
    }

    if (option.astm === 'Text') {
      return new AstmText(option);
    }
  }

  @action addAst(option) {
    console.log(option, 'option..');
    const astm = this._getAstm(option);
    this.astms.push(astm);

    this.store.astRefUiStore.refAstm(astm);
  }
}


export default SketchBoardStore;
