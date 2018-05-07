import { observable, extendObservable } from 'mobx';

class SpecText {
  
  @observable content;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default SpecText;
