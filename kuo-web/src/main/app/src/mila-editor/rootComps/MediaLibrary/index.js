import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb, Button, Icon } from 'antd';
import * as _ from 'lodash';
import { observer, inject } from 'mobx-react';
import { editorAPIMixin, editorAPIMixinApi } from '@packages/mixin/editorAPIMixin';
import MediaPane from './mediaPane/mediaPane';

import Upload from 'rc-upload';

import './index.less';

const TabPane = Tabs.TabPane;

@inject('mediaLibraryStore', 'mediaLibraryUiStore', 'sketchBoardStore', 'workSpaceUiStore')
@observer
class MediaLibrary extends Component {

  constructor(props) {
    super(props);

    editorAPIMixinApi(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible){
      const editorAPI = this.getEditorAPI();

      editorAPI.mediaGallery.fetchCategoryFolders();
      editorAPI.mediaGallery.fetchCategoryMedias();
    }
  }

  choose() {
    const editorAPI = this.getEditorAPI();
    const { callback } = this.props;

    const selectedMedias = editorAPI.mediaGallery.getSelectedMedias();
    callback && callback(selectedMedias);
  }

  close() {
    this.getEditorAPI().mediaGallery.closeMediaGallery();
  }

  fetchPane(paneType) {
    this.props.mediaLibraryUiStore.fetchPane(paneType);
  }

  render() {
    const { visible, categoryFolders, medias } = this.props;

    this.uploadProps = {
      action: 'http://192.168.1.102:8085/api/v1/medias',
      // data: { guid: currentPane.currentCategory && currentPane.currentCategory.guid },
      multiple: true,
      beforeUpload: file => {
        console.log(file.name);
      },
      onStart: file => {
        console.log(file.name);
      },
      onSuccess: file => {
        // currentPane.reload();
      },
      onProgress: file => {
        console.log(file.name);
      },
      onError: err => {
        console.log(err);
      },
    };

    // console.log(currentPane, 'current....');
    return (
      <Modal
        title="Choose Images"
        visible={visible}
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
          defaultActiveKey="myImages" 
          // activeKey={currentPane.paneType ? currentPane.paneType : 'myUploads'} 
          animated={false}
          onChange={activeKey => this.fetchPane(activeKey)}
        >
          <TabPane tab="My Images" key="myImages">
            <MediaPane categoryFolders={categoryFolders} medias={medias} editorAPI={this.getEditorAPI()}/>
            {/* {currentPane.paneType === 'myUploads' && <MyUploadPane pane={currentPane} mediaLibraryUiStore={mediaLibraryUiStore} /> } */}
          </TabPane>
          <TabPane tab="Social Images" key="socials">Content of Tab Pane 2</TabPane>
          <TabPane tab="Free From Wix" key="frees">
            {/* {currentPane.paneType === 'frees' && <FreePane pane={currentPane} mediaLibraryUiStore={mediaLibraryUiStore} /> } */}
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
}

export default editorAPIMixin(MediaLibrary);
