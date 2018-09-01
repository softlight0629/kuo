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
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.settings'),
  },
  design: {
    icon: 'apple-o',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.design'),
  },
  layout: {
    icon: 'window-o',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.layout'),
  },
  filters: {
    icon: 'gitlab',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.filter'),
  },
  text: {
    icon: 'codepen',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.text'),
  },
  behaviors: {
    icon: 'layout',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.behaviors'),
  },
  effects: {
    icon: 'layout',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.effects'),
  },
  stretch: {
    icon: 'fork',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.stretch'),
  },
  corp: {
    icon: 'tool',
    onClick: (rtStore, compRef) => {},
  },
  animation: {
    icon: 'aliyun',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.animation'),
  },
  link: {
    icon: 'link',
    onClick: gfppData.utils.getTogglePanelFn('panels.compPanels.link'),
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
