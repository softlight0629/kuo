import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PanelWrapper from '../../PanelWrapper';
import ScrollBar from '../../../../../../components/ScrollBar';
import {
  RadioImageButtonGroup,
  SectionDivider,
  Divider,
  InputSlider,
} from '../../Component';
import './index.less';

class GallerySettingsPanel extends Component {

  close() {
  }

  render() {
    return (
      <PanelWrapper title="Gallery Settings" width={404} onClose={this.close.bind(this)}>
        <div className="gallery">
          <div className="tabs">
            <div className="tabs-menu">
              <div>
                <span className="tab-wrapper">
                  <div className="tab-label">
                    <div classNme="label-text">Layout</div>
                  </div>
                </span>
              </div>
              <div>
                <span className="tab-wrapper">
                  <div className="tab-label">
                    <div classNme="label-text">Settings</div>
                  </div>
                </span>
              </div>
              <div>
                <span className="tab-wrapper">
                  <div className="tab-label">
                    <div classNme="label-text">Design</div>
                  </div>
                </span>
              </div>
            </div>
            <div className="settings-panel">
              <ScrollBar>
                <div className="content-wrapper">
                  <div className="tab-content">
                    <RadioImageButtonGroup />
                    <Divider type="long" />
                    <SectionDivider content="Image Display" />
                    <Divider type="long" />
                    <div className="control-thumbnails with-title" data-max-thumbs-per-row="4">
                      <div className="title">Thumbnail Placement</div>
                      <label className="radio-control">
                        <div className="image-radio">
                          <img src="https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-bottom-reg.svg" />
                        </div>
                      </label>
                      <label className="radio-control">
                        <div className="image-radio">
                          <img src="https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-bottom-reg.svg" />
                        </div>
                      </label>
                      <label className="radio-control">
                        <div className="image-radio">
                          <img src="https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-bottom-reg.svg" />
                        </div>
                      </label>
                      <label className="radio-control">
                        <div className="image-radio">
                          <img src="https://static.parastorage.com/services/pro-gallery-statics/2.561.0/assets/images/settings/thmb-align/thmb-bottom-reg.svg" />
                        </div>
                      </label>
                    </div>
                    <Divider type="long" />
                    <SectionDivider content="How Should it Look?" />
                    <Divider type="long" />
                    <InputSlider label="Thumbnail Spacing" />
                  </div>
                </div>
              </ScrollBar>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default GallerySettingsPanel;
