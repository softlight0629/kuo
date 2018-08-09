import { observable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory, OptsFactory } from '../../../core/factory';
import Store from './Store';

class Radio {

  @observable.ref spec;

  @observable.ref meta;

  @observable.ref store;
  
  constructor({ spec ={}, state ={}, store ={}, meta ={}}) {
    this.kind = 'Radio';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create(meta);
    this.store = new Store(store);
  }
}

export default Radio;
