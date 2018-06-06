import { observable, action, extendObservable } from 'mobx';
import astfactory from '../../../../helper/astfactory';

class PageResource {

  @observable id;

  @observable name;

  @observable astms = [];

  constructor(store, { id, name, assets }) {
    this.store = store;

    this.id = id;
    this.name = name;

    if (assets) {
      this.astms = (JSON.parse(assets)).map(asset => {
        const Astm = astfactory.findAstm(asset.kind);
        return new Astm(asset);
      });
    }

  }

  @action setName(name) {
    this.name = name;
  }

  @action addAst(option) {
    const Astm = astfactory.findAstm(option.kind);
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

export default PageResource;
