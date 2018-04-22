import { observable, action } from "mobx";

class WorkSpaceUiStore {  

  @observable savePanelVisible = false;

  @action openSavePanel() {
    this.savePanelVisible = true;
  }

  @action closeSavePanel() {
    this.savePanelVisible = false;
  }
}

export default WorkSpaceUiStore;
