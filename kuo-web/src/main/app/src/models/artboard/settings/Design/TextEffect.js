import { observable, extendObservable, action } from 'mobx';

class TextEffect {
  
  @observable effect;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setEffect(effect) {
    this.effect = effect;
  }
}

export default TextEffect;
