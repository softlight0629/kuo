import * as _ from 'lodash';
import PointersCache from '../pointers/pointersCache';
import DataAccessPointers from '../pointers/DataAccessPointers';
import SiteDataPrivates from '../SiteDataPrivates';
import DalCache from './DalCache';

const dalPrivates = new SiteDataPrivates();

// 存储 pontersCache, dalCache 实例, 单例
function getCacheInstance(siteData, fullJson) {
  const privates = dalPrivates.get(siteData);
  if (privates && privates.pointersCache) {
    return privates.pointersCache;
  }

  const privateFullJson = getFullPagesData(siteData, fullJson || _.pick(siteData, 'pagesData'));
  const pointersCache = new PointersCache(privateFullJson);

  dalPrivates.set(siteData, _.assign(dalPrivates.get(siteData), { pointersCache }));
  return pointersCache;
}

function getPointersInstance(siteData) {
  const cacheInstance = getCacheInstance(siteData);
  return new DataAccessPointers(cacheInstance);
}

function getDalCacheInstance(siteData, fullJson) {
  const privates = dalPrivates.get(siteData);
  if (privates && privates.dalCache) {
    return privates.dalCache;
  }

  const pointersCache = getCacheInstance(siteData, fullJson);
  const dalCache = new DalCache(pointersCache, siteData);

  dalPrivates.set(siteData, _.assign(dalPrivates.get(siteData), { dalCache }));

  return dalCache;
}

function getFullPagesData(siteData, fullJson) {
  const privates = dalPrivates.get(siteData);
  if (privates && privates.fullJson) {
    return privates.fullJson;
  }

  dalPrivates.set(siteData, _.assign(dalPrivates.get(siteData),{ fullJson }));

  return fullJson;
}

export default {
  getDalCacheInstance,
  getCacheInstance,
  getPointersInstance,
  getFullPagesData,
}
