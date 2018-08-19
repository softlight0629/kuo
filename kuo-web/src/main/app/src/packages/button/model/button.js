import { observable, action, extendObservable } from 'mobx';
import DataQuery from './dataQuery';
import ButtonSpec from './buttonSpec';

import skinRegistrar from '@packages/compUtils/skinRegistrar';
import compRegistrar from '@packages/compUtils/compRegistrar';
import idUtils from '@packages/coreUtils/core/idUtils';
import skinRender from '@packages/runtime/skinRender';
import BaseComp from '@packages/components/core/baseComp';

class Button extends BaseComp {

  @observable.ref spec;

  constructor(option) {
    super(option)
    const { skin, spec = {}, propQuery = {}, dataQuery = {} } = option;

    this.id = this.uniqId('comp-');
    this.kind = 'Button';
    this.type = 'Component';
    this.obervers = [];
    this.skin = skin;
    this.spec = new ButtonSpec(spec);
    this.dataQuery = new DataQuery(dataQuery);
  }

  // 把样式全部替换掉
  @action applySkin(skin) {
    const skinOfJson = skinRegistrar.getSkin(`mila.components.skin.${this.kind}`);
    if (!skinOfJson) {
      return;
    }

    this.skin = skin;

    // 找到 skin 的样式，重新渲染
    let spec = skinRender.createSkinSpec(skinOfJson, this, ButtonSpec);

    if (spec) {
      this.spec = spec;
    }

    let state = skinRender.createSkinState(skinOfJson);

    if (state) {
      this.state = state;
    }
  }

  @action apply({ spec, skin }) {
    this.skin = skin;
    this.spec = new ButtonSpec(spec);
  }

  serialize() {
    return {
      kind: this.kind,
      spec: this.spec.serialize(),
    }
  }
}

compRegistrar.register('mila.components.model.Button', Button);
