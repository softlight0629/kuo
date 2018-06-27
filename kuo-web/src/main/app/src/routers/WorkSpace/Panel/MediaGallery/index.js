import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb } from 'antd';
import { observer, inject } from 'mobx-react';
import './index.less';
import MediaResource from '../../../../models/media/MediaResource';

const TabPane = Tabs.TabPane;

@inject('mediaBoardStore', 'sketchBoardStore', 'workSpaceUiStore')
@observer
class MediaGallery extends Component {

  componentDidMount() {
    this.props.mediaBoardStore.fetch();
  }

  toggle(mediaResource) {
    this.props.mediaBoardStore.selectMediaResource(mediaResource);
  }

  choose() {
    this.props.mediaBoardStore.choose();
    this.props.workSpaceUiStore.closeMediaGallery();
  }

  render() {
    const { mediaResources, selectedMediaResources } = this.props.mediaBoardStore;
    const selectedIds = Object.keys(selectedMediaResources);

    return (
      <Modal
        title="Choose Images"
        visible={true}
        width={1024}
        wrapClassName="media-gallery"
        onOk={() => this.choose()}
      >
        <Tabs defaultActiveKey="1" animated={false}>
          <TabPane tab="My Images" key="1">
            <div className="content-wrapper">
              <div className="sidebar">
                <div className="sidebar-inner">
                  <div className="folders">
                    <ul className="folder-list">
                      <li className="folder-list-item">
                        <div className="name">
                          <div className="name-inner">All Categories</div>
                        </div>
                      </li>
                      <li className="folder-list-item">
                        <div className="name">
                          <div className="name-inner">Business</div>
                        </div>
                      </li>
                      <li className="folder-list-item">
                        <div className="name">
                          <div className="name-inner">Events & Nightkufe</div>
                        </div>
                      </li>
                      <li className="folder-list-item">
                        <div className="name">
                          <div className="name-inner">Fashion & Beauty</div>
                        </div>
                      </li>
                      <li className="folder-list-item">
                        <div className="name">
                          <div className="name-inner">Food & Drink</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="entities-wrapper">
                <div className="entities-grid">
                  <Breadcrumb>
                    <Breadcrumb.Item>Images</Breadcrumb.Item>
                    <Breadcrumb.Item>Animals</Breadcrumb.Item>
                  </Breadcrumb>
                  <ul className="items">
                    {
                      mediaResources.map(mediaResource => (
                        <li className={`item ${selectedIds.includes('mediaResource') ? 'selected': ''}`}>
                          <div className="image" 
                            style={{ backgroundImage: `url(${mediaResource.fileUrl})` }} 
                            onClick={() => this.toggle(mediaResource) }
                          />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Social Images" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Free rom Wix" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </Modal>
    )
  }
}

export default MediaGallery;
