import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Layouter } from './layouter';
import layoutParams from './layouter/layoutParams';
import {
  ThumbnailsGalleryLayout,
  MasonryGalleryLayout,
  GridGalleryLayout,
  StripGalleryLayout,
  ColumnGalleryLayout,
  SliderGalleryLayout,
  SlideShowGalleryLayout,
  CollageGalleryLayout,
} from './GalleryLayout';

import './index.less';

const galleryStructure = new Layouter(layoutParams);
console.log(JSON.stringify(galleryStructure));

@observer
class AstvGallery extends Component {

  render() {
    const { astm } = this.props;
    const { opts: { galleryLayout } } = astm;

    return (
      <div className="ast-gallery">
        {/* { galleryLayout === 'Thumbnails' && <ThumbnailsGalleryLayout astm={astm} /> }
        { galleryLayout === 'Masonry' && <MasonryGalleryLayout astm={astm} /> }
        { galleryLayout === 'Grid' && <GridGalleryLayout astm={astm} /> }
        { galleryLayout === 'Strip' && <StripGalleryLayout astm={astm} /> }
        { galleryLayout === 'Column' && <ColumnGalleryLayout astm={astm} /> }
        { galleryLayout === 'Slider' && <SliderGalleryLayout astm={astm} />}
        { galleryLayout === 'SlideShow' && <SlideShowGalleryLayout astm={astm} />}
        { galleryLayout === 'Collage' && <CollageGalleryLayout astm={astm} />} */}
      </div>
    )
  }
}

export default AstvGallery;
