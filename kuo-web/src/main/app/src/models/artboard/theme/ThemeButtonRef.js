
class ThemeButtonRef {
  constructor(astm) {
    this.ref = astm;
  }

  get spec() {
    return this.ref.spec;
  }

  get store() {
    return this.ref.store;
  }

  get state() {
    return this.ref.state;
  }

  apply() {
    
  }
}

export default ThemeButtonRef;
