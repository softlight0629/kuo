import React, { Component } from 'react';
import { Input, Select, Radio, Checkbox } from 'antd';
import PanelWrapper from '../../PanelWrapper';
import { observer , inject } from 'mobx-react';
import { withRouter } from 'react-router';
import {
  Dropdown,
  Divider,
  SectionDivider,
  RadioButtonGroup,
  CheckboxGroup,
  ToggleSwitch,
  TextInput,
} from '../../Component';
import ScrollBar from '../../../../../../components/ScrollBar';
import './index.less';

const Types = [
  'Text',
  'Password',
  'Number',
  'Email',
  'URL',
  'Phone Number',
];

const Option = Select.Option;

@observer
class SetInputTypePanel extends Component {

  close() {
  }


  render() {
    const { astm } = this.props;
    const { opts, store } = astm;

    const types = [];
    for (let i = 0; i < Types.length; i++) {
      types.push(<Option key={i} value={Types[i]}>{Types[i]}</Option>);
    }
    return (
      <PanelWrapper title="Input Settings" onClose={this.close.bind(this)}>
        <div className="set-input-panel">
          <div className="inner-container">
            <div className="content-wrapper">
              <ScrollBar>
                <div className="section">
                  <Dropdown label="Type:" value={opts.type}  options={types} onChange={v => opts.setInputType(v)}/>
                  <Divider type="long" />
                  <SectionDivider content="Text Settings" />
                  <Divider type="long" />
                  <CheckboxGroup label="General Settings" >
                    <Checkbox value="A" checked={opts.required} onChange={e => opts.setRequired(!!e.target.checked)} >Required</Checkbox>
                    <Checkbox value="B" checked={opts.readOnly} onChange={e => opts.setReadOnly(!!e.target.checked)} >Read only</Checkbox>
                  </CheckboxGroup>
                  <Divider type="long" />
                  <RadioButtonGroup label="Show text on load" value={opts.showTextOnLoad} onChange={e => opts.setShowTextOnLoad(e.target.value)}>
                    <Radio value="None">None</Radio>
                    <Radio value="PlaceholderText">Placeholder text</Radio>
                    <Radio value="InitialText">Initial text</Radio>
                    <Radio value="InitialAndPlaceholderText">Initial text then placeholder text</Radio>
                  </RadioButtonGroup>
                  <Divider type="short" />
                  <TextInput label="Placeholder text" value={store.placeholderText} placeholder="Add it here..." onChange={e => store.setPlaceholderText(e.target.value)}/>
                  <Divider type="short" />
                  <TextInput label="Initial text" value={store.initialText} placeholder="Enter the initial text" onChange={e => store.setInitialText(e.target.value)} />
                  <Divider type="long" />
                  <ToggleSwitch label="Limit length" checked={opts.enableLimitLength} onChange={v => opts.setEnableLimitLength(v)}/>
                  <Divider type="long" />
                  <ToggleSwitch label="Add pattern validation" checked={opts.enablePatternValidation} onChange={v => opts.setEnablePatternValidation(v)} />
                </div>
              </ScrollBar>
            </div>
          </div>
        </div>
      </PanelWrapper>
    )
  }
}

export default SetInputTypePanel;
