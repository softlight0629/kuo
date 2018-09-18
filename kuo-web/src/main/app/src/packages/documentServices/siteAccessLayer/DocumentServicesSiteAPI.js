import * as _ from 'lodash';
import DSSiteAPIBase from './DSSiteAPIBase';

const sites = {};

class DocumentServicesSiteAPI extends DSSiteAPIBase{

  constructor(site) {
    if (!site || !site.props) {
      return;
    }

    const siteData = site.props.siteData;
    this._siteId = siteData.siteId;
    sites[this._siteId] = site;

    this._didLayoutCallbacks = [];
    this._registeredToDidLayout = false;
  }

  getComponentsByPageId() {}

  getAllRenderedRootIds() {}

  isComponentRenderedOnSite() {}

  navigateToPage() {}

  scrollToComponent() {}

  setMobileView() {}

  
}

export default DocumentServicesSiteAPI;
