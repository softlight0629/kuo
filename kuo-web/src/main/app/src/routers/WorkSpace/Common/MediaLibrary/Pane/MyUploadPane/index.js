import React, { Component } from 'react';
import { Modal, Tabs, Breadcrumb, Button, Icon, Input } from 'antd';
import { observer } from 'mobx-react';
import Upload from 'rc-upload';
import ScrollBar from '../../../../../../components/ScrollBar';

import './index.less';
@observer
class MyUploadPane extends Component {

  constructor(props) {
    super(props);

    this.state = {
      createFolderVisible: false,
      folderName: '',
    }
  }

  selectFolder(folder) {
    this.props.pane.selectFolder(folder);
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.addNewFolder();

      this.setState({ createFolderVisible: false });
    }
  }

  emitEmpty = () => {
    this.folderNameInput.focus();
    this.setState({ folderName: '' });
  }

  addNewFolder() {
    const { pane } = this.props;
    const { folders } = pane;

    const parentFolder = (folders.filter(folder => !folder.parentGuid))[0];
    this.props.pane.addNewFolder(this.state.folderName, parentFolder.guid);
  }

  onFolderNameChange(e) {
    this.setState({
      folderName: e.target.value,
    });
  }

  showFolderNameInput() {
    if (!this.state.createFolderVisible) {
      this.setState({ createFolderVisible: true });
      this.emitEmpty();
    }
  }

  render() {
    const { pane } = this.props;
    const { folders = [], medias = [], currentFolder = {} } = pane;

    const uploadProps = {
      action: 'http://192.168.1.102:8085/api/v1/medias',
      type: 'drag',
      data: { guid: currentFolder && currentFolder.guid },
      multiple: true,
      beforeUpload: file => {
        console.log(file.name);
      },
      onStart: file => {
        console.log(file.name);
      },
      onSuccess: file => {
        pane.reload();
      },
      onProgress: file => {
        console.log(file.name);
      },
      onError: err => {
        console.log(err);
      },
      style: { display: 'inline-block', width: '100%', height: '100%' },
    };

    return (
      <div className="content-wrapper">
        <div className="sidebar">
          <div className="sidebar-inner">
            <div className="folders-container">
              <ScrollBar>
                <div className="folders">
                  <ul className="folder-list">
                    {
                      folders.filter(folder => !!folder.parentGuid).map(folder => (
                        <li className="folder-list-item" onClick={() => this.selectFolder(folder)}>
                          <div className="name">
                            <div className="name-inner">{folder.name}</div>
                          </div>
                        </li>
                      ))
                    }
                    <li className={`folder-list-item ${this.state.createFolderVisible ? '' : 'hide-add-folder'}`} >
                      <div className="add-folder-input">
                        <Input
                          onKeyDown={e => this.onKeyDown(e)}
                          value={this.state.folderName}
                          onChange={e => this.onFolderNameChange(e)}
                          ref={node => this.folderNameInput = node}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollBar>
            </div>
            <Button className="add-folder" onClick={() => this.showFolderNameInput()}>
              <Icon type="plus-circle-o" />Add New Folder
              </Button>
          </div>
        </div>
        <div className="entities-wrapper">
          {
            medias.length <= 0 && (
              <div className="no-entities-placeholder">
                <Upload {...uploadProps} >
                  <div className="no-entities">
                    <h3>Start Adding Files to "asd". It's Easy!</h3>
                    <div className="description">
                      <span>
                        Drag and drop them here, or click Upload Images.
                          <br />
                        Your images will also appear in your Site Media folder, so they're easy to find and use.
                        </span>
                    </div>
                  </div>
                </Upload>
              </div>
            )
          }
          {
            medias.length > 0 && (
              <ScrollBar>
                <div className="entities-grid">
                  <Breadcrumb>
                    <Breadcrumb.Item>{currentFolder.name === '/' ? 'All Media' : currentFolder.name }</Breadcrumb.Item>
                  </Breadcrumb>
                  <ul className="items">
                    {
                      medias.map(media => (
                        <li className="item">
                          <div className="image"
                            style={{ backgroundImage: `url(${media.cover})` }}
                            onClick={() => this.toggle(media)}
                          />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </ScrollBar>
            )
          }
        </div>
      </div>
    )
  }
}

export default MyUploadPane;
