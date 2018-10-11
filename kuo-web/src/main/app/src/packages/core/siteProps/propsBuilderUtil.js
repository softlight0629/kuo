import * as _ from 'lodash';

function getStyleId(styleId, skin) {
  if (_.isString(styleId) && !_.isEmpty(styleId)) {
    return styleId;
  }
}

function getSkin(styleId, skin) {
  return skin;
}

function getCompProp(siteAPI, propertyQuery, pageId) {
  const siteData = siteAPI.getSiteData();
  return siteData.getDataByQuery(propertyQuery, pageId, siteData.dataTypes.PROPERTIES) || {};
}

export default {
  getStyleId,
  getSkin,
  getCompProp,
}
