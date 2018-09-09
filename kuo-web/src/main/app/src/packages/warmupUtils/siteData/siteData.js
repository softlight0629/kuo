/*eslint max-statements:0*/
define([
  'lodash',
  'warmupUtilsLib',
  'warmupUtils/core/constants',
  'warmupUtils/core/routerUtils',
  'warmupUtils/dal/DALFactory',
  'warmupUtils/dal/siteDataUtils',
  'warmupUtils/siteData/MobileDeviceAnalyzer',
  'warmupUtils/siteData/dataResolver',
  'warmupUtils/siteData/pagesUrlUtils',
  'warmupUtils/siteData/browserFlags',
  'warmupUtils/siteData/ViewPortImageLoader',
  'warmupUtils/siteData/SiteDataRmi',
  'warmupUtils/siteData/SiteDataRgi',
  'warmupUtils/siteData/BiData',
  'warmupUtils/wixUrlParser/wixUrlParser',
  'experiment'
], function (_,
           warmupUtilsLib,
           constants,
           routerUtils,
           DALFactory,
           siteDataUtils,
           MobileDeviceAnalyzer,
           dataResolver,
           pagesUrlUtils,
           browserFlags,
           ViewPortImageLoader,
           SiteDataRmi,
           SiteDataRgi,
           BiData,
           wixUrlParser,
           experiment) {
  'use strict';

  const MASTER_PAGE_ID = 'masterPage';

  /**
   * this is the API to the data, structure and configurations of the site
   *  @typedef {SiteData} core.SiteData
   */

  /**
   * this is the API to the data, structure and configurations of the site
   * @constructor
   * @property {site.rendererModel} rendererModel
   * @property {site.publicModel} publicModel
   * @property {site.serviceTopology} serviceTopology
   * @property {string} viewMode
   * @property {Object.<string, string>} configUrls same as service topology.....?
   * @property {string} siteId
   * @property {object} currentUrl
   * @property {site.requestModel} requestModel
   * @property {utils.Store} store
   * @property {string} googleAnalytics
   * @property {object} browser
   * @property {object} os
   * @property {string} santaBase
   * @property {string} santaBaseFallbackUrl
   *
   * @param siteModel
   * @param {function} getter
   */
  function SiteData(siteModel, getter) { // eslint-disable-line complexity
      if (!siteModel) {
          return;
      }

      pagesUrlUtils.ensureUrlFormatModel(siteModel);

      this.getter = getter || _.get.bind(_, this);

      /** @private */
      this._currentRootInfos = {};
      /** @private */
      this._currentPageIds = {
          primaryPage: null,
          popupPage: null
      };

      _.assign(this, {
          currentUrl: {},
          screenSize: {width: null, height: null}
      }, siteModel);

      const showMobileViewQueryParam = _(this.currentUrl.query).keys().find(key => key.toLowerCase() === 'showmobileview');
      if (showMobileViewQueryParam) {
          this.showmobileview = this.currentUrl.query[showMobileViewQueryParam];
      }

      const userAgent = this.requestModel && this.requestModel.userAgent;
      this.browserDetection = this.browserDetection || warmupUtilsLib.browserDetection(userAgent);
      this.browser = this.browserDetection.browser;
      this.os = this.browserDetection.os;
      delete this.browserDetection;
      this.mobile = new MobileDeviceAnalyzer(_.assign({userAgent}, _.get(siteModel.publicModel, 'deviceInfo')));
      const tpaMobileViewportFix = experiment.isOpen('sv_tpaMobileViewportFix', {rendererModel: this.rendererModel});
      this.isPortrait = this.mobile.isPortrait();

      this._forceMobileView = siteModel.forceMobileView;
      this._isMobileDevice = this.mobile.isMobileDevice();
      this._browserFlags = browserFlags.create(_.assign({tpaMobileViewportFix}, _.pick(this, ['os', 'browser'])));
      this._isTabletDevice = this.os && this.os.tablet && !this.browser.ie || this.mobile.isTabletDevice(); // eslint-disable-line no-mixed-operators
      this.biData = new BiData(this.wixBiSession, this.getCurrentUrlPageId.bind(this));

      this.customUrlMapping = {};

      this.siteId = this.siteId || this.rendererModel && this.rendererModel.siteInfo.siteId; // eslint-disable-line no-mixed-operators

      this.ssr = this.ssr || {};
      this._isInSSR = typeof window === 'undefined';
      this._isClientAfterSSR = !this._isInSSR && !window.clientSideRender;
      this._isFirstRenderAfterSSR = this._isClientAfterSSR;
      this._isAfterSSSRSuccess = !this._isInSSR && !!window.clientSideRender;
      // This hack is here in order to fix bug in ReactDOM that tries to call focus on SVGElement and it throws an unhandled exception
      if (!this._isInSSR && window.SVGElement && !window.SVGElement.prototype.focus) {
          window.SVGElement.prototype.focus = _.noop;
      }
      this.pageStubComponents = {};
      this.pagesData = this.pagesData || {};
      this.resolvedDataMaps = {};
      this.clonedDataItemsIdsMap = this.clonedDataItemsIdsMap || {};
      this.anchorsMap = {};
      this.editorData = {generated: {}, generatedVersion: {}};
      this.textRuntimeLayout = {overallBorders: {}};
      this.mapFromPageUriSeoToPageId = pagesUrlUtils.getMapFromPageUriSeoToPageId(siteModel);

      this.dockedRuntimeLayout = {};
      this.deletedPagesMap = {};
      this.orphanPermanentDataNodes = [];

      this.imageLoader = new ViewPortImageLoader(this.getScreenSize.bind(this));

      this.wixBiSession = siteModel.wixBiSession || {};
      this.svgShapes = siteModel.svgShapes || {};
      this.layoutAdjustment = {};
      this.activeModes = {};
      this.prefetchPages = [];
      this.dynamicPages = this.dynamicPages || {};
      this.dynamicPages.routersRendererIndex = 0;
      this.platformWidgetsState = {};
      this.reLayoutedCompsMap = {};
      this.saveInvalidationCount = 0;
      this.customClickOccurred = false;
      this.enforceAndPatchRequested = false;

      this.renderFlags = this.renderFlags || {};
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
          renderMobileActionMenu: !warmupUtilsLib.urlUtils.isQueryParamOn(this.currentUrl, 'hideMobileActionBar'),
          initWixCode: this.isViewerMode(),
          enforceShouldKeepChildrenInPlace: true,
          preserveCompLayoutOnReparent: false
      });

      this.failedRequests = [];

      this._svQueue = [];
      this.compStates = {};
      this.imageCssCache = {};
      this.wixappsRenderCounters = {};
      this.mediaStore = {};
      this.mediaQualityStore = {};

      this.pageIdToJsonLd = {};
      this.pageLinkTag = {};

      this.visitedPages = [];

      this.onImageUnmount = this.onImageUnmount.bind(this); // Should be bound because it's passed as SantaType
      this.getMediaFullStaticUrl = this.getMediaFullStaticUrl.bind(this); // Should be bound because it's passed as SantaType

      this.siteAspectsData = {};

      this.compBehavioursMap = {};
      this.postUpdateOperationsRenders = {};

      this.noEnforceAnchors = false;

      this.popoversLayer = null;

      this.globalComputedMap = {};

      this.mediaRichTextInnerComponents = {};

      this.displayedOnlyComponents = {
          componentTemplateId: {}
      };

      this.layoutFunctions = new WeakMap();

      if (experiment.isOpen('sv_multilingual', this)) {
          this.multilingual = {currentLanguageCode: null};
      }

      _.assign(this, _.omit(SiteDataRmi, 'bind'));
      _.assign(this, _.omit(SiteDataRgi, 'bind'));

      _.bindAll(this, _.functionsIn(this));
  }

  function isAdminPage(siteData) {
      return _.get(siteData.currentUrl, 'query.inBizMgr') === 'true';
  }

  function getPointersAndDal(siteData) {
      return {
          dal: DALFactory.getInstance(siteData),
          pointers: DALFactory.getPointersInstance(siteData)
      };
  }

  SiteData.prototype = {
      setStore(store) {
          this.store = store;
      },
      /**
       * @enum {string}
       */
      dataTypes: {
          PROPERTIES: 'component_properties',
          DATA: 'document_data',
          THEME: 'theme_data',
          DESIGN: 'design_data',
          BEHAVIORS: 'behaviors_data',
          CONNECTIONS: 'connections_data',
          MOBILE_HINTS: 'mobile_hints'
      },

      WIX_ADS_ID: constants.COMP_IDS.WIX_ADS,
      MASTER_PAGE_ID,

      getSessionInfoProp(key) {
          return this.getter(['publicModel', 'sessionInfo', key]);
      },

      setSessionInfoProp(key, value) {
          if (this.publicModel) {
              _.set(this.publicModel, ['sessionInfo', key], value);
          }
      },

      getCodeEmbeds() {
          return this.publicModel ? this.publicModel.htmlEmbeds : [];
      },

      /**
       *
       * @param {site.rootNavigationInfo|{{pageId: string}}} info
       * @param {boolean?} isOverridingAllRoots - you can pass false if you don't want to unmount other roots (close popup)
       */
      setRootNavigationInfo(info, isOverridingAllRoots) {
          siteDataUtils.setRootNavigationInfo(this, info, isOverridingAllRoots);
      },

      getNonPageItemZoomData() {
          return this.getter(['siteAspectsData', 'nonPageItemZoom', 'globalData', 'image']);
      },

      getSiteMemberDetails() {
          return this.getter(['siteAspectsData', 'siteMembers', 'globalData', 'memberDetails']);
      },
      getPrefetchPages() {
          return this.getter(['prefetchPages']);
      },

      getAppInstance() {
          return this.getter(['siteAspectsData', 'dynamicClientSpecMap', 'globalData', 'appInstanceMap']);
      },

      getExistingRootNavigationInfo(rootId) {
          const rootNavigationInfo = this.getter(['_currentRootInfos', rootId]);
          if (!rootNavigationInfo) {
              return this.getter(['_currentRootInfos', this.MASTER_PAGE_ID]);
          }
          return rootNavigationInfo;
      },

      getMasterPageLayoutSettings() {
          return _.get(this.getDataByQuery(MASTER_PAGE_ID, MASTER_PAGE_ID), ['layoutSettings'], {});
      },

      /**
       *
       * @returns {string} the underlying page, the one that sits in the master page
       */
      getPrimaryPageId() {
          return this.getter(['_currentPageIds', 'primaryPage']);
      },

      /**
       *
       * @returns {string} the page that is the actual physical url
       */
      getCurrentUrlPageId() {
          return this.getPrimaryPageId();
      },

      /**
       *
       * @returns {string} the top most rendered page popup/page
       */
      getFocusedRootId() {
          return this.getCurrentPopupId() || this.getPrimaryPageId();
      },

      getSliderGalleryMeasures(compId) {
          if (!this.measureMap || !compId) {
              return {};
          }

          return {
              imagesWidth: this.measureMap.width[`${compId}images`],
              itemsContainerWidth: this.measureMap.width[`${compId}itemsContainer`]
          };
      },

      getAllPossiblyRenderedRoots() {
          const roots = [this.MASTER_PAGE_ID, this.getPrimaryPageId()];

          if (this.isPopupOpened()) {
              roots.push(this.getCurrentPopupId());
          }
          return roots;
      },

      getRenderedRootsUnderMasterPage() {
          return _.reject(this.getAllPossiblyRenderedRoots(), this.isPopupPage.bind(this));
      },
      /**
       *  returns true for mobile structure rendering (can be rendered on desktop as well!)
       * @returns {undefined|boolean} undefined if there is no page data yet, so we can't tell
       */
      isMobileView() {
          const forceMobileView = this.getter(['_forceMobileView']);

          if (_.isBoolean(forceMobileView)) {
              return forceMobileView;
          }

          if (siteDataUtils.isMobileStructureExists(this)) {
              const showmobileview = this.getter(['showmobileview']);
              if (showmobileview) {
                  return showmobileview === 'true';
              }
              return this.isMobileDevice() && this.isMobileOptimizedOn();
          }

          return false;
      },

      isMobileOptimizedOn() {
          return this.getter(['rendererModel', 'siteMetaData', 'adaptiveMobileOn']);
      },

      isPageProtectionEnabled() {
          return this.getter(['renderFlags', 'isPageProtectionEnabled']);
      },

      isMobileDevice() {
          return this.getter(['_isMobileDevice']);
      },

      browserFlags() {
          return this.getter(['_browserFlags']);
      },

      forceLandingPage(urlObj) {
          return urlObj.query && urlObj.query.forceLandingPage;
      },

      isTabletDevice() {
          return this.getter(['_isTabletDevice']);
      },

      isTouchDevice() {
          return this.isTabletDevice() || this.isMobileDevice();
      },

      /**
       * @param {boolean} isMobile
       */
      setMobileView(isMobile) {
          this._forceMobileView = isMobile;
      },

      getAllStylesFromPossiblyRenderedRoots() {
          const {pointers, dal} = getPointersAndDal(this);
          return this.getAllPossiblyRenderedRoots()
              .reduce((acc, page) => _.assign(acc, _.defaults({}, acc, dal.get(pointers.general.getAllStylesInPage(page)))), {});
      },

      /**
       * @returns {data.themeData} Returns all styles that are saved in the dal under the received pageId
       */
      getAllStylesFromPage(pageId) {
          const {pointers, dal} = getPointersAndDal(this);
          return dal.get(pointers.general.getAllStylesInPage(pageId));
      },

      /**
       * @returns {data.generalTheme} a map of theme styles (fonts and colors)
       */
      getGeneralTheme() {
          const {pointers, dal} = getPointersAndDal(this);
          return dal.get(pointers.data.getThemeItem('THEME_DATA', this.MASTER_PAGE_ID));
      },

      getFontsMap() {
          const {pointers, dal} = getPointersAndDal(this);
          const fontsMapPointer = pointers.getInnerPointer(pointers.data.getThemeItem('THEME_DATA', this.MASTER_PAGE_ID), 'font');
          return dal.get(fontsMapPointer);
      },

      getFont(fontClassName) {
          const fontNumber = fontClassName.split('_')[1];
          const {pointers, dal} = getPointersAndDal(this);
          const fontPointer = pointers.getInnerPointer(pointers.data.getThemeItem('THEME_DATA', this.MASTER_PAGE_ID), ['font', fontNumber]);
          return dal.get(fontPointer);
      },

      /** @deprecated
       * Please use utils.colorParser.getColorValue*/
      getColor(colorClassName) {
          const colorNumber = colorClassName.split('_')[1];
          const {pointers, dal} = getPointersAndDal(this);
          const colorPointer = pointers.getInnerPointer(pointers.data.getThemeItem('THEME_DATA', this.MASTER_PAGE_ID), ['color', colorNumber]);
          return dal.get(colorPointer) || colorClassName;
      },

      getColorsMap() {
          const {pointers, dal} = getPointersAndDal(this);
          const colorsMapPointer = pointers.getInnerPointer(pointers.data.getThemeItem('THEME_DATA', this.MASTER_PAGE_ID), 'color');
          return dal.get(colorsMapPointer);
      },

      /**
       *
       * @return {data.pageData}
       */
      getMasterPageData(innerPath) {
          return this.getPageData(this.MASTER_PAGE_ID, innerPath);
      },

      getPageData(pageId, innerPath, noClone) {
          const {pointers, dal} = getPointersAndDal(this);
          const pagePointer = pointers.page.getPagePointer(pageId);
          return pagePointer && dal.get(pointers.getInnerPointer(pagePointer, innerPath), undefined, noClone);
      },

      hasPage(pageId) {
          const {pointers, dal} = getPointersAndDal(this);
          const pagePointer = pointers.page.getPagePointer(pageId);
          return !!(pagePointer && dal.isExist(pagePointer));
      },

      getVisitedPages() {
          return this.getter(['visitedPages']);
      },

      getPageDataMap(pageId, dataType) {
          const {pointers, dal} = getPointersAndDal(this);
          const type = _.invert(constants.PAGE_DATA_DATA_TYPES)[dataType];
          return dal.get(pointers.data.getPageDataMap(type, pageId));
      },

      /**
       * retrieve a property from the service topology
       * @param prop
       */
      getServiceTopologyProperty(prop) {
          return this.getter(['serviceTopology', prop]);
      },

      /**
       *
       * @return {string}
       */
      getStaticMediaUrl() {
          return this.getServiceTopologyProperty('staticMediaUrl');
      },

      /**
       *
       * @return {string}
       */
      getScriptsDomainUrl() {
          return this.getServiceTopologyProperty('scriptsDomainUrl');
      },

      /**
       *
       * @return {string}
       */
      getStaticHTMLComponentUrl() {
          return this.getServiceTopologyProperty('staticHTMLComponentUrl');
      },

      /**
       *
       * @return {string}
       */
      getStaticVideoUrl() {
          return this.getServiceTopologyProperty('staticVideoUrl');
      },

      /**
       *
       * @return {string}
       */
      getAdaptiveVideoDomain() {
          return this.getServiceTopologyProperty('adaptiveVideoDomain');
      },

      /**
       *
       * @return {string}
       */
      getStaticVideoHeadRequestUrl() {
          return this.getServiceTopologyProperty('staticVideoHeadRequestUrl');
      },

      getMetaSiteId() {
          return this.getter(['rendererModel', 'metaSiteId']);
      },
      getRunningExperiments() {
          return this.getter(['rendererModel', 'runningExperiments']);
      },


      getMediaFullStaticUrl(imgRelativeUrl) {
          const mediaRootUrl = this.getServiceTopologyProperty('mediaRootUrl');
          const mediaStaticUrl = this.getStaticMediaUrl();
          return warmupUtilsLib.urlUtils.getMediaUrlByContext(imgRelativeUrl, mediaStaticUrl, mediaRootUrl);
      },

      /**
       *
       * @returns {*|string}
       */
      getStaticThemeUrlWeb() {
          const scriptsLoc = this.getServiceTopologyProperty('scriptsLocationMap');
          return scriptsLoc && scriptsLoc.skins && `${scriptsLoc.skins}/images/wysiwyg/core/themes`;
      },

      /**
       * is the domain premium
       * @returns {boolean}
       */
      isPremiumDomain() {
          const premiumFeatures = this.getter(['rendererModel', 'premiumFeatures'], [], true);
          return _.includes(premiumFeatures, 'HasDomain');
      },

      /**
       * is the user a premium user
       * @returns {boolean}
       */
      isPremiumUser() {
          const premiumFeatures = this.getter(['rendererModel', 'premiumFeatures'], [], true);
          return !_.isEmpty(premiumFeatures);
      },

      /**
       * is the user a premium user
       * @returns {boolean}
       */
      isAdFreePremiumUser() {
          const premiumFeatures = this.getter(['rendererModel', 'premiumFeatures'], [], true);
          return _.includes(premiumFeatures, 'AdsFree');
      },

      /**
       * please add type for this
       * @return {Object.<string, *>|*}
       */
      getClientSpecMap() {
          return this.getter(['rendererModel', 'clientSpecMap']);
      },

      getRendererModel() {
          return this.getter(['rendererModel']);
      },

      getPublicModel() {
          return this.getter(['publicModel']);
      },

      /**
       * gets a property from documentServicesModel. Only returns values when you have documentServices.
       * @param propertyName
       * @returns {*}
       */
      getDocumentServicesModelProperty(propertyName) {
          return this.getter(['documentServicesModel', propertyName]);
      },

      /**
       * please add type for this
       * @param {string} applicationId
       * @return {*}
       */
      getClientSpecMapEntry(applicationId) {
          return this.getter(['rendererModel', 'clientSpecMap', applicationId]);
      },

      getClientSpecMapEntriesByType(type) {
          return _.filter(this.getClientSpecMap(), {type});
      },

      getClientSpecMapEntryByAppDefinitionId(appDefId) {
          return _.find(this.getClientSpecMap(), {appDefinitionId: appDefId});
      },

      getSMToken() {
          const siteMembersEntries = this.getClientSpecMapEntriesByType('sitemembers');
          const firstEntry = _.head(siteMembersEntries);
          return _.get(firstEntry, 'smtoken');
      },

      getSvSession() {
          return this.getSessionInfoProp('svSession');
      },

      getCTToken() {
          return this.getSessionInfoProp('ctToken');
      },

      setCTToken(ctToken) {
          this.setSessionInfoProp('ctToken', ctToken);
      },

      subSvSession(cb, force) {
          const svSession = this.getSvSession();
          if (svSession || force) {
              cb(svSession);
          } else {
              this._svQueue.push(cb);
          }
      },
      pubSvSession(svSession) {
          this.setSessionInfoProp('svSession', svSession);
          this._svQueue.forEach(function (cb) {
              cb(svSession);
          });
          this._svQueue.length = 0;
      },

      getUserId() {
          return this.getter(['siteHeader', 'userId']);
      },

      /**
       * @return {site.siteMetaData}
       */
      getSiteMetaData() {
          return this.getter(['rendererModel', 'siteMetaData']);
      },

      getSiteMediaToken() {
          return `APP ${this.getter(['rendererModel', 'siteMediaToken'])}`;
      },

      getMediaAuthToken() {
          return `APP ${this.getter(['rendererModel', 'mediaAuthToken'])}`;
      },

      getSiteStructure() {
          return this.getDataByQuery(this.getStructureCompId());
      },

      getLanguageCode() {
          return this.getter(['rendererModel', 'languageCode']);
      },

      getUserLanguageFromModel() {
          return this.getter(['requestModel', 'language']);
      },

      getCookie() {
          return this.getter(['requestModel', 'cookie']);
      },

      isPageLandingPage(pageId) {
          const pageData = this.getDataByQuery(pageId) || {};
          if (this.forceLandingPage(this.currentUrl)) {
              return true;
          }
          return pageData.isLandingPage || this.isMobileView() && pageData.isMobileLandingPage; // eslint-disable-line no-mixed-operators
      },

      getStructureCompId() {
          return MASTER_PAGE_ID;
      },
      getBodyClientWidth() {
          return window.document.body.clientWidth;
      },
      getBodyClientHeight() {
          return window.document.body.clientHeight;
      },
      getScreenWidth() {
          return this.getScreenSize().width;
      },
      getScreenHeight() {
          return this.getScreenSize().height;
      },
      getScreenSize() {
          return this.getter(['screenSize']);
      },
      /**
       * NOTE: currently this is called from layout.js during measure, and is a hack to store this value only from measure, in case components use it during render
       * This will eventually be moved (for component modes, screen width) to be updated in such away that it is always correct during render (and that render happens when screen width changes, and not just relayout)
       * - Etai
       */
      updateScreenSize(screenSize) {
          let updatedScreenSize = {};

          if (_.isUndefined(screenSize)) {
              updatedScreenSize.width = this.isMobileView() ? 320 : this.getBodyClientWidth();
              updatedScreenSize.height = this.getBodyClientHeight();
          } else {
              updatedScreenSize = _.pick(screenSize, ['width', 'height']);
          }

          siteDataUtils.updateScreenSize(this, updatedScreenSize);

          this.isPortrait = this.mobile.isPortrait();
      },

      getScrollBarWidth() {
          if (this.isInSSR()) { // server side rendering support
              return 0;
          }

          if (this.browser.firefox) { // https://developer.mozilla.org/en-US/docs/Web/CSS/length#Viewport-percentage_lengths
              return 0;
          }

          if (this.measureMap) {
              return _.get(this.measureMap, 'innerWidth.screen') - _.get(this.measureMap, 'clientWidth');
          }

          const windowInnerWidth = this.isMobileView() ? 320 : window.innerWidth;
          return windowInnerWidth - this.getScreenWidth();
      },

      getSiteX() {
          if (this.isMobileView() || this.isMobileDevice()) {
              return 0;
          }

          return Math.min(parseInt(Math.floor((this.getSiteWidth() - this.getScreenWidth()) / 2), 10), 0);
      },
      getSiteWidth() {
          if (this.isMobileView()) {
              return 320;
          } else if (this.isFacebookSite()) {
              return 520;
          }

          const siteStructure = this.getSiteStructure();
          return _.get(siteStructure, 'renderModifiers.siteWidth', 980);
      },

      isFacebookSite() {
          const applicationType = this.getter(['rendererModel', 'siteInfo', 'applicationType']);
          return applicationType === 'HtmlFacebook';
      },

      onImageUnmount(id) {
          if (this.imageCssCache) {
              delete this.imageCssCache[id];
          }

          this.imageLoader.removeImage(id);
      },

      /**
       *
       * @param {string} query
       * @param {string=} rootId default is masterPage
       * @param {SiteData.dataTypes=} dataType default is document_data
       * @returns {(data.compThemeItem|data.compDataItem|data.compPropertiesItem)} the data/theme/property item
       */
      getDataByQuery(query, rootId, dataType) {
          rootId = rootId || MASTER_PAGE_ID;
          dataType = dataType || this.dataTypes.DATA;

          const currentRootIds = [this.getPrimaryPageId()];
          if (this.isPopupOpened()) {
              currentRootIds.push(this.getCurrentPopupId());
          }
          return dataResolver.getDataByQuery(this, currentRootIds, rootId, dataType, query);
      },

      getMasterPageDataByQuery(query, dataType) {
          dataType = dataType || this.dataTypes.DATA;
          return dataResolver.getDataByQuery(this, [], MASTER_PAGE_ID, dataType, query);
      },

      resolveData(dataToResolve, rootId, dataType) {
          return this.getDataByQuery(dataToResolve, rootId, dataType);
      },

      findDataOnMasterPageByPredicate(predicate) {
          return _.find(this.getPageDataMap(this.MASTER_PAGE_ID, this.dataTypes.DATA), predicate);
      },

      getPageMinHeight() {
          return this.isMobileView() ? 200 : 500;
      },

      isHomePage(pageId) {
          return pageId && pageId === this.getMainPageId();
      },

      /**
       * Returns a list of pages data items from the site data
       * @returns {*}
       */
      getPagesDataItems() {
          const pageIds = this.getAllPageIds();
          const dataItems = _.map(pageIds, function (pageId) {
              return this.getDataByQuery(pageId);
          }.bind(this));

          return dataItems;
      },

      /**
       * Returns true if 'debug=all' is present in URL, false otherwise.
       *
       * @returns {boolean}
       */
      isDebugMode() {
          return _.get(this, ['currentUrl', 'query', 'debug']) === 'all';
      },

      hasDebugQueryParam() {
          return !!this.getter(['currentUrl', 'query', 'debug']);
      },

      getFavicon() {
          return this.publicModel && this.publicModel.favicon;
      },

      getDocumentLocation() {
          return this.currentUrl;
      },

      getOrigin() {
          return warmupUtilsLib.urlUtils.origin(this.currentUrl);
      },

      getRequestedLayoutMechanism() {
          return _.get(this, ['currentUrl', 'query', 'layoutMechanism']);
      },


      /**
       * Gets the external base url from the publicModel or return the current base location
       * @returns {*}
       */
      getExternalBaseUrl() {
          // optimization: calculate only once
          const self = this;
          this.getExternalBaseUrl = this.isViewerMode() ?
              function () {
                  return this.publicModel.externalBaseUrl;
              } :
              function () {
                  const relevantPathParts = this.isSiteHistoryEndpoint() ? 8 : 7;//http://editor.wix.com/html/editor/web/renderer/render/document/{meta-site-id}
                  const externalBaseUrl = warmupUtilsLib.urlUtils.getBaseUrlWithPath(self.getDocumentLocation(), relevantPathParts);
                  return function () {
                      return externalBaseUrl;
                  };
              }.bind(this)();
          return this.getExternalBaseUrl();
      },

      getUnicodeExternalBaseUrl() {
          return this.publicModel && this.publicModel.unicodeExternalBaseUrl;
      },

      getMainPageId() {
          if (this.publicModel) {
              return this.publicModel.pageList.mainPageId;
          }
          const siteStructureData = this.getDataByQuery(MASTER_PAGE_ID, MASTER_PAGE_ID);
          return _.get(siteStructureData, 'mainPage.id') || _.get(siteStructureData, 'mainPageId') || 'mainPage';
      },

      getAllPageIds() {
          const publicModel = this.getter(['publicModel'], undefined, true);
          if (publicModel) {
              return _.map(publicModel.pageList.pages, 'pageId');
          }

          return siteDataUtils.getAllPageIds(this);
      },

      getPageTitle(pageId) {
          if (this.publicModel) {
              const pages = _.get(this.publicModel, ['pageList', 'pages']);
              return _.get(_.find(pages, {pageId}), 'title');
          }
          return _.get(this.getDataByQuery(pageId), 'title');
      },

      getPageJsonld(pageId) {
          return this.pageIdToJsonLd[pageId] || {};
      },

      setJsonLd(pageId, jsonld) {
          this.pageIdToJsonLd[pageId] = jsonld;
      },

      getPageLinkTag(pageId) {
          return this.pageLinkTag[pageId] || {};
      },

      setPageLinkTag(pageId, linkTag) {
          this.pageLinkTag[pageId] = linkTag;
      },

      getBrowser() {
          return this.browser;
      },

      getOs() {
          return this.os;
      },

      getHubSecurityToken() {
          return this.getSessionInfoProp('hs') || 'NO_HS'; //note that this is set in the dynamicModel.
      },

      setHubSecurityToken(hubSecurityToken) {
          this.setSessionInfoProp('hs', hubSecurityToken);
      },

      getPageUsedFonts(pageId) {
          const pageData = this.getDataByQuery(pageId);
          return pageData.usedFonts;
      },

      setPageUsedFonts(pageId, usedFontsList) {
          const pageData = this.getDataByQuery(pageId);
          pageData.usedFonts = usedFontsList;
      },

      getPremiumFeatures() {
          return this.rendererModel.premiumFeatures;
      },

      isViewerMode() {
          return !_.isUndefined(this.publicModel);
      },

      isTemplate() {
          return this.rendererModel.siteInfo.documentType === 'Template';
      },

      shouldShowWixAds() {
          const isTemplateView = this.isTemplate() && !this.rendererModel.previewMode;
          const hasPremiumNoWixAdsForSocial = _.includes(this.rendererModel.premiumFeatures, 'NoAdsInSocialSites');
          const isNotSocialSite = !this.isFacebookSite() || !hasPremiumNoWixAdsForSocial;

          return !this.isAdFreePremiumUser() &&
              !this.isWixSite() &&
              !isTemplateView &&
              isNotSocialSite &&
              !isAdminPage(this);
      },

      getPageBottomMargin() {
          const isWixAdsAllowed = siteDataUtils.isWixAdsAllowed(this);
          if (!isWixAdsAllowed || this.isMobileView() || !this.shouldShowWixAds() || experiment.isOpen('displayWixAdsNewVersion', this)) {
              return 0;
          }
          return 40;
      },

      getPageTopMargin() {
          return this.getWixTopAdHeight();
      },

      getPageMargins() {
          return {
              bottom: this.getPageBottomMargin(),
              top: this.getPageTopMargin()
          };
      },

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
      },

      /**
       *
       * @returns {boolean}
       */
      isWixSite() {
          return this.rendererModel.siteInfo.documentType === 'WixSite';
      },

      isUsingUrlFormat(format) {
          return this.getUrlFormat() === format;
      },

      getUrlFormat() {
          if (this.urlFormatModel && this.urlFormatModel.format) {
              return this.urlFormatModel.format;
          }

          return warmupUtilsLib.siteConstants.URL_FORMATS.HASH_BANG;
      },

      isImageZoom(navigationInfo) {
          return navigationInfo.imageZoom;
      },

      getPageUrl(pageInfo, urlFormat, baseUrl, cleanQuery, urlMapping) {
          const actualUrlFormat = this.isUsingUrlFormat(warmupUtilsLib.siteConstants.URL_FORMATS.HASH_BANG) ? warmupUtilsLib.siteConstants.URL_FORMATS.HASH_BANG : urlFormat;

          return wixUrlParser.getUrl(this, _.assign({}, pageInfo, {format: actualUrlFormat}), false, _.isUndefined(cleanQuery) ? true : cleanQuery, baseUrl, urlMapping);
      },

      getCurrentUrl(urlFormat, baseUrl, isDifferentUrlFormat) {
          const rootNavigationInfo = this.getExistingRootNavigationInfo(this.getCurrentUrlPageId());
          return this.getPageUrl(rootNavigationInfo, urlFormat, baseUrl, undefined, isDifferentUrlFormat ? this.getCustomUrlMapping() : undefined);
      },

      getMainPageUrl(urlFormat, baseUrl) {
          return this.getPageUrl({pageId: this.getMainPageId()}, urlFormat, baseUrl);
      },

      getMainPagePath() {
          const mainPageUrl = this.getMainPageUrl(this.getUrlFormat());
          const remove = `${this.currentUrl.protocol}//${this.currentUrl.host}`;
          return mainPageUrl.replace(remove, '');
      },

      getForbiddenPageUriSEOs() {
          if (this.urlFormatModel && this.urlFormatModel.forbiddenPageUriSEOs) {
              return this.urlFormatModel.forbiddenPageUriSEOs;
          }

          return {};
      },

      /**
       * gets a global image quality values
       */
      getGlobalImageQuality() {
          return _.pick(this.getDataByQuery(warmupUtilsLib.siteConstants.GLOBAL_IMAGE_QUALITY), warmupUtilsLib.siteConstants.GLOBAL_IMAGE_QUALITY_PROPERTIES);
      },

      getCurrentPopupId() {
          return this.getter(['_currentPageIds', 'popupPage']);
      },

      getRootNavigationInfo() {
          const pageId = this.getPrimaryPageId();
          return this.getExistingRootNavigationInfo(pageId);
      },

      isPopupPage(pageId) {
          if (pageId === MASTER_PAGE_ID) {
              return false;
          }

          const pageData = this.getDataByQuery(pageId);

          return Boolean(pageData && pageData.isPopup);
      },

      isDynamicPage(pageId) {
          return routerUtils.isDynamicPage(this.getRouters(true), pageId);
      },

      isPopupOpened() {
          return Boolean(this.getCurrentPopupId());
      },

      getViewMode() {
          return this.isMobileView() ? constants.VIEW_MODES.MOBILE : constants.VIEW_MODES.DESKTOP;
      },

      isFeedbackEndpoint() {
          return !this.isViewerMode() && _.startsWith(this.currentUrl.path, '/html/editor/review');
      },
      isSiteHistoryEndpoint() {
          return !this.isViewerMode() && _.startsWith(this.currentUrl.path, '/html/editor/web/renderer/revisions/view');
      },
      getPublicBaseUrl() {
          const isPreviewMode = !!this.documentServicesModel;
          const isSiteWasPublished = isPreviewMode ? this.documentServicesModel.isPublished : true;
          if (isPreviewMode) {
              return isSiteWasPublished ? this.documentServicesModel.publicUrl : '';
          }
          return this.getExternalBaseUrl();
      },

      getPopupsContainer() {
          return window.document.getElementById('POPUPS_ROOT');
      },

      getCustomUrlMapping() {
          return this.getter(['customUrlMapping']);
      },

      setCustomUrlMapping(permalink, data) {
          siteDataUtils.setCustomUrlMapping(this, permalink, data);
      },

      getRouters(noClone) {
          return this.getter(['routers', 'configMap'], undefined, noClone) || {};
      },
      isPlatformAppOnPage(pageId, appId) {
          return _.get(this, ['pagesPlatformApplications', appId, pageId], false);
      },
      isQaMode() {
          return warmupUtilsLib.urlUtils.isQueryParamOn(this.currentUrl, 'isqa');
      },
      getHideComponentsQAList() {
          return _.get(this, ['currentUrl', 'query', 'hideComponents']);
      },
      getHash() {
          const args = Array.prototype.slice.call(arguments, 0);
          return warmupUtilsLib.hashUtils.SHA256.hex_sha256(args.join('/'));
      },

      getUniquePageId(rootId) {
          const blogAppPartNames = warmupUtilsLib.blogAppPartNames,
              BLOG_PAGE_ID = 'blog';

          if (warmupUtilsLib.stringUtils.isTrue(_.get(this, ['currentUrl', 'query', 'draft']))) {
              return warmupUtilsLib.hashUtils.SHA256.hex_sha256('editor');
          }

          const {pointers, dal} = getPointersAndDal(this);
          const pageDocumentData = dal.get(pointers.page.getPageData(rootId));
          const singlePostComponent = _.find(pageDocumentData, {appPartName: blogAppPartNames.SINGLE_POST});
          let postId;

          if (this.wixapps.blog[singlePostComponent.id]) {
              postId = this.wixapps.blog[singlePostComponent.id][1];
          } else {
              return;
          }

          return this.getHash(this.siteId, BLOG_PAGE_ID, postId);
      },
      isInSSR() {
          return this._isInSSR;
      },
      isClientAfterSSR() {
          return this._isClientAfterSSR;
      },
      isFirstRenderAfterSSR() {
          return this._isFirstRenderAfterSSR;
      },
      isAfterSSSRSuccess() {
          return this._isAfterSSSRSuccess;
      },
      isInSeo() {
          return !!this.getter(['rendererModel', 'seo']);
      },
      setPagesJsonFileName(pageIdToJsonFileName) {
          if (_.isObject(pageIdToJsonFileName)) {
              this.publicModel.pageList.pages.forEach(function (page) {
                  page.pageJsonFileName = page.pageJsonFileName || pageIdToJsonFileName[page.pageId]; // eslint-disable-line santa/no-side-effects
              });
          }
      },
      hasPageData(pageId) {
          const pageInfo = _.find(this.publicModel.pageList.pages, ['pageId', pageId]);
          return !!(pageInfo && pageInfo.pageJsonFileName);
      },
      registerMediaRichTextInnerComponent(mediaRichTextCompId, innerCompId, structureInfo) {
          _.set(this.mediaRichTextInnerComponents, [mediaRichTextCompId, innerCompId], {
              id: innerCompId,
              structureInfo
          });
      },
      getMediaRichTextInnerComponents(mediaRichTextCompId) {
          return this.mediaRichTextInnerComponents[mediaRichTextCompId];
      },
      clearMediaRichTextInnerComponents(mediaRichTextCompId) {
          delete this.mediaRichTextInnerComponents[mediaRichTextCompId];
      },
      isPermalink(id) {
          if (!id) {
              return false;
          }
          const dataType = this.getMasterPageData(['data', 'document_data', id, 'type']);
          return dataType === 'PermaLink';
      },
      isVisualFocusEnabled() {
          const {pointers, dal} = getPointersAndDal(this);
          const masterPageDataPointer = pointers.data.getDataItem(this.MASTER_PAGE_ID, this.MASTER_PAGE_ID);
          const isFocusEnabled = dal.get(pointers.getInnerPointer(masterPageDataPointer, ['accessibilitySettings', 'visualFocusDisabled'])) === false;
          return isFocusEnabled || experiment.isOpen('sv_forceVisualFocus', this);
      },

      getCurrentLanguageCode() {
          const {pointers, dal} = getPointersAndDal(this);
          return dal.get(pointers.multilingual.currentLanguageCode());
      },

      getSiteLanguages() {
          const {pointers, dal} = getPointersAndDal(this);
          const originalLanguage = dal.get(pointers.multilingual.originalLanguage());
          if (originalLanguage && originalLanguage.languageCode) {
              const translationLanguages = dal.get(pointers.multilingual.translationLanguages());
              const siteLanguages = [
                  _.assign(originalLanguage, {isPrimaryLanguage: true}),
                  ...translationLanguages.map(lang => _.assign(lang, {isPrimaryLanguage: false}))
              ];
              return siteLanguages;
          }
          return [];
      },

      getClonedDataItemsIdsMap(compId) {
          if (!this.clonedDataItemsIdsMap[compId]) {
              this.clonedDataItemsIdsMap[compId] = {};
          }

          return this.clonedDataItemsIdsMap[compId];
      },

      getGhostStructureData() {
          return this.ghostStructureData;
      },

      registerLayoutFunc(domNode, func) {
          this.layoutFunctions.set(domNode, func);
      },

      getLayoutFunc(domNode) {
          return this.layoutFunctions.get(domNode);
      },

      isPreviewMode() {
          return this.getter(['rendererModel', 'previewMode']);
      },

      isGoogleBot() {
          return _.get(this, 'os.googleBot', false);
      }
  };

  return SiteData;
});

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
