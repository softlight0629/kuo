import { observable, action, extendObservable } from 'mobx';
import assetRegistrar from '../../../../core/assetRegistrar';

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
        const Astm = assetRegistrar.findAstm(asset.kind);
        return new Astm(asset);
      });
    }
  }

  @action setName(name) {
    this.name = name;
  }

  @action appendAst(option) {
    const Astm = assetRegistrar.findAstm(option.kind);
    const astm = new Astm(option);

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
