import { observable, extendObservable } from 'mobx';

class MenuItem {

  @observable text;

  constructor(option) {
    extendObservable(this, option);
  }

  serialize() {
    return {
      text: this.text,
    }
  }
}

export default MenuItem;
