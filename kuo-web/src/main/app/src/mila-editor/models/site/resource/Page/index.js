import { observable, action, extendObservable } from 'mobx';
import compRegistrar from '@packages/compUtils/compRegistrar';

class PageRes {

  @observable id;

  @observable name;

  @observable astms = [];

  constructor(store, { id, name, assets }) {
    this.store = store;

    this.id = id;
    this.name = name;

    if (assets) {
      this.astms = (JSON.parse(assets)).map(compDefinition => {
        // const CompModelClazz = compRegistrar.getComp('mila.components.model.' + asset.kind);
        // const component =  new CompModelClazz(asset);

        return this.store.runtimeCtx.addComponent(compDefinition);
      });
    }
  }

  @action setName(name) {
    this.name = name;
  }

  @action appendAst(compDefinition) {
    this.store.runtimeCtx.addComponent(compDefinition);
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      assets: JSON.stringify(this.astms.map(astm => astm.serialize())),
    }
  }
}

export default PageRes;
