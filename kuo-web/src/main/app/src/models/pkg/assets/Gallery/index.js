import { observable, action } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory, OptsFactory } from '../../core/factory';
import Store from './Store';
import Spec from './Spec';
import Opts from './Opts';

class Gallery {
  
  constructor({ spec = {}, state = {}, store, meta = {}, opts = {} }) {
    this.kind = 'Gallery';
    this.spec = SpecFactory.create(spec, spec => new Spec(spec));
    this.meta = MetaFactory.create(meta);
    this.state = StateFactory.create(state);
    this.opts = OptsFactory.create(opts, opts => new Opts(opts));
    this.store = new Store(store);
  }
}


export default Gallery;
