import { observable, action } from 'mobx';
import {
  Page,
  PhoneNumber,
  TopBottom,
  WebAddress,
  Email,
} from './Type';

class Link {

  // None|Page|Anchor|WebAddress|Email|PhoneNumber|Document|TopBottom
  @observable type = 'None';

  @observable.ref page;

  @observable.ref webAddress;

  @observable.ref email;

  @observable.ref phoneNumber;

  @observable.ref topBottom;

  constructor({ 
    type = 'None',
    page,
    webAddress,
    email,
    phoneNumber,
    topBottom,
  }) {
    this.type = type;
    this.page = page && new Page(page);
    this.webAddress = webAddress && new WebAddress(webAddress);
    this.email = email && new Email(email);
    this.phoneNumber = phoneNumber && new PhoneNumber(phoneNumber);
    this.topBottom = topBottom && new TopBottom(topBottom);
  }

  @action setPage(option) {
    this.type = 'Page';
    this.page = new Page(option);
  }

  @action setEmail(option) {
    this.type = 'Email';
    this.email = new Email(option);
  }

  @action setWebAddress(option) {
    this.type = 'WebAddress';
    this.webAddress = new WebAddress(option);
  }

  @action setPhoneNumber(option) {
    this.type = 'PhoneNumber';
    this.phoneNumber = new PhoneNumber(option);
  }

}

export default Link;
