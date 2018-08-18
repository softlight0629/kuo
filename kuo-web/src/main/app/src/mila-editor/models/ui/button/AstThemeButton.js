
class AstThemeButton {
  constructor(ast) {
    this.ast = ast;
  }

  get kind() {
    return this.ast.kind;
  }

  get spec() {
    return this.ast.spec;
  };

  get store() {
    return this.ast.store;
  }

  get state() {
    return this.ast.state;
  }

  get meta() {
    return this.ast.meta;
  }
}

export default AstThemeButton;
