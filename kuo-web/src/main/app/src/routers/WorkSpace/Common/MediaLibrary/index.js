import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb } from 'antd';
import { observer, inject } from 'mobx-react';
import './index.less';
import { Picture } from '../../../../models/media';

const TabPane = Tabs.TabPane;

@inject('mediaLibraryStore', 'sketchBoardStore', 'workSpaceUiStore')
@observer
class MediaLibrary extends Component {

  componentDidMount() {
    this.props.mediaLibraryStore.fetch();
  }

  toggle(picture) {
    this.props.mediaLibraryStore.selectPicture(picture);
  }

  choose() {
    this.props.mediaLibraryStore.appendToSkecthBoard();
    this.props.workSpaceUiStore.closeMediaLibrary();
  }

  render() {
    const { pictures, selectedPics } = this.props.mediaLibraryStore;
    const pictureIds = Object.keys(selectedPics);

    return (
      <Modal
        title="Choose Images"
        visible={true}
        width={1024}
        wrapClassName="media-library"
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
                      pictures.map(picture => (
                        <li className={`item ${pictureIds.includes('mediaResource') ? 'selected': ''}`}>
                          <div className="image" 
                            style={{ backgroundImage: `url(${picture.fileUrl})` }} 
                            onClick={() => this.toggle(picture) }
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

export default MediaLibrary;
