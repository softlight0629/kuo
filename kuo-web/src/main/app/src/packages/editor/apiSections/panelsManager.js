import stateManagement from '@packages/stateManagement/stateManagement';

function create(editorAPI) {

  function openPanel(panelName, panelProps) {
    stateManagement.panels.openPanel(panelName, panelProps);
  }

  function openComponentPanel(panelName, panelProps) {
    stateManagement.panels.openComponentPanel(panelName, panelProps);
  }

  function closePanelByName(panelName) {
    stateManagement.panels.closePanelByName(panelName);
  }

  function closeAllPanels() {
    stateManagement.panels.closeOpenedPanels();
  }

  function getOpenPanels() {
    return stateManagement.panels.selectOpenPanels();
  }

  return {
    openPanel,
    openComponentPanel,
    closePanelByName,
    closeAllPanels,
    getOpenPanels,
  }
}

export default {
  create,
}
