import { observable, action, extendObservable } from 'mobx';
import { Animation, Rect, Layout, Design, Link, Database } from '../../settings';
const { Fill, Border, Corner, Shadow, Font } = Design;

class Button {

  @observable text;
  
  constructor(option) {
    this.astm = 'Button';

    const { spec, specHover, specDisabled } = option;
    const { 
      rect,
      animation,
      layout, 
      link,
      fill,
      border,
      corner, 
      shadow,
      font,
      text } = spec;

    this.rect = new Rect(rect || {});
    this.animation = new Animation(animation || {});
    this.layout = new Layout(layout || {});
    this.link = new Link(link || {});

    this.fill = new Fill(fill || {});
    this.border = new Border(border || {});
    this.corner = new Corner(corner || {});
    this.shadow = new Shadow(shadow || {});
    this.font = new Font(font || {});

    this.text = text;
  }
}

export default Button;
