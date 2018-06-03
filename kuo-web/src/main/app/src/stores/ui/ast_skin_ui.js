import { skin_button, skin_image, skin_menu } from '../ast/skins';
import { SkinButtonRef } from '../../models/artboard/theme';

class AstSkinUiStore {
  
  constructor(store, service) {
    this.store = store;
    this.service = service;

    this.init();
  }

  init() {
    this.skinsOfButton = skin_button.map(skin => new SkinButtonRef(skin));
    this.skinsOfImage = skin_image.map(skin => new SkinButtonRef(skin));
    this.skinsOfMenu = skin_menu.map(skin => new SkinButtonRef(skin));
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
