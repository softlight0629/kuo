import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory } from '../../common';
import { Hover, Clicked } from './State';
import Store from './Store';
import MenuSpec from './Spec';

class Menu {

  @observable.ref spec;

  @observable.ref state;

  @observable.ref meta;

  constructor({ spec, state, store, meta }) {
    this.kind = 'Menu';
    this.astm = 'Menu';
    this.spec = SpecFactory.create(spec || {}, spec => new MenuSpec(spec));
    this.meta = MetaFactory.create(meta || {});
    this.state = StateFactory.create({
      hover: option => new Hover(this.spec, option),
      clicked: option => new Clicked(this.spec, option),
    }, state);

    this.store = new Store(store);
  }

  @action apply({ spec, state, meta }) {
    const rect = this.spec.rect.serialize();

    this.spec = SpecFactory.create({
      ...spec,
      rect: {
        x: rect.x,
        y: rect.y,
        width: spec.rect.width,
        height: spec.rect.height,
      },
    }, spec => new MenuSpec(spec));

    this.meta = MetaFactory.create(meta || {});
    this.state = StateFactory.create({
      hover: option => new Hover(this.spec, option),
      clicked: option => new Clicked(this.spec, option),
    }, state || this.state.serialize());
  }
}

export default Menu;
