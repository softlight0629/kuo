import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb } from 'antd';
import { observer, inject } from 'mobx-react';
import FreePane from './FreePane';

import './index.less';

const TabPane = Tabs.TabPane;

@inject('mediaLibraryStore', 'mediaLibraryUiStore', 'sketchBoardStore', 'workSpaceUiStore')
@observer
class MediaLibrary extends Component {

  componentDidMount() {
    // this.props.mediaLibraryUiStore.fetch();
  }

  toggle(picture) {
    this.props.mediaLibraryStore.selectPicture(picture);
  }

  choose() {
    this.props.mediaLibraryStore.appendToSkecthBoard();
  }

  close() {
   this.props.mediaLibraryUiStore.close(); 
  }

  render() {
    const { currentPane, mediaLibraryVisible } = this.props.mediaLibraryUiStore;

    return (
      <Modal
        title="Choose Images"
        visible={mediaLibraryVisible}
        width={1024}
        style={{ top: 50 }}
        wrapClassName="media-library"
        onOk={() => this.choose()}
        onCancel={() => this.close()}
      >
        <Tabs defaultActiveKey="myUploads" activeKey={currentPane.paneType ? currentPane.paneType : 'myUploads'} animated={false}>
          <TabPane tab="My Images" key="myUploads"></TabPane>
          <TabPane tab="Social Images" key="socials">Content of Tab Pane 2</TabPane>
          <TabPane tab="Free From Wix" key="frees">
            <FreePane pane={currentPane} />
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}

export default MediaLibrary;
