import { observable } from "mobx";

class DataQuery {

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

export default DataQuery;

