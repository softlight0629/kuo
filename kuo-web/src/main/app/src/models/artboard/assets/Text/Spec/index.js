import { observable, action } from 'mobx';
import { Spec } from '../../../common';
import theme2font from './theme2font';

class TextSpec extends Spec {

  @observable theme;

  constructor({ theme, ...rest }) {
    super(rest);

    this.theme = theme;

    this._theme2Font(theme);
  }

  _theme2Font(theme) {
    const t2f = theme2font(theme);
    this.font.setFontSize(t2f.fontSize);
    this.font.setBold(t2f.bold);
  }

  @action setTheme(theme) {
    this.theme = theme;
    this._theme2Font(theme);
  }
}

export default TextSpec;
