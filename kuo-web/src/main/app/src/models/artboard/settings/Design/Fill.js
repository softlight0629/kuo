import { observable, extendObservable, action } from "mobx";

class Fill {

  @observable color;

  @observable opacity;

  @observable separator;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setOpacity(opacity) {
    this.opacity = opacity;
  }

  @action setSeparator(separator) {
    this.separator = separator;
  }

  serialize() {
    return {
      color: this.color,
      opacity: this.opacity,
      separator: this.separator,
    }
  }
}

export default Fill;
