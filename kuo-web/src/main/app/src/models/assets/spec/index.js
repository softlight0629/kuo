import { observable, action } from 'mobx';
import SpecStyle from './style';
import SpecRect from './rect';
import SpecLinked from './linked';
import SpecLayout from './layout';
import SpecText from './text';
import { EMSGSIZE } from 'constants';

// 组件样式共同的抽象 spec
class Spec {

  @observable style = {};

  @observable rect = {};

  @observable linked = {};

  @observable layout = {};

  constructor(option) {
    this.style = new SpecStyle(option.style || {});
    this.rect = new SpecRect(option.rect || {});
    this.layout = new SpecLayout(option.layout || {});
    this.linked = new SpecLinked(option.linked || {});
    this.text = new SpecText(option.text || {});
  }

  @action position(x, y) {
    this.rect.x = x;
    this.rect.y = y;
  }

  @action size(width, height) {
    this.rect.width = width;
    this.rect.height = height;
  }

  @action fillColor(color) {
    this.style.fill.color = color;
  }

  @action content(content) {
    console.log(content, 'content.....');
    this.text.content = content;
  }

  @action borderWidth(width) {
    this.style.border.width = width;
  }
}

export default Spec;
