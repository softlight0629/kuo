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
// import ThemeButton from '../../ThemeButton';
import PanelWrapper from '../../PanelWrapper';

import './index.less';
import SkinButtonSlider from '../../Component/SkinButtonSlider';

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

@inject('designPanelUiStore', 'astRefUiStore', 'astThemeUiStore', 'panelUiStore')
@observer
class DesignPanel extends Component {

  renderBorderPane(border) {

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

  renderBorderCornerPane(corner) {

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

  renderFillPane(fill) {

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

  renderShadowPane(shadow) {

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

  renderTextPane(font) {
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
    this.props.panelUiStore.closePanelByName('compPanels.design');
  }

  renderThemePanel() {
    const { astm } = this.props.astRefUiStore;
    const themes = this.props.astThemeUiStore.themesOfKind(astm.kind);

    return (
      <div className="theme-wrapper">
        {/* {
          themes.map(theme => <ThemeButton theme={theme} />)
        } */}
      </div>
    )
  }

  renderRegularPanel = ({ fill, border, corner, shadow, font }) => (
    <Tabs
      defaultActiveKey="1"
      tabPosition="left"
      tabBarStyle={{ width: 48, padding: 0 }}
      style={{ height: '100%' }}
    >
      <TabPane tab={<Icon type="fill-opacity" />} key="1">
        {this.renderFillPane(fill)}
      </TabPane>
      <TabPane tab={<Icon type="border" />} key="2">
        {this.renderBorderPane(border)}
      </TabPane>
      <TabPane tab={<Icon type="border-corner" />} key="3">
        {this.renderBorderCornerPane(corner)}
      </TabPane>
      <TabPane tab={<Icon type="box-shadow" />} key="4">
        {this.renderShadowPane(shadow)}
      </TabPane>
      <TabPane tab={<Icon type="font" />} key="5">
        {this.renderTextPane(font)}
      </TabPane>
    </Tabs>
  )

  renderStatePanel({ fill, border, corner, shadow, font }) {
    return (
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        tabBarStyle={{ width: 48, padding: 0 }}
        style={{ height: '100%' }}
      >
        {
          fill && (
            <TabPane tab={<Icon type="fill-opacity" />} key="1">
              {this.renderFillPane(fill)}
            </TabPane>
          )
        }
        {
          border && (
            <TabPane tab={<Icon type="border" />} key="2">
              {this.renderBorderPane(border)}
            </TabPane>
          )
        }
        {
          corner && (
            <TabPane tab={<Icon type="border-corner" />} key="3">
              {this.renderBorderCornerPane(corner)}
            </TabPane>
          )
        }
        {
          shadow && (
            <TabPane tab={<Icon type="box-shadow" />} key="4">
              {this.renderShadowPane(shadow)}
            </TabPane>
          )
        }
        {
          font && (
            <TabPane tab={<Icon type="font" />} key="5">
              {this.renderTextPane(font)}
            </TabPane>
          )
        }
      </Tabs>
    )
  }

  renderStateTabs = ({ spec, state: { hover, clicked, disabled } }) => (
    <Tabs
      defaultActiveKey="1"
      size="small"
      style={{ height: '100%' }}
    >
      <TabPane tab={<span>Regular</span>} key="1">
        {this.renderRegularPanel(spec)}
      </TabPane>
      {
        hover && (
          <TabPane tab={<span>Hover</span>} key="2">
            {this.renderStatePanel(hover)}
          </TabPane>
        )
      }
      {
        clicked && (
          <TabPane tab={<span>Clicked</span>} key="3">
            {this.renderStatePanel(clicked)}
          </TabPane>
        )
      }
      {
        disabled && (
          <TabPane tab={<span>Disabled</span>} key="3">
            {this.renderStatePanel(disabled)}
          </TabPane>
        )
      }
    </Tabs>
  )

  render() {
    const { astm } = this.props.astRefUiStore;
    // const skins = this.props.astSkinUiStore.skinsOfKind(astm.kind);

    return (
      <PanelWrapper title="Button Setttings" onClose={this.close.bind(this)}>
        <div className="advanced-style-panel">
          <div className="advanced-style-panel-header">
            {/* <SkinButtonSlider skins={skins} /> */}
          </div>
          <div className="advanced-style-panel-body">
            <div className="content-container">
              {/* {this.renderStateTabs(astm)} */}
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default DesignPanel;
