import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class CollageGalleryLayout extends Component {

  render() {
    const { galleryMedias } = this.props.astm.store;

    return (
      <div className="collage-layout">
        <div className="gallery-container" style={{ width: 898, height: '100%', overflowX: 'hidden' }}>
          <div className="gallery-column" style={{ width: 898, paddingTop: 0 }}>
            <div className="gallery-group gallery-group-visible" style={{ width: 457, height: 508 }}>
              <div className="gallery-item-container visible" style={{ width: 152, margin: 5, top: 0, left:0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 190 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[0].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 285, margin: 5, top: 0, right: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 190 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[1].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 447, margin: 5, bottom: 0, left: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 298 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[2].cover} />
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-group gallery-group-visible" style={{ width: 441, height: 508 }}>
              <div className="gallery-item-container visible" style={{ width: 208, margin: 5, top: 0, left:0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 202 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[3].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 213, margin: 5, top: 0, right: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 202 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[4].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 431, margin: 5, bottom: 0, left: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 286 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[5].cover} />
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-group gallery-group-visible" style={{ width: 898, height: 866 }}>
              <div className="gallery-item-container visible" style={{ width: 475, margin: 5, top: 0, left:0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 268 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[3].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 403, margin: 5, top: 0, right: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 268 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[4].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 888, margin: 5, bottom: 0, left: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 578 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[5].cover} />
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-group gallery-group-visible" style={{ width: 898, height: 960 }}>
              <div className="gallery-item-container visible" style={{ width: 888, margin: 5, top: 0, left:0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 594 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[3].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 344, margin: 5, bottom: 0, left: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 346 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[4].cover} />
                  </div>
                </div>
              </div>
              <div className="gallery-item-container visible" style={{ width: 534, margin: 5, bottom: 0, right: 0 }}>
                <div className="gallery-item-wrapper visible" style={{ height: 346 }}>
                  <div className="gallery-item gallery-item-visible">
                    <img className="gallery-item-visible gallery-item" src={galleryMedias[5].cover} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CollageGalleryLayout;
