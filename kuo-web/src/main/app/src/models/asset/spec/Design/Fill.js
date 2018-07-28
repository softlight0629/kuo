import { observable, extendObservable, action } from "mobx";

class Fill {

  @observable color;

  @observable opacity;

  @observable filter;

  constructor({
    color,
    opacity,
    filter,
  }) {
    this.color = color;
    this.opacity = opacity;
    this.filter = filter;
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setOpacity(opacity) {
    this.opacity = opacity;
  }

  @action setFilter(filter) {
    this.filter = filter;
  }

  serialize() {
    return {
      color: this.color,
      opacity: this.opacity,
    }
  }
}

export default Fill;
