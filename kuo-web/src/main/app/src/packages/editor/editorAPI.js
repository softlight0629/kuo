import Selection from './apiSections/selection';


function create(store) {

  const editorAPI = {
    store,
  }

  editorAPI.selection = Selection.create(editorAPI);

  return editorAPI;
}

export default create
