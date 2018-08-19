import { observable, autorun, action } from 'mobx';

class Layout {

  @observable x;

  @observable y;

  @observable width;

  @observable height;

  @observable scale;

  @observable rotationInDegrees;

  @observable fixedPosition;

  constructor({
    x,
    y,
    width,
    height,
    scale = 1.0,
    rotationInDegrees = 0.0,
    fixedPosition = false,
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.rorationInDegrees = rotationInDegrees;
    this.fixedPosition = fixedPosition;

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

  @action setScale(scale) {
    this.scale = scale;
  }

  @action setRotationInDegrees(rotationInDegrees) {
    this.rotationInDegrees = rotationInDegrees;
  }

  @action setFixedPosition(fixedPosition) {
    this.fixedPosition = fixedPosition;
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

export default Layout;
