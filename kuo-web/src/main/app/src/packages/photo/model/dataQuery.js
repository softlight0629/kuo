import { observable, action } from "mobx";

class DataQuery {

  @observable src;

  @observable alt;

  @observable filter
  
  constructor({ src, alt, filter}) {
    this.src = src;
    this.alt = alt;
    this.filter = filter;
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

  serialize() {
    return {
      src: this.src,
      alt: this.alt,
    }
  }
}

export default DataQuery;
