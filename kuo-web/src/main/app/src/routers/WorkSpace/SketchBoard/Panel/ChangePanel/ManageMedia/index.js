import React, { Component } from 'react';
import PanelWrapper from '../../PanelWrapper';
import { Icon, Input, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

class ManageMedia extends Component {

  close() {
    this.props.designPanelUiStore.closeManageMediaPanel();
  }
  
  render() {
    return (
      <PanelWrapper title="Organize Your Gallery" width={768} onClose={this.close.bind(this)}>
        <div className="organize-media">
          <div className="om-content">
            <div className="om-sidebar">
              <div className="sidebar-header">
                <div className="sidebar-header-image">
                  <div className="sidebar-header-image-wrapper"></div>
                </div>
              </div>
              <div className="sidebar-border"></div>
              <div className="sidebar-divider">
                <Button className="sidebar-button">
                  <span>
                    <div className="icon">
                      <Icon type="sync" />
                    </div>
                    <div className="text">Replace Image</div>                    
                  </span>
                </Button>
              </div>
              <div className="sidebar-content">
                <div className="item-info-content">
                  <div className="composite-text-input-labeled">
                    <span className="control-label">Title</span>
                    <div className="input-container">
                      <Input placeholder="Add your title here"/>
                    </div>
                  </div>
                  <div className="composite-text-input-labeled">
                    <span className="control-label">Description</span>
                    <div className="input-container">
                      <Input placeholder="Describe your image"/>
                    </div>
                  </div>
                  <div className="composite-text-input-labeled">
                    <span className="control-label">Link</span>
                    <div className="input-container">
                      <Input placeholder="Link"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="om-subheader">
              <div className="subheader-actions">
                <div className="photo-upload">
                  <Button>Add Media</Button>
                </div>
                <div className="icons-container">
                  <Icon type="search" />
                  <Icon type="bar-chart" />
                  <Icon type="dashboard" />
                </div>
              </div>
              <div className="subheader">
                <div className="photos-actions">
                  <span className="">1 Selected</span>
                  <span className="separator">|</span>
                  <span>Actions</span>
                </div>
              </div>
            </div>
            <div className="om-photos-dialog">
              <div className="photos-container om-organize-images">
                <div className="photos-wrapper">
                  <ul className="items-wrapper">
                    <div className="item-wrapper">
                      <div className="item">
                        <div className="item-details">
                          <div className="actions-menu"></div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="om-actions"></div>
        </div>
      </PanelWrapper>
    )
  }
}

export default ManageMedia;
