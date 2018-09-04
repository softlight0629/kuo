import constants from '@packages/constants/constants';
import gfppDataUtils from '@packages/gfppData/utils/gfppDataUtils';

const ACTIONS = constants.ROOT_COMPS.GFPP.ACTIONS;


export default {
  mainActions: [
    {
      label: 'Manage Columns',
      onClick: (editorAPI, compRef) => {

      },
    },
    {
      label: 'Change Column Background',
      onClick: (editorAPI, compRef) => {

      },
    }
  ],
  enabledActions: [
    ACTIONS.LAYOUT,
  ],
  presetActions: {
  }
}
