import { observable, extendObservable } from 'mobx';

class SpecLayout {

  @observable align;
  @observable margin;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default SpecLayout;
