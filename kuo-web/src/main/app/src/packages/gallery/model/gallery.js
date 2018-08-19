import { observable, action } from 'mobx';

import BaseComp from '@packages/components/core/baseComp';
import compRegistrar from '@packages/compUtils/compRegistrar';

import DataQuery from './dataQuery';
import PropQuery from './propQuery';
import GallerySpec from './gallerySpec';

class Gallery extends BaseComp {
  
  constructor(option) {
    super(option);
    const { spec, dataQuery, propQuery } = option;

    this.kind = 'Gallery';
    this.type = 'Component';
    this.spec = new GallerySpec(spec);
    this.dataQuery = new DataQuery(dataQuery);
    this.propQuery = new PropQuery(propQuery);
  }
}

compRegistrar.register('mila.components.model.Gallery', Gallery);
