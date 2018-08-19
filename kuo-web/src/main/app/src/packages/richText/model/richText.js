import { observable, action, extendObservable } from 'mobx';
import TextSpec from './textSpec';
import DataQuery from './dataQuery';

import BaseComp from '@packages/components/core/baseComp';
import compRegistrar from '@packages/compUtils/compRegistrar';

class RichText extends BaseComp {

  constructor(option) {
    super(option);
    const { spec, dataQuery } = option;

    this.id = this.uniqId('comp-');
    this.kind = 'RichText';
    this.type = 'Component';
    this.spec = new TextSpec(spec);
    this.dataQuery = new DataQuery(dataQuery);
  }

  serialize() {
    return {
      kind: this.kind,
      spec: this.spec.serialize(),
      store: this.store.serialize(),
    }
  }
}


compRegistrar.register('mila.components.model.RichText', RichText);
