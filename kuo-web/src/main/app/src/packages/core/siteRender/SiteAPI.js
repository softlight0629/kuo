import * as _ from 'lodash';

class SiteAPI {
  constructor(site) {
    this._site = site;
  }

  setSite(site) {
    this._site = site;
  }

  getSiteData() {
    return this._site.props.siteData;
  }

  getLoadedStyles() {
    return this._site.loadedStyles;
  }
  
  onSiteUnmount() {
    setTimeout(() => {
      delete this._site;
    });
  }

  isLandingPage(pageId) {
    return this.getSiteData().isPageLandingPage(pageId);
  }

  scrollToComponent(compId, callbacks) {}

  getAllRenderedRootIds() {}

  navigateToPage() {}

  forceUpdate(callback) {
    this._site.forceUpdate(callback);
  }

  getComponentsByPageId(rootId) {
    return this._site.getComponentsByPageId(rootId);
  }

  getComponentFocusedPage() {}

  getCompsDataOnPage(pageId) {}

  getComponentType(compId) {}
}

export default SiteAPI;
