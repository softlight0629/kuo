import idUtils from '@packages/coreUtils/core/idUtils';
import runtimeCtx from '@packages/runtime/runtimeCtx';
import Layout from './layout';


class BaseComp {
  constructor(option) {
    this.id = option.id;
    this.parent = option.parent || '';
    this.type = option.type;
    this.componentType = option.componentType;
    this.layout = new Layout(option.layout);
  }

  get runtimeCtx() {
    console.log('sss', runtimeCtx);
    return runtimeCtx;
  }

  uniqId(prefix = '') {
    return `${prefix}${idUtils.uniqId()}`;
  }
}


export default BaseComp;
