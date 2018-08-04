import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cssrender from '../../../../../../../helper/cssrender';
import './index.less';

@observer
class ThumbnailsGalleryLayout extends Component {

  render() {
    const { rect: { width, height } } = this.props.astm.spec;
    const { galleryMedias } = this.props.astm.store;
    const thumbnailWidth = 146;
    const containerHeight = height - thumbnailWidth - 15;

    return (
      <div className="thumbnails-layout">
        <div className="gallery-container">
          <div className="gallery-column">
            <div className="gallery-group" data-group-idx="1" style={{ width, height: containerHeight }}>
              <div className="gallery-item-container" style={{ width, margin: 0, top: 0, left: 0 }}>
                <div className="gallery-item-wrapper" style={{ height: containerHeight }}>
                  <div className="gallery-item">
                    <img className="gallery-item" src={galleryMedias[0].cover} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-thumbnails" style={{ width, height: thumbnailWidth, margin: '8.5px -8.5px 0px' }}>
          <div className="gallery-column" style={{ width: width + 60, height: thumbnailWidth }}>
            {
              galleryMedias.map(media => (
                <div className="gallery-group" style={{ width: thumbnailWidth, height: thumbnailWidth }}>
                  <div className="gallery-item-container" 
                    style={{ width: 129, margin: '8.5px', top: 0, left: 0, borderRadius: 0 }}
                  >
                    <div className="gallery-item-wrapper" style={{ height: 129, borderRadius: 0 }}>
                      <div className="gallery-item">
                        <img className="gallery-item" src={media.cover} />
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

export default ThumbnailsGalleryLayout;
