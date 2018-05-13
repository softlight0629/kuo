import { observable, extendObservable, action } from 'mobx';

class SpecText {
  
  @observable content;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setContent(content) {
    this.content = content;
  }
}


export default SpecText;
