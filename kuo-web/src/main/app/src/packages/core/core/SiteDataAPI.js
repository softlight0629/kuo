import * as _ from 'lodash';
import ActionQueue from './data/ActionQueue';
import DalFactory from '@packages/documentServices/dataAccessLayer/DalFactory';
import PointersCacheGenerator from '@packages/documentServices/dataAccessLayer/PointersCacheGenerator'

class SiteDataAPI {
  constructor(srv, eventsManager) {
    this.siteData = srv.siteData;
    this.eventsManager = eventsManager;
    // this.actionQueue = new ActionQueue();
    // this.document = documentDataAPI(srv);
  }
}

function createSiteDataAndDal(siteData, props) {
  const srv = {};

  srv.dal = DalFactory.getDataAccessLayerInstance(siteData);
  srv.siteData = siteData;
  srv.siteDataAPI = new SiteDataAPI(srv, props && props.eventsManager);

  initDalAndPointers(srv.dal, siteData);
}

function initDalAndPointers(dal, siteData) {
  const pagesData = siteData.getPagesData();
  
  _.forEach(pagesData, (pageData) => {
    const ps = DalFactory.getPointersCacheInstance(pageData.structure.id);
    dal.addPagePointers(pageData.structure.id, ps);

    PointersCacheGenerator.generatePagePointers(pointersCache, pageData);
  });
}


export default {
  createSiteDataAndDal,
}
