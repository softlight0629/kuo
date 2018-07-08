import { observable, extendObservable, action } from "mobx";

class Fill {

  @observable color;

  @observable opacity;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setOpacity(opacity) {
    this.opacity = opacity;
  }

  serialize() {
    return {
      color: this.color,
      opacity: this.opacity,
    }
  }
}

export default Fill;
