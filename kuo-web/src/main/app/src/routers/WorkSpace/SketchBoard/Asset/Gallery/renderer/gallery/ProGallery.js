import React, { Component } from 'react';
import GalleryContainer from './GalleryContainer';

class ProGallery extends Component {

  constructor(props) {
    super(props);
    this.domId = Math.floor(Math.random() * 1000000);
  }

  render() {
    const { items, watermarkData, settings, offsetTop } = this.props;

    return (
      <div className="pro-gallery">
        <GalleryContainer 
          domId={this.domId}
          items={items}
          watermarkData={watermarkData}
          settings={settings}
          offsetTop={offsetTop}
        />
      </div>
    )
  }
}

export default ProGallery;
