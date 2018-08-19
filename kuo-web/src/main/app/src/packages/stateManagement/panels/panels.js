import { observable, action } from 'mobx';
import * as _ from 'lodash';


class Panels {

  @observable openPanels = [];

  @action openPanel(panel) {
    this.openPanels.push(panel);
  }

  @action closePanelByName(panelName) {
    this.openPanels = _.reject(this.openPanels, { name: panelName });
  }

  @action closeAllPanels() {
    this.openPanels = [];
  }

  selectOpenPanels() {
    return this.openPanels;
  }

}

export default new Panels();
