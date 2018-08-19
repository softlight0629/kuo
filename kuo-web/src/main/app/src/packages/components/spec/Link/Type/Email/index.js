import { observable } from 'mobx';

class Email {
  
  @observable address;

  // NewWin|CurrentWin
  @observable subject;

  constructor({ address, subject }) {
    this.address = address;
    this.subject = subject;
  }
}

export default Email;
