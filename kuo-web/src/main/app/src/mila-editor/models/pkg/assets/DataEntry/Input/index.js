import { observable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory, OptsFactory } from '../../../core/factory';
import Store from './Store';
import Opts from './Opts';

class Input {

  @observable.ref spec;

  @observable.ref meta;

  @observable.ref opts;

  @observable.ref store;
  
  constructor({
    spec = {},
    state ={},
    store ={},
    meta = {},
    opts = {}
  }) {
    this.kind = 'Input';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create(meta);
    this.store = new Store(store);
    this.opts = OptsFactory.create(opts, opts => new Opts(opts));
  }
}

export default Input;
