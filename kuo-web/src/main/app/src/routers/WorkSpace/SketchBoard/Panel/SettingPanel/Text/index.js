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

const Themes = [
  {
    text: 'Heading 1',
    value: 'h1',
    className: 'font_1',
  },
  {
    text: 'Heading 2',
    value: 'h2',
    className: 'font_2',
  },
  {
    text: 'Heading 3',
    value: 'h3',
    className: 'font_3',
  },
  {
    text: 'Heading 4',
    value: 'h4',
    className: 'font_4',
  },
  {
    text: 'Heading 5',
    value: 'h5',
    className: 'font_5',
  },
  {
    text: 'Heading 6',
    value: 'h6',
    className: 'font_6',
  },
  {
    text: 'Paragraph 1',
    value: 'p1',
    className: 'font_7',
  },
  {
    text: 'Paragraph 2',
    value: 'p2',
    className: 'font_8',
  },
  {
    text: 'Paragraph 3',
    value: 'p3',
    className: 'font_9',
  },
]

const Option = Select.Option;
const TextEffectButton = TextEffect.TextEffectButton;
const ControlToggleButton = ControlButtonGroup.ControlToggleButton;
const ControlDropdownButtonGroup = ControlButtonGroup.ControlDropdownButtonGroup;
const ControlDropdownButtonOption = ControlDropdownButtonGroup.ControlDropdownButtonOption;

@withRouter
@inject('designPanelUiStore', 'astRefUiStore', 'colorPickerUiStore')
@observer
class TextPanel extends Component {

  close() {
    this.props.designPanelUiStore.closeEditTextPanel();
  }

  showColorPicker(cb) {
    this.props.colorPickerUiStore.show();
    this.props.colorPickerUiStore.callback(cb);
  }

  render() {
    const { font, fill, textEffect, textAlign, textIndent, theme } = this.props.astm;

    const fonts = [];
    for (let i = 0; i < Fonts.length; i++) {
      fonts.push(<Option key={i} value={Fonts[i]} style={{ fontFamily: Fonts[i] }} >{Fonts[i]}</Option>);
    }

    const themes = [];
    for (let i = 0; i < Themes.length; i++) {
      themes.push(<Option key={i} value={Themes[i].value} className={Themes[i].className} >{Themes[i].text}</Option>);
    }

    return (
      <PanelWrapper title="Text Settings" onClose={this.close.bind(this)}>
        <div className="text-panel">
          <section className="text-theme-settings-section"></section>
          <div className="inner-container">
            <div className="content-wrapper">
              <div className="section">
                <Dropdown label="Theme" value={theme} onChange={v => this.props.astm.setTheme(v)} options={themes} />
                <Divider type="long" />
                <Dropdown label="Fonts" value={font.fontFamily} onChange={v => font.setFontFamily(v)} options={fonts} />
                <Divider type="long" />
                <InputSlider label="Font size" value={font.fontSize} onChange={v => font.setFontSize(v)} />
                <Divider type="long" />
                <ControlButtonGroup >
                    <ControlToggleButton label={<Icon type="bold" />} onClick={() => font.toggleBold()}/>
                    <ControlToggleButton label={<Icon type="italic" />} onClick={() => font.toggleItalic()} />
                    <ControlToggleButton label={<Icon type="underline" />} onClick={() => font.toggleUnderline()}  />
                    <ControlToggleButton label={<Icon type="color" />} onClick={() => this.showColorPicker(color => font.setColor(color.hex))}/>
                    <ControlToggleButton label={<Icon type="highlight" />} onClick={() => this.showColorPicker(color => font.setBgColor(color.hex))}/>
                    <ControlToggleButton label={<Icon type="link" />} />
                </ControlButtonGroup>
                <Divider type="long" />
                <ControlButtonGroup >
                    <ControlDropdownButtonGroup label={<Icon type="text-align-left" />} value={textAlign.align} onChange={v => textAlign.setAlign(v)}>
                      <ControlDropdownButtonOption value="left" label={<Icon type="text-align-left" />}/>
                      <ControlDropdownButtonOption value="center" label={<Icon type="text-align-center" />}/>
                      <ControlDropdownButtonOption value="right" label={<Icon type="text-align-right" />}/>
                      <ControlDropdownButtonOption value="jusity" label={<Icon type="text-align-justify" />}/>
                    </ControlDropdownButtonGroup>
                    <ControlDropdownButtonGroup label={<Icon type="bullets" />} onChange={v => console.log(v)}>
                      <ControlDropdownButtonOption value="bullets" label={<Icon type="bullets" />}/>
                      <ControlDropdownButtonOption value="numbered" label={<Icon type="numbered" />}/>
                    </ControlDropdownButtonGroup>
                    <ControlToggleButton label={<Icon type="indent-left" />} onClick={() => textIndent.decrease()}/>
                    <ControlToggleButton label={<Icon type="indent-right" />} onClick={() => textIndent.increase()}/>
                    <ControlToggleButton label={<Icon type="text-direction-ltr" />} />
                </ControlButtonGroup>
                <Divider type="long" />
                <Accordian label="Effects" >
                  <TextEffect>
                    <span className="text-none-icon"></span>
                    <TextEffectButton key="effect_1" label="A" textShadow="rgba(255,255,255,0.6) 1px 1px 1px, rgba(0,0,0,0.6) -1px -1px 1px" onClick={() => textEffect.setEffect('effect_1')}/>
                    <TextEffectButton key="effect_2" label="B" textShadow="rgba(0,0,0,0.298) 0px 5px 0px" onClick={() => textEffect.setEffect('effect_2')}/>
                    <TextEffectButton key="effect_3" label="C" textShadow="rgba(0,0,0,0.4) 0px 4px 5px" onClick={() => textEffect.setEffect('effect_3')}/>
                    <TextEffectButton key="effect_4" label="D" textShadow="rgba(0,0,0,0.498) -1px -1px 0px, rgba(0,0,0,0.498) -1px 1px 0px,rgba(0,0,0,0.498) 1px 1px 0px,rgba(0,0,0,0.498) 1px -1px 0px" onClick={() => textEffect.setEffect('effect_4')}/>
                    <TextEffectButton key="effect_5" label="E" textShadow="rgba(255,255,255) -1px -1px 0px, rgba(255,255,255) -1px 1px 0px, rgba(255,255,255) 1px 1px 0px, rgba(255,255,255) 1px -1px 0px" onClick={() => textEffect.setEffect('effect_5')}/>
                    <TextEffectButton key="effect_6" label="F" textShadow="rgba(255,255,255) 0px 0px 6px" onClick={() => textEffect.setEffect('effect_6')}/>
                    <TextEffectButton key="effect_7" label="G" textShadow="rgb(200,200,200) 1px 1px 0px, rgb(180,180,180) 0px 2px 0px, rgb(160,160,160) 0px 3px 0px, rgb(140,140,140, 0.498) 0px 4px 0px, rgb(120,120,120) 0px 0px 0px, rgb(0,0,0,0.498) 0px 5px 10px" onClick={() => textEffect.setEffect('effect_7')}/>
                    <TextEffectButton key="effect_8" label="H" textShadow="rgb(255,255,255) 3px 3px 0px, rgba(0,0,0,0.2) 6px 6px 0px" onClick={() => textEffect.setEffect('effect_8')}/>
                    <TextEffectButton key="effect_9" label="I" textShadow="rgba(10,189,240,0.298) 3px 3px 0px, rgba(254,1,1,0.298) -3px -3px 0px" onClick={() => textEffect.setEffect('effect_9')}/>
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
