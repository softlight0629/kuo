import { observable, action } from 'mobx';
import { generateShowHourMinuteSecond } from 'antd/lib/time-picker';

class DesignPanelUiStore {

  @observable designPanelVisible = false;

  @observable editTextPanelVisible = false;

  @observable layoutPanelVisible = false;

  @observable linkPanelVisible = false;

  @observable animationPanelVisible = false;


  @observable changeTextPanelVisible = false;

  @observable manageMediaPanelVisible = false;

  @observable x = 100;

  @observable y = 50;

  @action showManageMediaPanel() {
    this.manageMediaPanelVisible = true;
  }

  @action closeManageMediaPanel() {
    this.manageMediaPanelVisible = false;
  }

  @action showDesignPanel() {
    this.designPanelVisible = true;
  }

  @action closeDesignPanel() {
    this.designPanelVisible = false;
  }

  @action showEditTextPanel() {
    this.editTextPanelVisible = true;
  }

  @action closeEditTextPanel() {
    this.editTextPanelVisible = false;
  }

  @action showLayoutPanel() {
    this.layoutPanelVisible = true;
  }

  @action closeLayoutPanel() {
    this.layoutPanelVisible = false;
  }

  @action showAnimationPanel() {
    this.animationPanelVisible = true;
  }

  @action closeAniamtionPanel() {
    this.animationPanelVisible = false;
  }

  @action showLinkPanel() {
    this.linkPanelVisible = true;
  }

  @action closeLinkPanel() {
    this.linkPanelVisible = false;
  }

  @action showChangeTextPanel() {
    this.changeTextPanelVisible = true;
  }

  @action closeChangeTextPanel() {
    this.changeTextPanelVisible = false;
  }

  @action position(x, y) {
    this.x = x;
    this.y = y;
  }

}

export default DesignPanelUiStore;
