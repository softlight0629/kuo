import { observable, action } from 'mobx';
import { generateShowHourMinuteSecond } from 'antd/lib/time-picker';

class DesignPanelUiStore {

  @observable stylePanelVisible = false;

  @observable textPanelVisible = false;

  @observable layoutPanelVisible = false;

  @observable linkedPanelVisible = false;

  @observable animationPanelVisible = false;

  @observable x;

  @observable y;

  @action showStylePanel() {
    this.stylePanelVisible = true;
  }

  @action showTextPanel() {
    this.textPanelVisible = true;
  }

  @action showLayoutPanel() {
    this.layoutPanelVisible = true;
  }

  @action showAnimationPanel() {
    this.animationPanelVisible = true;
  }

  @action showLinkedPanel() {
    this.linkedPanelVisible = true;
  }

  @action closeTextPanel() {
    this.textPanelVisible = false;
  }

  @action closeStylePanel() {
    this.stylePanelVisible = false;
  }

  @action closeLayoutPanel() {
    this.layoutPanelVisible = false;
  }

  @action closeAniamtionPanel() {
    this.animationPanelVisible = false;
  }

  @action closeLinkedPanel() {
    this.linkedPanelVisible = false;
  }

  @action position(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default DesignPanelUiStore;
