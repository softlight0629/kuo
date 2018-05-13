import { observable, extendObservable, action } from 'mobx';

class Border {

  @observable color;

  @observable opacity;

  @observable width;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setOpacity(opacity) {
    this.opacity = opacity;
  }

  @action setWidth(width) {
    this.width = width;
  }
}

export default Border;
