import { observable, extendObservable, action } from 'mobx';

class SpecLinked {

  @observable page;

  @observable anchor;

  @observable webAddress;

  @observable email;

  @observable phoneNum;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setPage(page) {
    this.page = page;
  }

  @action setAnchor(anchor) {
    this.anchor = anchor;
  }

  @action setWebAddress(webAddress) {
    this.webAddress = webAddress;
  }

  @action setEmail(email) {
    this.email = email;
  }

  @action setPhoneNum(phoneNum) {
    this.phoneNum = phoneNum;
  }
}

export default SpecLinked;
