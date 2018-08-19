import constants from '@packages/constants/constants';
import gfppDataUtils from '@packages/gfppData/utils/gfppDataUtils';

const ACTIONS = constants.ROOT_COMPS.GFPP.ACTIONS;

const manageColumnsPanelName = 'compPanels.panels.Grid.columnManagerPanel';

const changeText = {
  label: 'Change Text',
  onClick: (rtStore, compRef) => {
    gfppDataUtils.toggleComponentPanel(rtStore, manageColumnsPanelName, {selectedComponent: compRef});
  }
}

export default {
  mainActions: [
    changeText,
  ],
  extraActions: [
    ACTIONS.SETTINGS,
    ACTIONS.LAYOUT,
    ACTIONS.DESIGN,
  ],
  enabledActions: [
    ACTIONS.SETTINGS,
    ACTIONS.LAYOUT,
    ACTIONS.DESIGN,
    ACTIONS.FILTERS,
    ACTIONS.ANIMATION,
    ACTIONS.LINK,
  ],
}
