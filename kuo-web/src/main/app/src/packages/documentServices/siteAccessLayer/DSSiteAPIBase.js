import * as _ from 'lodash';

function getSiteData(dsSiiteAPI) {
}

class DSSiteAPIBase {

  constructor(siteData, siteDataAPI) {
    this._siteId = siteData.siteId;
  }

  getSiteId() {
    return this._siteId;
  }

  isMobileView() {}

  getMainPageId() {}

  getCurrentPageId() {}

  getAllCompsUnderRoot(rootId) {}

  getScreenSize() {}

  getScreenHeight() {}

  getPageBottomMargin() {}

  getPageTopMargin() {}

  getPageMargins() {}

  getSiteX() {}

  setMobileView() {}

  getPrimaryPageId() {}

  isPageLandingPage() {}
}

export default DSSiteAPIBase;
