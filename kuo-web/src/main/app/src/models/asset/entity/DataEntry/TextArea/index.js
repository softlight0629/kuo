import { observable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory } from '../../../common';
import Store from './Store';

class TextArea {

  @observable.ref spec;

  @observable.ref meta;

  constructor({spec ={}, state ={}, store ={}, meta ={}}) {
    this.kind = 'TextArea';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create(meta);
    this.store = new Store(store);
  }
}

export default TextArea;
