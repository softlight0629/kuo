import { observable, action, extendObservable } from 'mobx';
import MetaFactory from '../../compUtils/factory/metaFactory';
import SpecFactory from '../../compUtils/factory/specFactory';
import StateFactory from '../../compUtils/factory/stateFactory';
import Store from './Store';
import ButtonSpec from './Spec';

import compRegistrar from '../../compUtils/compRegistrar';
import skinRegistrar from '@packages/compUtils/skinRegistrar';
import skinRender from '../../runtime/skinRender';

class Button {

  @observable.ref spec;

  @observable.ref state;

  @observable.ref meta;

  constructor({ spec = {}, state = {}, store, meta = {} }) {
    this.compId = `comp-${Date.now()}`;
    this.kind = 'Button';
    this.spec = SpecFactory.create(spec, spec => new ButtonSpec(spec));
    this.meta = MetaFactory.create(meta);
    this.state = StateFactory.create(state);
    this.store = new Store(store);
  }

  // 把样式全部替换掉
  @action applySkin(skin) {
    const skinOfJson = skinRegistrar.getSkin(`mila.components.skin.${this.kind}`);
    if (!skinOfJson) {
      return;
    }

    this.meta.skin = skin;

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

  @action apply({ spec, meta }) {
    const rect = this.spec.rect.serialize();
    this.spec = SpecFactory.create({
      ...spec,
      rect: {
        x: rect.x,
        y: rect.y,
        width: spec.rect.width,
        height: spec.rect.height,
      },
    });

    this.meta = MetaFactory.create(meta || {});
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

compRegistrar.register('mila.components.model.Button', Button);
