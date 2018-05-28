import { Animation, Rect, Layout, Design, Link, Database } from '../../artboard/settings';
const { Fill, Border, Corner, Shadow, Font } = Design;

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
  }) {
    this.rect = new Rect(rect || {});
    this.fill = new Fill(fill || {});
    this.border = new Border(border || {});
    this.corner = new Corner(corner || {});
    this.shadow = new Shadow(shadow || {});
    this.animation = new Animation(animation || {});
    this.layout = new Layout(layout || {});
    this.font = new Font(font || {});
  }
}

export default Spec;
