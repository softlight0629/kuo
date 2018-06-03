import { observable, extendObservable, action } from 'mobx';

class TextAlign {

  @observable align = 'left';

  constructor(option) {
    extendObservable(this, option);
  }

  @action setAlign(align) {
    this.align = align;
  }

  serialize() {
    return {
      align: this.align,
    }
  }
}

export default TextAlign;
