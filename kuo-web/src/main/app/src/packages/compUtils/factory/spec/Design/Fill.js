import { observable, extendObservable, action } from "mobx";

class Fill {

  @observable color;

  @observable opacity;

  @observable filterEffect;

  constructor({
    color,
    opacity,
    filterEffect,
  }) {
    this.color = color;
    this.opacity = opacity;
    this.filterEffect = filterEffect;
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setOpacity(opacity) {
    this.opacity = opacity;
  }

  @action setFilterEffect(filterEffect) {
    this.filterEffect = filterEffect;
  }

  serialize() {
    return {
      color: this.color,
      opacity: this.opacity,
    }
  }
}

export default Fill;
