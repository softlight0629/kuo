import { observable } from "mobx";

class Store {

  @observable.ref buttons = [];

  constructor({ buttons }) {
  }

  serialize() {
    return {
      text: this.text,
    }
  }
}

export default Store;

