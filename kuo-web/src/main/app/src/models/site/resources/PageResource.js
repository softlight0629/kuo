import { observable, action, extendObservable } from 'mobx';

class PageResource {

  @observable id;
  @observable name;
  @observable template;

  constructor(store, initialState) {
    this.store = store;
    extendObservable(this, initialState);
  }

  @action changeName(name) {
    this.name = name;
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      template: this.template,
    }
  }
}

export default PageResource;
