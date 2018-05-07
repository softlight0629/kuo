import { observable } from 'mobx';
import Border from './Border';
import Corner from './Corner';
import Fill from './Fill';
import Shadow from './Shadow';
import Text from './Text';

class SpecStyle {

  @observable fill = {};
  @observable border = {};
  @observable corner = {};
  @observable shadow = {};
  @observable text = {};

  constructor(option) {
    this.fill = new Fill(option.fill || {});
    this.border = new Border(option.border || {});
    this.corner = new Corner(option.corner || {});
    this.shadow = new Shadow(option.shadow || {});
    this.text = new Text(option.text || {});
  }
}

export default SpecStyle;
