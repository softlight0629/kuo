import { observable, extendObservable } from 'mobx';

class Rect {

  @observable x;
  @observable y;
  @observable width;
  @observable height;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default Rect;
