import extend from 'extend';

class SkinButtonRef {
  
  constructor({ skinImg, spec, state,  meta}) {
    this.skinImg = skinImg;
    this.spec = spec;
    this.state = state;
    this.meta = meta;
  }

  apply(astm) {
    console.log(astm, 'astm.....');
    const spec = astm.spec.serialize();
    const meta = astm.meta.serialize();
    const state = astm.state;

    astm.apply({
      spec: extend(true, {}, spec, this.spec),
      meta: extend(true, {}, meta, this.meta),
      state: extend(true, {}, { hover: state.hover.serialize(), clicked: state.clicked.serialize() }, this.state),
    })
  }
}

export default SkinButtonRef;
