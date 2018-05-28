import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory } from '../../common';
import Store from './Store';

class Button {

  @observable text;
  
  constructor({ spec, state, store }) {
    this.astm = 'Button';
    this.kind = 'Button';
    this.spec = SpecFactory.create(spec || {});
    this.store = new Store(store);
  }
}

export default Button;
