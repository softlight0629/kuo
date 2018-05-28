import { observable } from "mobx";

class Store {

  @observable text;

  constructor({ text }) {
    this.text = text;
  }
}

export default Store;

