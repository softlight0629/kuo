import { observable, action } from 'mobx';

class ColorPickerUiStore {

  onCompleteCallback = () => {};

  @observable colorPickerVisible = false;

  callback(callback) {
    this.onCompleteCallback = callback;
  }

  @action show() {
    this.colorPickerVisible = true;
  }

  @action hide() {
    this.colorPickerVisible = false;
  }
}

export default ColorPickerUiStore;
