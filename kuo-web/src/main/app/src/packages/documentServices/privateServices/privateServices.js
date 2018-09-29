import * as _ from 'lodash';
import DataAccessLayer from '@packages/documentServices/dataAccessLayer/DataAccessLayer';
// import SetOperationsQueue from '@packages/documentServices/siteAccessLayer/SetOperationsQueue';
import DocumentServicesSiteAPI from '@packages/documentServices/siteAccessLayer/DocumentServicesSiteAPI';


class PrivateDocumentServices {

  constructor(config, data) {
    const siteData = data.siteData;
    const siteDataAPI = data.siteDataAPI;

    this.config = _.chain(config).omit(['modules']).cloneDeep();
    this.runtimeConfig = {};

    const cache = data.cache;
    this.siteDataAPI = siteDataAPI;
  }

  initiateSiteAPI(renderedSite) {
    this.siteAPI = new DocumentServicesSiteAPI(renderedSite);
    // this.setOperationsQueue = new SetOperationsQueue(this);
  }
}

export default PrivateDocumentServices
