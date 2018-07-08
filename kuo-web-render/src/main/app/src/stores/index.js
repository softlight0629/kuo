import AppStore from './domain/app';
import service from '../services';

class GlobalStore {
  
  constructor() {
    this.appStore = new AppStore(this, service);
  }
}

const store = new GlobalStore();

export default {
  appStore: store.appStore,
};
