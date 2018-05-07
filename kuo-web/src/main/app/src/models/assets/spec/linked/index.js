import { observable, extendObservable } from 'mobx';

class SpecLinked {

  @observable page;

  @observable anchor;

  @observable webAddress;

  @observable email;

  @observable phoneNum;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default SpecLinked;
