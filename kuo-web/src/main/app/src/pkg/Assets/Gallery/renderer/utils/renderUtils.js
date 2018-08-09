import BaseUtils from './baseUtils';

class RenderUtils extends BaseUtils {
  
  constructor() {
    super();

    this._cache = {};
    this._hash2int = {};
    this._params = {};
    this._refs = {};
  }

  getScreenWidth() {
    if (this.isPreview() && this.isMobile()) {
      // In editor preview-mode, the screen is still a desktop, but the viewport in which the preview mode renders us is only 320, so 'window.screen.width' returns a wrong value.
      return 320;
    }
    if (this.isTest() || this.isSemiNative()) {
      return 1920;
    }
    try {
      if (this.isLandscape()) {
        return Math.max(window.screen.width, window.screen.height);
      } else {
        return window.screen.width;
      }
    } catch (e) {
      return 1920;
    }
  }

  getScreenHeight() {
    if (this.isTest() || this.isSemiNative()) {
      return 1200;
    }
    try {
      if (this.isLandscape()) {
        return Math.min(window.screen.width, window.screen.height);
      } else {
        return window.screen.height;
      }
    } catch (e) {
      return 1200;
    }
  }

  fixViewport() {
    if (this.isSemiNative() || !this.isInWix()) {
      return;
    }
    try {
      this._cache.isLandscape = undefined;
      if (this.isSite() && this.isMobile() && !this.isMobileViewer()) {
        //using isUserAgentMobile creates a bug in mobile view when configured to show desktop on mobile (so isWixMobile is false)
        var viewportAspectRatio = 320 / this.getScreenWidth();
        document.body.style.transform = 'scale(' + viewportAspectRatio + ')';
        document.body.style.transformOrigin = '0 0';
        document.body.style.width = 100 / viewportAspectRatio + '%';
        document.body.style.height = 100 / viewportAspectRatio + '%';
      }
    } catch (e) {
      return false;
    }
  }

  isSmallScreen() {
    try {
      return (window.innerWidth || window.outerWidth) < 640 || this.isMobile();
    } catch (e) {
      return false;
    }
  }

  isVerticalScreen() {
    try {
      return window.innerWidth < window.innerHeight;
    } catch (e) {
      return false;
    }
  }

  isLandscape() {
    if (this.isSemiNative()) {
      return false;
    }
    if (!this.isUndefined(this._cache.isLandscape)) {
      return this._cache.isLandscape;
    }
    if (!this.isMobile()) {
      this._cache.isLandscape = false;
    }
    try {
      if (!this.isUndefined(window.orientation)) {
        this._cache.isLandscape = window.orientation === 90 || window.orientation === -90;
      } else if (window.matchMedia) {
        var mql = window.matchMedia('(orientation: landscape)');
        if (mql && mql.matches === true) {
          this._cache.isLandscape = true;
        } else {
          this._cache.isLandscape = false;
        }
      } else {
        this._cache.isLandscape = false;
      }
    } catch (e) {
      this._cache.isLandscape = false;
    }
    return this._cache.isLandscape;
  }

  getDevicePixelRatio() {
    try {
      return window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI; // Support for IE10
    } catch (e) {
      return 1;
    }
  }

  getWindowWidth() {
    try {
      return window.innerWidth || 980;
    } catch (e) {
      return 980;
    }
  }

  getWindowHeight() {
    try {
      return window.innerHeight || 1080;
    } catch (e) {
      return 1080;
    }
  }

  getGalleryByCompId(compId) {
    if (this.isUndefined(this._cache.galleries)) {
      this._cache.galleries = {};
    }

    //todo - caching of galleries removed because in some cases it made the window stay at a old version
    //e.g. - adding an image to the gallery (after fullscreen was already opened) and reopening it

    //if (!this.isUndefined(this._cache.galleries[compId])) {
    //  return this._cache.galleries[compId];
    //}

    for (var d = 0; d < window.parent.frames.length; d++) {
      try {
        var frame = window.parent.frames[d];
        if (frame.isGallery === true || frame.document.location.href.indexOf(this.getUrlPrefix() + 'gallery') >= 0) {
          if (frame.document.location.href.indexOf('compId=' + compId) >= 0) {
            // console.warn('got gallery by compId', compId, frame, frame['proGalleryWidget']);
            this._cache.galleries[compId] = frame;
          }
        }
      } catch (e) {
        //console.log('catch frame'+ d);
      }
    }
    return this._cache.galleries[compId];
  }

  getViewportScaleRatio() {
    //320 is a hack for wix - they have fixed viewport of 320 pixels regardlessof phone type
    if (this.isMobile() && !this.isMobileViewer() && this.isSite()) {
      return 320 / this.getScreenWidth();
    } else {
      return 1;
    }
  }

  getMobileEnabledClick(action) {
    //todo: bring back this line before pushing to master
    return this.isMobile() ? { onTouchEnd: action } : { onClick: action };
    // return {onClick: action};
  }


  getTitleOrFilename(title, filename) {
    var shouldShowTitle = (typeof title === 'undefined' ? 'undefined' : typeof title) === typeof '';
    return shouldShowTitle ? title : filename;
  }

  getFullscreenUrlState(compId, itemId, itemIdx, pageId, styleId) {
    return compId + '/' + itemId + '/' + itemIdx + '/?i=' + itemIdx + '&p=' + pageId + '&s=' + styleId;
  }
}
export default RenderUtils;
