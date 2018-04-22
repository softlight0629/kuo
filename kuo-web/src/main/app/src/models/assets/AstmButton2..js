import { observable, action, extendObservable } from 'mobx';
import { WSAEMSGSIZE } from 'constants';

class AstmButton {
  
  @observable x;
  @observable y;
  @observable width;
  @observable height;

  constructor(option) {
    extendObservable(this, option);
  }

  @action position(x, y) {
    this.x = x;
    this.y = y;
  } 

  @action size(width, height) {
    this.width = width;
    this.height = height;
  }
}

export default AstmButton;
