import * as _ from 'lodash';
import gfppData from '@packages/gfppData/gfppData';
import constants from '@packages/constants/constants';

const ACTIONS = constants.ROOT_COMPS.GFPP.ACTIONS;
const DEFAULT_ENABLED_ACTIONS = [
  ACTIONS.SETTINGS, ACTIONS.LAYOUT, ACTIONS.ANIMATION, ACTIONS.HELP
];

const DEFAULT_GFPP_DATA = {
  enabledActions: DEFAULT_ENABLED_ACTIONS
};

const DEFAULTS = {
  settings: {
    icon: 'setting',
    onClick: gfppData.utils.getTogglePanelFn('compPanels.settings'),
  },
  design: {
    icon: 'dashboard',
    onClick: gfppData.utils.getTogglePanelFn('compPanels.design'),
  },
  layout: {
    icon: 'layout',
    onClick: gfppData.utils.getTogglePanelFn('compPanels.layout'),
  },
  filters: {
    icon: 'rocket',
    onClick: gfppData.utils.getTogglePanelFn('compPanels.filter'),
  },
  behaviors: {
    icon: 'layout',
    onClick: gfppData.utils.getTogglePanelFn('compPanels.behaviors'),
  },
  effects: {
    icon: 'layout',
    onClick: gfppData.utils.getTogglePanelFn('compPanels.effects'),
  },
  stretch: {
    icon: 'layout',
    onClick: gfppData.utils.getTogglePanelFn('compPanels.stretch'),
  },
  corp: {
    icon: 'layout',
    onClick: (rtStore, compRef) => {},
  },
  animation: {
    icon: 'sync',
    onClick:(rtStore, compRef) => {},
  },
  link: {
    icon: 'link',
    onClick:(rtStore, compRef) => {},
  }
}

function getMainActions(compGfppData) {
  return compGfppData.mainActions;
}

function getExtraActions(compGfppData) {
  return compGfppData.extraActions;
}

function getPresetActions(compGfppData) {
  const enabledActions = compGfppData.enabledActions;

  const presetActions = _.merge({}, _.pick(DEFAULTS, enabledActions));

  return presetActions;
}


function getComponentGfppData(rtStore, compRef) {
  const compTypeSuffix = compRef.kind;
  const compGfppData = _.cloneDeep(gfppData.getComponentGfppData(compTypeSuffix)) || DEFAULT_GFPP_DATA;

  compGfppData.mainActions = getMainActions(compGfppData);
  compGfppData.extraActions = getExtraActions(compGfppData);
  compGfppData.presetActions = getPresetActions(compGfppData);

  return {
    mainActions: compGfppData.mainActions,
    extraActions: compGfppData.extraActions,
    presetActions: compGfppData.presetActions,
  }
}


export default {
  getData: getComponentGfppData,
}
