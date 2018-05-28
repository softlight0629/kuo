import React, { Component } from 'react';
import { Icon, Slider, Tabs, Select, InputNumber } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Divider,
  ColorPickerOpacity,
  ColorPicker,
  InputSlider,
  Dropdown,
  CornerRadius,
  TextButtonGroup,
} from '../../Component';
import ThemeButton from '../../../ThemeButton';

import './index.less';

import PanelWrapper from '../../PanelWrapper';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

const TextButton = TextButtonGroup.TextButton;

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
@inject('designPanelUiStore', 'astRefUiStore', 'themeStore')
@observer
class DesignPanel extends Component {

  renderBorderPane() {
    const { astm } = this.props.astRefUiStore;
    const { border } = astm.spec;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Border</span>
          <div className="section">
            <ColorPickerOpacity
              label="Opacity & Color"
              opacity={border.opacity}
              color={border.color}
              onOpacityChange={v => border.setOpacity(v)}
              onColorChange={color => border.setColor(color.hex)}
            />
            <Divider type="short" />
            <InputSlider label="Width" value={border.width} onChange={v => border.setWidth(v)} />
          </div>
        </div>
      </div>
    )
  }

  renderBorderCornerPane() {
    const { astm } = this.props.astRefUiStore;
    const { corner } = astm.spec;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Corners</span>
          <div className="section">
            <CornerRadius label="Radius" corner={corner} />
          </div>
        </div>
      </div>
    )
  }

  renderFillPane() {
    const { astm } = this.props.astRefUiStore;
    const { fill } = astm.spec;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Fill Color & Opacity</span>
          <div className="section">
            <ColorPickerOpacity
              label="Background"
              opacity={fill.opacity}
              color={fill.color}
              onOpacityChange={v => fill.setOpacity(v)}
              onColorChange={color => fill.setColor(color.hex)}
            />
          </div>
        </div>
      </div>
    )
  }

  renderShadowPane() {
    const { astm } = this.props.astRefUiStore;
    const { shadow } = astm.spec;

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Shadow</span>
          <div className="section">
            <InputSlider label="Angle" value={shadow.angle} onChange={v => shadow.setAngle(v)} max={360} min={0} />
            <Divider type="short" />
            <InputSlider label="Distance" value={shadow.distance} onChange={v => shadow.setDistance(v)} />
            <Divider type="short" />
            <InputSlider label="Size" value={shadow.size} onChange={v => shadow.setSize(v)} min={0} />
            <Divider type="short" />
            <InputSlider label="Blur" value={shadow.blur} onChange={v => shadow.setBlur(v)} min={0} />
            <Divider type="short" />
            <InputSlider label="Opacity" value={shadow.opacity} onChange={v => shadow.setOpacity(v)} min={0} />
          </div>
        </div>
      </div>
    )
  }

  renderTextPane() {
    const { astm } = this.props.astRefUiStore;
    const { font } = astm.spec;
    const children = [];
    for (let i = 0; i < Fonts.length; i++) {
      children.push(<Option key={i} value={Fonts[i]} style={{ fontFamily: Fonts[i] }} >{Fonts[i]}</Option>);
    }

    return (
      <div className="inner-container">
        <div className="content-wrapper">
          <span className="tab-text">Text</span>
          <div className="section">
            <ColorPicker label="Color" value={font.color} onChange={color => font.setColor(color.hex)} />
            <Divider type="short" />
            <InputSlider label="Font size" value={font.fontSize} onChange={v => font.setFontSize(v)} min={1} />
            <Divider type="short" />
            <Dropdown label="Font" value={font.fontFamily} onChange={v => font.setFontFamily(v)} options={children} />
            <Divider type="short" />
            <TextButtonGroup>
              <TextButton label={<Icon type="bold" />} onClick={() => font.toggleBold()} />
              <TextButton label={<Icon type="italic" />} onClick={() => font.toggleItalic()} style={{ fontSize: 18 }} />
            </TextButtonGroup>
          </div>
        </div>
      </div>
    )
  }

  close() {
    this.props.designPanelUiStore.closeDesignPanel();
  }

  renderThemePanel() {
    const { themesOfMenu } = this.props.themeStore;

    console.log(themesOfMenu, 'sdddmmm');
    return (
      <div className="theme-wrapper">
        {
          themesOfMenu.map(theme => <ThemeButton astm={theme}/>)
        }
      </div>
    )
  }

  renderCustomPanel = () => (
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
  )

  render() {

    // 抽象出来， 要支持 theme
    return (
      <PanelWrapper title="Button Setttings" onClose={this.close.bind(this)}>
        <div className="advanced-style-panel">
          <div className="advanced-style-panel-header"></div>
          <div className="advanced-style-panel-body">
            <div className="content-container">
              {this.renderThemePanel()}
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default DesignPanel;
