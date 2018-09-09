import * as _ from 'lodash';

const MOBILE_MAX_WIDTH = 600;
const TABLET_MAX_WIDTH = 1280;
const DEVICE_TYPES = {
    MOBILE: 'smartphone',
    TABLET: 'tablet',
    DESKTOP: 'desktop',
    OTHER: 'other'
};

const EPSILON = 0.0001;
function fuzzyEqual(a, b) {
    return Math.abs(a - b) < EPSILON;
}
function fuzzyGreaterThan(a, b) {
    return a > b + EPSILON;
}

let prevUserAgent = '';
let androidParams = null;
/**
 *
 * @return {?{width: number, height: number}}
 * @private
 */
function paramsForSpecificAndroidDevices(userAgent) { // eslint-disable-line complexity
    if (userAgent !== prevUserAgent) {
        prevUserAgent = userAgent;
        switch (true) {
            case (/(GT-S5300B|GT-S5360|GT-S5367|GT-S5570I|GT-S6102B|LG-E400f|LG-E400g|LG-E405f|LG-L38C|LGL35G)/i).test(userAgent):
                androidParams = {width: 240, height: 320};
                break;
            case (/(Ls 670|GT-S5830|GT-S5839i|GT-S6500D|GT-S6802B|GT-S7500L|H866C|Huawei-U8665|LG-C800|LG-MS695|LG-VM696|LGL55C|M865|Prism|SCH-R720|SCH-R820|SCH-S720C|SPH-M820-BST|SPH-M930BST|U8667|X501_USA_Cricket|ZTE-Z990G)/i).test(userAgent):
                androidParams = {width: 320, height: 480};
                break;
            case (/(5860E|ADR6300|ADR6330VW|ADR8995|APA9292KT|C771|GT-I8160|GT-I9070|GT-I9100|HTC-A9192|myTouch4G|N860|PantechP9070|PC36100|pcdadr6350|SAMSUNG-SGH-I727|SAMSUNG-SGH-I777|SAMSUNG-SGH-I997|SC-03D|SCH-I405|SCH-I500|SCH-I510|SCH-R760|SGH-S959G|SGH-T679|SGH-T769|SGH-T959V|SGH-T989|SPH-D700)/i).test(userAgent):
                androidParams = {width: 480, height: 800};
                break;
            case (/(DROIDX|SonyEricssonSO-02C|SonyEricssonST25i)/i).test(userAgent):
                androidParams = {width: 480, height: 854};
                break;
            case (/(DROID3|MB855)/i).test(userAgent):
                androidParams = {width: 540, height: 960};
                break;
            case (/F-05D/i).test(userAgent):
                androidParams = {width: 720, height: 1280};
                break;
            default:
                androidParams = null;
        }
    }
    return androidParams;
}

/**
 * Returns number with 7 digits (e.g. 5375101), or NaN if is not a Webkit
 *
 * @param {string} userAgent - evaluated on browser from `navigator.userAgent`
 * @return {number}
 */
function getWebkitVersion(userAgent) {
    const match = userAgent.match(/applewebkit\/([\d\.]+)/i);
    let version,
        major,
        minor,
        build;

    if (match) {
        version = match[1].split('.');
        major = +(version[0] || 0);
        minor = +(version[1] || 0);
        build = +(version[2] || 0);

        return major * 10000 + minor * 100 + build; // eslint-disable-line no-mixed-operators
    }

    return NaN;
}

class MobileDeviceAnalyze {

  constructor(requestModel) {
    this.requestModel = requestModel;
  }

  /**
   *
   * @return {boolean}
   */
  isMobileDevice() {
    if (this.isWindowUnavailable() || this.isSSSR()) {
      const isMobileDetectedByServer = _.result(this, 'requestModel.deviceType.toLowerCase') === DEVICE_TYPES.MOBILE;
      return isMobileDetectedByServer;
    }

    const screenWidth = this.isLandscape() ? this.getScreenHeight() : this.getScreenWidth();
    const isMobileScreenSize = screenWidth < MOBILE_MAX_WIDTH;
    const isMobileDetectedByClient = isMobileScreenSize && (this.isTouchScreen() || this.isMSMobileDevice());
    //should add bi event here to indicate if server detection is the same as client detection
    return isMobileDetectedByClient;
  }

  /**
   *
   * @return {boolean}
   */
  isTabletDevice() { // eslint-disable-line complexity
    if (this.isWindowUnavailable() || this.isSSSR()) {
      return !!(this.requestModel && this.requestModel.deviceType && this.requestModel.deviceType.toLowerCase() === DEVICE_TYPES.TABLET);
    }

    const screenWidth = this.isPortrait() ? this.getScreenHeight() : this.getScreenWidth();
    return !this.isMobileDevice() &&
      (screenWidth >= MOBILE_MAX_WIDTH && screenWidth <= TABLET_MAX_WIDTH) &&
      !_.get(window, ['rendererModel', 'previewMode'], false) &&
      this.isTouchScreen() && !this.isWindowsTablet();
  }

  /**
   *
   * @return {number}
   */
  getWindowScreenWidth() {
    return window.screen.width;
  }

  /**
   *
   * @return {boolean}
   */
  isWindowsTablet() {
    return /windows/i.test(window.navigator.userAgent.toLowerCase());
  }
  /**
   *
   * @return {number}
   */
  getScreenWidth() {
    const sizes = this._getDeviceParamsByUserAgent();
    return sizes ? sizes.width : NaN;
  }

  /**
   *
   * @return {number}
   */
  getScreenHeight() {
    const sizes = this._getDeviceParamsByUserAgent();
    return sizes ? sizes.height : NaN;
  }

  /**
   *
   * @return {boolean}
   */
  isAppleMobileDevice() {
    return /iphone|ipod|ipad|Macintosh/i.test(this.requestModel.userAgent);
  }

  /**
   *
   * @return {boolean}
   */
  isMSMobileDevice() {
    return /iemobile/i.test(this.requestModel.userAgent);
  }

  /**
   *
   * @return {boolean}
   */
  isAndroidMobileDevice() {
    return /android/i.test(this.requestModel.userAgent);
  }

  /**
   * Checks for older WebKit browsers which have rendering bug,
   * when "overflow: hidden" + border-radius do not work if
   * inner element is an <iframe>.
   *
   * If WebKit build number is 537+, then it should work fine.
   * @return {boolean}
   */
  cannotHideIframeWithinRoundedCorners() {
    return getWebkitVersion(this.requestModel.userAgent) < 5370000;
  }

  /**
   *
   * @return {boolean}
   */
  isNewChromeOnAndroid() {
    if (this.isAndroidMobileDevice()) {
      let userAgent = this.requestModel.userAgent.toLowerCase();
      if (/chrome/.test(userAgent)) {
        userAgent = userAgent.replace('chrome / ', 'chrome/');
        const parts = userAgent.split('chrome/');

        const fullVersionString = parts[1].split(' ')[0];
        const versionString = fullVersionString.split('.')[0];
        const version = parseInt(versionString, 10);

        if (version >= 29) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   *
   * @return {boolean}
   */
  // isTouchScreen() {//wanted to ask you something about deviceType. Is there any chance the library you're using can tell if a device supports touch events
  //   if (this.isWindowUnavailable()) {
  //     return this.isMobileDevice() || this.isTabletDevice();
  //   }
  //   return !!('ontouchstart' in window || window.DocumentTouch && window.document instanceof DocumentTouch); // eslint-disable-line no-mixed-operators
  // }

  isLandscape() {
    return !this.isPortrait();
  }

  /**
   *
   * @return {boolean}
   */
  isPortrait() {
    if (this.isWindowUnavailable()) {
      return true;
    }
    if (window.screen && this.isTopWindow()) {
      const orientation = window.screen.orientation;
      if (orientation) {
        if (orientation.type) {
          return _.startsWith(orientation.type, 'portrait');
        }
        return orientation.angle === 0 || orientation.angle === 180;
      }
    }
    return this.isPortraitByScreenSize();
  }

  /**
   *
   * @return {boolean}
   */
  isPortraitByScreenSize() {
    if (this.isWindowUnavailable()) {
      return true;
    }
    return window.innerHeight > window.innerWidth;
  }

  /**
   *
   * @return {boolean}
   */
  isAndroidOldBrowser() {
    const isChrome = this.isNewChromeOnAndroid();
    const isOpera = /opr/i.test(this.requestModel.userAgent);

    return this.isAndroidMobileDevice() && !isChrome && !isOpera;
  }

  /**
   * @return {number}
   * @private
   */
  getDevicePixelRatio() {
    if (this.isWindowUnavailable()) {
      return 2;
    }
    if (this.isMSMobileDevice()) {
      return Math.round(window.screen.availWidth / (window.screen.width || window.document.documentElement.clientWidth));
    }
    return window.devicePixelRatio;
  }

  /**
   *
   * @return {number}
   */
  getInitZoom() {
    if (this.isWindowUnavailable()) {
      return 1;
    }
    return this.getScreenWidth() / window.document.body.offsetWidth;
  }

  /**
   *
   * @return {number}
   */
  getZoom() {
    if (this.isWindowUnavailable()) {
      return 1;
    }
    const screenWidth = this.getScreenWidth();
    return screenWidth / this.getWindowInnerWidth();
  }

  isZoomed() {
    if (this.isWindowUnavailable()) {
      return false;
    }
    return !fuzzyEqual(this.getZoom(), this.getInitZoom());
  }

  isZoomedIn() {
    if (this.isWindowUnavailable()) {
      return false;
    }
    return fuzzyGreaterThan(this.getZoom(), this.getInitZoom());
  }

  /**
   *
   * @return {number}
   */
  getMobileZoomByScreenProperties() {
    if (this.isWindowUnavailable()) {
      return 1;
    }

    let val = 1;
    const screenDimensions = this.getScreenDimensions();
    const w = Math.max(screenDimensions.width, screenDimensions.height);
    const h = Math.min(screenDimensions.width, screenDimensions.height);

    if (this.isMobileDevice() && !this.isPortraitByScreenSize()) {
      val = h / w;
    }

    return val;
  }

  /**
   *
   * @return {number}
   */
  getSiteZoomRatio() {
    if (this.isWindowUnavailable()) {
      return 1;
    }

    const zoomRatio = 320 / window.screen.width;
    return zoomRatio;
  }

  /**
   *
   * @return {number}
   */
  getInvertedZoomRatio() {
    if (this.isWindowUnavailable()) {
      return 1;
    }
    return 1 / this.getZoom();
  }

  getOrientationZoomFixRation() {
    return this.getInitZoom() / this.getZoom();
  }

  /**
   *
   * @returns {number}
   */
  getZoomRatioForNonOptimizedSites() {
    if (this.isWindowUnavailable()) {
      return 1;
    }
    return window.innerWidth / 320;
  }

  /**
   *
   * @return {?{width: number, height: number}}
   * @private
   */
  _getDeviceParamsByUserAgent() { // eslint-disable-line complexity
    const userAgent = _.get(this.requestModel, ['userAgent'], '');
    if (this.isWindowUnavailable() || !userAgent) {
      return null;
    }

    let width;
    let height;

    const screenDimensions = this.getScreenDimensions();
    if (/iemobile/i.test(userAgent)) {
      width = screenDimensions.width || window.document.documentElement.clientWidth;
      height = screenDimensions.height || window.document.documentElement.clientHeight;
    } else {
      const specificAndroidParams = paramsForSpecificAndroidDevices(userAgent);
      if (specificAndroidParams) {
        width = specificAndroidParams.width;
        height = specificAndroidParams.height;
      } else if (this.isPortrait()) {
        width = Math.min(screenDimensions.width, screenDimensions.height);
        height = Math.max(screenDimensions.width, screenDimensions.height);
      } else {
        width = Math.max(screenDimensions.width, screenDimensions.height);
        height = Math.min(screenDimensions.width, screenDimensions.height);
      }
    }

    return { width, height };
  }

  getScreenDimensions() {
    if (this.isWindowUnavailable()) {
      return { width: 0, availWidth: 0, height: 0, availHeight: 0 };
    }
    return {
      width: window.screen.width,
      availWidth: window.screen.availWidth,
      height: window.screen.height,
      availHeight: window.screen.availHeight
    };
  }

  isWindowUnavailable() {
    return typeof window === 'undefined';
  }

  isTopWindow() {
    let result;
    try {
      result = window.self === window.top;
    } catch (e) {
      result = false;
    }
    this.isTopWindow = function () {
      return result;
    };
    return result;
  }

  isSSSR() {
    return typeof window !== 'undefined' && !_.get(window, 'clientSideRender', true);
  }

  getWindowInnerWidth() {
    return window.innerWidth;
  }
}

export default MobileDeviceAnalyze;
