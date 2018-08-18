import { observable, extendObservable, action } from 'mobx';
import MetaFactory from '../../compUtils/factory/metaFactory';
import SpecFactory from '../../compUtils/factory/specFactory';
import StateFactory from '../../compUtils/factory/stateFactory';
import OptsFactory from '../../compUtils/factory/optsFactory';

import Store from './Store';
import Opts from './Opts';

import compRegistrar from '../../compUtils/compRegistrar';

class Photo {

  @observable.ref spec;

  @observable.ref meta;

  @observable.ref opts;

  constructor({ spec = {}, store, meta = {}, state = {}, opts = {} }) {
    this.compId = `comp-${Date.now()}`;
    this.kind = 'Photo';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create({
      ...meta,
      lockRation: true,
    });
    this.state = StateFactory.create(state)
    this.store = new Store(store);
    this.opts = OptsFactory.create(opts, opts => new Opts(opts));

    // crop: {
    //   height: 182,
    //   width: 324,
    //   x: 200,
    //   y: 24,
    // }
  }

  @action apply({ spec, meta }) {
    const rect = this.spec.rect.serialize();
    this.spec = SpecFactory.create({
      ...spec,
      rect: {
        x: rect.x,
        y: rect.y,
        width: spec.rect.width,
        height: spec.rect.height,
      },
    });

    this.meta = MetaFactory.create(meta || {});
  }

  serialize() {
    return {
      kind: this.kind,
      meta: this.meta.serialize(),
      spec: this.spec.serialize(),
      state: this.state.serialize(),
      store: this.store.serialize(),
    }
  }
}

compRegistrar.register('mila.components.model.Photo', Photo);
