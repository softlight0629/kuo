import * as _ from 'lodash';
import ActionQueue from './data/ActionQueue';
import DALFactory from '@packages/documentServices/dataAccessLayer/dal/DALFactory';
import DataAccessPointers from '@packages/documentServices/dataAccessLayer/pointers/DataAccessPointers';

// const privates = new SiteDatePrivates();

function createSiteDataAndDal(fullSiteData) {
  const fullPagesData = DALFactory.getFullPagesData(fullSiteData, _.pick(fullSiteData, 'pagesData'));
  const cache = DALFactory.getCacheInstance(fullSiteData);
  const dalAndPointers = initDalAndPointers(fullSiteData, cache);
  const sitePrivates = createPrivatesForSite(fullSiteData, dalAndPointers, cache, fullPagesData);

  _.forEach(fullSiteData.getAllRenderedRoots(), rootId => {
    sitePrivates.siteDataAPI.createDisplayedPage(rootId);
  });

  return _.clone(sitePrivates);
}

function initDalAndPointers(fullSiteData, cache) {
  return {
    dal: DALFactory.getInstance(fullSiteData),
    pointers: new DataAccessPointers(cache),
  }
}

function createPrivatesForSite(fullSiteData, dalAndPointers, cache, fullPagesData, props) {
  const privatesForSite = {};
  privatesForSite.dal =  dalAndPointers.dal;
  privatesForSite.pointers = dalAndPointers.pointers;
  privatesForSite.cache = cache;
  // privatesForSite.fullPagesData = fullPagesData;
  privatesForSite.siteData = fullSiteData;
  privatesForSite.dal.setByPath(['pagesData'], {});
  privatesForSite.siteDataAPI = new SiteDataAPI(privatesForSite, props && props.eventsManager);

  return privatesForSite;
}


class SiteDataAPI {
  constructor(srv, eventsManager) {
    this.siteData = srv.siteData;
    this.eventsManager = eventsManager;
    // this.actionQueue = new ActionQueue();
    // this.document = documentDataAPI(srv);
  }

  createDisplayedPage(rootId) {}

  updateDisplayedJsonAfterPageLoaded(rootId) {}

  loadPage() {}

  createDisplayedPages() {}

  getActionQueue() {}
}



export default {
  createSiteDataAndDal,
}
