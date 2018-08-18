import React, { Component } from 'react';
import ItemView from './ItemView';
import CommonItemContainer from './CommonItemContainer';

class ItemContainer extends Component {

  constructor(props) {
    super(props);

    this.displayName = 'ItemContainer';
  }

  isSmallItem() {
    const maxWidth = 90;
    const maxHeight = 90;

    if (this.props.styleParams.cubeImages && this.props.styleParams.cubeType === 'fit') {
      if (this.props.style.orientation === 'landscape') {
        // wide image
        return this.props.style.width / this.props.style.ratio <= maxHeight;
      } else {
        // tall image
        return this.props.style.height * this.props.style.ratio <= maxWidth;
      }
    } else {
      return this.props.width <= maxWidth || this.props.style.height <= maxHeight;
    }
  }

  isNarrow() {
    return this.props.style.width < 200;
  }

  isShort() {
    return this.props.style.height < 150;
  }

  render() {
    return (
      <ItemView 
        layout="galleryItem"
        className="image"
        isSmallItem={this.isSmallItem()}
        isNarrow={this.isNarrow()}
        isShort={this.isShort()}
        {...this.props}
      />
    )
  }
}

export default ItemContainer;

