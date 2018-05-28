import { observable, extendObservable, action } from 'mobx';

class TextIndent {

  @observable step = 0;

  constructor(option) {
    extendObservable(this, option);
  }

  @action increase() {
    this.step += 1;
  }

  @action decrease() {
    if (this.step === 0) {
      return;
    }
    
    this.step -= 1;
  }
}

export default TextIndent;
