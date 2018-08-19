import { observable, autorun, action } from 'mobx';

class Rect {

  @observable x;

  @observable y;

  @observable width;

  @observable height;

  constructor({
    x,
    y,
    width,
    height,
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    autorun(() => {
      console.log(this.width, this.height, 'wdddddd');
    })
  }

  @action setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  @action setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  serialize() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }
}

export default Rect;
