import { observable, action, extendObservable } from 'mobx';
import MenuItem from './MenuItem';
import { Animation, Rect, Layout, Design, Link, Database } from '../../settings';
const { Fill, Border, Corner, Shadow, Font } = Design;


class Menu {

  menuItems = [];

  gap = 0;

  constructor(option) {
    this.astm = 'Menu';

    const { spec } = option;
    const { 
      rect,
      fill,
      border,
      corner,
      shadow, 
      font,
      animation,
      layout,
      menuItems,
      gap,
      state = {},
    } = spec;

    this.gap = gap;

    this.rect = new Rect(rect || {});

    this.fill = new Fill(fill || {});
    this.border = new Border(border || {});
    this.corner = new Corner(corner || {});
    this.shadow = new Shadow(shadow || {});
    this.animation = new Animation(animation || {});
    this.layout = new Layout(layout || {});
    this.font = new Font(font || {});

    menuItems.forEach(menuItem => {
      this.menuItems.push(new MenuItem(menuItem));
    });
    
    this.spec = {};
    this.store = {};
    this.state = {};
    this.event = {};
    this.binder = {};
  }

}

export default Menu;
