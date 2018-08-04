import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class GridGalleryLayout extends Component {

  render() {
    const { rect: { width } } = this.props.astm.spec;
    const { galleryMedias } = this.props.astm.store;
    const columnWidth = (width / 2) + 5;
    const itemHeight = Math.floor(columnWidth * 0.573);

    return (
      <div className="grid-layout">
        <div className="gallery-container">
          <div className="gallery-column" style={{ width: columnWidth, paddingTop: 0 }}>
            {
              galleryMedias.filter((gm, i) => i % 2 === 0).map((galleryMedia, i) => (
                <div key={i} className="gallery-group gallery-group-visible" style={{ width:columnWidth, height: itemHeight }}>
                  <div className="gallery-item-container visible" style={{ width: columnWidth - 10, margin: 5, top: 0, left: 0 }}>
                    <div className="gallery-item-wrapper visible" style={{ height: itemHeight - 10 }}>
                      <div className="gallery-item gallery-item-visible">
                        <img className="gallery-item gallery-item-visible" src={galleryMedia.cover}/>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="gallery-column" style={{ width: columnWidth, paddingTop: 0 }}>
          {
              galleryMedias.filter((gm, i) => i % 2 === 1).map((galleryMedia, i) => (
                <div key={i} className="gallery-group gallery-group-visible" style={{ width:columnWidth, height: itemHeight }}>
                  <div className="gallery-item-container visible" style={{ width: columnWidth - 10, margin: 5, top: 0, left: 0 }}>
                    <div className="gallery-item-wrapper visible" style={{ height: itemHeight - 10 }}>
                      <div className="gallery-item gallery-item-visible">
                        <img className="gallery-item gallery-item-visible" src={galleryMedia.cover}/>
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

export default GridGalleryLayout;
