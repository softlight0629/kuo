import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory, OptsFactory } from '../../core/factory';
import TextSpec from './Spec';
import Store from './Store';

class Text {

  constructor({ spec, store, meta = {}}) {
    this.astm = 'Text';
    this.kind = 'Text';

    this.spec = SpecFactory.create(spec || {}, spec => new TextSpec(spec));
    this.meta = MetaFactory.create(meta);
    this.store = new Store(store);
  }

  serialize() {
    return {
      kind: this.kind,
      meta: this.meta.serialize(),
      spec: this.spec.serialize(),
      store: this.store.serialize(),
    }
  }
}

export default Text;
