
import { themes_menu } from '../themes';
import { ThemeButtonRef } from '../../models/artboard/theme';
import { AstmMenu } from '../../models/artboard/assets';

class ThemeStore {
  constructor(store, service) {
    console.log('bbbbbbb');
    this.store = store;
    this.service = service;
    console.log('them store.....');
    this.initThmes();
  }

  initThmes() {
    console.log('init.....', themes_menu);
    this.themesOfMenu = themes_menu.map(theme => new ThemeButtonRef(new AstmMenu(theme)));
  }
}

export default ThemeStore;
