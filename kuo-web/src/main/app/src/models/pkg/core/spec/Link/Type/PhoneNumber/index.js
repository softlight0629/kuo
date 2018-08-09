import { observable } from 'mobx';

class PhoneNumber {
  
  @observable phoneNum;

  constructor({ phoneNum }) {
    this.phoneNum = phoneNum;
  }
}

export default PhoneNumber;
