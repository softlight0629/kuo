import { observable, extendObservable } from 'mobx';

class Shadow {
  
  @observable angle;

  @observable distance;

  @observable size;

  @observable blur;

  @observable color;

  @observable opacity;

  constructor(option) {
    extendObservable(this, option);
  }
}

export default Shadow;
