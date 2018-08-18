import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb, Button, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import FreePane from './FreePane';
import MyUploadPane from './MyUploadPane';

import Upload from 'rc-upload';

import './index.less';

const TabPane = Tabs.TabPane;

@inject('mediaLibraryStore', 'mediaLibraryUiStore', 'sketchBoardStore', 'workSpaceUiStore')
@observer
class MediaLibrary extends Component {

  choose() {
    this.props.mediaLibraryUiStore.done();
    this.close();
  }

  close() {
   this.props.mediaLibraryUiStore.close(); 
  }

  fetchPane(paneType) {
    this.props.mediaLibraryUiStore.fetchPane(paneType);
  }

  render() {
    const { mediaLibraryUiStore } = this.props;
    const { currentPane, mediaLibraryVisible } = mediaLibraryUiStore;
    this.uploadProps = {
      action: 'http://192.168.1.102:8085/api/v1/medias',
      data: { guid: currentPane.currentCategory && currentPane.currentCategory.guid },
      multiple: true,
      beforeUpload: file => {
        console.log(file.name);
      },
      onStart: file => {
        console.log(file.name);
      },
      onSuccess: file => {
        currentPane.reload();
      },
      onProgress: file => {
        console.log(file.name);
      },
      onError: err => {
        console.log(err);
      },
    };

    console.log(currentPane, 'current....');
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
        <div className="upload-btn">
          <Upload {...this.uploadProps} >
            <Button>
              <Icon type="upload" />Upload Images
            </Button>
          </Upload>
        </div>
        <Tabs 
          defaultActiveKey="myUploads" 
          activeKey={currentPane.paneType ? currentPane.paneType : 'myUploads'} 
          animated={false}
          onChange={activeKey => this.fetchPane(activeKey)}
        >
          <TabPane tab="My Images" key="myUploads">
            {currentPane.paneType === 'myUploads' && <MyUploadPane pane={currentPane} mediaLibraryUiStore={mediaLibraryUiStore} /> }
          </TabPane>
          <TabPane tab="Social Images" key="socials">Content of Tab Pane 2</TabPane>
          <TabPane tab="Free From Wix" key="frees">
            {currentPane.paneType === 'frees' && <FreePane pane={currentPane} mediaLibraryUiStore={mediaLibraryUiStore} /> }
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}

export default MediaLibrary;
