import { observable, action } from 'mobx';

class Meta {

  @observable skin;

  @observable theme;

  @observable lockRation;
  
  constructor({
    skin,
    theme,
    lockRation = false,
  }) {
    this.skin = skin;
    this.theme = theme;
    this.lockRation = lockRation;
  }

  @action setSkin(skin) {
    this.skin = skin;
  }

  @action setTheme(theme) {
    this.theme = theme;
  }

  @action setLockRation(lockRation) {
    this.lockRation = lockRation;
  }

  serialize() {
    return {
      skin: this.skin,
      theme: this.theme,
      lockRation: this.lockRation,
    }
  }
}

export default Meta;
