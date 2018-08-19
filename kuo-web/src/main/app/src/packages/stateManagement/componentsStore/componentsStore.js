import { observable, action } from 'mobx';

class ComponentsStore {

  @observable components = [];

  @action addComponent(compRef) {
    // this.components[compRef.id] = compRef;
    this.components.push(compRef);
  }

  @action removeComponent(compRef) {
    // delete this.components[compRef.id];
  }

}

export default new ComponentsStore();
