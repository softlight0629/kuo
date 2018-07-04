import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import cssrender from '../../../../../helper/cssrender';
import './index.less';

class AstvGallery extends Component {

  render() {
    const { rect: { width, height } } = this.props.astm.spec;    
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
                      src="https://static.wixstatic.com/media/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ast-gallery-thumbnails" style={{ width, height: thumbnailWidth }}>
          <div className="gallery-column" style={{ width, height: thumbnailWidth }}>
            <div className="gallery-group" style={{ width: thumbnailWidth, height: thumbnailWidth }}>
              <div className="gallery-item-container">
                <div className="gallery-item-wrapper">
                  <div className="gallery-item">
                    <img
                      className="gallery-item" 
                      src="https://static.wixstatic.com/media/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/002cd4_2d48efc3227e47b3945a682eac7f3ae1~mv2_d_2869_3586_s_4_2.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-group" style={{ width: thumbnailWidth, height: thumbnailWidth }}>
              <div className="gallery-item-container">
                <div className="gallery-item-wrapper">
                  <div className="gallery-item">
                    <img
                      className="gallery-item" 
                      src="https://static.wixstatic.com/media/002cd4_bbd8be6bbeee46c48221e45c3a9a589f~mv2_d_3000_2000_s_2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/002cd4_bbd8be6bbeee46c48221e45c3a9a589f~mv2_d_3000_2000_s_2.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-group" style={{ width: thumbnailWidth, height: thumbnailWidth }}>
              <div className="gallery-item-container">
                <div className="gallery-item-wrapper">
                  <div className="gallery-item">
                    <img
                      className="gallery-item" 
                      src="https://static.wixstatic.com/media/002cd4_769319a2d138444cb19990885128f2c7~mv2_d_3000_2000_s_2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/002cd4_769319a2d138444cb19990885128f2c7~mv2_d_3000_2000_s_2.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-group" style={{ width: thumbnailWidth, height: thumbnailWidth }}>
              <div className="gallery-item-container">
                <div className="gallery-item-wrapper">
                  <div className="gallery-item">
                    <img
                      className="gallery-item" 
                      src="https://static.wixstatic.com/media/002cd4_3c9c2a08f9274b16a00c0c9bbabbba70~mv2_d_3000_2930_s_4_2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/002cd4_3c9c2a08f9274b16a00c0c9bbabbba70~mv2_d_3000_2930_s_4_2.webp"
                    />
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

export default AstvGallery;
