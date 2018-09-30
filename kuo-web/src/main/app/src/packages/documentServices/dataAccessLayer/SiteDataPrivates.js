import * as _ from 'lodash';

let counter = 0;

class SiteDataPrivates {

  constructor() {
    this.name = `_private_${counter}`;
    counter++;
  }

  set(key, value) {
    key[this.name] = value;
  }

  get(key) {
    return key[this.name]
  }

  delete(key) {
    delete key[this.name];
  }

  has(key) {
    return _.has(key, this.name);
  }

}

export default SiteDataPrivates;
