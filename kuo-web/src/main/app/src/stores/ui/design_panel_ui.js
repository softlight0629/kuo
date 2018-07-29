import { observable, action } from 'mobx';
import { generateShowHourMinuteSecond } from 'antd/lib/time-picker';

class DesignPanelUiStore {

  @observable designPanelVisible = false;

  @observable editTextPanelVisible = false;

  @observable layoutPanelVisible = false;

  @observable linkPanelVisible = false;

  @observable settingPanelVisible = false;

  @observable filterPanelVisible = false;

  @observable animationPanelVisible = false;

  @observable changeTextPanelVisible = false;

  @observable manageMediaPanelVisible = false;

  @observable setInputTypePanelVisible = false;

  @observable setInitialTextPanelVisible = false;

  @observable manageButtonsPanelVisible = false;

  @observable manageItemsPanelVisible = false;

  @observable switchSettingsPanelVisible = false;

  @observable gallerySettingsPanelVisible = false;

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

  @action showSetInputTypePanel() {
    this.setInputTypePanelVisible = true;
  }

  @action closeSetInputTypePanel() {
    this.setInputTypePanelVisible = false;
  }

  @action showSetInitialTextPanel() {
    this.setInitialTextPanelVisible = true;
  }

  @action closeSetInitialTextPanel() {
    this.setInitialTextPanelVisible = false;
  }

  @action showManageButtonsPanel() {
    this.manageButtonsPanelVisible = true;
  }

  @action closeManageButtonsPanel() {
    this.manageButtonsPanelVisible = false;
  }

  @action showSwitchSettingsPanel() {
    this.switchSettingsPanelVisible = true;
  }

  @action closeSwitchSettingsPanel() {
    this.switchSettingsPanelVisible = false;
  }

  @action showManageItemsPanel() {
    this.manageItemsPanelVisible = true;
  }

  @action closeManageItemsPanel() {
    this.manageItemsPanelVisible = false;
  }

  @action showSettingPanel() {
    this.settingPanelVisible = true;
  }

  @action closeSettingPanel() {
    this.settingPanelVisible = false;
  }

  @action showGallerySettingsPanel() {
    this.gallerySettingsPanelVisible = true;
  }

  @action position(x, y) {
    this.x = x;
    this.y = y;
  }

}

export default DesignPanelUiStore;
