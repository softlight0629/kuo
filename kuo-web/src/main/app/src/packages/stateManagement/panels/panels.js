import { observable, action } from 'mobx';
import * as _ from 'lodash';

function createPanelProps(panelName, panelProps) {
  return _.defaults({}, panelProps, {
    panelName,
    key: panelName + _.uniqueId(),
  });
}

class Panels {

  @observable openPanels = [];

  @action openPanel(panelName, panelProps) {
    const panelDescriptor = {
      name: panelName,
      props: panelProps,
    };

    this.openPanels.push(panelDescriptor);
  }

  @action closeOpenedPanels() {
    this.closeAllPanels();
  }

  @action closeAllPanels() {
    this.openPanels = [];
  }

  @action openComponentPanel(fullPanelName, panelProps) {
    this.closeOpenedPanels();

    const panelDescriptor = {
      name: fullPanelName,
      props: _.assign({}, createPanelProps(fullPanelName, panelProps)),
    }

    this.openPanels.push(panelDescriptor);
  }

  @action closePanelByName(panelName) {
    this.openPanels = _.reject(this.openPanels, { name: panelName });
  }

  @action closeAllPanels() {
    this.openPanels = [];
  }

  @action updateOrOpenPanel(panelName, panelProps) {
    const currentPanel = _.find(this.openPanels, { name: panelName });

    if (currentPanel) {
      currentPanel.name = panelName;
      currentPanel.props = panelProps;
    } else {
      this.openPanel(panelName, panelProps)
    }
  }

  selectOpenPanels() {
    return this.openPanels;
  }

}

export default new Panels();
