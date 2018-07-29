import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  ThumbnailsGalleryLayout,
  MasonryGalleryLayout,
} from './GalleryLayout';

import './index.less';

@observer
class AstvGallery extends Component {

  render() {
    const { astm } = this.props;
    const { opts: { galleryLayout } } = astm;
    return (
      <div className="ast-gallery">
        { galleryLayout === 'Thumbnails' && <ThumbnailsGalleryLayout astm={astm} /> }
        { galleryLayout === 'Masonry' && <MasonryGalleryLayout astm={astm} /> }
      </div>
    )
  }
}

export default AstvGallery;
