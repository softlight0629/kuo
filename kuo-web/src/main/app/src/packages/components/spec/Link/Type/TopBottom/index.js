import { observable } from 'mobx';

class TopBottom {
  
  // Top|Bottom
  @observable direction;

  constructor({ direction }) {
    this.direction = direction;
  }
}

export default TopBottom;
