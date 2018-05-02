import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

@withRouter
@inject('workSpaceStore', 'sketchBoardStore')
@observer
class ToolBar extends Component {

  handleSaveSite() {
    this.props.workSpaceStore.save();
  }

  handleAddPageResorce() {
    // this.props.workSpaceStore.addPageResource({
    //   name: 'Contact',
    //   template: 'contact page',
    // });

    this.props.sketchBoardStore.addAst({
      spec: {
        rect: {
          width: 216,
          height: 48,
          x: 100,
          y: 100,
        },
        style: {
          fill: {
            color: '#d3b5c6',
          },
        },
      }
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
              <div style={{ position: 'relative', height: '100%' }}>
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
