import { observable, extendObservable, action } from 'mobx';

class TextAlign {

  @observable align = 'left';

  constructor(option) {
    extendObservable(this, option);
  }

  @action setAlign(align) {
    this.align = align;
  }
}

export default TextAlign;
