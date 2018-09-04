import { observable, computed } from 'mobx';
import * as _ from 'lodash';
import compRegistrar from '@packages/compUtils/compRegistrar';
import createComponent from '@packages/runtime/component/createComponent';
import stateManagement from '@packages/stateManagement/stateManagement';

class RuntimeCtx {

  @observable _components = [];

  constructor(editorAPI) {
    this.editorAPI = editorAPI;
  }

  addComponent(compDefinition) {
    const CompDefinitionClazz = compRegistrar.getComp('mila.components.model.' + compDefinition.kind);
    const compRef = new CompDefinitionClazz(compDefinition);
    stateManagement.componentsStore.addComponent(compRef);

    this._components.push(compRef);
    this.editorAPI.selection.selectComponentByCompRef(compRef);

    return compRef;
  }

  addChildComponent(parentId, compDefinition) {
    const CompDefinitionClazz = compRegistrar.getComp('mila.components.model.' + compDefinition.kind);
    const compRef = new CompDefinitionClazz(compDefinition);

    compRef.parentId = parentId;
    stateManagement.componentsStore.addComponent(compRef);

    return compRef;
  }

  createComponentView(compDefinition) {
    const CompDefinitionClazz = compRegistrar.getComp('mila.components.model.' + compDefinition.kind);
    const compRef = new CompDefinitionClazz(compDefinition);

    if (compDefinition.type === 'Container') {
      return createComponent(compRef, true);
    }

    return createComponent(compRef);
  }

  createComponentViewByCompRef(compRef) {
    if (compRef.type === 'Container') {
      return createComponent(compRef, true);
    }

    return createComponent(compRef);
  }

  @computed get components() {
    return this._components;
  }
}

let runtimeCtx = {};

function create(editorAPI) {
  runtimeCtx = new RuntimeCtx(editorAPI);
  return runtimeCtx;
}

export default {
  create,
  getRuntimeCtx: function() {
    return runtimeCtx;
  }
};
