import { observable, action, extendObservable } from 'mobx';
import MetaFactory from '../../compUtils/factory/metaFactory';
import SpecFactory from '../../compUtils/factory/specFactory';
import StateFactory from '../../compUtils/factory/stateFactory';
import TextSpec from './Spec';
import Store from './Store';

import compRegistrar from '../../compUtils/compRegistrar';

class RichText {

  constructor({ spec = {}, store, meta = {}}) {
    this.kind = 'RichText';

    this.spec = SpecFactory.create(spec, spec => new TextSpec(spec));
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


compRegistrar.register('mila.components.model.RichText', RichText);
