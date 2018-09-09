define(['lodash', 'warmupUtilsLib', 'experiment'], function (_, warmupUtilsLib, experiment) {
  'use strict';

  /**
 * Gets an inverted map of pageUriSEO to pageId for all pages
 * @param siteModel
 * @returns {Object}
 */
  function getMapFromPageUriSeoToPageId(siteModel) {
      if (_.has(siteModel, ['publicModel', 'pageList'])) {
          return _(siteModel.publicModel.pageList.pages)
              .keyBy(function getPageUriSEO(pageData) {
                  return _.get(siteModel, ['urlFormatModel', 'pageIdToResolvedUriSEO', pageData.pageId, 'curr']) ||
                      _.get(pageData, 'pageUriSEO') ||
                      warmupUtilsLib.siteConstants.DEFAULT_PAGE_URI_SEO;
              })
              .mapValues('pageId')
              .value();
      }
      return {};
  }

  function convertToObject(arr) {
      if (_.isArray(arr)) {
          return _.zipObject(arr, _.times(arr.length, _.constant(true)));
      }
      return arr;
  }

  /**
 * Changes siteModel to make sure it has a urlFormatModel
 * @param siteModel
 */
  function ensureUrlFormatModel(siteModel) {
      const urlFormatModel = siteModel.urlFormatModel || {};
      if (experiment.isOpen('urlFormat', siteModel)) {
          urlFormatModel.format = warmupUtilsLib.siteConstants.URL_FORMATS.SLASH;
      } else {
          urlFormatModel.format = urlFormatModel.format || warmupUtilsLib.siteConstants.URL_FORMATS.HASH_BANG;
      }
      urlFormatModel.forbiddenPageUriSEOs = convertToObject(urlFormatModel.forbiddenPageUriSEOs || []);
      urlFormatModel.pageIdToResolvedUriSEO = urlFormatModel.pageIdToResolvedUriSEO || {};
      siteModel.urlFormatModel = urlFormatModel;
  }

  function pageUrlsFixer(pageUrlTopology, pageJsonFileName) {
      return _.map(pageUrlTopology, function (URLObject) {
          return URLObject.baseUrl + URLObject.parts.replace('{filename}', pageJsonFileName);
      });
  }

  function getPageURLs(pageList, pageID) {
      const page = _.find(pageList.pages, {pageId: pageID});
      if (page) {
          return pageUrlsFixer(pageList.topology, page.pageJsonFileName);
      }
  }

  function getMasterPageURLs(pageList) {
      return pageUrlsFixer(pageList.topology, pageList.masterPageJsonFileName);
  }

  function getPageJsonFileName(pageList, pageId) {
      const page = _.find(pageList.pages, {pageId}) || {};
      return page.pageJsonFileName || '';
  }

  function getMasterPageJsonFileName(pageList) {
      return pageList.masterPageJsonFileName || '';
  }

  function getPageJsonFileNameFromUrl(jsonUrl) {
      const pageJsonFileNameRegex = /[^\/]+\.json/i;
      return _.head(jsonUrl.match(pageJsonFileNameRegex)) || '';
  }

  return {
      ensureUrlFormatModel,
      getMapFromPageUriSeoToPageId,
      getPageURLs,
      getMasterPageURLs,
      getPageJsonFileName,
      getMasterPageJsonFileName,
      getPageJsonFileNameFromUrl,
      getJsonUrlFromJsonFileName: pageUrlsFixer
  };
});
