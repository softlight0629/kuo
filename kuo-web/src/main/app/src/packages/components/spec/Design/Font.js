import { observable, extendObservable, action } from 'mobx';

class Font {

  @observable color;

  @observable fontFamily;

  @observable fontSize;

  @observable bgColor;

  @observable bold = false;

  @observable italic = false;

  @observable underline = false;

  @observable fontWeight = 200;

  constructor(option) {
    extendObservable(this, option);
  }

  serialize() {
    return {
      color: this.color,
      fontFamily: this.fontFamily,
      fontSize:  this.fontSize,
      bgColor: this.bgColor,
      bold: this.bold,
      italic: this.italic,
      underline: this.underline,
      fontWeight: this.fontWeight,
    }
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

  @action setBgColor(bgColor) {
    this.bgColor = bgColor;
  }

  @action toggleBold() {
    this.bold = !this.bold;
  }

  @action setBold(bold) {
    this.bold = bold;
  }

  @action toggleItalic() {
    this.italic = !this.italic;
  }

  @action toggleUnderline() {
    this.underline = !this.underline;
  }

  @action setFontWeight(fontWeight) {
    this.fontWeight = fontWeight;
  }
}

export default Font;
