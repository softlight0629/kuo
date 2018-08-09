import { observable, action, computed } from "mobx";
import RadioButton from './RadioButton';
import arrr from '../../../../../../utility/array';

class Store {

  @observable radioBtns = [];

  constructor({ radioBtns }) {
    this.radioBtns = radioBtns.map(radioBtn => new RadioButton(radioBtn));
  }

  @action addRadioBtn() {
    const key = `Radio button ${this.radioBtns.length + 1}`;
    this.radioBtns.push(new RadioButton({
      label: key,
      value: key,
    }));
  }

  @action removeRadioBtn(radioBtn) {
    const idx = this.radioBtns.indexOf(radioBtn);
    if (idx !== -1) {
      this.radioBtns.splice(idx, 1);
    }
  }

  @action reorderRadioBtns(sourceIdx, destIdx) {
    const radioBtns = arrr.reorder(
      this.radioBtns,
      sourceIdx,
      destIdx,
    );

    this.radioBtns = radioBtns;
  }

  @action duplicateRadioBtn(radioBtn) {
    const label = `Copy of ${radioBtn.label}`;
    const value = `Copy of ${radioBtn.value}`;
    const copyOfRadioBtn = new RadioButton({
      label,
      value,
    });
    const idx = this.radioBtns.indexOf(radioBtn) + 1;
    this.radioBtns = [
      ...this.radioBtns.slice(0, idx),
      copyOfRadioBtn,
      ...this.radioBtns.slice(idx),
    ];
  }

  serialize() {
    return {
    }
  }
}

export default Store;

