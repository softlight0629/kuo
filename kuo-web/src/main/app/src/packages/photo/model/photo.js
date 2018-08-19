import { observable, extendObservable, action } from 'mobx';

import DataQuery from './dataQuery';
import PropQuery from './propQuery';

import BaseComp from '@packages/components/core/baseComp';
import Spec from '@packages/components/core/spec';

import compRegistrar from '@packages/compUtils/compRegistrar';

class Photo extends BaseComp {

  constructor(option) {
    super(option);
    const { spec = {}, skin, dataQuery, propQuery = {} } = option;

    this.id = this.uniqId('comp-');
    this.kind = 'Photo';
    this.skin = skin;
    this.spec = new Spec(spec);
    this.dataQuery = new DataQuery(dataQuery);
    this.propQuery = new PropQuery(propQuery);

    // crop: {
    //   height: 182,
    //   width: 324,
    //   x: 200,
    //   y: 24,
    // }
  }

  @action apply({ spec, skin }) {
    this.spec = new Spec(spec);
    this.skin = skin;
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

compRegistrar.register('mila.components.model.Photo', Photo);
