import constants from '@packages/constants/constants';
import gfppDataUtils from '@packages/gfppData/utils/gfppDataUtils';

const ACTIONS = constants.ROOT_COMPS.GFPP.ACTIONS;


export default {
  mainActions: [
    {
      label: 'Change Image',
      onClick: (editorAPI, compRef) => {
        editorAPI.mediaServices.changePhoto(compRef);
      }
    }
  ],
  enabledActions: [
    ACTIONS.SETTINGS,
    ACTIONS.DESIGN,
    // ACTIONS.AVIARY,
    ACTIONS.CROP,
    ACTIONS.FILTERS,
    ACTIONS.ANIMATION,
    ACTIONS.LINK,
    // ACTIONS.HELP,
    // ACTIONS.CUSTOMIZE_DESIGN
  ]
}
