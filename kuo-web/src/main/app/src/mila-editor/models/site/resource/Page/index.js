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
      this.astms = (JSON.parse(assets)).map(asset => {
        const CompModelClazz = compRegistrar.getComp('mila.components.model.' + asset.kind);
        return new CompModelClazz(asset);
      });
    }
  }

  @action setName(name) {
    this.name = name;
  }

  @action appendAst(option) {
    const CompModelClazz = compRegistrar.getComp('mila.components.model.' + option.kind);
    const astm = new CompModelClazz(option);

    this.astms.push(astm);
    this.store.astRefUiStore.refAstm(astm);
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
