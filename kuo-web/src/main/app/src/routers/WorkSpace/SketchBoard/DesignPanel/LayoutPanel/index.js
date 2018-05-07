import React, { Component } from 'react';
import { Slider, Icon } from 'antd';
import PanelWrapper from '../PanelWrapper';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

@withRouter
@inject('designPanelUiStore')
@observer
class LayoutPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeLayoutPanel();
  }

  render() {
    return (
      <PanelWrapper title="Button Layouts" onClose={this.close.bind(this)}> 
        <div className="layout-panel">
          <div className="panel-section panel-section-with-thumbnails">
            <div className="panel-section-label">
              <span>How's text aligned?</span>
            </div>
            <div className="panel-section-thumbnails">
              <div className="thumbnail-wrapper">
                <div className="control-thumbnail">
                  <div className="thumbnail-bg">
                    <Icon type="dashboard" />
                  </div>
                </div>
              </div>
              <div className="thumbnail-wrapper">
                <div className="control-thumbnail">
                  <div className="thumbnail-bg">
                    <Icon type="dashboard" />
                  </div>
                </div>
              </div>
              <div className="thumbnail-wrapper">
                <div className="control-thumbnail">
                  <div className="thumbnail-bg">
                    <Icon type="dashboard" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider-long" />
          <div className="panel-section panel-section-with-slider">
            <div className="panel-section-label">
              <span>where does it link to?</span>
            </div>
            
            <div className="panel-section-input">
              <Slider defaultValue={30} disabled={false} />
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default LayoutPanel;
