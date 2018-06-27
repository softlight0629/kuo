import { skins_of_button, skins_of_image, skins_of_menu } from './skins';
import { SkinRefButton } from '../../../models/artboard/lib/ui';

class AstSkinUiStore {
  
  constructor(store, service) {
    this.store = store;
    this.service = service;

    this.init();
  }

  init() {
    this.skinsOfButton = skins_of_button.map(skinOfButton => new SkinRefButton(skinOfButton));
    this.skinsOfImage = skins_of_image.map(skinOfImage => new SkinRefButton(skinOfImage));
    this.skinsOfMenu = skins_of_menu.map(skinOfMenu => new SkinRefButton(skinOfMenu));
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
