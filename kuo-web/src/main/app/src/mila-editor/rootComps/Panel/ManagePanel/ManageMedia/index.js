import React, { Component } from 'react';
import PanelWrapper from '../../PanelWrapper';
import { Icon, Input, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

@inject('designPanelUiStore', 'mediaLibraryUiStore')
@observer
class ManageMedia extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  componentDidMount() {
    const { galleryMedias } = this.props.astm.store;
    if (!this.state.selected) {
      this.setState({
        selected: galleryMedias[0],
      });
    }
  }

  close() {
    this.props.designPanelUiStore.closeManageMediaPanel();
  }

  replaceImage() {
    const selected = this.state.selected;
    this.props.mediaLibraryUiStore.openWithPane('frees', selectedMedias => {
      selected.setCover(selectedMedias[0].cover);
    });
  }

  selectMedia(media) {
    this.setState({
      selected: media,
    })
  }

  addMedia() {
    const { store } = this.props.astm;
    this.props.mediaLibraryUiStore.openWithPane('frees', (selectedMedias) => {
      const galleryMedias = selectedMedias.map(selectedMedia => ({
        width: 96,
        height: 120,
        cover: selectedMedia.cover,
        mediaType: selectedMedia.mediaType,
      }));
      store.addGalleryMedias(galleryMedias);
    });
  }
  
  render() {
    const { store } = this.props.astm;
    const { galleryMedias } = store;
    const selected = this.state.selected || galleryMedias[0];

    return (
      <PanelWrapper title="Organize Your Gallery" width={1152} onClose={this.close.bind(this)}>
        <div className="organize-media">
          <div className="om-content">
            <div className="om-sidebar menu right">
              <div className="sidebar-header">
                <div className="sidebar-header-image">
                  <div className="sidebar-header-image-wrapper" style={{ backgroundImage: `url(${selected.cover})` }}>
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
                      <Input placeholder="Add your title here" value={selected.title} placeholder="Add your title here" />
                    </div>
                  </div>
                  <div className="composite-text-input-labeled">
                    <span className="control-label">Description</span>
                    <div className="input-container">
                      <Input placeholder="Describe your image" value={selected.description} placeholder="Describe your image"  />
                    </div>
                  </div>
                  <div className="composite-text-input-labeled">
                    <span className="control-label">Link</span>
                    <div className="input-container">
                      <Input placeholder="Link" value={selected.linkAddress} placeholder="Link"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="om-subheader">
              <div className="subheader-actions">
                <div className="photos-upload">
                  <Button onClick={this.addMedia.bind(this)}>+ Add Media</Button>
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
                      galleryMedias.map((media, i) => (
                        <li key={i} className="item-wrapper" style={{ width: media.width, height: media.height }} onClick={() => this.selectMedia(media)}>
                          <div className="item" style={{ backgroundImage: `url(${media.cover})`}}>
                            <div className="item-details">
                              <div className="figcaption">{i + 1}</div>
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
