import { observable, action } from "mobx";

class WorkSpaceUiStore {  

  @observable savePanelVisible = false;

  @observable mediaGalleryVisible = false;

  @action openSavePanel() {
    this.savePanelVisible = true;
  }

  @action closeSavePanel() {
    this.savePanelVisible = false;
  }

  @action closeMediaGallery() {
    this.mediaGalleryVisible = false;
  }

  @action openMediaGallery() {
    this.mediaGalleryVisible = true;
  }
}

export default WorkSpaceUiStore;
