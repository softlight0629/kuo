import { observable } from "mobx";

class Store {

  @observable src;

  @observable alt;
  
  constructor({ src, alt }) {
    this.src = src;
    this.alt = alt;
  }
}

export default Store;
