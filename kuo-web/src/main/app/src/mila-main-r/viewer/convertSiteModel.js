
export default (scope) => {

  return function (rendererModel, publicModel) {

    function getPagesDataFromSiteAsJson(siteJson) {
      const initialPagesData = {
        masterPage: siteJson.masterPage,
      };

      return siteJson.pages.reduce((accum, val) => {
        accum[val.structure.id] = val;
        return accum;
      }, initialPagesData);
    }

    const siteModel = {
      publicModel,
      serviceTopology: scope.serviceTopology,
      rendererModel,
      pagesData: getPagesDataFromSiteAsJson(scope.siteAsJson),
      siteHeader: { id: rendererModel.siteId, userId: rendererModel.userId },
      documentServicesModel: scope.documentServicesModel,
      siteId: rendererModel.siteId,
      viewMode: rendererModel.previewMode ? 'preview' : 'site',
    }

    return siteModel;
  }
}
