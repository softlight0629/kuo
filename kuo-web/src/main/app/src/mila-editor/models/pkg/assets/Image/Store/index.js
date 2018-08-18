import { observable, action } from "mobx";

class Store {

  @observable src;

  @observable alt;

  @observable tooltip;

  @observable filter
  
  constructor({ src, alt, tooltip, filter}) {
    this.src = src;
    this.alt = alt;
    this.filter = filter;
    this.tooltip = tooltip;
  }

  @action setSrc(src) {
    this.src = src;
  }

  @action setAlt(alt) {
    this.alt = alt;
  }

  @action setFilter(filter) {
    this.filter = filter;
  }

  @action setTooltip(tooltip) {
    this.tooltip = tooltip;
  }

  serialize() {
    return {
      src: this.src,
      alt: this.alt,
    }
  }
}

export default Store;
