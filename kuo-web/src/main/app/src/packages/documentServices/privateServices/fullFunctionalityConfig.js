
import pagePublicAPI from '@packages/documentServices/page/pagePublicAPI';
// import pagesGroupPublicAPI from '@packages/documentServices/pagesGroup/pagesGroupPublicAPI';
// import fontsPublicAPI from '@packages/documentServices/fonts/fontsPublicAPI';
// import componentPublicAPI from '@packages/documentServices/component/componentPublicAPI';
// import siteMetadataPublicAPI from '@packages/documentServices/siteMeta/siteMetadataPublicAPI';
// import documentModePublicAPI from '@packages/documentMode/documentModePublicAPI';

const modules = {
  pagePublicAPI,
}

function getFullConfig() {
  return {
    modules,
    shouldRender: true,
    isReadOnly: false,
    onUndoe: false,
  }
}

export default {
  getConfig: getFullConfig,
}
