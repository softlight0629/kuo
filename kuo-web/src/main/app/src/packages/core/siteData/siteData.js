import * as _ from 'lodash';
import warmupUtilsLib from '@packages/coreUtils/core/warmupUtilsLib';
import MobileDeviceAnalyzer from './MobileDeviceAnalyzer';
import DALFactory from '@packages/documentServices/dataAccessLayer/dal/DALFactory';

const MASTER_PAGE_ID = 'masterPage';

// 构造 Site 数据对象
class SiteData {

  constructor(siteModel) {
    if (!siteModel) {
      return;
    }

    this.getter = _.get.bind(this);

    this.currentPageIds = {
      primaryPage: null,
      popupPage: null,
    };

    _.assign(this, siteModel);

    const userAgent = this.requestModel && this.requestModel.userAgent;
    this.browser = {};
    this.os = {};
    this.mobile = {};

    this._forceMobileView = siteModel.forceMobileView;
    this._isMobileDevice = false;
    this._isTabletDevice = false;


    this.siteId = this.siteId || this.rendererModel && this.rendererModel.siteInfo.siteId;

    this.pagesData = this.pagesData || {};

    this.deletedPagesMap = {};

    this.imageLoader = {};

    this.renderFlags = this.renderFlags || {};

    this.MASTER_PAGE_ID = MASTER_PAGE_ID;

    _.defaults(this.renderFlags, {
      isPlayingAllowed: true, //default state
      isZoomAllowed: true, //default state
      isSocialInteractionAllowed: true, //default state
      siteTransformScale: 1,
      isExternalNavigationAllowed: true, //default state
      isBackToTopButtonAllowed: true, //default true
      isWixAdsAllowed: this.isViewerMode(), //default true
      isSlideShowGalleryClickAllowed: true, //default true
      isTinyMenuOpenAllowed: true, //default true
      renderFixedPositionContainers: true,
      // Don't lock a password-protected page in editor on start.
      // Editor takes control over the flag later on (enables it in preview mode).
      isPageProtectionEnabled: this.isViewerMode(),
      isSiteMembersDialogsOpenAllowed: true,
      allowSiteOverflow: true,
      shouldResetGalleryToOriginalState: false,
      shouldResetComponent: true,
      extraSiteHeight: 0,
      siteScale: 1,
      blockingLayer: null,
      blockingPopupLayer: null,
      shouldUpdateJsonFromMeasureMap: false,
      componentViewMode: 'preview',
      allowShowingFixedComponents: true,
      renderFixedPositionBackgrounds: true,
      showHiddenComponents: false,
      ignoreComponentsHiddenProperty: [],
      componentPreviewStates: {},
      // renderMobileActionMenu: !warmupUtilsLib.urlUtils.isQueryParamOn(this.currentUrl, 'hideMobileActionBar'),
      initWixCode: this.isViewerMode(),
      enforceShouldKeepChildrenInPlace: true,
      preserveCompLayoutOnReparent: false
    });

    this.mediaStore = {};
    this.mediaQualityStore = {};

    this.visitedPages = [];

    this.dataTypes = {
      PROPERTIES: 'component_properties',
      DATA: 'document_data',
      THEME: 'theme_data',
      DESIGN: 'design_data',
      BEHAVIORS: 'behaviors_data',
      CONNECTIONS: 'connections_data',
      MOBILE_HINTS: 'mobile_hints',
    };
  }

  getPrimaryPageId() {
    return this.getter(['currentPageIds', 'primaryPage']);
  }

  getCurrentPageId() {
    return this.getPrimaryPageId();
  }

  getAllRenderedRoots() {
    return [this.MASTER_PAGE_ID, this.getPrimaryPageId()];
  }

  isMobileView() {
    const forceMobileView = this.getter(['_forceMobileView']);

    if (_.isBoolean(forceMobileView)) {
      return forceMobileView;
    }

    return false;
  }

  isMobileDevice() {
    return this.getter(['_isMobileDevice']);
  }

  isTabletDevice() {
    return this.getter(['_isTabletDevice']);
  }

  isTouchDevice() {
    return this.isMobileDevice() || this.isTabletDevice();
  }

  isViewerMode() {
    return false;
  }

  setMobileView(isMobile) {
    this._forceMobileView = isMobile;
  }

  getColor() { }

  getColorMap() { }

  getMasterPageData() {
    return this.getPageData(this.MASTER_PAGE_ID);
  }

  getPageData(pageId) {
    // const pointers = DalFactory.
  }

  hasPage(pageId) {
  }

  getVisitedPages() {
    return this.getter(['visitedPages']);
  }

  getPageDataMap() { }

  getServiceToplogyProperty(prop) {
    return this.getter(['serviceTopology', prop]);
  }

  getStaticMediaUrl() {
    return this.getServiceToplogyProperty('staticMediaUrl');
  }

  getStaticVideoUrl() {
    return this.getServiceToplogyProperty('staticVideoUrl');
  }

  getMetaSiteId() {
    return this.getter(['rendererModel', 'metaSiteId']);
  }

  getRendererModel() {
    return this.getter(['rendererModel']);
  }

  getPublicModel() {
    return this.getter(['publicModel']);
  }

  getUserId() {
    return this.getter(['siteHeader', 'userId']);
  }

  getSiteMetaData() {
    return this.getter(['rendererModel', 'siteMetaData']);
  }

  getAuthToken() {
    return this.getter(['rendererModel', 'authToken']);
  }

  getSiteStructure() {
    return this.getDataByQuery(this.getStructureCompId());
  }

  getCookie() {
    return this.getter(['rendererModel', 'cookie']);
  }

  isPageLandingPage(pageId) { }

  getStructureCompId() {
    return this.MASTER_PAGE_ID;
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

  // called from layout.js during measure
  updateScreenSize(screesSize) { }

  getScrollBarWidth() {
    const windowInnerWidth = this.isMobileView() ? 320 : window.innerWidth;
    return windowInnerWidth - this.getScreenWidth();
  }

  getSiteX() {
    if (this.isMobileView() || this.isMobileDevice()) {
      return 0;
    }

    return Math.min(parseInt(Math.floor((this.getSiteWidth() - this.getScreenWidth()) / 2), 10), 0);
  }
  getSiteWidth() {
    if (this.isMobileView()) {
      return 320;
    }

    const siteStructure = this.getSiteStructure();
    return _.get(siteStructure, 'renderModifiers.siteWidth', 980);
  }

  getDataByQuery(query, rootId, dataType) {
    rootId = rootId || MASTER_PAGE_ID;
    dataType = dataType || this.dataTypes.DATA;
  }

  getPageMinHeight() {
    return this.isMobileView() ? 200 : 500;
  }

  isHomePage(pageId) {
    return pageId && pageId === this.getMainPageId();
  }

  getPagesDataItems() {
  }

  getFavicon() {
    return this.publicModel && this.publicModel.favicon;
  }

  getDocumentLocation() {
    return this.currentUrl;
  }

  getMainPageId() {}

  getAllPageIds() {}

  getPageTitle(pageId) {}

  getBrowser() {
    return this.browser;
  }

  getOs() {
    return this.os;
  }

  isPreviewMode() {
    return this.getter(['rendererModel', 'previewMode']);
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
