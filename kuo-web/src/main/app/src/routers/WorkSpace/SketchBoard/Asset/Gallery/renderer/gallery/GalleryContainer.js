import React, { Component } from 'react';
import GalleryView from './GalleryView';
import SlideShowView from './SlideShowView';
import GalleryItem from '../item/GalleryItem';
import GalleryGroup from '../group/GalleryGroup';
import * as _ from 'lodash';
import Layouter from '../../layouter/layouter';

let FullscreenContainer;

class GalleryContainer extends Component {

  constructor(props) {
    super(props);

    const debouncer = _.throttle;
    const deounceInterval = 2000;

    this.renderTriggers = {
      SCROLL: 'Scroll',
      STYLES: 'Styles',
      ITEMS: 'Items',
      RESIZE: 'Resize',
      ORIENTATION: 'Orientation',
      MODE: 'Mode',
      NONE: 'None',
      LAYOUT: 'Layout',
      ALL: 'All'
    };

    this.lastHeight = 0;
    this.newHeight = 0;
    this.resizeCount = 0;
    this.orientationCount = 0;
    this.scrollBase = 0;
    this.lastOffsetTop = 0;

    this.thumbnailSize = _.isMobile() ? 90 : 120;
    this.slideshowInfoSize = 220;

    this.preloadedItems = [];

    const initPromise = this.init();

    this.defaultStateStyles = {
      gotStyleParams: false,
      galleryLayout: _utils2.default.isStoreGallery() ? 2 : 0,
      selectedLayout: 0,
      isVertical: false,
      gallerySize: 320,
      minItemSize: 120,
      groupSize: 3,
      chooseBestGroup: true,
      groupTypes: '1,2h,2v,3t,3b,3l,3r',
      cubeImages: false,
      cubeType: 'fill',
      smartCrop: false,
      fullscreen: true,
      allowSocial: true,
      allowDownload: false,
      allowTitle: true,
      allowDescription: false,
      allowMultishare: false,
      loveButton: true,
      loveCounter: true,
      videoLoop: true,
      videoSpeed: 1,
      videoPlay: 'hover',
      gallerySliderImageRatio: 0,
      galleryImageRatio: 2,
      numberOfImagesPerRow: 3,
      sharpParams: {
        quality: 90,
        usm: {} // do not apply usm - {usm_r: 0.66, usm_a: 1.00, usm_t: 0.01},
      },
      collageAmount: 0.8,
      collageDensity: 0.8,
      borderRadius: 0,
      boxShadow: 0,
      imageMargin: 5,
      galleryMargin: 0,
      floatingImages: 0,
      viewMode: 'preview',
      galleryHorizontalAlign: 'center',
      galleryTextAlign: 'center',
      galleryVerticalAlign: 'center',
      enableInfiniteScroll: 1,
      itemClick: 'expand',
      cubeRatio: 1, //determine the ratio of the images when using grid (use 1 for squares grid)
      fixedColumns: 0, //determine the number of columns regardless of the screen size (use 0 to ignore)
      oneRow: false, //render the gallery as a single row with horizontal scroll
      showArrows: false,
      isSlideshow: false,
      hasThumbnails: false,
      galleryThumbnailsAlignment: 'bottom',
      thumbnailSpacings: 0,
      gridStyle: 0,
      useCustomButton: _utils2.default.isStoreGallery(),
      titlePlacement: _consts2.default.placements.SHOW_ON_HOVER,
      mobilePanorama: false,
      isAutoSlideshow: false,
      autoSlideshowInterval: 2
    };

    let galleryWidth = this.getGalleryWidth();
    this.galleryStructure = {};
    this.items = this.props.items;

    const itemsIds = this.itemsIds(this.items);
    this.newProps = {};
    this.state = {
      items: itemsIds,
      renderedItemsCount: this.props.renderedItemsCount || itemsIds.length,
      totalItemsCount: this.props.totalItemsCount || itemsIds.length,
      scroll: {
        isInfinite: this.isInfiniteScroll(),
        base: this.scrollBase || 0,
        top: this.currentScrollPosition || 0,
      },
      container: {
        maxGalleryWidth: this.props.maxGalleryWidth,
        galleryWidth: galleryWidth,
        galleryHeight: this.getGalleryHeight(),
        videMode: 'site',
        bounds: {
          visibleTop: 0,
          visibleBottom: 1000,
          renderedTop: 0,
          renderedBottom: 3000,
        },
      },
      styleParams: _.clone(this.defaultStateStyles),
      hashtag: {
        items: [],
      },
      multishare: {
        items: [],
        isMultisharing: this.props.defaultSelectMode === true,
      }
    };

    setTimeout(() => {
      const sp = this.state.styleParams;
      sp.gotStyleParams || this.reRenderForStyles();
    }, 0);
  }

  init() { }

  initEventsFunction() { }

  initEventListeners() { }

  removeEventListeners() { }

  initNavigationEventListeners() { }

  initPersistentEventListeners() { }

  initCustomEvents() { }

  preloadItem(item, onload) {
    if (!item || !item.itemId || !item.isGalleryItem) {
      return;
    }

    try {
      const id = item.itemId;
      if (typeof this.preloadedItems[id] !== 'undefined') {
        return;
      }
      this.preloadedItems[id] = new Image();
      this.preloadedItems[id].src = item.thumbnail_url.img;
      if (typeof onload === 'function') {
        this.preloadedItems[id].onload = e => {
          console.timeEnd('[DIMENSIONS] preloading item #' + item.idx);
          onload(e);
        };
      }
      return this.preloadedItems[id];
    } catch (e) {
      console.error('Could not preload item', item);
      return;
    }
  }

  loadItemsDimensions() {
    if (!this.galleryItems()) {
      return;
    }

    const itemsWithoutDimensions = this.galleryItems().filter((item, idx) => {
      try {
        return item.isVisible && item.isDimensionless;
      } catch (e) {
        return false;
      }
    });

    // console.log(`[DIMENSIONS] calculating ${itemsWithoutDimensions.length} / ${this.layoutItems().length} elements dimensions`);
    itemsWithoutDimensions.forEach((item, idx, items) => {
      this.preloadItem(item, e => {
        try {
          const ele = e.srcElement;
          const itemIdx = this.items.findIndex(itm => {
            return itm.itemId === item.itemId;
          });
          this.items[itemIdx].metaData.width = ele.width;
          this.items[itemIdx].metaData.heigt = ele.height;
        } catch (e) {
          console.error('Could not calc element dimensions', e);
        }

        this.reRender(this.renderTriggers.ITEMS);
      });
    });
  }

  getStyleBySeed() {


  }

  getStyleByGalleryType(galleryType, gallerySize) {
    const galleryTypes = {
      collage_ver: {
        cubeImages: false,
        isVertical: true,
        galleryType: 'Columns',
        groupSize: 3,
        groupTypes: '1,2h,2v,3t,3b,3l,3r',
        gallerySize: Math.round(gallerySize * 5 + 500),
        fixedColumns: 0
      },
      collage_hor: {
        cubeImages: false,
        isVertical: false,
        galleryType: 'Strips',
        groupSize: 3,
        groupTypes: '1,2h,2v,3t,3b,3l,3r',
        gallerySize: Math.round(gallerySize * 5 + 500),
        fixedColumns: 0
      },
      grid: {
        cubeImages: true,
        isVertical: true,
        galleryType: 'Columns',
        groupSize: 1,
        groupTypes: '1',
        gallerySize: Math.round(gallerySize * 8.5 + 150),
        fixedColumns: 0,
        isGrid: true
      },
      masonry_ver: {
        cubeImages: false,
        isVertical: true,
        galleryType: 'Columns',
        groupSize: 1,
        groupTypes: '1',
        gallerySize: Math.round(gallerySize * 8 + 200),
        fixedColumns: 0
      },
      masonry_hor: {
        cubeImages: false,
        isVertical: false,
        galleryType: 'Strips',
        groupSize: 1,
        groupTypes: '1',
        gallerySize: Math.round(gallerySize * 5 + 200),
        fixedColumns: 0
      },
      one_col: {
        cubeImages: false,
        isVertical: true,
        galleryType: 'Columns',
        groupSize: 1,
        groupTypes: '1',
        gallerySize: this.getGalleryWidth(),
        fixedColumns: 1
      },
      one_row: {
        cubeImages: false,
        isVertical: false,
        galleryType: 'Strips',
        groupSize: 1,
        groupTypes: '1',
        gallerySize: this.getGalleryHeight(),
        fixedColumns: 0
      },
      slideshow: {
        showArrows: true,
        cubeImages: true,
        cubeRatio: this.getGalleryRatio(),
        isVertical: true,
        gallerySize: this.getGalleryWidth(),
        galleryType: 'Columns',
        groupSize: 1,
        groupTypes: '1',
        fixedColumns: 1
      }
    };

    let styleState;

    switch (galleryType) {
      case '-1':
        // empty
        styleState = {
          gallerySize,
        }
        break;
      case '0':
        // vertical collage
        styleState = galleryTypes.collage_ver;
        break;
      case '1':
        // horizontal collage
        styleState = galleryTypes.collage_hor;
        break;
      case '2':
        // grid
        styleState = galleryTypes.grid;
        break;
      case '3':
        // vertical masonry
        styleState = galleryTypes.masonry_ver;
        break;
      case '4':
        styleState = galleryTypes.masonry_hor;
        break;
      case '5':
        // one column
        styleState = galleryTypes.one_col;
        break;
      case '6':
        // one row
        styleState = galleryTypes.one_row;
        break;
      case '7':
        // slideshow
        styleState = galleryTypes.slideshow;
        break;
    }

    return styleState;
  }

  getStyleByLayout() {
    
  }

  getStyleParamsState() { }

  itemsIds(items) {
    return items.map(iyem => item.itemId);
  }

  allItems() {
    return this.items;
  }

  currentItems() {
    if (this.state) {
      return this.allItems().slice(0, this.state.renderedItemsCount);
    } else {
      return this.allItems().slice(0, 50);
    }
  }

  layoutItems() {
    return this.galleryStructure.layoutItems;
  }

  galleryItems() {
    return this.galleryStructure.galleryItems;
  }

  findVisibleItems() {
    const container = this.getLatestState('container', {});
    const styleParams = this.getLatestState('styleParams', {});
    const galleryWidth = this.getLatestState('container.galleryWidth', 980);

    // if (this.getHashtagFilter()) {
    //   return this.state.totalItemsCount;
    // }

    if (!this.galleryStructure.ready) {
      return this.state.renderedItemsCount;
    }

    const toGroup = _.last(this.galleryStructure.groups);
    const galleryHeight = this.galleryStructure.height * utils.getViewportScaleRatio();
    //if the last item is already rendered - get more items
    const addAfter = this.getLatestState('gotScrollEvent') && galleryHeight - container.galleryHeight <= (10 + styleParams.imageMargin + styleParams.galleryMargin) * 2 && (!toGroup || toGroup.rendered);

    const to = toGroup ? _.last(toGroup.items).idx + 1 : 0;

    if (addAfter) {

      //find the number of extra images to bring - according to the number of images that fit in the screen
      //calc the average item height according to the real gallery or using an estimate
      const averageItemHeight = galleryHeight > 0 && to > 0 ? galleryHeight / to : styleParams.gallerySize / styleParams.groupSize / (galleryWidth / styleParams.gallerySize);
      const itemsOnScreen = Math.ceil(utils.getScreenHeight() / averageItemHeight);

      //bring 10 screens at a time
      const itemsToAdd = itemsOnScreen * 10;
      if (utils.isMobile() || itemsToAdd < 100) {
        //round to 100 or 500 items per fetch
        itemsToAdd = 100;
      } else {
        itemsToAdd = 500;
      }

      to += itemsToAdd;
    }

    return to;
  }

  concatNewItems(newItems) {

    // add new items to the gallery - make sure there are no overlapping items and the order is correct
    const curItems = this.currentItems();

    if (!newItems || !newItems.length > 0) {
      return curItems;
    }

    curItems = curItems.concat(newItems);
    // curItems = _.uniqBy(curItems, (item) => item.itemId || item.photoId || item.url);
    // curItems = _.sortBy(curItems, (item) => item.orderIndex);
    // curItems = curItems.slice(0, this.state.totalItemsCount);

    return curItems;
  }

  getRequiredItemsFromDbIfNeeded(toItem) {
    const callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _.noop;

    toItem = Math.min(this.state.totalItemsCount, toItem);

    // check which items ara minssing;
    const curTo = this.state.renderedItemsCount || 0;
    const propsTo = this.allItems().length || 0;

    const defaultRes = {
      items: [],
      totalItemsCount: this.state.totalItemsCount,
    };

    if (this.alreadyGettingItems === true) {
      callback(defaultRes);
      return false;
    } else if (Math.min(propsTo, toItem) > curTo) {
      this.alreadyGettingItems = false;

      callback({
        items: this.allItems().slice(curTo, toItem),
        totalItemsCount: this.state.totalItemsCount,
      });
    } else if (toItem > curTo) {
      this.alreadyGettingItems = true;

      // let storeparameter = ''

      axios2.get(``)
        .then(res => {
          return res.data;
        })
        .then(res => {
          if (res) {
            this.alreadyGettingItems = true;
            callback(res || defaultRes);
          } else {
            this.alreadyGettingItems = false;
            callback(defaultRes);
          }
        })
        .cacth(e) {
        this.alreadyGettingItems = false;
        console.log(e);
      }
    } else {
      callback(defaultRes);
    }
  }

  scrollToItemIfNeeded() {
    //after height is changed - scroll to an item if needed
    if (this.shouldScrollTo >= 0) {
      setTimeout(() => {
        const scrolled = this.scrollToItem(this.shouldScrollTo);
        if (scrolled) {
          this.shouldScrollTo = -1;
        }
      }, 10);
    }
  }

  scrollToItem() { }

  resetItems() {
    for (let item, i = 0; item = items[i]; i++) {
      item.width = item.maxWidth;
      item.height = item.maxHeight;
    }

    return items
  }

  getLatestState(key, defaultValue) {
    try {
      if (!_.isUndefined(this.newState) && !_.isUndefined(_.get(this.newState, key))) {
        return _.get(this.newState, key);
      } else if (this.state) {
        return _.get(this.state, key);
      } else if (!_.isUndefined(defaultValue)) {
        return defaultValue;
      } else {
        return undefined;
      }
    } catch (e) {
      console.warn('Cannot find key in newState', key, e);
      return null;
    }
  }

  getDimensionFix() {
    return Number(this.getLatestState('styleParams.imageMargin', 0)) - Number(this.getLatestState('styleParams.galleryMargin', 0))
  }

  getGalleryWidth() {
    //on mobile we use the document width - which takes in account the pixel ratio fix (width more that 100% and scale down)
    const domWidth = this.protectGalleryWidth(utils.isMobie() ? document.body.clientWidth : widnow.innerWidth);
    const propsWidth = _.get(this.props, 'layout.width') || _.get(this.props, 'container.width');
    //add margins to width and then remove them in css negative margins
    return Math.floor((propsWidth > 0 ? propsWidth : domWidth) + this.getDimensionFix() * 2);
  }

  getGalleryHeight() {
    const offsetTop = _.get(this, 'state.styleParams.oneRow') ? this.props.offsetTop || 0 : 0;
    const domeHeight = Math.round((window.innerHeight - offsetTop) / utils.getViewportScaleRatio());
    const propsHeight = _.get(this.props, 'layout.height') || _.get(this.props, 'container.height');

    return Math.floor((propsHeight > 0 ? propsHeight : domeHeight) + this.getDimensionFix());
  }

  getGalleryRatio() {
    return this.getGalleryWidth() / this.getGalleryHeight();
  }

  getVisibleBounds() {

    if (typeof scrollTop === 'undefined') {
      scrollTop = 0;
    }
    if (typeof pageScale === 'undefined') {
      pageScale = 1;
    }

    let screentSize = utils.getScreenHeight() / pageScale;
    let renderedPadding = utils.parseGetParam('renderedPadding') || screenSize * 10;
    let visiblePadding = utils.parseGetParam('displayPadding') || screenSize * 1.5;
    let onscreenPadding = utils.parseGetParam('onscreenPadding') || 0;

    if (this.state.styleParams.oneRow) {
      //horizontal layouts will use the same infinite scroll mechanism for horizonal scroll (left => top, right => bottom)
      screenSize = utils.getSceenWidth() / pageScale;
      renderedPadding = _utils2.default.parseGetParam('renderedPadding') || screenSize * 10;
      visiblePadding = _utils2.default.parseGetParam('displayPadding') || screenSize * 5;
      onscreenPadding = _utils2.default.parseGetParam('onscreenPadding') || 0;
      //slideshows required more padding (it usually has larger images and one image per row)
    }

    let docViewTop = scrollTop;
    let docViewBottom = docViewTop + screenSize;

    if (!this.isInfiniteScroll() && !this.state.styleParams.oneRow) {
      docViewTop = 0;
      docViewBottom = this.getGalleryHeight() / pageScale;
    }

    // viewport window on both sides;
    var onscreenTop = docViewTop - onscreenPadding;
    var onscreenBottom = docViewBottom + onscreenPadding;

    var visibleTop = docViewTop - visiblePadding;
    var visibleBottom = docViewBottom + visiblePadding;

    var renderedTop = docViewTop - renderedPadding;
    var renderedBottom = docViewBottom + renderedPadding;

    var bounds = {
      docViewTop: docViewTop,
      docViewBottom: docViewBottom,
      onscreenTop: onscreenTop,
      onscreenBottom: onscreenBottom,
      visibleTop: visibleTop,
      visibleBottom: visibleBottom,
      renderedTop: renderedTop,
      renderedBottom: renderedBottom
    };

    return {
      bounds,
    }
  }

  getGalleryScroll() { }

  getGalleryDimensions() {
    const res = {
      galleryWidth: this.getGalleryWidth(),
      galleryHeight: this.getGalleryHeight(),
    };

    const thumbnailSize = this.thumbnailSize + this.getLatestState('styleParams.galleryMargin', 0) + 3 * this.getLatestState('styleParams.thumbnailSpacings', 0);

    if (this.getLatestState('styleParams.galleryThumbnailsAlignment', false)) {
      switch (this.getLatestState('styleParams.galleryThumbnailsAlignment', '')) {
        case 'top':
        case 'bottom':
          res.galleryHeight -= thumbnailSize;
          break;
        case 'left':
        case 'right':
          res.galleryWidth -= thumbnailSize;
          break;
        default:
          break;
      }
    } else if (this.getLatestState('styleParams.isSlideshow', false)) {
      // res.galleryHeight = 550; //if the height of the image is constant
      //if the height of the text is constant
      res.galleryHeight -= this.slideshowInfoSize;
    }

    return res;
  }

  protectGalleryWidth() {
    let maxGalleryWidth;

    if (utils.browserIs('chromeIos')) {
      // This can be the width calc for all galleries, but in chromeIos it must be used otherwise there is a gap on the left of the gallery.
      // Currently there is a bug with Mitzi that the width parmeter is not updating fast enough once it is fixed, use this code always.
      maxGalleryWidth = maxGalleryWidth || document.body.clientWidth;
    } else {
      maxGalleryWidth = document.body.clientWidth;
    }

    if (utils.isMobile()) {
      maxGalleryWidth = Math.floor(maxGalleryWidth / utils.getViewportScaleRatio());
    }
    return Math.min(Math.floor(width), maxGalleryWidth);
  }

  setWixHeight() { }

  getBottomInfoHeight() {
    let titlePlacement = styleParams.titlePlacement,
      itemFontSlideshow = styleParams.itemFontSlideshow,
      allowTitle = styleParams.allowTitle,
      galleryLayout = styleParams.galleryLayout,
      useCustomButton = styleParams.useCustomButton;


    if (titlePlacement !== 'SHOW_ALWAYS') {
      return 0;
    }

    let paddingTopAndBottom = 30;
    let spaceBetweenElements = 16;
    let defaultButtonHeight = useCustomButton ? 33 : 0;
    let defaultItemFontSize = 22;

    let isGrid = galleryLayout === 2;
    let fontSize = 0;
    let isLayoutSupportsNoTitle = isGrid && !_utils2.default.isMobile();
    let shouldSaveSpaceForTitle = allowTitle || isLayoutSupportsNoTitle;
    if (shouldSaveSpaceForTitle) {
      fontSize = itemFontSlideshow ? itemFontSlideshow.size : defaultItemFontSize;
    } else {
      spaceBetweenElements = 0;
    }

    return fontSize + paddingTopAndBottom + spaceBetweenElements + defaultButtonHeight;
  }

  isInfiniteScroll() { 

    const styleParamsInfiniteScroll = _.get(this, 'state.styleParams.enableInfiniteScroll');
    const stateInfiniteScroll = _.get(this, 'state.scroll.isInfinite');
    const gotStylesParams = _.get(this, 'state.styleParams.gotStyleParams');

    if (!gotStylesParams) {
      return false;
    } else {
      //DO NOT allow infinite scroll only if both styleParams and state are FALSE
      return styleParamsInfiniteScroll || stateInfiniteScroll;
    }
  }

  onResizeEvent(e) {

    if (!utils.isiPhone() || this.currentWindowWidth !== window.innerWidth || Math.abs(this.currentWindowHeight - window.innerHeight) > 50) {
      this.currentWindowWidth = window.innerHeight;
      this.currentWindowHeight = window.innerHeight;
      this.reRenderForResize(e);
    }
  }

  toggleInfiniteScroll(forceVal) {
    this.reRenderForResize();
  }

  toggleFullscreen() {}

  pauseAllVideos() {
    window.dispatchEvent(this.pauseAllVideosEvent);
  }

  closeFullscreenCallback() { }

  // initHashtagFilter() {}

  // getHashtagFilter() {}

  // sortItemsByHashtag() {}

  // updateMultishareItems() { }

  // addItemToMultishare() { }

  // removeItemFromMultishare() { }

  createGalleryStructure(structureState) {

    const getState = (key, defaultValue) => {
      return _.get(structureState, key) || this.getLatestState(key, defaultValue);
    }

    //either create a new gallery or rerender the existing (if a substential change happend) or just set visibilities (on scroll)
    const layoutParams = {
      items: this.items.slice(0, getState('renderedItemsCount', 50)).map(item => {
        return GalleryContainer.convertDtoToLayoutItem(item);
      }),
      container: getState('container'),
      styleParams: getState('styleParams'),
      gotScrollEvent: getState('gotScrollEvent'),
    };

    let galleryStructure = this.galleryStructure;
    if (!galleryStructure.ready) {
      galleryStructure = new Layouter(layoutParams);
    } else if (this.renderTrigger === this.renderTriggers.SCROLL) {
      galleryStructure.calcVisibities(getState('container.bounds'));
    } else {
      galleryStructure.createLayout(layoutParams);
    }

    galleryStructure = GalleryContainer.convertToGalleryItems(galleryStructure, {
      watermark: this.props.watermarkData,
      sharpParams: layoutParams.styleParams.sharpParams,
    });

    window.galleryStructure = galleryStructure;

    return galleryStructure;
  }

  reRenderForEditMode() { }

  reRenderForSettings() { }

  reRenderForStyles() {
    this.reRender(this.renderTriggers.STYLES);
  }

  reRenderForScroll(params) {

    if (this.state.styleParams.oneRow) {
      return true;
    }

    try {
      setTimeout(() => {
        this._reRenderForScroll(params);
      }, 500);
    } catch (e) {
      console.error('Could not delay scroll handling', e);
      this._reRenderForScroll(params);
    }
  }

  reRenderForHorizontalScroll(event) {
    let isScrollingHorizontalGallery;
    try {
      isScrollingHorizontalGallery = this.state.styleParams.oneRow && event.target.className.indexOf('gallery-horizontal-scroll') >= 0;
    } catch (e) {
      isScrollingHorizontalGallery = false;
    }

    if (isScrollingHorizontalGallery) {
      this._reRenderForScroll();
    }

    return true;
  }

  _reRenderForScroll(params) {

    // window.dispatchEvent(this.galleryScrollEvent);
    this.reRender(this.renderTriggers.SCROLL, params);
  }

  reRenderForResize(e) {

    this.lastWindowHeight = this.getGalleryHeight();
    this.resizeCount = this.resizeCount + 1;

    //when the gallery size is relative to the window width, resize should trigger styles recalc
    const trigger = this.state.styleParams.gallerySizeType === 'ratio' ? this.renderTriggers.STYLES : this.renderTriggers.RESIZE;
    this.reRender(trigger);
  }

  reRenderForOrientation() {

    const reRenderForOrientationInternal = () => {
      this.orientationCount = this.orientationCount + 1;
      this.reRender(this.renderTriggers.ORIENTATION);
    }

    reRenderForOrientationInternal();
  }

  reRender(trigger, params) {
    const _renderTriggers = this.renderTriggers,
      ALL = renderTriggers.ALL,
      STYLES = _renderTriggers.STYLES,
      RESIZE = _renderTriggers.RESIZE,
      ORIENTATION = _renderTriggers.ORIENTATION,
      LAYOUT = _renderTriggers.LAYOUT,
      MODE = _renderTriggers.MODE,
      SCROLL = _renderTriggers.SCROLL,
      ITEMS = _renderTriggers.ITEMS,
      NONE = _renderTriggers.NONE;

    console.count('galleryContainer reRender');
    console.count('reRendering (trigger: ' + trigger + ')');
    console.log('reRendering', trigger, params);

    const triggerIs = triggerTypes => {
      if (!_.isArray(triggerTypes)) {
        triggerTypes = [triggerTypes];
      }
      return trigger ==== ALL || _.indexOf(triggerTypes, trigger) >= 0;
    }

    //------| SCROLL STATE |------//
    this.getGalleryScroll(params);
    const scrollState = {
      scroll: _.merge(this.state.scroll, {
        top: this.currentScrollPosition,
        base: this.scrollBase,
      }),
      container: _.merge(this.state.container, this.getVisibleBounds(this.currentScrollPosition, this.pageScale)),
      gotScrollEvent: this.state.gotScrollEvent || triggerIs(SCROLL),
    };
    this.newState = scrollState;

    //------| STYLES STATE |------//
    const stylesState = {
      styleParams: triggerIs(STYLES) ? this.getStyleParamsState() : this.state.styleParams,
    };
    const isNewLayout = triggerIs(STYLES) && stylesState.styleParams && this.state.styleParams && stylesState.styleParams.selectedLayout !== this.state.styleParams.selectedLayout;
    if (isNewLayout) {
      trigger = LAYOUT;
    }
    this.newState.styleParams = stylesState.styleParams;

    //------| RESIZE STATE |------//
    const shouldGetNewGalleryDimensions = triggerIs([STYLES, ORIENTATION, LAYOUT]) || !utils.isiOS() && triggerIs([RESIZE]); //on iOS resize event is triggered on random events (without real change to the window size) https://jira.wixpress.com/browse/PHOT-555
    const resizeState = {
      container: shouldGetNewGalleryDimensions ? this.getGalleryDimensions(stylesState.styleParams) : this.state.container
    };
    if (shouldGetNewGalleryDimensions) {
      _.merge(this.newState.container, resizeState.container);
    }

    //------| VIEW STATE |------//
    const viewState = {};
    if (triggerIs(MODE)) {
      viewState = {
        container: {
          viewMode: 'view'
        }
      };
      _.merge(this.newState.container, viewState.container);
    }

    //------| TOTAL ITEMS |------//
    var shouldGetVisibleItems = triggerIs([MODE, SCROLL, RESIZE, ORIENTATION, STYLES, LAYOUT]);
    var totalItems = shouldGetVisibleItems ? this.findVisibleItems() : this.allItems();

    this.getRequiredItemsFromDbIfNeeded(totalItems, res => {

      let itemsState = {};
      if (res.items.length > 0) {
        if (this.items.length > this.state.renderedItemsCount) {
          itemsState = {
            items: this.state.items,
            renderedItemsCount: this.state.renderedItemsCount + res.items.length,
            totalItemsCount: res.totalItemsCount,
          }
        } else {
          this.items = this.concatNewItems(res.items);
          itemsState = {
            items: this.itemsIds(this.items),
            renderedItemsCount: this.items.length,
            totalItemsCount: res.totalItemsCount,
          };
        }
        _.merge(this.newState, itemsState);

        if (this.items.length !== this.state.renderedItemsCount) {
          trigger = ITEMS;
        }
      }

      this.renderTrigger = trigger;

      this.galleryStructure = this.createGalleryStructure();
      this.loadItemsDimensions();

      const isLayoutDefined = layout => {
        return String(layout) && String(layout).replace(/(undefined)[|]?/g, '') !== '';
      };
      const isChangedLayout = isNewLayout && isLayoutDefined(this.newState.styleParams.selectedLayout) && isLayoutDefined(this.state.styleParams.selectedLayout);
      const galleryHeight = Math.round(this.getGalleryHeight());

      const actions = this.props.actions;

      switch (trigger) {
        case SCROLL:
          if (params && actions.galleryWindowLayoutChanged) {
            actions.galleryWindowLayoutChanged(params);
          }
          break;
        case MODE:
          actions.editorModeChanged();
          break;
        case STYLES:
          actions.videoPlayModeChanged(this.newState.styleParams.videoPlay);
          break;
      }
    });

    if (triggerIs(LAYOUT)) {
      // _WixSdkWrapper2.default.Styles.getStyleParams(function (style) {
      //   _this17.horizontalLayoutHeight = style.numbers.horizontalLayoutHeight;
      //   _this17.newState.styleParams.oneRow && _this17.horizontalLayoutHeight && _this17.setWixHeight(_this17.horizontalLayoutHeight);
      // });
    }

    this.scrollToItemIfNeeded();
  }

  convertDtoToLayoutItem() { }

  convertToGalleryItems() { }

  shouldRender() {
    const state = this.state;

    if (_.get(state, 'styleParams.gotStyleParams') === false) {
      return false;
    }

    if (_.get(state, 'container.galleryWidth') <= 0) {
      return false;
    }

    if (!this.galleryStructure.ready) {
      return false;
    }

    return true;
  }

  render() {
    if (!this.shouldRender()) {
      return false;
    }

    const {
      watermarkData,
      settings,
      gotScrollEvent,
      domId,
      actions,
    } = this.props;

    const {
      totalItemsCount,
      renderedItemsCount,
      styleParams,
      container,
      scroll,
      multishare,
      gotScrollEvent,
    } = this.state;

    return (
      <div>
        <GalleryView
          totalItemsCount={totalItemsCount}
          renderedItemsCount={renderedItemsCount}
          items={this.currentItems()}
          galleryStructure={this.galleryStructure}
          styleParams={styleParams}
          container={container}
          scroll={_.merge({}, scroll, {
            isInfinite: this.isInfiniteScroll(),
          })}
          multishare={multishare}
          watermark={watermarkData}
          settings={settings}
          gotScrollEvent={gotScrollEvent}
          domId={domId}
          actions={_.merge(actions, {
            toggleInfiniteScroll: this.toggleInfiniteScroll,
            toggleFullscreen: this.toggleFullscreen,
            pauseAllVideos: this.pauseAllVideos,
            setWixHeight: this.setWixHeight,
            scrollToItem: this.scrollToItem,
            addItemToMultishare: this.addItemToMultishare,
            removeItemFromMultishare: this.removeItemFromMultishare,
          })}
        />
      </div>
    )
  }
}

export default GalleryContainer;
