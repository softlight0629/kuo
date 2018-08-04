import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class ColumnGalleryLayout extends Component {

  render() {
    const { rect: { width, height } } = this.props.astm.spec;
    const { galleryMedias } = this.props.astm.store;

    return (
      <div className="column-layout">
        <div className="gallery-container one-row">
          <div className="gallery-column" style={{ width }}>
          {
            galleryMedias.map(galleryMedia =>(
              <div className="gallery-group gallery-group-visible" style={{ width: 252, height }}>
                <div className="gallery-item-container visible" style={{ width: 242, margin: 5, top: 0, left: 0 }}>
                  <div className="gallery-item-wrapper visible" style={{ height: height - 10 }}>
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

export default ColumnGalleryLayout;
