import { observable } from 'mobx';

class WebAddress {
  
  @observable address;

  // NewWin|CurrentWin
  @observable openType;

  constructor({ address, openType }) {
    this.address = address;
    this.openType = openType;
  }
}

export default WebAddress;
