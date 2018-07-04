import { observable, action, extendObservable } from 'mobx';
import { SpecFactory, StateFactory, MetaFactory } from '../../common';
import Store from './Store';
import GallerySpec from './Spec';

class Gallery {
  
  constructor({ spec = {}, state = {}, store, meta = {} }) {
    this.kind = 'Gallery';
    this.spec = SpecFactory.create(spec, spec => new GallerySpec(spec));
    this.meta = MetaFactory.create(meta);
    this.state = StateFactory.create(state);
    this.store = new Store(store);
  }
}


export default Gallery;
