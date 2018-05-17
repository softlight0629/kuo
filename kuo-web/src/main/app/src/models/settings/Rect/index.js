import { observable, extendObservable, action } from 'mobx';

class Rect {

  @observable x;

  @observable y;

  @observable width;

  @observable height;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setPosition(x, y) {
    console.log('sdasdsadsa', x, y);
    this.x = x;
    this.y = y;
  }

  @action setSize(width, height) {
    this.width = width;
    this.height = height;
  }
}

export default Rect;
