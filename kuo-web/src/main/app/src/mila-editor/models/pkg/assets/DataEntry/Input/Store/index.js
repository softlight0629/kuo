import { observable, action } from "mobx";

class Store {

  @observable placeholderText = '';

  @observable initialText = '';

  constructor({ placeholderText, initialText }) {
    this.placeholderText = placeholderText;
    this.initialText = initialText;
  }

  @action setPlaceholderText(placeholderText) {
    this.placeholderText = placeholderText;
  }

  @action setInitialText(initialText) {
    this.initialText = initialText;
  }

  serialize() {
    return {
      text: this.text,
    }
  }
}

export default Store;

