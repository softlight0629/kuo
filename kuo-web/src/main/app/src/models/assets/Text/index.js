import { observable, action, extendObservable } from 'mobx';
import { Animation, Rect, Layout, Design, Link, Database } from '../../settings';

const { Font, Shadow, TextEffect, Fill, Border, Corner } = Design;

class Text {

  @observable text;

  @observable theme;
  
  constructor(option) {
    this.astm = 'Text';

    const { spec } = option;
    const { 
      rect, 
      font,
      text,
      animation,
      shadow,
      layout,
      border,
      corner,
      fill,
      theme,
    } = spec;

    this.fill = new Fill(fill || {});
    this.rect = new Rect(rect || {});
    this.font = new Font(font || {});
    this.border = new Border(border || {});
    this.corner = new Corner(corner || {});
    this.shadow = new Shadow(shadow || {});
    this.layout = new Layout(layout || {});
    this.animation = new Animation(animation || {});

    this.text = text;
    this.theme = theme;
  }
}

export default Text;
