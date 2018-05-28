import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory } from '../../common';
import { Hover, Clicked } from './State';
import Store from './Store';
import MenuSpec from './Spec';

class Menu {
  constructor({ spec, state, store }) {
    this.kind = 'Menu';
    this.astm = 'Menu';
    this.spec = SpecFactory.create(spec || {}, spec => new MenuSpec(spec));
    this.state = StateFactory.create({
      hover: option => new Hover(option),
      clicked: option => new Clicked(option),
    }, state);

    this.store = new Store(store);
  }

}

export default Menu;
