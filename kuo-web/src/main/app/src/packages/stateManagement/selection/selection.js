import { observable, action } from 'mobx';

class Selection {

  @observable.ref selectedComponents = [];

  @action selectComponents(compRefs) {
    this.selectedComponents = compRefs;
  }

  @action addToSelection(compRefs) {
    this.selectedComponents.push(compRefs);
  }

  @action clearSelectedComponents() {
    this.selectedComponents = [];
  }

  getSelectedCompsRefs() {
    return this.selectedComponents;
  }
}

export default new Selection();
