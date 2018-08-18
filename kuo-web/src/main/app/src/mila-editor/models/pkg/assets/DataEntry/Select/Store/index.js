import { observable, action } from "mobx";
import SelectItem from './SelectItem';
import arrr from '../../../../../../../utility/array';

class Store {

  @observable items = [];

  @observable placeholderText;

  @observable initialText;

  constructor({
    items,
    placeholderText,
    initialText,
  }) {
    this.items = items.map(item => new SelectItem(item));
    this.placeholderText = placeholderText;
    this.initialText = initialText;
  }

  @action setPlaceholderText(placeholderText) {
    this.placeholderText = placeholderText;
  }

  @action setInitialText(initialText) {
    this.initialText = initialText;
  }

  @action addItem() {
    const key = `Item ${this.items.length + 1}`;
    this.items.push(new SelectItem({
      label: key, 
      value: key,
    }));
  }

  @action removeItem(item) {
    const idx = this.items.indexOf(item);
    if (idx !== -1) {
      this.items.splice(idx, 1);
    }
  }

  @action reorderItems(sourceIdx, destIdx) {
    const items = arrr.reorder(
      this.items,
      sourceIdx,
      destIdx,
    );

    this.items = items;
  }

  @action duplicateItem(item) {
    const label = `Copy of ${item.label}`;
    const value = `Copy of ${item.value}`;
    const copyOfItem = new SelectItem({
      label,
      value,
    });
    const idx = this.items.indexOf(item) + 1;
    this.items = [
      ...this.items.slice(0, idx),
      copyOfItem,
      ...this.items.slice(idx),
    ];
  }

  serialize() {
    return {
    }
  }
}

export default Store;

