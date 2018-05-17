import { observable, extendObservable, action } from 'mobx';

class Font {

  @observable color;

  @observable fontFamily;

  @observable fontSize;

  @observable highLight;

  @observable bold = false;

  @observable italic = false;

  constructor(option) {
    extendObservable(this, option);
  }

  @action setColor(color) {
    this.color = color;
  }

  @action setFontFamily(fontFamily) {
    this.fontFamily = fontFamily;
  }

  @action setFontSize(fontSize) {
    this.fontSize = fontSize;
  }

  @action toggleBold() {
    this.bold = !this.bold;
  }

  @action toggleItalic() {
    this.italic = !this.italic;
  }
}

export default Font;
