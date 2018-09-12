import * as _ from 'lodash';
import warmupUtilsLib from '@packages/coreUtils/core/warmupUtilsLib';
import MobileDeviceAnalyzer from './MobileDeviceAnalyzer';

const MASTER_PAGE_ID = 'masterPage';

function getPointersAndDal() {}

const siteDataUtils = {};
const constants = {};
const experiment = {};

class SiteData {

  constructor(siteModel) {
    if (!siteModel) {
      return;
    }

    this.getter = _.get.bind(_, this);

    this._currentRootInfos = {};
    this._currentPageIds = {
      primaryPage: null,
      popupPage: null,
    };

    _.assign(this, {
      currentUrl: {},
      screenSize: { width: null, height: null },
    }, siteModel);

    const userAgent = this.requestModel && this.requestModel.userAgent;
    this.browserDetection = warmupUtilsLib.browserDetection(userAgent);
    this.browser = this.browserDetection.browser;
    this.os = this.browserDetection.os;
    delete this.browserDetection;

    this.mobile = new MobileDeviceAnalyzer(_.assign({ userAgent }, _.get(siteModel.publicModel, 'deviceInfo')));
    this.isPortrait = this.mobile.isPortrait();

    this._forceMobileView = siteModel.forceMobileView;
    this._isMobileDevice = this.mobile.isMobileDevice();
    this._isTabletDevice = this.os && this.os.tablet && !this.browser.ie || this.mobile.isTabletDevice();

    this.customUrlMapping = {};

    this.pagesData = this.pagesData || {};

    this.MASTER_PAGE_ID = MASTER_PAGE_ID;

    this.renderFlags = this.renderFlags || {};
    _.defaults(this.renderFlags, {
      isZoomAllowed: true,
      siteTransformScale: 1,
      isSiteMembersDialogOpenAllowed: true,
      siteSale: 1,
      componentViewMode: 'preview',
    });
  }

  setStore(store) {
    this.store = store;
  }

  /**
  *
  * @returns {string} the underlying page, the one that sits in the master page
  */
  getPrimaryPageId() {
    return this.getter(['_currentPageIds', 'primaryPage']);
  }

  /**
   *
   * @returns {string} the page that is the actual physical url
   */
  getCurrentUrlPageId() {
    return this.getPrimaryPageId();
  }

  isMobileOptimizedOn() {
    return this.getter(['rendererModel', 'siteMetaData', 'adaptiveMobileOn']);
  }

  isPageProtectionEnabled() {
    return this.getter(['renderFlags', 'isPageProtectionEnabled']);
  }

  isMobileDevice() {
    return this.getter(['_isMobileDevice']);
  }

  browserFlags() {
    return this.getter(['_browserFlags']);
  }

  forceLandingPage(urlObj) {
    return urlObj.query && urlObj.query.forceLandingPage;
  }

  isTabletDevice() {
    return this.getter(['_isTabletDevice']);
  }

  isTouchDevice() {
    return this.isTabletDevice() || this.isMobileDevice();
  }
  /**
   * @param {boolean} isMobile
   */
  setMobileView(isMobile) {
    this._forceMobileView = isMobile;
  }

  getMasterPageData(innerPath) {
    return this.getPageData(this.MASTER_PAGE_ID, innerPath);
  }

  getPageData(pageId, innerPath, noClone) {
    const { pointers, dal } = getPointersAndDal(this);
    const pagePointer = pointers.page.getPagePointer(pageId);
    return pagePointer && dal.get(pointers.getInnerPointer(pagePointer, innerPath), undefined, noClone);
  }

  hasPage(pageId) {
    const { pointers, dal } = getPointersAndDal(this);
    const pagePointer = pointers.page.getPagePointer(pageId);
    return !!(pagePointer && dal.isExist(pagePointer));
  }

  getVisitedPages() {
    return this.getter(['visitedPages']);
  }

  getViewMode() {
    return '';
  }

  getPageDataMap(pageId, dataType) {
    const { pointers, dal } = getPointersAndDal(this);
    const type = _.invert(constants.PAGE_DATA_DATA_TYPES)[dataType];
    return dal.get(pointers.data.getPageDataMap(type, pageId));
  }

  getBodyClientWidth() {
    return window.document.body.clientWidth;
  }
  getBodyClientHeight() {
    return window.document.body.clientHeight;
  }
  getScreenWidth() {
    return this.getScreenSize().width;
  }
  getScreenHeight() {
    return this.getScreenSize().height;
  }
  getScreenSize() {
    return this.getter(['screenSize']);
  }

  getSiteWidth() {
    if (this.isMobileView()) {
      return 320;
    } else if (this.isFacebookSite()) {
      return 520;
    }

    const siteStructure = this.getSiteStructure();
    return _.get(siteStructure, 'renderModifiers.siteWidth', 980);
  }

  getPageMinHeight() {
    return this.isMobileView() ? 200 : 500;
  }

  getMainPageId() {
    if (this.publicModel) {
      return this.publicModel.pageList.mainPageId;
    }
    const siteStructureData = this.getDataByQuery(MASTER_PAGE_ID, MASTER_PAGE_ID);
    return _.get(siteStructureData, 'mainPage.id') || _.get(siteStructureData, 'mainPageId') || 'mainPage';
  }

  getAllPageIds() {
    const publicModel = this.getter(['publicModel'], undefined, true);
    if (publicModel) {
      return _.map(publicModel.pageList.pages, 'pageId');
    }

    return siteDataUtils.getAllPageIds(this);
  }

  getPageTitle(pageId) {
    if (this.publicModel) {
      const pages = _.get(this.publicModel, ['pageList', 'pages']);
      return _.get(_.find(pages, { pageId }), 'title');
    }
    return _.get(this.getDataByQuery(pageId), 'title');
  }

  getPageJsonld(pageId) {
    return this.pageIdToJsonLd[pageId] || {};
  }

  getBrowser() {
    return this.browser;
  }

  getOs() {
    return this.os;
  }


  getPageTopMargin() {
    return this.getWixTopAdHeight();
  }

  getPageMargins() {
    return {
      bottom: this.getPageBottomMargin(),
      top: this.getPageTopMargin()
    };
  }

  getWixTopAdHeight() { // eslint-disable-line complexity
    const isWixAdsAllowed = siteDataUtils.isWixAdsAllowed(this);

    if (!isWixAdsAllowed || !this.shouldShowWixAds()) {
      return 0;
    }

    if (this.isMobileView()) {
      const isLandscapeMobileDevice = this.isMobileDevice() && this.mobile.isLandscape();
      const isHeaderFixedPosition = !!siteDataUtils.isHeaderFixedPosition(this);
      return isHeaderFixedPosition && !isLandscapeMobileDevice ? 38 : 0;
    }

    return experiment.isOpen('displayWixAdsNewVersion', this) ? 50 : 0;
  }
}

export default SiteData;


/**
 * @typedef {Object} site.rootNavigationInfo
 * @property {string} pageId
 * @property {string} title
 * @property {?string} pageAdditionalData
 * @property {?string} pageItemId the id of the data item to be used for the page item usually zoom
 * @property {?string} pageItemAdditionalData additional data for the page item comp (like gallery id for image zoom)
 * @property {?string} anchorData
 */

/**
 * @typedef site.requestModel
 * @property {string} userAgent
 * @property {string} cookie
 */

/**
 * @typedef site.serviceTopology
 * @property {string} baseDomain
 * @property {string} basePublicUrl
 * @property {string} biServerUrl
 * @property {string} billingServerUrl: "http://premium.wix.com/"
 * @property {string} blobUrl
 * @property {string} cacheKillerVersion
 * @property {boolean} developerMode
 * @property {string} ecommerceCheckoutUrl
 * @property {string} emailServer
 * @property {string} htmlEditorUrl
 * @property {string} logServerUrl
 * @property {string} mediaRootUrl
 * @property {string} monitoringServerUrl
 * @property {string} postLoginUrl
 * @property {string} postSignUpUrl
 * @property {string} premiumServerUrl
 * @property {string} publicStaticBaseUri
 * @property {string} publicStaticsUrl
 * @property {Object.<string, string>} scriptsLocationMap a map to the source code
 * @property {boolean} secured
 * @property {string} serverName
 * @property {string} siteMembersUrl
 * @property {string} staticAudioUrl
 * @property {string} staticDocsUrl
 * @property {string} staticHTMLComponentUrl
 * @property {string} staticMediaUrl
 * @property {string} staticServerUrl
 * @property {string} userFilesUrl
 * @property {string} userServerUrl
 * @property {string} usersClientApiUrl
 * @property {string} usersScriptsRoot
 */

/**
 * @typedef site.publicModel
 * @property {string} domain
 * @property {string} externalBaseUrl
 * @property {Object} pageList the main page id and the list of the page urls (add docs)
 * @property {number} timeSincePublish
 */

/**
 * @typedef site.siteMetaData
 * @property {{
 *      address: string
 *      companyName: string
 *      email: string
 *      fax: string
 *      phone: string
 * }} contactInfo
 * @property {boolean} adaptiveMobileOn
 * @property {{
 *      enabled: boolean
 *      [uri]: string
 * }} preloader
 * @property {{
 *      colorScheme: string,
 *      configuration: Object.<string, boolean>,
 *      socialLinks: Array
 * }} quickActions
 */

/**
 * @typedef {Object} site.rendererModel
 * @property {string} metaSiteId
 * @property {site.siteInfo} siteInfo
 * @property {Object.<string, *>} clientSpecMap please write docs for this type
 * @property {boolean} wixCodeModel
 * @property {string[]} premiumFeatures  a list of features like "HasDomain" or "AdsFree"
 * @property {string} geo
 * @property {string} languageCode
 * @property {boolean} previewMode
 * @property {string} userId
 * @property {site.siteMetaData} siteMetaData
 */

/**
 * @typedef {Object} site.siteInfo
 * @property {string} applicationType
 * @property {string} documentType
 * @property {string} siteId
 * @property {string} siteTitleSEO
 */

/**
 * @typedef {Object} data.compStructure.layout
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 * @property {?string} position    we don't get this from server, used only for dynamically created comps
 * @property {?boolean} fixedPosition  this is what we get from server.. stupid :)
 * @property {number} rotationInDegrees default 0
 * @property {number} scale default 1
 * @property {?object[]} anchors
 */
/**
 * @typedef {Object} data.compStructure
 * @property {string} styleId
 * @property {string} skin
 * @property {?string} dataQuery
 * @property {?string} propertyQuery
 * @property {string} type
 * @property {string} id
 * @property {string} componentType
 * @property {?data.compStructure.layout} layout
 * @property {?data.compStructure[]} components   it can be either components or children
 * @property {?data.compStructure[]} mobileComponents
 * @property {?data.compStructure[]} children
 */


/**
 * @typedef {Object} data.compThemeItem
 * @property {string} skin
 * @property {?string} compId  present only on custom style
 * @property {?string} componentClassName the comp type only on custom style
 * @property {string} id
 * @property {string} styleType can be system|custom
 * @property {Object} metaData
 * @property {{
 *      properties: Object.<string, string>
 * }} style the collection of the skin param values.
 */

/**
 * @typedef {Object.<string, (string|number|boolean)>} data.compDataItem
 * @property {string} id
 * @property {string} type
 * @property {Object} metaData
 */

/**
 * @typedef {Object.<string, (string|number|boolean)>} data.compPropertiesItem
 * @property {string} type
 * @property {{
 *      schemaVersion: string
 * }} metaData
 */

/**
 *  @typedef {Object<string, string>} data.generalTheme
 *  @property {string[]} border for example 0.15em solid [color_1]
 *  @property {string[]} color  for example #FFFFFF or 153,153,153,1
 *  @property {string[]} font  for example normal normal bold 72px/1.1em Play {color_14}
 */

/**
 * @typedef {Object.<string, data.compThemeItem>} data.themeData
 * @property {data.generalTheme} THEME_DATA get it from  {@link core.SiteData#getGeneralTheme}
 */

/**
 * @typedef {Object} data.pageData
 * @property {{
 *       document_data: Object.<string, comp.compDataItem>,
 *       theme_data: data.themeData,
 *       component_properties: Object.<string, comp.compPropertiesItem>
 * }} data
 * @property {data.compStructure} structure
 */
