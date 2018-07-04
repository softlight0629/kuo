import { observable, extendObservable, action } from "mobx";

class Separator {

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

export default Separator;
