import React, { Component } from 'react';
import PanelWrapper from '../../PanelWrapper';
import { Icon, Input, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

@inject('designPanelUiStore', 'mediaLibraryStore')
@observer
class ManageMedia extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  componentDidMount() {
    const { medias } = this.props.astm.store;
    if (!this.state.selected) {
      this.setState({
        selected: medias[0],
      });
    }
  }

  close() {
    this.props.designPanelUiStore.closeManageMediaPanel();
  }

  replaceImage() {
    const media = this.state.selected;

    this.props.mediaLibraryStore.choose((selectedMedia) => {
      media.replaceImage(selectedMedia.fileUrl);
    });
  }

  selectMedia(media) {
    this.setState({
      selected: media,
    })
  }
  
  render() {
    const { store } = this.props.astm;
    const { medias } = store;

    return (
      <PanelWrapper title="Organize Your Gallery" width={1152} onClose={this.close.bind(this)}>
        <div className="organize-media">
          <div className="om-content">
            <div className="om-sidebar menu right">
              <div className="sidebar-header">
                <div className="sidebar-header-image">
                  <div className="sidebar-header-image-wrapper">
                  </div>
                </div>
              </div>
              <div className="sidebar-border"></div>
              <div className="sidebar-divider replace">
                <Button className="sidebar-button" onClick={() => this.replaceImage()}>
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
                <div className="photos-upload">
                  <Button>+ Add Media</Button>
                </div>
                <div className="icons-container">
                  <Icon type="dashboard" />
                  <Icon type="bar-chart" />
                  <Icon type="search" />
                </div>
              </div>
              <div className="subheader">
                <div className="photos-actions">
                  <span className="">1 Selected</span>
                  <span className="separator">|</span>
                  <a>Actions</a>
                </div>
              </div>
            </div>
            <div className="subheader-divider" />
            <div className="om-photos-dialog">
              <div className="photos-container om-organize-images">
                <div className="photos-wrapper">
                  <ul className="items-wrapper">
                    {
                      medias.map((media, i) => (
                        <li key={i} className="item-wrapper" style={{ width: media.width, height: media.height }} onClick={() => this.selectMedia(media)}>
                          <div className="item" style={{ backgroundImage: `url(${media.pictureUrl})`}}>
                            <div className="item-details">
                              <div className="actions-menu"></div>
                            </div>
                          </div>
                        </li>
                      ))
                    }
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
