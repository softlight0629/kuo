import React, { Component } from 'react';
import GalleryContainer from './GalleryContainer';
import { defaultImages } from '../constants/default-images';

class ProGallery extends Component {

  constructor(props) {
    super(props);
    this.domId = Math.floor(Math.random() * 1000000);
  }

  render() {
    const { items, watermarkData, settings, offsetTop, width, events } = this.props;

    return (
      <div id={`pro-gallery-${this.domId}`} className="pro-gallery">
        <GalleryContainer 
          domId={this.domId}
          items={items || defaultImages}
          watermarkData={watermarkData}
          settings={settings}
          offsetTop={offsetTop}
          width={width}
          events={events}
          {...this.props}
        />
      </div>
    )
  }
}

export default ProGallery;
