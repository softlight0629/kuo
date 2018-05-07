import AuthStore from './domain/auth';
import WorkSpaceStore from './domain/workspace';
import DashboardStore from './domain/dashboard';
import AccountStore from './domain/account';
import SketchBoardStore from './domain/sketchboard';

import WorkSpaceUiStore from './ui/workspace_ui';
import DesignPanelUiStore from './ui/design_panel_ui';
import ColorPickerUiStore from './ui/color_picker_ui';
import CompToolBarUiStore from './ui/comp_tool_bar_ui';
import AstmRefUiStore from './ui/astm_ref_ui';

import service from '../services';

class GlobalStore {

  constructor() {
    this.authStore = new AuthStore(this, service);
    this.workSpaceStore = new WorkSpaceStore(this, service);
    this.dashboardStore = new DashboardStore(this, service);
    this.accountStore = new AccountStore(this, service);
    this.sketchBoardStore = new SketchBoardStore(this, service);

    this.workSpaceUiStore = new WorkSpaceUiStore(this, service);
    this.designPanelUiStore = new DesignPanelUiStore(this, service);
    this.colorPickerUiStore = new ColorPickerUiStore(this, service);
    this.compToolBarUiStore = new CompToolBarUiStore(this, service);
    this.astmRefUiStore = new AstmRefUiStore(this, service);
  }

}

const store = new GlobalStore();

export default {
  authStore: store.authStore,
  workSpaceStore: store.workSpaceStore,
  dashboardStore: store.dashboardStore,
  accountStore: store.accountStore,
  sketchBoardStore: store.sketchBoardStore,

  workSpaceUiStore: store.workSpaceUiStore,
  designPanelUiStore: store.designPanelUiStore,
  colorPickerUiStore: store.colorPickerUiStore,
  compToolBarUiStore: store.compToolBarUiStore,
  astmRefUiStore: store.astmRefUiStore,
};
