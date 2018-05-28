import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { Icon, Slider, Tabs } from 'antd';

import './index.less';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

const TabPane = Tabs.TabPane;

@withRouter
@inject('designPanelUiStore')
@observer
class PanelWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 100,
      y: 100,
    }
  }

  close() {
    this.props.onClose();
  }

  render() {
    const { title, width = 288 } = this.props;
    const { x, y } = this.props.designPanelUiStore;

    return (
      <Rnd
        position={{ x: x, y: y }}
        dragHandleClassName=".panel-header"
        onDragStop={(e, d) => { this.props.designPanelUiStore.position(d.x, d.y) }}
      >
        <div className="design-panel" style={{ width: `${width}px` }}>
          <header className="panel-header">
            <div className="panel-header-title">
              <div className="panel-header-title-content">
                <span className="panel-header">{ title }</span>
              </div>
            </div>
            <div className="panel-header-btns">
              <button className="panel-header-btn" onClick={() => this.close()}>
                <Icon type="close" />
              </button>
            </div>
          </header>
          <div className="panel-container">
            <div className="panel-inner-container">
              <div className="panel-content">
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </Rnd>
    )
  }
}

export default PanelWrapper;
