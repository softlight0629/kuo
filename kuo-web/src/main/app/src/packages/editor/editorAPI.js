import Selection from './apiSections/selection';
import PanelsManager from './apiSections/panelsManager';
import MediaServices from '../mediaServices/mediaServices';
import MediaGallery from '../mediaGallery/mediaGallery';

function create(store) {

  const editorAPI = {
    store,
  }

  editorAPI.selection = Selection.create(editorAPI);
  editorAPI.panels = PanelsManager.create(editorAPI);
  editorAPI.mediaServices = MediaServices.create(editorAPI);
  editorAPI.mediaGallery = MediaGallery.create(editorAPI);

  return editorAPI;
}

export default create
