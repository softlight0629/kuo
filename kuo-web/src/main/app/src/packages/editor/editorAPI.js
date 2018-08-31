import Selection from './apiSections/selection';
import PanelsManager from './apiSections/panelsManager';

function create(store) {

  const editorAPI = {
    store,
  }

  editorAPI.selection = Selection.create(editorAPI);
  editorAPI.panels = PanelsManager.create(editorAPI);

  return editorAPI;
}

export default create
