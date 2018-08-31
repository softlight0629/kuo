import * as _ from 'lodash';
import gfppModel from './gfppModel';
import constants from '@packages/constants/constants';

const DEFAULT_ACTIONS = [
  'mobileBackgroundSettings', 'scale_up', 'scale_down', 'settings', 'effects', 'behaviors', 'layout', 'design', 'customizeDesign', 'stylable', 'crop',
  'filters', 'animation', 'mobileAnimation', 'link', 'hide', 'stretch', 'stretchForColumns',
  'applyToOtherView', 'upgrade', 'help', 'connect', 'pinMode', 'preview'];

function getDefaultActionsOrderArr() {
  const actionsArr = DEFAULT_ACTIONS.slice(0);
  return actionsArr;
}

function getActions(actions, actionOrder) {
  return _.values(actions);
  // const actionsArr = _.map(actionOrder, actionName => {
  //   return actions[actionName];
  // });

  // return _.compact(actionsArr);
}

function createButtons(gfppData) {
  const mainActions = gfppData.mainActions || [];
  const extraActions = [];
  const defaultActions = getActions(gfppData.presetActions, getDefaultActionsOrderArr());

  return mainActions.concat(defaultActions).concat(extraActions);
}

export default function mapToProps(editorAPI, compRef) {
  const gfppDta = gfppModel.getData(editorAPI, compRef);
  const buttons = createButtons(gfppDta);

  return {
    selectedComponent: compRef,
    buttons,
  }
}
