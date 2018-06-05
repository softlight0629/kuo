
class ThemeButtonRef {
  constructor(astm, adjust) {
    this.ref = astm;
    this.adjust = adjust;

    this.serializeOfSpec = astm.spec.serialize();

    if (astm.state) {
      this.serializeOfState = astm.state.serialize();
    }
  }

  get kind() {
    return this.ref.kind;
  }

  get spec() {
    const spec = this.serializeOfSpec;
    
    return {
      ...spec,
      rect: {
        ...spec.rect,
        width: this.adjust.spec.rect.width,
        height: this.adjust.spec.rect.height,
      },
      font: {
        ...spec.font,
        fontSize: 10,
      },
    }
  };

  get store() {
    return this.ref.store;
  }

  get state() {
    return this.ref.state;
  }

  apply(astm) {

    astm.apply({
      spec: this.serializeOfSpec,
      state: this.serializeOfState,
    })
  }
}

export default ThemeButtonRef;
