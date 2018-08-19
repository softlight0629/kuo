import { observable, action, computed } from 'mobx';
import * as _ from 'lodash';
import compPanelsRegistrar from '@packages/compUtils/compPanelsRegistrar';

class PanelUiStore {

  @observable compPanelsState = {};

  constructor() {
    const compPanels = compPanelsRegistrar.getCompPanles();

   _.keys(compPanels).forEach(panelName => {
      const compPanelClass = compPanelsRegistrar.getCompPanel(panelName);
      this.compPanelsState[panelName] = observable({
        visible: false,
        props: {},
        compPanelClass,
      })
    });
  }

  @action closePanelByName(panelName) {
    this.compPanelsState[panelName].visible = false;
  }

  @action closeOpenedPanels() {
  }

  @action openComponentPanel(panelName, panelProps) {
    this.compPanelsState[panelName].visible = true;
  }

  @computed get openedPanels() {
    return _.values(this.compPanelsState).filter(compPanel => compPanel.visible);
  }
}

export default PanelUiStore;
