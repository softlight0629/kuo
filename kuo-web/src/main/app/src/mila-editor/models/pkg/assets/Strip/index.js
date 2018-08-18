import React, { Component } from 'react';
import { observable } from 'mobx';

@observer
class AstvStrip extends Component {

  render() {
    return (
      <div className="ast-strip">
        <section className="strc1">
          <div className="strc1-balata">
            <div className="strc-inline">
              <div className="mc1">
                <div className="mc1-container">
                  <div className="mc1-balata">
                    <div className="bg-color">
                      <div className="bg-color-overlay"></div>
                    </div>
                    <div className="bg-media">
                      <div className="bg-video">
                        <div className="bg-video-poster">
                          <img />
                        </div>
                      </div>
                    </div>
                    <div className="bg-overlay">
                      <div className="bg-overlay2">
                      </div>
                    </div>
                  </div>
                  <div className="mc1-inline-content-parent">
                    <div className="mc1-inline-content">
                      <div className="content-area-marker"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AstvStrip;
