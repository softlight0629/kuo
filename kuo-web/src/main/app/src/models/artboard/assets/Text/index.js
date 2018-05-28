import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory } from '../../common';
import TextSpec from './Spec';
import Store from './Store';

class Text {

  constructor({ spec, store}) {
    this.astm = 'Text';
    this.kind = 'Text';

    this.spec = SpecFactory.create(spec || {}, spec => new TextSpec(spec));
    this.store = new Store(store);
  }
}

export default Text;
