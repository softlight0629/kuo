import { observable, action } from 'mobx';

class CompToolUiStore {
  
  @observable.ref astm;

  @action setAstm(astm) {
    this.astm = astm;
  }
}

export default CompToolUiStore;
