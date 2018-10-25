import * as _ from 'lodash';

const privatesMap  = new WeakMap();

class SiteAPI {
  constructor(site) {
    this._site = site;

    const fetchers = milaProps.fetchers.get(this);
    privatesMap.set(this, {fetchers});
  }

  setSite(site) {
    this._site = site;
  }

  getSiteData() {
    return this._site.props.siteData;
  }

  getPointersCache() {
    return this._site.props.ps.pointersCache;
  }

  getPointers() {
    return this._site.props.ps.pointers;
  }

  getDalCache() {
    return this._site.props.ps.dalCache;
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

  getMilaFetcher(milaTypeDefinition) {
    const fetchers = privatesMap.get(this).fetchers;

    return _.get(fetchers, milaTypeDefinition.id);
  }

  getPageData() {}

  getComponentFocusedPage() {}

  getCompsDataOnPage(pageId) {}

  getComponentType(compId) {}
}

export default SiteAPI;
