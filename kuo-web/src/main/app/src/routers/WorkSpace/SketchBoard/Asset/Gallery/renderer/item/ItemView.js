import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils';
import classnames from 'classnames';
import ImageItem from './ImageItem';
import { placements } from '../utils/consts';
import * as _ from 'lodash';

class ItemView extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      failed: false,
      loaded: false,
      retries: 0,
      showShare: false,
      showHover: false,
    }
  }

  componentDidMount() {}

  componentWillReceiveProps() {}

  componentDidUpdate() {}

  init() {}

  setItemError() {
    this.setState({
      retries: this.state.retries + 1,
      failed: this.state.retries >= 3,
    });
  }
  setItemLoaded() {
    // performanceUtils.itemLoaded();
    // performanceUtils.appLoaded();
    this.setState({
      failed: false,
      loaded: true,
    });
  }

  isIconTag(tagName) {
    return ['button', 'i', 'a'].indexOf(tagName.toLowerCase()) >= 0;
  }

  toggleShare(event, forceVal) {
    event.stopPropagation();
    if (event.type === 'mouseout' && (this.isIconTag(event.target.tagName) || event.relatedTarget && this.isIconTag(event.relatedTarget.tagName))) {
      return;
    }
    this.setState({
      showShare: _.isUndefined(forceVal) ? !this.state.showShare : !!forceVal,
    })
  }

  toggleHoverOnMobile() {
    this.setState({
      showHover: !this.state.showHover,
    });
  }

  onMouseOver() {
    // this.onMouseOverEvent.itemIdx = this.props.idx;
  }

  onKeyPress(e) {
    switch(e.keyCode || e.charCode) {
      case 32: // space
      case 13:
        // enter
        e.preventDefault();
        e.stopPropagation();
        this.onItemClick(e, false);
        return false;
    }
  }

  onItemClick(e, isThumbnail) {

    e.preventDefault();

    let _prop$StyleParams = this.props.styleParams,
      itemClick = _prop$StyleParams.itemClick,
      videoPlay = _prop$StyleParams.videoPlay;
    
    if (!_.isBoolean(isThumbnail)) {
      isThumbnail = !!this.props.thumbnailHighlightId;
    }
    if (!isThumbnail && _.isFunction(_.get(window, 'galleryWixCodeApi.onItemClicked'))) {
      window.galleryWixCodeApi.onItemClick(this.props);
    }

    if (isThumbnail === true && _.isFunction(this.props.actions.scrollToItem)) {
      // the click is on a thumbnail
      this.props.actions.scrollToItem(this.props.idx);
    } else if (itemClick === 'expand' || itemClick === 'link') {
      this.props.actions.toggleFullscreen(this.props.idx);
    } else if (this.props.type === 'video') {
      let shouldTogglePlay = itemClick !== 'expand' && (videoPlay === 'onClick' || utils.isMobile());
      if (shouldTogglePlay) {
        this.props.playing ? this.props.pasuseVideo(this.props.idx) : this.props.playVideo(this.props.idx);
      }
    } else if (this.shouldShowHoverOnMobile()) {
      this.toggleHoverOnMobile();
    }
  }

  toggleFullscreenIfNeeded(e) {
    let targetClass = _.get(e, 'target.className');
    if (_.isObject(targetClass)) {
      targetClass = _.valuesIn(targetClass);
    }

    if (_.isFunction(targetClass.indexOf) && targetClass.indexOf('block-fullscreen') >= 0) {
      console.warn('Blocked fullscreen!', e);
      return;
    } else if (this.props.styleParams.fullscreen) {
      this.props.actions.toggleFullscreen(this.props.idx);
    }
  }

  toggleMultishareSelection(e) {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }

    let itemContainer = this.itemContainer;
    itemContainer.style.transform = `scale(${(this.props.style.width - 8) / this.props.style.width})`;
    setTimeout(() => {
      itemContainer.style.transform = 'scale(1)';
    }, 80);

    if (this.isMultishared()) {
      this.props.actions.removeItemFromMultishare(this.props);
    } else {
      this.props.actions.addItemToMultishare(this.props);
    }
  }

  handleItemMouseDown(e) {
    if (utils.isMobile() && this.props.styleParams.allowMultishare) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = setTimeout(() => {
        e.preventDefault();
        this.toggleMultishareSelection();
      }, 500);
    }

    return true;
  }

  handleItemMouseUp(e) {
    if (utils.isMobile() && this.longPressTimer) {
      clearTimeout(this.longPressTimer);
    }

    return true;
  }

  isSmallItem() {
    return this.props.isSmallItem && !this.props.styleParams.isSlideshow;
  }

  isVerticalContainer() {
    return this.props.style.width < this.props.style.height + 1;
  }

  shouldShowHoverOnMobile() {
    return utils.isMobile() && this.props.styleParams.itemClick === 'nothing';
  }

  isHighlight() {
    return this.props.thumbnailHighlightId && this.props.thumbnailHighlightId === this.props.id;
  }

  shouldHover() {

  }

  isMultishared() {
    let items = _.get(this, 'props.multishare.items');
    return items && !!_.find(items, itemProps => itemProps.id === this.props.id);
  }

  isMultisharing() {
    return _.get(this, 'props.multishare.isMultisharing');
  }

  getImageDimensions() {
    const imageIsWider = this.props.style.ratio >= this.props.cubeRatio;
    const imageMarginLeft = Math.round((this.props.style.height * this.props.style.ratio - this.props.style.width) / -2);
    const imageMarginTop = Math.round((this.props.style.width / this.props.style.ratio - this.props.style.height) / -2);
    return !(this.props.styleParams.cubeImages && this.props.styleParams.cubeType === 'fit') ? {} : !imageIsWider ? {
      width: 'calc(100% - ' + 2 * imageMarginLeft + 'px)',
      marginLeft: imageMarginLeft
    } : {
      height: 'calc(100% - ' + 2 * imageMarginTop + 'px)',
      marginTop: imageMarginTop,
    };
  }

  isVisible(element, clientRect) {
    if (typeof clientRect === 'undefined') {
      const domElement = ReactDOM.findDOMNode(element.video);
      if (!domElement) {
        return false;
      }
      clientRect = domElement.getBoundingClientRect();
    }
    let _clientRect = clientRect,
      top = _clientRect.top,
      bottom = _clientRect.bottom;

    const windowHeight = this.props.documentHeight;
    const scrollPosition = this.props.scroll.top;
    const videoHeight = bottom -top;
    const tolerance = videoHeight / 2;
    const res = top + tolerance > scrollPosition && bottom - tolerance < scrollPosition + windowHeight;
    return res;
  }

  getButtonPlacement() {
    return this.props.styleParams.titlePlacement;
  }

  getItemTextsDetails() {}

  getSocial() {}

  getShare() {}

  getItemHover() {}

  getItemInner() {
    const { styleParams, type, visible } = this.props;

    let itemInner;
    let imageDimensions = this.getImageDimensions();
    let itemTexts = this.getItemTextsDetails();
    let social = this.getSocial();
    let share = this.getShare();
    let itemHover = this.getItemHover([itemTexts, social, share], imageDimensions);

    switch (type) {
      case 'dummy':
        itemInner = (<div></div>);
        break;
      case 'video':
        if (!visible) {
          itemInner = this.getVideoItemPlaceholder(itemHover);
        } else {
          itemInner = this.getVideoItem(imageDimensions, itemHover);
        }
        break;
      case 'text':
        itemInner = [this.getTextItem(), itemHover];
        break;
      case 'image':
      case 'picture':
      default:
        itemInner = [this.getImageItem(imageDimensions), itemHover];
    }

    if (styleParams.isSlideshow) {
      itemInner = (<div> 
        {itemInner} 
        <div className="gallery-item-info gallery-item-bottom-info" data-hook="gallery-item-info-buttons">
          <div>
            {itemTexts}
            {social}
            {share}
          </div>
        </div>
      </div>)
    }

    return itemInner;
  }

  getBottomInfoElement() {
    const { styleParams, title, fileName, type } = this.props;

    const displayTitle = utils.getTitleOrFileName(title, fileName);
    // const placements = 

    const buttonPlacement = this.getButtonPlacement();
    let bottomInfo;

    if (styleParams.titlePlacement === placements.SHOW_ALWAYS) {
      const isImage = type === 'image' || type === 'picture';
    }

    return bottomInfo;
  }

  getImageItem(imageDimensions) {
    var props = _.pick(this.props, ['alt', 'title', 'description', 'visible', 'id', 'styleParams', 'resized_url', 'settings']);

    return (
      <ImageItem
        {...props}
        key="imageItem"
        loaded={this.state.loaded}
        imageDimensions={imageDimensions}
        isThumbnail={!!this.props.thumbnailHighlightId}
        actions={{
          handleItemMouseDown: this.handleItemMouseDown.bind(this),
          handleItemMouseUp: this.handleItemMouseUp.bind(this),
          setItemLoaded: this.setItemLoaded.bind(this),
          setItemError: this.setItemError.bind(this),
        }}
      />
    )
  }

  getItemContainerStyles() {
    const { styleParams, style, transform } = this.props;

    const wrapperWidth = style.width;
    const borderRadius = styleParams.borderRadius < 100 ? styleParams.borderRadius : Math.min(parseInt(style.width), parseInt(style.height));

    let boxShadow = {};
    if (styleParams.boxShadow > 0) {
      const shadowOffset = Math.round(styleParams.imageMargin * styleParams.boxShadow / 5);
      const shadowSpread = Math.min(15, Math.round(styleParams.imageMargin * styleParams.boxShadow / 2));
      boxShadow = {
        boxShadow: shadowOffset + 'px ' + shadowOffset + 'px ' + shadowSpread + 'px 0 rgba(0,0,0,0.2)',
      };
    }

    const styles = _.merge({
      width: wrapperWidth,
      margin: styleParams.imageMargin + 'px',
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      bottom: style.bottom,
      overflowY: styleParams.isSlideshow ? 'visible' : 'inherit',
      borderRadius: borderRadius + 'px',
    }, transform, boxShadow);
    return styles;
  }

  getItemWrapperStyles() {
    const { styleParams, style, transform } = this.props;

    const borderRadius = styleParams.borderRadius < 100 ? styleParams.borderRadius : Math.min(parseInt(style.width), parseInt(style.height));
    const height = style.height;
    const styles = {};
    styles.backgroundColor = styleParams.cubeType !== 'fit' ? style.bgColor : 'inherit';
    styles.height = height + 'px';
    styles.borderRadius = borderRadius + 'px';
    return styles;
  }

  getItemContainerClass() {
    const { styleParams } = this.props;

    const className = classnames('gallery-item-container', 'visible', {
      highlight: this.isHighlight(),
      clickable: styleParams.itemClick !== 'nothing',
    });

    return className;
  }

  getItemWrapperClass() {
    const { styleParams } = this.props;
    return `gallery-item-wrapper visible ${styleParams.cubeImages ? 'cube-type-' + styleParams.cubeType : ''}`;
  }

  getItemContainerTabIndex() {
    var tabIndex = this.isHighlight() ? utils.getTabIndex('currentThumbnail') : this.props.currentIdx === this.props.idx ? utils.getTabIndex('currentGalleryItem') : -1;
    return tabIndex;
  }

  render() {
    const { photoId, id, hash, idx } = this.props;

    return (
      <div 
        className={this.getItemContainerClass()}
        onMouseOver={this.onMouseOver.bind(this)}
        onClick={this.onItemClick.bind(this)}
        onKeyDown={this.onKeyPress.bind(this)}
        tabIndex={this.getItemContainerTabIndex()}
        data-hash={hash}
        data-id={photoId}
        data-idx={idx}
        role="link"
        data-hook="item-container"
        key={`item-container-${id}`}
        style={this.getItemContainerStyles()}
      >
        <div
          data-hook="item-wrapper"
          className={this.getItemWrapperClass()}
          key={`item-wrapper-${id}`}
          style={this.getItemWrapperStyles()}
        >
          { this.getItemInner() }        
        </div>
      </div>
    )
  }
}

export default ItemView;
