import { observable, action } from 'mobx';
import MetaFactory from '../../compUtils/factory/metaFactory';
import SpecFactory from '../../compUtils/factory/specFactory';
import StateFactory from '../../compUtils/factory/stateFactory';
import OptsFactory from '../../compUtils/factory/optsFactory';

import compRegistrar from '../../compUtils/compRegistrar';

import Store from './Store';
// import Spec from './Spec';
import Opts from './Opts';

class Gallery {
  
  constructor({ spec = {}, state = {}, store, meta = {}, opts = {} }) {
    this.kind = 'Gallery';
    this.spec = SpecFactory.create(spec);
    this.meta = MetaFactory.create(meta);
    this.state = StateFactory.create(state);
    this.opts = OptsFactory.create(opts, opts => new Opts(opts));
    this.store = new Store(store);
  }
}

compRegistrar.register('mila.components.model.Gallery', Gallery);
