import categories from './mediaCategoroy';


function create(editorAPI) {

  function open(category, option) {
    const categoryConfig = categories[category];

    const opts = {
      categoryName: category,
      tabsList: categoryConfig.tabsList.open,
      params: categoryConfig.params,
      canSubmitMedia: categoryConfig.canSubmitMedia,
      canSubmitMultipleMedia: categoryConfig.canSubmitMultipleMedia,
    }

    if (option.callback) {
      opts.callback = function callback(payload) {
        option.callback(payload);
        
        editorAPI.mediaGallery.closeAndResetMediaGallery();
      }
    } else if (option.onSuccess) {
      opts.onSuccess = function onSuccess(payload) {
        option.onSuccess(payload);
        
        editorAPI.mediaGallery.closeAndResetMediaGallery();
      }
    }

    if (option.onCancel) {
      opts.onCancel = function onCancel() {
        option.onCancel();
        editorAPI.mediaGallery.closeAndResetMediaGallery();
      }
    }

    if (option.onRemove) {
      opts.onRemove = function onRemove(payload) {
        option.onRemove(payload);
      }
    }

    editorAPI.mediaGallery.openMediaGallery(category, opts);
  }

  return {
    open,
    categories,
  }
}

export default {
  create,
}
