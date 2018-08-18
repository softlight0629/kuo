import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import alignment from '../../../helper/alignment';

import './index.less';

@inject('workSpaceStore', 'sketchBoardStore')
@observer
class ToolBar extends Component {

  handleSaveSite() {
    this.props.workSpaceStore.save();
  }

  handleAddPageResorce() {
    this.props.workSpaceStore.addPageResource({
      name: 'BLOG',
      template: 'xx',
    });
  }

  alignment() {
    const alignItems = alignment.distributeX(this.props.sketchBoardStore.astms.map(astm => ({
      left: astm.spec.rect.x,
      top: astm.spec.rect.y,
      width: astm.spec.rect.width,
      height: astm.spec.rect.height,
    })));

    this.props.sketchBoardStore.astms.forEach((astm, i) => {
      const { left, top, width, height } = alignItems[i];
      astm.spec.rect.setPosition(left, top);
      astm.spec.rect.setSize(width, height);
    });
  }

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-wrapper">
          <div className="main-top-bar">
            <div className="top-bar-left-section">
              <div className="top-bar-logo"></div>
              <div className="quick-navigation-pp"></div>
              <div className="top-bar-menu-bar-wrapper">
                <div style={{ position: 'relative', height: '100%' }}>
                  <span className="top-bar-menu-bar-item">Site</span>
                </div>
                <div style={{ position: 'relative', height: '100%' }}>
                  <span className="top-bar-menu-bar-item">Tools</span>
                </div>
                <div style={{ position: 'relative', height: '100%' }}>
                  <span className="top-bar-menu-bar-item">Upgrade</span>
                </div>
                <div style={{ position: 'relative', height: '100%' }}>
                  <span className="top-bar-menu-bar-item">Help</span>
                </div>
              </div>
            </div>
            <div className="top-bar-right-section">
              <div style={{ position: 'relative', height: '100%' }}>
                <a className="top-bar-btn">
                  <span className="label" onClick={() => this.handleSaveSite() }>Save</span>
                </a>
              </div>
              <div style={{ position: 'relative', height: '100%' }}>
                <a className="top-bar-btn">
                  <span className="label" onClick={() => this.handleAddPageResorce()}>Preview</span>
                </a>
              </div>
              <div style={{ position: 'relative', height: '100%' }} onClick={() => this.alignment()}>
                <a className="top-bar-btn">
                  <span className="label">Publish</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rootcomp-toolbar"></div>
      </div>
    )
  }
}

export default ToolBar;
