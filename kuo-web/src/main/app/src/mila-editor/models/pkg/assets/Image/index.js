import { observable, extendObservable, action } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory, OptsFactory } from '../../core/factory';

import Store from './Store';
import Opts from './Opts';

class Image {

  @observable.ref spec;

  @observable.ref meta;

  @observable.ref opts;

  constructor({ spec = {}, store, meta = {}, state = {}, opts = {} }) {
    this.kind = 'Image';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create({
      ...meta,
      lockRation: true,
    });
    this.state = StateFactory.create(state)
    this.store = new Store(store);
    this.opts = OptsFactory.create(opts, opts => new Opts(opts));
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

export default Image;
