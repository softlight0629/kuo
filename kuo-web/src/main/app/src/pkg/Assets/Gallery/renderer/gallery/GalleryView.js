import React, { Component } from 'react';
import * as _ from 'lodash';
import GroupView from '../group/GroupView';
import utils from '../utils';

utils.fixViewport('Gallery');

class GalleryView extends Component {

  constructor(props) {
    super(props);

    this.id = Date.now() + '|' + Math.floor(Math.random() * 10000);
    this.state = {
      currentIdx: 0,
    };
  }

  handleArrowKeys() {}

  showMoreItems() {}

  createGallery(showMore) {

    const galleryConfig = this.createGalleryConfig();
    const galleryHeight = showMore ? window.innerHeight - 138 + 'px' : '100%';
    const columns = this.props.galleryStructure.columns;
    const layout = _.map(columns, (column, c) => {

      let paddingTop = 0;
      if (this.props.gotScrollEvent) {
        const firstRenderedGroup = _.find(column.groups, group => {
          return group.rendered;
        });
        if (!firstRenderedGroup) {
          if (this.props.scroll.top > 0 && column.groups.length > 0) {
            // gallery is above the fold
            firstRenderedGroup = { top: column.groups[column.groups.length - 1].bottom };
          } else {
            firstRenderedGroup = { top: 0 };
          }
        }
        paddingTop = firstRenderedGroup.top || 0;
      }

      return (
        <div
          data-hook="gallery-column"
          className="gallery-column"
          key={`column${c}`}
          style={{width:column.width, paddingTop: paddingTop }}
        >
          { 
            column.galleryGroups.map(group => {
              if (!group.rendered) {
                return false;
              }
              return (
                <GroupView {...group.renderProps(galleryConfig)} />
              )
            })
          }
        </div>
      )
    });

    return (
      <div 
        id="pro-gallery-container"
        className={`pro-gallery inline-styles ${this.props.styleParams.oneRow ? ' one-row slider hide-scrollbars ' : ''}`}
        style={{
          height: galleryHeight,
          width: this.props.container.galleryWidth,
          overflowX: 'hidden',
        }}
        onKeyDown={this.handleArrowKeys.bind(this)}
      >
        {layout}
      </div>
    )
  }

  createGalleryConfig() {
    return {
      scroll: this.props.scroll,
      container: this.props.container,
      styleParams: this.props.styleParams,
      multishare: this.props.multishare,
      watermark: this.props.watermark,
      settings: this.props.settings,
      currentIdx: this.state.currentIdx,
      actions: {
        toggleFullscreen: this.props.actions.toggleFullscreen,
        pauseAllVideos: this.props.actions.pauseAllVideos,
        addItemToMultishare: this.props.actions.addItemToMultishare,
        removeItemFromMultishare: this.props.actions.removeItemFromMultishare
      }
    };
  }

  createEmptyState() {}

  screenLogs() {}

  createShowMoreButton() {}

  render() {
    const showMore = this.createShowMoreButton();
    const gallery = this.createGallery(showMore);
    const emptyState = this.createEmptyState();

    return (
      <div 
        className="pro-gallery-parent-container"
        key={`pro-gallery-${this.id}`}
        style={{
          margin: -1 * (this.props.styleParams.imageMargin - this.props.styleParams.galleryMargin)
        }}
      >
        {gallery}
      </div>
    )
  }
}

export default GalleryView;
