import { observable } from "mobx";

class Store {

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

