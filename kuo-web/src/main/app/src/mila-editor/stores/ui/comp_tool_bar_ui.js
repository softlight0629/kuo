import { observable, action, extendObservable } from 'mobx';

class CompToolBarUiStore {
  
  @observable x = 845;

  @observable y = -80;

  @action position(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default CompToolBarUiStore;
