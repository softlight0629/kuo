import { observable } from 'mobx';
import SpecStyle from './style';
import SpecRect from './rect';

// 组件样式共同的抽象 spec
class Spec {

  @observable style = {};

  constructor(option) {
    this.style = new SpecStyle(option.style || {});
    this.rect = new SpecRect(option.rect);
  }

}

export default Spec;
