import React, { Component } from 'react';
import { Icon, Slider, Tabs } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

import PanelWrapper from '../PanelWrapper';

const TabPane = Tabs.TabPane;

@withRouter
@inject('designPanelUiStore', 'colorPickerUiStore', 'astmRefUiStore')
@observer
class StylePanel extends Component {

  handleColorPickerComplete(color) {
    const { astm } = this.props.astmRefUiStore;
    astm.fillColor(color.hex);
  }

  showColorPicker() {
    this.props.colorPickerUiStore.show();
    this.props.colorPickerUiStore.callback(this.handleColorPickerComplete.bind(this));
  }

  renderBorderPane() {
    const { astm } = this.props.astmRefUiStore;
    const { color, opacity, width } = astm.spec.style.border;

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
                  <div className="color-picker-color" style={{ backgroundColor: color, opacity }}></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="label">Width</label>
            <div className="input-slider">
              <div className="input-slider">
                <Slider defaultValue={width} disabled={false} onChange={v => astm.spec.borderWidth(v) }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFillPane() {
    const { astm } = this.props.astmRefUiStore;

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
    const { astm } = this.props.astmRefUiStore;

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

  close() {
    this.props.designPanelUiStore.closeStylePanel();
  }

  render() {
    return (
      <PanelWrapper title="Button Setttings" onClose={this.close.bind(this)}>
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
      </PanelWrapper>
    )
  }
}

export default StylePanel;
