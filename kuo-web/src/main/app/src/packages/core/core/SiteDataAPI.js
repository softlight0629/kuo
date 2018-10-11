import * as _ from 'lodash';
import ActionQueue from './data/ActionQueue';
import DALFactory from '@packages/documentServices/dataAccessLayer/dal/DALFactory';
import DataAccessPointers from '@packages/documentServices/dataAccessLayer/pointers/DataAccessPointers';
import documentDataAPI from '@packages/core/core/data/apiSections/documentDataAPI';
import SiteDataPrivates from '@packages/documentServices/dataAccessLayer/SiteDataPrivates';

const privates = new SiteDataPrivates();

function createSiteDataAndDal(fullSiteData) {
  const fullPagesData = DALFactory.getFullPagesData(fullSiteData, _.pick(fullSiteData, 'pagesData'));
  const pointersCache = DALFactory.getCacheInstance(fullSiteData);
  const dalAndPointers = initDalAndPointers(fullSiteData, pointersCache);
  const sitePrivates = createPrivatesForSite(fullSiteData, dalAndPointers, pointersCache, fullPagesData);

  privates.set(fullSiteData, sitePrivates);
  // _.forEach(fullSiteData.getAllRenderedRoots(), rootId => {
  //   sitePrivates.siteDataAPI.createDisplayedPage(rootId);
  // });

  return sitePrivates;
}

function initDalAndPointers(fullSiteData, pointersCache) {
  return {
    dalCache: DALFactory.getDalCacheInstance(fullSiteData),
    pointers: new DataAccessPointers(pointersCache),
  }
}

function createPrivatesForSite(fullSiteData, dalAndPointers, pointersCache, fullPagesData, props) {
  const privatesForSite = {};
  // cache 实例存储对象
  privatesForSite.dalCache =  dalAndPointers.dalCache;
  // 各个模块的ponters挂载对象,  dataPointers, componentPointers
  privatesForSite.pointers = dalAndPointers.pointers;
  // pointers 指针存储对象
  privatesForSite.pointersCache = pointersCache;
  // privatesForSite.fullPagesData = fullPagesData;
  privatesForSite.siteData = fullSiteData;
  // 初始化 pagesData
  // privatesForSite.dalCache.setByPath(['pagesData'], {});

  // 构造 siteDataAPI
  privatesForSite.siteDataAPI = new SiteDataAPI(privatesForSite, props && props.eventsManager);

  return privatesForSite;
}


class SiteDataAPI {
  constructor(sitePrivates, eventsManager) {
    this.siteData = sitePrivates.siteData;
    this.eventsManager = eventsManager;

    this.pagesPendingForMasterPage = [];

    this.doucment = documentDataAPI(sitePrivates);
  }
}

export default {
  createSiteDataAndDal,
}
