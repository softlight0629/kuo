import { observable, action, extendObservable } from 'mobx';
import Spec from './spec';

class AstmButton {
  
  astm = 'Button';
  spec = {};

  constructor(option) {
    this.spec = new Spec(option.spec);
  }

  @action position(x, y) {
    this.spec.rect.x = x;
    this.spec.rect.y = y;
  } 

  @action size(width, height) {
    this.spec.rect.width = width;
    this.spec.rect.height = height;
  }
}

export default AstmButton;
