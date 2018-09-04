import React, { Component } from 'react';
import * as _ from 'lodash';
import util from '@packages/util/util';

import './thumbnailSlider.less';

const INTERVAL_TIME = 200;
const DEFAULT_SLIDER_WIDTH = 400;
const DEFAULT_SELECTED_ITEM_OFFSET = 50;
const DEFAULT_STEP_WIDTH = 96;


class ThumbnailSldier extends Component {

  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      // distanceToScroll: 0,
      // isRightEdge: true,
      // isLeftEdge: true,
    };
  }

  onSkinChange(skinName, callback = _.noop) {
    this.props.changeSkin(skinName);
  }

  moveToLeft() {
    if (this.state.position >= 0) {
      this.setState({
        position: 0,
      });

      return;
    }

    this.setState({
      position: this.state.position + 96,
    });
  }

  moveToRight() {
    const { items } = this.props;
    if (Math.abs(this.state.position) > (items.length - 4) * 96) {
      return;
    }

    this.setState({
      position: this.state.position - 96,
    });
  }


  render() {
    function repeatItem(item, itemIndex) {
      return (
        <label key={item.value} onClick={() => this.onSkinChange(item.value)}>
          <img src={util.media.getMediaUrl(item.iconSrc)} />
        </label>
      )
    }
    return (
      <div className="thumbnails-slider">
        <div className="items-container" style={{ left: this.state.position }}>
          {
            _.map(this.props.items, repeatItem)
          }
        </div>
        <div
          className="arrow left"
          onClick={() => this.moveToLeft()}
        >
          <span></span>
        </div>
        <div 
          className="arrow right"
          onClick={() => this.moveToRight()}
        >
          <span></span>
        </div>
      </div>
    )
  }
}

export default ThumbnailSldier;
