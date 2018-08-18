import * as _ from 'lodash';
import queryString from 'query-string';

class BaseUtil {
  
  constructor() {
    this._cache = {};
    this._hash2int = {};
    this._params = {};
  }

  isUndefined(something) {
    return typeof something === 'undefined';
  }

  getOrPutFromCache(fld, func) {
    if (this._cache[fld] !== undefined) {
      return this._cache[fld];
    }
    this._cache[fld] = func();
    return this._cache[fld];
  }

  isSemiNative() {
    try {
      return window.semiNative;
    } catch (e) {
      return false;
    }
  }

  hashToInt(str, min, max) {
    var int = 0;

    if (this.isUndefined(str) || str.length === 0) {
      return int;
    }

    if (!this._hash2int[str]) {
      for (var i = 0; i < str.length; i++) {
        int += str.charCodeAt(i);
      }
      this._hash2int[str] = int;
    }

    if (this.isUndefined(min) || this.isUndefined(max)) {
      return this._hash2int[str];
    } else {
      return this._hash2int[str] % (max - min + 1) + min;
    }
  }

  parseGetParam(val, url) {

    try {
      if (!this.isUndefined(this._params[val])) {
        return this._params[val];
      }

      var result = '',
          tmp = [];

      var _location = window.location;

      if (url) {
        _location = {
          search: '?' + (url.split('?')[1] || ''),
          pathname: (url.split('?')[0] || '').split('/')[1] || ''
        };
      }

      _location.search
      //.replace ( "?", "" )
      // this is better, there might be a question mark inside
      .substr(1).split('&').forEach(function (item) {
        tmp = item.split('=');
        if (tmp[0] === val) {
          result = decodeURIComponent(tmp[1]);
        }
      });

      if (!result) {

        //if the param was not found in the search, try decoding the path
        var query = decodeURIComponent(_location.pathname).split('?')[1];
        if (!query) {
          return '';
        }

        query.split('&').forEach(function (item) {
          tmp = item.split('=');
          if (tmp[0] === val) {
            result = decodeURIComponent(tmp[1]);
          }
        });
      }

      this._params[val] = result;

      return result;
    } catch (e) {
      return false;
    }
  }

  parsePathParam(val) {
    var path = window.location.pathname;
    var pathArr = path.split('/');
    for (var i = 0; i < pathArr.length; i++) {
      var param = pathArr[i];
      if (param.indexOf(val) >= 0) {
        return param;
      }
    }
    return '';
  }

  parseHashParam(val) {
    var result = '';
    var tmp = [];
    var hashPart = window.location.href.split('#')[1] || '';

    if (!hashPart) {
      return '';
    }

    hashPart
    //.replace ( "?", "" )
    // this is better, there might be a question mark inside
    .substr(1).split('&').forEach(function (item) {
      tmp = item.split('=');
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1]);
      }
    });
    return result;
  }

  stripSlashes(str) {
    var newStr = '';
    if (typeof str === 'string') {
      newStr = str.replace(/\\\//g, '/').replace(/\\'/g, '\'').replace(/\\"/g, '"').replace(/\\0/g, '\0').replace(/\\\\/g, '\\');
    }
    return newStr;
  }

  parseStringObject(sObj) {
    if (typeof sObj !== 'string') {
      return sObj;
    }

    var stripedObj = this.stripSlashes(sObj);
    if (typeof sObj === 'string' && /^[\],:{}\s]*$/.test(stripedObj.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      //this is a json
      try {
        return JSON.parse(stripedObj);
      } catch (e) {
        // console.error('Parse object error: Catched ', e);
      }
    }
    return stripedObj;
  }

  isUserAgentMobile() {

    try {
      var _isUserAgentMobile = function _isUserAgentMobile() {
        var check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|pixel|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
            check = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      };

      if (!this.isSite()) {
        return _isUserAgentMobile();
      } else {
        return this.getOrPutFromCache('isUserAgentMobile', _isUserAgentMobile);
      }
    } catch (e) {
      return false;
    }
  }

  isMobile() {
    var _this2 = this;

    var _isMobile = function _isMobile() {
      return _this2.isUserAgentMobile();
    };

    return false;
    // if (this.isTest()) {
    //   return false;
    // } else if (!this.isSite()) {
    //   return _isMobile();
    // } else {
    //   return this.getOrPutFromCache('isMobile', _isMobile);
    // }
  }

  isTest() {
    try {
      return window.isTest;
    } catch (e) {
      return false;
    }
  }

  isDev() {

    var isDev = this.isLocal();

    if (!this.isUndefined(this._cache.isDev)) {
      return this._cache.isDev;
    }

    isDev = isDev || this.shouldDebug('ph_local');
    isDev = isDev || this.parseGetParam('debug') === 'true';
    isDev = isDev || (this.safeLocalStorage() || {}).forceDevMode === 'true';
    this._cache.isDev = isDev;
    return isDev;
  }

  isVerbose() {
    return !this.isTest() && (this.safeLocalStorage() || {}).forceDevMode === 'true';
  }

  isLocal() {
    var ipRegex = /([0-9]{1,3}\.){3}[0-9]{1,3}:[0-9]{1,5}/; //matches 111.222.333.444:9999

    if (!this.isUndefined(this._cache.isLocal)) {
      return this._cache.isLocal;
    }
    var host = window.location.hostname;
    var isLocal = host === 'local.wix.com' || host === '0.0.0.0' || host.indexOf('localhost') >= 0 || ipRegex.exec(host) !== null;
    this._cache.isLocal = isLocal;
    return isLocal;
  }

  setStateAndLog(that, caller, state, callback) {
    if (this.isVerbose()) {
      console.log('State Change Called (' + caller + ')', state);
      var oldState = _.clone(that.state);
      that.setState(state,  () => {
        var newState = _.clone(that.state);
        // var change = _this6.printableObjectsDiff(oldState, newState, 'state');
        // if (_.keys(change).length > 0) {
        //   console.log('State Change Completed (' + caller + ')', change);
        // }
        if (_.isFunction(callback)) {
          callback.bind(that)();
        }
      });
    } else {
      that.setState(state, function () {
        if (_.isFunction(callback)) {
          callback.bind(that)();
        }
      });
    }
  }

  isPlayground() {
    return false;
  }

  isOnBoarding() {
    return false;
    // try {
    //   var params = qs.parse(window.location.search);
    //   return params.viewMode && params.viewMode.toLowerCase() === 'onboarding';
    // } catch (e) {
    //   return false;
    // }
  }

  getTabIndex(elementName) {
    var elementsArr = ['currentGalleryItem', 'loadMoreButton', 'slideshowNext', 'slideshowPrev', 'currentThumbnail', 'slideshowLove', 'slideshowShare', 'cartIcon', 'cartClose', 'cartFrame', 'fullscreenClose', 'fullscreenNext', 'fullscreenPrev', 'fullscreenInfo',
    // 'fullscreenTitle',
    // 'fullscreenDesc',
    'fullscreenLink', 'fullscreenProvider', 'fullscreenCartButton', 'fullscreenCheckout', 'fullscreenExpand', 'fullscreenVideoPlay', 'fullscreenVideoBar', 'fullscreenVideoMute', 'fullscreenVideoVolume', 'fullscreenCartIcon', 'fullscreenDownload', 'fullscreenLove', 'fullscreenShare'];

    var elementIdx = elementsArr.indexOf(elementName) + 1;
    return elementIdx || -1; //no tabIndex (tab will not focus on this item)
  }

  isStoreGallery() {
    var _this3 = this;

    return this.getOrPutFromCache('isStoreGallery', function () {
      if (_this3.isSemiNative()) {
        return false;
      }

      try {
        return window.location.search.toLowerCase().indexOf('isstore') > -1;
      } catch (e) {
        if (_this3.isDev()) {
          console.error('cant find window', e);
        }
        return false;
      }
    });
  }

  isInWix() {
    return false;
  }

  isEditor() {
    if (!this.isInWix()) {
      return false;
    }
    return this.getViewModeFromCache() === 'editor';
  }

  isPreview() {
    if (!this.isInWix()) {
      return false;
    }
    return this.getViewModeFromCache() === 'preview';
  }

  isSite() {
    return !this.isEditor() && !this.isPreview();
  }

  getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.floor(Math.random() * 16) || 0;
      return c === 'x' ? r.toString(16) : c;
    });
  }

  isInSettings() {
    return this.parseGetParam('expandsettingsmode') === '1';
  }

  isExternalUrl(url) {
    return (/(^https?)|(^data)|(^blob)/.test(url)
    );
  }

  isiOS() {
    return this.getOrPutFromCache('isiOS', function () {
      try {
        return (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        );
      } catch (e) {
        return false;
      }
    });
  }

  isiPhone() {
    return this.getOrPutFromCache('isiPhone', function () {
      try {
        return (/iPhone/.test(navigator.userAgent) && !window.MSStream
        );
      } catch (e) {
        return false;
      }
    });
  }

  isTouch() {
    var _this4 = this;

    return this.getOrPutFromCache('isTouch', function () {
      try {
        return _this4.isMobile() || 'ontouchstart' in document.documentElement;
      } catch (e) {
        return false;
      }
    });
  }

  browserIs(browserName) {

    var browsers = {
      chrome: false,
      chromeIos: false,
      explorer: false,
      firefox: false,
      safari: false,
      opera: false
    };

    try {
      if (this.isUndefined(this._cache.browsers)) {

        browsers.chrome = navigator.userAgent.indexOf('Chrome') > -1;
        browsers.chromeIos = navigator.userAgent.indexOf('CriOS') > -1;
        browsers.explorer = navigator.userAgent.indexOf('MSIE') > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./); // support for edge
        browsers.firefox = navigator.userAgent.indexOf('Firefox') > -1;
        browsers.safari = navigator.userAgent.indexOf('Safari') > -1;
        browsers.opera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

        if (browsers.chrome && browsers.safari) {
          browsers.safari = false;
        }

        if (browsers.chrome && browsers.opera) {
          browsers.chrome = false;
        }

        this._cache.browsers = browsers;
      }

      return this._cache.browsers[browserName];
    } catch (e) {
      this._cache.browsers = browsers;
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
      } else {
        var mql = window.matchMedia('(orientation: landscape)');
        if (mql && mql.matches === true) {
          this._cache.isLandscape = true;
        } else {
          this._cache.isLandscape = false;
        }
      }
    } catch (e) {
      this._cache.isLandscape = false;
    }
    return this._cache.isLandscape;
  }

  isDebugBuild() {
    try {
      return process.env.NODE_ENV === 'development';
    } catch (e) {
      return false;
    }
  }

  safeLocalStorage() {
    try {
      return localStorage;
    } catch (e) {
      return window;
    }
  }

  shouldDebug(str) {
    try {
      return !!this.safeLocalStorage()[str] || (window.debugApp || '').indexOf(str) >= 0 || (this.parseGetParam('debugApp') || '').indexOf(str) >= 0;
    } catch (e) {
      return false;
    }
  }

  getUrlPrefix(forceProduction) {
    try {
      return window.location.protocol + '//' + (!forceProduction && this.isLocal() ? 'local.wix.com:3001' : 'progallery.wix.com') + '/';
    } catch (e) {
      return 'http://progallery.wix.com/';
    }
  }

  getFullscreenSectionId() {
    var isStore = this.isStoreGallery();
    return isStore ? 'fullscreen_store_page' : 'fullscreen_page';
  }

  safeSessionStorage() {
    try {
      return sessionStorage;
    } catch (e) {
      return window || {};
    }
  }

  getLocalStorage() {
    if (this.isDev()) {
      return this.safeSessionStorage();
    } else {
      var _localStorage = this.safeLocalStorage();
      return _localStorage || this.safeSessionStorage();
    }
  }

  getUrlParam(name) {
    try {
      (window.location.search.replace('?', '').split('&').filter(function (queryParam) {
        return queryParam.indexOf('=') !== -1;
      }).map(function (queryParam) {
        var _queryParam$split = queryParam.split('='),
            _queryParam$split2 = _queryParam$split.slice(0, 2),
            key = _queryParam$split2[0],
            value = _queryParam$split2[1];

        return { key: key, value: value };
      }).filter(function (pair) {
        return pair.key === name;
      }).shift() || { value: '' }).value;
    } catch (e) {
      return '';
    }
  }

  isMacOs() {
    try {
      window.source === 'mac-os' || this.getUrlParam('macos') === 'true';
    } catch (e) {
      return false;
    }
  }
}

export default BaseUtil;
