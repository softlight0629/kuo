import { observable } from 'mobx';

class Opts {

  @observable toggleOnDefault;

  constructor({
    toggleOnDefault = false,
  }) {
    this.toggleOnDefault = toggleOnDefault;
  }
}

export default Opts;
