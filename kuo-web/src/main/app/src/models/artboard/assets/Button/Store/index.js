import { observable } from "mobx";

class Store {

  @observable text;

  constructor({ text }) {
    this.text = text;
  }

  serialize() {
    return {
      text: this.text,
    }
  }
}

export default Store;

