

function toggleComponentPanel(rtStore, fullPanelName, panelProps) {

  // if (rtStore.panelUiStore.findPanel(fullPanelName)) {
  //   rtStore.panelUiStore.closePanelByName(fullPanelName);
  // } else {
  //   rtStore.panelUiStore.closeOpenedPanels();
  //   rtStore.panelUiStore.openComponentPanel(fullPanelName, panelProps);
  // }
  rtStore.panelUiStore.openComponentPanel(fullPanelName, panelProps);
}

function getTogglePanelFn(panelName, optionalProps) {
  return function(rtStore) {
    toggleComponentPanel(rtStore, panelName, optionalProps);
  }
}

export default {
  toggleComponentPanel,
  getTogglePanelFn,
}
