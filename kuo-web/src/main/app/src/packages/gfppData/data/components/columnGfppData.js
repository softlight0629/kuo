import constants from '@packages/constants/constants';
import gfppDataUtils from '@packages/gfppData/utils/gfppDataUtils';

const ACTIONS = constants.ROOT_COMPS.GFPP.ACTIONS;

const manageColumnsPanelName = 'compPanels.panels.Grid.columnManagerPanel';

const manageColumns = {
  label: 'GFPP_MAIN_ACTION_MANAGE_TABLE',
  onClick: (rtStore, compRef) => {
    gfppDataUtils.toggleComponentPanel(rtStore, manageColumnsPanelName, {selectedComponent: compRef});
  }
}

export default {
  mainActions: [
    manageColumns,
  ],
  enabledActions: [
    ACTIONS.SETTINGS,
    ACTIONS.LAYOUT,
    ACTIONS.DESIGN,
  ],
  presetActions: {
  }
}
