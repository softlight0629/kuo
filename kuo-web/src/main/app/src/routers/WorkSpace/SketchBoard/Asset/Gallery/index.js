import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import cssrender from '../../../../../helper/cssrender';
import './index.less';

@observer
class AstvGallery extends Component {

  render() {
    const { rect: { width, height } } = this.props.astm.spec;
    const { medias } = this.props.astm.store;
    const thumbnailWidth = 147;
    const containerHeight = height - thumbnailWidth - 9;

    return (
      <div className="ast-gallery">
        <div className="ast-gallery-container">
          <div className="gallery-column">
            <div className="gallery-group" data-group-idx="1" style={{ width, height: containerHeight }}>
              <div className="gallery-item-container" style={{ width, margin: 0, top: 0, left: 0 }}>
                <div className="gallery-item-wrapper" style={{ height: containerHeight }}>
                  <div className="gallery-item">
                    <img
                      className="gallery-item"
                      src={medias[0].pictureUrl}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ast-gallery-thumbnails" style={{ width, height: thumbnailWidth }}>
          <div className="gallery-column" style={{ width, height: thumbnailWidth }}>
            {
              medias.map(media => (
                <div className="gallery-group" style={{ width: thumbnailWidth, height: thumbnailWidth }}>
                  <div className="gallery-item-container">
                    <div className="gallery-item-wrapper">
                      <div className="gallery-item">
                        <img
                          className="gallery-item"
                          src={media.pictureUrl}
                        />
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

export default AstvGallery;
