import { computed } from 'mobx';
import * as _ from 'lodash';
import compRegistrar from '@packages/compUtils/compRegistrar';
import stateManagement from '@packages/stateManagement/stateManagement';

class RuntimeCtx {

  constructor(editorAPI) {
    this.editorAPI = editorAPI;
  }

  addComponent(compDefinition) {
    const CompDefinitionClazz = compRegistrar.getComp('mila.components.model.' + compDefinition.kind);
    const compRef = new CompDefinitionClazz(compDefinition);
    stateManagement.componentsStore.addComponent(compRef);

    this.editorAPI.selection.selectComponentByCompRef(compRef);
  }

  @computed get components() {
    return stateManagement.componentsStore.components;
  }

}

export default RuntimeCtx;
