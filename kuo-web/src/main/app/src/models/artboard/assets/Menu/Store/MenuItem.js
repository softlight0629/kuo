import { observable, extendObservable } from 'mobx';

class MenuItem {

  @observable text;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default MenuItem;
