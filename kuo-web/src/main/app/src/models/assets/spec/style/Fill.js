import { observable, extendObservable } from "mobx";

class Fill {

  @observable color;

  @observable opacity;

  constructor(option) {
    extendObservable(this, option);
  }

  
}

export default Fill;
