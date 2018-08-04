import React, { Component } from 'react';
import { observer } from 'mobx-react';
import GalleryMedia from '../../../../../../../models/asset/entity/Gallery/Store/GalleryMedia';

@observer
class StripGalleryLayout extends Component {

  render() {
    const { rect: { width } } = this.props.astm.spec;
    const { galleryMedias } = this.props.astm.store;
    const columnWidth = width + 10;
    const itemHeight = Math.floor(columnWidth * 1.245);

    return (
      <div className="strip-layout">
        <div className="gallery-container">
          <div className="gallery-column" style={{ width: columnWidth, paddingTop: 0 }}>
          {
            galleryMedias.map((galleryMedia, i) => (
              <div className="gallery-group gallery-group-visible" style={{ width: columnWidth, height: itemHeight }}>
                <div className="gallery-item-container visible" style={{ width: columnWidth - 10, margin:5, top: 0, left: 0 }}>
                  <div className="gallery-item-wrapper visible" style={{ height: itemHeight }}>
                    <div className="gallery-item gallery-item-visible">
                      <img className="gallery-item-visible gallery-item" src={galleryMedia.cover} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    )
  }
}

export default StripGalleryLayout;
