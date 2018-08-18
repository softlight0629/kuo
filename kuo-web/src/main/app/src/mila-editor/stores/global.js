import AuthStore from './domain/auth';
import WorkSpaceStore from './domain/workspace';
import DashboardStore from './domain/dashboard';
import AccountStore from './domain/account';
import SketchBoardStore from './domain/sketch_board';
// import MediaLibraryStore from './domain/media_library';

import WorkSpaceUiStore from './ui/workspace_ui';
import DesignPanelUiStore from './ui/design_panel_ui';
import ResGrpUiStore from './ui/res_grp_ui';
import ColorPickerUiStore from './ui/color_picker_ui';
import CompToolBarUiStore from './ui/comp_tool_bar_ui';
import AstRefUiStore from './ui/ast_ref_ui';
import AstUiStore from './ui/ast_ui';
// import AstSkinUiStore from './ui/ast_skin_ui';
// import AstThemeUiStore from './ui/ast_theme_ui';
import MediaLibraryUiStore from './ui/media_library_ui';

import service from '../services';

class GlobalStore {

  constructor() {
    this.authStore = new AuthStore(this, service);
    this.workSpaceStore = new WorkSpaceStore(this, service);
    this.dashboardStore = new DashboardStore(this, service);
    this.accountStore = new AccountStore(this, service);
    this.sketchBoardStore = new SketchBoardStore(this, service);
    this.mediaLibraryStore = {};

    this.workSpaceUiStore = new WorkSpaceUiStore(this, service);
    this.designPanelUiStore = new DesignPanelUiStore(this, service);
    this.resGrpUiStore = new ResGrpUiStore(this, service);
    this.colorPickerUiStore = new ColorPickerUiStore(this, service);
    this.compToolBarUiStore = new CompToolBarUiStore(this, service);
    this.astRefUiStore = new AstRefUiStore(this, service);
    this.astUiStore = new AstUiStore(this, service);
    this.astSkinUiStore = {};
    this.astThemeUiStore = {};
    this.mediaLibraryUiStore = new MediaLibraryUiStore(this, service);
  }
}

const store = new GlobalStore();

export default {
  authStore: store.authStore,
  workSpaceStore: store.workSpaceStore,
  dashboardStore: store.dashboardStore,
  accountStore: store.accountStore,
  sketchBoardStore: store.sketchBoardStore,
  mediaLibraryStore: store.mediaLibraryStore,

  workSpaceUiStore: store.workSpaceUiStore,
  designPanelUiStore: store.designPanelUiStore,
  resGrpUiStore: store.resGrpUiStore,
  colorPickerUiStore: store.colorPickerUiStore,
  compToolBarUiStore: store.compToolBarUiStore,
  astRefUiStore: store.astRefUiStore,
  astUiStore: store.astUiStore,
  astSkinUiStore: store.astSkinUiStore,
  astThemeUiStore: store.astThemeUiStore,
  mediaLibraryUiStore: store.mediaLibraryUiStore,
};
