import { observable, action } from 'mobx';

class Meta {
  
  constructor({
    skin,
    theme,
  }) {
    this.skin = skin;
    this.theme = theme;
  }

  @action setSkin(skin) {
    this.skin = skin;
  }

  @action setTheme(theme) {
    this.theme = theme;
  }

  serialize() {
    return {
      skin: this.skin,
      theme: this.theme,
    }
  }
}

export default Meta;
