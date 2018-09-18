import * as _ from 'lodash';

const _privates = {};

class SiteDataPrivates {

  set(key, value) {
    _privates[key] = value;
  }

  get(key) {
    return _privates[key];
  }

  has(key) {
    return _.has(_privates, key);
  }

}

export default SiteDataPrivates;
