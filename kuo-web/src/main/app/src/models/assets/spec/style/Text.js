import { observable, extendObservable } from 'mobx';

class Text {

  @observable color;

  @observable theme;

  @observable font;

  @observable fontSize;

  @observable bold;

  @observable italic;

  constructor(option) {
    extendObservable(this, option);
  }

}

export default Text;
