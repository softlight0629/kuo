import { observable, action } from 'mobx';
import { generateShowHourMinuteSecond } from 'antd/lib/time-picker';

class DesignPanelUiStore {

  @observable.ref astm;

  @observable designPanelVisible = false;

  @observable x;

  @observable y;

  @action setAstm(astm) {
    this.astm = astm;
  }

  @action show() {
    this.designPanelVisible = true;
  }

  @action hide() {
    this.designPanelVisible = false;
  }

  @action position(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default DesignPanelUiStore;
