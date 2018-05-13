import React, { Component } from 'react';
import { Icon, Slider, Tabs, Select, InputNumber } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';

import './index.less';

import PanelWrapper from '../PanelWrapper';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

const Fonts = [
  'Arial',
  'Osaka',
  'Textile',
  'Techno',
  'Maker Felt',
  'Sand',
  'Overlock',
  'Skia',
  'Times',
];



@withRouter
@inject('designPanelUiStore', 'colorPickerUiStore', 'astmRefUiStore')
@observer
class StylePanel extends Component {


  showColorPicker(cb) {
    this.props.colorPickerUiStore.show();
    this.props.colorPickerUiStore.callback(cb);
  }

  renderBorderPane() {
    const { astm } = this.props.astmRefUiStore;
    const { border } = astm.spec.style;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Border</span>
          <div className="section">
            <div className="color-picker-input-with-opacity">
              <label className="label">Opacity & Color</label>

              <div className="color-picker-input-with-opacity-slider">
                <div className="input-slider">
                  <div className="input-slider-container">
                    <Slider defaultValue={border.opacity} onChange={v => border.setOpacity(v)}/>
                    <InputNumber
                      min={0}
                      value={border.opacity}
                      onChange={v => border.setOpacity(v)}
                    />
                  </div>
                </div>
                <div className="color-picker-input" onClick={() => this.showColorPicker(color => border.setColor(color.hex))}>
                  <div className="color-picker-wrapper">
                    <div className="color-picker-color" style={{ backgroundColor: border.color, opacity: border.opacity / 100 }}></div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divider-short" />
            <div className="input-slider has-label">
              <label className="label">Width</label>
              <div className="input-slider-container">
                <Slider defaultValue={border.width} disabled={false} onChange={v => border.setWidth(v)} />
                <InputNumber
                  min={0}
                  value={border.width}
                  onChange={v => border.setWidth(v)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

  renderBorderCornerPane() {
    const { astm } = this.props.astmRefUiStore;
    const { corner } = astm.spec.style;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Corners</span>
          <div className="section">
            <div className="composite-corner-radius-input has-label">
              <label className="label">Radius</label>
              <div className="corner-radius-input">
                <div className="top">
                  <div className="control-corner top left">
                    <div className="input-container">
                      <InputNumber
                        min={0}
                        size="small"
                        value={corner.leftTop}
                        onChange={v => corner.setLeftTop(v)}
                      />
                    </div>
                    <div className="corner-border" style={{ borderTopLeftRadius: 48 }}></div>
                  </div>
                  <div className="control-corner top right">
                    <div className="input-container">
                      <InputNumber
                        min={0}
                        size="small"
                        value={corner.rightTop}
                        onChange={v => corner.setRightTop(v)}
                      />
                    </div>
                    <div className="corner-border" style={{ borderTopRightRadius: 48 }} ></div>
                  </div>
                </div>
                <div className="control-boolean link" onClick={() => corner.toggleCornerLink()}>
                  <Icon type="link" />
                </div>
                <div className="bottom">
                  <div className="control-corner bottom left">
                    <div className="input-container">
                      <InputNumber
                        min={0}
                        size="small"
                        value={corner.leftBottom}
                        onChange={v => corner.setLeftBottom(v)}
                      />
                    </div>
                    <div className="corner-border" style={{ borderBottomLeftRadius: 48 }}></div>
                  </div>
                  <div className="control-corner bottom right">
                    <div className="input-container">
                      <InputNumber
                        min={0}
                        size="small"
                        value={corner.rightBottom}
                        onChange={v => corner.setRightBottom(v)}
                      />
                    </div>
                    <div className="corner-border" style={{ borderBottomRightRadius: 48 }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

  renderFillPane() {
    const { astm } = this.props.astmRefUiStore;
    const { fill } = astm.spec.style;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Fill Color & Opacity</span>
          <div className="section">
            <div className="color-picker-input-with-opacity">
              <label className="label">Background</label>

              <div className="color-picker-input-with-opacity-slider">
                <div className="input-slider">
                  <div className="input-slider-container">
                    <Slider defaultValue={fill.opacity} onChange={v => fill.setOpacity(v)} />
                    <InputNumber
                      min={1}
                      value={fill.opacity}
                      onChange={v => fill.setOpacity(v)}
                    />
                  </div>
                </div>
                <div className="color-picker-input" onClick={() => this.showColorPicker(color => fill.setColor(color.hex))}>
                  <div className="color-picker-wrapper">
                    <div className="color-picker-color" style={{ backgroundColor: fill.color, opacity: fill.opacity / 100 }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderShadowPane() {
    const { astm } = this.props.astmRefUiStore;
    const { shadow } = astm.spec.style;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Shadow</span>
          <div className="section">
            <div className="input-slider has-label">
              <label className="label">Angle</label>
              <div className="input-slider-container">
                <Slider defaultValue={shadow.angle} onChange={v => shadow.setAngle(v)} max={360} min={0} />
              </div>
            </div>
            <hr className="divider-short" />
            <div className="input-slider has-label">
              <label className="panel-section-label">Distance</label>
              <div className="input-slider-container">
                <Slider defaultValue={shadow.distance} onChange={v => shadow.setDistance(v)} />
                <InputNumber
                  min={0}
                  value={shadow.distance}
                  onChange={v => shadow.setDistance(v)}
                />
              </div>
            </div>
            <hr className="divider-short" />
            <div className="input-slider has-label">
              <label className="label">Size</label>
              <div className="input-slider-container">
                <Slider defaultValue={shadow.size} onChange={v => shadow.setSize(v)} />
                <InputNumber
                  min={0}
                  value={shadow.size}
                  onChange={v => shadow.setSize(v)}
                />
              </div>
            </div>
            <hr className="divider-short" />
            <div className="input-slider has-label">
              <label className="label">Blur</label>
              <div className="input-slider-container">
                <Slider defaultValue={shadow.blur} onChange={v => shadow.setBlur(v)} />
                <InputNumber
                  min={0}
                  value={shadow.blur}
                  onChange={v => shadow.setBlur(v)}
                />
              </div>
            </div>
            <hr className="divider-short" />
            <div className="input-slider has-label">
              <label className="label">Opacity & Color</label>
              <div className="input-slider-container">
                <Slider defaultValue={shadow.opacity} onChange={v => shadow.setOpacity(v)} />
                <InputNumber
                  min={0}
                  value={shadow.opacity}
                  onChange={v => shadow.setOpacity(v)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTextPane() {
    const { astm } = this.props.astmRefUiStore;
    const { font } = astm.spec.style;
    const children = [];
    for (let i = 0; i < Fonts.length; i++) {
      children.push(<Option key={i} value={Fonts[i]} style={{ fontFamily: Fonts[i] }} >{Fonts[i]}</Option>);
    }

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Text</span>
          <div className="section">
            <div className="color-picker-input has-label" onClick={() => this.showColorPicker((color) => font.setColor(color.hex))}>
              <label className="label">Color</label>
              <div className="color-picker-wrapper">
                <div className="color-picker-color" style={{ backgroundColor: font.color }}></div>
              </div>
            </div>
            <hr className="divider-short" />
            <div className="input-slider has-label">
              <label className="label">Font size</label>
              <div className="input-slider-container">
                <Slider defaultValue={font.fontSize} onChange={v => font.setFontSize(v)} />
                <InputNumber
                  min={1}
                  value={font.fontSize}
                  onChange={v => font.setFontSize(v)}
                />
              </div>
            </div>
            <hr className="divider-short" />
            <div className="dropdown has-label">
              <label className="label">Font</label>
              <div className="dropdown-container">
                <Select
                  size="default"
                  defaultValue={font.fontFamily}
                  onChange={v => font.setFontFamily(v)}
                  style={{ width: '100%' }}
                >
                  {children}
                </Select>
              </div>
            </div>
            <hr className="divider-short" />
            <div className="text-buttons">
              <span>
                <label className="toggle-button" onClick={() => font.toggleBold()}>
                  <Icon type="bold" />
                </label>
              </span>
              <span>
                <label className="toggle-button" onClick={() => font.toggleItalic()} style={{ fontSize: 18 }}>
                  <Icon type="italic" />
                </label>
              </span>
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
                tabBarStyle={{ width: 48, padding: 0 }}
                style={{ height: '100%' }}
              >
                <TabPane tab={<Icon type="fill-opacity" />} key="1">
                  {this.renderFillPane()}
                </TabPane>
                <TabPane tab={<Icon type="border" />} key="2">
                  {this.renderBorderPane()}
                </TabPane>
                <TabPane tab={<Icon type="border-corner" />} key="3">
                  {this.renderBorderCornerPane()}
                </TabPane>
                <TabPane tab={<Icon type="box-shadow" />} key="4">
                  {this.renderShadowPane()}
                </TabPane>
                <TabPane tab={<Icon type="font" />} key="5">
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
