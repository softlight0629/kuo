import React, { Component } from 'react';
import Rnd from 'react-rnd';
import { Icon, Slider, Tabs } from 'antd';

import './index.less';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

const TabPane = Tabs.TabPane;

@withRouter
@inject('designPanelUiStore', 'colorPickerUiStore')
@observer
class DesignPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 100,
      y: 100,
    }
  }

  handleColorPickerComplete(color) {
    const { astm } = this.props.designPanelUiStore;
    astm.fillColor(color.hex);
  }

  showColorPicker() {
    this.props.colorPickerUiStore.show();
    this.props.colorPickerUiStore.callback(this.handleColorPickerComplete.bind(this));
  }

  closeDesignPanel() {
    this.props.designPanelUiStore.hide();
  }

  renderBorderPane() {

    return (
      <div className="content">
        <span className="tab-text">Border</span>
        <div className="section">
          <div>
            <label className="color-picker-with-opacity-label">Opacity & Color</label>
            <div className="color-picker-with-opacity-slider">
              <div className="input-slider">
                <Slider defaultValue={30} disabled={false} />
              </div>
              <div className="color-picker-input">
                <div className="color-picker-wrapper">
                  <div className="color-picker-color" style={{ backgroundColor: 'rgb(0,0,0)', opacity: '0.82' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="label">Width</label>
            <div className="input-slider">
              <div className="input-slider">
                <Slider defaultValue={30} disabled={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFillPane() {
    const { astm } = this.props.designPanelUiStore;

    let color = '#000';

    if (astm) {
      color = astm.spec.style.fill.color;
    }

    return (
      <div className="content">
        <span className="tab-text">Fill Color & Opacity</span>
        <div className="section">
          <label className="color-picker-with-opacity-label">Background</label>
          <div className="color-picker-with-opacity-slider">
            <div className="input-slider">
              <Slider defaultValue={30} disabled={false} />
            </div>
            <div className="color-picker-input" onClick={() => this.showColorPicker()}>
              <div className="color-picker-wrapper">
                <div className="color-picker-color" style={{ backgroundColor: color, opacity: '0.82' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderShadowPane() {
    return (
      <div className="content">
        <span className="tab-text">Shadow</span>
        <div className="section">
          <div>
            <label className="label">Distance</label>
            <div className="input-slider">
              <div className="input-slider">
                <Slider defaultValue={30} disabled={false} />
              </div>
            </div>
          </div>
          <div>
            <label className="label">Size</label>
            <div className="input-slider">
              <div className="input-slider">
                <Slider defaultValue={30} disabled={false} />
              </div>
            </div>
          </div>
          <div>
            <label className="label">Blur</label>
            <div className="input-slider">
              <div className="input-slider">
                <Slider defaultValue={30} disabled={false} />
              </div>
            </div>
          </div>
          <div>
            <label className="label">Opacity & Color</label>
            <div className="input-slider">
              <div className="input-slider">
                <Slider defaultValue={30} disabled={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTextPane() {
    const { astm } = this.props.designPanelUiStore;

    return (
      <div className="content">
        <span className="tab-text">Text</span>
        <div className="section">
          <div>
            <label className="label">Font size</label>
            <div className="input-slider">
              <div className="input-slider">
                <Slider defaultValue={30} disabled={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { x, y } = this.props.designPanelUiStore;

    console.log(x, y, 'xy.....');
    return (
      <Rnd
        position={{ x: x, y: y }}
        onDragStop={(e, d) => { this.props.designPanelUiStore.position(d.x, d.y) }}
      >
        <div className="design-panel" >
          <header className="panel-header">
            <div className="panel-header-title">
              <div className="panel-header-title-content">
                <span className="panel-header">Button Design</span>
              </div>
            </div>
            <div className="panel-header-btns">
              <button className="panel-header-btn" onClick={() => this.closeDesignPanel()}>
                <Icon type="close" />
              </button>
            </div>
          </header>
          <div className="panel-container">
            <div className="panel-inner-container">
              <div className="panel-content">
                <div className="advanced-style-panel">
                  <div className="advanced-style-panel-header"></div>
                  <div className="advanced-style-panel-body">
                    <div className="content-container">
                      <Tabs
                        defaultActiveKey="1"
                        tabPosition="left"
                        style={{ height: '100%' }}
                      >
                        <TabPane tab={<Icon type="right-circle-o" />} key="1">
                          {this.renderFillPane()}
                        </TabPane>
                        <TabPane tab={<Icon type="dashboard" />} key="2">
                          {this.renderBorderPane()}
                        </TabPane>
                        <TabPane tab={<Icon type="logout" />} key="3">
                          {this.renderShadowPane()}
                        </TabPane>
                        <TabPane tab={<Icon type="inbox" />} key="4">
                          {this.renderTextPane()}
                        </TabPane>
                      </Tabs>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Rnd>
    )
  }
}

export default DesignPanel;
