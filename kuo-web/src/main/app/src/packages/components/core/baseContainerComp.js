import * as _ from 'lodash';
import compRegistrar from '@packages/compUtils/compRegistrar';
import BaseComp from './baseComp';
import { observable, action } from 'mobx';

class BaseContainerComp extends BaseComp {

  @observable components = [];

  constructor(option) {
    super(option);

    _.delay((() => {
      // option.components.map(action(compDefinition => {
      //   const compRef = this.addChildComponent(compDefinition);
      //   this.components.push(compRef);
      // }));
    }), 1000);
  }

  @action addChildComponent(compDefinition) {
    return this.runtimeCtx.addChildComponent(this.id, compDefinition);
  }

  get size() {
    return this.components.length;
  }
}

export default BaseContainerComp;
