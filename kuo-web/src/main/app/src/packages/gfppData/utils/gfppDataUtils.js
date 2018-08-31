import * as _ from 'lodash';
import stateManagement from '@packages/stateManagement/stateManagement';

function findPanel(editorAPI, panelName) {
  const openedPanels = stateManagement.panels.openedPanels;

  return _.find(openedPanels, panel => {
    const name = _.last(panel.name.split('.'));
    return panel.name === panelName;
  });
}

function toggleComponentPanel(editorAPI, fullPanelName, panelProps) {
  if (findPanel(editorAPI, fullPanelName)) {
    stateManagement.panels.closePanelByName(fullPanelName);
  } else {
    stateManagement.panels.closeOpenedPanels();
    stateManagement.panels.openComponentPanel(fullPanelName, panelProps);
  }
}

function getToggleCompPanelFn(panelName, optionalProps) {
  return function(editorAPI) {
    toggleComponentPanel(editorAPI, panelName, optionalProps);
  }
}

function isPanelOpen(editorAPI, panelName) {
  return !!findPanel(editorAPI, panelName);
}

function openPanel(editorAPI, panelName, optionalProps) {
  return stateManagement.panels.openPanel(panelName, optionalProps);
}

function closePanel(editorAPI, panelName) {
  const panelToClose = findPanel(editorAPI, panelName);
  if (panelToClose) {
    stateManagement.panels.closePanelByName(panelToClose.name);
  }
}

function togglePanel(editorAPI, panelName, optionalProps) {
  if (isPanelOpen(editorAPI, panelName)) {
    return closePanel(editorAPI, panelName);
  }

  stateManagement.panels.closeOpenedPanels();
  return openPanel(editorAPI, panelName, optionalProps);
}

function getTogglePanelFn(panelName, optionalPropsOverides) {
  return function(editorAPI, compRef, optionalProps) {
    togglePanel(editorAPI, panelName, _.merge({ selectedComponent: compRef }, optionalPropsOverides, optionalProps))
  }
}

export default {
  toggleComponentPanel,
  getToggleCompPanelFn,
  getTogglePanelFn,
}
