import { observable, action } from 'mobx';
import theme2font from './theme2font';
import { Animation, Rect, Layout, Design, Link, Database } from '@packages/compUtils/factory/spec';

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

class TextSpec extends Spec {

  @observable theme;

  constructor({ theme, ...rest }) {
    super(rest);

    this.theme = theme;

    this._theme2Font(theme);
  }

  _theme2Font(theme) {
    const t2f = theme2font(theme);
    this.font.setFontSize(t2f.fontSize);
    this.font.setBold(t2f.bold);
  }

  @action setTheme(theme) {
    this.theme = theme;
    this._theme2Font(theme);
  }

  serialize() {
    const spec = super.serialize();

    return {
      ...spec,
      theme: this.theme,
    }
  }
}

export default TextSpec;
