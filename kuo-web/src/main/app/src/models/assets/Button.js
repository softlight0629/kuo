import { observable, action, extendObservable } from 'mobx';
import Spec from './spec';

class Button {
  
  constructor(option) {
    this.astm = 'Button';
    this.spec = new Spec(option.spec);
  }

}

export default Button;
