import React,  { Component } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';
import stateManagement from '@packages/stateManagement/stateManagement';

import SiteStructure from './LeftSiteTree';
import MediaLibrary from './MediaLibrary';
import ToolBar from './TopBar';

import SketchBoard from './SketchBoard';
import './editor.less';

@inject('workSpaceStore', 'authStore')
@observer
class WorkSpace extends Component {

  componentDidMount() {
    this.props.workSpaceStore.fetch('7ff1b5e9-aa01-47ff-b1b5-e9aa0107ffaf');
  }

  render() {
    const { mediaGallery } = stateManagement;

    return (
      <div className="workspace">
        <MediaLibrary visible={mediaGallery.visible} {...mediaGallery.props} categoryFolders={mediaGallery.categoryFolders} medias={mediaGallery.medias} />
        <div className="workspace-wrapper">
          <div className="pane-container">
            <SiteStructure />
            <SketchBoard />
          </div>
        </div>
        <ToolBar />
      </div>
    )
  }
}

export default WorkSpace;
