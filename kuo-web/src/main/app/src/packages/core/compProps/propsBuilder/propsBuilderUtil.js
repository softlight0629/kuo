import * as _ from 'lodash';
import SiteDataPrivates from '@packages/documentServices/dataAccessLayer/SiteDataPrivates';

const privates = new SiteDataPrivates();

const ENABLED_ACTIONS_WHEN_COMP_IS_HIDDEN = ['viewportLeave', 'viewportEnter', 'fetchData'];

function getStyleId(styleId, skin) {
  if (_.isString(styleId) && !_.isEmpty(styleId)) {
    return styleId;
  }

  // return shortenStyleId(skin);
}

function getSkin(styleId, skin, getThemeData) {}

function getCompProp(siteAPI, propertyQuery, pageId) {
  const siteData = siteAPI.getSiteData();
  return siteData.getDataByQuery(propertyQuery, pageId, siteData.dataType.PROPERTIES) || {};
}

function getScreenLayoutFunc(siteData) {
  if (privates.has(siteData)) {
    return privates.get(siteData);
  }

  const getScreenLayout = function() {
    return {
      pageMargins: siteData.getPageMargins(),
      screenWidth: siteData.getScreenWidth(),
      siteWidth: siteData.getSiteWidth(),
      siteX: siteData.getSiteX(),
      screenHeight: siteData.getScreenHeight(),
    }
  }

  privates.set(siteData, getScreenLayout);

  return getScreenLayout;
}

function getStyle(layout, siteAPI, compId) {
  const siteData = siteAPI.getSiteData();
}

function getCompBehaviors(siteAPI, propertyQuery, behaviorQuery, pageId, compId) {
  const siteData = siteAPI.getSiteData();
  const behaviorsDataItem = siteData.getDataByQuery(behaviorQuery, pageId, siteData.dataType.BEHAVIORS) || {};

  // const isHidden = _.get(getCompProp(siteAPI, propertyQuery, pageId), 'isHidden');
  // if (isHidden) {
  //   return _.filter(behaviorsDataItem.items,)
  // }

  return behaviorsDataItem.items || [];
}

function getCompData(siteAPI, dataQuery, pageId) {
  const siteData = siteAPI.getSiteData();
  return siteData.getDataByQuery(dataQuery, pageId, siteData.dataTypes.DATA);
}

function getCompDesign(siteAPI, designQuery, pageId) {
  const siteData = siteAPI.getSiteData();
  return siteData.getDataByQuery(designQuery, pageId, siteData.dataType.DESIGN);
}

function getRootProps(compClass, rootId, siteAPI) {
  const siteData = siteAPI.getSiteData();

  const dalCache = siteAPI.getDalCache();
  const pointers = siteAPI.getPointers();
  const pagePointer = pointers.components.getPage(rootId, siteData.getViewMode());
  const currentPageComponentType = dalCache.get(pointers.getInnerPointer(pagePointer, ['componentType'])) || 'mila.core.components.MasterPage';
  const dataQuery = dalCache.get(pointers.getInnerPointer(pagePointer, ['dataQuery']));
  const compData = getCompData(siteAPI, dataQuery, rootId);
  
  return {
    componentType: currentPageComponentType,
    siteData,
    siteAPI,
    id: rootId,
    key: `${rootId}_${siteData.getViewMode()}`,
    ref: rootId,
    compData,
    rootId,
  }
}


export default {
  getRootProps,
  getStyleId,
  getSkin,
  getCompProp,
  getStyle,
  getCompData,
  getCompDesign,
  getCompBehaviors,
}
