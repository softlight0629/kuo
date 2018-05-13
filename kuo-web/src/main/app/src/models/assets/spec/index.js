import SpecStyle from './style';
import SpecRect from './rect';
import SpecLinked from './linked';
import SpecLayout from './layout';
import SpecText from './text';
import { EMSGSIZE } from 'constants';

// 组件样式共同的抽象 spec
class Spec {

  constructor(option) {
    this.style = new SpecStyle(option.style || {});
    this.rect = new SpecRect(option.rect || {});
    this.layout = new SpecLayout(option.layout || {});
    this.linked = new SpecLinked(option.linked || {});
    this.text = new SpecText(option.text || {});
  }
}

export default Spec;
