import { observable, extendObservable } from 'mobx';

class Rect {

  @observable x;
  @observable y;
  @observable width;
  @observable y;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default Rect;
