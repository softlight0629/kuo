
import { themes_menu, themes_button } from '../ast/themes';
import { ThemeButtonRef } from '../../models/artboard/theme';
import { AstmMenu, AstmButton } from '../../models/artboard/assets';

class ThemeStore {
  constructor(store, service) {
    this.store = store;
    this.service = service;
    
    this.init();
  }

  init() {
    this.themesOfMenu = themes_menu.themes.map(theme => new ThemeButtonRef(new AstmMenu(theme), themes_menu.adjust));
    this.themesOfButton = themes_button.themes.map(theme => new ThemeButtonRef(new AstmButton(theme), themes_button.adjust));
  }

  themesOfKind(kind) {
    if (kind === 'Button') {
      return this.themesOfButton;
    }

    if (kind === 'Menu') {
      return this.themesOfMenu;
    }
  }
}

export default ThemeStore;
