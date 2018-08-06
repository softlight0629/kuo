import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Layouter } from './layouter';
import layoutParams from './layouter/layoutParams';
import ProGallery from './renderer/gallery/ProGallery';

// import {
//   ThumbnailsGalleryLayout,
//   MasonryGalleryLayout,
//   GridGalleryLayout,
//   StripGalleryLayout,
//   ColumnGalleryLayout,
//   SliderGalleryLayout,
//   SlideShowGalleryLayout,
//   CollageGalleryLayout,
// } from './GalleryLayout';

import './index.less';

@observer
class AstvGallery extends Component {

  render() {
    const { astm } = this.props;
    const { opts: { galleryLayout }, spec: { rect } } = astm;

    return (
      <div className="ast-gallery">
        <ProGallery  key={`${Date.now()}`} width={rect.width} />
      </div>
    )
  }
}

export default AstvGallery;
