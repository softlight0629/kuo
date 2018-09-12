import * as _ from 'lodash';
import ActionQueue from './data/ActionQueue';

class SiteDataAPI {
  
  constructor(siteData, eventsManager) {
    this.siteData = siteData;
    this.eventsManager = eventsManager;
    this.pagesPendingForMasterPage = [];

    this.actionQueue = new ActionQueue();
  }

  loadPage(data, callack) {
  }

  createDisplayedPage(rootId) {
  }
}

function create(fullSiteData, props) {
  const fullPagesData = {};
  const cache = {};
  const sitePrivates = createPrivatesForSite(fullSiteData, cache, fullPagesData, props);

  // _.forEach(fullSiteData.getAllPossiblyRenderedRoots(), rootId => {
  //   sitePrivates.siteDataAPI.createDisplayedPage(rootId);
  // });

  return _.clone(sitePrivates);
}

function createPrivatesForSite(fullSiteData, cache, fullPagesData, props) {
  const privatesForSite = {};

  privatesForSite.cache = cache;
  privatesForSite.siteData = fullSiteData;
  privatesForSite.fullPagesData = fullPagesData;
  privatesForSite.siteDataAPI = new SiteDataAPI(privatesForSite, props && props.eventsMananger);
  return privatesForSite;
}

export default {
  create,
}
