import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory } from '../../core/factory';
import Store from './Store';
import ButtonSpec from './Spec';

class Button {

  @observable.ref spec;

  @observable.ref meta;

  constructor({ spec = {}, state = {}, store, meta = {} }) {
    this.kind = 'Button';
    this.spec = SpecFactory.create(spec, spec => new ButtonSpec(spec));
    this.meta = MetaFactory.create(meta);
    this.state = StateFactory.create(state);
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

export default Button;
