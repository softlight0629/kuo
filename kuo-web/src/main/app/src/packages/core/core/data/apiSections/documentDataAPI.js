import * as _ from 'lodash';
import displayedStructureUtils from '@packages/coreUtils/core/displayedStructureUtils';
import dataUtils from '@packages/coreUtils/core/dataUtils';

function getOriginalCompStructure(sitePrivates, pageId, rootId, viewMode) {
  const boundCache = sitePrivates.pointersCache.getBoundCacheInstance(true);
  const pagePointer = sitePrivates.pointers.components.getPage(pageId, viewMode);
  const rootPointer = pagePointer && sitePrivates.pointers.components.getComponent(rootId, pagePointer);
  const path = rootPointer && boundCache.getPath(rootPointer);

  return path ? _.get(sitePrivates.fullPagesData, path) : null;
}

function getAllCompsUnderRoot(sitePrivates, pageId, rootCompId) {
  const originalId = displayedStructureUtils.getOriginalId(rootCompId);
  const fullNodeStructure = getOriginalCompStructure(sitePrivates, pageId, originalId, sitePrivates.siteData.getViewMode());
  return dataUtils.getAllCompsInStructure(fullNodeStructure, sitePrivates.siteData.isMobileView());
}

function getFullStructureProperty(sitePrivates, compPointer, property) {
  const boundCache = sitePrivates.pointersCache.getBoundCacheInstance(true);
  const path = boundCache.getPath(sitePrivates.pointers.getInnerPointer(compPointer, property));
  return path ? _.get(sitePrivates.fullPagesData, path) : null;
}

function getFullDataItem(sitePrivates, dataPointer) {
  const boundCache = sitePrivates.pointersCache.getBoundCacheInstance(true);
  const path = boundCache.getPath(dataPointer);
  return path ? _.get(sitePrivates.fullPagesData, path) : null;
}

function getFullPagesData(sitePrivates) {
  return sitePrivates.fullPagesData.pagesData;
}

function getAPI(sitePrivates) {
  const api = {
    getAllCompsUnderRoot: _.partial(getAllCompsUnderRoot, sitePrivates),
    getFullStructureProperty: _.partial(getFullStructureProperty, sitePrivates),
    getFullDataItem: _.partial(getFullDataItem, sitePrivates),
    getFullPagesData: _.partial(getFullPagesData, sitePrivates),
  }

  return api;
}

export default getAPI;
