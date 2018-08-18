import React, { Component } from 'react';

class ImageItem extends Component {

  render() {
    const {
      isThumbnail,
      alt,
      visible,
      loaded,
      styleParams,
      imageDimensions,
      resized_url,
      id,
      actions,
      settings,
    } = this.props;
    
    const imageProps = settings && settings.imageProps && typeof settings.imageProps === 'function' ? settings.imageProps(id) : {};
    return (
      <div
        className={`gallery-item-visible gallery-item gallery-item-preloaded ${styleParams.cubeImages && styleParams.cubeType === 'fit' ? ' grid-fit ' : ''} ${loaded ? 'loaded' : ''}`}
        onTouchStart={actions.handleItemMouseDown}
        onTouchEnd={actions.handleItemMouseUp}
        key={`image_container-${id}`}
        data-hook="image-item"
        // style={}
      >
        <img 
          onLoad={actions.setItemLoaded}
          className={`gallery-item-visible gallery-item ${loaded ? 'loaded' : 'gallery-item-hidden'}`}
          src={resized_url.img}
          alt={`${isThumbnail ? '' : alt}`}
          onError={actions.setItemError}
          style={imageDimensions}
          {...imageProps}
        />
      </div>
    )
  }
}

export default ImageItem;
