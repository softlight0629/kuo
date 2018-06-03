import { observable, action } from 'mobx';
import { AstmButton, AstmMenu, AstmText, AstmImage } from '../../models/artboard/assets';

class SketchBoardStore {

  @observable astms = [];

  constructor(store, service) {
    this.store = store;
    this.service = service;
  }

  _getAstm(option) {
    if (option.kind === 'Button') {
      return new AstmButton(option);
    }

    if (option.kind === 'Menu') {
      return new AstmMenu(option);
    }

    if (option.kind === 'Text') {
      return new AstmText(option);
    }

    if (option.kind === 'Image') {
      return new AstmImage(option);
    }
  }

  @action addAst(option) {
    const astm = this._getAstm(option);
    console.log(option.kind, astm);
    this.astms.push(astm);

    this.store.astRefUiStore.refAstm(astm);
  }
}


export default SketchBoardStore;
