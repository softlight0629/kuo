import { Design } from '../../../spec';
const { Fill, Border, Font } = Design;

class Hover {
  
  constructor(spec, { fill, border, font }) {
    this.spec = spec;

    this.fill = new Fill(fill);
    this.border = new Border(border);
    this.font = new Font(Object.assign({}, this.spec.font.serialize(), font));
  }

  serialize() {
    return {
      fill: this.fill.serialize(),
      border: this.border.serialize(),
      font: {
        color: this.font.color,
      }
    }
  }
}

export default Hover;
