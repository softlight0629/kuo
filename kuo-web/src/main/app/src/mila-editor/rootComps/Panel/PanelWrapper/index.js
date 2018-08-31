import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { Icon, Slider, Tabs, Button } from 'antd';

import './index.less';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

const TabPane = Tabs.TabPane;

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
    const { title, width = 288, onDone } = this.props;

    console.log({ x: this.state.x, y: this.state.y }, 'xxxsasdas');
    return (
      <Rnd
        position={{ x: this.state.x, y: this.state.y }}
        dragHandleClassName=".panel-header"
        style={{ zIndex: 999 }}
        onDragStop={(e, d) => { this.setState({ x:d.x, y:d.y})}}
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
          {
            onDone && (
              <footer className="panel-footer">
                <Button className="footer-btn cancel-btn">
                  <span>Cancel</span>
                </Button>
                <Button className="footer-btn done-btn" onClick={e => onDone(e)}>
                  <span>Done</span>
                </Button>
              </footer>
            )
          }
        </div>
      </Rnd>
    )
  }
}

export default PanelWrapper;
