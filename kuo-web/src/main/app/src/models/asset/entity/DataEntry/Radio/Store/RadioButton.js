import { observable, action } from "mobx";
const i = 0;
class RadioButton {

  @observable label = '';

  @observable value = '';

  constructor({ label, value }) {
    this.id = `${i++}`;
    this.label = label;
    this.value = value;
  }

  @action setLabel(label) {
    this.label = label;
  }

  @action setValue(value) {
    this.value = value;
  }
}

export default RadioButton;
