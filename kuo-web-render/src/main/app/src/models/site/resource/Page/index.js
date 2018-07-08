import astfactory from '../../../../helper/ast_register';

class PageRes {
  constructor(option) {
    this.id = option.id;
    this.name = option.name;
    this.astms = (JSON.parse(option.assets || '[]')).map(asset => {
      const Astm = astfactory.findAstm(asset.kind);
      return new Astm(asset);
    });
  }
}

export default PageRes;
