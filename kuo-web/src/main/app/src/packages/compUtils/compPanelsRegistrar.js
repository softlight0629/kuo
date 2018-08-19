
const compPanels = {};

export default {

  register(panelName, compPanelClass) {
    compPanels[panelName] = compPanelClass;
  },

  getCompPanel(panelName) {
    return compPanels[panelName];
  },

  getCompPanles() {
    return compPanels;
  },
};
