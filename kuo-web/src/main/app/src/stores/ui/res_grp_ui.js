import { observable, action } from 'mobx';

class ResGrpUiStore {

  @observable resPanelVisible = false;

  @action showResPanel() {
    this.resPanelVisible = true;
  }

  @action closeResPanel() {
    this.resPanelVisible = false;
  }
}

export default ResGrpUiStore;
