import { observable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory } from '../../../core/factory';
import Store from './Store';

class Dropdown {

  @observable.ref spec;

  @observable.ref meta;
  constructor({ spec ={}, state ={}, store ={}, meta ={}}) {
    this.kind = 'Dropdown';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create(meta);
    this.store = new Store(store);
  }
}

export default Dropdown;
