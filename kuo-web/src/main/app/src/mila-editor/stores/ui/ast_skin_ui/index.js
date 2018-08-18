import { skins_of_button, skins_of_image, skins_of_menu } from './skins';
import AstSkinButton from '../../../models/ui/button/AstSkinButton';

class AstSkinUiStore {
  
  constructor(store, service) {
    this.store = store;
    this.service = service;

    this.init();
  }

  init() {
    this.skinsOfButton = skins_of_button.map(skinOfButton => new AstSkinButton(skinOfButton));
    this.skinsOfImage = skins_of_image.map(skinOfImage => new AstSkinButton(skinOfImage));
    this.skinsOfMenu = skins_of_menu.map(skinOfMenu => new AstSkinButton(skinOfMenu));
  }

  skinsOfKind(kind) {
    if (kind === 'Button') {
      return this.skinsOfButton;
    }

    if (kind === 'Image') {
      return this.skinsOfImage;
    }

    if (kind === 'Menu') {
      return this.skinsOfMenu;
    }
  }
}

export default AstSkinUiStore;
