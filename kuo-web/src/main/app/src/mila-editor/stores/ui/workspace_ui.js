import { observable, action } from "mobx";

class WorkSpaceUiStore {  

  @observable savePanelVisible = false;

  @action openSavePanel() {
    this.savePanelVisible = true;
  }

  @action closeSavePanel() {
    this.savePanelVisible = false;
  }

  @action closeMediaLibrary() {
    this.mediaLibraryVisible = false;
  }

  @action openMediaLibrary() {
    this.mediaLibraryVisible = true;
  }
}

export default WorkSpaceUiStore;
