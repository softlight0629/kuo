import * as _ from 'lodash';
import PointersCache from '../pointers/pointersCache';
import DataAccessPointers from '../pointers/DataAccessPointers';
import SiteDataPrivates from '../SiteDataPrivates';
import DalCache from './DalCache';

const dalPrivates = new SiteDataPrivates();

function getCacheInstance(siteData) {
  const cacheJson = getFullCacheJson();
  const pointersCache = new PointersCache(cacheJson);

  return pointersCache;
}

function getPointersInstance(siteData) {
  const cacheInstance = getCacheInstance(siteData);
  return new DataAccessPointers(cacheInstance);
}

function getInstance(siteData) {
  const pointersCache = getCacheInstance(siteData);
  const dalCache = new DalCache(pointersCache);

  return dalCache;
}

function getFullCacheJson() {}

function getFullPagesData(siteData, fullJson) {
  return fullJson;
}

export default {
  getInstance,
  getCacheInstance,
  getPointersInstance,
  getFullPagesData,
}
