import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory } from '../../common';
import Store from './Store';

class Button {

  @observable.ref spec;

  @observable.ref meta;

  constructor({ spec, state, store, meta }) {
    this.astm = 'Button';
    this.kind = 'Button';
    this.spec = SpecFactory.create(spec || {});
    this.meta = MetaFactory.create(meta || {});
    this.store = new Store(store);
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
}

export default Button;