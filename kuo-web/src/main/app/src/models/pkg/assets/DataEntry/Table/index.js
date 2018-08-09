import { observable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory, OptsFactory } from '../../../core/factory';
import Store from './Store';

class Table {

  @observable.ref spec;

  @observable.ref meta;

  constructor({spec ={}, state ={}, store ={}, meta ={}}) {
    this.kind = 'Table';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create(meta);
    this.store = new Store(store);
  }
}

export default Table;
