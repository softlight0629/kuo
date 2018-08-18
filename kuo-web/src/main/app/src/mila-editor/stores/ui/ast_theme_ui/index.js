import { themes_of_button, themes_of_menu } from './themes';
import themes_loc from './themes_loc';
import AstThemeButton from '../../../models/ui/button/AstThemeButton';

class AstThemeUiStore {
  
  constructor(store, service) {
    this.store = store;
    this.service = service;

    this.themesOfButton = themes_of_button.map(themeOfButton => new AstThemeButton(themeOfButton));
    this.themesOfMenu = themes_of_menu.map(themeOfMenu => new AstThemeButton(themeOfMenu));
  }

  themesOfKind(kind) {
    if (kind === 'Button') {
      return this.themesOfButton;
    }

    if (kind === 'Menu') {
      return this.themesOfMenu;
    }
  }

  getTheme(kind, theme) {
    if (kind === 'Button') {
      return this.themesOfButton.filter(themeOfButton => themeOfButton.meta.theme === theme)[0];
    }

    if (kind === 'Menu') {
      return this.themesOfMenu.filter(themeOfMenu => themeOfMenu.meta.theme === theme)[0];
    }
  }

  locOfTheme(theme) {
    return themes_loc[theme];
  }

}


export default AstThemeUiStore;
