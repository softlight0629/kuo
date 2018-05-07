import { observable, action, extendObservable } from 'mobx';
import Spec from './spec';

class AstmButton {
  
  astm = 'Button';
  spec = {};

  constructor(option) {
    this.spec = new Spec(option.spec);
  }

  @action position(x, y) {
   
    this.spec.position(x, y);
  } 

  size(width, height) {
    this.spec.size(width, height);
  }

  fillColor(color) {
    this.spec.fillColor(color);
  }
}

export default AstmButton;
