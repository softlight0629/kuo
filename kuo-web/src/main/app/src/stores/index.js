import AuthStore from './domain/auth';
import WorkSpaceStore from './domain/workspace';
import DashboardStore from './domain/dashboard';
import AccountStore from './domain/account';
import SketchBoardStore from './domain/sketchboard';

import WorkSpaceUiStore from './ui/workspace_ui';

import service from '../services';

class GlobalStore {

  constructor() {
    this.authStore = new AuthStore(this, service);
    this.workSpaceStore = new WorkSpaceStore(this, service);
    this.dashboardStore = new DashboardStore(this, service);
    this.accountStore = new AccountStore(this, service);
    this.sketchBoardStore = new SketchBoardStore(this, service);

    this.workSpaceUiStore = new WorkSpaceUiStore(this, service);
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
};
