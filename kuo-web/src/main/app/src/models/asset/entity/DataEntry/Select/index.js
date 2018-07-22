import { observable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory, OptsFactory } from '../../../common';
import Store from './Store';
import Opts from './Opts';

class Select {

  @observable.ref spec;

  @observable.ref meta;

  @observable.ref opts;
  constructor({
    spec = {},
    state = {},
    store = {},
    meta = {},
    opts = {},
  }) {
    this.kind = 'Select';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create(meta);
    this.store = new Store(store);
    this.opts= OptsFactory.create(opts, opts => new Opts(opts));
  }
}

export default Select;
