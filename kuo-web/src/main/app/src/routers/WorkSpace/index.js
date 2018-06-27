import React,  { Component } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

import SiteStructure from './SiteStructure';
import { SiteSavePanel, MediaGallery }  from './Panel';
import ToolBar from './ToolBar';

import SketchBoard from './SketchBoard';

import './index.less';

@withRouter
@inject('workSpaceStore', 'workSpaceUiStore', 'authStore')
@observer
class WorkSpace extends Component {

  componentDidMount() {
    const { match } = this.props;
    this.props.workSpaceStore.fetch(match.params.guid);
  }

  render() {
    const { mediaGalleryVisible } = this.props.workSpaceUiStore;

    return (
      <div className="workspace">
        <SiteSavePanel />
        { mediaGalleryVisible && <MediaGallery /> }
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
