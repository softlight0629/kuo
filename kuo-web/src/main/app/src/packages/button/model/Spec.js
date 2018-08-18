import { observable } from 'mobx';
import { Animation, Rect, Layout, Design, Link, Database } from '../../compUtils/factory/spec';

const { Fill, Border, Corner, Shadow, Font, Separator } = Design;
class Spec {
 
  constructor({
    rect,
    fill,
    border,
    corner,
    shadow, 
    font,
    animation,
    layout,
    link,
    separator,
  }) {
    this.rect = new Rect(rect || {});
    this.fill = new Fill(fill || {});
    this.border = new Border(border || {});
    this.corner = new Corner(corner || {});
    this.shadow = new Shadow(shadow || {});
    this.animation = new Animation(animation || {});
    this.layout = new Layout(layout || {});
    this.font = new Font(font || {});
    this.separator = new Separator(separator || {});
    this.link = new Link(link || {});
  }

  serialize() {
    return {
      rect: this.rect.serialize(),
      fill: this.fill.serialize(),
      separator: this.separator.serialize(),
      border: this.border.serialize(),
      corner: this.corner.serialize(),
      shadow: this.shadow.serialize(),
      font: this.font.serialize(),
      layout: this.layout.serialize(),
    };
  }
}

class ButtonSpec extends Spec {

  @observable arrow;

  @observable liftShadow;

  constructor({ arrow, liftShadow, ...rest }) {
    super(rest);

    this.arrow = arrow;
    this.liftShadow = liftShadow;
  }

  serialize() {
    return {
      ...(super.serialize()),
      arrow: this.arrow,
    }
  }
}

export default ButtonSpec;
