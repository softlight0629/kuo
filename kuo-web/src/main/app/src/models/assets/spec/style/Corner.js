import { observable, extendObservable } from 'mobx';

class Corner {

  @observable leftTop;

  @observable rightTop;

  @observable leftBottom;

  @observable righBottom;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default Corner;
