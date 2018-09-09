import { observable } from 'mobx';

class PropQuery {

  @observable fullWidth;

  constructor({
    fullWidth = true,
  }) {
    this.fullWidth = fullWidth;
  }
}

export default PropQuery;
