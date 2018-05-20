import React, { Component } from 'react';
import { Icon, Slider, Tabs, Select, InputNumber, Radio } from 'antd';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Dropdown,
  InputSlider,
  Divider,
  ControlButtonGroup,
  Accordian,
  TextEffect,
  RadioButtonGroup,
} from '../../Component';
import PanelWrapper from '../../PanelWrapper';

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

const Option = Select.Option;
const TextEffectButton = TextEffect.TextEffectButton;
const ControlToggleButton = ControlButtonGroup.ControlToggleButton;
const ControlDropdownButtonGroup = ControlButtonGroup.ControlDropdownButtonGroup;
const ControlDropdownButtonOption = ControlDropdownButtonGroup.ControlDropdownButtonOption;

@withRouter
@inject('designPanelUiStore', 'astmRefUiStore')
@observer
class TextPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeEditTextPanel();
  }

  render() {
    const { font } = this.props.astm;

    const children = [];
    for (let i = 0; i < Fonts.length; i++) {
      children.push(<Option key={i} value={Fonts[i]} style={{ fontFamily: Fonts[i] }} >{Fonts[i]}</Option>);
    }

    return (
      <PanelWrapper title="Text Settings" onClose={this.close.bind(this)}>
        <div className="text-panel">
          <section className="text-theme-settings-section"></section>
          <div className="inner-container">
            <div className="content-wrapper">
              <div section="section">
                <Dropdown label="Theme" value={font.fontFamily} onChange={v => font.setFontFamily(v)} options={children} />
                <Divider type="long" />
                <Dropdown label="Fonts" value={font.fontFamily} onChange={v => font.setFontFamily(v)} options={children} />
                <Divider type="long" />
                <InputSlider label="Font size" value={font.fontSize} onChange={v => font.setFontSize(v)} />
                <Divider type="long" />
                <ControlButtonGroup >
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                </ControlButtonGroup>
                <Divider type="long" />
                <ControlButtonGroup >
                    <ControlDropdownButtonGroup label={<Icon type="bold" />} onChange={v => console.log(v)}>
                      <ControlDropdownButtonOption value="A" label={<Icon type="italic" />}/>
                      <ControlDropdownButtonOption value="B" label={<Icon type="italic" />}/>
                    </ControlDropdownButtonGroup>
                    <ControlDropdownButtonGroup label={<Icon type="bold" />} onChange={v => console.log(v)}>
                      <ControlDropdownButtonOption value="A" label={<Icon type="italic" />}/>
                      <ControlDropdownButtonOption value="B" label={<Icon type="italic" />}/>
                    </ControlDropdownButtonGroup>
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                    <ControlToggleButton label={<Icon type="bold" />} />
                </ControlButtonGroup>
                <Divider type="long" />
                <Accordian label="Effects" >
                  <TextEffect>
                    <span className="text-none-icon"></span>
                    <TextEffectButton key="effect_1" label="A" textShadow="rgba(255,255,255,0.6) 1px 1px 1px, rgba(0,0,0,0.6) -1px -1px 1px"/>
                    <TextEffectButton key="effect_2" label="B" textShadow="rgba(0,0,0,0.298) 0px 5px 0px"/>
                    <TextEffectButton key="effect_3" label="C" textShadow="rgba(0,0,0,0.4) 0px 4px 5px"/>
                    <TextEffectButton key="effect_4" label="D" textShadow="rgba(0,0,0,0.498) -1px -1px 0px, rgba(0,0,0,0.498) -1px 1px 0px,rgba(0,0,0,0.498) 1px 1px 0px,rgba(0,0,0,0.498) 1px -1px 0px"/>
                    <TextEffectButton key="effect_5" label="E" textShadow="rgba(255,255,255) -1px -1px 0px, rgba(255,255,255) -1px 1px 0px, rgba(255,255,255) 1px 1px 0px, rgba(255,255,255) 1px -1px 0px"/>
                    <TextEffectButton key="effect_6" label="F" textShadow="rgba(255,255,255) 0px 0px 6px"/>
                    <TextEffectButton key="effect_7" label="G" textShadow="rgb(200,200,200) 1px 1px 0px, rgb(180,180,180) 0px 2px 0px, rgb(160,160,160) 0px 3px 0px, rgb(140,140,140, 0.498) 0px 4px 0px, rgb(120,120,120) 0px 0px 0px, rgb(0,0,0,0.498) 0px 5px 10px"/>
                    <TextEffectButton key="effect_8" label="H" textShadow="rgb(255,255,255) 3px 3px 0px, rgba(0,0,0,0.2) 6px 6px 0px"/>
                    <TextEffectButton key="effect_9" label="I" textShadow="rgba(10,189,240,0.298) 3px 3px 0px, rgba(254,1,1,0.298) -3px -3px 0px"/>
                  </TextEffect>
                </Accordian>
                <Divider type="long" />
                <Accordian label="Character & Line Spacing" >
                  <InputSlider lable="Character spacing" value={10} onChange={(v) => console.log(v)}/>
                  <Divider type="long" />
                  <RadioButtonGroup label="Line spacing" value={1} >
                    <Radio value={1}>Automatic</Radio>
                    <Radio value={2}>Customize</Radio>
                  </RadioButtonGroup>
                </Accordian>
              </div>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default TextPanel;
