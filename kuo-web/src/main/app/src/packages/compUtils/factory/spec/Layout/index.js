import { observable, extendObservable, action } from 'mobx';

class SpecLayout {

  @observable align;
  
  @observable margin;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setAlign(align) {
    this.align = align;
  }

  @action setMargin(margin) {
    this.margin = margin;
  }

  serialize() {
    return {
      align: this.align,
      margin: this.margin,
    }
  }
}

export default SpecLayout;
