import { observable } from "mobx";

class Store {

  @observable src;

  @observable alt;
  
  constructor({ src, alt }) {
    this.src = src;
    this.alt = alt;
  }

  serialize() {
    return {
      src: this.src,
      alt: this.alt,
    }
  }
}

export default Store;
