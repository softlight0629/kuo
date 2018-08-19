import * as _ from 'lodash';
import compRegistrar from '@packages/compUtils/compRegistrar';
import BaseComp from './baseComp';
import { observable } from 'mobx';

class BaseContainerComp extends BaseComp {

  components = [];

  constructor(option) {
    super(option);

    _.delay((() => {
      option.components.map(component => {
        return this.addComponent(component);
      });
    }), 1000);
  }

  addComponent(component) {
    const CompModelClazz = compRegistrar.getComp('mila.components.model.' + component.kind);
    const comp =  new CompModelClazz(component);

    this.components.push(comp);
    this.runtimeCtx.addComponent(comp.id, comp);

    return comp;
  }

  get size() {
    return this.components.length;
  }
}

export default BaseContainerComp;
