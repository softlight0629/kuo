import React,  { Component } from 'react';
import { withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';

import SiteStructure from './SiteStructure';
import { SiteSavePanel }  from './Panel';
import ToolBar from './ToolBar';

import SketchBoard from './SketchBoard';

import './index.less';

@withRouter
@inject('workSpaceStore', 'authStore')
@observer
class WorkSpace extends Component {

  componentDidMount() {
    const { match } = this.props;
    this.props.workSpaceStore.fetch(match.params.guid);
  }

  render() {
    return (
      <div className="workspace">
        <SiteSavePanel />
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
