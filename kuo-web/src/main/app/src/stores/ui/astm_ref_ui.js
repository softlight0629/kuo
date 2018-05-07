import { observable, action } from 'mobx';

class AstmRefUiStore {

  @observable.ref astm;

  @action refAstm(astm) {
    this.astm = astm;
  }
}

export default AstmRefUiStore;
