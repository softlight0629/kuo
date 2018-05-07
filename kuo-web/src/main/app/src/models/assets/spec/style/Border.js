import { observable, extendObservable } from 'mobx';

class Border {

  @observable color;

  @observable opacity;

  @observable width;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default Border;
